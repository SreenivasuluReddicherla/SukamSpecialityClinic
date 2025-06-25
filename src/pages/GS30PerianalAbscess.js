import React, { useState } from 'react';
import './RP1InfertilityInsights.css';

const quizData = [
  {
    question: "What is the main treatment for a perianal abscess?",
    options: ["Surgical drainage", "Painkillers only", "Ice packs", "Rest only"],
    answer: "Surgical drainage"
  },
  {
    question: "Which symptom is common with perianal abscess?",
    options: ["Severe pain and swelling near anus", "Headache", "Blurred vision", "Cough"],
    answer: "Severe pain and swelling near anus"
  },
  {
    question: "True or False: Antibiotics alone can cure a perianal abscess.",
    options: ["True", "False"],
    answer: "False"
  },
  {
    question: "What helps relieve pain and swelling in perianal abscess?",
    options: ["Warm sitz baths", "Cold showers", "Vigorous exercise", "Avoiding water"],
    answer: "Warm sitz baths"
  },
  {
    question: "When should you seek medical care for a perianal abscess?",
    options: [
      "When you notice pain, swelling, or redness near anus",
      "Only if fever occurs",
      "When swelling bursts on its own",
      "When pain is mild"
    ],
    answer: "When you notice pain, swelling, or redness near anus"
  }
];

const PerianalAbscess = () => {
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
      <h1>🟠 Perianal Abscess</h1>
      <p className="lead">“A painful pocket of infection near the anus.”</p>

      <section className="info-section">
        <p>
          A perianal abscess is a collection of pus that forms near the anus due to infection of the small glands in that area. It causes painful swelling, redness, and tenderness. If left untreated, the abscess can burst or lead to a more complex condition called a fistula.
        </p>

        <h3>🔍 Causes of Perianal Abscess</h3>
        <ul>
          <li>Infection of anal glands or blocked ducts</li>
          <li>Trauma or injury to the anal area</li>
          <li>Underlying conditions like Crohn’s disease or diabetes</li>
          <li>Poor hygiene or immune system issues</li>
        </ul>

        <h3>🚩 Symptoms to Recognize</h3>
        <ul>
          <li>Severe pain and swelling near the anus</li>
          <li>Redness and warmth in the affected area</li>
          <li>Fever or chills</li>
          <li>Difficulty sitting or passing stools</li>
          <li>Sometimes pus discharge if abscess bursts</li>
        </ul>

        <h3>🏥 Diagnosis & Treatment at Sukam</h3>
        <ul>
          <li>Physical examination to locate the abscess</li>
          <li>Imaging tests like ultrasound or MRI if fistula is suspected</li>
          <li>Surgical drainage (main treatment)</li>
          <li>Antibiotics if infection is spreading or immunity is weak</li>
          <li>Pain management and wound care during healing</li>
        </ul>

        <h3>🍽️ Tips for Recovery</h3>
        <ul>
          <li>✔ Keep the area clean and dry</li>
          <li>✔ Use warm sitz baths to ease discomfort</li>
          <li>✔ Follow wound care instructions carefully</li>
          <li>✔ Avoid constipation by eating fiber and staying hydrated</li>
          <li>✔ Attend all follow-ups for wound check</li>
        </ul>

        <h3>🧠 Myth-Busting</h3>
        <ul>
          <li><strong>❌ “Perianal abscesses will heal on their own.”</strong><br />✅ Truth: They usually need to be drained to heal properly.</li>
          <li><strong>❌ “Antibiotics alone can cure a perianal abscess.”</strong><br />✅ Truth: Drainage is necessary; antibiotics may help but aren’t enough.</li>
        </ul>
      </section>

      <section className="quiz-section">
        <h2>🧠 Quick Quiz — Perianal Abscess</h2>

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

export default PerianalAbscess;
