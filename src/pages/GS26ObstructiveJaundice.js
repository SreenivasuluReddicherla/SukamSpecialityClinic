import React, { useState } from 'react';
import './RP1InfertilityInsights.css';

const quizData = [
  {
    question: "What is a key symptom of obstructive jaundice?",
    options: ["Yellowing skin and eyes", "Cough", "Headache", "Joint pain"],
    answer: "Yellowing skin and eyes"
  },
  {
    question: "True or False: Obstructive jaundice can be caused by gallstones.",
    options: ["True", "False"],
    answer: "True"
  }
];

const ObstructiveJaundice = () => {
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
      <h1>🟠 Obstructive Jaundice</h1>
      <p className="lead">“Bile backs up, and your eyes show the story.”</p>

      <section className="info-section">
        <p>
          Obstructive jaundice happens when the flow of bile is blocked, causing yellowing of the skin and eyes. It’s a sign of underlying problems like gallstones, tumors, or strictures needing immediate attention.
        </p>

        <h3>What Causes Obstructive Jaundice?</h3>
        <ul>
          <li>Gallstones blocking bile ducts</li>
          <li>Tumors of pancreas, bile duct, or liver</li>
          <li>Bile duct strictures or inflammation</li>
          <li>Pancreatitis or infections</li>
        </ul>

        <h3>When to See a Doctor?</h3>
        <ul>
          <li>Yellowing of skin and eyes</li>
          <li>Dark urine and pale stools</li>
          <li>Itching all over the body</li>
          <li>Abdominal pain or fever</li>
        </ul>

        <h3>How Do We Help?</h3>
        <ul>
          <li>Blood tests to check liver and bile function</li>
          <li>Imaging like ultrasound, CT, or MRCP to locate blockage</li>
          <li>Endoscopic or surgical procedures to relieve obstruction</li>
          <li>Treatment of underlying cause</li>
        </ul>

        <h3>Tips:</h3>
        <ul>
          <li>✔ Seek medical advice promptly if jaundice appears</li>
          <li>✔ Avoid self-medication</li>
          <li>✔ Follow up regularly if you have gallbladder or liver issues</li>
        </ul>
      </section>

      <section className="quiz-section">
        <h2>🧠 Quick Quiz — Obstructive Jaundice</h2>

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

export default ObstructiveJaundice;
