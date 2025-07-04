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
  <h3>🍎 Why Nutrition & Exercise Matter in Pregnancy</h3>
  <p>
    Pregnancy isn’t about “eating for two” — it’s about eating smart, moving safely, and living mindfully.
  </p>
  <ul>
    <li>🧠 Nutrition fuels your baby’s development — from brain to bones</li>
    <li>🩺 Exercise strengthens the body, prevents complications, and aids delivery</li>
    <li>❤️ Healthy habits reduce the risks of gestational diabetes, preeclampsia, and fatigue</li>
  </ul>
  <p>At Sukam, we offer safe, practical, and personalized nutrition and fitness guidance throughout all trimesters.</p>

  <h3>🥗 Daily Nutritional Needs in Pregnancy</h3>
  <p>Pregnancy increases your need for nutrients more than calories. Focus on:</p>
  <ul>
    <li><strong>Folic Acid (400–600 mcg):</strong> Prevents neural tube defects (Green leafy vegetables, citrus fruits, supplements)</li>
    <li><strong>Iron (27 mg):</strong> Prevents anemia (Spinach, dates, lentils, meats)</li>
    <li><strong>Calcium (1000–1200 mg):</strong> Bone & tooth development (Milk, paneer, sesame, almonds)</li>
    <li><strong>Protein (75–100 g):</strong> Builds baby’s tissues (Eggs, dal, tofu, chicken)</li>
    <li><strong>Vitamin D & B12:</strong> Nerve & immune health (Sunlight, cereals, supplements)</li>
    <li><strong>Omega-3s (DHA):</strong> Brain development (Fish, walnuts, flaxseeds, DHA capsules)</li>
  </ul>

  <h3>🗓️ What to Eat in Each Trimester</h3>
  <p><strong>First Trimester (Weeks 1–12):</strong></p>
  <ul>
    <li>Focus on nausea relief and early development</li>
    <li>Eat: dry snacks, soups, coconut water</li>
    <li>Avoid: raw sprouts, spicy food, strong smells</li>
  </ul>
  <p><strong>Second Trimester (Weeks 13–27):</strong></p>
  <ul>
    <li>Focus on rapid baby growth</li>
    <li>Eat: protein-rich meals, fresh fruits, home-cooked grains</li>
    <li>Include: moderate ghee</li>
  </ul>
  <p><strong>Third Trimester (Weeks 28–40):</strong></p>
  <ul>
    <li>Focus on weight gain, brain & lung development</li>
    <li>Eat: omega-rich foods, frequent meals</li>
    <li>Include: fiber to ease constipation</li>
  </ul>

  <h3>🚫 What to Avoid During Pregnancy</h3>
  <ul>
    <li>Raw meat, sushi</li>
    <li>Unpasteurized milk or cheese</li>
    <li>More than 200 mg caffeine per day</li>
    <li>Alcohol and tobacco</li>
    <li>Junk food, packaged snacks, soda</li>
  </ul>
  <p><strong>Myth Busting:</strong></p>
  <ul>
    <li>✅ Ripe papaya and pineapple are safe after first trimester</li>
    <li>✅ Ghee helps digestion, doesn’t “grease” the baby</li>
    <li>✅ Saffron doesn’t lighten baby’s skin — it may aid digestion</li>
  </ul>

  <h3>💧 Hydration, Cravings & Eating Habits</h3>
  <ul>
    <li>Drink 8–10 glasses of water daily</li>
    <li>Include coconut water, buttermilk, herbal teas</li>
    <li>Monitor for dehydration signs (dry lips, less urine)</li>
    <li>Cravings are normal — but if craving clay/soap (pica), consult your doctor</li>
  </ul>
  <p><strong>Tips:</strong></p>
  <ul>
    <li>Eat small, frequent meals</li>
    <li>Never skip breakfast</li>
    <li>Sit upright after meals to avoid reflux</li>
    <li>Chew slowly, eat mindfully</li>
  </ul>

  <h3>🏃‍♀️ Is Exercise Safe in Pregnancy?</h3>
  <p>Yes! With doctor’s clearance, moderate exercise offers huge benefits:</p>
  <ul>
    <li>✅ Improved posture & back support</li>
    <li>✅ Less swelling, better digestion</li>
    <li>✅ Improved sleep & energy</li>
    <li>✅ Better labor & quicker recovery</li>
  </ul>
  <p>Avoid contact sports, high heat yoga, and overexertion. Always check with your doctor first.</p>

  <h3>🤸 Recommended Safe Exercises</h3>
  <ul>
    <li><strong>Walking:</strong> 20–30 minutes daily</li>
    <li><strong>Prenatal Yoga:</strong> Builds strength & calms anxiety (avoid belly pressure or lying flat after 20 weeks)</li>
    <li><strong>Kegels:</strong> Strengthens pelvic muscles, supports postpartum recovery</li>
    <li><strong>Swimming:</strong> Eases joint pressure in later trimesters</li>
    <li><strong>Stretching & Deep Breathing:</strong> Reduces tension & promotes calm</li>
  </ul>

  <h3>⏰ Exercise Tips & Red Flags</h3>
  <p><strong>Do:</strong></p>
  <ul>
    <li>Wear good shoes and supportive clothing</li>
    <li>Stay well hydrated</li>
    <li>Warm up before, cool down after</li>
    <li>Listen to your body and rest when tired</li>
    <li>Exercise 3–5 times a week, 20–45 mins/session</li>
  </ul>
  <p><strong>Avoid Exercise if You Experience:</strong></p>
  <ul>
    <li>Vaginal bleeding</li>
    <li>Dizziness or shortness of breath</li>
    <li>Severe abdominal or pelvic pain</li>
    <li>Leaking fluid</li>
    <li>History of miscarriage or cervical weakness (unless cleared)</li>
  </ul>

  <h3>👩‍⚕️ Sukam’s Nutrition & Fitness Support</h3>
  <ul>
    <li>🥗 Customized diet plans by expert nutritionists</li>
    <li>🩺 Weekly weight and BP tracking</li>
    <li>💊 Supplement guidance based on test reports</li>
    <li>🧘 Prenatal yoga with certified trainers</li>
    <li>💬 Craving & nausea counseling</li>
    <li>🤝 Personal fitness consults based on trimester</li>
    <li>📋 Birth prep sessions: posture, breathing, relaxation</li>
  </ul>
  <p>✨ At Sukam, we care for every expecting mother like family — with nutrition, movement, and mindfulness.</p>
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
