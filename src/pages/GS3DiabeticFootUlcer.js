import React, { useState } from 'react';
import './RP1InfertilityInsights.css';

const quizData = [
  {
    question: "What is a common cause of diabetic foot ulcers?",
    options: ["Allergies", "Neuropathy", "Obesity", "Cold weather"],
    answer: "Neuropathy"
  },
  {
    question: "Which of the following is a warning sign of a foot ulcer?",
    options: ["Itchy rash", "Red, hot swollen foot with a wound", "Tingling only", "Cold and pale skin"],
    answer: "Red, hot swollen foot with a wound"
  },
  {
    question: "Diabetic neuropathy affects:",
    options: ["Eyes", "Blood vessels", "Nerves", "Lungs"],
    answer: "Nerves"
  },
  {
    question: "Wagner Grade 3 ulcer involves:",
    options: ["Superficial skin only", "Bone or abscess", "Full gangrene", "Dry skin"],
    answer: "Bone or abscess"
  },
  {
    question: "Offloading means:",
    options: ["Avoiding sugar", "Removing dressings", "Reducing pressure on the wound", "Cutting nails"],
    answer: "Reducing pressure on the wound"
  },
  {
    question: "Which of these increases risk of infection in diabetes?",
    options: ["Low hemoglobin", "High insulin", "Poor glycemic control", "High calcium"],
    answer: "Poor glycemic control"
  },
  {
    question: "Best footwear for diabetic patients:",
    options: ["Tight sandals", "Open chappals", "Custom-molded shoes", "Barefoot walking"],
    answer: "Custom-molded shoes"
  },
  {
    question: "Daily foot care should include:",
    options: ["Checking feet visually", "Soaking in hot water", "Using kerosene for infections", "Walking barefoot"],
    answer: "Checking feet visually"
  },
  {
    question: "Peripheral arterial disease results in:",
    options: ["Good circulation", "Pain-free healing", "Poor blood flow to feet", "High blood pressure only"],
    answer: "Poor blood flow to feet"
  },
  {
    question: "The best early step in wound healing:",
    options: ["Use turmeric powder", "Keep dry at all times", "Remove dead tissue (debridement)", "Apply toothpaste"],
    answer: "Remove dead tissue (debridement)"
  },
  {
    question: "Signs of bone infection include:",
    options: ["Yellow nails", "Loss of hair", "Severe swelling and deep pain", "Skin dryness"],
    answer: "Severe swelling and deep pain"
  },
  {
    question: "High HbA1c indicates:",
    options: ["Poor long-term sugar control", "Anemia", "Infection", "Liver damage"],
    answer: "Poor long-term sugar control"
  },
  {
    question: "Which of the following is NOT a complication of DFU?",
    options: ["Gangrene", "Osteomyelitis", "Kidney failure", "Amputation"],
    answer: "Kidney failure"
  },
  {
    question: "Which imaging is used for bone infection?",
    options: ["ECG", "X-ray", "Ultrasound only", "Endoscopy"],
    answer: "X-ray"
  },
  {
    question: "Which of these may mask foot injury in diabetics?",
    options: ["Hypertension", "Neuropathy", "Asthma", "Thyroid disease"],
    answer: "Neuropathy"
  },
  {
    question: "Foot ulcers in diabetics are most commonly located on:",
    options: ["Fingers", "Toes and soles", "Heels only", "Ankles only"],
    answer: "Toes and soles"
  },
  {
    question: "A foul-smelling foot wound with black tissue is likely:",
    options: ["Scabies", "Gangrene", "Candidiasis", "Psoriasis"],
    answer: "Gangrene"
  },
  {
    question: "Which lab test is routinely monitored in diabetic ulcer care?",
    options: ["WBC count", "Liver function", "HbA1c", "Calcium"],
    answer: "HbA1c"
  },
  {
    question: "Total Contact Casting is used for:",
    options: ["Diabetic coma", "Reducing wound pressure", "Measuring blood pressure", "Improving eyesight"],
    answer: "Reducing wound pressure"
  },
  {
    question: "Most important aspect in preventing ulcer recurrence:",
    options: ["Creams", "Daily exercise", "Ongoing foot care and sugar control", "Painkillers"],
    answer: "Ongoing foot care and sugar control"
  }
];


