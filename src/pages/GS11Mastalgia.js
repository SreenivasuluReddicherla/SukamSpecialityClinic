import React, { useState } from 'react';
import './RP1InfertilityInsights.css';

const quizData = [
  {
    question: "Mastalgia refers to:",
    options: ["Breast pain", "Bone pain", "Skin irritation", "Lung congestion"],
    answer: "Breast pain"
  },
  {
    question: "True or False: All breast pain is due to cancer.",
    options: ["True", "False"],
    answer: "False"
  },
  {
    question: "What is a common trigger for cyclic mastalgia?",
    options: ["Hormonal changes", "Tooth infection", "Poor vision", "Dehydration"],
    answer: "Hormonal changes"
  },
  {
    question: "Which of these can help ease breast pain?",
    options: ["Supportive bra", "Caffeine", "Cold drinks", "Running without support"],
    answer: "Supportive bra"
  },
  {
    question: "When should you see a doctor for mastalgia?",
    options: [
      "If pain persists or worsens",
      "If it interferes with daily life",
      "If associated with lumps or discharge",
      "All of the above"
    ],
    answer: "All of the above"
  }
];

const Mastalgia = () => {
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
      <h1>🟠 Mastalgia</h1>
      <p className="lead">“Sore, swollen, and often hormonal.”</p>

      <section className="info-section">
        <p>
          Mastalgia refers to breast pain, which can be cyclic (related to menstrual periods) or non-cyclic. It’s one of the most common breast concerns among women and is usually not a sign of cancer.
        </p>

        <h3>Common Causes:</h3>
        <ul>
          <li>Hormonal fluctuations (e.g., during periods, pregnancy, menopause)</li>
          <li>Fibrocystic breast changes</li>
          <li>Injury or strain of chest muscles</li>
          <li>Certain medications (like hormonal therapies)</li>
          <li>Cysts or infections in the breast</li>
        </ul>

        <h3>When to See a Doctor?</h3>
        <ul>
          <li>Persistent pain beyond a few weeks</li>
          <li>Localized, non-cyclic pain</li>
          <li>Accompanied by a lump or nipple discharge</li>
          <li>Interferes with daily activities or sleep</li>
        </ul>

        <h3>How We Help:</h3>
        <ul>
          <li>Detailed history and breast examination</li>
          <li>Ultrasound or mammogram if needed</li>
          <li>Pain relief with anti-inflammatory medication</li>
          <li>Hormonal treatment for cyclic pain if necessary</li>
          <li>Lifestyle advice and reassurance</li>
        </ul>

        <h3>Tips to Ease Breast Pain:</h3>
        <ul>
          <li>Wear a well-fitting, supportive bra</li>
          <li>Apply warm compresses</li>
          <li>Reduce caffeine and salt intake</li>
          <li>Try evening primrose oil or vitamin E supplements (under supervision)</li>
        </ul>

        <h3>🚫 Myth vs Fact:</h3>
        <ul>
          <li><strong>❌ Myth:</strong> “Breast pain always means breast cancer.”<br /><strong>✅ Truth:</strong> Most breast pain is not linked to cancer and is treatable.</li>
          <li><strong>❌ Myth:</strong> “Only older women get mastalgia.”<br /><strong>✅ Truth:</strong> It can affect women of any age, especially during reproductive years.</li>
        </ul>
      </section>

      <section className="quiz-section">
        <h2>🧠 Mastalgia Quiz — Test Your Knowledge!</h2>

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
                      {selectedAnswers[idx] === q.answer ? 'Correct' : 'Incorrect'} (Your Answer: {selectedAnswers[idx]})
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

export default Mastalgia;
