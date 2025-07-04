import React, { useState } from 'react';
import './RP1InfertilityInsights.css';

const quizData = [
  {
    question: "What is an operative delivery?",
    options: [
      "Early delivery",
      "Assisted vaginal or cesarean birth",
      "Home birth",
      "Vacuuming the room"
    ],
    answer: "Assisted vaginal or cesarean birth"
  },
  {
    question: "Forceps are used to:",
    options: [
      "Check cervix",
      "Cut umbilical cord",
      "Assist in delivery",
      "Deliver placenta"
    ],
    answer: "Assist in delivery"
  },
  {
    question: "Vacuum extraction involves:",
    options: [
      "Pulling the baby by hand",
      "Using a suction cup",
      "Cutting the uterus",
      "Using scissors"
    ],
    answer: "Using a suction cup"
  },
  {
    question: "C-section is done through:",
    options: [
      "Vaginal opening",
      "Belly button",
      "Abdominal incision",
      "Cervical cut"
    ],
    answer: "Abdominal incision"
  },
  {
    question: "Which one is not a reason for emergency C-section?",
    options: [
      "Fetal distress",
      "Cord prolapse",
      "Breech position",
      "Baby's hiccups"
    ],
    answer: "Baby's hiccups"
  },
  {
    question: "Recovery from C-section usually takes:",
    options: [
      "3 days",
      "2 weeks",
      "4–6 weeks",
      "6 months"
    ],
    answer: "4–6 weeks"
  },
  {
    question: "Spinal anesthesia is:",
    options: [
      "General anesthesia",
      "Local arm injection",
      "Numbing from waist down",
      "Painful gas"
    ],
    answer: "Numbing from waist down"
  },
  {
    question: "A small baby head swelling after vacuum delivery is:",
    options: [
      "Tumor",
      "Chignon",
      "Hemorrhage",
      "Nothing"
    ],
    answer: "Chignon"
  },
  {
    question: "Forceps-assisted delivery may require:",
    options: [
      "Forceful pushing",
      "Cerclage",
      "Episiotomy",
      "Antibiotics only"
    ],
    answer: "Episiotomy"
  },
  {
    question: "After C-section, walking is encouraged:",
    options: [
      "After 1 week",
      "Same day",
      "After 24 hours",
      "Never"
    ],
    answer: "After 24 hours"
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
  <h3>⚕️ What Are Operative Deliveries?</h3>
  <p>
    An operative delivery means your doctor uses medical tools or surgery to help safely deliver your baby during labor. This is done only when it's necessary for your baby’s health, your safety, or both.
  </p>
  <p>Types of operative deliveries:</p>
  <ul>
    <li>1. Assisted Vaginal Deliveries
      <ul>
        <li>• Forceps Delivery</li>
        <li>• Vacuum (Ventouse) Extraction</li>
      </ul>
    </li>
    <li>2. Cesarean Section (C-Section)
      <ul>
        <li>• Elective (planned)</li>
        <li>• Emergency (during labor)</li>
      </ul>
    </li>
  </ul>
  <p>
    At Sukam, we aim for natural birth but are fully equipped for operative delivery when needed — with safety, compassion, and minimal intervention.
  </p>

  <h3>📌 When Is Operative Delivery Needed?</h3>
  <ul>
    <li><strong>For the baby:</strong>
      <ul>
        <li>• Heart rate drops (fetal distress)</li>
        <li>• Not descending despite strong pushing</li>
        <li>• Cord around neck</li>
        <li>• Meconium-stained fluid</li>
      </ul>
    </li>
    <li><strong>For the mother:</strong>
      <ul>
        <li>• Prolonged second stage of labor</li>
        <li>• Severe exhaustion or inability to push</li>
        <li>• Health conditions (heart disease, preeclampsia)</li>
        <li>• Uterine rupture risk or previous C-section complications</li>
      </ul>
    </li>
  </ul>
  <p><strong>Remember:</strong> A healthy baby and mother are always the ultimate goal — the method of delivery does not define your strength.</p>

  <h3>🔧 Forceps-Assisted Delivery</h3>
  <p>Forceps are spoon-shaped metal instruments gently placed around the baby’s head to help guide them out during a contraction.</p>
  <p><strong>Used when:</strong></p>
  <ul>
    <li>• Baby is low in the birth canal</li>
    <li>• Mother is too exhausted to push</li>
    <li>• Baby needs quick delivery</li>
  </ul>
  <p><strong>Experience:</strong> Pressure, not pain (anesthesia is provided). Minor marks may appear on baby’s head but usually fade in a few days.</p>

  <h3>🧲 Vacuum-Assisted Delivery (Ventouse)</h3>
  <p>A soft suction cup is placed on the baby’s head to help gently pull the baby out during contractions.</p>
  <p><strong>Used when:</strong></p>
  <ul>
    <li>• Prolonged pushing</li>
    <li>• Baby’s head needs repositioning</li>
    <li>• Preferred over forceps in selected cases</li>
  </ul>
  <p>May cause a temporary swelling (chignon) on the baby’s head — usually resolves in 2–3 days.</p>

  <h3>✂️ Cesarean Section (C-Section)</h3>
  <p>A C-section is a surgical procedure to deliver the baby through an incision in the mother's abdomen and uterus.</p>
  <p><strong>Planned when:</strong></p>
  <ul>
    <li>• Breech/transverse baby</li>
    <li>• Placenta previa</li>
    <li>• Twins or higher-order multiples</li>
    <li>• Maternal medical conditions</li>
    <li>• Previous C-section or uterine surgery</li>
  </ul>
  <p><strong>Emergency C-section:</strong> Non-progressive labor, fetal distress, cord prolapse, or uterine rupture risk.</p>

  <h3>🔍 What Happens During a C-Section?</h3>
  <ul>
    <li>• Spinal anesthesia is given (you’re awake, but no pain)</li>
    <li>• Horizontal incision is made (bikini line)</li>
    <li>• Baby is delivered within 10–15 minutes</li>
    <li>• Total surgery duration: ~45 minutes</li>
    <li>• Partner may be allowed inside for elective surgeries — check with your doctor</li>
  </ul>

  <h3>💪 Recovery After Operative Delivery</h3>
  <p><strong>After Forceps/Vacuum:</strong></p>
  <ul>
    <li>• Mild soreness or swelling</li>
    <li>• Episiotomy stitches heal in 1–2 weeks</li>
    <li>• Pain relief medications provided</li>
  </ul>
  <p><strong>After C-Section:</strong></p>
  <ul>
    <li>• Hospital stay: 3–5 days</li>
    <li>• Walking encouraged within 24 hours</li>
    <li>• Breastfeeding can begin early</li>
    <li>• Full recovery: 4–6 weeks</li>
  </ul>
  <p>Sukam provides postnatal physiotherapy, scar care, and lactation support during recovery.</p>

  <h3>🌸 Operative Delivery at Sukam – Your Safety Comes First</h3>
  <ul>
    <li>💗 Shared decision-making and full explanation of procedures</li>
    <li>🧑‍⚕️ Skilled obstetricians and anesthetists</li>
    <li>🧴 Pain-relief and gentle surgical methods</li>
    <li>🧘 Post-op yoga, breathing, and early mobility support</li>
    <li>🍼 Breastfeeding help and emotional reassurance</li>
    <li>📦 Mental health counseling for those who hoped for vaginal birth</li>
  </ul>
  <p><strong>Every birth is beautiful — and your strength is never defined by the method of delivery.</strong></p>
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
