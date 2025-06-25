import React, { useState } from 'react';
import './RP1InfertilityInsights.css';

const quizData = [
  {
    question: "What type of procedure is hysteroscopy?",
    options: [
      "Open surgery",
      "Minimally invasive endoscopic procedure",
      "Blood test",
      "X-ray"
    ],
    answer: "Minimally invasive endoscopic procedure"
  },
  {
    question: "True or False: Laparoscopy helps treat endometriosis.",
    options: ["True", "False"],
    answer: "True"
  },
  {
    question: "Which organ is NOT evaluated during hysteroscopy?",
    options: ["Uterus", "Ovaries", "Fallopian tubes", "Liver"],
    answer: "Liver"
  },
  {
    question: "What is a common benefit of hystero-laparoscopy?",
    options: ["Longer hospital stay", "Faster recovery", "Larger surgical scars", "No diagnosis"],
    answer: "Faster recovery"
  },
  {
    question: "When should you contact your doctor after the procedure?",
    options: [
      "If pain is severe or fever occurs",
      "Only after a month",
      "Never",
      "Immediately after discharge"
    ],
    answer: "If pain is severe or fever occurs"
  }
];

const HysteroLaparoscopy = () => {
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
      <h1>🔬 Hystero-Laparoscopy</h1>
      <p className="lead">“A peek inside to find and fix.”</p>

      <section className="info-section">
        <p>
          Hysteroscopy and laparoscopy are minimally invasive procedures used to diagnose and treat various gynecological conditions. They allow doctors to visualize the uterus, ovaries, and pelvic cavity with precision, often avoiding the need for open surgery.
        </p>

        <p>
          At Sukam Speciality Clinic and Fertility Centre, we utilize advanced hystero-laparoscopic techniques to offer safe, effective, and faster recovery treatments.
        </p>

        <h3>🩺 What We Offer:</h3>
        <ul>
          <li>Diagnostic hysteroscopy and laparoscopy for abnormal bleeding, infertility, and pelvic pain</li>
          <li>Removal of fibroids, polyps, adhesions, and ovarian cysts</li>
          <li>Treatment of endometriosis and uterine abnormalities</li>
          <li>Fertility-enhancing procedures such as tubal blockage evaluation and correction</li>
          <li>Expert anesthesia and post-operative care for comfort and safety</li>
        </ul>

        <h3>💡 Tips for Preparation and Recovery:</h3>
        <ul>
          <li>Follow pre-procedure instructions regarding fasting and medications</li>
          <li>Arrange for a companion on the day of the procedure</li>
          <li>Rest adequately post-procedure and follow all care guidelines</li>
          <li>Report any unusual pain, bleeding, or fever promptly</li>
          <li>Maintain follow-up visits for optimal recovery and results</li>
        </ul>

        <h3>🚫 Myth vs Fact:</h3>
        <ul>
          <li><strong>❌ Myth:</strong> “Hystero-laparoscopy is painful and requires long hospitalization.”<br /><strong>✅ Truth:</strong> These are minimally invasive procedures with minimal pain and short hospital stays.</li>
          <li><strong>❌ Myth:</strong> “It’s only used for fertility issues.”<br /><strong>✅ Truth:</strong> Hystero-laparoscopy is used for various gynecological problems beyond fertility.</li>
        </ul>
      </section>

      <section className="quiz-section">
        <h2>🧠 Hystero-Laparoscopy Quiz — Test Your Knowledge!</h2>

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

export default HysteroLaparoscopy;
