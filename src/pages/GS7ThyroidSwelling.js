import React, { useState } from 'react';
import './RP1InfertilityInsights.css';

const quizData = [
  {
    question: "Where is the thyroid gland located?",
    options: ["Neck", "Chest", "Abdomen", "Brain"],
    answer: "Neck"
  },
  {
    question: "True or False: All thyroid nodules are cancerous.",
    options: ["True", "False"],
    answer: "False"
  },
  {
    question: "Which test helps visualize thyroid lumps?",
    options: ["Ultrasound", "X-ray of chest", "ECG", "Colonoscopy"],
    answer: "Ultrasound"
  },
  {
    question: "What symptom might suggest a thyroid swelling is causing problems?",
    options: ["Difficulty swallowing", "Blurred vision", "Hearing loss", "Frequent urination"],
    answer: "Difficulty swallowing"
  },
  {
    question: "Which of the following is NOT a common cause of thyroid swelling?",
    options: ["Thyroid cyst", "Thyroid cancer", "Thyroiditis", "Lung infection"],
    answer: "Lung infection"
  }
];

const ThyroidSwelling = () => {
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
      <h1>🟠 Thyroid Swellings</h1>
      <p className="lead">“A lump that may be more than a bump.”</p>

      <section className="info-section">
        <p>
          Thyroid swellings refer to any abnormal enlargement or lumps in the thyroid gland, located in your neck. These lumps can be harmless cysts, benign growths, or sometimes cancerous nodules. Early evaluation is key to managing symptoms and ensuring your thyroid functions well.
        </p>
        <h3>🔍 Common Causes:</h3>
        <ul>
          <li>Benign thyroid nodules or cysts</li>
          <li>Thyroid goiter (enlargement)</li>
          <li>Thyroid cancer (rare but important to rule out)</li>
          <li>Thyroiditis (inflammation)</li>
        </ul>
        <h3>🩺 When to See a Doctor?</h3>
        <ul>
          <li>Noticing a new lump or swelling in the neck</li>
          <li>Difficulty swallowing or breathing</li>
          <li>Hoarseness or voice changes</li>
          <li>Pain or rapid growth of swelling</li>
        </ul>
        <h3>🏥 How We Help:</h3>
        <ul>
          <li>Careful physical examination and medical history</li>
          <li>Ultrasound imaging of the thyroid</li>
          <li>Fine needle aspiration biopsy if needed</li>
          <li>Blood tests for thyroid function (TSH, T3, T4)</li>
          <li>Personalized treatment plans — from observation to surgery</li>
        </ul>
        <h3>💡 Tips for Thyroid Health:</h3>
        <ul>
          <li>Maintain a balanced diet rich in iodine</li>
          <li>Regularly monitor thyroid function if at risk</li>
          <li>Avoid smoking and exposure to radiation</li>
          <li>Seek prompt care if you notice neck lumps</li>
        </ul>
        <h3>🚫 Myth vs Fact:</h3>
        <ul>
          <li><strong>❌ Myth:</strong> “All thyroid lumps are cancer.”<br /><strong>✅ Truth:</strong> Most are benign but require evaluation.</li>
          <li><strong>❌ Myth:</strong> “Thyroid nodules always cause symptoms.”<br /><strong>✅ Truth:</strong> Many thyroid lumps are silent and detected only on exams.</li>
        </ul>
      </section>

      <section className="quiz-section">
        <h2>🧠 Thyroid Swellings Quiz — Test Your Knowledge!</h2>

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

export default ThyroidSwelling;
