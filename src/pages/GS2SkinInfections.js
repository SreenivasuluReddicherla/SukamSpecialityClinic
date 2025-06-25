import React, { useState } from 'react';
import './RP1InfertilityInsights.css';

const quizData = [
  {
    question: "What is a common bacterial skin infection?",
    options: ["Cellulitis", "Cold sore", "Ringworm", "Psoriasis"],
    answer: "Cellulitis"
  },
  {
    question: "True or False: Fungal infections can cause athlete’s foot.",
    options: ["True", "False"],
    answer: "True"
  },
  {
    question: "When should you see a doctor for skin infections?",
    options: ["Rapidly spreading redness", "Mild itching", "Dry skin", "None of the above"],
    answer: "Rapidly spreading redness"
  }
];

const SkinInfections = () => {
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
      <h1>🔠 Skin Infections</h1>
      <p className="lead">"Red, warm, and angry—your skin’s SOS."</p>

      <section className="info-section">
        <p>
          Skin infections happen when bacteria, viruses, fungi, or parasites invade the skin, causing redness, swelling, pain, and sometimes pus. Early treatment can prevent complications.
        </p>

        <h3>Common Types:</h3>
        <ul>
          <li>Cellulitis (bacterial infection of skin layers)</li>
          <li>Impetigo (superficial bacterial infection)</li>
          <li>Fungal infections (athlete’s foot, ringworm)</li>
          <li>Viral infections (herpes, warts)</li>
        </ul>

        <h3>When to See a Doctor?</h3>
        <ul>
          <li>Rapidly spreading redness or swelling</li>
          <li>High fever with skin symptoms</li>
          <li>Painful blisters or ulcers</li>
          <li>Signs of pus or abscess</li>
          <li>If symptoms don’t improve with home care</li>
        </ul>

        <h3>How We Help:</h3>
        <ul>
          <li>Diagnose infection type clinically and with tests if needed</li>
          <li>Prescribe antibiotics, antifungals, or antivirals</li>
          <li>Drain abscesses if present</li>
          <li>Educate on hygiene and prevention</li>
        </ul>

        <h3>💡 Tips for Skin Infection Prevention:</h3>
        <ul>
          <li>Keep skin clean and dry</li>
          <li>Avoid sharing personal items</li>
          <li>Treat minor cuts and wounds promptly</li>
          <li>Wear protective gear in risky environments</li>
        </ul>

        <h3>❌ Myth vs Fact:</h3>
        <ul>
          <li><strong>❌ Myth:</strong> “Skin infections always need antibiotics.”<br /><strong>✅ Truth:</strong> Some infections are viral or fungal and need specific treatments.</li>
        </ul>
      </section>

      <section className="quiz-section">
        <h2>🧠 Skin Infections Quiz — Test Your Knowledge!</h2>

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

export default SkinInfections;
