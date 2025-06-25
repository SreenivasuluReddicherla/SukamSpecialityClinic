import React, { useState } from 'react';
import './RP1InfertilityInsights.css';

const quizData = [
  {
    question: "What causes a hydrocele?",
    options: [
      "Fluid buildup around the testicle",
      "Bone fracture",
      "Skin rash",
      "Hair loss"
    ],
    answer: "Fluid buildup around the testicle"
  },
  {
    question: "True or False: Hydroceles are usually painful.",
    options: ["True", "False"],
    answer: "False"
  },
  {
    question: "What is a common symptom of hydrocele?",
    options: [
      "Painless scrotal swelling",
      "Chest pain",
      "Headache",
      "Vision changes"
    ],
    answer: "Painless scrotal swelling"
  },
  {
    question: "Which test helps diagnose hydrocele?",
    options: [
      "Ultrasound",
      "ECG",
      "Blood sugar test",
      "X-ray of the chest"
    ],
    answer: "Ultrasound"
  },
  {
    question: "What is the usual treatment if hydrocele does not resolve on its own?",
    options: [
      "Surgical repair",
      "Antibiotics only",
      "Painkillers only",
      "Rest only"
    ],
    answer: "Surgical repair"
  }
];

const Hydrocele = () => {
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
      <h1>🟠 Hydrocele</h1>
      <p className="lead">“A ballooning scrotum filled with fluid, not fun.”</p>

      <section className="info-section">
        <p>
          A hydrocele is a painless swelling in the scrotum caused by fluid buildup around the testicle. It can affect one or both sides and is common in newborns but can also develop in adults due to injury or inflammation. Though usually harmless, a hydrocele can cause discomfort or embarrassment.
        </p>

        <p>
          At Sukam Speciality Clinic, we offer thorough evaluation and gentle treatment options to help you get back to comfort and confidence.
        </p>

        <h3>🔍 Causes and Risk Factors</h3>
        <ul>
          <li>Congenital (present at birth) due to incomplete closure</li>
          <li>Injury or trauma to the scrotum</li>
          <li>Infections or inflammation of testicle or epididymis</li>
          <li>Blockage of fluid drainage pathways</li>
          <li>Sometimes unknown causes</li>
        </ul>

        <h3>🚩 Symptoms to Recognize</h3>
        <ul>
          <li>Painless swelling in one or both sides of the scrotum</li>
          <li>Feeling of heaviness or discomfort</li>
          <li>Swelling size may fluctuate</li>
          <li>Rarely pain or redness if infection develops</li>
        </ul>

        <h3>🏥 Diagnosis & Treatment at Sukam</h3>
        <ul>
          <li>Physical exam and transillumination test</li>
          <li>Ultrasound to confirm and rule out other conditions</li>
          <li>Observation in infants (often resolves on its own)</li>
          <li>Surgical repair (hydrocelectomy) for persistent cases</li>
          <li>Aspiration/sclerotherapy (less common)</li>
        </ul>

        <h3>💡 Tips for Hydrocele Care</h3>
        <ul>
          <li>✔ Wear supportive underwear</li>
          <li>✔ Avoid trauma or injury</li>
          <li>✔ Seek medical advice for growing or painful swelling</li>
          <li>✔ Maintain good hygiene</li>
        </ul>

        <h3>🧠 Myth-Busting</h3>
        <ul>
          <li><strong>❌ “Hydroceles are cancerous.”</strong><br />✅ Truth: Hydroceles are generally benign fluid collections.</li>
          <li><strong>❌ “You should pop or squeeze a hydrocele.”</strong><br />✅ Truth: Never try to drain it yourself; this can cause infection.</li>
        </ul>
      </section>

      <section className="quiz-section">
        <h2>🧠 Quick Quiz — Hydrocele</h2>

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

export default Hydrocele;
