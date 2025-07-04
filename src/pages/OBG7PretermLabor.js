// React component for ⚠️ Pre-term Labor

import React, { useState } from 'react';
import './RP1InfertilityInsights.css';

const quizData = [
  {
    question: "Preterm labor occurs before:",
    options: [
      "34 weeks",
      "37 weeks",
      "40 weeks",
      "28 weeks"
    ],
    answer: "37 weeks"
  },
  {
    question: "A sign of preterm labor is:",
    options: [
      "Back pain and regular contractions",
      "Nosebleed",
      "Fever",
      "Increased appetite"
    ],
    answer: "Back pain and regular contractions"
  },
  {
    question: "What is a tocolytic?",
    options: [
      "A blood thinner",
      "A uterine relaxant",
      "A vitamin",
      "A painkiller"
    ],
    answer: "A uterine relaxant"
  },
  {
    question: "Betamethasone is used to:",
    options: [
      "Treat fever",
      "Stop bleeding",
      "Help baby’s lungs mature",
      "Control nausea"
    ],
    answer: "Help baby’s lungs mature"
  },
  {
    question: "Which test predicts risk of preterm labor?",
    options: [
      "HbA1c",
      "fFN (fetal fibronectin)",
      "LFT",
      "BP monitoring"
    ],
    answer: "fFN (fetal fibronectin)"
  },
  {
    question: "A mother with previous preterm birth may be given:",
    options: [
      "Antibiotics",
      "Saffron",
      "Progesterone",
      "Estrogen"
    ],
    answer: "Progesterone"
  },
  {
    question: "Short cervix may be managed with:",
    options: [
      "Bed rest only",
      "Iron tablets",
      "Cerclage (stitch)",
      "Nothing"
    ],
    answer: "Cerclage (stitch)"
  },
  {
    question: "NICU helps with:",
    options: [
      "Vaccination",
      "Preterm baby care",
      "Maternal blood tests",
      "Blood donation"
    ],
    answer: "Preterm baby care"
  },
  {
    question: "Kangaroo care means:",
    options: [
      "Bottle-feeding",
      "Skin-to-skin bonding",
      "Ultrasound",
      "Exercise"
    ],
    answer: "Skin-to-skin bonding"
  },
  {
    question: "Magnesium sulfate protects:",
    options: [
      "Liver",
      "Baby’s brain",
      "Kidneys",
      "Lungs"
    ],
    answer: "Baby’s brain"
  }
];

