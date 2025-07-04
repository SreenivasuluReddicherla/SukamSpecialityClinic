import React, { useState } from 'react';
import './RP1InfertilityInsights.css';

const quizData = [
  {
    question: "When is the first ultrasound usually done?",
    options: ["2 weeks", "6–8 weeks", "10 weeks", "After 12 weeks"],
    answer: "6–8 weeks"
  },
  {
    question: "What’s the ideal sleep position in late pregnancy?",
    options: ["On back", "Left side", "Right side", "Stomach"],
    answer: "Left side"
  },
  {
    question: "Iron is essential in pregnancy to prevent:",
    options: ["Diabetes", "Anemia", "Thyroid issues", "Back pain"],
    answer: "Anemia"
  },
  {
    question: "What does the NT scan detect?",
    options: ["Baby’s weight", "Twins", "Genetic disorders", "Gestational age"],
    answer: "Genetic disorders"
  },
  {
    question: "Which food should be avoided during pregnancy?",
    options: ["Eggs", "Raw meat", "Dosa", "Lentils"],
    answer: "Raw meat"
  },
  {
    question: "When is fetal movement usually first felt?",
    options: ["6 weeks", "10 weeks", "20 weeks", "36 weeks"],
    answer: "20 weeks"
  },
  {
    question: "Daily fluid intake should be around:",
    options: ["1 liter", "3 liters", "5 liters", "500 ml"],
    answer: "3 liters"
  },
  {
    question: "What is GTT?",
    options: [
      "Genetic test",
      "Thyroid test",
      "Glucose Tolerance Test",
      "Growth scan"
    ],
    answer: "Glucose Tolerance Test"
  },
  {
    question: "Is exercise during pregnancy safe?",
    options: [
      "Never",
      "Yes, with caution",
      "Only in 1st trimester",
      "Only after delivery"
    ],
    answer: "Yes, with caution"
  },
  {
    question: "The ideal weight gain in pregnancy is:",
    options: ["2 kg", "5 kg", "10–12 kg", "20–30 kg"],
    answer: "10–12 kg"
  }
];


const NormalPregnancyCare = () => {
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
      <h1>🌸 Normal Pregnancy Care</h1>
      <p className="lead">“Growing life with love, one heartbeat at a time.”
      </p>

      <section className="info-section">
        <p>
          At Sukam Speciality Clinic and Fertility Centre, we believe that every pregnancy deserves joyful beginnings and trusted care. Our Normal Pregnancy Care services are designed to support expectant mothers through a healthy, natural journey—ensuring the well-being of both mother and baby.
        </p>
        <p>
          From your first positive test to the moment you hear your baby cry for the first time, we’re with you every step of the way. Our warm, family-friendly environment, coupled with experienced doctors, makes your experience safe, empowering, and memorable.
        </p>

        <h3>🧪 What We Offer:</h3>
        <ul>
          <li>Monthly to weekly antenatal checkups</li>
          <li>Fetal scans and growth monitoring</li>
          <li>Nutritional counseling and meal planning</li>
          <li>Prenatal yoga and fitness guidance</li>
          <li>Personalized birthing plans</li>
          <li>Breastfeeding preparation and parent education</li>
        </ul>

        <h3>🥗 Nutrition Tips for a Healthy Pregnancy:</h3>
        <ul>
          <li>Include iron-rich foods (leafy greens, dates, millets) and calcium sources (dairy, ragi)</li>
          <li>Eat small, frequent meals to manage nausea and energy levels</li>
          <li>Stay hydrated—aim for at least 8–10 glasses of water per day</li>
          <li>Include good fats like ghee, nuts, and seeds in moderation</li>
          <li>Take folic acid and other prenatal supplements as advised</li>
        </ul>

        <h3>🧘‍♀️ Tips to Support Natural Delivery:</h3>
        <ul>
          <li>Stay physically active with regular walking and prenatal stretches</li>
          <li>Practice breathing techniques and meditation to ease labor anxiety</li>
          <li>Keep your posture upright during daily activities</li>
          <li>Trust your body’s strength and attend birthing classes</li>
          <li>Communicate openly with your care team about labor preferences</li>
        </ul>

        <h3>❌ Common Myths About Pregnancy:</h3>
        <ul>
          <li><strong>❌ Myth:</strong> “You need to eat for two.”<br /><strong>✅ Truth:</strong> Quality over quantity matters—balanced nutrition, not double meals.</li>
          <li><strong>❌ Myth:</strong> “Exercise is dangerous in pregnancy.”<br /><strong>✅ Truth:</strong> Moderate, guided physical activity is beneficial and supports normal delivery.</li>
          <li><strong>❌ Myth:</strong> “All cravings must be fulfilled.”<br /><strong>✅ Truth:</strong> Listen to your body, but keep portions and health in check.</li>
        </ul>
      </section>

      <section className="quiz-section">
        <h2>🧐 Fun Pregnancy Quiz – Test Your Knowledge!</h2>

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

export default NormalPregnancyCare;
