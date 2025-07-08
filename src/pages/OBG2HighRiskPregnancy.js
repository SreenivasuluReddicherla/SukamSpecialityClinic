import React, { useState } from 'react';
import './RP1InfertilityInsights.css';

const quizData = [
  {
    question: "Which of the following is NOT a high-risk factor?",
    options: ["Diabetes", "Age 36", "Balanced diet", "Twin pregnancy"],
    answer: "Balanced diet"
  },
  {
    question: "When is the anomaly scan done?",
    options: ["10–12 weeks", "18–20 weeks", "24 weeks", "36 weeks"],
    answer: "18–20 weeks"
  },
  {
    question: "What is placenta previa?",
    options: [
      "Low fluid",
      "High BP",
      "Placenta covers cervix",
      "Early labor"
    ],
    answer: "Placenta covers cervix"
  },
  {
    question: "High-risk pregnancy means:",
    options: [
      "Impossible to deliver",
      "Needs closer monitoring",
      "Always C-section",
      "Always miscarriage"
    ],
    answer: "Needs closer monitoring"
  },
  {
    question: "Which scan checks blood flow in baby’s vessels?",
    options: ["NT scan", "2D scan", "Doppler", "MRI"],
    answer: "Doppler"
  },
  {
    question: "Bed rest is advised in:",
    options: ["Placenta previa", "PCOD", "Normal pregnancy", "After delivery"],
    answer: "Placenta previa"
  },
  {
    question: "GTT tests for:",
    options: ["Hemoglobin", "Thyroid", "Diabetes", "Protein levels"],
    answer: "Diabetes"
  },
  {
    question: "Why is frequent ultrasound needed in high-risk pregnancy?",
    options: [
      "Entertainment",
      "To track baby’s weight and fluid",
      "To check gender",
      "To detect BP"
    ],
    answer: "To track baby’s weight and fluid"
  },
  {
    question: "Cervical length scan helps to:",
    options: [
      "Predict preterm labor",
      "Measure baby’s heartbeat",
      "Check placenta",
      "Confirm dates"
    ],
    answer: "Predict preterm labor"
  },
  {
    question: "Which is a serious pregnancy complication?",
    options: ["Anemia", "Preeclampsia", "Nausea", "Leg cramps"],
    answer: "Preeclampsia"
  }
];


