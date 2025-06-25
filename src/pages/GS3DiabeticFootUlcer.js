import React, { useState } from 'react';
import './RP1InfertilityInsights.css';

const quizData = [
  {
    question: "Why are diabetics prone to foot ulcers?",
    options: [
      "Nerve damage and poor blood flow",
      "High blood pressure",
      "Eye problems",
      "Allergies"
    ],
    answer: "Nerve damage and poor blood flow"
  },
  {
    question: "True or False: Walking barefoot is safe if you have diabetes.",
    options: ["True", "False"],
    answer: "False"
  }
];

const DiabeticFootUlcer = () => {
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
      <h1>🦶 Diabetic Foot Ulcer</h1>
      <p className="lead">“A small sore with high stakes for diabetics.”</p>

      <section className="info-section">
        <p>
          People with diabetes can develop foot ulcers due to poor blood flow and nerve damage. These ulcers may seem minor but can lead to serious infections and complications if untreated.
        </p>

        <h3>🔎 Causes:</h3>
        <ul>
          <li>Nerve damage reducing pain sensation</li>
          <li>Poor circulation slowing healing</li>
          <li>Minor injuries or pressure points on feet</li>
        </ul>

        <h3>🩺 When to See a Doctor?</h3>
        <ul>
          <li>Any sore or wound on the foot lasting more than a few days</li>
          <li>Signs of infection like redness, swelling, or pus</li>
          <li>Increasing pain or foul smell</li>
        </ul>

        <h3>🏥 How We Help:</h3>
        <ul>
          <li>Comprehensive foot examination</li>
          <li>Wound cleaning and dressing</li>
          <li>Antibiotics for infections</li>
          <li>Offloading pressure from ulcers</li>
          <li>Education on foot care and blood sugar control</li>
        </ul>

        <h3>🧼 Tips for Diabetic Foot Care:</h3>
        <ul>
          <li>Check feet daily for cuts or sores</li>
          <li>Wear comfortable, well-fitting shoes</li>
          <li>Keep feet clean and moisturized</li>
          <li>Avoid walking barefoot</li>
          <li>Control blood sugar levels</li>
        </ul>

        <h3>🚫 Myth vs Fact:</h3>
        <ul>
          <li><strong>❌ Myth:</strong> “If you don’t feel pain, the ulcer isn’t serious.”<br /><strong>✅ Truth:</strong> Lack of pain can mask serious damage in diabetic ulcers.</li>
        </ul>
      </section>

      <section className="quiz-section">
        <h2>🧠 Diabetic Foot Ulcer Quiz — Test Your Knowledge!</h2>

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

export default DiabeticFootUlcer;
