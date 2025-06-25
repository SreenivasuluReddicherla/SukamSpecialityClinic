import React, { useState } from 'react';
import './RP1InfertilityInsights.css';

const quizData = [
  {
    question: "What happens to metabolism in thyrotoxicosis?",
    options: ["Speeds up", "Slows down", "Stays the same", "Stops"],
    answer: "Speeds up"
  },
  {
    question: "Which disease is a common cause of thyrotoxicosis?",
    options: ["Graves’ disease", "Diabetes", "Hypertension", "Asthma"],
    answer: "Graves’ disease"
  },
  {
    question: "True or False: Thyrotoxicosis can cause rapid heartbeat.",
    options: ["True", "False"],
    answer: "True"
  },
  {
    question: "What symptom is common in thyrotoxicosis?",
    options: [
      "Weight loss despite increased appetite",
      "Weight gain",
      "Decreased sweating",
      "Cold intolerance"
    ],
    answer: "Weight loss despite increased appetite"
  },
  {
    question: "How is thyrotoxicosis diagnosed?",
    options: [
      "Blood tests for thyroid hormones",
      "X-ray of chest",
      "Hearing test",
      "Skin biopsy"
    ],
    answer: "Blood tests for thyroid hormones"
  }
];

const Thyrotoxicosis = () => {
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const handleOptionClick = (questionIndex, option) => {
    setSelectedAnswers({ ...selectedAnswers, [questionIndex]: option });
  };

  const calculateResults = () => {
    let correct = 0;
    quizData.forEach((q, i) => {
      if (selectedAnswers[i] === q.answer) correct++;
    });
    return { correct, wrong: quizData.length - correct };
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
      <h1>🟠 Thyrotoxicosis</h1>
      <p className="lead">“Thyroid in overdrive, body on edge.”</p>

      <section className="info-section">
        <p>
          Thyrotoxicosis refers to the condition where your thyroid gland produces excessive thyroid hormones, speeding up your body’s metabolism. This “overdrive” state can cause rapid heartbeat, weight loss, nervousness, and heat intolerance, among other symptoms.
        </p>

        <h3>🔎 Common Causes:</h3>
        <ul>
          <li>Graves’ disease (autoimmune hyperthyroidism)</li>
          <li>Toxic multinodular goiter</li>
          <li>Thyroiditis (inflammation releasing excess hormone)</li>
          <li>Excessive iodine intake or thyroid medication</li>
        </ul>

        <h3>🩺 When to See a Doctor?</h3>
        <ul>
          <li>Rapid heartbeat or palpitations</li>
          <li>Unexplained weight loss despite good appetite</li>
          <li>Tremors, sweating, and nervousness</li>
          <li>Eye changes like bulging or irritation (in Graves’ disease)</li>
          <li>Heat intolerance and fatigue</li>
        </ul>

        <h3>💼 How We Help:</h3>
        <ul>
          <li>Physical exam and detailed history</li>
          <li>Blood tests for thyroid hormones (T3, T4) and TSH</li>
          <li>Imaging with thyroid ultrasound or radioactive iodine uptake scan</li>
          <li>Medications to reduce hormone production or block effects</li>
          <li>In some cases, surgery or radioactive iodine therapy</li>
          <li>Ongoing monitoring to prevent complications</li>
        </ul>

        <h3>🌿 Tips for Managing Thyrotoxicosis:</h3>
        <ul>
          <li>Take medications as prescribed</li>
          <li>Avoid stimulants like caffeine</li>
          <li>Maintain a balanced diet</li>
          <li>Report new or worsening symptoms immediately</li>
        </ul>

        <h3>🚫 Myth vs Fact:</h3>
        <ul>
          <li><strong>❌ Myth:</strong> “Thyrotoxicosis only affects the elderly.”<br /><strong>✅ Truth:</strong> It can affect any age group.</li>
          <li><strong>❌ Myth:</strong> “Weight loss in thyrotoxicosis is healthy.”<br /><strong>✅ Truth:</strong> It’s unintentional and can lead to serious problems.</li>
        </ul>
      </section>

      <section className="quiz-section">
        <h2>🧠 Thyrotoxicosis Quiz — Test Your Knowledge!</h2>

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

export default Thyrotoxicosis;
