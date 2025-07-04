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
        <p>
          Not all pregnancies follow a predictable path. At Sukam, our High-Risk Pregnancy Care is crafted with compassion and precision for mothers-to-be who require extra medical attention due to pre-existing conditions, age-related risks, or complications in pregnancy.
        </p>
        <p>
          Whether you’re navigating gestational diabetes, high blood pressure, thyroid issues, IVF-conceived pregnancy, or a history of miscarriages, our multidisciplinary team ensures you’re never alone. We combine advanced diagnostics, constant monitoring, and heartfelt reassurance—because every mother and baby deserves a safe, supported journey.
        </p>

        <h3>🩺 What We Offer:</h3>
        <ul>
          <li>Tailored antenatal checkups with maternal-fetal medicine specialists</li>
          <li>Advanced fetal imaging (Doppler, anomaly scans)</li>
          <li>Diabetology and endocrinology support</li>
          <li>High-risk delivery planning with NICU standby</li>
          <li>Emotional support and birth readiness counseling</li>
        </ul>

        <h3>🧘‍♀️ Wellness Tips for High-Risk Pregnancies:</h3>
        <ul>
          <li>Avoid self-medication—always consult your doctor before taking anything</li>
          <li>Monitor blood pressure, sugar levels, or weight as advised</li>
          <li>Take prescribed medications and supplements without fail</li>
          <li>Reduce stress with guided prenatal meditation</li>
          <li>Sleep well, stay hydrated, and eat nutrient-dense meals</li>
        </ul>

        <h3>🚫 Busting the Myths:</h3>
        <ul>
          <li><strong>❌ Myth:</strong> “High-risk means guaranteed C-section.”<br /><strong>✅ Truth:</strong> With good care, many high-risk pregnancies still result in normal deliveries.</li>
          <li><strong>❌ Myth:</strong> “You should just lie in bed all day.”<br /><strong>✅ Truth:</strong> Bed rest is only needed in specific cases; gentle movement is often encouraged.</li>
        </ul>
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
