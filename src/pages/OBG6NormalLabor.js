import React, { useState } from 'react';
import './RP1InfertilityInsights.css';

const quizData = [
  {
    question: "Which hormone primarily triggers labor contractions?",
    options: ["Oxytocin", "Estrogen", "Progesterone", "Prolactin"],
    answer: "Oxytocin"
  },
  {
    question: "True or False: It’s normal for labor to last several hours to even days.",
    options: ["True", "False"],
    answer: "True"
  },
  {
    question: "Which position can help speed up labor?",
    options: ["Lying flat on your back", "Walking or squatting", "Sitting still", "Standing on one leg"],
    answer: "Walking or squatting"
  },
  {
    question: "When should you head to the hospital during labor?",
    options: [
      "When contractions are 5 minutes apart and regular",
      "When water breaks",
      "If you experience bleeding or severe pain",
      "All of the above"
    ],
    answer: "All of the above"
  },
  {
    question: "Skin-to-skin contact immediately after birth helps:",
    options: [
      "Regulate baby’s temperature",
      "Promote bonding and breastfeeding",
      "Calm both mother and baby",
      "All of the above"
    ],
    answer: "All of the above"
  }
];

const NormalLabor = () => {
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
      <h1>🌿 Normal Labor</h1>
      <p className="lead">“Nature’s way of saying, ‘It’s showtime!’”</p>

      <section className="info-section">
        <p>
          Labor is the amazing process through which your body prepares to welcome your baby into the world. At Sukam Speciality Clinic and Fertility Centre, we support natural, healthy labor by combining expert medical care with a calm, reassuring environment that honors your birthing choices.
        </p>

        <p>
          Our goal is to guide you safely through every contraction and push, empowering you to embrace childbirth with confidence and comfort.
        </p>

        <h3>🩺 What We Offer:</h3>
        <ul>
          <li>Continuous labor monitoring with modern fetal heart and contraction tracking</li>
          <li>Supportive midwifery and obstetric care tailored to your birth plan</li>
          <li>Pain management options including breathing techniques, labor positions, and medication</li>
          <li>Immediate newborn care and skin-to-skin bonding support</li>
          <li>Postpartum recovery and breastfeeding guidance</li>
        </ul>

        <h3>🤰 Tips for a Smooth Normal Labor:</h3>
        <ul>
          <li>Stay hydrated and keep light snacks handy (if allowed by your doctor)</li>
          <li>Practice breathing and relaxation techniques learned during antenatal classes</li>
          <li>Use upright positions or walking to help labor progress naturally</li>
          <li>Surround yourself with supportive people</li>
          <li>Trust your body’s rhythm and ask for help when needed</li>
        </ul>

        <h3>🚫 Labor Myths Busted:</h3>
        <ul>
          <li><strong>❌ Myth:</strong> “You have to rush to the hospital as soon as contractions start.”<br /><strong>✅ Truth:</strong> Early labor can be slow—timing contractions and consulting your doctor helps decide when to come.</li>
          <li><strong>❌ Myth:</strong> “All labor pains require an epidural.”<br /><strong>✅ Truth:</strong> Many women manage labor naturally with coping techniques; epidurals are optional.</li>
        </ul>
      </section>

      <section className="quiz-section">
        <h2>🧠 Labor Quiz – Ready for the Big Day?</h2>

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

export default NormalLabor;
