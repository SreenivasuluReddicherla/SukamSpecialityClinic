import React, { useState } from 'react';
import './RP1InfertilityInsights.css';

const quizData = [
  {
    question: "Spotting in early pregnancy can be caused by:",
    options: [
      "Implantation bleeding",
      "Infection",
      "Cervical irritation",
      "All of the above"
    ],
    answer: "All of the above"
  },
  {
    question: "Placenta previa means:",
    options: [
      "Placenta is low lying and covers the cervix",
      "Baby’s heart is slow",
      "Water broke prematurely",
      "Labor has started"
    ],
    answer: "Placenta is low lying and covers the cervix"
  },
  {
    question: "True or False: You should always lie flat on your back if you bleed during pregnancy.",
    options: ["True", "False"],
    answer: "False"
  },
  {
    question: "What is the recommended action if you experience heavy bleeding?",
    options: [
      "Call your healthcare provider immediately",
      "Drink water and wait",
      "Ignore it if you feel fine",
      "Take painkillers and rest"
    ],
    answer: "Call your healthcare provider immediately"
  },
  {
    question: "Ultrasound helps to:",
    options: [
      "Confirm pregnancy location",
      "Check fetal health",
      "Detect cause of bleeding",
      "All of the above"
    ],
    answer: "All of the above"
  }
];

const BleedingInPregnancy = () => {
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const handleOptionClick = (index, option) => {
    setSelectedAnswers({ ...selectedAnswers, [index]: option });
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
  const total = quizData.length;
  const answered = Object.keys(selectedAnswers).length;
  const progress = (answered / total) * 100;

  return (
    <div className="infertility-container">
      <h1>🔴 Bleeding in Pregnancy</h1>
      <p className="lead">“A red flag on the road to motherhood.”</p>

      <section className="info-section">
        <p>Bleeding during pregnancy can be alarming, but it doesn’t always mean danger. From spotting in early weeks to more significant bleeding later on, it requires careful evaluation and timely intervention.</p>
        <p>At Sukam Speciality Clinic and Fertility Centre, we offer thorough diagnostics, personalized treatment plans, and compassionate care to ensure the safety of both mother and baby through every stage.</p>

        <h3>🩺 What We Offer:</h3>
        <ul>
          <li>Early pregnancy ultrasounds to determine cause of bleeding</li>
          <li>Monitoring of maternal and fetal wellbeing</li>
          <li>Management of conditions like threatened miscarriage, placenta previa, or abruptio placentae</li>
          <li>Bed rest guidance and medication when needed</li>
          <li>Continuous emotional support and counseling</li>
        </ul>

        <h3>⚠️ When to Seek Immediate Help:</h3>
        <ul>
          <li>Heavy bleeding with clots</li>
          <li>Severe abdominal pain</li>
          <li>Dizziness or fainting</li>
          <li>Fever or chills</li>
          <li>Decreased fetal movements</li>
        </ul>

        <h3>🚫 Myth vs Fact</h3>
        <ul>
          <li><strong>❌ Myth:</strong> “Light bleeding is harmless during pregnancy.”<br/><strong>✅ Truth:</strong> Even light bleeding should be evaluated to rule out complications.</li>
          <li><strong>❌ Myth:</strong> “Bleeding always means miscarriage.”<br/><strong>✅ Truth:</strong> Many women with bleeding go on to have healthy pregnancies.</li>
        </ul>
      </section>

      <section className="quiz-section">
        <h2>🧠 Bleeding in Pregnancy Quiz – Test Your Awareness</h2>
        <div className="progress-bar-container">
          <div className="progress-bar" style={{ width: `${progress}%` }}></div>
        </div>

        {quizData.map((q, i) => (
          <div key={i} className="quiz-question">
            <p>{i + 1}. {q.question}</p>
            <div className="options">
              {q.options.map((opt, j) => (
                <button
                  key={j}
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

        {!showResults && answered === total && (
          <button className="submit-button" onClick={() => setShowResults(true)}>See Results</button>
        )}

        {showResults && (
          <div className="results-section">
            <p>✅ Correct Answers: {results.correct}</p>
            <p>❌ Wrong Answers: {results.wrong}</p>
            <div className="score-breakdown">
              <h4>Detailed Score Breakdown</h4>
              <ul>
                {quizData.map((q, i) => (
                  <li key={i}>
                    <strong>Q{i + 1}:</strong> {q.question} — <span style={{ color: selectedAnswers[i] === q.answer ? 'green' : 'red' }}>
                      {selectedAnswers[i] === q.answer ? 'Correct' : 'Incorrect'} (Your Answer: {selectedAnswers[i]})
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

export default BleedingInPregnancy;
