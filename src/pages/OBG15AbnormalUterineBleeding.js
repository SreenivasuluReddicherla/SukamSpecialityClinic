import React, { useState } from 'react';
import './RP1InfertilityInsights.css';

const quizData = [
  {
    question: "What does AUB stand for?",
    options: ["Acute uterine bleeding", "Abnormal uterine bleeding", "Average uterine bleeding", "Absent uterine bleeding"],
    answer: "Abnormal uterine bleeding"
  },
  {
    question: "Which of these is NOT a typical symptom of AUB?",
    options: ["Heavy menstrual bleeding", "Spotting between periods", "Prolonged bleeding", "No periods at all"],
    answer: "No periods at all"
  },
  {
    question: "True or False: Stress can affect menstrual bleeding.",
    options: ["True", "False"],
    answer: "True"
  },
  {
    question: "Which test helps in diagnosing causes of AUB?",
    options: ["Ultrasound", "ECG", "Chest X-ray", "Colonoscopy"],
    answer: "Ultrasound"
  },
  {
    question: "What is a common treatment for regulating AUB?",
    options: ["Antibiotics", "Hormonal therapy", "Painkillers only", "No treatment needed"],
    answer: "Hormonal therapy"
  }
];

const AbnormalUterineBleeding = () => {
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
      <h1>🔴 Abnormal Uterine Bleeding</h1>
      <p className="lead">“When your body speaks through the bleed.”</p>

      <section className="info-section">
        <p>
          Abnormal uterine bleeding (AUB) refers to any variation in menstrual bleeding patterns, such as heavy, prolonged, irregular, or spotting between periods. It can affect quality of life and sometimes signal underlying health issues. At Sukam Speciality Clinic and Fertility Centre, we offer thorough evaluation and individualized treatment to restore normal cycles and improve your wellbeing.
        </p>

        <h3>🩺 What We Offer:</h3>
        <ul>
          <li>Detailed medical history and menstrual tracking</li>
          <li>Blood tests to check hormone levels and anemia</li>
          <li>Ultrasound and diagnostic procedures like hysteroscopy</li>
          <li>Medical management to regulate bleeding</li>
          <li>Minimally invasive surgical options when needed</li>
          <li>Counseling and follow-up for menstrual health</li>
        </ul>

        <h3>💡 Tips for Managing AUB:</h3>
        <ul>
          <li>Keep a menstrual diary to monitor bleeding patterns</li>
          <li>Maintain a nutritious diet rich in iron to prevent anemia</li>
          <li>Avoid excessive stress and practice relaxation techniques</li>
          <li>Follow your prescribed treatment consistently</li>
          <li>Seek medical help promptly if bleeding is very heavy or prolonged</li>
        </ul>

        <h3>🚫 Myth vs Fact:</h3>
        <ul>
          <li><strong>❌ Myth:</strong> “Heavy periods are normal and shouldn’t be treated.”<br /><strong>✅ Truth:</strong> Heavy bleeding can cause anemia and should be evaluated and treated.</li>
          <li><strong>❌ Myth:</strong> “Birth control pills worsen abnormal bleeding.”<br /><strong>✅ Truth:</strong> Hormonal contraceptives often help regulate and reduce abnormal bleeding.</li>
        </ul>
      </section>

      <section className="quiz-section">
        <h2>🧠 Abnormal Uterine Bleeding Quiz — Know Your Flow!</h2>

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

export default AbnormalUterineBleeding;
