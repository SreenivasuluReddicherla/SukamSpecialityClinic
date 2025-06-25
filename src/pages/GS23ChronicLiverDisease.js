import React, { useState } from 'react';
import './RP1InfertilityInsights.css';

const quizData = [
  {
    question: "Which virus commonly causes chronic liver disease?",
    options: ["Hepatitis B", "Influenza", "HIV", "HPV"],
    answer: "Hepatitis B"
  },
  {
    question: "True or False: Chronic liver disease symptoms always appear early.",
    options: ["True", "False"],
    answer: "False"
  },
  {
    question: "What is a common sign of advanced liver disease?",
    options: ["Jaundice", "Headache", "Cough", "Back pain"],
    answer: "Jaundice"
  },
  {
    question: "How can chronic liver disease progression be slowed?",
    options: ["Alcohol cessation", "Vaccination", "Healthy lifestyle", "All of the above"],
    answer: "All of the above"
  }
];

const ChronicLiverDisease = () => {
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
      <h1>🟠 Chronic Liver Disease</h1>
      <p className="lead">“To love you need a lover; to live, you need a liver!”</p>

      <section className="info-section">
        <p>
          Chronic liver disease (CLD) is a long-term condition where liver damage progresses over time, often leading to cirrhosis, liver failure, or cancer if untreated. Early detection and management are key to preventing complications.
        </p>

        <h3>What Causes Chronic Liver Disease?</h3>
        <ul>
          <li>Chronic viral hepatitis (B and C)</li>
          <li>Alcohol-related liver disease</li>
          <li>Non-alcoholic fatty liver disease (NAFLD)</li>
          <li>Autoimmune liver diseases</li>
          <li>Genetic conditions affecting the liver</li>
        </ul>

        <h3>When to See a Doctor?</h3>
        <ul>
          <li>Persistent fatigue, jaundice (yellowing of skin/eyes)</li>
          <li>Abdominal swelling or pain</li>
          <li>Easy bruising or bleeding</li>
          <li>Weight loss or loss of appetite</li>
          <li>History of liver disease risk factors</li>
        </ul>

        <h3>How Do We Help?</h3>
        <ul>
          <li>Blood tests for liver function and viral markers</li>
          <li>Imaging such as ultrasound or elastography to assess liver stiffness</li>
          <li>Lifestyle counseling (alcohol cessation, nutrition)</li>
          <li>Medications or antiviral therapy when indicated</li>
          <li>Monitoring and referral for advanced treatments if needed</li>
        </ul>

        <h3>Tips for Liver Health:</h3>
        <ul>
          <li>✔ Avoid alcohol or drink in moderation</li>
          <li>✔ Follow vaccination schedules for hepatitis B</li>
          <li>✔ Maintain healthy weight and control diabetes</li>
          <li>✔ Avoid risky behaviors that transmit hepatitis viruses</li>
        </ul>

        <h3>🧠 Myth-Busting:</h3>
        <ul>
          <li><strong>❌ “If you have liver disease, you must avoid all medicines.”</strong><br />✅ Truth: Some medicines help; always consult your doctor.</li>
          <li><strong>❌ “Liver disease always shows symptoms early.”</strong><br />✅ Truth: Many liver diseases are silent until advanced stages.</li>
        </ul>
      </section>

      <section className="quiz-section">
        <h2>🧠 Quick Quiz — Chronic Liver Disease</h2>

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

export default ChronicLiverDisease;
