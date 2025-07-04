import React, { useState } from 'react';
import './RP1InfertilityInsights.css';

const quizData = [
  {
    question: "What does OITI stand for?",
    options: [
      "Ovarian Injection and Treatment Initiation",
      "Ovulation Induction with Timed Intercourse",
      "Ovary Implant Transfer",
      "Oocyte Insemination Timing Intervention"
    ],
    answer: "Ovulation Induction with Timed Intercourse"
  },
  {
    question: "Which medicine is commonly used to induce ovulation?",
    options: ["Paracetamol", "Letrozole", "Insulin", "Estrogen-only pills"],
    answer: "Letrozole"
  },
  {
    question: "What is used to trigger egg release in an OITI cycle?",
    options: ["FSH", "Estrogen", "hCG", "Vitamin D"],
    answer: "hCG"
  },
  {
    question: "How is ovulation monitored in OITI?",
    options: ["CT scan", "Blood pressure", "Transvaginal ultrasound", "Chest X-ray"],
    answer: "Transvaginal ultrasound"
  },
  {
    question: "What is the ideal follicle size before triggering ovulation?",
    options: ["10 mm", "14 mm", "18–20 mm", "25 mm"],
    answer: "18–20 mm"
  },
  {
    question: "When is intercourse advised after hCG trigger?",
    options: ["12 hours later", "24–36 hours later", "3 days later", "Anytime"],
    answer: "24–36 hours later"
  },
  {
    question: "How many OITI cycles are generally tried before shifting to IUI?",
    options: ["1 cycle", "2–3 cycles", "3–6 cycles", "10 cycles"],
    answer: "3–6 cycles"
  },
  {
    question: "Who is NOT a good candidate for OITI?",
    options: [
      "Woman with regular periods",
      "Woman with open tubes",
      "Man with severe sperm abnormality",
      "Woman under 30"
    ],
    answer: "Man with severe sperm abnormality"
  },
  {
    question: "What support may be given in the luteal phase?",
    options: ["Estrogen", "Progesterone", "Antibiotics", "Painkillers"],
    answer: "Progesterone"
  },
  {
    question: "What is the main goal of OITI?",
    options: [
      "Collecting eggs for IVF",
      "Stimulating ovulation and planning intercourse",
      "Donating eggs",
      "Blocking ovulation"
    ],
    answer: "Stimulating ovulation and planning intercourse"
  }
];

const NaturalPregnancy = () => {
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
      <h1>🌿 Natural Pregnancy / OITI</h1>
      <p className="lead">“Sometimes, a little guidance brings nature back on track.”</p>

      <section className="info-section">
        <p>
          Many couples conceive naturally with some simple support and lifestyle adjustments. OITI (Ovulation Induction and Timed Intercourse) helps those who need a little extra help to synchronize ovulation and intercourse for the best chance of pregnancy. At Sukam Speciality Clinic and Fertility Centre, we offer gentle, evidence-based natural fertility treatments designed to work with your body’s rhythm.
        </p>

        <h3>🩺 What We Offer:</h3>
        <ul>
          <li>Hormonal evaluation and ovulation tracking</li>
          <li>Ovulation induction with safe medications</li>
          <li>Timed intercourse guidance for optimal fertility</li>
          <li>Nutritional and lifestyle counseling to boost natural fertility</li>
          <li>Regular monitoring to assess response and progress</li>
          <li>Emotional support and education throughout treatment</li>
        </ul>

        <h3>💡 Tips to Boost Natural Fertility:</h3>
        <ul>
          <li>Track basal body temperature and cervical mucus for ovulation signs</li>
          <li>Eat fertility-friendly foods rich in folate, zinc, and antioxidants</li>
          <li>Reduce caffeine and avoid smoking/alcohol</li>
          <li>Maintain a healthy weight and exercise moderately</li>
          <li>Manage stress with yoga, meditation, or hobbies</li>
        </ul>

        <h3>🚫 Myth vs Fact:</h3>
        <ul>
          <li><strong>❌ Myth:</strong> “You can only get pregnant on the exact day of ovulation.”<br /><strong>✅ Truth:</strong> The fertile window spans about 5-6 days, including days before ovulation.</li>
          <li><strong>❌ Myth:</strong> “Ovulation induction drugs always cause multiple pregnancies.”<br /><strong>✅ Truth:</strong> With careful monitoring, risks are minimized.</li>
        </ul>
      </section>

      <section className="quiz-section">
        <h2>🧠 Natural Pregnancy / OITI Quiz — Are You Fertility-Smart?</h2>

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

export default NaturalPregnancy;
