import React, { useState } from 'react';
import './RP1InfertilityInsights.css';

const quizData = [
  {
    question: "What does 'intrapartum care' refer to?",
    options: [
      "Care before pregnancy",
      "Care during labor and delivery",
      "Care after the baby is born",
      "Care in the NICU"
    ],
    answer: "Care during labor and delivery"
  },
  {
    question: "The first sign of active labor is:",
    options: [
      "Baby crying",
      "Placenta delivery",
      "Regular, strong contractions",
      "Breast milk leakage"
    ],
    answer: "Regular, strong contractions"
  },
  {
    question: "The ideal position for labor monitoring is:",
    options: [
      "Lying flat only",
      "Always sitting",
      "Any comfortable position with monitoring",
      "Hanging legs off the bed"
    ],
    answer: "Any comfortable position with monitoring"
  },
  {
    question: "Which of these helps reduce labor pain naturally?",
    options: [
      "Lying still",
      "Hot showers and breathing exercises",
      "Skipping meals",
      "Pushing early"
    ],
    answer: "Hot showers and breathing exercises"
  },
  {
    question: "Which of the following is used for continuous fetal heart rate monitoring?",
    options: ["MRI", "CTG", "Ultrasound gel", "Endoscopy"],
    answer: "CTG"
  },
  {
    question: "What is the term for delivery of the placenta?",
    options: [
      "Labor",
      "Third stage of labor",
      "Miscarriage",
      "Ejection"
    ],
    answer: "Third stage of labor"
  },
  {
    question: "Which pain relief is commonly used during vaginal labor?",
    options: [
      "General anesthesia",
      "Chemotherapy",
      "Epidural injection",
      "Muscle relaxant pills"
    ],
    answer: "Epidural injection"
  },
  {
    question: "What is the Apgar score used for?",
    options: [
      "Assessing the mother’s heartbeat",
      "Measuring fetal weight",
      "Evaluating baby’s condition at birth",
      "Checking the placenta"
    ],
    answer: "Evaluating baby’s condition at birth"
  },
  {
    question: "Lochia refers to:",
    options: [
      "Baby’s first cry",
      "Post-delivery bleeding from uterus",
      "Amniotic fluid",
      "Breast milk"
    ],
    answer: "Post-delivery bleeding from uterus"
  },
  {
    question: "When can walking be started after normal vaginal delivery?",
    options: [
      "After 7 days",
      "After 3 hours",
      "Within a few hours",
      "After a month"
    ],
    answer: "Within a few hours"
  },
  {
    question: "Which of the following helps with breastfeeding success?",
    options: [
      "Early skin-to-skin contact",
      "Delayed feeding for 2 days",
      "Bottle-feeding from day 1",
      "Avoiding breast massage"
    ],
    answer: "Early skin-to-skin contact"
  },
  {
    question: "What is a common emotional reaction in first few days after delivery?",
    options: ["Baby blues", "Mania", "Seizures", "Schizophrenia"],
    answer: "Baby blues"
  },
  {
    question: "After cesarean delivery, mothers are encouraged to:",
    options: [
      "Sleep for 7 days",
      "Avoid food for 3 days",
      "Start walking within 24 hours",
      "Avoid contact with baby"
    ],
    answer: "Start walking within 24 hours"
  },
  {
    question: "When should the first postpartum check-up usually occur?",
    options: [
      "Within 2 days",
      "At 6 weeks",
      "At 6 months",
      "After the next baby"
    ],
    answer: "At 6 weeks"
  },
  {
    question: "Which of the following is NOT a goal of postpartum care?",
    options: [
      "Monitoring bleeding",
      "Family planning advice",
      "Encouraging over-exercise",
      "Mental health screening"
    ],
    answer: "Encouraging over-exercise"
  }
];

