import React, { useState } from 'react';
import './RP1InfertilityInsights.css';

const quizData = [
  {
    question: "What is a common cause of intestinal obstruction?",
    options: ["Common cold", "Adhesions from surgery", "Migraine headaches", "Diabetes"],
    answer: "Adhesions from surgery"
  },
  {
    question: "Which symptom is typical of intestinal obstruction?",
    options: ["Frequent urination", "Runny nose", "Chest pain", "Abdominal bloating and vomiting"],
    answer: "Abdominal bloating and vomiting"
  },
  {
    question: "True or False: Surgery is sometimes needed to treat intestinal obstruction.",
    options: ["True", "False"],
    answer: "True"
  },
  {
    question: "Which imaging test helps diagnose intestinal obstruction?",
    options: ["ECG", "Skin biopsy", "CT scan", "Hearing test"],
    answer: "CT scan"
  },
  {
    question: "What should you do if you suspect intestinal obstruction?",
    options: ["Ignore symptoms", "Take rest and wait for it to resolve", "Self-medicate with laxatives only", "Seek urgent medical care"],
    answer: "Seek urgent medical care"
  }
];

const IntestinalObstruction = () => {
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const handleOptionClick = (questionIndex, option) => {
    setSelectedAnswers({ ...selectedAnswers, [questionIndex]: option });
  };

  const calculateResults = () => {
    let correct = 0;
    quizData.forEach((q, i) => {
      if (selectedAnswers[i] === q.answer) correct++;
    });
    return {
      correct,
      wrong: quizData.length - correct
    };
  };

  const handleTryAgain = () => {
    setSelectedAnswers({});
    setShowResults(false);
  };

  const results = calculateResults();
  const totalQuestions = quizData.length;
  const answeredCount = Object.keys(selectedAnswers).length;
  const progressPercentage = (answeredCount / totalQuestions) * 100;

  return (
    <div className="infertility-container">
      <h1>🟠 Intestinal Obstruction</h1>
      <p className="lead">“Traffic jam in your gut.”</p>

      <section className="info-section">
        <p>
          Intestinal obstruction occurs when the passage of food, fluids, and gas through the intestine is blocked. This condition can become life-threatening if left untreated.
        </p>

        <h3>🔍 Causes of Intestinal Obstruction</h3>
        <ul>
          <li>Adhesions (scar tissue) from previous surgeries</li>
          <li>Hernias that trap intestines</li>
          <li>Tumors blocking the bowel</li>
          <li>Inflammatory bowel disease like Crohn’s</li>
          <li>Intussusception (telescoping of intestine)</li>
          <li>Volvulus (twisting of intestine)</li>
          <li>Severe constipation or foreign bodies</li>
        </ul>

        <h3>🚩 Symptoms to Recognize</h3>
        <ul>
          <li>Severe abdominal pain and cramping</li>
          <li>Abdominal bloating and swelling</li>
          <li>Vomiting (may be green or fecal-smelling)</li>
          <li>Constipation or inability to pass gas</li>
          <li>Dehydration and weakness</li>
        </ul>

        <h3>🏥 Diagnosis & Treatment at Sukam</h3>
        <ul>
          <li>Physical exam and medical history review</li>
          <li>Abdominal X-rays or CT scan to identify blockage</li>
          <li>Blood tests for dehydration, infection</li>
          <li>Nasogastric tube to relieve stomach pressure</li>
          <li>IV fluids and electrolytes</li>
          <li>Surgery if obstruction does not resolve</li>
        </ul>

        <h3>🍽️ Tips During Recovery</h3>
        <ul>
          <li>✔ Follow a soft or liquid diet as advised</li>
          <li>✔ Avoid high-fiber or hard-to-digest foods initially</li>
          <li>✔ Stay hydrated</li>
          <li>✔ Don’t miss follow-ups or re-evaluation</li>
          <li>✔ Avoid heavy lifting post-surgery</li>
        </ul>

        <h3>🧠 Myth-Busting:</h3>
        <ul>
          <li><strong>❌ “Stomach pain always means obstruction.”</strong><br />✅ Truth: Only persistent pain with vomiting, bloating, and constipation may indicate obstruction.</li>
          <li><strong>❌ “Laxatives can fix any blockage.”</strong><br />✅ Truth: Some blockages need surgery—don’t delay medical attention.</li>
        </ul>
      </section>

      <section className="quiz-section">
        <h2>🧠 Quick Quiz — Intestinal Obstruction</h2>

        <div className="progress-bar-container">
          <div className="progress-bar" style={{ width: `${progressPercentage}%` }}></div>
        </div>

        {quizData.map((q, i) => (
          <div key={i} className="quiz-question">
            <p>{i + 1}. {q.question}</p>
            <div className="options">
              {q.options.map((opt, idx) => (
                <button
                  key={idx}
                  className={`option-button ${selectedAnswers[i] === opt ? 'selected' : ''}`}
                  onClick={() => handleOptionClick(i, opt)}
                  disabled={showResults}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>
        ))}

        {!showResults && answeredCount === totalQuestions && (
          <button className="submit-button" onClick={() => setShowResults(true)}>See Results</button>
        )}

        {showResults && (
          <div className="results-section">
            <p>✅ Correct Answers: {results.correct}</p>
            <p>❌ Wrong Answers: {results.wrong}</p>

            <div className="score-breakdown">
              <h4>Detailed Score Breakdown</h4>
              <ul>
                {quizData.map((q, idx) => (
                  <li key={idx}>
                    <strong>Q{idx + 1}:</strong> {q.question} —&nbsp;
                    <span style={{ color: selectedAnswers[idx] === q.answer ? 'green' : 'red' }}>
                      {selectedAnswers[idx] === q.answer ? 'Correct' : `Incorrect (Your Answer: ${selectedAnswers[idx]})`}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="results-buttons">
              <button className="try-again-button" onClick={handleTryAgain}>Try Again</button>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default IntestinalObstruction;
