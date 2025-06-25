import React, { useState } from 'react';
import './RP1InfertilityInsights.css';

const quizData = [
  {
    question: "What causes most anal fissures?",
    options: ["Hard stools or constipation", "Cold weather", "Ear infection", "High blood pressure"],
    answer: "Hard stools or constipation"
  },
  {
    question: "Which symptom suggests an anal fissure?",
    options: ["Sharp pain during bowel movements", "Hair loss", "Joint swelling", "Fever"],
    answer: "Sharp pain during bowel movements"
  },
  {
    question: "True or False: Sitz baths help heal anal fissures.",
    options: ["True", "False"],
    answer: "True"
  },
  {
    question: "What diet helps prevent anal fissures?",
    options: ["High-fiber, plenty of fluids", "Low-carb diet", "High-fat diet", "No diet changes needed"],
    answer: "High-fiber, plenty of fluids"
  },
  {
    question: "When might surgery be needed for anal fissures?",
    options: ["If fissures do not heal with medication", "For all cases immediately", "Only if bleeding is heavy", "Surgery is never needed"],
    answer: "If fissures do not heal with medication"
  }
];

const AnalFissure = () => {
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
      <h1>🟠 Anal Fissure</h1>
      <p className="lead">“A painful tear in the lining down under.”</p>

      <section className="info-section">
        <p>
          An anal fissure is a small tear or crack in the thin, moist tissue lining the anus. This tiny injury can cause sharp pain during and after bowel movements, sometimes accompanied by bleeding. Though usually not serious, fissures can be very uncomfortable.
        </p>

        <h3>🔍 Causes of Anal Fissure</h3>
        <ul>
          <li>Passing hard or large stools (constipation)</li>
          <li>Chronic diarrhea</li>
          <li>Straining during bowel movements</li>
          <li>Childbirth or trauma to the anal area</li>
          <li>Inflammatory bowel disease or infections</li>
        </ul>

        <h3>🚩 Symptoms to Recognize</h3>
        <ul>
          <li>Severe pain during and after bowel movements</li>
          <li>Bright red blood on toilet paper or stool</li>
          <li>Visible crack or tear near the anus</li>
          <li>Itching or irritation around the anus</li>
          <li>Small lump or skin tag near the fissure</li>
        </ul>

        <h3>🏥 Diagnosis & Treatment at Sukam</h3>
        <ul>
          <li>Physical examination of the anal area</li>
          <li>High-fiber diet and fluids to soften stools</li>
          <li>Sitz baths to relax the anal muscles</li>
          <li>Topical pain relievers and healing creams</li>
          <li>Stool softeners or laxatives</li>
          <li>Botox or surgery in persistent cases</li>
        </ul>

        <h3>🍽️ Tips for Healing and Prevention</h3>
        <ul>
          <li>✔ Eat fiber-rich foods and drink plenty of water</li>
          <li>✔ Avoid straining during bowel movements</li>
          <li>✔ Take regular sitz baths</li>
          <li>✔ Maintain good anal hygiene</li>
          <li>✔ Follow your doctor’s plan carefully</li>
        </ul>

        <h3>🧠 Myth-Busting</h3>
        <ul>
          <li><strong>❌ “Pain during bowel movements is normal.”</strong><br />✅ Truth: Severe pain may indicate fissures or other treatable conditions.</li>
          <li><strong>❌ “Only surgery can fix anal fissures.”</strong><br />✅ Truth: Most heal with simple, non-surgical treatments.</li>
        </ul>
      </section>

      <section className="quiz-section">
        <h2>🧠 Quick Quiz — Anal Fissure</h2>

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

export default AnalFissure;
