import React, { useState } from 'react';
import './RP1InfertilityInsights.css';

const quizData = [
  {
    question: "What symptom suggests an upper GI bleed?",
    options: ["Vomiting blood", "Diarrhea", "Joint pain", "Headache"],
    answer: "Vomiting blood"
  },
  {
    question: "True or False: Black, tarry stools can indicate bleeding in the upper GI tract.",
    options: ["True", "False"],
    answer: "True"
  },
  {
    question: "Which test helps find the bleeding source?",
    options: ["Endoscopy", "ECG", "Ultrasound of leg veins", "Hearing test"],
    answer: "Endoscopy"
  },
  {
    question: "What can cause upper GI bleeding?",
    options: ["Peptic ulcers", "Esophageal varices", "NSAIDs overuse", "All of the above"],
    answer: "All of the above"
  }
];

const UpperGIBleed = () => {
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
      <h1>🟠 Upper GI Bleed</h1>
      <p className="lead">“Blood from above, demanding urgent attention.”</p>

      <section className="info-section">
        <p>
          An upper gastrointestinal (GI) bleed means bleeding in the upper part of your digestive tract — the esophagus, stomach, or first part of the small intestine. It can cause vomiting blood or black, tarry stools and requires prompt medical care to stop the bleeding and treat the cause.
        </p>

        <h3>What Causes Upper GI Bleeding?</h3>
        <ul>
          <li>Peptic ulcers (sores in stomach or duodenum)</li>
          <li>Gastritis (inflammation of the stomach lining)</li>
          <li>Esophageal varices (swollen veins, often from liver disease)</li>
          <li>Tear in the esophagus lining (Mallory-Weiss tear)</li>
          <li>Certain medications like NSAIDs or blood thinners</li>
        </ul>

        <h3>When to See a Doctor?</h3>
        <ul>
          <li>Vomiting blood or material that looks like coffee grounds</li>
          <li>Black or tarry stools</li>
          <li>Feeling dizzy, weak, or faint</li>
          <li>Severe abdominal pain</li>
          <li>History of liver disease or ulcers</li>
        </ul>

        <h3>How Do We Help?</h3>
        <ul>
          <li>Emergency assessment and stabilization</li>
          <li>Blood tests and vital monitoring</li>
          <li>Endoscopy to locate and treat the bleeding source</li>
          <li>Medications to reduce stomach acid and protect the lining</li>
          <li>Address underlying causes like liver disease or ulcers</li>
        </ul>

        <h3>Tips for Gut Health:</h3>
        <ul>
          <li>Avoid excessive use of painkillers and NSAIDs without medical advice</li>
          <li>Limit alcohol consumption</li>
          <li>Eat balanced meals and avoid spicy or irritating foods if sensitive</li>
          <li>Manage stress, which can worsen ulcers and gastritis</li>
        </ul>

        <h3>Myth-Busting:</h3>
        <ul>
          <li><strong>❌ “If bleeding stops on its own, no treatment is needed.”</strong><br /><strong>✅ Truth:</strong> Even if bleeding stops, underlying problems need medical evaluation.</li>
          <li><strong>❌ “Bleeding always means cancer.”</strong><br /><strong>✅ Truth:</strong> Many causes of upper GI bleeding are treatable and not cancerous.</li>
        </ul>
      </section>

      <section className="quiz-section">
        <h2>🧠 Upper GI Bleeding — Quick Quiz</h2>

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

export default UpperGIBleed;
