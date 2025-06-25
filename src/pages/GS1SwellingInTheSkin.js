import React, { useState } from 'react';
import './RP1InfertilityInsights.css';

const quizData = [
  {
    question: "What is a common cause of skin swelling?",
    options: [
      "Infection",
      "Broken bone",
      "High blood pressure",
      "Toothache"
    ],
    answer: "Infection"
  },
  {
    question: "True or False: All skin lumps should be ignored if painless.",
    options: ["True", "False"],
    answer: "False"
  },
  {
    question: "What should you avoid doing to a swelling?",
    options: [
      "Keeping it clean",
      "Popping or squeezing it",
      "Covering with bandage",
      "Seeing a doctor"
    ],
    answer: "Popping or squeezing it"
  },
  {
    question: "When should you seek medical advice?",
    options: [
      "If swelling lasts over 2 weeks",
      "If swelling is painful and red",
      "If swelling grows rapidly",
      "All of the above"
    ],
    answer: "All of the above"
  },
  {
    question: "Which test can help diagnose the cause of skin swelling?",
    options: ["Ultrasound", "Blood sugar test", "ECG", "Hearing test"],
    answer: "Ultrasound"
  }
];

const SwellingInTheSkin = () => {
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
      <h1>🟠 Swelling in the Skin</h1>
      <p className="lead">“Lumps and bumps that signal something beneath the surface.”</p>

      <section className="info-section">
        <p>
          Swelling in the skin can happen for many reasons — from infections and injuries to cysts or growths beneath the surface. While many lumps are harmless, some require prompt medical attention. At Sukam Speciality Clinic, we carefully examine every swelling to find the cause and offer the right treatment.
        </p>

        <h3>What Causes Skin Swelling?</h3>
        <ul>
          <li>Local infections or abscesses</li>
          <li>Inflammatory reactions or allergic responses</li>
          <li>Benign cysts or lipomas (fatty lumps)</li>
          <li>Injuries causing bruises or hematomas</li>
          <li>Tumors (benign or malignant)</li>
        </ul>

        <h3>When to See a Doctor?</h3>
        <ul>
          <li>If the swelling grows rapidly</li>
          <li>Pain, redness, or warmth develops</li>
          <li>Skin breaks down or bleeds</li>
          <li>Associated fever or systemic symptoms</li>
          <li>If lump persists beyond a few weeks</li>
        </ul>

        <h3>How Do We Help?</h3>
        <ul>
          <li>Detailed physical examination and medical history</li>
          <li>Diagnostic tests like ultrasound or biopsy, if needed</li>
          <li>Antibiotics or drainage for infections</li>
          <li>Surgical removal for cysts or suspicious lumps</li>
          <li>Follow-up and monitoring for any changes</li>
        </ul>

        <h3>Tips for Your Skin Health:</h3>
        <ul>
          <li>Keep wounds clean and dry to avoid infections</li>
          <li>Avoid squeezing or poking lumps</li>
          <li>Wear protective clothing to prevent injuries</li>
          <li>Maintain good hygiene</li>
          <li>Get regular skin checks if you have risk factors</li>
        </ul>

        <h3>Myth-Busting:</h3>
        <ul>
          <li><strong>❌ “All lumps are cancerous.”</strong><br />✅ Truth: Most skin lumps are benign, but evaluation is important.</li>
          <li><strong>❌ “Popping a lump helps it heal faster.”</strong><br />✅ Truth: Popping or squeezing lumps can worsen infection or cause scarring.</li>
        </ul>
      </section>

      <section className="quiz-section">
        <h2>🧠 Quick Quiz — How Much Do You Know About Skin Swelling?</h2>

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

export default SwellingInTheSkin;
