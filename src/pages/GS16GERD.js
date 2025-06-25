import React, { useState } from 'react';
import './RP1InfertilityInsights.css';

const quizData = [
  {
    question: "What is GERD caused by?",
    options: ["Infection in the throat", "Weak stomach valve", "Liver problems", "Low acid production"],
    answer: "Weak stomach valve"
  },
  {
    question: "True or False: GERD only causes chest pain.",
    options: ["True", "False"],
    answer: "False"
  },
  {
    question: "One food that commonly triggers GERD is:",
    options: ["Boiled rice", "Green vegetables", "Spicy fried foods", "Plain toast"],
    answer: "Spicy fried foods"
  },
  {
    question: "Which of the following is not a typical GERD remedy?",
    options: ["Elevating head during sleep", "Eating right before bedtime", "Avoiding large meals", "Reducing caffeine"],
    answer: "Eating right before bedtime"
  },
  {
    question: "What test is commonly done for GERD if needed?",
    options: ["ECG", "Endoscopy", "CT scan of chest", "Colonoscopy"],
    answer: "Endoscopy"
  }
];

const GERD = () => {
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
      <h1>🟠 GERD – Gastroesophageal Reflux Disease</h1>
      <p className="lead">“Acid that climbs and burns where it shouldn’t.”</p>

      <section className="info-section">
        <p>
          GERD occurs when stomach acid flows back into the esophagus, causing irritation and symptoms like heartburn and regurgitation.
        </p>

        <h3>What Causes GERD?</h3>
        <ul>
          <li>🍔 Weak lower esophageal sphincter</li>
          <li>🍟 Fatty, spicy, or acidic foods</li>
          <li>🛌 Lying down soon after eating</li>
          <li>📈 Obesity and abdominal pressure</li>
          <li>💊 Certain medications or smoking</li>
        </ul>

        <h3>Classic Symptoms:</h3>
        <ul>
          <li>Heartburn (especially after meals or at night)</li>
          <li>Sour or bitter taste in mouth</li>
          <li>Trouble swallowing</li>
          <li>Chronic cough or sore throat</li>
          <li>Worsening symptoms when lying down</li>
        </ul>

        <h3>How Sukam Helps:</h3>
        <ul>
          <li>Diagnosis via symptoms or endoscopy</li>
          <li>Lifestyle and dietary guidance</li>
          <li>Medications: antacids, PPIs, H2 blockers</li>
          <li>Monitoring complications (e.g., Barrett’s esophagus)</li>
          <li>Surgery in rare, severe cases</li>
        </ul>

        <h3>Daily Tips to Tame GERD:</h3>
        <ul>
          <li>✔ Eat small, frequent meals</li>
          <li>✔ Avoid eating 2–3 hours before bed</li>
          <li>✔ Limit spicy, citrusy, and fried foods</li>
          <li>✔ Elevate head while sleeping</li>
          <li>✔ Stop smoking, reduce alcohol/caffeine</li>
        </ul>

        <h3>🧠 Myth-Busting:</h3>
        <ul>
          <li><strong>❌ “GERD only happens if you eat too much.”</strong><br />✅ Truth: Even slim people can get GERD due to weak stomach valve.</li>
          <li><strong>❌ “Antacids cure GERD.”</strong><br />✅ Truth: They relieve symptoms but don’t fix the root problem.</li>
        </ul>
      </section>

      <section className="quiz-section">
        <h2>🧠 Quick Quiz — GERD</h2>

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

export default GERD;
