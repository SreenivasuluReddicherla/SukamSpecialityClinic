import React, { useState } from 'react';
import './RP1InfertilityInsights.css';

const quizData = [
  {
    question: "What part of the digestive system is involved in lower GI bleeding?",
    options: ["Esophagus", "Stomach", "Colon or rectum", "Pancreas"],
    answer: "Colon or rectum"
  },
  {
    question: "Which of the following is a common cause of lower GI bleeding?",
    options: ["Heartburn", "Hemorrhoids", "Kidney stones", "Strep throat"],
    answer: "Hemorrhoids"
  },
  {
    question: "True or False: Black, tarry stools always indicate lower GI bleeding.",
    options: ["True", "False"],
    answer: "False"
  },
  {
    question: "Which test helps diagnose lower GI bleed sources?",
    options: ["Colonoscopy", "Chest X-ray", "Liver scan", "ECG"],
    answer: "Colonoscopy"
  },
  {
    question: "What is one danger of untreated lower GI bleeding?",
    options: ["Memory loss", "Skin rash", "Severe anemia", "Tooth decay"],
    answer: "Severe anemia"
  }
];

const LowerGIBleed = () => {
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
      <h1>🟠 Lower GI Bleed</h1>
      <p className="lead">“Red alerts from the digestive tract’s lower half.”</p>

      <section className="info-section">
        <p>
          A lower GI bleed refers to bleeding that originates from the colon, rectum, or anus.
          Sometimes it's bright red, sometimes maroon, and sometimes hidden — but all deserve careful evaluation.
        </p>

        <h3>🔍 Common Causes:</h3>
        <ul>
          <li>Hemorrhoids or anal fissures</li>
          <li>Diverticulosis – small pouches in the colon</li>
          <li>Inflammatory bowel disease (Crohn’s, ulcerative colitis)</li>
          <li>Colorectal polyps or colon cancer</li>
          <li>Infections or ischemic colitis</li>
          <li>Post-surgical complications</li>
        </ul>

        <h3>🚩 What You May Notice:</h3>
        <ul>
          <li>Bright red blood in stool or on toilet paper</li>
          <li>Maroon-colored stool or blood clots</li>
          <li>Black tarry stool (rare in lower GI)</li>
          <li>Dizziness or fatigue due to blood loss</li>
          <li>Abdominal cramping or urgency to pass stool</li>
        </ul>

        <h3>🏥 How We Help:</h3>
        <ul>
          <li>Detailed history and physical exam</li>
          <li>Rectal examination and proctoscopy</li>
          <li>Blood tests to check hemoglobin</li>
          <li>Colonoscopy to locate bleeding source</li>
          <li>Medications, cauterization, or surgery if needed</li>
        </ul>

        <h3>💡 Tips:</h3>
        <ul>
          <li>Eat a fiber-rich diet to prevent constipation</li>
          <li>Stay hydrated and avoid straining</li>
          <li>Screen for colon cancer from age 45 if at risk</li>
          <li>Don’t ignore visible blood in stool</li>
        </ul>

        <h3>🧠 Myth-Busting:</h3>
        <ul>
          <li><strong>❌ “Bleeding from below is always due to piles.”</strong><br />
              ✅ Truth: Other serious causes like IBD or cancer must be ruled out.</li>
          <li><strong>❌ “If it happens once, it’s nothing.”</strong><br />
              ✅ Truth: Even one episode of bleeding needs evaluation.</li>
        </ul>
      </section>

      <section className="quiz-section">
        <h2>🧠 Lower GI Bleed Quiz — Test Your Knowledge!</h2>

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

export default LowerGIBleed;
