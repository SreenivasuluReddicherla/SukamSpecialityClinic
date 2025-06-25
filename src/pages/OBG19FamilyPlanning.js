import React, { useState } from 'react';
import './RP1InfertilityInsights.css';

const quizData = [
  {
    question: "Which of these is a long-acting reversible contraceptive?",
    options: ["Birth control pill", "IUD", "Condom", "Withdrawal method"],
    answer: "IUD"
  },
  {
    question: "True or False: Vasectomy is a permanent contraceptive method.",
    options: ["True", "False"],
    answer: "True"
  },
  {
    question: "Which method also protects against sexually transmitted infections?",
    options: ["Pill", "Condom", "Implant", "Injection"],
    answer: "Condom"
  },
  {
    question: "What is the main hormone in combined oral contraceptive pills?",
    options: ["Insulin", "Estrogen and Progesterone", "Cortisol", "Testosterone"],
    answer: "Estrogen and Progesterone"
  },
  {
    question: "When should you consult your doctor about contraceptive side effects?",
    options: [
      "Only if you want to stop contraception",
      "If you experience severe or persistent side effects",
      "Never, side effects are normal",
      "Only during pregnancy"
    ],
    answer: "If you experience severe or persistent side effects"
  }
];

const FamilyPlanning = () => {
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
      <h1>🤰 Family Planning</h1>
      <p className="lead">“Your future, your family, your choice.”</p>

      <section className="info-section">
        <p>
          Family planning empowers you to decide when and how to grow your family with safe, effective,
          and personalized options. At Sukam Speciality Clinic and Fertility Centre, we offer
          comprehensive counseling and a wide range of contraceptive methods to support your reproductive
          goals and overall wellbeing.
        </p>

        <h3>🩺 What We Offer:</h3>
        <ul>
          <li>Counseling on natural and modern contraceptive methods</li>
          <li>Birth control pills, implants, IUDs, and injections</li>
          <li>Permanent options like tubal ligation and vasectomy referrals</li>
          <li>Pre-conception counseling and fertility awareness</li>
          <li>Management of contraceptive side effects and follow-up</li>
          <li>Education on sexual health and prevention of sexually transmitted infections (STIs)</li>
        </ul>

        <h3>💡 Tips for Effective Family Planning:</h3>
        <ul>
          <li>Discuss your family goals openly with your healthcare provider</li>
          <li>Choose a contraceptive method that suits your lifestyle and health</li>
          <li>Use contraception consistently and correctly for best protection</li>
          <li>Consider dual protection (condoms + other methods) to prevent STIs</li>
          <li>Schedule regular check-ups to review your family planning needs</li>
        </ul>

        <h3>🚫 Myth vs Fact:</h3>
        <ul>
          <li><strong>❌ “Contraceptives cause infertility.”</strong><br /><strong>✅ Truth:</strong> Most contraceptive methods are fully reversible and safe for long-term use.</li>
          <li><strong>❌ “You don’t need contraception if breastfeeding.”</strong><br /><strong>✅ Truth:</strong> Breastfeeding can delay fertility but is not a reliable contraception method alone.</li>
        </ul>
      </section>

      <section className="quiz-section">
        <h2>🧠 Family Planning Quiz — Know Your Options!</h2>

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

export default FamilyPlanning;