const PretermLabor = () => {
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
      <h1>⚠️ Pre-term Labor</h1>
      <p className="lead">“When little feet can’t wait to meet you.”</p>

      <section className="info-section">
  <h3>⏳ What Is Preterm Labor?</h3>
  <p>
    Preterm labor is when your body begins labor before 37 weeks of pregnancy. If labor continues, it can lead to preterm birth, increasing the risk of complications for the baby.
  </p>
  <ul>
    <li><strong>Full-term pregnancy:</strong> 37–42 weeks</li>
    <li><strong>Preterm labor:</strong> Contractions + cervix changes before 37 weeks</li>
  </ul>
  <p>At Sukam, we aim to delay labor, protect your baby’s health, and support you physically and emotionally.</p>

  <h3>📊 Types of Preterm Birth</h3>
  <ul>
    <li><strong>Late preterm:</strong> 34–36 weeks</li>
    <li><strong>Moderate preterm:</strong> 32–34 weeks</li>
    <li><strong>Very preterm:</strong> 28–32 weeks</li>
    <li><strong>Extremely preterm:</strong> Before 28 weeks</li>
  </ul>
  <p><strong>Note:</strong> The earlier the birth, the higher the risk of breathing and feeding difficulties, infections, or NICU admission.</p>

  <h3>⚠️ Causes and Risk Factors</h3>
  <p>Preterm labor may occur unexpectedly, but common risk factors include:</p>
  <ul>
    <li><strong>Maternal health:</strong> High BP, diabetes, thyroid, infections, short cervix, bleeding, placenta previa/abruption</li>
    <li><strong>Lifestyle & history:</strong> Previous preterm delivery, smoking/alcohol, low weight, high physical stress, IVF or multiples</li>
  </ul>
  <p>Having a risk factor doesn’t mean preterm labor will happen — but it means closer monitoring is essential.</p>

  <h3>🚨 Warning Signs of Preterm Labor</h3>
  <ul>
    <li>Regular contractions (every 10 minutes or less)</li>
    <li>Low back pain or pelvic pressure</li>
    <li>Menstrual-like cramps</li>
    <li>Watery or bloody discharge</li>
    <li>Fluid leakage (possible rupture of membranes)</li>
  </ul>
  <p>Don’t wait — get checked even if symptoms seem mild.</p>

  <h3>🧪 Diagnosis of Preterm Labor</h3>
  <ul>
    <li>Contraction monitoring via fetal monitor</li>
    <li>Pelvic exam or ultrasound for cervix length</li>
    <li>Fetal fibronectin test (fFN)</li>
    <li>Amniotic fluid assessment to rule out rupture</li>
  </ul>
  <p>Diagnosis doesn't always lead to delivery — many episodes can be stopped successfully.</p>

  <h3>👩‍⚕️ How We Manage Preterm Labor at Sukam</h3>
  <ul>
    <li><strong>Tocolytics:</strong> Nifedipine or Atosiban to relax the uterus</li>
    <li><strong>Steroids:</strong> Betamethasone for fetal lung maturity (24–34 weeks)</li>
    <li><strong>Magnesium sulfate:</strong> Before 32 weeks for brain protection</li>
    <li><strong>Bed rest and hydration</strong></li>
    <li><strong>Antibiotics:</strong> If membranes are ruptured</li>
    <li><strong>NICU readiness:</strong> We coordinate early neonatal care if needed</li>
  </ul>
  <p>All care plans are customized and shared with you every step of the way.</p>

  <h3>🛡️ Can Preterm Labor Be Prevented?</h3>
  <ul>
    <li>Regular prenatal care and managing chronic health issues</li>
    <li>Avoiding infections and practicing good hygiene</li>
    <li>Eating a balanced diet (iron, calcium, protein)</li>
    <li>Managing stress and avoiding overexertion</li>
    <li><strong>Cervical cerclage:</strong> For weak or short cervix</li>
    <li><strong>Progesterone:</strong> For women with a history of early labor</li>
    <li>Completely avoid smoking, alcohol, and self-medication</li>
  </ul>
  <p>Yoga, breathing techniques, and emotional support can help reduce stress-related contractions.</p>

  <h3>👶 If Your Baby Is Born Early</h3>
  <ul>
    <li>NICU care for breathing, feeding, and warmth</li>
    <li>IV or tube feeding until baby can suck/swallow</li>
    <li>Phototherapy for jaundice</li>
    <li><strong>Kangaroo care:</strong> Skin-to-skin bonding with parents</li>
  </ul>
  <p>Sukam partners with trusted NICUs to ensure seamless neonatal care and family guidance.</p>

  <h3>💗 Sukam’s Supportive Approach to Preterm Labor</h3>
  <ul>
    <li>💗 High-risk pregnancy monitoring</li>
    <li>🩺 In-house scans and fetal monitoring</li>
    <li>💊 Timely steroids and magnesium protocols</li>
    <li>🤱 NICU collaboration</li>
    <li>🧘 Stress and emotional wellness support</li>
    <li>💬 Counseling for diet, rest, and warning signs</li>
    <li>📘 Antenatal classes for education and empowerment</li>
  </ul>
  <p><strong>Whether your baby comes early or on time, you are never alone — we walk this journey with you.</strong></p>
</section>


      <section className="quiz-section">
        <h2>🧠 Pre-term Labor Quiz – What’s Your Knowledge?</h2>

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

export default PretermLabor;
