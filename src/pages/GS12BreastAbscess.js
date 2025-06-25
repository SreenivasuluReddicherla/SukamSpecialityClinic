import React, { useState } from 'react';
import './RP1InfertilityInsights.css';

const quizData = [
  {
    question: "A breast abscess is:",
    options: [
      "A harmless cyst",
      "A pus-filled infection",
      "A milk-filled sac",
      "A muscle spasm"
    ],
    answer: "A pus-filled infection"
  },
  {
    question: "True or False: Breast abscesses only occur in breastfeeding women.",
    options: ["True", "False"],
    answer: "False"
  },
  {
    question: "One common symptom of a breast abscess is:",
    options: ["Itching", "Coldness of skin", "Red, painful swelling", "Hair loss"],
    answer: "Red, painful swelling"
  },
  {
    question: "What is a common treatment for an abscess?",
    options: ["Ignoring it", "Cold showers", "Drainage and antibiotics", "Eye drops"],
    answer: "Drainage and antibiotics"
  },
  {
    question: "Which habit increases the risk of abscesses healing poorly?",
    options: ["Drinking water", "Regular exercise", "Smoking", "Eating fruits"],
    answer: "Smoking"
  }
];

const BreastAbscess = () => {
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
      <h1>🟠 Breast Abscess</h1>
      <p className="lead">“A painful boil that needs a quick fix.”</p>

      <section className="info-section">
        <p>
          A breast abscess is like a red, throbbing alarm bell under your skin — usually caused by a bacterial infection, often in breastfeeding women. It’s hot, swollen, and tender, and it can make daily life feel unbearable. But the good news? It’s highly treatable when caught early.
        </p>

        <h3>What’s Going On Inside?</h3>
        <ul>
          <li>Bacteria sneak in through cracked skin or milk ducts</li>
          <li>An infection builds, forming a pus-filled lump</li>
          <li>Your body fights back — hence the swelling, pain, and even fever</li>
        </ul>

        <h3>Who’s at Risk?</h3>
        <ul>
          <li>Breastfeeding moms (especially with mastitis)</li>
          <li>Women with nipple trauma or piercings</li>
          <li>Diabetics and those with weakened immunity</li>
          <li>Smokers (less healing power = higher risk)</li>
        </ul>

        <h3>Signs You Shouldn’t Ignore:</h3>
        <ul>
          <li>🚨 Hard, painful lump</li>
          <li>🚨 Redness and warmth on the skin</li>
          <li>🚨 Fever or chills</li>
          <li>🚨 Pus discharge from nipple</li>
          <li>🚨 Feeling drained and unwell</li>
        </ul>

        <h3>How Sukam Helps You Heal:</h3>
        <ul>
          <li>Quick clinical diagnosis</li>
          <li>Ultrasound to confirm the abscess</li>
          <li>Antibiotics to knock out the infection</li>
          <li>Drainage — sometimes via needle, sometimes minor surgery</li>
          <li>Supportive care and lactation advice (if breastfeeding)</li>
        </ul>

        <h3>Tips to Prevent and Recover:</h3>
        <ul>
          <li>✔ Keep nipples clean and moisturized if nursing</li>
          <li>✔ Don’t delay treatment for breast pain or redness</li>
          <li>✔ Empty breasts regularly if breastfeeding</li>
          <li>✔ Apply warm compresses for comfort</li>
          <li>✔ Rest and stay hydrated — healing takes energy</li>
        </ul>
      </section>

      <section className="quiz-section">
        <h2>🧠 Quick Quiz — Breast Abscess</h2>

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

export default BreastAbscess;
