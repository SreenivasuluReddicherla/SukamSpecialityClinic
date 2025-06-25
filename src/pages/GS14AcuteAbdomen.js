import React, { useState } from 'react';
import './RP1InfertilityInsights.css';

const quizData = [
  {
    question: "What is \"acute abdomen\"?",
    options: [
      "Long-term bloating",
      "Minor stomach upset",
      "Sudden, severe abdominal pain requiring urgent care",
      "Pain from overeating"
    ],
    answer: "Sudden, severe abdominal pain requiring urgent care"
  },
  {
    question: "Which condition is a common cause of acute abdomen?",
    options: ["Constipation", "Appendicitis", "Sore throat", "Migraine"],
    answer: "Appendicitis"
  },
  {
    question: "True or False: Pain from acute abdomen usually improves with sleep.",
    options: ["True", "False"],
    answer: "False"
  },
  {
    question: "What scan is often used to diagnose causes of acute abdomen?",
    options: ["MRI of brain", "Chest X-ray", "CT scan of abdomen", "ECG"],
    answer: "CT scan of abdomen"
  },
  {
    question: "If a person with acute abdomen feels dizzy or faints, it may suggest:",
    options: ["They’re just tired", "They need to lie down", "They are in shock", "They are overreacting"],
    answer: "They are in shock"
  }
];

const AcuteAbdomen = () => {
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
      <h1>🟠 Acute Abdomen</h1>
      <p className="lead">“Sudden belly pain that screams emergency.”</p>

      <section className="info-section">
        <p>
          Acute abdomen refers to a group of urgent conditions causing severe abdominal pain. It often requires immediate diagnosis and sometimes emergency surgery.
        </p>

        <h3>🚨 Common Causes:</h3>
        <ul>
          <li>Appendicitis</li>
          <li>Perforated ulcer</li>
          <li>Gallbladder attack (cholecystitis)</li>
          <li>Pancreatitis</li>
          <li>Ectopic pregnancy</li>
          <li>Intestinal obstruction</li>
          <li>Internal bleeding or trauma</li>
        </ul>

        <h3>⚠️ Warning Signs:</h3>
        <ul>
          <li>Sudden, severe abdominal pain</li>
          <li>Vomiting, fever, or bloating</li>
          <li>Dizziness or fainting</li>
        </ul>

        <h3>🏥 How We Help:</h3>
        <ul>
          <li>Emergency evaluation and scans</li>
          <li>Blood and urine tests</li>
          <li>Surgery if critical (e.g., appendicitis)</li>
        </ul>

        <h3>🧘‍♀️ Self-Care Tips:</h3>
        <ul>
          <li>Do not eat or drink if severe pain occurs</li>
          <li>Get prompt medical attention</li>
          <li>Track symptoms for your doctor</li>
        </ul>

        <h3>Myth-Busting:</h3>
        <ul>
          <li><strong>❌ Myth:</strong> "It’s just gas, it’ll pass." <br /><strong>✅ Truth:</strong> It might be serious and get worse quickly.</li>
          <li><strong>❌ Myth:</strong> "Painkillers are enough." <br /><strong>✅ Truth:</strong> They can delay diagnosis if surgery is needed.</li>
        </ul>
      </section>

      <section className="quiz-section">
        <h2>🧠 Acute Abdomen Quiz</h2>

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

export default AcuteAbdomen;
