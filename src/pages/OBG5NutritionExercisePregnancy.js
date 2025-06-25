import React, { useState } from 'react';
import './RP1InfertilityInsights.css';

const quizData = [
  {
    question: "Which nutrient is most important for preventing neural tube defects?",
    options: ["Vitamin C", "Folic acid", "Calcium", "Iron"],
    answer: "Folic acid"
  },
  {
    question: "How much weight gain is generally recommended during a normal pregnancy?",
    options: ["2-5 kg", "7-12 kg", "15-20 kg", "25-30 kg"],
    answer: "7-12 kg"
  },
  {
    question: "Which of these is a safe exercise during pregnancy?",
    options: ["Heavy weightlifting", "Prenatal yoga", "Contact sports", "Scuba diving"],
    answer: "Prenatal yoga"
  },
  {
    question: "True or False: Pregnant women should avoid all fats in their diet.",
    options: ["True", "False"],
    answer: "False"
  },
  {
    question: "How much water should a pregnant woman drink daily?",
    options: ["4 glasses", "6 glasses", "8-10 glasses", "12-14 glasses"],
    answer: "8-10 glasses"
  }
];

const NutritionExercisePregnancy = () => {
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
      <h1>🥗 Nutrition and Exercise in Pregnancy</h1>
      <p className="lead">“Fuel the bump, move with purpose!”</p>

      <section className="info-section">
        <p>
          Healthy nutrition and safe exercise during pregnancy form the cornerstone of a smooth journey for both mother and baby. At Sukam Speciality Clinic and Fertility Centre, we guide you to eat well and stay active in ways that support growth, strength, and emotional balance.
        </p>

        <p>
          Good nutrition fuels your body and baby’s development, while tailored exercise helps reduce discomfort, boost mood, and prepare you for labor.
        </p>

        <h3>🩺 What We Offer:</h3>
        <ul>
          <li>Personalized nutrition plans based on trimester and health status</li>
          <li>Safe prenatal workout and yoga sessions</li>
          <li>Guidance on managing common pregnancy symptoms through diet and movement</li>
          <li>Weight gain monitoring and counseling</li>
          <li>Workshops on mindfulness and stress reduction through exercise</li>
        </ul>

        <h3>🍽️ Nutrition Tips:</h3>
        <ul>
          <li>Include a variety of colorful fruits and vegetables daily</li>
          <li>Eat whole grains like brown rice, oats, and millets</li>
          <li>Prioritize lean protein sources such as legumes, eggs, and poultry</li>
          <li>Limit caffeine and avoid alcohol completely</li>
          <li>Stay hydrated—water is your best friend</li>
        </ul>

        <h3>🤸‍♀️ Exercise Tips:</h3>
        <ul>
          <li>Start with gentle stretching or walking for 20-30 minutes daily</li>
          <li>Prenatal yoga to improve flexibility and reduce stress</li>
          <li>Avoid high-impact or risky activities</li>
          <li>Listen to your body—stop if you feel pain or dizziness</li>
          <li>Consult your doctor before starting any new exercise routine</li>
        </ul>

        <h3>🚫 Nutrition Myths Busted:</h3>
        <ul>
          <li><strong>❌ Myth:</strong> “Pregnant women should eat a lot of sugar to satisfy cravings.”<br /><strong>✅ Truth:</strong> Excess sugar can harm you and the baby; choose natural sweets like fruits.</li>
          <li><strong>❌ Myth:</strong> “You should avoid exercise to prevent miscarriage.”<br /><strong>✅ Truth:</strong> Moderate, safe exercise is beneficial unless medically contraindicated.</li>
        </ul>
      </section>

      <section className="quiz-section">
        <h2>🧠 Nutrition & Exercise Quiz – Test Your Pregnancy Smarts!</h2>

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

export default NutritionExercisePregnancy;
