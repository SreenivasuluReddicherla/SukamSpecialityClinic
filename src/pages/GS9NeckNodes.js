import React, { useState } from 'react';
import './RP1InfertilityInsights.css';

const quizData = [
  {
    question: "What are neck nodes also called?",
    options: [
      "Lymph nodes",
      "Glands in the stomach",
      "Hair follicles",
      "Sweat glands"
    ],
    answer: "Lymph nodes"
  },
  {
    question: "True or False: Swollen neck nodes are always cancerous.",
    options: ["True", "False"],
    answer: "False"
  },
  {
    question: "Which symptom suggests urgent evaluation of neck nodes?",
    options: [
      "Rapid growth and hardness",
      "Slight tenderness",
      "Itching",
      "Mild pain"
    ],
    answer: "Rapid growth and hardness"
  },
  {
    question: "What can cause swollen neck nodes?",
    options: [
      "Infection",
      "Autoimmune disease",
      "Cancer",
      "All of the above"
    ],
    answer: "All of the above"
  },
  {
    question: "Which test can help diagnose the cause of swollen neck nodes?",
    options: [
      "Ultrasound",
      "ECG",
      "Eye exam",
      "Hearing test"
    ],
    answer: "Ultrasound"
  }
];

const NeckNodes = () => {
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
      <h1>🟠 Neck Nodes</h1>
      <p className="lead">“Swollen glands with stories to tell.”</p>

      <section className="info-section">
        <p>
          Neck nodes, or lymph nodes, are small glands that help your body fight infections. Sometimes these nodes swell due to infections, inflammation, or rarely, cancers. Swollen neck nodes can be painful or painless and may indicate a range of conditions from common infections to serious diseases.
        </p>

        <h3>🔍 Common Causes:</h3>
        <ul>
          <li>Viral or bacterial infections (e.g., throat infections, ear infections)</li>
          <li>Inflammatory conditions (e.g., autoimmune diseases)</li>
          <li>Tuberculosis</li>
          <li>Cancers such as lymphoma or metastasis from head and neck tumors</li>
        </ul>

        <h3>🛑 When to See a Doctor?</h3>
        <ul>
          <li>Swollen neck nodes lasting more than 2 weeks</li>
          <li>Nodes that are hard, fixed, or growing rapidly</li>
          <li>Accompanied by fever, night sweats, or weight loss</li>
          <li>Difficulty swallowing or breathing</li>
        </ul>

        <h3>🧪 How We Help:</h3>
        <ul>
          <li>Careful clinical examination and history taking</li>
          <li>Blood tests and imaging (ultrasound, CT scan)</li>
          <li>Fine needle aspiration biopsy or excision biopsy if needed</li>
          <li>Treatment targeting the underlying cause — antibiotics, anti-inflammatory meds, or oncology referral</li>
          <li>Regular follow-up and monitoring</li>
        </ul>

        <h3>💡 Tips for Neck Health:</h3>
        <ul>
          <li>Maintain good hygiene and treat infections early</li>
          <li>Avoid smoking and exposure to pollutants</li>
          <li>Get timely medical evaluation for persistent lumps</li>
        </ul>

        <h3>🚫 Myth vs Fact:</h3>
        <ul>
          <li><strong>❌ Myth:</strong> “All swollen neck nodes mean cancer.”<br /><strong>✅ Truth:</strong> Most swollen nodes are due to infections and are harmless.</li>
          <li><strong>❌ Myth:</strong> “If painless, swollen nodes can be ignored.”<br /><strong>✅ Truth:</strong> Persistent painless lumps should always be evaluated.</li>
        </ul>
      </section>

      <section className="quiz-section">
        <h2>🧠 Neck Nodes Quiz — Test Your Knowledge!</h2>

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

export default NeckNodes;
