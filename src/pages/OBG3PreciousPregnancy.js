import React, { useState } from 'react';
import './RP1InfertilityInsights.css';

const quizData = [
  {
    question: "IVF pregnancies are considered precious because:",
    options: [
      "They are risky",
      "They involve strong medications",
      "They often follow long infertility journeys",
      "They always have complications"
    ],
    answer: "They often follow long infertility journeys"
  },
  {
    question: "What’s one way to emotionally support yourself during a precious pregnancy?",
    options: [
      "Suppress your feelings",
      "Keep worries to yourself",
      "Talk to a counselor or join a support group",
      "Avoid discussing your pregnancy"
    ],
    answer: "Talk to a counselor or join a support group"
  },
  {
    question: "Which scan is most important in early pregnancy to confirm viability?",
    options: [
      "Growth scan",
      "NT scan",
      "Early transvaginal scan",
      "Doppler scan"
    ],
    answer: "Early transvaginal scan"
  },
  {
    question: "True or False: IVF pregnancies are always twins.",
    options: ["True", "False"],
    answer: "False"
  },
  {
    question: "A key emotional aspect of a precious pregnancy is:",
    options: [
      "Disinterest",
      "Anxiety mixed with hope",
      "Indifference",
      "Overconfidence"
    ],
    answer: "Anxiety mixed with hope"
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
        <p>
          A Precious Pregnancy is one that follows a long wait, emotional journey, or medical challenges—often after fertility treatments like IVF, IUI, or following previous pregnancy losses. At Sukam, we understand that these pregnancies come wrapped in hope, fear, and deep emotion.
        </p>

        <p>
          Our care goes beyond the medical—we offer constant reassurance, expert supervision, and emotional nurturing every step of the way. With compassion at our core and clinical excellence in our hands, we help you walk this path with confidence and peace.
        </p>

        <h3>🧪 What We Offer:</h3>
        <ul>
          <li>Personalized antenatal care for IVF/IUI pregnancies</li>
          <li>Close fetal monitoring with high-frequency scans and growth charts</li>
          <li>High-level emotional and psychological support</li>
          <li>Multidisciplinary care team including fertility specialists and obstetricians</li>
          <li>Planning and support for smooth delivery and recovery</li>
        </ul>

        <h3>💡 Gentle Tips for a Precious Pregnancy:</h3>
        <ul>
          <li>Practice mindfulness and positive visualization daily</li>
          <li>Keep a pregnancy journal to process emotions and track milestones</li>
          <li>Avoid online over-research—trust your care team</li>
          <li>Ask for support when you feel overwhelmed</li>
          <li>Attend childbirth and breastfeeding preparation classes</li>
        </ul>

        <h3>❌ Myth vs. Fact</h3>
        <ul>
          <li><strong>❌ Myth:</strong> “Precious pregnancies always need C-sections.”<br /><strong>✅ Truth:</strong> Many precious pregnancies can result in normal deliveries with proper support.</li>
          <li><strong>❌ Myth:</strong> “You shouldn’t move around much.”<br /><strong>✅ Truth:</strong> Moderate activity is healthy unless advised otherwise by your doctor.</li>
        </ul>
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
