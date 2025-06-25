import React, { useState } from 'react';
import './RP1InfertilityInsights.css';

const quizData = [
  {
    question: "What does IUI stand for?",
    options: [
      "Intrauterine Injection",
      "Intrauterine Insemination",
      "Internal Uterine Insemination",
      "None of the above"
    ],
    answer: "Intrauterine Insemination"
  },
  {
    question: "When is sperm inserted during IUI?",
    options: [
      "At any time",
      "Around ovulation",
      "After menstruation",
      "During pregnancy"
    ],
    answer: "Around ovulation"
  },
  {
    question: "True or False: IUI requires surgery.",
    options: ["True", "False"],
    answer: "False"
  },
  {
    question: "Which factor can increase the success rate of IUI?",
    options: [
      "Smoking",
      "Healthy sperm",
      "High stress",
      "None of the above"
    ],
    answer: "Healthy sperm"
  },
  {
    question: "Can ovulation induction be combined with IUI?",
    options: ["Yes", "No"],
    answer: "Yes"
  }
];

const IUI = () => {
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
      <h1>🌟 IUI – A Shortcut for Sperm on Their Journey Home</h1>
      <p className="lead">“A simple, effective step closer to your dream.”</p>

      <section className="info-section">
        <p>
          Intrauterine insemination (IUI) is a minimally invasive fertility treatment where specially prepared sperm is placed directly into the uterus around the time of ovulation. This helps sperm reach the egg faster and increases the chances of fertilization. At Sukam Speciality Clinic and Fertility Centre, we provide precise timing, expert care, and personalized protocols to give you the best chance for pregnancy.
        </p>

        <h3>🩺 What We Offer:</h3>
        <ul>
          <li>Comprehensive fertility evaluation for both partners</li>
          <li>Ovulation monitoring and timing of insemination</li>
          <li>Preparation and washing of sperm to enhance motility</li>
          <li>Comfortable, outpatient IUI procedure</li>
          <li>Follow-up monitoring and support</li>
          <li>Counseling on combining IUI with ovulation induction if needed</li>
        </ul>

        <h3>💡 Tips for IUI Success:</h3>
        <ul>
          <li>Maintain healthy habits—balanced diet, exercise, and sleep</li>
          <li>Avoid alcohol, smoking, and excessive caffeine</li>
          <li>Keep stress low through relaxation techniques</li>
          <li>Follow your doctor’s timing instructions carefully</li>
          <li>Stay positive and patient—sometimes it takes a few cycles</li>
        </ul>

        <h3>🚫 Myth vs Fact:</h3>
        <ul>
          <li><strong>❌ Myth:</strong> “IUI is painful and risky.”<br /><strong>✅ Truth:</strong> IUI is a simple, low-risk outpatient procedure with minimal discomfort.</li>
          <li><strong>❌ Myth:</strong> “IUI guarantees pregnancy.”<br /><strong>✅ Truth:</strong> Success varies based on individual factors; multiple cycles may be needed.</li>
        </ul>
      </section>

      <section className="quiz-section">
        <h2>🧠 IUI Quiz — How Fertility-Savvy Are You?</h2>

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

export default IUI;
