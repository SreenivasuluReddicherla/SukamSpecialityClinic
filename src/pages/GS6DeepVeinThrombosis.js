import React, { useState } from 'react';
import './RP1InfertilityInsights.css';

const quizData = [
  {
    question: "DVT commonly affects which part of the body?",
    options: ["Arm", "Leg", "Neck", "Abdomen"],
    answer: "Leg"
  },
  {
    question: "Which test is commonly used to detect DVT?",
    options: ["MRI", "Doppler ultrasound", "ECG", "Endoscopy"],
    answer: "Doppler ultrasound"
  },
  {
    question: "What is a serious complication of DVT?",
    options: ["Asthma", "Pulmonary embolism", "Liver failure", "Heartburn"],
    answer: "Pulmonary embolism"
  },
  {
    question: "Which of the following is NOT a DVT symptom?",
    options: ["Leg swelling", "Chest pain", "Calf pain", "Warmth in limb"],
    answer: "Chest pain"
  },
  {
    question: "What does Virchow’s Triad include?",
    options: [
      "Obesity, diabetes, anemia",
      "Blood stasis, vessel injury, hypercoagulability",
      "Fever, swelling, vomiting",
      "Cancer, bleeding, infection"
    ],
    answer: "Blood stasis, vessel injury, hypercoagulability"
  },
  {
    question: "Best method to prevent DVT during long flights?",
    options: [
      "Take a sleeping pill",
      "Wear tight clothes",
      "Walk or stretch legs regularly",
      "Avoid water"
    ],
    answer: "Walk or stretch legs regularly"
  },
  {
    question: "DVT is more common in:",
    options: [
      "Active athletes",
      "Long-distance travelers",
      "School children",
      "Swimmers"
    ],
    answer: "Long-distance travelers"
  },
  {
    question: "A high D-dimer level suggests:",
    options: ["Heart attack", "Clot formation", "Liver disease", "Low calcium"],
    answer: "Clot formation"
  },
  {
    question: "Which medication prevents clot formation?",
    options: ["Antibiotics", "Anticoagulants", "Antacids", "Steroids"],
    answer: "Anticoagulants"
  },
  {
    question: "DVT often starts in which type of vein?",
    options: ["Superficial vein", "Deep vein", "Artery", "Capillary"],
    answer: "Deep vein"
  },
  {
    question: "Compression stockings should be worn:",
    options: [
      "Only while sleeping",
      "To reduce blood pressure",
      "To reduce swelling and clot risk",
      "Only in winter"
    ],
    answer: "To reduce swelling and clot risk"
  },
  {
    question: "Sudden breathlessness in a DVT patient suggests:",
    options: ["Anemia", "Pulmonary embolism", "Flu", "Kidney infection"],
    answer: "Pulmonary embolism"
  },
  {
    question: "Which is a direct oral anticoagulant (DOAC)?",
    options: ["Paracetamol", "Rivaroxaban", "Amoxicillin", "Omeprazole"],
    answer: "Rivaroxaban"
  },
  {
    question: "Thrombophilia refers to:",
    options: [
      "Blood deficiency",
      "High blood clotting tendency",
      "Iron overload",
      "Platelet destruction"
    ],
    answer: "High blood clotting tendency"
  },
  {
    question: "Post-thrombotic syndrome is a:",
    options: [
      "Type of DVT medicine",
      "Long-term complication",
      "Clot removal technique",
      "Diet plan"
    ],
    answer: "Long-term complication"
  },
  {
    question: "Which of these increases DVT risk?",
    options: ["Vitamin D", "Swimming", "Hormonal pills", "High protein intake"],
    answer: "Hormonal pills"
  },
  {
    question: "DVT is more likely in the leg because of:",
    options: [
      "High pressure and gravity",
      "More oxygen",
      "Better circulation",
      "Low calcium"
    ],
    answer: "High pressure and gravity"
  },
  {
    question: "In DVT, which of the following is contraindicated?",
    options: [
      "Early mobilization",
      "Massage of the swollen leg",
      "Anticoagulants",
      "Hydration"
    ],
    answer: "Massage of the swollen leg"
  },
  {
    question: "The main role of anticoagulants in DVT is to:",
    options: [
      "Break the clot",
      "Dilate the vein",
      "Prevent clot growth",
      "Treat infection"
    ],
    answer: "Prevent clot growth"
  },
  {
    question: "Which scan is used to detect clot in lungs?",
    options: [
      "CT Pulmonary Angiography",
      "Ultrasound",
      "MRI Brain",
      "X-ray abdomen"
    ],
    answer: "CT Pulmonary Angiography"
  }
];

