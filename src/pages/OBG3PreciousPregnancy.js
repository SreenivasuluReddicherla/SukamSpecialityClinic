import React, { useState } from 'react';
import './RP1InfertilityInsights.css';

const quizData = [
  {
    question: "What is the first scan in a precious pregnancy?",
    options: ["NT scan", "Viability scan", "Anomaly scan", "Growth scan"],
    answer: "Viability scan"
  },
  {
    question: "Which hormone supports early pregnancy?",
    options: ["Progesterone", "Estrogen", "Testosterone", "Oxytocin"],
    answer: "Progesterone"
  },
  {
    question: "Aspirin in pregnancy is given to:",
    options: [
      "Reduce pain",
      "Prevent clots and improve placenta",
      "Cure nausea",
      "Reduce weight"
    ],
    answer: "Prevent clots and improve placenta"
  },
  {
    question: "Cervical length is assessed to:",
    options: [
      "Predict gender",
      "Predict early labor",
      "Detect infection",
      "Measure uterus"
    ],
    answer: "Predict early labor"
  },
  {
    question: "GTT is used for:",
    options: ["Kidney health", "BP", "Diabetes screening", "Infection"],
    answer: "Diabetes screening"
  },
  {
    question: "When is fetal anomaly scan usually done?",
    options: ["10 weeks", "18–20 weeks", "24 weeks", "28 weeks"],
    answer: "18–20 weeks"
  },
  {
    question: "In IVF pregnancies, hormonal support continues till:",
    options: ["6 weeks", "8 weeks", "12–14 weeks", "40 weeks"],
    answer: "12–14 weeks"
  },
  {
    question: "What is a rainbow baby?",
    options: [
      "IVF baby",
      "Baby born after previous loss",
      "Premature baby",
      "High birth weight baby"
    ],
    answer: "Baby born after previous loss"
  },
  {
    question: "What is common in precious pregnancy emotions?",
    options: ["Indifference", "Joy only", "Joy + anxiety", "Hyperactivity"],
    answer: "Joy + anxiety"
  },
  {
    question: "Is vaginal delivery possible in precious pregnancy?",
    options: ["No", "Yes", "Only twins", "Only after 40 weeks"],
    answer: "Yes"
  }
];

