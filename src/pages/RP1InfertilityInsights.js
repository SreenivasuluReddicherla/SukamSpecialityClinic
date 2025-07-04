import React, { useState } from 'react';
import './RP1InfertilityInsights.css';

const quizData = [
  {
    question: "What is the medical definition of infertility in women under 35?",
    options: [
      "No periods for 3 months",
      "Failure to conceive after 6 months",
      "Failure to conceive after 12 months",
      "Painful periods"
    ],
    answer: "Failure to conceive after 12 months"
  },
  {
    question: "Which condition is a common cause of anovulation in women?",
    options: ["Endometriosis", "PCOS", "Fibroids", "Tuberculosis"],
    answer: "PCOS"
  },
  {
    question: "What is AMH primarily used to assess?",
    options: ["Ovulation timing", "Uterine lining", "Egg reserve", "Menstrual cycle length"],
    answer: "Egg reserve"
  },
  {
    question: "Which test is done to assess if fallopian tubes are open?",
    options: ["Transvaginal ultrasound", "HSG (Hysterosalpingography)", "Pap smear", "FSH test"],
    answer: "HSG (Hysterosalpingography)"
  },
  {
    question: "A male fertility test that checks count, motility, and shape is called:",
    options: ["Scrotal scan", "Semen analysis", "Sperm washing", "Hormonal assay"],
    answer: "Semen analysis"
  },
  {
    question: "At what female age does fertility begin to significantly decline?",
    options: ["28", "30", "35", "40"],
    answer: "35"
  },
  {
    question: "Which hormone triggers egg release from the ovary?",
    options: ["FSH", "LH", "Prolactin", "TSH"],
    answer: "LH"
  },
  {
    question: "Which condition is characterized by tissue similar to the uterine lining growing outside the uterus?",
    options: ["PCOS", "Endometriosis", "Adenomyosis", "Fibroids"],
    answer: "Endometriosis"
  },
  {
    question: "In IVF, where does fertilization take place?",
    options: ["In the uterus", "In the lab", "In the fallopian tube", "In the ovary"],
    answer: "In the lab"
  },
  {
    question: "Which is NOT typically part of a female fertility work-up?",
    options: ["Semen analysis", "AMH test", "HSG", "Ultrasound"],
    answer: "Semen analysis"
  },
  {
    question: "What lifestyle factor is known to negatively affect both egg and sperm quality?",
    options: ["Caffeine", "Smoking", "Yoga", "Hydration"],
    answer: "Smoking"
  },
  {
    question: "What percentage of infertility cases involve male factors?",
    options: ["10%", "20%", "40–50%", "80%"],
    answer: "40–50%"
  },
  {
    question: "Which of the following is true about unexplained infertility?",
    options: [
      "It means both partners have no reproductive organs",
      "It is untreatable",
      "It accounts for 10–15% of infertility cases",
      "It only affects older women"
    ],
    answer: "It accounts for 10–15% of infertility cases"
  },
  {
    question: "Which hormone is often elevated in women with PCOS?",
    options: ["Estrogen", "FSH", "LH", "Prolactin"],
    answer: "LH"
  },
  {
    question: "What is secondary infertility?",
    options: [
      "Infertility due to age",
      "Inability to conceive after having one child",
      "Infertility in men",
      "Infertility due to blocked tubes"
    ],
    answer: "Inability to conceive after having one child"
  },
  {
    question: "Which treatment is used for severe male infertility?",
    options: ["IUI", "Clomiphene", "ICSI", "Hysteroscopy"],
    answer: "ICSI"
  },
  {
    question: "Which fertility treatment involves placing sperm directly into the uterus?",
    options: ["IVF", "IUI", "OI", "HSG"],
    answer: "IUI"
  },
  {
    question: "Which of the following is a sign of ovulation?",
    options: [
      "Heavy bleeding",
      "Mild abdominal pain (Mittelschmerz)",
      "High prolactin",
      "Fever"
    ],
    answer: "Mild abdominal pain (Mittelschmerz)"
  },
  {
    question: "Which statement is FALSE?",
    options: [
      "Men’s fertility remains constant throughout life",
      "Egg quality declines with age",
      "IVF doesn’t guarantee success",
      "Lifestyle changes can improve fertility"
    ],
    answer: "Men’s fertility remains constant throughout life"
  },
  {
    question: "Which supplement may help improve sperm motility?",
    options: ["Calcium", "Vitamin D", "Coenzyme Q10", "Iron"],
    answer: "Coenzyme Q10"
  },
  {
    question: "Which of the following is NOT a typical emotional reaction to infertility?",
    options: ["Anxiety", "Guilt", "Joy", "Isolation"],
    answer: "Joy"
  },
  {
    question: "How does stress affect fertility?",
    options: [
      "It boosts ovulation",
      "It may disrupt hormonal balance",
      "It has no effect",
      "It guarantees pregnancy"
    ],
    answer: "It may disrupt hormonal balance"
  },
  {
    question: "A blocked fallopian tube prevents:",
    options: [
      "Egg maturation",
      "Sperm production",
      "Fertilization and egg transport",
      "Menstrual flow"
    ],
    answer: "Fertilization and egg transport"
  },
  {
    question: "When should a woman over 35 seek fertility evaluation?",
    options: [
      "After 1 year of trying",
      "After 6 months of trying",
      "Immediately",
      "After 2 years"
    ],
    answer: "After 6 months of trying"
  },
  {
    question: "Which statement about IVF is TRUE?",
    options: [
      "It always leads to twins",
      "It guarantees pregnancy",
      "It involves embryo transfer into the uterus",
      "It requires surgery every time"
    ],
    answer: "It involves embryo transfer into the uterus"
  }
];

