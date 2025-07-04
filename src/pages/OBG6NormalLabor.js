import React, { useState } from 'react';
import './RP1InfertilityInsights.css';

const quizData = [
  {
    question: "How many stages are there in labor?",
    options: ["2", "3", "4", "5"],
    answer: "3"
  },
  {
    question: "The first stage of labor ends when:",
    options: [
      "Water breaks",
      "Baby is born",
      "Placenta is delivered",
      "Cervix is fully dilated"
    ],
    answer: "Cervix is fully dilated"
  },
  {
    question: "What does \"bloody show\" mean?",
    options: [
      "Bleeding from placenta",
      "Menstruation",
      "Passage of mucus plug",
      "Baby’s head visible"
    ],
    answer: "Passage of mucus plug"
  },
  {
    question: "What helps relieve labor pain naturally?",
    options: [
      "Screaming",
      "Cold water",
      "Breathing and massage",
      "Tight clothing"
    ],
    answer: "Breathing and massage"
  },
  {
    question: "When should you go to the hospital?",
    options: [
      "First movement",
      "When contractions are regular",
      "After water intake",
      "Baby hiccups"
    ],
    answer: "When contractions are regular"
  },
  {
    question: "What is the Golden Hour?",
    options: [
      "Time of C-section",
      "First 60 minutes after delivery",
      "Duration of pushing",
      "Fetal movement test"
    ],
    answer: "First 60 minutes after delivery"
  },
  {
    question: "When does the second stage of labor begin?",
    options: [
      "Contractions start",
      "Baby is born",
      "Cervix reaches 10 cm",
      "Water breaks"
    ],
    answer: "Cervix reaches 10 cm"
  },
  {
    question: "What is skin-to-skin contact?",
    options: [
      "Baby put in crib",
      "Baby dressed and weighed",
      "Baby placed on mother’s chest",
      "Cord cut quickly"
    ],
    answer: "Baby placed on mother’s chest"
  },
  {
    question: "Partner’s role in labor includes:",
    options: [
      "Keeping quiet",
      "Staying away",
      "Emotional and physical support",
      "Administering injections"
    ],
    answer: "Emotional and physical support"
  },
  {
    question: "Rooming-in means:",
    options: [
      "Mother and baby stay in same room",
      "Baby goes to nursery",
      "Mother stays in ward",
      "Doctor visits separately"
    ],
    answer: "Mother and baby stay in same room"
  }
];


const NormalLabor = () => {
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
      <h1>🌿 Normal Labor</h1>
      <p className="lead">“Nature’s way of saying, ‘It’s showtime!’”</p>

      <section className="info-section">
  <h3>🤰 What Is Normal Labor?</h3>
  <p>
    Normal labor refers to the natural process of childbirth where a woman delivers her baby through the vagina without major interventions like cesarean section or instruments. It usually happens between 37 and 42 weeks of pregnancy.
  </p>
  <p>
    It progresses through regular contractions and ends with the delivery of the baby and placenta. It’s called “normal” not because it’s easy — but because it’s safe, natural, and most common.
  </p>

  <h3>⏱️ Signs That Labor Is Starting</h3>
  <p><strong>Pre-Labor Signs:</strong></p>
  <ul>
    <li>Baby drops lower (lightening)</li>
    <li>Increased discharge</li>
    <li>Nesting urge or sudden energy</li>
    <li>Backache and mild cramps</li>
  </ul>
  <p><strong>True Labor Signs:</strong></p>
  <ul>
    <li>Regular strong contractions (5–10 min apart)</li>
    <li>Lower belly/back pain that worsens</li>
    <li>Loss of mucus plug (bloody show)</li>
    <li>Water breaking (fluid leak or gush)</li>
  </ul>
  <p>If you're unsure whether labor has started, contact your doctor or visit the labor ward.</p>

  <h3>⏳ The 3 Stages of Labor – In Detail</h3>
  <p><strong>Stage 1: Cervical Dilation</strong></p>
  <ul>
    <li>Starts with regular contractions and ends at 10 cm dilation</li>
    <li>Takes 6–12 hours for first-time mothers</li>
    <li>Latent phase: 0–4 cm dilation (mild contractions)</li>
    <li>Active phase: 5–10 cm dilation (stronger contractions)</li>
  </ul>
  <p><em>What helps: walking, warm showers, breathing, massage</em></p>

  <p><strong>Stage 2: Pushing and Delivery</strong></p>
  <ul>
    <li>Starts at 10 cm and ends with baby’s birth</li>
    <li>Lasts 30 mins–2 hours (shorter in 2nd+ pregnancies)</li>
    <li>Push with each contraction as guided by your doctor</li>
  </ul>

  <p><strong>Stage 3: Delivery of Placenta</strong></p>
  <ul>
    <li>Happens 5–30 mins after baby’s birth</li>
    <li>Contractions help expel the placenta</li>
    <li>Uterus contracts to reduce bleeding</li>
  </ul>

  <h3>🌬️ Breathing & Relaxation Techniques</h3>
  <ul>
    <li>Inhale slowly through nose, exhale gently through mouth</li>
    <li>Repeat with each contraction to stay calm</li>
    <li>Massage, warm compresses, walking and birthing balls are encouraged</li>
    <li>Partner support and calming music can help reduce stress</li>
  </ul>

  <h3>🩺 Monitoring During Labor</h3>
  <ul>
    <li>Contraction strength and frequency</li>
    <li>Fetal heart rate (via CTG or Doppler)</li>
    <li>Your vitals: BP, pulse, temperature</li>
    <li>Amniotic fluid after rupture (color and amount)</li>
    <li>Cervical dilation checks</li>
  </ul>
  <p>Any intervention is done with your consent if needed for safety.</p>

  <h3>🍼 What to Expect Emotionally and Physically</h3>
  <p><strong>Emotionally:</strong></p>
  <ul>
    <li>Excitement, nervousness, crying, laughter — all normal</li>
    <li>We create a safe space for all feelings</li>
  </ul>
  <p><strong>Physically:</strong></p>
  <ul>
    <li>Cramping, back pressure, sweating, exhaustion</li>
    <li>Stretching or burning sensation during crowning</li>
  </ul>

  <h3>👩‍⚕️ Role of Doctors and Partners</h3>
  <ul>
    <li>OB-GYN, nurses, midwives guide and monitor throughout</li>
    <li>Partner can support emotionally, help change positions, and even cut the cord</li>
  </ul>
  <p>At Sukam, we encourage and celebrate partner involvement.</p>

  <h3>👶 After Birth – The First Hour</h3>
  <ul>
    <li>Skin-to-skin contact on mother’s chest</li>
    <li>Initiate breastfeeding (if stable)</li>
    <li>Delayed cord clamping</li>
    <li>Uterus and bleeding are monitored</li>
  </ul>
  <p>This Golden Hour strengthens bonding and breastfeeding success.</p>

  <h3>💗 Sukam’s Gentle Birth Approach</h3>
  <ul>
    <li>Respectful, calm, pain-managed labor</li>
    <li>Natural birth methods and evidence-based care</li>
    <li>Customized birth plans and skin-to-skin bonding</li>
    <li>Lactation support and emotional care</li>
    <li>Family-friendly, private labor rooms</li>
  </ul>
  <p>We prepare mothers with breathing classes, hospital orientation, and counseling from 36 weeks onward.</p>
</section>


      <section className="quiz-section">
        <h2>🧠 Labor Quiz – Ready for the Big Day?</h2>

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

export default NormalLabor;