const DeepVeinThrombosis = () => {
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
      <h1>🟠 Deep Vein Thrombosis (DVT)</h1>
      <p className="lead">“A quiet clot that can cause a storm.”</p>

      <section className="info-section">
  <h3>📌 Introduction</h3>
  <p>
    Deep Vein Thrombosis (DVT) occurs when a blood clot forms in a deep vein, usually in the leg or pelvis. This clot can block blood flow and cause pain and swelling. The biggest danger is that the clot may travel to the lungs, causing a life-threatening condition called pulmonary embolism (PE).
  </p>

  <h3>🧬 Why Does DVT Happen?</h3>
  <p>
    Blood clots form when flow is sluggish, the vessel wall is damaged, or the blood becomes sticky or hypercoagulable—known together as <strong>Virchow’s Triad</strong>.
  </p>

  <h4>🔍 Risk Factors</h4>
  <ul>
    <li>Prolonged immobility (bed rest, long flights, post-surgery)</li>
    <li>Major surgery (especially orthopaedic or cancer-related)</li>
    <li>Pregnancy and postpartum period</li>
    <li>Obesity</li>
    <li>Smoking</li>
    <li>Hormone therapy (e.g., oral contraceptives)</li>
    <li>Inherited clotting disorders (e.g., Factor V Leiden)</li>
    <li>Cancer and chemotherapy</li>
    <li>Previous DVT or family history</li>
  </ul>

  <h3>🩻 Symptoms of DVT</h3>
  <table>
    <thead>
      <tr>
        <th>Symptom</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Swelling</td>
        <td>Usually in one leg (calf or thigh)</td>
      </tr>
      <tr>
        <td>Pain</td>
        <td>Often begins in the calf and feels like cramping</td>
      </tr>
      <tr>
        <td>Red or discolored skin</td>
        <td>Sometimes with warmth</td>
      </tr>
      <tr>
        <td>Tenderness</td>
        <td>Especially along the veins</td>
      </tr>
      <tr>
        <td>Heaviness or tightness</td>
        <td>In the affected limb</td>
      </tr>
    </tbody>
  </table>

  <p><strong>🛑 Note:</strong> DVT may sometimes be asymptomatic until a pulmonary embolism occurs.</p>

  <h3>⚠️ Signs of Pulmonary Embolism (PE)</h3>
  <ul>
    <li>Sudden shortness of breath</li>
    <li>Chest pain (worsens with breathing)</li>
    <li>Rapid heart rate</li>
    <li>Coughing up blood</li>
    <li>Lightheadedness or collapse</li>
  </ul>
  <p><strong>These require immediate emergency care.</strong></p>

  <h3>🖼️ Visual Suggestions</h3>
  <ul>
    <li>Diagram: Normal vs. clotted vein (DVT) in the leg</li>
    <li>Infographic: Virchow’s Triad</li>
    <li>Photo: Calf swelling and skin color change in DVT</li>
  </ul>

  <h3>🧪 Diagnosis</h3>
  <ul>
    <li>D-Dimer Test: Blood test to detect clot degradation</li>
    <li>Venous Doppler Ultrasound: Most common imaging</li>
    <li>CT Pulmonary Angiography: If PE is suspected</li>
    <li>Venography (rare): Dye test to map vein clot</li>
    <li>Coagulation profile & thrombophilia screen (if young or recurrent cases)</li>
  </ul>

  <h3>💊 Treatment</h3>
  <ol>
    <li>
      <strong>Anticoagulants (Blood Thinners):</strong>
      <ul>
        <li>Heparin: Fast-acting (injection or IV)</li>
        <li>Warfarin: Long-term oral anticoagulant</li>
        <li>DOACs (e.g., Apixaban, Rivaroxaban): Safer and easier to use</li>
      </ul>
    </li>
    <li><strong>Compression Stockings:</strong> Prevent swelling and post-thrombotic syndrome</li>
    <li><strong>Thrombolysis or Thrombectomy:</strong> For large or limb-threatening clots</li>
    <li><strong>IVC Filter:</strong> If anticoagulants are contraindicated—prevents clots from reaching lungs</li>
  </ol>

  <h4>⏳ Duration of Treatment</h4>
  <table>
    <thead>
      <tr>
        <th>Condition</th>
        <th>Treatment Length</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>First-time DVT</td>
        <td>3–6 months</td>
      </tr>
      <tr>
        <td>Recurrent DVT</td>
        <td>Long-term/lifetime anticoagulation</td>
      </tr>
      <tr>
        <td>DVT with cancer</td>
        <td>At least 6 months or until cancer is controlled</td>
      </tr>
    </tbody>
  </table>

  <h3>❗ Complications if Left Untreated</h3>
  <ul>
    <li>Pulmonary embolism</li>
    <li>Post-thrombotic syndrome: Long-term leg pain, swelling, and skin damage</li>
    <li>Chronic venous insufficiency</li>
    <li>Permanent vein damage</li>
  </ul>

  <h3>✅ Prevention Tips</h3>
  <ul>
    <li>Move legs every hour during long travel</li>
    <li>Stay hydrated</li>
    <li>Avoid prolonged immobility</li>
    <li>Use compression stockings post-surgery or during travel</li>
    <li>Take blood thinners as advised after surgery or hospitalization</li>
    <li>Regular walking and calf exercises</li>
  </ul>

  <h3>🧠 Myths vs. Facts</h3>
  <table>
    <thead>
      <tr>
        <th>Myth</th>
        <th>Fact</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>DVT affects only old people.</td>
        <td>It can affect any age, especially after surgery, pregnancy, or travel.</td>
      </tr>
      <tr>
        <td>DVT always causes pain.</td>
        <td>It can be silent and still cause a deadly pulmonary embolism.</td>
      </tr>
      <tr>
        <td>Once treated, it won’t return.</td>
        <td>Recurrence is possible without risk management.</td>
      </tr>
      <tr>
        <td>Blood thinners dissolve the clot.</td>
        <td>They prevent growth and allow the body to naturally dissolve it.</td>
      </tr>
    </tbody>
  </table>
</section>


      <section className="quiz-section">
        <h2>🧠 Deep Vein Thrombosis Quiz — Test Your Knowledge!</h2>

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

export default DeepVeinThrombosis;
