import React, { useState } from 'react';
import './RP1InfertilityInsights.css';

const quizData = [
  {
    question: "Where do most ectopic pregnancies occur?",
    options: ["Uterus", "Ovary", "Fallopian tube", "Cervix"],
    answer: "Fallopian tube"
  },
  {
    question: "Common early symptom of ectopic pregnancy is:",
    options: ["Sharp right shoulder pain", "Sudden swelling", "One-sided pelvic pain", "Back acne"],
    answer: "One-sided pelvic pain"
  },
  {
    question: "Which test is crucial for diagnosis?",
    options: ["MRI", "Urine glucose", "Transvaginal ultrasound", "Chest X-ray"],
    answer: "Transvaginal ultrasound"
  },
  {
    question: "Methotrexate is:",
    options: [
      "A painkiller",
      "A hormone",
      "A chemotherapy drug that stops cell growth",
      "A fertility booster"
    ],
    answer: "A chemotherapy drug that stops cell growth"
  },
  {
    question: "Which is an emergency sign?",
    options: ["Breast tenderness", "Spotting", "Fainting and shoulder pain", "Headache"],
    answer: "Fainting and shoulder pain"
  },
  {
    question: "After ectopic, pregnancy is possible:",
    options: ["Never", "Only with IVF", "In many cases", "Only in surrogacy"],
    answer: "In many cases"
  },
  {
    question: "Methotrexate is most suitable when:",
    options: [
      "Rupture has occurred",
      "The embryo has heartbeat",
      "hCG is <5000, no bleeding",
      "The woman has twins"
    ],
    answer: "hCG is <5000, no bleeding"
  },
  {
    question: "hCG levels in ectopic pregnancy:",
    options: ["Rise normally", "Fall sharply", "Rise slowly or plateau", "Show no change"],
    answer: "Rise slowly or plateau"
  },
  {
    question: "Risk factor for ectopic is:",
    options: ["PCOS", "C-section", "Tubal surgery", "Diabetes"],
    answer: "Tubal surgery"
  },
  {
    question: "Treatment goal in ectopic is:",
    options: ["Continue pregnancy", "Remove uterus", "End pregnancy safely", "Boost ovulation"],
    answer: "End pregnancy safely"
  }
];


const EctopicPregnancy = () => {
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
      <h1>🚨 Ectopic Pregnancy</h1>
      <p className="lead">“A twist in the journey of life that needs urgent attention.”</p>

      <section className="info-section">
        <p>
          An ectopic pregnancy happens when a fertilized egg implants outside the uterus—most often in the fallopian tube.
          Though it cannot continue as a normal pregnancy, early detection and expert care are vital to protect the mother's health and future fertility.
        </p>

        <p>
          At Sukam, we recognize the emotional and physical toll this condition can bring.
          Our compassionate team ensures prompt diagnosis, safe treatment, and heartfelt support as you recover—medically and emotionally.
        </p>

        <h3>🩺 What We Offer:</h3>
        <ul>
          <li>Early pregnancy scans and beta-hCG monitoring</li>
          <li>Expert diagnosis through transvaginal ultrasound</li>
          <li>Medical or minimally invasive surgical management</li>
          <li>Post-treatment fertility guidance</li>
          <li>Emotional and psychological counseling support</li>
        </ul>

        <h3>🧠 Know the Signs of Ectopic Pregnancy:</h3>
        <ul>
          <li>One-sided lower abdominal pain</li>
          <li>Vaginal spotting or bleeding</li>
          <li>Shoulder-tip pain or dizziness (a red flag for internal bleeding)</li>
          <li>Missed period with unusual symptoms</li>
        </ul>

        <h3>⚠️ Myth vs. Fact</h3>
        <ul>
          <li><strong>❌ Myth:</strong> “Ectopic pregnancies are rare and not serious.”<br /><strong>✅ Truth:</strong> While not common, they can be life-threatening and require urgent attention.</li>
          <li><strong>❌ Myth:</strong> “You can never conceive again after an ectopic.”<br /><strong>✅ Truth:</strong> Many women go on to have healthy pregnancies with proper care and monitoring.</li>
        </ul>
      </section>

      <section className="quiz-section">
        <h2>🧠 Ectopic Pregnancy Quiz – Test Your Knowledge!</h2>

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

export default EctopicPregnancy;