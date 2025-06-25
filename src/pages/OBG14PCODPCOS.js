import React, { useState } from 'react';
import './RP1InfertilityInsights.css';

const quizData = [
  {
    question: "What is a common symptom of PCOS?",
    options: ["Regular periods", "Irregular periods", "No hair growth", "Low blood sugar"],
    answer: "Irregular periods"
  },
  {
    question: "True or False: Weight management can improve PCOS symptoms.",
    options: ["True", "False"],
    answer: "True"
  },
  {
    question: "Which hormone is often elevated in PCOS?",
    options: ["Insulin", "Testosterone", "Cortisol", "Estrogen"],
    answer: "Testosterone"
  },
  {
    question: "What type of diet is recommended for PCOS?",
    options: ["High sugar", "Balanced with low refined carbs", "High fat only", "No diet needed"],
    answer: "Balanced with low refined carbs"
  },
  {
    question: "Can PCOS cause fertility issues?",
    options: ["Yes", "No"],
    answer: "Yes"
  }
];

const PCODPCOS = () => {
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
      <h1>🌸 PCOD / PCOS</h1>
      <p className="lead">“When hormones dance out of rhythm, but hope stays in tune.”</p>

      <section className="info-section">
        <p>
          Polycystic Ovary Disease (PCOD) and Polycystic Ovary Syndrome (PCOS) are common hormonal disorders affecting women of reproductive age. They can cause irregular periods, acne, weight gain, and fertility challenges. At Sukam Speciality Clinic and Fertility Centre, we provide personalized diagnosis and treatment plans to restore hormonal balance, improve symptoms, and support your journey toward health and fertility.
        </p>

        <h3>🩺 What We Offer:</h3>
        <ul>
          <li>Comprehensive hormonal and ultrasound evaluations</li>
          <li>Lifestyle and dietary counseling for weight and insulin management</li>
          <li>Medical treatments to regulate menstrual cycles and reduce symptoms</li>
          <li>Fertility treatments and ovulation induction if needed</li>
          <li>Emotional support and mental health guidance</li>
          <li>Long-term monitoring and health education</li>
        </ul>

        <h3>💡 Tips to Manage PCOS:</h3>
        <ul>
          <li>Follow a balanced diet low in refined sugars and rich in fiber</li>
          <li>Regular physical activity to maintain healthy weight and insulin sensitivity</li>
          <li>Manage stress through mindfulness or relaxation techniques</li>
          <li>Avoid smoking and limit alcohol</li>
          <li>Keep regular medical check-ups to monitor your health</li>
        </ul>

        <h3>🚫 Myth vs Fact:</h3>
        <ul>
          <li><strong>❌ Myth:</strong> “PCOS only affects overweight women.”<br /><strong>✅ Truth:</strong> Women of all body types can have PCOS.</li>
          <li><strong>❌ Myth:</strong> “PCOS means you cannot get pregnant.”<br /><strong>✅ Truth:</strong> Many women with PCOS conceive naturally or with treatment.</li>
        </ul>
      </section>

      <section className="quiz-section">
        <h2>🧠 PCOS Quiz — How Much Do You Know?</h2>

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

export default PCODPCOS;
