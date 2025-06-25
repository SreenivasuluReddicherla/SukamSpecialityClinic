import React, { useState } from 'react';
import './RP1InfertilityInsights.css';

const quizData = [
  {
    question: "What percentage of infertility cases involve male factors?",
    options: ["10%", "25%", "50%", "75%"],
    answer: "50%"
  },
  {
    question: "True or False: Stress can affect fertility.",
    options: ["True", "False"],
    answer: "True"
  },
  {
    question: "Which is NOT a common cause of female infertility?",
    options: ["Ovulatory disorders", "Tubal blockage", "High blood pressure", "Uterine abnormalities"],
    answer: "High blood pressure"
  },
  {
    question: "How long should a couple try to conceive before seeking help?",
    options: ["3 months", "6 months", "1 year", "2 years"],
    answer: "1 year"
  },
  {
    question: "Can lifestyle changes improve fertility?",
    options: ["Yes", "No"],
    answer: "Yes"
  }
];

const InfertilityInsights = () => {
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
      <h1>🧬 Infertility – Insights</h1>
      <p className="lead">“Every story has its hurdles — let’s decode the ‘why not yet.’”</p>

      <section className="info-section">
        <p>
          Infertility can be an emotional and confusing journey. It affects many couples, but understanding the causes and options available can bring hope. At Sukam Speciality Clinic and Fertility Centre, we believe every couple’s story is unique. We provide compassionate support and thorough evaluation to help uncover the reasons behind infertility and guide you towards the best path forward.
        </p>
        <h3>🩺 What We Offer:</h3>
        <ul>
          <li>Comprehensive fertility assessment for both partners</li>
          <li>Hormonal tests, semen analysis, and imaging studies</li>
          <li>Identification of factors like ovulatory disorders, tubal blockage, male factor infertility, and unexplained infertility</li>
          <li>Counseling and emotional support throughout the journey</li>
          <li>Personalized treatment plans designed with your goals in mind</li>
        </ul>

        <h3>💡 Tips to Support Fertility Naturally:</h3>
        <ul>
          <li>Maintain a healthy weight and balanced diet</li>
          <li>Avoid smoking, alcohol, and excessive caffeine</li>
          <li>Manage stress through relaxation and mindfulness</li>
          <li>Track ovulation and fertile windows</li>
          <li>Regular moderate exercise improves reproductive health</li>
        </ul>

        <h3>🚫 Myth vs Fact:</h3>
        <ul>
          <li><strong>❌ Myth:</strong> “Infertility is usually the woman’s problem.”<br /><strong>✅ Truth:</strong> Male factors contribute to nearly half of all infertility cases.</li>
          <li><strong>❌ Myth:</strong> “If you don’t get pregnant immediately, there is a problem.”<br /><strong>✅ Truth:</strong> Many couples conceive naturally within a year of trying.</li>
        </ul>
      </section>

      <section className="quiz-section">
        <h2>🧠 Infertility Quiz — How Much Do You Know?</h2>

        {/* Progress Bar */}
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

export default InfertilityInsights;
