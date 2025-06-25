import React, { useState } from 'react';
import './RP1InfertilityInsights.css';

const quizData = [
  {
    question: "What is a common cause of peripheral arterial occlusion?",
    options: ["A. Atherosclerosis", "B. Viral infection", "C. Allergies", "D. Kidney failure"],
    answer: "A. Atherosclerosis"
  },
  {
    question: "True or False: Smoking increases risk for artery blockage.",
    options: ["True", "False"],
    answer: "True"
  },
  {
    question: "Which symptom suggests peripheral artery disease?",
    options: ["A. Leg cramps while walking", "B. Headache", "C. Blurred vision", "D. Chest pain"],
    answer: "A. Leg cramps while walking"
  }
];

const PeripheralArterialOcclusion = () => {
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
      <h1>🟠 Peripheral Arterial Occlusion</h1>
      <p className="lead">“A heart attack for your legs.”</p>

      <section className="info-section">
        <p>Peripheral arterial occlusion happens when blood flow to your legs is blocked or reduced by clogged arteries. This can cause pain, ulcers, and in severe cases, tissue death.</p>

        <h3>🔍 Causes:</h3>
        <ul>
          <li>Atherosclerosis (fatty plaques in arteries)</li>
          <li>Blood clots blocking vessels</li>
          <li>Smoking and diabetes increase risk</li>
        </ul>

        <h3>🩺 When to See a Doctor?</h3>
        <ul>
          <li>Pain or cramping in legs while walking</li>
          <li>Non-healing wounds on feet or legs</li>
          <li>Cold or numb feet</li>
          <li>Changes in skin color or texture</li>
        </ul>

        <h3>💡 How We Help:</h3>
        <ul>
          <li>Detailed vascular examination</li>
          <li>Doppler ultrasound and angiography for diagnosis</li>
          <li>Medications to improve blood flow and reduce clots</li>
          <li>Procedures like angioplasty or surgery if needed</li>
          <li>Lifestyle advice on smoking cessation, exercise, and diet</li>
        </ul>

        <h3>✅ Tips for Healthy Legs:</h3>
        <ul>
          <li>Don’t smoke</li>
          <li>Exercise regularly to improve circulation</li>
          <li>Manage diabetes and blood pressure</li>
          <li>Inspect feet daily for wounds</li>
        </ul>

        <h3>🚫 Myth vs Fact:</h3>
        <ul>
          <li><strong>❌ Myth:</strong> “Leg pain while walking is just normal aging.”<br /><strong>✅ Truth:</strong> It can be a sign of serious artery blockage needing treatment.</li>
        </ul>
      </section>

      <section className="quiz-section">
        <h2>🧠 Peripheral Arterial Occlusion Quiz — Test Your Knowledge!</h2>

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

export default PeripheralArterialOcclusion;
