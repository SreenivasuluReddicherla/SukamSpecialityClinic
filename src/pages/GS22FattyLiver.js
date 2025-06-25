import React, { useState } from 'react';
import './RP1InfertilityInsights.css';

const quizData = [
  {
    question: "What is a common cause of fatty liver?",
    options: ["Obesity", "Allergies", "High blood pressure", "Arthritis"],
    answer: "Obesity"
  },
  {
    question: "True or False: Fatty liver always causes symptoms early on.",
    options: ["True", "False"],
    answer: "False"
  },
  {
    question: "Which lifestyle change helps improve fatty liver?",
    options: ["Healthy diet and exercise", "Smoking", "Increased alcohol intake", "Sedentary lifestyle"],
    answer: "Healthy diet and exercise"
  },
  {
    question: "Which test helps diagnose fatty liver?",
    options: ["Liver ultrasound", "ECG", "Kidney function test", "Hearing test"],
    answer: "Liver ultrasound"
  }
];

const FattyLiver = () => {
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
      <h1>🟠 Fatty Liver</h1>
      <p className="lead">“A silent overload that weighs down your liver.”</p>

      <section className="info-section">
        <p>Fatty liver happens when excess fat builds up in your liver cells. It often causes no symptoms but can lead to inflammation and damage over time, increasing the risk of liver disease. Lifestyle changes can reverse fatty liver and keep your liver healthy.</p>

        <h3>What Causes Fatty Liver?</h3>
        <ul>
          <li>Overweight or obesity</li>
          <li>High cholesterol or triglycerides</li>
          <li>Diabetes or insulin resistance</li>
          <li>Excessive alcohol intake</li>
          <li>Certain medications or rapid weight loss</li>
        </ul>

        <h3>When to See a Doctor?</h3>
        <ul>
          <li>Persistent fatigue or discomfort in the upper right abdomen</li>
          <li>Abnormal liver function blood tests</li>
          <li>Risk factors like obesity, diabetes, or heavy alcohol use</li>
          <li>Family history of liver disease</li>
        </ul>

        <h3>How Do We Help?</h3>
        <ul>
          <li>Blood tests and liver ultrasound for diagnosis</li>
          <li>Lifestyle advice focusing on diet and exercise</li>
          <li>Management of related conditions like diabetes and cholesterol</li>
          <li>Monitoring for progression to fibrosis or cirrhosis</li>
          <li>Referral to specialists for advanced liver disease</li>
        </ul>

        <h3>Tips for Liver Health:</h3>
        <ul>
          <li>✔ Maintain a healthy weight with balanced diet and regular exercise</li>
          <li>✔ Limit alcohol intake or avoid it altogether</li>
          <li>✔ Control blood sugar and cholesterol levels</li>
          <li>✔ Avoid unnecessary medications or supplements without doctor approval</li>
        </ul>

        <h3>🧠 Myth-Busting:</h3>
        <ul>
          <li><strong>❌ “Fatty liver only happens to alcoholics.”</strong><br />✅ Truth: Non-alcoholic fatty liver is very common and linked to lifestyle factors.</li>
          <li><strong>❌ “You can feel fatty liver with pain in the liver area.”</strong><br />✅ Truth: Fatty liver often causes no symptoms until advanced stages.</li>
        </ul>
      </section>

      <section className="quiz-section">
        <h2>🧠 Quick Quiz — Fatty Liver</h2>

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

export default FattyLiver;