const InfertilityInsights = () => {
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
      <h1>🧬 Infertility – Insights</h1>
      <p className="lead">“Every story has its hurdles — let’s decode the ‘why not yet.’”</p>

      <section className="info-section">
        <p>
          Infertility can be an emotional and confusing journey. It affects many couples, but understanding the causes and options available can bring hope. At Sukam Speciality Clinic and Fertility Centre, we believe every couple’s story is unique. We provide compassionate support and thorough evaluation to help uncover the reasons behind infertility and guide you towards the best path forward.
        </p>
        <h3>🩺 What We Offer:</h3>
        <ul>
          <li>Comprehensive fertility assessment for both partners</li>
          <li>Hormonal tests, semen analysis, and imaging studies</li>
          <li>Identification of factors like ovulatory disorders, tubal blockage, male factor infertility, and unexplained infertility</li>
          <li>Counseling and emotional support throughout the journey</li>
          <li>Personalized treatment plans designed with your goals in mind</li>
        </ul>

        <h3>💡 Tips to Support Fertility Naturally:</h3>
        <ul>
          <li>Maintain a healthy weight and balanced diet</li>
          <li>Avoid smoking, alcohol, and excessive caffeine</li>
          <li>Manage stress through relaxation and mindfulness</li>
          <li>Track ovulation and fertile windows</li>
          <li>Regular moderate exercise improves reproductive health</li>
        </ul>

        <h3>🚫 Myth vs Fact:</h3>
        <ul>
          <li><strong>❌ Myth:</strong> “Infertility is usually the woman’s problem.”<br /><strong>✅ Truth:</strong> Male factors contribute to nearly half of all infertility cases.</li>
          <li><strong>❌ Myth:</strong> “If you don’t get pregnant immediately, there is a problem.”<br /><strong>✅ Truth:</strong> Many couples conceive naturally within a year of trying.</li>
        </ul>
      </section>

      <section className="quiz-section">
        <h2>🧠 Infertility Quiz — How Much Do You Know?</h2>

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

export default InfertilityInsights;
