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
        <p>
          Pre-term labor happens when contractions start before 37 completed weeks of pregnancy. It can lead to premature birth, which carries risks for the baby’s health and development. Early recognition and expert care are crucial to delay labor and improve outcomes.
        </p>
        <p>
          At Sukam Speciality Clinic and Fertility Centre, we specialize in identifying risk factors, monitoring closely, and offering timely interventions to protect both mother and baby when pre-term labor threatens.
        </p>

        <h3>🩺 What We Offer:</h3>
        <ul>
          <li>Risk assessment and preventive care for high-risk pregnancies</li>
          <li>Regular cervical length scans and fetal monitoring</li>
          <li>Medications to delay labor when appropriate</li>
          <li>Steroid administration to help mature baby’s lungs</li>
          <li>Neonatal intensive care coordination if early delivery occurs</li>
        </ul>

        <h3>🧘‍♀️ Tips to Help Prevent Pre-term Labor:</h3>
        <ul>
          <li>Avoid heavy lifting and strenuous activities</li>
          <li>Attend all scheduled antenatal check-ups</li>
          <li>Manage infections promptly</li>
          <li>Stay hydrated and maintain good nutrition</li>
          <li>Report any unusual contractions or symptoms immediately</li>
        </ul>

        <h3>🚫 Myth vs Fact</h3>
        <ul>
          <li><strong>❌ Myth:</strong> “Pre-term labor is always unavoidable.”<br /><strong>✅ Truth:</strong> Many pre-term labors can be prevented or delayed with proper care.</li>
          <li><strong>❌ Myth:</strong> “Once pre-term labor starts, nothing can stop it.”<br /><strong>✅ Truth:</strong> Certain medications and rest can often slow or stop contractions.</li>
        </ul>
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
