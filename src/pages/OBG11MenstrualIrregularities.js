import React, { useState } from 'react';
import './RP1InfertilityInsights.css';

const quizData = [
  {
    question: "What is considered a normal menstrual cycle length?",
    options: ["10-15 days", "21-35 days", "40-50 days", "60 days or more"],
    answer: "21-35 days"
  },
  {
    question: "True or False: Stress can cause menstrual irregularities.",
    options: ["True", "False"],
    answer: "True"
  },
  {
    question: "Which condition is a common cause of irregular periods?",
    options: ["PCOS", "Diabetes", "Asthma", "Hypertension"],
    answer: "PCOS"
  },
  {
    question: "What should you do if you have consistently irregular periods?",
    options: ["Ignore it", "Consult a healthcare provider", "Self-medicate", "Stop exercising"],
    answer: "Consult a healthcare provider"
  },
  {
    question: "Can lifestyle changes help manage menstrual irregularities?",
    options: ["Yes", "No"],
    answer: "Yes"
  }
];

const MenstrualIrregularities = () => {
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
    return { correct, wrong: quizData.length - correct };
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
      <h1>🔄 Menstrual Irregularities</h1>
      <p className="lead">“When your monthly guest gets unpredictable.”</p>

      <section className="info-section">
        <p>
          Menstrual irregularities refer to any variation from a normal menstrual cycle in terms of timing, flow, or symptoms. These can include missed periods, heavy bleeding, spotting, or painful menstruation.
        </p>
        <p>
          At Sukam Speciality Clinic and Fertility Centre, we provide a thorough evaluation and personalized treatment to help restore regularity and comfort.
        </p>

        <h3>🩺 What We Offer:</h3>
        <ul>
          <li>Detailed menstrual history and symptom analysis</li>
          <li>Hormonal profiling and ultrasound assessments</li>
          <li>Treatment of causes like PCOS, thyroid disorders, fibroids, or infections</li>
          <li>Medical and lifestyle management tailored to your needs</li>
          <li>Counseling on menstrual hygiene and symptom relief</li>
        </ul>

        <h3>💡 Tips for Managing Menstrual Irregularities:</h3>
        <ul>
          <li>Maintain a balanced diet rich in iron and vitamins</li>
          <li>Manage stress with relaxation practices</li>
          <li>Keep a menstrual diary to track changes</li>
          <li>Avoid excessive caffeine and smoking</li>
          <li>Follow medical advice and check-ups</li>
        </ul>

        <h3>🚫 Myth vs Fact:</h3>
        <ul>
          <li><strong>❌ Myth:</strong> “Irregular periods are normal at any age.”<br /><strong>✅ Truth:</strong> Persistent irregularities should be evaluated.</li>
          <li><strong>❌ Myth:</strong> “You should avoid exercise during irregular periods.”<br /><strong>✅ Truth:</strong> Regular moderate exercise often helps regulate cycles.</li>
        </ul>
      </section>

      <section className="quiz-section">
        <h2>🧠 Menstrual Irregularities Quiz — Know Your Cycle!</h2>
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

export default MenstrualIrregularities;