const IntraPostpartumCare = () => {
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
      <h1>🤱 Intra and Postpartum Care</h1>
      <p className="lead">“Caring beyond the crib and into recovery.”</p>

      <section className="info-section">
  <h3>👶 What Is Intrapartum and Postpartum Care?</h3>
  <p>
    <strong>Intrapartum Care</strong> refers to medical and emotional support during labor and delivery.<br />
    <strong>Postpartum Care</strong> refers to care after the baby is born, including recovery, breastfeeding, physical and emotional well-being of the mother, and baby care.
  </p>
  <p>
    At Sukam, we combine advanced monitoring, personalized care, and emotional support from labor room to postnatal discharge and beyond.
  </p>

  <h3>⏳ Intrapartum Care – Monitoring During Labor</h3>
  <ul>
    <li><strong>Contractions:</strong> Strength, frequency, duration (via CTG)</li>
    <li><strong>Fetal Heart Rate:</strong> CTG/Doppler to monitor baby’s response to labor</li>
    <li><strong>Cervical Dilation:</strong> Internal exams to check progress from 0 to 10 cm</li>
    <li><strong>Amniotic Fluid:</strong> Color, quantity, rupture status</li>
    <li><strong>Pain & Emotional Support:</strong> Breathing, positions, and relief methods</li>
  </ul>
  <p>
    We follow WHO-recommended labor protocols and tailor care to each mother's birthing plan and comfort.
  </p>

  <h3>💊 Pain Management Options During Labor</h3>
  <ul>
    <li><strong>Non-medical comfort:</strong> Birthing ball, warm compress, breathing, partner support</li>
    <li><strong>Medical options:</strong> IV pain medications, Epidural, Local anesthesia</li>
  </ul>
  <p>You are free to choose or refuse pain relief — we respect your preferences.</p>

  <h3>📈 Stages of Labor – What to Expect</h3>
  <ul>
    <li><strong>Stage 1 – Early & Active Labor:</strong> Cervix dilates to 10 cm; contractions begin (6–12 hrs)</li>
    <li><strong>Stage 2 – Pushing & Delivery:</strong> Baby descends; lasts 30 min–2 hrs</li>
    <li><strong>Stage 3 – Placenta Delivery:</strong> Delivered within 5–30 min; bleeding monitored</li>
  </ul>
  <p>All deliveries are performed under aseptic conditions with skilled OB-GYN and neonatal teams.</p>

  <h3>👶 Immediate Newborn Care</h3>
  <ul>
    <li>Skin-to-skin contact immediately after birth</li>
    <li>Umbilical cord clamping and cutting</li>
    <li>Apgar score evaluation</li>
    <li>Initiation of early breastfeeding</li>
    <li>Baby kept warm under a radiant warmer</li>
  </ul>
  <p><strong>Golden Hour:</strong> First hour after birth supports bonding, warmth, and feeding initiation.</p>

  <h3>🕐 Postpartum Care – First 24 Hours</h3>
  <ul>
    <li>Monitoring for bleeding (PPH)</li>
    <li>Uterine contraction and shrinkage</li>
    <li>Vitals: BP, pulse, temperature</li>
    <li>Urination and bladder function</li>
    <li>Wound care (episiotomy or cesarean)</li>
    <li>Breastfeeding support and pain management</li>
  </ul>
  <p>⚠️ Early warning signs like fever or bleeding are addressed by our expert postpartum nurses immediately.</p>

  <h3>🚼 Recovery After Normal & Cesarean Delivery</h3>
  <ul>
    <li><strong>After Vaginal Birth:</strong> Mild pain, bleeding (lochia), encouraged to walk and feed early</li>
    <li><strong>After C-section:</strong> 3–5 day stay, pain control, early walking, stitch care</li>
  </ul>
  <p>We offer scar care, physiotherapy, and lactation counseling post-delivery.</p>

  <h3>🥗 Nutrition and Rest in Postpartum</h3>
  <ul>
    <li><strong>Nutrition:</strong> High-protein meals, iron/calcium, plenty of fluids, cultural postpartum foods</li>
    <li><strong>Rest:</strong> Nap when baby sleeps, gentle walking, avoid lifting and stress</li>
  </ul>
  <p>Family support and sleep play a crucial role in a smooth recovery.</p>

  <h3>🤱 Breastfeeding & Baby Bonding</h3>
  <ul>
    <li>Lactation counseling for latch, position, and expression</li>
    <li>Help with engorgement, cracked nipples</li>
    <li>Rooming-in for on-demand breastfeeding</li>
  </ul>
  <p>
    Breastfeeding benefits both baby (immunity) and mother (uterine recovery, bonding, weight loss).
  </p>

  <h3>🧠 Mental Health and Emotional Support</h3>
  <ul>
    <li><strong>Baby blues:</strong> Common tearfulness, fatigue, mood swings (in 80%)</li>
    <li><strong>Postpartum depression:</strong> Occurs in 10–15%, needs support</li>
  </ul>
  <p>
    At Sukam, we offer screenings, partner education, counseling, and mindfulness support.
  </p>

  <h3>🩺 Postpartum Checkups & Family Planning</h3>
  <ul>
    <li>6-week checkup: Uterus, stitches, mood, breasts, contraception</li>
    <li>Contraception options: Condoms, Copper-T, Progesterone-only pills, LAM, IUDs</li>
  </ul>
  <p>
    ⏳ <strong>Ideal pregnancy gap:</strong> 12–18 months for better outcomes.
  </p>

  <h3>🏥 Sukam’s Postpartum Support – We Stay With You</h3>
  <ul>
    <li>24×7 postnatal ward with expert nurses</li>
    <li>Lactation and infant feeding guidance</li>
    <li>Postnatal physiotherapy for pain relief</li>
    <li>Mental health screening & therapy</li>
    <li>Discharge kit with mother & baby care guide</li>
    <li>Post-discharge helpline</li>
    <li>Workshops for bathing, swaddling, and breastfeeding</li>
  </ul>
  <p>
    Whether it’s your first baby or fifth, Sukam is here for you — from the first contraction to your baby’s first cuddle at home.
  </p>
</section>


      <section className="quiz-section">
        <h2>🧠 Postpartum Care Quiz — Are You Ready?</h2>

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

export default IntraPostpartumCare;