const DiabeticFootUlcer = () => {
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
      <h1>🦶 Diabetic Foot Ulcer</h1>
      <p className="lead">“A small sore with high stakes for diabetics.”</p>

      <section className="info-section">
  <h3>📌 Introduction</h3>
  <p>
    A Diabetic Foot Ulcer is an open sore or wound that occurs in approximately 15% of people with diabetes, most commonly on the bottom of the foot. It forms due to a combination of nerve damage (neuropathy), poor circulation, uncontrolled blood sugar, and repeated trauma or unnoticed injuries.
    DFUs can lead to severe complications like infections, gangrene, or even amputation if not detected and treated early.
  </p>

  <h3>🦶 Why Diabetics Get Foot Ulcers</h3>
  <ol>
    <li>
      <strong>Neuropathy (Nerve Damage)</strong><br />
      • Dulls pain, heat, and pressure sensations.<br />
      • Patients don’t feel injuries, blisters, or cuts.
    </li>
    <li>
      <strong>Peripheral Arterial Disease (PAD)</strong><br />
      • Narrowed blood vessels reduce blood flow.<br />
      • Healing becomes slow or impossible.
    </li>
    <li>
      <strong>High Blood Sugar</strong><br />
      • Weakens immunity.<br />
      • Delays healing and increases infection risk.
    </li>
    <li>
      <strong>Foot Deformities & Pressure Points</strong><br />
      • Changes in foot shape cause abnormal pressure areas that break down skin.
    </li>
  </ol>

  <h3>🖼️ Visual Suggestion</h3>
  <p><strong>Title:</strong> “How a Foot Ulcer Develops”</p>
  <p>• Series of images showing a healthy foot → neuropathic foot → blister/trauma → infected ulcer.</p>

  <h3>⚠️ Signs to Watch</h3>
  <ul>
    <li>Open wound that does not heal in 1–2 weeks</li>
    <li>Redness, swelling, warmth</li>
    <li>Drainage or foul smell from foot</li>
    <li>Black tissue (gangrene) around ulcer</li>
    <li>Pain (if nerves are not completely damaged)</li>
    <li>Fever or chills (sign of spreading infection)</li>
  </ul>

  <h3>📊 Grading of Ulcers (Wagner Classification)</h3>
  <table>
    <thead>
      <tr><th>Grade</th><th>Description</th></tr>
    </thead>
    <tbody>
      <tr><td>0</td><td>Intact skin at risk</td></tr>
      <tr><td>1</td><td>Superficial ulcer</td></tr>
      <tr><td>2</td><td>Deep ulcer to tendon or joint</td></tr>
      <tr><td>3</td><td>Ulcer with abscess or osteomyelitis</td></tr>
      <tr><td>4</td><td>Partial gangrene of forefoot</td></tr>
      <tr><td>5</td><td>Full foot gangrene (usually requires amputation)</td></tr>
    </tbody>
  </table>

  <h3>🔬 Diagnosis and Investigations</h3>
  <ul>
    <li>Wound culture: To identify infecting organisms.</li>
    <li>X-ray/MRI: To detect bone infection (osteomyelitis).</li>
    <li>Doppler ultrasound: To assess blood flow.</li>
    <li>HbA1c: For long-term sugar control.</li>
    <li>Ankle-Brachial Index (ABI): Checks arterial disease.</li>
  </ul>

  <h3>🩺 Treatment Strategies</h3>
  <ol>
    <li>
      <strong>Blood Sugar Control</strong><br />
      • Strict glycemic control is essential.
    </li>
    <li>
      <strong>Wound Care</strong><br />
      • Debridement: Removing dead tissue.<br />
      • Dressings: Moist wound healing is ideal.<br />
      • Topical agents: Silver dressings, iodine, growth factors.
    </li>
    <li>
      <strong>Infection Control</strong><br />
      • Antibiotics: Oral or IV depending on severity.<br />
      • Hospitalization: For severe cases with systemic signs.
    </li>
    <li>
      <strong>Offloading</strong><br />
      • Special footwear, total contact casts, or orthopedic devices to reduce pressure.
    </li>
    <li>
      <strong>Surgery</strong><br />
      • For abscess drainage, correction of deformity, or revascularization.<br />
      • Amputation: If limb-threatening infection or gangrene.
    </li>
  </ol>

  <h3>❗ Prevention is Key</h3>
  <table>
    <thead>
      <tr><th>Do’s</th><th>Don’ts</th></tr>
    </thead>
    <tbody>
      <tr>
        <td>Check feet daily</td>
        <td>Walk barefoot</td>
      </tr>
      <tr>
        <td>Wear fitted, cushioned shoes</td>
        <td>Ignore cuts or blisters</td>
      </tr>
      <tr>
        <td>Maintain sugar levels</td>
        <td>Use sharp blades for corn/callus removal</td>
      </tr>
      <tr>
        <td>Visit a podiatrist regularly</td>
        <td>Delay treatment for even small wounds</td>
      </tr>
    </tbody>
  </table>

  <h3>🦶 Daily Foot Care Tips for Diabetics</h3>
  <ul>
    <li>Wash feet in lukewarm water, dry well (especially between toes).</li>
    <li>Apply moisturizing cream (not between toes).</li>
    <li>Cut nails straight across.</li>
    <li>Inspect with a mirror or ask a family member.</li>
    <li>Never use heating pads or hot water bottles.</li>
  </ul>

  <h3>❌ Myths vs. Facts</h3>
  <table>
    <thead>
      <tr><th>Myth</th><th>Fact</th></tr>
    </thead>
    <tbody>
      <tr>
        <td>Foot ulcers are harmless.</td>
        <td>They can lead to amputation if untreated.</td>
      </tr>
      <tr>
        <td>Only people with poor hygiene get DFUs.</td>
        <td>It’s more about blood flow, sugar, and nerve health.</td>
      </tr>
      <tr>
        <td>A healed ulcer means it’s over.</td>
        <td>High risk of recurrence—ongoing care is needed.</td>
      </tr>
    </tbody>
  </table>
</section>


      <section className="quiz-section">
        <h2>🧠 Diabetic Foot Ulcer Quiz — Test Your Knowledge!</h2>

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

export default DiabeticFootUlcer;
