import React, { useState } from 'react';
import './RP1InfertilityInsights.css';

const quizData = [
  {
    question: "What is the most common type of operative delivery?",
    options: ["Cesarean section", "Forceps delivery", "Vacuum extraction", "Episiotomy"],
    answer: "Cesarean section"
  },
  {
    question: "True or False: You can have a vaginal birth after cesarean (VBAC).",
    options: ["True", "False"],
    answer: "True"
  },
  {
    question: "Which anesthesia is commonly used during a cesarean?",
    options: ["General anesthesia", "Spinal or epidural anesthesia", "Local anesthesia only", "None"],
    answer: "Spinal or epidural anesthesia"
  },
  {
    question: "Which of the following is NOT a common reason for operative delivery?",
    options: ["Fetal distress", "Prolonged labor", "Maternal request without medical reason", "Placenta previa"],
    answer: "Maternal request without medical reason"
  },
  {
    question: "Postoperative care includes:",
    options: ["Pain management", "Early walking", "Wound care", "All of the above"],
    answer: "All of the above"
  }
];

const OperativeDeliveries = () => {
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
      <h1>🏥 Operative Deliveries</h1>
      <p className="lead">“When safe arrival needs surgical precision.”</p>

      <section className="info-section">
        <p>
          Operative deliveries—such as cesarean sections or assisted vaginal deliveries with forceps or vacuum—are critical options when normal labor faces complications. At Sukam Speciality Clinic and Fertility Centre, we combine advanced technology, expert surgical skill, and compassionate care to ensure the best outcomes for mother and baby.
        </p>
        <p>
          Our multidisciplinary team supports you before, during, and after the procedure, focusing on safety, comfort, and recovery.
        </p>

        <h3>🩺 What We Offer:</h3>
        <ul>
          <li>Comprehensive pre-operative counseling and birth planning</li>
          <li>State-of-the-art surgical facilities with infection control</li>
          <li>Skilled obstetricians experienced in emergency and elective C-sections</li>
          <li>Assisted vaginal delivery options when safe and appropriate</li>
          <li>Postoperative pain management and early mobilization</li>
          <li>Breastfeeding and newborn care support after surgery</li>
          <li>Emotional counseling to address birth experience and expectations</li>
        </ul>

        <h3>🤔 When Is Operative Delivery Needed?</h3>
        <ul>
          <li>Prolonged labor or failure to progress</li>
          <li>Fetal distress or abnormal heart rate</li>
          <li>Placenta previa or abruptio placentae</li>
          <li>Multiple pregnancies (twins, triplets)</li>
          <li>Maternal health issues (e.g., high blood pressure, diabetes)</li>
          <li>Previous cesarean section with risk factors</li>
        </ul>

        <h3>💡 Tips for Preparing for Operative Delivery:</h3>
        <ul>
          <li>Discuss your birth preferences and fears openly with your care team</li>
          <li>Attend prenatal classes covering cesarean and assisted deliveries</li>
          <li>Understand anesthesia options and recovery timelines</li>
          <li>Arrange emotional support for after delivery</li>
          <li>Follow post-operative care instructions closely for faster healing</li>
        </ul>

        <h3>🚫 Myth vs Fact:</h3>
        <ul>
          <li><strong>❌ Myth:</strong> “C-section means you failed to deliver naturally.”<br /><strong>✅ Truth:</strong> It’s a medically necessary intervention to keep you and baby safe—not a failure.</li>
          <li><strong>❌ Myth:</strong> “Operative delivery means the baby won’t bond or breastfeed well.”<br /><strong>✅ Truth:</strong> Early skin-to-skin contact and breastfeeding support make bonding strong regardless of delivery mode.</li>
        </ul>
      </section>

      <section className="quiz-section">
        <h2>🧠 Operative Delivery Quiz — How Much Do You Know?</h2>

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

export default OperativeDeliveries;
