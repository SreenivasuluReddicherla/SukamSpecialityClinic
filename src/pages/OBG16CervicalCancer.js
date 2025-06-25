import React, { useState } from 'react';
import './RP1InfertilityInsights.css';

const quizData = [
  {
    question: "What is the main cause of cervical cancer?",
    options: ["Smoking", "HPV infection", "Poor diet", "Lack of exercise"],
    answer: "HPV infection"
  },
  {
    question: "How often should women get a Pap smear?",
    options: ["Every year after age 21", "Every 3 years after normal results", "Only if symptoms occur", "Never"],
    answer: "Every 3 years after normal results"
  },
  {
    question: "True or False: HPV vaccine can prevent most cervical cancers.",
    options: ["True", "False"],
    answer: "True"
  },
  {
    question: "Which of these is NOT a symptom of advanced cervical cancer?",
    options: ["Abnormal vaginal bleeding", "Pelvic pain", "Frequent urination", "High blood pressure"],
    answer: "High blood pressure"
  },
  {
    question: "At what age is HPV vaccination ideally given?",
    options: ["Before age 12", "After age 30", "During menopause", "Any age is equally effective"],
    answer: "Before age 12"
  }
];

const CervicalCancer = () => {
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
      <h1>🎗️ Cervical Cancer</h1>
      <p className="lead">“Preventable, detectable, beatable.”</p>

      <section className="info-section">
        <p>
          Cervical cancer is a serious but highly preventable and treatable condition when detected early.
          Regular screenings and HPV vaccination are key to protecting women’s health. At Sukam Speciality Clinic and
          Fertility Centre, we provide comprehensive cervical health services — from screening and early diagnosis
          to treatment and counseling — empowering women to stay healthy and confident.
        </p>

        <h3>🩺 What We Offer:</h3>
        <ul>
          <li>Pap smear and HPV DNA testing for early detection</li>
          <li>Visual inspection with acetic acid (VIA) screening</li>
          <li>Colposcopy and biopsy for accurate diagnosis</li>
          <li>Vaccination against HPV (Human Papillomavirus)</li>
          <li>Treatment options including cryotherapy, LEEP, or referral for advanced care</li>
          <li>Patient education on cervical cancer prevention and healthy lifestyle</li>
          <li>Emotional support and follow-up care</li>
        </ul>

        <h3>💡 Tips for Cervical Health:</h3>
        <ul>
          <li>Get regular Pap smears as recommended by your healthcare provider</li>
          <li>Complete the HPV vaccination schedule early, ideally before sexual debut</li>
          <li>Practice safe sex and limit the number of sexual partners</li>
          <li>Avoid smoking as it increases cancer risk</li>
          <li>Maintain good genital hygiene</li>
        </ul>

        <h3>🚫 Myth vs Fact:</h3>
        <ul>
          <li><strong>❌ Myth:</strong> “Cervical cancer shows symptoms early.”<br /><strong>✅ Truth:</strong> Early stages often have no symptoms, which is why screening is crucial.</li>
          <li><strong>❌ Myth:</strong> “HPV vaccination is only for teenagers.”<br /><strong>✅ Truth:</strong> Vaccination can be beneficial for women up to age 26 and sometimes beyond, based on risk factors.</li>
        </ul>
      </section>

      <section className="quiz-section">
        <h2>🧠 Cervical Cancer Quiz — Test Your Knowledge</h2>

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

export default CervicalCancer;
