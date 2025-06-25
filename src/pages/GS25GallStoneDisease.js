import React, { useState } from 'react';
import './RP1InfertilityInsights.css';

const quizData = [
  {
    question: "What causes gallstones?",
    options: ["Imbalance in bile components", "Allergies", "Low blood pressure", "Viral infection"],
    answer: "Imbalance in bile components"
  },
  {
    question: "True or False: Gallstones always cause symptoms.",
    options: ["True", "False"],
    answer: "False"
  },
  {
    question: "What test confirms gallstones?",
    options: ["Ultrasound", "X-ray of the chest", "Blood sugar test", "Hearing test"],
    answer: "Ultrasound"
  }
];

const GallStoneDisease = () => {
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
      <h1>🟠 Gall Stone Disease</h1>
      <p className="lead">“Hard stones, sharp pain, soft groans.”</p>

      <section className="info-section">
        <p>
          Gallstones are hardened deposits that form in the gallbladder. They can block bile flow and cause sudden, intense pain, nausea, and digestive problems. Timely diagnosis and treatment can prevent complications.
        </p>

        <h3>What Causes Gallstones?</h3>
        <ul>
          <li>Imbalance of bile salts, cholesterol, or bilirubin</li>
          <li>Obesity or rapid weight loss</li>
          <li>Certain medical conditions like diabetes or liver disease</li>
          <li>Family history of gallstones</li>
        </ul>

        <h3>When to See a Doctor?</h3>
        <ul>
          <li>Severe pain in the upper right abdomen or back</li>
          <li>Nausea, vomiting after fatty meals</li>
          <li>Fever or jaundice along with pain</li>
          <li>Repeated episodes of abdominal pain</li>
        </ul>

        <h3>How Do We Help?</h3>
        <ul>
          <li>Ultrasound for diagnosis</li>
          <li>Pain management and dietary advice</li>
          <li>Surgical removal of gallbladder (cholecystectomy) when needed</li>
          <li>Monitoring and treatment of complications</li>
        </ul>

        <h3>Tips for Gallbladder Health:</h3>
        <ul>
          <li>✔ Maintain a healthy weight gradually</li>
          <li>✔ Avoid fatty and greasy foods</li>
          <li>✔ Eat smaller, frequent meals to improve digestion</li>
        </ul>

        <h3>🧠 Myth-Busting:</h3>
        <ul>
          <li><strong>❌ “Gallstones always need surgery.”</strong><br />✅ Truth: Some gallstones are symptomless and don’t need immediate surgery.</li>
          <li><strong>❌ “Gallstones cause constant pain.”</strong><br />✅ Truth: Gallstone pain usually comes in attacks, not constant.</li>
        </ul>
      </section>

      <section className="quiz-section">
        <h2>🧠 Quick Quiz — Gall Stone Disease</h2>

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

export default GallStoneDisease;
