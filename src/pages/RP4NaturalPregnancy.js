import React, { useState } from 'react';
import './RP1InfertilityInsights.css';

const quizData = [
  {
    question: "What does OITI stand for?",
    options: [
      "Ovulation Induction and Timed Intercourse",
      "Ovarian Inflammation Treatment Initiative",
      "Ovary Imaging and Testing Intervention",
      "None of the above"
    ],
    answer: "Ovulation Induction and Timed Intercourse"
  },
  {
    question: "Which hormone triggers ovulation?",
    options: ["Estrogen", "Progesterone", "Luteinizing Hormone (LH)", "Testosterone"],
    answer: "Luteinizing Hormone (LH)"
  },
  {
    question: "True or False: Stress can delay ovulation.",
    options: ["True", "False"],
    answer: "True"
  },
  {
    question: "How long is the fertile window?",
    options: ["1 day", "3 days", "5-6 days", "10 days"],
    answer: "5-6 days"
  },
  {
    question: "Can lifestyle changes improve ovulation?",
    options: ["Yes", "No"],
    answer: "Yes"
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
