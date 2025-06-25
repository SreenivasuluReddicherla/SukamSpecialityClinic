import React, { useState } from 'react';
import './RP1InfertilityInsights.css';

const quizData = [
  {
    question: "What is a serious risk if a DVT clot breaks loose?",
    options: ["Heart attack", "Pulmonary embolism", "Stroke", "Kidney failure"],
    answer: "Pulmonary embolism"
  },
  {
    question: "Which factor increases DVT risk?",
    options: ["Prolonged immobility", "Drinking water", "Exercise", "Balanced diet"],
    answer: "Prolonged immobility"
  },
  {
    question: "True or False: DVT symptoms always include severe pain.",
    options: ["True", "False"],
    answer: "False"
  }
];

const DeepVeinThrombosis = () => {
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
      <h1>🟠 Deep Vein Thrombosis (DVT)</h1>
      <p className="lead">“A quiet clot that can cause a storm.”</p>

      <section className="info-section">
        <p>
          Deep Vein Thrombosis (DVT) occurs when a blood clot forms in the deep veins, usually in the legs.
          While it may start silently with mild symptoms or none at all, DVT can be dangerous if the clot breaks
          loose and travels to the lungs, causing a pulmonary embolism — a potentially life-threatening emergency.
        </p>

        <h3>📌 What Causes DVT?</h3>
        <ul>
          <li>Prolonged immobility (long flights, bed rest)</li>
          <li>Surgery or trauma</li>
          <li>Cancer and certain medications</li>
          <li>Inherited blood clotting disorders</li>
          <li>Obesity, smoking, and pregnancy</li>
        </ul>

        <h3>🛑 Signs and Symptoms:</h3>
        <ul>
          <li>Swelling, warmth, and redness in one leg</li>
          <li>Pain or tenderness, often in the calf</li>
          <li>Leg feeling heavy or tight</li>
          <li>Sometimes no symptoms at all</li>
        </ul>

        <h3>🚨 When to Seek Medical Attention?</h3>
        <ul>
          <li>Sudden leg swelling or pain</li>
          <li>Shortness of breath or chest pain (urgent!)</li>
          <li>Redness or warmth over the leg</li>
        </ul>

        <h3>🔍 How We Help:</h3>
        <ul>
          <li>Thorough clinical assessment</li>
          <li>Doppler ultrasound to detect clots</li>
          <li>Blood tests including D-dimer</li>
          <li>Anticoagulant medications to prevent clot growth and embolism</li>
          <li>Monitoring and lifestyle advice to reduce risks</li>
          <li>Follow-up imaging and adjustment of therapy</li>
        </ul>

        <h3>🧼 Tips to Prevent DVT:</h3>
        <ul>
          <li>Move regularly during long trips</li>
          <li>Stay hydrated</li>
          <li>Avoid smoking</li>
          <li>Maintain healthy weight</li>
          <li>Follow post-surgery care instructions carefully</li>
        </ul>

        <h3>🚫 Myth vs Fact:</h3>
        <ul>
          <li><strong>❌ Myth:</strong> “DVT always causes obvious pain.”<br /><strong>✅ Truth:</strong> Sometimes DVT can be silent or cause vague symptoms.</li>
          <li><strong>❌ Myth:</strong> “Only elderly people get DVT.”<br /><strong>✅ Truth:</strong> Anyone can develop DVT, especially with risk factors.</li>
        </ul>
      </section>

      <section className="quiz-section">
        <h2>🧠 Deep Vein Thrombosis Quiz — Test Your Knowledge!</h2>

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

export default DeepVeinThrombosis;
