import React, { useState } from 'react';
import './RP1InfertilityInsights.css';

const quizData = [
  {
    question: "What is the ideal age range for egg freezing?",
    options: ["18–22", "25–35", "40–50", "Any age"],
    answer: "25–35"
  },
  {
    question: "How are eggs retrieved from the ovaries?",
    options: [
      "Through a major abdominal surgery",
      "By inserting a needle via ultrasound guidance",
      "Through natural ovulation",
      "Via urine sample"
    ],
    answer: "By inserting a needle via ultrasound guidance"
  },
  {
    question: "What is vitrification?",
    options: [
      "A form of egg fertilization",
      "A slow freezing method",
      "A rapid freezing process used to preserve eggs",
      "A type of hormone injection"
    ],
    answer: "A rapid freezing process used to preserve eggs"
  },
  {
    question: "How long can frozen eggs be stored?",
    options: ["6 months", "1 year", "10+ years", "Only 2 cycles"],
    answer: "10+ years"
  },
  {
    question: "Which factor most affects success after egg freezing?",
    options: [
      "The gender of the partner",
      "Age at the time of freezing",
      "Time of the month",
      "Exercise habits"
    ],
    answer: "Age at the time of freezing"
  },
  {
    question: "Can egg freezing be done if I’m not married or in a relationship?",
    options: ["No", "Only with legal permission", "Yes", "Only after 40"],
    answer: "Yes"
  },
  {
    question: "Does egg retrieval harm my ovaries?",
    options: [
      "Yes, permanently",
      "No, it only collects eggs developed in that month",
      "Causes infertility",
      "Damages the uterus"
    ],
    answer: "No, it only collects eggs developed in that month"
  },
  {
    question: "How many mature eggs are ideal to freeze for one child?",
    options: ["1–5", "10–20", "30–40", "Any number will do"],
    answer: "10–20"
  },
  {
    question: "Can lifestyle affect egg quality?",
    options: ["No", "Yes", "Only after age 40", "Not relevant for freezing"],
    answer: "Yes"
  },
  {
    question: "When will I use these eggs?",
    options: [
      "Next month",
      "Whenever I plan a pregnancy via IVF",
      "During my periods",
      "After menopause only"
    ],
    answer: "Whenever I plan a pregnancy via IVF"
  }
];


const EggFreezing = () => {
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
      <h1>❄️ Egg Freezing</h1>
      <p className="lead">“Pause your biological clock, not your dreams.”</p>

      <section className="info-section">
        <p>
          Egg freezing, or oocyte cryopreservation, allows women to preserve their fertility by freezing healthy eggs at a younger age for use later. This empowers women to balance life, career, or medical needs without losing the chance to conceive in the future. At Sukam Speciality Clinic and Fertility Centre, we use advanced freezing techniques to safeguard your reproductive potential with utmost care.
        </p>

        <h3>🩺 What We Offer:</h3>
        <ul>
          <li>Comprehensive fertility assessment and counseling</li>
          <li>Controlled ovarian stimulation to retrieve mature eggs</li>
          <li>Vitrification — a rapid freezing method that preserves egg quality</li>
          <li>Safe storage with strict monitoring</li>
          <li>Expert guidance for future thawing and fertilization</li>
          <li>Emotional support throughout the process</li>
        </ul>

        <h3>💡 Tips for Considering Egg Freezing:</h3>
        <ul>
          <li>Freeze eggs ideally before age 35 for better success rates</li>
          <li>Maintain a healthy lifestyle for optimal egg quality</li>
          <li>Understand the financial and emotional aspects before starting</li>
          <li>Discuss family planning goals and timing with your doctor</li>
          <li>Keep communication open for updates on new fertility advances</li>
        </ul>

        <h3>🚫 Myth vs Fact:</h3>
        <ul>
          <li><strong>❌ Myth:</strong> “Egg freezing guarantees a baby in the future.”<br /><strong>✅ Truth:</strong> While it preserves potential, success depends on egg quality and other factors.</li>
          <li><strong>❌ Myth:</strong> “Egg freezing is only for medical reasons.”<br /><strong>✅ Truth:</strong> Many women freeze eggs for personal, social, or career reasons.</li>
        </ul>
      </section>

      <section className="quiz-section">
        <h2>🧠 Egg Freezing Quiz — How Much Do You Know?</h2>

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

export default EggFreezing;
