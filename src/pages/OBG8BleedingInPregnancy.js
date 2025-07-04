import React, { useState } from 'react';
import './RP1InfertilityInsights.css';

const quizData = [
  {
    question: "Bleeding before 12 weeks can be due to:",
    options: [
      "Placenta previa",
      "Implantation or miscarriage",
      "Baby’s movement",
      "Cord around neck"
    ],
    answer: "Implantation or miscarriage"
  },
  {
    question: "Painless bleeding in late pregnancy suggests:",
    options: [
      "UTI",
      "Ectopic pregnancy",
      "Placenta previa",
      "Miscarriage"
    ],
    answer: "Placenta previa"
  },
  {
    question: "Which is an emergency cause of bleeding?",
    options: [
      "Implantation",
      "Placental abruption",
      "Light spotting after scan",
      "Cervical polyp"
    ],
    answer: "Placental abruption"
  },
  {
    question: "Bloody show usually occurs:",
    options: [
      "In 1st trimester",
      "During miscarriage",
      "Near delivery",
      "After delivery"
    ],
    answer: "Near delivery"
  },
  {
    question: "Treatment for threatened miscarriage includes:",
    options: [
      "Heavy activity",
      "Methotrexate",
      "Rest and hormone support",
      "Immediate surgery"
    ],
    answer: "Rest and hormone support"
  },
  {
    question: "Ectopic pregnancy is confirmed by:",
    options: [
      "X-ray",
      "Ultrasound + beta-hCG",
      "Urine test",
      "Amniocentesis"
    ],
    answer: "Ultrasound + beta-hCG"
  },
  {
    question: "Cervical insufficiency may be managed with:",
    options: [
      "Bedrest",
      "Cerclage",
      "Blood transfusion",
      "Painkillers only"
    ],
    answer: "Cerclage"
  },
  {
    question: "Most common cause of painless early bleeding:",
    options: [
      "Abruption",
      "Miscarriage",
      "Implantation bleeding",
      "Preterm labor"
    ],
    answer: "Implantation bleeding"
  },
  {
    question: "Emotional effects of bleeding in pregnancy may include:",
    options: [
      "Anxiety",
      "Fever",
      "Diarrhea",
      "Aggression"
    ],
    answer: "Anxiety"
  },
  {
    question: "At Sukam, care for bleeding includes:",
    options: [
      "Only medicines",
      "Only rest",
      "Medical + emotional support",
      "Ignoring if mild"
    ],
    answer: "Medical + emotional support"
  }
];


