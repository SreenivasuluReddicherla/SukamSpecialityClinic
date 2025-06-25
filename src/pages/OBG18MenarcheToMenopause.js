import React, { useState } from 'react';
import './RP1InfertilityInsights.css';

const quizData = [
  {
    question: "At what age does menarche typically occur?",
    options: ["8-15 years", "16-20 years", "21-25 years", "26-30 years"],
    answer: "8-15 years"
  },
  {
    question: "Which hormone mainly regulates the menstrual cycle?",
    options: ["Insulin", "Estrogen", "Cortisol", "Testosterone"],
    answer: "Estrogen"
  },
  {
    question: "True or False: Hot flashes are a common symptom of menopause.",
    options: ["True", "False"],
    answer: "True"
  },
  {
    question: "What condition is characterized by multiple ovarian cysts and hormonal imbalance?",
    options: ["Endometriosis", "PCOS", "Thyroid disorder", "Fibroids"],
    answer: "PCOS"
  },
  {
    question: "What is a healthy way to manage menopausal symptoms?",
    options: ["Avoid physical activity", "Balanced diet and regular exercise", "Ignore symptoms", "Only medications"],
    answer: "Balanced diet and regular exercise"
  }
];

const MenarcheToMenopause = () => {
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
      <h1>🌿 Menarche to Menopausal Care</h1>
      <p className="lead">“From first flow to final pause – complete care.”</p>

      <section className="info-section">
        <p>
          Women’s health evolves through different life stages, from the first menstrual cycle (menarche) to menopause and beyond. Each phase brings unique changes and challenges. At Sukam Speciality Clinic and Fertility Centre, we provide comprehensive care tailored to every stage — supporting hormonal balance, reproductive health, and overall wellness for a vibrant life.
        </p>

        <h3>🩺 What We Offer:</h3>
        <ul>
          <li>Education and counseling on menstrual health and hygiene</li>
          <li>Diagnosis and management of irregular cycles, painful periods, and hormonal imbalances</li>
          <li>Screening and treatment for conditions like PCOD/PCOS, endometriosis, and thyroid disorders</li>
          <li>Support for fertility planning and contraception choices</li>
          <li>Menopause management including symptom relief and bone health</li>
          <li>Lifestyle and nutrition counseling for hormonal wellness</li>
          <li>Emotional and mental health support</li>
        </ul>

        <h3>💡 Tips for Hormonal Health:</h3>
        <ul>
          <li>Maintain a balanced diet rich in whole grains, fruits, and vegetables</li>
          <li>Regular physical activity helps regulate cycles and mood</li>
          <li>Track your menstrual cycle to notice any changes early</li>
          <li>Manage stress through relaxation techniques like yoga or meditation</li>
          <li>Get regular health check-ups and hormonal screening as advised</li>
        </ul>

        <h3>🚫 Myth vs Fact:</h3>
        <ul>
          <li><strong>❌ Myth:</strong> “Irregular periods are always normal.”<br /><strong>✅ Truth:</strong> While common, persistent irregularities should be evaluated by a healthcare provider.</li>
          <li><strong>❌ Myth:</strong> “Menopause means the end of a healthy sex life.”<br /><strong>✅ Truth:</strong> With proper care, many women enjoy a fulfilling sex life after menopause.</li>
        </ul>
      </section>

      <section className="quiz-section">
        <h2>🧠 Menarche to Menopause Quiz — How Well Do You Know Your Cycle?</h2>

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

export default MenarcheToMenopause;
