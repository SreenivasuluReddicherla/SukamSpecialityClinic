import React, { useState } from 'react';
import './RP1InfertilityInsights.css';

const quizData = [
  {
    question: "Which nutrient prevents neural tube defects?",
    options: ["Iron", "Protein", "Folic acid", "Calcium"],
    answer: "Folic acid"
  },
  {
    question: "Safe caffeine limit in pregnancy is:",
    options: ["500 mg/day", "0 mg/day", "200 mg/day", "Unlimited in second trimester"],
    answer: "200 mg/day"
  },
  {
    question: "Which is a safe, low-impact exercise?",
    options: ["Football", "Swimming", "CrossFit", "Jumping rope"],
    answer: "Swimming"
  },
  {
    question: "Pregnant women should avoid:",
    options: ["Ghee", "Junk food", "Dates", "Coconut water"],
    answer: "Junk food"
  },
  {
    question: "Omega-3s help in:",
    options: ["Liver growth", "Bone hardening", "Baby’s brain development", "Uterine contractions"],
    answer: "Baby’s brain development"
  },
  {
    question: "Which symptom needs exercise to stop immediately?",
    options: ["Mild leg swelling", "Feeling sleepy", "Vaginal bleeding", "Mild heartburn"],
    answer: "Vaginal bleeding"
  },
  {
    question: "Best way to deal with pregnancy reflux:",
    options: ["Lie down after meals", "Skip dinner", "Sit upright and eat small meals", "Drink soda"],
    answer: "Sit upright and eat small meals"
  },
  {
    question: "Kegel exercises strengthen:",
    options: ["Back", "Neck", "Pelvic floor", "Shoulders"],
    answer: "Pelvic floor"
  },
  {
    question: "Papaya and pineapple are:",
    options: [
      "Unsafe at all stages",
      "Always harmful",
      "Okay in ripe, small amounts after first trimester",
      "Nutritionally useless"
    ],
    answer: "Okay in ripe, small amounts after first trimester"
  },
  {
    question: "How much weight should a healthy woman gain in pregnancy (on average)?",
    options: ["2–3 kg", "5–8 kg", "11–15 kg", "20–25 kg"],
    answer: "11–15 kg"
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
