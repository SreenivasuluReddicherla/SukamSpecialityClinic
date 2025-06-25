import React, { useState } from 'react';
import './RP1InfertilityInsights.css';

const quizData = [
  {
    question: "What commonly triggers acute pancreatitis?",
    options: ["Gallstones", "Viral cold", "Allergy", "Arthritis"],
    answer: "Gallstones"
  },
  {
    question: "True or False: Acute pancreatitis requires emergency care.",
    options: ["True", "False"],
    answer: "True"
  }
];

const AcutePancreatitis = () => {
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
      <h1>🟠 Acute Pancreatitis</h1>
      <p className="lead">“A fiery flare-up deep in your belly.”</p>

      <section className="info-section">
        <p>
          Acute pancreatitis is sudden inflammation of the pancreas causing severe abdominal pain and digestion problems. It can be life-threatening if not treated early.
        </p>

        <h3>What Causes Acute Pancreatitis?</h3>
        <ul>
          <li>Gallstones blocking pancreatic duct</li>
          <li>Excessive alcohol consumption</li>
          <li>Certain medications or infections</li>
          <li>High triglyceride levels</li>
        </ul>

        <h3>When to See a Doctor?</h3>
        <ul>
          <li>Sudden severe upper abdominal pain</li>
          <li>Nausea and vomiting</li>
          <li>Fever and rapid heartbeat</li>
          <li>Difficulty eating or digesting food</li>
        </ul>

        <h3>How Do We Help?</h3>
        <ul>
          <li>Emergency evaluation and stabilization</li>
          <li>Pain control and intravenous fluids</li>
          <li>Treat underlying cause (e.g., remove gallstones)</li>
          <li>Monitor for complications</li>
        </ul>

        <h3>Tips:</h3>
        <ul>
          <li>✔ Avoid heavy alcohol use</li>
          <li>✔ Manage gallbladder disease promptly</li>
          <li>✔ Maintain healthy triglyceride levels</li>
        </ul>
      </section>

      <section className="quiz-section">
        <h2>🧠 Quick Quiz — Acute Pancreatitis</h2>

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

export default AcutePancreatitis;
