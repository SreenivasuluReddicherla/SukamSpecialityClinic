import React, { useState } from 'react';
import './RP1InfertilityInsights.css';

const quizData = [
  {
    question: "What does 'intrapartum care' refer to?",
    options: [
      "Care before pregnancy",
      "Care during labor and delivery",
      "Care after the baby is born",
      "Care in the NICU"
    ],
    answer: "Care during labor and delivery"
  },
  {
    question: "The first sign of active labor is:",
    options: [
      "Baby crying",
      "Placenta delivery",
      "Regular, strong contractions",
      "Breast milk leakage"
    ],
    answer: "Regular, strong contractions"
  },
  {
    question: "The ideal position for labor monitoring is:",
    options: [
      "Lying flat only",
      "Always sitting",
      "Any comfortable position with monitoring",
      "Hanging legs off the bed"
    ],
    answer: "Any comfortable position with monitoring"
  },
  {
    question: "Which of these helps reduce labor pain naturally?",
    options: [
      "Lying still",
      "Hot showers and breathing exercises",
      "Skipping meals",
      "Pushing early"
    ],
    answer: "Hot showers and breathing exercises"
  },
  {
    question: "Which of the following is used for continuous fetal heart rate monitoring?",
    options: ["MRI", "CTG", "Ultrasound gel", "Endoscopy"],
    answer: "CTG"
  },
  {
    question: "What is the term for delivery of the placenta?",
    options: [
      "Labor",
      "Third stage of labor",
      "Miscarriage",
      "Ejection"
    ],
    answer: "Third stage of labor"
  },
  {
    question: "Which pain relief is commonly used during vaginal labor?",
    options: [
      "General anesthesia",
      "Chemotherapy",
      "Epidural injection",
      "Muscle relaxant pills"
    ],
    answer: "Epidural injection"
  },
  {
    question: "What is the Apgar score used for?",
    options: [
      "Assessing the mother’s heartbeat",
      "Measuring fetal weight",
      "Evaluating baby’s condition at birth",
      "Checking the placenta"
    ],
    answer: "Evaluating baby’s condition at birth"
  },
  {
    question: "Lochia refers to:",
    options: [
      "Baby’s first cry",
      "Post-delivery bleeding from uterus",
      "Amniotic fluid",
      "Breast milk"
    ],
    answer: "Post-delivery bleeding from uterus"
  },
  {
    question: "When can walking be started after normal vaginal delivery?",
    options: [
      "After 7 days",
      "After 3 hours",
      "Within a few hours",
      "After a month"
    ],
    answer: "Within a few hours"
  },
  {
    question: "Which of the following helps with breastfeeding success?",
    options: [
      "Early skin-to-skin contact",
      "Delayed feeding for 2 days",
      "Bottle-feeding from day 1",
      "Avoiding breast massage"
    ],
    answer: "Early skin-to-skin contact"
  },
  {
    question: "What is a common emotional reaction in first few days after delivery?",
    options: ["Baby blues", "Mania", "Seizures", "Schizophrenia"],
    answer: "Baby blues"
  },
  {
    question: "After cesarean delivery, mothers are encouraged to:",
    options: [
      "Sleep for 7 days",
      "Avoid food for 3 days",
      "Start walking within 24 hours",
      "Avoid contact with baby"
    ],
    answer: "Start walking within 24 hours"
  },
  {
    question: "When should the first postpartum check-up usually occur?",
    options: [
      "Within 2 days",
      "At 6 weeks",
      "At 6 months",
      "After the next baby"
    ],
    answer: "At 6 weeks"
  },
  {
    question: "Which of the following is NOT a goal of postpartum care?",
    options: [
      "Monitoring bleeding",
      "Family planning advice",
      "Encouraging over-exercise",
      "Mental health screening"
    ],
    answer: "Encouraging over-exercise"
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
