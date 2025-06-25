import React, { useState } from 'react';
import './RP1InfertilityInsights.css';

const quizData = [
  {
    question: "Which bacterium is linked to some cases of dyspepsia?",
    options: ["E. coli", "Helicobacter pylori", "Staphylococcus aureus", "Salmonella"],
    answer: "Helicobacter pylori"
  },
  {
    question: "Which symptom is common in dyspepsia?",
    options: ["Sudden leg pain", "Upper abdominal fullness", "Blurry vision", "Frequent urination"],
    answer: "Upper abdominal fullness"
  },
  {
    question: "True or False: Dyspepsia can be caused by stress.",
    options: ["True", "False"],
    answer: "True"
  },
  {
    question: "What is a common treatment for dyspepsia caused by acid?",
    options: ["Antacids or proton pump inhibitors", "Antibiotics for all cases", "Painkillers", "Diuretics"],
    answer: "Antacids or proton pump inhibitors"
  },
  {
    question: "Which lifestyle change helps reduce dyspepsia?",
    options: [
      "Eating large meals quickly",
      "Avoiding lying down after meals",
      "Increasing alcohol intake",
      "Smoking more"
    ],
    answer: "Avoiding lying down after meals"
  }
];

const Dyspepsia = () => {
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
      <h1>🟠 Dyspepsia</h1>
      <p className="lead">“Bloating, burning, and meals that fight back.”</p>

      <section className="info-section">
        <p>
          Dyspepsia, or indigestion, is a set of symptoms like fullness, bloating, and discomfort in the upper belly. It's often not serious, but persistent symptoms may signal something deeper.
        </p>

        <h3>🔍 What Causes Dyspepsia?</h3>
        <ul>
          <li>Gastritis or inflammation of the stomach lining</li>
          <li>Peptic ulcers</li>
          <li>GERD (acid reflux)</li>
          <li>H. pylori infection</li>
          <li>Medications like NSAIDs or antibiotics</li>
          <li>Stress and lifestyle factors</li>
        </ul>

        <h3>🚩 Common Symptoms</h3>
        <ul>
          <li>Upper abdominal pain or burning</li>
          <li>Fullness soon after eating</li>
          <li>Bloating and gas</li>
          <li>Burping, nausea, or vomiting</li>
          <li>Acidic or bitter taste in the mouth</li>
        </ul>

        <h3>🏥 Diagnosis & Treatment at Sukam</h3>
        <ul>
          <li>Symptom review and physical exam</li>
          <li>H. pylori testing (breath, blood, or stool)</li>
          <li>Blood tests for anemia or infection</li>
          <li>Upper GI endoscopy if needed</li>
          <li>Treatment with PPIs, antacids, or antibiotics (for H. pylori)</li>
          <li>Lifestyle changes for long-term relief</li>
        </ul>

        <h3>🍽️ Tips to Manage Dyspepsia</h3>
        <ul>
          <li>✔ Avoid spicy, oily, or acidic foods</li>
          <li>✔ Eat smaller, more frequent meals</li>
          <li>✔ Don’t lie down immediately after eating</li>
          <li>✔ Reduce caffeine, alcohol, and smoking</li>
          <li>✔ Manage stress via relaxation or counseling</li>
        </ul>

        <h3>🧠 Myth-Busting:</h3>
        <ul>
          <li><strong>❌ “Only spicy food causes indigestion.”</strong><br />✅ Truth: It can also be due to infections, stress, or medication.</li>
          <li><strong>❌ “Indigestion always means an ulcer.”</strong><br />✅ Truth: Many people have functional dyspepsia without ulcers.</li>
        </ul>
      </section>

      <section className="quiz-section">
        <h2>🧠 Quick Quiz — Dyspepsia</h2>

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

export default Dyspepsia;
