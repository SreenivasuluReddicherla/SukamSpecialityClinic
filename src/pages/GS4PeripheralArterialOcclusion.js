import React, { useState } from 'react';
import './RP1InfertilityInsights.css';

const quizData = [
  {
    question: "Peripheral Arterial Occlusion is most commonly caused by:",
    options: ["Bacterial infection", "Atherosclerosis", "Venous thrombosis", "Arthritis"],
    answer: "Atherosclerosis"
  },
  {
    question: "Which of the following is NOT a risk factor for PAO?",
    options: ["Smoking", "Diabetes", "Hypothyroidism", "High cholesterol"],
    answer: "Hypothyroidism"
  },
  {
    question: "What does claudication refer to?",
    options: ["Leg pain at rest", "Leg pain while walking", "Swelling of the ankle", "Redness of the skin"],
    answer: "Leg pain while walking"
  },
  {
    question: "Which test compares arm and leg blood pressures?",
    options: ["ECG", "ABI", "Chest X-ray", "ESR"],
    answer: "ABI"
  },
  {
    question: "What is a critical sign of acute arterial occlusion?",
    options: ["Slow weight gain", "6 P's symptoms", "Mild fever", "Nail thickening"],
    answer: "6 P's symptoms"
  },
  {
    question: "Which medicine helps prevent clot formation?",
    options: ["Ibuprofen", "Clopidogrel", "Paracetamol", "Vitamin C"],
    answer: "Clopidogrel"
  },
  {
    question: "Which of these is a cholesterol-lowering drug?",
    options: ["Amlodipine", "Metformin", "Atorvastatin", "Furosemide"],
    answer: "Atorvastatin"
  },
  {
    question: "Which lifestyle change is MOST crucial for a smoker with PAO?",
    options: ["Reduce sugar intake", "Quit smoking", "Avoid dairy", "Take vitamin supplements"],
    answer: "Quit smoking"
  },
  {
    question: "Blackened toes are an indication of:",
    options: ["Fungal infection", "Gangrene", "Warts", "Cellulitis"],
    answer: "Gangrene"
  },
  {
    question: "An emergency form of PAO due to a sudden clot is called:",
    options: ["Chronic ischemia", "Acute arterial occlusion", "Acute DVT", "Vasculitis"],
    answer: "Acute arterial occlusion"
  },
  {
    question: "The “P” in 6 Ps that means 'lack of sensation' is:",
    options: ["Pallor", "Pain", "Paresthesia", "Pulse"],
    answer: "Paresthesia"
  },
  {
    question: "Which procedure involves inserting a balloon in the artery?",
    options: ["Amputation", "Bypass surgery", "Angioplasty", "Doppler scan"],
    answer: "Angioplasty"
  },
  {
    question: "Cilostazol is used to:",
    options: ["Treat infection", "Relieve leg swelling", "Improve walking distance", "Heal ulcers"],
    answer: "Improve walking distance"
  },
  {
    question: "Which organ’s disease is most likely linked to PAO?",
    options: ["Liver", "Heart", "Brain", "Pancreas"],
    answer: "Heart"
  },
  {
    question: "Peripheral arterial occlusion can be worsened by:",
    options: ["Cold exposure", "Green vegetables", "Hydration", "Light exercise"],
    answer: "Cold exposure"
  },
  {
    question: "Which of the following is a red flag symptom?",
    options: ["Foot cramping after jogging", "Rest pain in the foot", "Mild foot dryness", "Toe nail changes"],
    answer: "Rest pain in the foot"
  },
  {
    question: "Which investigation shows real-time blood flow?",
    options: ["CT scan", "ECG", "Doppler ultrasound", "HbA1c"],
    answer: "Doppler ultrasound"
  },
  {
    question: "An ABI <0.9 typically indicates:",
    options: ["Normal circulation", "Mild anemia", "Peripheral artery disease", "Varicose veins"],
    answer: "Peripheral artery disease"
  },
  {
    question: "Which of the following is NOT used to manage PAO?",
    options: ["Blood thinners", "Statins", "Beta blockers", "Corticosteroids"],
    answer: "Corticosteroids"
  },
  {
    question: "Which group of people should inspect their feet daily?",
    options: ["Healthy athletes", "Children", "Diabetic patients", "People with dandruff"],
    answer: "Diabetic patients"
  }
];


