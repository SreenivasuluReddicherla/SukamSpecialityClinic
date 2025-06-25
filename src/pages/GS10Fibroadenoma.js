import React, { useState } from 'react';
import './RP1InfertilityInsights.css';

const quizData = [
  {
    question: "Fibroadenoma is usually:",
    options: ["Cancerous", "Benign", "Infectious", "Allergic reaction"],
    answer: "Benign"
  },
  {
    question: "True or False: Fibroadenomas commonly occur in young women.",
    options: ["True", "False"],
    answer: "True"
  },
  {
    question: "What is a common test to check a breast lump?",
    options: ["Ultrasound", "Blood sugar test", "ECG", "Hearing test"],
    answer: "Ultrasound"
  },
  {
    question: "When should you see a doctor about a breast lump?",
    options: ["When it appears suddenly", "If it grows or hurts", "If you notice skin or nipple changes", "All of the above"],
    answer: "All of the above"
  }
];

const Fibroadenoma = () => {
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
      <h1>🟠 Fibroadenoma</h1>
      <p className="lead">“A breast lump that’s more chill than scary.”</p>

      <section className="info-section">
        <p>
          Fibroadenoma is a common benign (non-cancerous) breast lump, especially in young women. It feels firm, smooth, and moves easily under the skin. While it’s usually harmless, any new lump should be checked to confirm the diagnosis and rule out other conditions.
        </p>

        <h3>What Causes Fibroadenoma?</h3>
        <ul>
          <li>Hormonal changes, especially during reproductive years</li>
          <li>Genetic factors</li>
          <li>Usually no clear cause; it’s a benign tumor made of glandular and fibrous tissue</li>
        </ul>

        <h3>When to See a Doctor?</h3>
        <ul>
          <li>Discovery of any new breast lump</li>
          <li>Changes in size, shape, or pain in the lump</li>
          <li>Family history of breast cancer</li>
          <li>Other breast symptoms like nipple discharge</li>
        </ul>

        <h3>How We Help:</h3>
        <ul>
          <li>Clinical breast examination</li>
          <li>Imaging tests like ultrasound or mammogram</li>
          <li>Fine needle aspiration or biopsy if needed</li>
          <li>Monitoring for changes or removal if large or symptomatic</li>
          <li>Patient education on breast self-exams and awareness</li>
        </ul>

        <h3>Tips for Breast Health:</h3>
        <ul>
          <li>Perform regular self-breast exams</li>
          <li>Report any new lumps or changes promptly</li>
          <li>Maintain a healthy lifestyle with balanced diet and exercise</li>
          <li>Avoid smoking and limit alcohol intake</li>
        </ul>

        <h3>🚫 Myth vs Fact:</h3>
        <ul>
          <li><strong>❌ Myth:</strong> “All breast lumps mean cancer.”<br /><strong>✅ Truth:</strong> Most breast lumps like fibroadenomas are benign.</li>
          <li><strong>❌ Myth:</strong> “Breast lumps always need surgery.”<br /><strong>✅ Truth:</strong> Many fibroadenomas can be safely monitored without surgery.</li>
        </ul>
      </section>

      <section className="quiz-section">
        <h2>🧠 Quick Quiz — Fibroadenoma Facts</h2>

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

export default Fibroadenoma;
