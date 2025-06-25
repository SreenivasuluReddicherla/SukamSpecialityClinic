import React, { useState } from 'react';
import './RP1InfertilityInsights.css';

const quizData = [
  {
    question: "At what age does female fertility usually start to decline more rapidly?",
    options: ["25", "30", "35", "40"],
    answer: "35"
  },
  {
    question: "True or False: Egg freezing can help preserve fertility for later years.",
    options: ["True", "False"],
    answer: "True"
  },
  {
    question: "Which test measures ovarian reserve?",
    options: ["AMH (Anti-Mullerian Hormone)", "PSA", "Blood sugar", "ECG"],
    answer: "AMH (Anti-Mullerian Hormone)"
  },
  {
    question: "Can lifestyle affect age-related fertility decline?",
    options: ["Yes", "No"],
    answer: "Yes"
  },
  {
    question: "Is male fertility completely unaffected by age?",
    options: ["Yes", "No"],
    answer: "No"
  }
];

const DecliningFertility = () => {
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
      <h1>⏳ Declining Fertility</h1>
      <p className="lead">“When biology slows down, science steps in.”</p>

      <section className="info-section">
        <p>
          Fertility naturally declines with age, especially after 35 in women, due to decreasing egg quantity and quality. Men also experience gradual fertility decline over time. Understanding this change helps couples make informed decisions about family planning. At Sukam Speciality Clinic and Fertility Centre, we provide expert guidance and advanced treatments to support your reproductive goals despite age-related challenges.
        </p>

        <h3>🩺 What We Offer:</h3>
        <ul>
          <li>Fertility assessment with focus on age-related factors</li>
          <li>Ovarian reserve testing (AMH, AFC) and semen analysis</li>
          <li>Counseling on fertility preservation options like egg/sperm freezing</li>
          <li>Personalized treatment plans including IVF tailored for older patients</li>
          <li>Supportive care addressing emotional and physical aspects</li>
          <li>Regular follow-ups to optimize treatment outcomes</li>
        </ul>

        <h3>💡 Tips to Support Fertility as You Age:</h3>
        <ul>
          <li>Maintain a healthy lifestyle with balanced diet and exercise</li>
          <li>Avoid smoking and limit alcohol intake</li>
          <li>Manage stress through mindfulness and self-care</li>
          <li>Seek timely fertility evaluation if planning to conceive later</li>
          <li>Discuss fertility preservation options early</li>
        </ul>

        <h3>🚫 Myth vs Fact:</h3>
        <ul>
          <li><strong>❌ “Women can conceive easily at any age.”</strong><br /><strong>✅ Truth:</strong> Fertility declines significantly after 35 years of age.</li>
          <li><strong>❌ “Men’s fertility doesn’t change with age.”</strong><br /><strong>✅ Truth:</strong> Male fertility also declines but more gradually.</li>
        </ul>
      </section>

      <section className="quiz-section">
        <h2>🧠 Declining Fertility Quiz — What Do You Know?</h2>

        {/* Progress Bar */}
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

export default DecliningFertility;