const PeripheralArterialOcclusion = () => {
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
      <h1>🟠 Peripheral Arterial Occlusion</h1>
      <p className="lead">“A heart attack for your legs.”</p>

      <section className="info-section">
  <h3>📌 Introduction</h3>
  <p>
    Peripheral Arterial Occlusion refers to a blockage of blood flow through the arteries that supply the limbs—most commonly the legs. The condition is typically due to atherosclerosis, where cholesterol-rich plaques narrow or block arteries. It can present gradually or suddenly and, if not managed, may lead to tissue damage, ulcers, gangrene, or even amputation.
    It’s a major complication in diabetics, smokers, and patients with uncontrolled cholesterol or hypertension.
  </p>

  <h3>🩺 Causes and Risk Factors</h3>
  <h4>📌 Common Causes:</h4>
  <ul>
    <li>Atherosclerosis (most common): Plaque buildup</li>
    <li>Embolism: A clot from the heart (e.g., in atrial fibrillation)</li>
    <li>Thrombosis: Clot formation directly in the peripheral artery</li>
    <li>Trauma: Crush injury or vascular damage</li>
    <li>Arteritis: Inflammatory vascular diseases like Buerger’s disease</li>
  </ul>

  <h4>⚠️ Major Risk Factors:</h4>
  <ul>
    <li>Diabetes mellitus</li>
    <li>Smoking</li>
    <li>Hypertension</li>
    <li>High cholesterol (LDL)</li>
    <li>Age &gt;50</li>
    <li>Sedentary lifestyle</li>
    <li>History of stroke or heart disease</li>
  </ul>

  <h3>🧠 Pathophysiology in Simple Terms</h3>
  <p>
    When an artery gets narrowed or blocked, the tissue beyond that point gets less oxygen and nutrients. In early stages, this causes pain while walking (claudication). In severe cases, even resting pain and tissue death (gangrene) occur.
  </p>

  <h3>🦵 Symptoms of Peripheral Arterial Occlusion</h3>
  <table>
    <thead>
      <tr><th>Stage</th><th>Symptoms</th></tr>
    </thead>
    <tbody>
      <tr><td>Mild</td><td>Leg cramps during walking (claudication)</td></tr>
      <tr><td>Moderate</td><td>Pain at rest, especially at night</td></tr>
      <tr><td>Severe</td><td>Non-healing wounds, blackened toes, ulcers</td></tr>
      <tr><td>Acute PAO</td><td>Sudden leg pain, coldness, numbness, paralysis (a vascular emergency)</td></tr>
    </tbody>
  </table>

  <h4>🧾 The “6 Ps” of Acute Arterial Occlusion:</h4>
  <ul>
    <li>Pain</li>
    <li>Pallor (pale skin)</li>
    <li>Pulselessness</li>
    <li>Paresthesia (tingling/numbness)</li>
    <li>Paralysis</li>
    <li>Poikilothermia (cold limb)</li>
  </ul>

  <h3>📸 Image Suggestions</h3>
  <ul>
    <li>Infographic: “How Arteries Get Blocked” – plaque buildup, narrowed lumen.</li>
    <li>Clinical photos: Foot ulcers due to poor circulation, black toes (gangrene), Doppler ultrasound image.</li>
  </ul>

  <h3>🧪 Diagnostic Tests</h3>
  <ul>
    <li>Ankle-Brachial Index (ABI): Compares blood pressure in legs vs. arms</li>
    <li>Doppler Ultrasound: Shows blood flow</li>
    <li>CT Angiography / MR Angiography: Imaging of blocked vessels</li>
    <li>Peripheral Angiogram: Gold standard to locate and assess severity</li>
  </ul>

  <h3>💊 Treatment Options</h3>
  <ol>
    <li>
      <strong>Lifestyle Modifications</strong><br />
      • Smoking cessation<br />
      • Blood sugar and BP control<br />
      • Regular exercise (supervised walking programs)
    </li>
    <li>
      <strong>Medications</strong><br />
      • Antiplatelets: Aspirin, Clopidogrel<br />
      • Statins: For cholesterol control<br />
      • Cilostazol: Improves walking distance by increasing blood flow<br />
      • Pain control and infection management in ulcers
    </li>
    <li>
      <strong>Revascularization Procedures</strong><br />
      • Angioplasty with stenting: Balloon to open vessel<br />
      • Bypass graft surgery: Reroute blood flow around the blockage<br />
      • Thrombolysis: Clot-busting drugs for acute occlusion
    </li>
    <li>
      <strong>Amputation</strong><br />
      • Last resort in non-salvageable limbs with gangrene or deep infection
    </li>
  </ol>

  <h3>❗ Complications If Left Untreated</h3>
  <ul>
    <li>Critical Limb Ischemia</li>
    <li>Skin Ulcers</li>
    <li>Gangrene</li>
    <li>Infection → Sepsis</li>
    <li>Amputation</li>
    <li>Loss of mobility</li>
    <li>Depression and reduced quality of life</li>
  </ul>

  <h3>✅ Prevention Tips</h3>
  <ul>
    <li>Control blood sugar, blood pressure, and cholesterol</li>
    <li>Exercise daily: 30–45 minutes of walking helps form collateral vessels</li>
    <li>Regular foot checks (especially for diabetics)</li>
    <li>Avoid walking barefoot</li>
    <li>Stop smoking immediately</li>
    <li>Maintain proper hydration and circulation</li>
  </ul>

  <h3>🧠 Myths vs. Facts</h3>
  <table>
    <thead>
      <tr><th>Myth</th><th>Fact</th></tr>
    </thead>
    <tbody>
      <tr>
        <td>Pain while walking is just due to aging.</td>
        <td>It can indicate arterial blockage (claudication).</td>
      </tr>
      <tr>
        <td>If the skin is warm, blood flow must be okay.</td>
        <td>Skin can feel normal until circulation is critically reduced.</td>
      </tr>
      <tr>
        <td>Only surgery helps in PAO.</td>
        <td>Many cases improve with lifestyle changes and medicines.</td>
      </tr>
      <tr>
        <td>You can ignore numb toes.</td>
        <td>Numbness may be a sign of nerve or blood supply damage.</td>
      </tr>
    </tbody>
  </table>
</section>


      <section className="quiz-section">
        <h2>🧠 Peripheral Arterial Occlusion Quiz — Test Your Knowledge!</h2>

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

export default PeripheralArterialOcclusion;
