import React, { useState } from 'react';
import './RP1InfertilityInsights.css';

const quizData = [
  {
    question: "How long is the postpartum period usually considered?",
    options: ["2 weeks", "6 weeks", "3 months", "1 year"],
    answer: "6 weeks"
  },
  {
    question: "Which hormone helps with milk production?",
    options: ["Progesterone", "Estrogen", "Prolactin", "Oxytocin"],
    answer: "Prolactin"
  },
  {
    question: "True or False: Emotional mood swings after childbirth are normal.",
    options: ["True", "False"],
    answer: "True"
  },
  {
    question: "What is a sign that you should contact your doctor postpartum?",
    options: [
      "Heavy vaginal bleeding soaking more than one pad per hour",
      "Fever over 100.4°F (38°C)",
      "Severe pelvic pain or swelling",
      "All of the above"
    ],
    answer: "All of the above"
  },
  {
    question: "When can gentle pelvic floor exercises begin after delivery?",
    options: [
      "Immediately after birth",
      "After 6 weeks or as advised",
      "Not recommended ever",
      "Only after 6 months"
    ],
    answer: "After 6 weeks or as advised"
  }
];

const IntraPostpartumCare = () => {
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
      <h1>🤱 Intra and Postpartum Care</h1>
      <p className="lead">“Caring beyond the crib and into recovery.”</p>

      <section className="info-section">
        <p>The journey of motherhood doesn’t end with birth — it begins a new chapter of healing, bonding, and adjustment. Intra (during labor and delivery) and postpartum care focuses on supporting mothers physically, emotionally, and medically through the critical hours and weeks after childbirth.</p>
        <p>At Sukam Speciality Clinic and Fertility Centre, our comprehensive postpartum program ensures smooth recovery, optimal breastfeeding, and early detection of any complications, helping you embrace motherhood with confidence and joy.</p>

        <h3>🩺 What We Offer:</h3>
        <ul>
          <li>Continuous monitoring during labor and delivery for mother and baby</li>
          <li>Immediate skin-to-skin contact and breastfeeding initiation support</li>
          <li>Pain and wound management for natural and operative deliveries</li>
          <li>Guidance on perineal care, hygiene, and uterine involution</li>
          <li>Support for emotional wellbeing including screening for postpartum depression</li>
          <li>Nutrition counseling to replenish and heal the body</li>
          <li>Newborn care education including immunizations and growth monitoring</li>
          <li>Family counseling to help partners and relatives support the new mother</li>
        </ul>

        <h3>💡 Tips for a Healthy Postpartum Period:</h3>
        <ul>
          <li>Rest whenever possible and accept help from loved ones</li>
          <li>Maintain a balanced diet rich in proteins, vitamins, and hydration</li>
          <li>Practice gentle pelvic floor and abdominal exercises as advised</li>
          <li>Keep your perineal area clean and dry to prevent infection</li>
          <li>Reach out to your healthcare provider if you experience mood changes, severe pain, or heavy bleeding</li>
        </ul>

        <h3>🚫 Myth vs Fact:</h3>
        <ul>
          <li><strong>❌ Myth:</strong> “You should ‘bounce back’ immediately after birth.”<br /><strong>✅ Truth:</strong> Recovery is a gradual process; listen to your body’s needs.</li>
          <li><strong>❌ Myth:</strong> “Breastfeeding is always easy right away.”<br /><strong>✅ Truth:</strong> Many mothers need support and patience to establish successful breastfeeding.</li>
        </ul>
      </section>

      <section className="quiz-section">
        <h2>🧠 Postpartum Care Quiz — Are You Ready?</h2>

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

export default IntraPostpartumCare;
