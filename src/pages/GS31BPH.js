import React, { useState } from 'react';
import './RP1InfertilityInsights.css';

const quizData = [
  {
    question: "What does BPH cause?",
    options: ["Enlarged prostate", "Lung infection", "Hair loss", "High blood pressure"],
    answer: "Enlarged prostate"
  },
  {
    question: "Which symptom is common in BPH?",
    options: ["Weak urine flow", "Chest pain", "Rash", "Dizziness"],
    answer: "Weak urine flow"
  },
  {
    question: "True or False: BPH always leads to prostate cancer.",
    options: ["True", "False"],
    answer: "False"
  },
  {
    question: "What is a common surgical treatment for BPH?",
    options: ["TURP", "Appendectomy", "Gallbladder removal", "Tonsillectomy"],
    answer: "TURP"
  },
  {
    question: "When should you see a doctor for BPH symptoms?",
    options: [
      "If urination is difficult or painful",
      "If frequent urination disrupts life",
      "If unable to fully empty bladder",
      "All of the above"
    ],
    answer: "All of the above"
  }
];

const BPH = () => {
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
      <h1>🟠 BPH (Benign Prostatic Hyperplasia)</h1>
      <p className="lead">“A growing prostate that slows your flow.”</p>

      <section className="info-section">
        <p>
          BPH is a common condition where the prostate gland enlarges as men age, pressing against the urethra and slowing or blocking the flow of urine. This can lead to difficulties in urination, frequent need to go, and incomplete bladder emptying. Though not cancerous, BPH can significantly affect quality of life.
        </p>

        <p>At Sukam Speciality Clinic, we provide comprehensive evaluation and personalized treatment plans to help you regain comfort and control.</p>

        <h3>🔍 Causes and Risk Factors</h3>
        <ul>
          <li>Aging and hormonal changes</li>
          <li>Family history of prostate problems</li>
          <li>Lifestyle factors (obesity, lack of exercise)</li>
          <li>Other health conditions such as diabetes</li>
        </ul>

        <h3>🚩 Symptoms to Recognize</h3>
        <ul>
          <li>Weak or slow urine stream</li>
          <li>Difficulty starting urination</li>
          <li>Frequent urination, especially at night</li>
          <li>Urgency or inability to hold urine</li>
          <li>Feeling of incomplete bladder emptying</li>
        </ul>

        <h3>🏥 Diagnosis & Treatment at Sukam</h3>
        <ul>
          <li>Physical exam including digital rectal exam (DRE)</li>
          <li>Urine tests, blood tests (PSA), and ultrasound</li>
          <li>Uroflowmetry and post-void residual measurement</li>
          <li>Treatment options:
            <ul>
              <li>Lifestyle modifications</li>
              <li>Medications (alpha-blockers, 5-alpha-reductase inhibitors)</li>
              <li>Minimally invasive procedures (UroLift, laser therapy)</li>
              <li>Surgery: TURP or other surgical options</li>
            </ul>
          </li>
        </ul>

        <h3>💡 Tips for Managing BPH</h3>
        <ul>
          <li>✔ Limit caffeine and alcohol intake</li>
          <li>✔ Maintain healthy weight and exercise regularly</li>
          <li>✔ Avoid medications that worsen symptoms</li>
          <li>✔ Schedule regular follow-ups</li>
        </ul>

        <h3>🧠 Myth-Busting</h3>
        <ul>
          <li><strong>❌ “BPH is prostate cancer.”</strong><br />✅ Truth: BPH is non-cancerous enlargement but requires monitoring.</li>
          <li><strong>❌ “Surgery is the only treatment for BPH.”</strong><br />✅ Truth: Many men benefit from medication and lifestyle changes.</li>
        </ul>
      </section>

      <section className="quiz-section">
        <h2>🧠 Quick Quiz — BPH</h2>

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

export default BPH;
