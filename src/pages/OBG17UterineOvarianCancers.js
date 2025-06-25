import React, { useState } from 'react';
import './RP1InfertilityInsights.css';

const quizData = [
  {
    question: "Which is the most common symptom of uterine cancer?",
    options: ["Abnormal uterine bleeding", "Weight gain", "Hair loss", "Frequent urination"],
    answer: "Abnormal uterine bleeding"
  },
  {
    question: "Ovarian cancer is often diagnosed at:",
    options: ["Early stages", "Late stages", "Before symptoms", "Not diagnosable"],
    answer: "Late stages"
  },
  {
    question: "True or False: Family history can increase risk for ovarian cancer.",
    options: ["True", "False"],
    answer: "True"
  },
  {
    question: "Which test helps detect ovarian cancer?",
    options: ["Pap smear", "CA-125 blood test", "Mammogram", "Colonoscopy"],
    answer: "CA-125 blood test"
  },
  {
    question: "Can uterine cancer be treated successfully if caught early?",
    options: ["Yes", "No"],
    answer: "Yes"
  }
];

const UterineOvarianCancers = () => {
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
      <h1>🎗️ Uterine and Ovarian Cancers</h1>
      <p className="lead">
        “Guarding the core of womanhood.”
      </p>

      <section className="info-section">
        <p>
          Uterine and ovarian cancers are serious health conditions that require early detection and specialized treatment. At Sukam Speciality Clinic and Fertility Centre, we provide comprehensive screening, diagnosis, and multi-disciplinary care using the latest technology and personalized treatment plans to help women fight these cancers with strength and hope.
        </p>

        <h3>🧪 What We Offer:</h3>
        <ul>
          <li>Risk assessment and counseling</li>
          <li>Transvaginal ultrasound, CA-125 blood tests, and endometrial biopsy</li>
          <li>Advanced surgical and medical oncology treatments</li>
          <li>Chemotherapy and targeted therapies</li>
          <li>Supportive care for physical and emotional wellbeing</li>
          <li>Fertility preservation options when possible</li>
          <li>Follow-up and survivorship programs</li>
        </ul>

        <h3>💡 Tips for Prevention and Early Detection:</h3>
        <ul>
          <li>Report abnormal bleeding or pelvic pain promptly</li>
          <li>Maintain a healthy lifestyle and weight</li>
          <li>Regular gynecologic check-ups especially after age 40</li>
          <li>Know your family history of cancers</li>
          <li>Avoid tobacco and excessive alcohol</li>
        </ul>

        <h3>❌ Myth vs Fact:</h3>
        <ul>
          <li><strong>❌ Myth:</strong> “Ovarian cancer always shows early symptoms.”<br /><strong>✅ Truth:</strong> Early ovarian cancer symptoms are often vague or absent, making screening vital.</li>
          <li><strong>❌ Myth:</strong> “Uterine cancer only affects older women.”<br /><strong>✅ Truth:</strong> While more common after menopause, it can occur at younger ages too.</li>
        </ul>
      </section>

      <section className="quiz-section">
        <h2>🧠 Uterine & Ovarian Cancer Quiz — Test Your Awareness</h2>

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
          <button className="submit-button" onClick={() => setShowResults(true)}>
            See Results
          </button>
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

export default UterineOvarianCancers;
