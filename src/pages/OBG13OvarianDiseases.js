import React, { useState } from 'react';
import './RP1InfertilityInsights.css';

const quizData = [
  {
    question: "What is a common symptom of ovarian cysts?",
    options: ["Sudden weight gain", "Pelvic pain or pressure", "Frequent headaches", "Hair loss"],
    answer: "Pelvic pain or pressure"
  },
  {
    question: "True or False: PCOS affects hormone levels and menstrual cycles.",
    options: ["True", "False"],
    answer: "True"
  },
  {
    question: "Which test is commonly used to evaluate ovarian cysts?",
    options: ["Ultrasound", "ECG", "MRI of the brain", "Colonoscopy"],
    answer: "Ultrasound"
  },
  {
    question: "Can ovarian diseases impact fertility?",
    options: ["Yes", "No"],
    answer: "Yes"
  },
  {
    question: "Which lifestyle change can help manage PCOS symptoms?",
    options: ["Regular exercise", "Increased sugar intake", "Smoking", "Sedentary lifestyle"],
    answer: "Regular exercise"
  }
];

const OvarianDiseases = () => {
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
      <h1>🥚 Ovarian Diseases</h1>
      <p className="lead">"Silent disruptors of hormonal harmony."</p>

      <section className="info-section">
        <p>
          Ovarian diseases encompass a range of conditions that affect ovarian health and function, including cysts, infections, hormonal imbalances, and tumors. Many ovarian disorders can impact fertility, menstrual regularity, and overall well-being. At Sukam Speciality Clinic and Fertility Centre, we offer comprehensive diagnosis and personalized treatment plans to restore ovarian health and hormonal balance.
        </p>

        <h3>🩺 What We Offer:</h3>
        <ul>
          <li>Detailed evaluation including ultrasound and hormonal testing</li>
          <li>Diagnosis of ovarian cysts, PCOS, infections, and tumors</li>
          <li>Medical management of hormonal imbalances and symptoms</li>
          <li>Minimally invasive surgical treatment when necessary</li>
          <li>Fertility counseling and support</li>
          <li>Regular follow-up for monitoring and health maintenance</li>
        </ul>

        <h3>💡 Tips for Ovarian Health:</h3>
        <ul>
          <li>Maintain a balanced diet rich in antioxidants and vitamins</li>
          <li>Exercise regularly to support hormonal balance</li>
          <li>Avoid excessive stress through relaxation techniques</li>
          <li>Keep regular gynecological check-ups and screenings</li>
          <li>Follow prescribed treatments diligently</li>
        </ul>

        <h3>❌ Myth vs Fact:</h3>
        <ul>
          <li><strong>❌ Myth:</strong> "Ovarian cysts always need surgery."<br /><strong>✅ Truth:</strong> Many cysts resolve on their own and can be monitored without surgery.</li>
          <li><strong>❌ Myth:</strong> "PCOS only affects overweight women."<br /><strong>✅ Truth:</strong> PCOS can affect women of all body types.</li>
        </ul>
      </section>

      <section className="quiz-section">
        <h2>🧠 Ovarian Diseases Quiz – How Much Do You Know?</h2>

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

export default OvarianDiseases;
