import React, { useState } from 'react';
import './RP1InfertilityInsights.css';

const quizData = [
  {
    question: "What is a liver abscess?",
    options: ["Pus collection in the liver", "Cancerous tumor", "Fatty deposit", "Blood clot"],
    answer: "Pus collection in the liver"
  },
  {
    question: "True or False: Liver abscess can cause high fever.",
    options: ["True", "False"],
    answer: "True"
  },
  {
    question: "How is liver abscess diagnosed?",
    options: ["Imaging like ultrasound or CT scan", "Hearing test", "ECG", "Allergy test"],
    answer: "Imaging like ultrasound or CT scan"
  }
];

const LiverAbscess = () => {
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
      <h1>🟠 Liver Abscess</h1>
      <p className="lead">“A pocket of pus where none should be.”</p>

      <section className="info-section">
        <p>
          A liver abscess is a collection of infected pus in the liver, usually due to bacteria or parasites. It can cause fever, pain, and serious illness if not treated promptly.
        </p>

        <h3>What Causes Liver Abscess?</h3>
        <ul>
          <li>Bacterial infections spreading from other body parts</li>
          <li>Amoebic infection from contaminated food/water</li>
          <li>Complications of gallbladder or bile duct infections</li>
          <li>Trauma or surgery involving the liver</li>
        </ul>

        <h3>When to See a Doctor?</h3>
        <ul>
          <li>High fever with chills</li>
          <li>Pain in the upper right abdomen</li>
          <li>Unexplained weight loss or weakness</li>
          <li>Jaundice or nausea</li>
        </ul>

        <h3>How Do We Help?</h3>
        <ul>
          <li>Blood tests and imaging (ultrasound/CT scan) for diagnosis</li>
          <li>Antibiotic or antiparasitic medication</li>
          <li>Drainage of abscess if large or unresponsive to medicines</li>
          <li>Close monitoring and follow-up care</li>
        </ul>

        <h3>Tips for Prevention:</h3>
        <ul>
          <li>✔ Practice good hygiene and safe food habits</li>
          <li>✔ Treat infections early and completely</li>
          <li>✔ Avoid untreated water and unsanitary conditions</li>
        </ul>

        <h3>🧠 Myth-Busting:</h3>
        <ul>
          <li><strong>❌ “Liver abscess can heal without treatment.”</strong><br />✅ Truth: Liver abscess requires prompt medical care to avoid complications.</li>
        </ul>
      </section>

      <section className="quiz-section">
        <h2>🧠 Quick Quiz — Liver Abscess</h2>

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

export default LiverAbscess;
