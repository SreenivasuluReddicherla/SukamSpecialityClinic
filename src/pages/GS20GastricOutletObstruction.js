import React, { useState } from 'react';
import './RP1InfertilityInsights.css';

const quizData = [
  {
    question: "What does gastric outlet obstruction block?",
    options: ["The throat", "The stomach’s exit to the small intestine", "The colon", "The esophagus"],
    answer: "The stomach’s exit to the small intestine"
  },
  {
    question: "Which symptom suggests gastric outlet obstruction?",
    options: ["Frequent urination", "Joint pain", "Persistent vomiting of undigested food", "Headache"],
    answer: "Persistent vomiting of undigested food"
  },
  {
    question: "True or False: Gastric outlet obstruction can be caused by peptic ulcers.",
    options: ["True", "False"],
    answer: "True"
  },
  {
    question: "What procedure helps diagnose gastric outlet obstruction?",
    options: ["ECG", "Upper GI endoscopy", "MRI brain", "Skin biopsy"],
    answer: "Upper GI endoscopy"
  },
  {
    question: "Which treatment may be needed for severe obstruction?",
    options: ["Antibiotics only", "Painkillers only", "Surgery", "Eye drops"],
    answer: "Surgery"
  }
];

const GastricOutletObstruction = () => {
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const handleOptionClick = (questionIndex, option) => {
    setSelectedAnswers({ ...selectedAnswers, [questionIndex]: option });
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
      <h1>🟠 Gastric Outlet Obstruction</h1>
      <p className="lead">“A bottleneck that blocks your appetite.”</p>

      <section className="info-section">
        <p>
          Gastric Outlet Obstruction (GOO) occurs when the passage from your stomach to the small intestine becomes narrowed or blocked,
          making it difficult for food to pass. It can cause vomiting, weight loss, and nutritional issues.
        </p>

        <h3>🔍 Causes of Gastric Outlet Obstruction</h3>
        <ul>
          <li>Peptic ulcers causing scarring</li>
          <li>Stomach or duodenal tumors</li>
          <li>Swelling from inflammation (e.g. gastritis, pancreatitis)</li>
          <li>Foreign bodies or bezoars</li>
          <li>Congenital abnormalities</li>
          <li>Post-surgical complications</li>
        </ul>

        <h3>🚩 Symptoms to Watch For</h3>
        <ul>
          <li>Persistent vomiting of undigested food</li>
          <li>Abdominal pain or fullness after eating</li>
          <li>Loss of appetite and weight loss</li>
          <li>Dehydration due to vomiting</li>
          <li>Reflux and heartburn</li>
        </ul>

        <h3>🏥 Diagnosis & Treatment at Sukam</h3>
        <ul>
          <li>Physical examination and medical history</li>
          <li>Upper GI endoscopy to view obstruction</li>
          <li>Ultrasound or CT scan for detailed imaging</li>
          <li>Blood tests for dehydration/electrolyte imbalance</li>
          <li>Nasogastric tube to relieve pressure</li>
          <li>Medications for ulcers or inflammation</li>
          <li>Endoscopic dilation or surgery if needed</li>
        </ul>

        <h3>🍽️ Tips to Support Recovery</h3>
        <ul>
          <li>✔ Eat small, frequent meals</li>
          <li>✔ Stay hydrated</li>
          <li>✔ Avoid spicy or acidic foods</li>
          <li>✔ Follow all dietary advice carefully</li>
          <li>✔ Don’t miss follow-up visits</li>
        </ul>

        <h3>🧠 Myth-Busting:</h3>
        <ul>
          <li><strong>❌ “Vomiting after eating is harmless.”</strong><br />✅ Truth: Persistent vomiting is a warning sign that needs medical evaluation.</li>
          <li><strong>❌ “Only tumors cause gastric outlet obstruction.”</strong><br />✅ Truth: Ulcers and inflammation are also common causes.</li>
        </ul>
      </section>

      <section className="quiz-section">
        <h2>🧠 Quick Quiz — Gastric Outlet Obstruction</h2>

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
                      {selectedAnswers[idx] === q.answer ? 'Correct' : `Incorrect (Your Answer: ${selectedAnswers[idx]})`}
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

export default GastricOutletObstruction;
