import React, { useState } from 'react';
import './RP1InfertilityInsights.css';

const quizData = [
  {
    question: "What percentage of infertility cases involve male factors?",
    options: ["10%", "25%", "40-50%", "75%"],
    answer: "40-50%"
  },
  {
    question: "True or False: Smoking negatively affects sperm quality.",
    options: ["True", "False"],
    answer: "True"
  },
  {
    question: "Which test evaluates sperm count and motility?",
    options: ["Hormonal assay", "Semen analysis", "Ultrasound", "MRI"],
    answer: "Semen analysis"
  },
  {
    question: "Can lifestyle changes improve male fertility?",
    options: ["Yes", "No"],
    answer: "Yes"
  },
  {
    question: "Is male infertility treatable?",
    options: ["Sometimes", "Never"],
    answer: "Sometimes"
  }
];

const MaleInfertility = () => {
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
      <h1>👨‍⚕️ Male Infertility</h1>
      <p className="lead">“Half the equation, equally important.”</p>

      <section className="info-section">
        <p>
          Male infertility contributes to nearly half of all couples’ fertility challenges. Factors like low sperm count, poor motility, or structural issues can affect the ability to conceive. At Sukam Speciality Clinic and Fertility Centre, we provide thorough diagnosis and tailored treatments to support male reproductive health, working alongside our female fertility services for holistic care.
        </p>
        <h3>🩺 What We Offer:</h3>
        <ul>
          <li>Detailed semen analysis and hormonal evaluation</li>
          <li>Treatment for infections, varicocele, and hormonal imbalances</li>
          <li>Lifestyle counseling to improve sperm health</li>
          <li>Assisted reproductive techniques including IUI and IVF/ICSI</li>
          <li>Genetic counseling and advanced diagnostics</li>
          <li>Supportive care addressing emotional and psychological factors</li>
        </ul>

        <h3>💡 Tips to Boost Male Fertility:</h3>
        <ul>
          <li>Maintain a balanced diet rich in antioxidants and vitamins</li>
          <li>Exercise regularly but avoid excessive heat exposure to testes</li>
          <li>Avoid smoking, alcohol, and recreational drugs</li>
          <li>Manage stress through relaxation and counseling</li>
          <li>Schedule regular check-ups and follow prescribed treatments</li>
        </ul>

        <h3>🚫 Myth vs Fact:</h3>
        <ul>
          <li><strong>❌ Myth:</strong> “Male infertility is rare.”<br /><strong>✅ Truth:</strong> It accounts for about 40-50% of infertility cases.</li>
          <li><strong>❌ Myth:</strong> “Only women need fertility treatments.”<br /><strong>✅ Truth:</strong> Male evaluation and treatment are crucial parts of fertility care.</li>
        </ul>
      </section>

      <section className="quiz-section">
        <h2>🧠 Male Infertility Quiz — Test Your Fertility Know-How!</h2>

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

export default MaleInfertility;
