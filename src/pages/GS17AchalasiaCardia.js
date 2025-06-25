import React, { useState } from 'react';
import './RP1InfertilityInsights.css';

const quizData = [
  {
    question: "What is the main problem in achalasia?",
    options: ["Too much acid in the stomach", "Weak heart muscles", "Tight valve and weak food pipe movement", "Allergic reaction to food"],
    answer: "Tight valve and weak food pipe movement"
  },
  {
    question: "What is a typical symptom of achalasia?",
    options: ["Joint pain", "Blurry vision", "Difficulty swallowing", "Frequent sneezing"],
    answer: "Difficulty swallowing"
  },
  {
    question: "True or False: Achalasia can cause food to come back up.",
    options: ["True", "False"],
    answer: "True"
  },
  {
    question: "What does a “barium swallow” test show in achalasia?",
    options: ["Enlarged liver", "Bird-beak appearance of esophagus", "Kidney stones", "Lung infection"],
    answer: "Bird-beak appearance of esophagus"
  },
  {
    question: "What is POEM in the context of achalasia treatment?",
    options: ["A type of speech therapy", "A breathing exercise", "An endoscopic surgery to loosen the food pipe valve", "A dietary supplement"],
    answer: "An endoscopic surgery to loosen the food pipe valve"
  }
];

const AchalasiaCardia = () => {
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
      <h1>🟠 Achalasia Cardia</h1>
      <p className="lead">“A food pipe freeze, mid-meal.”</p>

      <section className="info-section">
        <p>
          Achalasia is a rare disorder where your food pipe (esophagus) forgets how to move food down — and the valve at its base refuses to relax. This causes food and liquids to get stuck mid-swallow.
        </p>

        <h3>🔍 What Causes Achalasia?</h3>
        <ul>
          <li>Failure of LES to relax during swallowing</li>
          <li>Loss of normal esophageal contractions</li>
          <li>Food getting stuck in the esophagus</li>
        </ul>

        <h3>🚩 Symptoms to Watch For</h3>
        <ul>
          <li>Difficulty swallowing solids and liquids</li>
          <li>Feeling of food “stuck” in the chest</li>
          <li>Chest pain, especially after meals</li>
          <li>Regurgitation of undigested food or saliva</li>
          <li>Weight loss over time</li>
          <li>Coughing, especially at night</li>
          <li>Bad breath due to food retention</li>
        </ul>

        <h3>🏥 How We Diagnose & Manage It</h3>
        <ul>
          <li>Esophageal manometry – the key diagnostic test</li>
          <li>Barium swallow X-ray – to see the “bird-beak” narrowing</li>
          <li>Endoscopy – to rule out cancer or other causes</li>
        </ul>

        <strong>Treatment Options:</strong>
        <ul>
          <li>Pneumatic dilation – stretching the LES with a balloon</li>
          <li>Botulinum toxin injection (Botox) – for temporary relief</li>
          <li>Heller myotomy – minimally invasive surgery</li>
          <li>POEM – advanced endoscopic technique</li>
        </ul>

        <h3>🍽️ Tips for Living with Achalasia</h3>
        <ul>
          <li>✔ Eat slowly and chew food thoroughly</li>
          <li>✔ Drink water in between bites</li>
          <li>✔ Avoid eating right before bedtime</li>
          <li>✔ Elevate your head while sleeping</li>
          <li>✔ Follow up regularly after surgical treatment</li>
        </ul>

        <h3>🧠 Myth-Busting:</h3>
        <ul>
          <li><strong>❌ “Achalasia is just bad acidity.”</strong><br />✅ Truth: It's a nerve problem affecting swallowing, not acid production.</li>
          <li><strong>❌ “It only happens in old age.”</strong><br />✅ Truth: It can affect younger adults too.</li>
        </ul>
      </section>

      <section className="quiz-section">
        <h2>🧠 Quick Quiz — Achalasia Cardia</h2>

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

export default AchalasiaCardia;