const BleedingInPregnancy = () => {
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const handleOptionClick = (index, option) => {
    setSelectedAnswers({ ...selectedAnswers, [index]: option });
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
  const total = quizData.length;
  const answered = Object.keys(selectedAnswers).length;
  const progress = (answered / total) * 100;

  return (
    <div className="infertility-container">
      <h1>🔴 Bleeding in Pregnancy</h1>
      <p className="lead">“A red flag on the road to motherhood.”</p>

      <section className="info-section">
  <h3>💧 Is Bleeding During Pregnancy Normal?</h3>
  <p>
    Bleeding during pregnancy can be common, but it should never be ignored. It may happen at any point — from early implantation to labor — and causes range from harmless to serious.
  </p>
  <ul>
    <li><strong>20–30% of pregnant women</strong> experience some bleeding</li>
    <li>Many go on to have healthy pregnancies and deliveries</li>
  </ul>
  <p><strong>Key takeaway:</strong> Bleeding is not always dangerous, but must always be evaluated by a doctor.</p>

  <h3>🩸 Bleeding in the First Trimester (Weeks 1–12)</h3>
  <ul>
    <li><strong>Implantation Bleeding:</strong> Light pink/brown spotting, painless, lasts 1–2 days – <em>harmless</em></li>
    <li><strong>Threatened Miscarriage:</strong> Bleeding + cramps, cervix is closed – <em>pregnancy may continue</em></li>
    <li><strong>Miscarriage:</strong> Heavier bleeding, clots, pain, cervix may open – <em>confirmed by scan</em></li>
    <li><strong>Ectopic Pregnancy:</strong> Severe pain, shoulder tip pain, dizziness – <em>life-threatening emergency</em></li>
    <li><strong>Infections/Cervical Irritation:</strong> Light spotting after intercourse or Pap smear</li>
  </ul>

  <h3>📅 Bleeding in the Second Trimester (Weeks 13–27)</h3>
  <ul>
    <li><strong>Placenta Previa:</strong> Painless bright red bleeding, placenta covers cervix – may require C-section</li>
    <li><strong>Cervical Insufficiency:</strong> Painless cervical dilation – may be managed with cerclage</li>
    <li><strong>Infections or Polyps:</strong> Vaginal or cervical sources of bleeding</li>
  </ul>
  <p><em>Close monitoring often prevents complications in these cases.</em></p>

  <h3>🩸 Bleeding in the Third Trimester (Weeks 28–40)</h3>
  <ul>
    <li><strong>Placenta Previa:</strong> Can bleed again later in pregnancy</li>
    <li><strong>Placental Abruption:</strong> Painful bleeding, hard abdomen – <strong>emergency</strong></li>
    <li><strong>Preterm Labor:</strong> Bleeding with early contractions</li>
    <li><strong>Bloody Show:</strong> Mucus + blood near due date – <em>sign labor is starting</em></li>
  </ul>

  <h3>🔬 How Bleeding Is Evaluated at Sukam</h3>
  <ul>
    <li><strong>Pelvic Exam:</strong> To assess cervix and check for infection</li>
    <li><strong>Ultrasound:</strong> To check baby’s heartbeat, placental location, cervical length</li>
    <li><strong>Blood Tests:</strong> Beta-hCG, hemoglobin, blood group (Rh), etc.</li>
    <li><strong>Urine/Vaginal Swab:</strong> To detect infections</li>
  </ul>
  <p>We ensure gentle care, reassurance, and transparent communication during every step.</p>

  <h3>💊 Treatment Based on Cause</h3>
  <ul>
    <li><strong>Light bleeding (e.g., implantation):</strong> Rest, avoid intercourse, reassurance</li>
    <li><strong>Threatened miscarriage:</strong> Bed rest, progesterone, serial scans</li>
    <li><strong>Ectopic pregnancy:</strong> Methotrexate or emergency surgery</li>
    <li><strong>Placenta previa/abruption:</strong> Hospital care, steroids, transfusion, emergency delivery if needed</li>
  </ul>

  <h3>🧠 Emotional Impact and Support</h3>
  <p>Bleeding may trigger anxiety, fear, guilt, or sadness. At Sukam, we prioritize mental health alongside physical care.</p>
  <ul>
    <li>Private counseling and stress support</li>
    <li>Partner involvement and education</li>
    <li>Yoga and meditation for emotional balance</li>
    <li>24x7 helpline for reassurance</li>
  </ul>
  <p><strong>You're not alone – we’re with you every step of the way.</strong></p>

  <h3>🏥 How Sukam Handles Bleeding in Pregnancy</h3>
  <ul>
    <li>🩺 24x7 emergency evaluation and admission</li>
    <li>🩷 Onsite ultrasound, lab, and fetal monitoring</li>
    <li>💉 Blood transfusion access</li>
    <li>👶 High-risk pregnancy team coordination</li>
    <li>🧘 Stress and emotional counseling</li>
    <li>🧑‍⚕️ OB-GYNs trained in first, second, and third-trimester bleeding</li>
    <li>🧬 NICU and early delivery support if required</li>
  </ul>
  <p><strong>Every bleeding episode is managed with skill, speed, and sincere compassion at Sukam.</strong></p>
</section>


      <section className="quiz-section">
        <h2>🧠 Bleeding in Pregnancy Quiz – Test Your Awareness</h2>
        <div className="progress-bar-container">
          <div className="progress-bar" style={{ width: `${progress}%` }}></div>
        </div>

        {quizData.map((q, i) => (
          <div key={i} className="quiz-question">
            <p>{i + 1}. {q.question}</p>
            <div className="options">
              {q.options.map((opt, j) => (
                <button
                  key={j}
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

        {!showResults && answered === total && (
          <button className="submit-button" onClick={() => setShowResults(true)}>See Results</button>
        )}

        {showResults && (
          <div className="results-section">
            <p>✅ Correct Answers: {results.correct}</p>
            <p>❌ Wrong Answers: {results.wrong}</p>
            <div className="score-breakdown">
              <h4>Detailed Score Breakdown</h4>
              <ul>
                {quizData.map((q, i) => (
                  <li key={i}>
                    <strong>Q{i + 1}:</strong> {q.question} — <span style={{ color: selectedAnswers[i] === q.answer ? 'green' : 'red' }}>
                      {selectedAnswers[i] === q.answer ? 'Correct' : 'Incorrect'} (Your Answer: {selectedAnswers[i]})
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

export default BleedingInPregnancy;
