import React, { useState } from 'react';
import './RP1InfertilityInsights.css';

const quizData = [
  {
    question: "What is a hernia?",
    options: ["Bulge through a muscle weakness", "Bone fracture", "Skin infection", "Headache"],
    answer: "Bulge through a muscle weakness"
  },
  {
    question: "Which activity can cause or worsen hernia?",
    options: ["Heavy lifting", "Reading books", "Sleeping", "Drinking water"],
    answer: "Heavy lifting"
  },
  {
    question: "True or False: Hernias can heal without treatment.",
    options: ["True", "False"],
    answer: "False"
  },
  {
    question: "What is a common surgical method for hernia repair?",
    options: ["Laparoscopic repair", "Tooth extraction", "Appendectomy", "Heart surgery"],
    answer: "Laparoscopic repair"
  },
  {
    question: "Which symptom suggests a hernia?",
    options: ["Bulge in the groin or abdomen", "Fever and chills", "Blurred vision", "Chest pain"],
    answer: "Bulge in the groin or abdomen"
  }
];

const Hernia = () => {
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const handleOptionClick = (questionIndex, option) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [questionIndex]: option
    });
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
      <h1>🟠 Hernia</h1>
      <p className="lead">“A bulge that breaks the body’s boundaries.”</p>

      <section className="info-section">
        <p>
          A hernia occurs when an internal organ or tissue pushes through a weak spot in the surrounding muscle or connective tissue. Most commonly, hernias appear in the abdomen or groin, causing a noticeable bulge and discomfort. While hernias don’t always cause pain, they don’t go away on their own and may lead to complications if untreated.
        </p>

        <p>At Sukam Speciality Clinic, we offer precise diagnosis and effective treatments to repair hernias and restore your strength.</p>

        <h3>🔍 Causes and Risk Factors</h3>
        <ul>
          <li>Muscle weakness present at birth or due to aging</li>
          <li>Heavy lifting or straining</li>
          <li>Chronic coughing or constipation</li>
          <li>Obesity</li>
          <li>Previous surgeries or injuries</li>
        </ul>

        <h3>🚩 Symptoms to Recognize</h3>
        <ul>
          <li>Visible bulge or swelling in the groin, abdomen, or scrotum</li>
          <li>Discomfort or pain, especially when bending, lifting, or coughing</li>
          <li>Feeling of heaviness or pressure in the affected area</li>
          <li>In severe cases, nausea, vomiting, or inability to push the bulge back</li>
        </ul>

        <h3>🏥 Diagnosis & Treatment at Sukam</h3>
        <ul>
          <li>Physical examination to identify and assess the hernia</li>
          <li>Ultrasound or CT scan if needed</li>
          <li>Lifestyle changes (avoid lifting/straining)</li>
          <li>Watchful waiting if asymptomatic and small</li>
          <li>Surgical repair (open or laparoscopic)</li>
        </ul>

        <h3>💡 Tips for Prevention and Care</h3>
        <ul>
          <li>✔ Maintain a healthy weight</li>
          <li>✔ Use proper lifting techniques</li>
          <li>✔ Treat chronic cough or constipation</li>
          <li>✔ Strengthen abdominal muscles post-recovery</li>
        </ul>

        <h3>🧠 Myth-Busting</h3>
        <ul>
          <li><strong>❌ “Hernias can heal on their own.”</strong><br />✅ Truth: Hernias require medical treatment to avoid complications.</li>
          <li><strong>❌ “Only surgery can fix a hernia.”</strong><br />✅ Truth: Small, symptom-free hernias may be monitored, but surgery is often recommended.</li>
        </ul>
      </section>

      <section className="quiz-section">
        <h2>🧠 Quick Quiz — Hernia</h2>

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

export default Hernia;
