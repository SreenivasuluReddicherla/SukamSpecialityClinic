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
  <h3>🤰 What Is Normal Pregnancy Care?</h3>
  <p>
    Normal pregnancy care refers to regular medical checkups, screenings, nutrition, emotional support, and lifestyle practices for a healthy pregnancy journey. It ensures that both the mother and baby are growing well and prepares the family for safe childbirth.
  </p>
  <p>
    At Sukam Speciality Clinic & Fertility Centre, we follow an evidence-based yet compassionate approach — blending clinical precision with holistic wellness.
  </p>

  <h3>🩺 Your First Antenatal Visit (Week 6–8)</h3>
  <ul>
    <li>✅ Confirmation of pregnancy via scan</li>
    <li>✅ Estimating due date</li>
    <li>✅ Initial blood and urine tests</li>
    <li>✅ Thyroid, hemoglobin, and sugar level testing</li>
    <li>✅ Starting folic acid and iron supplements</li>
    <li>✅ Counseling on nutrition, rest, and red-flag symptoms</li>
  </ul>
  <p><strong>Emotional Tip:</strong> It’s normal to feel anxious. Ask questions and express fears — your doctor is here to listen.</p>

  <h3>📅 Your Trimester-Wise Pregnancy Journey</h3>
  <ul>
    <li><strong>First Trimester (0–12 weeks):</strong> Fatigue, nausea, emotional swings. Focus on folic acid, hydration, rest, NT scan.</li>
    <li><strong>Second Trimester (13–28 weeks):</strong> Appetite changes, backache. Anomaly scan, GTT, iron/calcium supplements, light exercise.</li>
    <li><strong>Third Trimester (29–40 weeks):</strong> Pelvic discomfort, breathlessness. Growth scans, fetal monitoring, labor preparation.</li>
  </ul>

  <h3>🥗 Nutrition and Supplements for Pregnancy</h3>
  <p>Pregnancy requires an extra 300–500 calories/day in later trimesters. Key nutrients include:</p>
  <ul>
    <li><strong>Folic Acid:</strong> Prevents birth defects – green leafy vegetables, fortified grains</li>
    <li><strong>Iron:</strong> Prevents anemia – spinach, dates, jaggery, meats</li>
    <li><strong>Calcium:</strong> Baby’s bones & teeth – milk, ragi, sesame seeds</li>
    <li><strong>Protein:</strong> Tissue building – eggs, legumes, lean meat</li>
    <li><strong>Fiber:</strong> Prevents constipation – fruits, whole grains</li>
  </ul>
  <p>⚠️ Avoid raw meat, papaya/pineapple (early pregnancy), alcohol, excess caffeine, and unpasteurized cheese.</p>

  <h3>🧘‍♀️ Exercise, Sleep & Emotional Health</h3>
  <ul>
    <li>Walking, prenatal yoga, breathing (with clearance)</li>
    <li>7–9 hrs sleep/day; left-side sleeping from 2nd trimester</li>
    <li>Meditation, journaling, and mother-to-mother support</li>
    <li>Partner involvement in appointments and support planning</li>
  </ul>
  <p><strong>Note:</strong> A happy mind builds a secure baby. Mind and body are deeply connected.</p>

  <h3>📝 Essential Tests & Scans (Checklist Format)</h3>
  <ul>
    <li><strong>Week 6–8:</strong> Ultrasound – Confirm pregnancy & heartbeat</li>
    <li><strong>Week 11–13:</strong> NT Scan – Screen for Down Syndrome</li>
    <li><strong>Week 18–20:</strong> Anomaly Scan – Baby’s organ development</li>
    <li><strong>Week 24–28:</strong> GTT – Detect gestational diabetes</li>
    <li><strong>Week 32–36:</strong> Growth Scan – Baby’s size, fluid, position</li>
  </ul>
  <p>All scans are safe, non-invasive, and performed with privacy and care.</p>

  <h3>👜 Preparing for Labor & Delivery</h3>
  <ul>
    <li>✅ Choose your delivery hospital</li>
    <li>✅ Know signs of labor: contractions, fluid leak, back pain</li>
    <li>✅ Attend antenatal classes</li>
    <li>✅ Pack hospital bag by 36 weeks</li>
    <li>✅ Discuss pain relief options (epidural, breathing techniques)</li>
  </ul>
  <p>
    <strong>Delivery Modes:</strong> 
    <br />
    • Normal vaginal delivery – safe and natural for most <br />
    • C-section – considered for complications or baby’s position
  </p>
  <p>Your doctor will guide you – mother and baby’s safety come first.</p>

  <h3>👨‍👩‍👧 What to Expect at Sukam</h3>
  <ul>
    <li>✨ Expert obstetric care from conception to delivery</li>
    <li>🧬 In-house blood tests & scans</li>
    <li>🥗 Antenatal diet & nutrition counseling</li>
    <li>🧘 Prenatal yoga & pelvic floor strengthening</li>
    <li>🍼 Lactation support and postnatal counseling</li>
    <li>❤️ Peaceful, mother-friendly care space</li>
    <li>🤱 Continuous support during labor with birth planning</li>
  </ul>

  <h3>🌈 Your Pregnancy Journey with Sukam</h3>
  <p>
    Pregnancy is not just about waiting — it’s about preparing, caring, and celebrating.
    <br />
    At Sukam, we offer a complete pregnancy care ecosystem — from diagnosis to delivery and beyond.
  </p>
  <blockquote>“We don’t just count your weeks, we walk your journey.”</blockquote>
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
