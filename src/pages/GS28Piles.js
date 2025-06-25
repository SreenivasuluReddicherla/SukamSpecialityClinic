import React, { useState } from 'react';
import './RP1InfertilityInsights.css';

const quizData = [
  {
    question: "What is a common cause of hemorrhoids?",
    options: ["Prolonged sitting", "Drinking water", "High-fiber diet", "Walking"],
    answer: "Prolonged sitting"
  },
  {
    question: "Which symptom suggests hemorrhoids?",
    options: ["Bright red rectal bleeding", "Headache", "Chest pain", "Cough"],
    answer: "Bright red rectal bleeding"
  },
  {
    question: "True or False: Hemorrhoids can be prevented by a high-fiber diet.",
    options: ["True", "False"],
    answer: "True"
  },
  {
    question: "What minimally invasive procedure can treat hemorrhoids?",
    options: ["Rubber band ligation", "Appendectomy", "Cataract surgery", "Tonsillectomy"],
    answer: "Rubber band ligation"
  },
  {
    question: "When should you see a doctor about hemorrhoids?",
    options: ["If bleeding is heavy or persistent", "If symptoms worsen", "If pain is severe", "All of the above"],
    answer: "All of the above"
  }
];

const Piles = () => {
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
      <h1>🟠 Hemorrhoids (Piles)</h1>
      <p className="lead">“Swollen veins that cause discomfort down under.”</p>

      <section className="info-section">
        <p>
          Hemorrhoids, commonly known as piles, are swollen blood vessels in and around the anus and lower rectum. They can cause pain, itching, bleeding during bowel movements, and a feeling of fullness or lump near the anus.
        </p>

        <h3>🔍 Causes of Hemorrhoids</h3>
        <ul>
          <li>Straining during bowel movements</li>
          <li>Chronic constipation or diarrhea</li>
          <li>Prolonged sitting or standing</li>
          <li>Pregnancy and childbirth</li>
          <li>Obesity and poor diet</li>
          <li>Aging and weakening of supporting tissues</li>
        </ul>

        <h3>🚩 Symptoms to Recognize</h3>
        <ul>
          <li>Pain or discomfort around the anus</li>
          <li>Bright red bleeding during or after bowel movements</li>
          <li>Itching or irritation</li>
          <li>Swelling or lumps near the anus</li>
          <li>Mucus discharge</li>
        </ul>

        <h3>🏥 Diagnosis & Treatment at Sukam</h3>
        <ul>
          <li>Detailed history and physical exam including inspection and digital rectal exam</li>
          <li>Anoscopy or proctoscopy if needed</li>
          <li>Lifestyle changes: high-fiber diet, hydration</li>
          <li>Topical creams, stool softeners, and pain relievers</li>
          <li>Minimally invasive procedures: rubber band ligation, sclerotherapy</li>
          <li>Surgery: hemorrhoidectomy for severe or persistent cases</li>
        </ul>

        <h3>🍽️ Tips to Prevent & Manage Hemorrhoids</h3>
        <ul>
          <li>✔ Eat plenty of fiber-rich foods like fruits, vegetables, and whole grains</li>
          <li>✔ Drink plenty of water daily</li>
          <li>✔ Avoid prolonged sitting or straining</li>
          <li>✔ Exercise regularly to improve bowel function</li>
          <li>✔ Maintain a healthy weight</li>
        </ul>

        <h3>🧠 Myth-Busting</h3>
        <ul>
          <li><strong>❌ “Bleeding from hemorrhoids is always dangerous.”</strong><br />✅ Truth: It’s usually benign but should always be evaluated.</li>
          <li><strong>❌ “Surgery is the only cure for hemorrhoids.”</strong><br />✅ Truth: Many cases respond well to conservative treatment.</li>
        </ul>
      </section>

      <section className="quiz-section">
        <h2>🧠 Quick Quiz — Hemorrhoids</h2>

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

export default Piles;
