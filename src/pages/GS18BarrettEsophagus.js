import React, { useState } from 'react';
import './RP1InfertilityInsights.css';

const quizData = [
  {
    question: "What long-standing condition can lead to Barrett’s Esophagus?",
    options: ["Asthma", "GERD (acid reflux)", "Diabetes", "Ulcers"],
    answer: "GERD (acid reflux)"
  },
  {
    question: "What change happens in Barrett’s Esophagus?",
    options: [
      "Stomach becomes smaller",
      "Food pipe lining turns into intestinal-type cells",
      "Intestine grows longer",
      "Gallstones form"
    ],
    answer: "Food pipe lining turns into intestinal-type cells"
  },
  {
    question: "True or False: Barrett’s Esophagus always turns into cancer.",
    options: ["True", "False"],
    answer: "False"
  },
  {
    question: "Which test confirms Barrett’s Esophagus?",
    options: ["Chest X-ray", "Liver function test", "Endoscopy with biopsy", "ECG"],
    answer: "Endoscopy with biopsy"
  },
  {
    question: "What lifestyle habit can help prevent Barrett’s from worsening?",
    options: [
      "Skipping meals",
      "Eating late at night",
      "Sleeping flat",
      "Weight loss and reflux control"
    ],
    answer: "Weight loss and reflux control"
  }
];

const BarrettEsophagus = () => {
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
      <h1>🟠 Barrett’s Esophagus</h1>
      <p className="lead">“A dangerous twist in chronic reflux.”</p>

      <section className="info-section">
        <p>
          Barrett’s Esophagus is a condition where the normal lining of your food pipe changes due to long-term acid reflux. This change, called metaplasia, increases the risk of esophageal cancer.
        </p>

        <h3>🔍 What Causes Barrett’s Esophagus?</h3>
        <p>Chronic acid reflux leads to cellular changes in the esophagus lining, replacing it with intestinal-type cells.</p>

        <h3>🚩 Who’s at Risk?</h3>
        <ul>
          <li>People with long-term GERD</li>
          <li>Men over 50, especially white males</li>
          <li>Smokers and those with central obesity</li>
          <li>Those with a family history of Barrett’s or esophageal cancer</li>
        </ul>

        <h3>⚠️ Symptoms</h3>
        <ul>
          <li>Frequent heartburn or regurgitation</li>
          <li>Difficulty swallowing</li>
          <li>Chest discomfort</li>
          <li>Chronic cough or hoarseness</li>
          <li>Sensation of something stuck in the throat</li>
        </ul>

        <h3>🏥 How We Diagnose & Manage It</h3>
        <ul>
          <li>Upper GI endoscopy with biopsy (gold standard)</li>
          <li>Monitoring for dysplasia (precancerous cells)</li>
          <li>Acid suppression with PPIs</li>
          <li>Lifestyle modifications to reduce reflux</li>
          <li>Surveillance endoscopy every 6–12 months</li>
          <li>Endoscopic ablation or surgery in high-risk cases</li>
        </ul>

        <h3>🥗 Tips to Prevent Progression</h3>
        <ul>
          <li>✔ Take GERD treatment seriously</li>
          <li>✔ Elevate your head during sleep</li>
          <li>✔ Avoid late-night meals and acidic foods</li>
          <li>✔ Maintain a healthy weight</li>
          <li>✔ Don’t skip your follow-up scopes</li>
        </ul>

        <h3>🧠 Myth-Busting:</h3>
        <ul>
          <li><strong>❌ “Barrett’s is cancer.”</strong><br />✅ Truth: It’s a precancerous condition that needs close monitoring.</li>
          <li><strong>❌ “No symptoms means no problem.”</strong><br />✅ Truth: Barrett’s often shows no symptoms — screening is key in at-risk people.</li>
        </ul>
      </section>

      <section className="quiz-section">
        <h2>🧠 Quick Quiz — Barrett’s Esophagus</h2>

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

export default BarrettEsophagus;
