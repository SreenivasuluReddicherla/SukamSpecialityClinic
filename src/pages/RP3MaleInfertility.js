import React, { useState } from 'react';
import './RP1InfertilityInsights.css';

const quizData = [
  {
    question: "What is the normal sperm concentration as per WHO?",
    options: [">10 million/mL", ">15 million/mL", ">20 million/mL", ">5 million/mL"],
    answer: ">15 million/mL"
  },
  {
    question: "Which condition is defined as complete absence of sperm in the ejaculate?",
    options: ["Oligospermia", "Asthenospermia", "Azoospermia", "Teratospermia"],
    answer: "Azoospermia"
  },
  {
    question: "Which hormone stimulates sperm production in men?",
    options: ["LH", "FSH", "Prolactin", "Estrogen"],
    answer: "FSH"
  },
  {
    question: "Which is a common structural cause of male infertility?",
    options: ["Varicocele", "Fibroids", "PCOS", "Retroverted uterus"],
    answer: "Varicocele"
  },
  {
    question: "What does asthenozoospermia refer to?",
    options: ["Low sperm count", "Poor sperm motility", "Abnormal sperm shape", "High semen volume"],
    answer: "Poor sperm motility"
  },
  {
    question: "Which of the following is NOT a part of semen analysis?",
    options: ["Sperm count", "Motility", "Testosterone level", "Morphology"],
    answer: "Testosterone level"
  },
  {
    question: "Which vitamin is considered an antioxidant beneficial for sperm health?",
    options: ["Vitamin A", "Vitamin C", "Vitamin K", "Vitamin B1"],
    answer: "Vitamin C"
  },
  {
    question: "What is the role of Coenzyme Q10 in male fertility?",
    options: ["Boosts testosterone only", "Improves sperm DNA", "Enhances sperm motility", "Prevents infection"],
    answer: "Enhances sperm motility"
  },
  {
    question: "What is the ideal abstinence period before semen collection?",
    options: ["1–2 days", "2–7 days", "10 days", "24 hours"],
    answer: "2–7 days"
  },
  {
    question: "Which test helps identify chromosomal defects in azoospermia?",
    options: ["Ultrasound", "Karyotyping", "HSG", "Doppler scan"],
    answer: "Karyotyping"
  },
  {
    question: "What lifestyle factor has a proven negative impact on sperm quality?",
    options: ["Moderate caffeine", "Balanced diet", "Smoking", "Meditation"],
    answer: "Smoking"
  },
  {
    question: "Which surgical procedure is done for varicocele correction?",
    options: ["Vasectomy", "Varicocelectomy", "TESE", "Cystoscopy"],
    answer: "Varicocelectomy"
  },
  {
    question: "Which ART technique involves injecting a sperm into an egg?",
    options: ["IUI", "IVF", "ICSI", "HSG"],
    answer: "ICSI"
  },
  {
    question: "What is retrograde ejaculation?",
    options: ["Sperm going into vas deferens", "Sperm not formed", "Semen flows backward into the bladder", "Low sperm count"],
    answer: "Semen flows backward into the bladder"
  },
  {
    question: "Which herbal supplement is commonly used in Ayurveda to support male fertility?",
    options: ["Tulsi", "Neem", "Ashwagandha", "Brahmi"],
    answer: "Ashwagandha"
  },
  {
    question: "What does necrozoospermia indicate?",
    options: ["All sperm are immobile", "All sperm are dead", "No sperm", "High volume of semen"],
    answer: "All sperm are dead"
  },
  {
    question: "Testosterone therapy is contraindicated in men trying to conceive because:",
    options: ["It increases sperm count", "It enhances libido", "It suppresses sperm production", "It improves erections"],
    answer: "It suppresses sperm production"
  },
  {
    question: "Micro-TESE is most useful in:",
    options: ["Oligospermia", "Erectile dysfunction", "Obstructive azoospermia", "Non-obstructive azoospermia"],
    answer: "Non-obstructive azoospermia"
  },
  {
    question: "Which mineral is essential for sperm production?",
    options: ["Iron", "Zinc", "Copper", "Potassium"],
    answer: "Zinc"
  },
  {
    question: "Klinefelter syndrome is associated with:",
    options: ["Overproduction of testosterone", "Chromosomal abnormality (XXY)", "Normal sperm production", "High sperm motility"],
    answer: "Chromosomal abnormality (XXY)"
  },
  {
    question: "DNA fragmentation in sperm leads to:",
    options: ["Increased motility", "Improved fertilization", "Poor embryo development", "Faster conception"],
    answer: "Poor embryo development"
  },
  {
    question: "A semen sample should be examined within how many minutes of collection?",
    options: ["10 minutes", "30–60 minutes", "2 hours", "Immediately"],
    answer: "30–60 minutes"
  },
  {
    question: "One of the most common infections affecting male fertility is:",
    options: ["Malaria", "Hepatitis", "Chlamydia", "Typhoid"],
    answer: "Chlamydia"
  },
  {
    question: "PESA is a technique to:",
    options: ["Extract testicular tissue", "Remove varicocele", "Aspirate sperm from epididymis", "Enhance ejaculation"],
    answer: "Aspirate sperm from epididymis"
  },
  {
    question: "Which of the following is FALSE about male infertility?",
    options: ["It contributes to about 50% of infertility cases", "Most cases are untreatable", "Sperm quality declines with age", "ART can help overcome severe sperm issues"],
    answer: "Most cases are untreatable"
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