const HighRiskPregnancy = () => {
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
      <h1>🔍 High-Risk Pregnancy Care</h1>
      <p className="lead">“Special care for special journeys.”</p>

     <section className="info-section">
  <h3>🚨 What Is a High-Risk Pregnancy?</h3>
  <p>
    A high-risk pregnancy means there’s a higher chance of complications affecting the mother, baby, or both. But high-risk doesn’t mean hopeless — it simply means you need closer monitoring, more support, and expert care.
    Some pregnancies begin as high-risk. Others become high-risk during the journey.
  </p>
  <p>
    At Sukam Speciality Clinic, we specialize in identifying risks early and managing them with precision, compassion, and constant vigilance.
  </p>

  <h3>📌 Common Risk Factors for High-Risk Pregnancy</h3>
  <ul>
    <li><strong>Pre-existing maternal conditions:</strong> Diabetes, Hypertension, Thyroid disorders, PCOS, Obesity, Epilepsy, Asthma, Autoimmune diseases</li>
    <li><strong>Pregnancy-related complications:</strong> Preeclampsia, Gestational diabetes, Placenta previa/abruption, Preterm labor history, Twin/multiple pregnancy, Abnormal fetal growth/anomalies</li>
    <li><strong>Maternal factors:</strong> Age &lt;18 or &gt;35, Previous miscarriage/stillbirth, IVF/ICSI pregnancy, Smoking, alcohol/drug use, Poor nutrition or low BMI</li>
  </ul>

  <h3>📝 First Steps After a High-Risk Diagnosis</h3>
  <ul>
    <li>✅ Don’t panic</li>
    <li>✅ Understand your risk type</li>
    <li>✅ Stick to all appointments</li>
    <li>✅ Ask about every test and its reason</li>
    <li>✅ Keep an emergency contact system ready</li>
  </ul>
  <p>
    You may need more frequent scans, specialist consultations, lifestyle/diet changes, and an early hospital delivery plan.
  </p>

  <h3>🧪 Key Tests and Monitoring</h3>
  <ul>
    <li><strong>Week 6–10:</strong> Early ultrasound – confirm heartbeat, rule out ectopic</li>
    <li><strong>Week 11–13:</strong> NT Scan + Dual Marker – genetic screening</li>
    <li><strong>Week 16–18:</strong> Cervical length scan – predict preterm labor</li>
    <li><strong>Week 18–20:</strong> Anomaly scan – birth defects check</li>
    <li><strong>Week 24–28:</strong> OGTT – test for gestational diabetes</li>
    <li><strong>Week 32–36:</strong> Growth scan + Doppler – placenta & blood flow check</li>
  </ul>
  <p>You may also require: 24-hr BP monitoring, fetal echocardiography, or amniocentesis (if needed).</p>

  <h3>🧘‍♀️ Daily Care & Lifestyle in High-Risk Pregnancy</h3>
  <ul>
    <li>Rest and prioritize sleep/naps</li>
    <li>Eat small, frequent, balanced meals with sugar/salt control</li>
    <li>Strictly follow prescribed medications</li>
    <li>Avoid stress, long travel, physical strain</li>
    <li>Stay hydrated – 2.5 to 3L/day</li>
    <li>Take supplements – Iron, Calcium, Folic acid, and condition-specific vitamins</li>
  </ul>
  <p>⚠️ Some high-risk mothers may need bed rest, injections, or hospitalization – this is for your safety, not punishment.</p>

  <h3>🍼 Delivery Planning for High-Risk Pregnancies</h3>
  <ul>
    <li>Early delivery (before 40 weeks) may be needed</li>
    <li>Plan delivery at a hospital with NICU</li>
    <li>C-section may be preferred based on your or baby’s health</li>
    <li>Fetal distress or maternal emergencies are pre-anticipated & monitored</li>
  </ul>
  <p>
    At Sukam, our OB-GYNs, anesthetists, pediatricians, and MFM specialists work as a team for safe delivery outcomes.
  </p>

  <h3>🧠 Emotional & Mental Health Support</h3>
  <p>High-risk pregnancy can cause emotional challenges:</p>
  <ul>
    <li>Fear of complications</li>
    <li>Overwhelming pressure to “do everything right”</li>
    <li>Loneliness due to limited mobility</li>
    <li>Anxiety about test results</li>
  </ul>
  <p>What helps:</p>
  <ul>
    <li>✅ Counseling or joining support groups</li>
    <li>✅ Open communication with doctors</li>
    <li>✅ Breathing techniques, guided meditation, prayer</li>
    <li>✅ Strong support from family</li>
  </ul>
  <p><strong>Note:</strong> You don’t have to stay strong all the time — vulnerability is human.</p>

  <h3>📖 Real-Life Stories from Sukam</h3>
  <ul>
    <li><strong>Gestational Diabetes:</strong> Mrs. A (age 33) followed diet + walking + glucose checks. Delivered naturally at 38 weeks.</li>
    <li><strong>IVF Twin Pregnancy with BP:</strong> Mrs. B had high BP at 30 weeks. With close monitoring and meds, she delivered twins via C-section at 36 weeks.</li>
    <li><strong>Placenta Previa:</strong> Mrs. C was diagnosed at 28 weeks, managed with bed rest, and had a smooth vaginal delivery at 39 weeks.</li>
  </ul>

  <h3>🏥 What We Do at Sukam for High-Risk Pregnancies</h3>
  <ul>
    <li>✅ Specialist obstetricians for high-risk pregnancies</li>
    
    <li>✅ Fetal monitoring and emergency care</li>
    <li>✅ Endocrinology and dietician support</li>
    <li>✅ NICU support with pediatricians on standby</li>
    <li>✅ Mental health and partner education</li>
    <li>✅ Regular scans and blood work</li>
    <li>✅ Staff trained in high-risk care protocols</li>
  </ul>
  <p><strong>At Sukam, we don’t just manage complications — we care, support, and journey with you.</strong></p>
</section>

      <section className="quiz-section">
        <h2>🧠 Quick Quiz – Are You High-Risk Savvy?</h2>

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

export default HighRiskPregnancy;
