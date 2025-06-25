import React, { useState } from 'react';
import './RP1InfertilityInsights.css';

const quizData = [
  {
    question: "What causes varicose veins?",
    options: [
      "Faulty vein valves",
      "Broken bones",
      "Muscle tears",
      "Nerve damage"
    ],
    answer: "Faulty vein valves"
  },
  {
    question: "True or False: Sitting for long hours can worsen varicose veins.",
    options: ["True", "False"],
    answer: "True"
  },
  {
    question: "Which of these helps relieve varicose veins symptoms?",
    options: [
      "Elevating legs",
      "Smoking",
      "Avoiding exercise",
      "Wearing tight shoes"
    ],
    answer: "Elevating legs"
  }
];

const VaricoseVeins = () => {
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
      <h1>🟠 Varicose Veins</h1>
      <p className="lead">“Veins that wind, bulge, and beg for relief.”</p>

      <section className="info-section">
        <p>
          Varicose veins are swollen, twisted veins that usually appear on the legs. They occur when valves inside veins don’t work properly, causing blood to pool.
        </p>

        <h3>🔍 Causes:</h3>
        <ul>
          <li>Weak or damaged vein valves</li>
          <li>Prolonged standing or sitting</li>
          <li>Pregnancy and hormonal changes</li>
          <li>Obesity and genetics</li>
        </ul>

        <h3>🩺 When to See a Doctor?</h3>
        <ul>
          <li>Pain, heaviness, or swelling in legs</li>
          <li>Visible bulging veins</li>
          <li>Skin changes or ulcers near ankles</li>
          <li>Bleeding from veins</li>
        </ul>

        <h3>🏥 How We Help:</h3>
        <ul>
          <li>Physical examination and ultrasound evaluation</li>
          <li>Compression stockings to improve blood flow</li>
          <li>Minimally invasive treatments like sclerotherapy or laser therapy</li>
          <li>Surgery in severe cases</li>
          <li>Lifestyle advice to reduce symptoms</li>
        </ul>

        <h3>✅ Tips for Healthy Veins:</h3>
        <ul>
          <li>Avoid prolonged standing or sitting</li>
          <li>Elevate legs when resting</li>
          <li>Wear compression stockings if advised</li>
          <li>Maintain healthy weight and exercise regularly</li>
        </ul>

        <h3>🚫 Myth vs Fact:</h3>
        <ul>
          <li><strong>❌ Myth:</strong> “Varicose veins are just a cosmetic issue.”<br /><strong>✅ Truth:</strong> They can cause pain and serious complications if untreated.</li>
        </ul>
      </section>

      <section className="quiz-section">
        <h2>🧠 Varicose Veins Quiz — Test Your Knowledge!</h2>

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

export default VaricoseVeins;
