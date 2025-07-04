import React, { useState } from 'react';
import './RP1InfertilityInsights.css';

const quizData = [
  {
    question: "What does IVF stand for?",
    options: [
      "In-Vitro Fertilization",
      "Intra Vaginal Fusion",
      "Induced Vaginal Fertility",
      "Internal Vaginal Follicles"
    ],
    answer: "In-Vitro Fertilization"
  },
  {
    question: "When is ICSI recommended?",
    options: [
      "Only in twin pregnancies",
      "When the uterus is small",
      "When sperm count is low",
      "When the eggs are immature"
    ],
    answer: "When sperm count is low"
  },
  {
    question: "How are embryos created in IVF?",
    options: [
      "Inside the uterus",
      "In a lab using egg and sperm",
      "Through natural intercourse",
      "Using donor placenta"
    ],
    answer: "In a lab using egg and sperm"
  },
  {
    question: "What is the ideal age for IVF success?",
    options: [
      "18–22",
      "25–35",
      "40–50",
      "Any age is equally successful"
    ],
    answer: "25–35"
  },
  {
    question: "What is embryo transfer?",
    options: [
      "Transfer of sperm",
      "Transfer of fertilized egg into uterus",
      "Transfer of uterus",
      "Menstrual cycle regulation"
    ],
    answer: "Transfer of fertilized egg into uterus"
  },
  {
    question: "How many embryos are usually transferred?",
    options: [
      "5–6",
      "Only 1",
      "Usually 1–2, based on age and quality",
      "All embryos at once"
    ],
    answer: "Usually 1–2, based on age and quality"
  },
  {
    question: "Does IVF always require ICSI?",
    options: [
      "Yes",
      "No",
      "Only for women",
      "Only in summer"
    ],
    answer: "No"
  },
  {
    question: "How many days after embryo transfer is a pregnancy test done?",
    options: [
      "3 days",
      "7 days",
      "14 days",
      "30 days"
    ],
    answer: "14 days"
  },
  {
    question: "What is ovarian stimulation?",
    options: [
      "Painful uterine massage",
      "Taking hormone injections to grow eggs",
      "Vaginal cleaning",
      "Sperm testing"
    ],
    answer: "Taking hormone injections to grow eggs"
  },
  {
    question: "Which hormone helps with egg maturation?",
    options: [
      "hCG",
      "Insulin",
      "Estrogen",
      "Cortisol"
    ],
    answer: "hCG"
  },
  {
    question: "IVF success depends MOST on:",
    options: [
      "Timing of ultrasound",
      "Age and embryo quality",
      "Size of uterus",
      "Color of cervix"
    ],
    answer: "Age and embryo quality"
  },
  {
    question: "Can embryos be frozen?",
    options: [
      "No",
      "Only for one day",
      "Yes, safely for years",
      "Only if the woman is under 25"
    ],
    answer: "Yes, safely for years"
  },
  {
    question: "Is ICSI useful in female infertility?",
    options: [
      "No",
      "Yes, always",
      "Mainly useful in male infertility",
      "Only during ovulation"
    ],
    answer: "Mainly useful in male infertility"
  },
  {
    question: "Do IVF or ICSI require surgery?",
    options: [
      "No, only minor procedures",
      "Yes, open surgery",
      "Cesarean",
      "Hysterectomy"
    ],
    answer: "No, only minor procedures"
  },
  {
    question: "Is bed rest compulsory after IVF?",
    options: [
      "Yes, for a month",
      "No, only for a few hours post-transfer",
      "Strict hospitalization",
      "Not needed at all"
    ],
    answer: "No, only for a few hours post-transfer"
  }
];

const IVF_ICSI = () => {
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
      <h1>✨ IVF & ICSI</h1>
      <p className="lead">“Science meets stardust to create life.”</p>

      <section className="info-section">
        <p>
          In vitro fertilization (IVF) and intracytoplasmic sperm injection (ICSI) are advanced assisted reproductive technologies that help couples overcome complex fertility challenges. IVF involves fertilizing eggs outside the body, while ICSI injects a single sperm directly into an egg to boost fertilization chances. At Sukam Speciality Clinic and Fertility Centre, we combine cutting-edge technology with compassionate care to make your dreams of parenthood a reality.
        </p>

        <h3>🩺 What We Offer:</h3>
        <ul>
          <li>Comprehensive fertility evaluation before treatment</li>
          <li>Customized IVF/ICSI protocols tailored to your needs</li>
          <li>State-of-the-art laboratory and embryology facilities</li>
          <li>Skilled embryologists and reproductive specialists</li>
          <li>Supportive counseling throughout the process</li>
          <li>Follow-up care for pregnancy and beyond</li>
        </ul>

        <h3>💡 Tips for IVF Success:</h3>
        <ul>
          <li>Maintain a healthy lifestyle with balanced nutrition and moderate exercise</li>
          <li>Avoid smoking, alcohol, and unnecessary medications</li>
          <li>Manage stress through relaxation and support groups</li>
          <li>Follow medical instructions carefully and attend all appointments</li>
          <li>Keep open communication with your care team</li>
        </ul>

        <h3>🚫 Myth vs Fact:</h3>
        <ul>
          <li><strong>❌ Myth:</strong> “IVF always results in multiple births.”<br /><strong>✅ Truth:</strong> Single embryo transfer is common to reduce multiple pregnancy risks.</li>
          <li><strong>❌ Myth:</strong> “IVF is only for older women.”<br /><strong>✅ Truth:</strong> IVF helps a range of fertility issues regardless of age.</li>
        </ul>
      </section>

      <section className="quiz-section">
        <h2>🧠 IVF & ICSI Quiz — Test Your Knowledge!</h2>

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

export default IVF_ICSI;