const PreciousPregnancy = () => {
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
      <h1>🌟 Precious Pregnancy</h1>
      <p className="lead">“When every heartbeat is a miracle.”
      </p>

      <section className="info-section">
  <h3>💖 What Is a Precious Pregnancy?</h3>
  <p>
    A precious pregnancy is one that holds special emotional and medical value — typically following a long journey of hope, heartbreak, and healing. This may include:
  </p>
  <ul>
    <li>Conception after fertility treatment (IVF, ICSI, IUI)</li>
    <li>Pregnancy after multiple miscarriages or losses</li>
    <li>Pregnancy following stillbirth or neonatal loss</li>
    <li>Older maternal age (35+)</li>
    <li>Pregnancy after long-standing infertility or uterine surgery</li>
  </ul>
  <p>
    These pregnancies require closer medical supervision and emotional support to ensure the well-being of both mother and baby.
  </p>

  <h3>🩺 Medical Background & Risk Factors</h3>
  <ul>
    <li><strong>Fertility Treatments:</strong> IVF, ICSI, IUI, donor gametes, frozen embryo transfers, low ovarian reserve</li>
    <li><strong>Maternal Conditions:</strong> Recurrent losses, thyroid dysfunction, APLA syndrome, fibroids, autoimmune issues</li>
    <li><strong>Emotional Circumstances:</strong> Anxiety, emotional/financial exhaustion, social pressure</li>
  </ul>
  <p>These cases need both medical expertise and emotional care — a combination we provide at Sukam.</p>

  <h3>📋 First Steps in Precious Pregnancy Care</h3>
  <ul>
    <li>Viability scan at 6–8 weeks to confirm heartbeat</li>
    <li>Continued hormonal support (progesterone, hCG)</li>
    <li>Bloodwork: beta-hCG trends, progesterone, thyroid, clotting, sugar</li>
    <li>Begin early emotional support and counseling</li>
  </ul>
  <p>More frequent checkups — weekly or biweekly — are common in the first trimester, especially after previous losses.</p>

  <h3>🧠 Emotional Wellbeing in Precious Pregnancy</h3>
  <p>
    Thoughts like “I’m afraid to hope” or “I still cry for the baby I lost” are common. We support emotional safety with:
  </p>
  <ul>
    <li>✅ Private, unrushed consultations</li>
    <li>✅ Partner counseling & validation</li>
    <li>✅ Guided journaling, mindfulness support</li>
    <li>✅ Optional support group referrals</li>
  </ul>
  <p><strong>Joy and fear can coexist — and that’s okay.</strong></p>

  <h3>🍎 Nutrition & 🛌 Rest for the Precious Mother</h3>
  <ul>
    <li><strong>Nutrition:</strong> Protein-rich diet, folic acid, iron, calcium, low-GI foods, 8–10 glasses water/day</li>
    <li><strong>Avoid:</strong> Raw meat, processed snacks, excess caffeine, papaya/pineapple in early pregnancy</li>
    <li><strong>Rest:</strong> 8–10 hours sleep + naps, avoid long travel, heavy lifting, climbing stairs quickly</li>
  </ul>
  <p>Even mental rest matters — limit stress, screen time, and loud environments.</p>

  <h3>📅 Scans and Monitoring Schedule</h3>
  <ul>
    <li><strong>6–8 weeks:</strong> Viability scan</li>
    <li><strong>11–13 weeks:</strong> NT scan + dual marker</li>
    <li><strong>16–18 weeks:</strong> Cervical length scan</li>
    <li><strong>18–20 weeks:</strong> Anomaly scan</li>
    <li><strong>24–28 weeks:</strong> Glucose tolerance test (GTT)</li>
    <li><strong>28–32 weeks:</strong> Growth + Doppler scan</li>
    <li><strong>36–38 weeks:</strong> Final growth scan</li>
  </ul>
  <p>Additional tests may include clotting profiles, beta-hCG serial testing, or fetal echocardiography.</p>

  <h3>💊 Medication & Medical Support</h3>
  <ul>
    <li><strong>Hormones:</strong> Progesterone, hCG, estrogen (in FET cycles)</li>
    <li><strong>Blood thinners:</strong> Low-dose aspirin, heparin (for clotting disorders)</li>
    <li><strong>Hospital rest:</strong> For placental issues, bleeding, or short cervix</li>
  </ul>
  <p>Medication plans are personalized — avoid comparing your regimen with others.</p>

  <h3>🍼 Delivery Planning in Precious Pregnancy</h3>
  <ul>
    <li>Delivery plan based on conception type, placental and fetal health</li>
    <li>Options: Monitored vaginal birth or elective cesarean</li>
    <li>NICU alert, birth coach and emotional preparation included</li>
  </ul>

  <h3>👩‍⚕️ How Sukam Supports Precious Pregnancies</h3>
  <ul>
    <li>✅ OB-GYNs with expertise in IVF and pregnancy loss</li>
    <li>✅ In-house Fetal Medicine Unit</li>
    <li>✅ Weekly progesterone clinics & custom scan schedules</li>
    <li>✅ Clotting profile and genetic counseling</li>
    <li>✅ 24x7 NICU support</li>
    <li>✅ Nutrition and psychology support</li>
    <li>✅ Partner education & gentle birth planning</li>
    <li>✅ Postpartum mental health care</li>
  </ul>
  <p><strong>We care with our minds, and treat with our hearts.</strong></p>
</section>


      <section className="quiz-section">
        <h2>🧠 Quiz – How Well Do You Know Precious Pregnancy?</h2>

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

export default PreciousPregnancy;
