import React, { useState } from 'react';
import './RP1InfertilityInsights.css';

const quizData = [
  {
    question: "What are uterine fibroids made of?",
    options: ["Bone tissue", "Muscle and fibrous tissue", "Fat cells", "Blood vessels"],
    answer: "Muscle and fibrous tissue"
  },
  {
    question: "Which symptom is NOT typically associated with fibroids?",
    options: ["Heavy menstrual bleeding", "Pelvic pain", "Frequent urination", "Hair loss"],
    answer: "Hair loss"
  },
  {
    question: "True or False: Fibroids always affect fertility.",
    options: ["True", "False"],
    answer: "False"
  },
  {
    question: "Which imaging technique is commonly used to diagnose fibroids?",
    options: ["X-ray", "Ultrasound", "CT scan", "Mammogram"],
    answer: "Ultrasound"
  },
  {
    question: "What lifestyle habit can help manage fibroid symptoms?",
    options: ["Smoking", "Sedentary lifestyle", "Regular exercise", "Excessive caffeine"],
    answer: "Regular exercise"
  }
];

const UterineFibroids = () => {
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
      <h1>🌸 Uterine Fibroids</h1>
      <p className="lead">“Benign but bothersome roommates in the womb.”</p>

      <section className="info-section">
        <p>
          Uterine fibroids are non-cancerous growths in the uterus that can cause symptoms like heavy periods, pelvic pain, or fertility issues. While many women have fibroids without symptoms, timely diagnosis and treatment can greatly improve comfort and reproductive health.
        </p>

        <h3>🩺 What We Offer:</h3>
        <ul>
          <li>Ultrasound and MRI for accurate fibroid mapping</li>
          <li>Medication to manage symptoms like bleeding and pain</li>
          <li>Minimally invasive procedures like uterine artery embolization (UAE)</li>
          <li>Myomectomy or hysterectomy when needed</li>
          <li>Fertility counseling for women planning pregnancy</li>
        </ul>

        <h3>💡 Tips to Manage Fibroids:</h3>
        <ul>
          <li>Maintain a healthy weight and balanced diet</li>
          <li>Regular exercise can help reduce symptoms</li>
          <li>Avoid excessive caffeine and alcohol</li>
          <li>Track menstrual cycles to notice changes</li>
          <li>Consult your doctor if you experience heavy bleeding or pelvic pressure</li>
        </ul>

        <h3>🚫 Myth vs Fact:</h3>
        <ul>
          <li><strong>❌ Myth:</strong> “Fibroids always require surgery.”<br /><strong>✅ Truth:</strong> Many fibroids are managed successfully without surgery.</li>
          <li><strong>❌ Myth:</strong> “Fibroids cause cancer.”<br /><strong>✅ Truth:</strong> Fibroids are benign and do not turn into cancer.</li>
        </ul>
      </section>

      <section className="quiz-section">
        <h2>🧠 Uterine Fibroids Quiz — How Well Do You Know Fibroids?</h2>

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

export default UterineFibroids;
