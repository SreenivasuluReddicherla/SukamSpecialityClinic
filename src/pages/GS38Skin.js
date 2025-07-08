
import React, { useState } from 'react';
import './RP1InfertilityInsights.css';

const quizData = [
  {
    question: "Most common type of skin cancer:",
    options: ["Melanoma", "Squamous Cell Carcinoma", "Basal Cell Carcinoma", "Lymphoma"],
    answer: "Basal Cell Carcinoma"
  },
  {
    question: "Which is the most aggressive skin cancer?",
    options: ["Melanoma", "BCC", "SCC", "Verruca"],
    answer: "Melanoma"
  },
  {
    question: "UV exposure is a major cause of:",
    options: ["Skin cancer", "Heart disease", "Diabetes", "Thyroid cancer"],
    answer: "Skin cancer"
  },
  {
    question: "\"ABCDE\" rule is used for detecting:",
    options: ["Psoriasis", "Melanoma", "Vitiligo", "Acne"],
    answer: "Melanoma"
  },
  {
    question: "The ‘E’ in ABCDE stands for:",
    options: ["Edema", "Elevation", "Evolving", "Elasticity"],
    answer: "Evolving"
  },
  {
    question: "A common feature of BCC:",
    options: ["Pigmented papule", "Non-healing ulcer with rolled borders", "Pustule", "Wart-like lesion"],
    answer: "Non-healing ulcer with rolled borders"
  },
  {
    question: "Which skin cancer spreads most rapidly?",
    options: ["SCC", "Melanoma", "BCC", "Keratosis"],
    answer: "Melanoma"
  },
  {
    question: "A punch biopsy is done to:",
    options: ["Remove a mole", "Confirm cancer diagnosis", "Treat acne", "Measure skin elasticity"],
    answer: "Confirm cancer diagnosis"
  },
  {
    question: "Mohs surgery is most useful in:",
    options: ["Oral cancer", "Basal cell carcinoma on the face", "Eczema", "Fungal infections"],
    answer: "Basal cell carcinoma on the face"
  },
  {
    question: "Which topical drug is used in skin carcinoma?",
    options: ["Acyclovir", "Imiquimod", "Clotrimazole", "Retinoids"],
    answer: "Imiquimod"
  },
  {
    question: "Which of the following is NOT a risk factor for skin carcinoma?",
    options: ["Chronic sun exposure", "Genetic conditions", "High cholesterol", "Immunosuppression"],
    answer: "High cholesterol"
  },
  {
    question: "Best prevention method against skin cancer:",
    options: ["Using sunscreen regularly", "Taking antibiotics", "Applying petroleum jelly", "Increasing calcium intake"],
    answer: "Using sunscreen regularly"
  },
  {
    question: "Pigmented, asymmetric mole with irregular border may indicate:",
    options: ["Melanoma", "BCC", "Seborrheic keratosis", "Lentigo"],
    answer: "Melanoma"
  },
  {
    question: "Melanomas typically arise from:",
    options: ["Sebaceous glands", "Melanocytes", "Hair follicles", "Capillaries"],
    answer: "Melanocytes"
  },
  {
    question: "BCC most commonly occurs on the:",
    options: ["Palms", "Soles", "Face and neck", "Abdomen"],
    answer: "Face and neck"
  },
  {
    question: "Checkpoint inhibitors are used in:",
    options: ["Eczema", "SCC", "Melanoma", "Psoriasis"],
    answer: "Melanoma"
  },
  {
    question: "Immunocompromised individuals are more prone to:",
    options: ["Allergies", "Skin cancers", "Obesity", "Hypertension"],
    answer: "Skin cancers"
  },
  {
    question: "Cryotherapy in skin carcinoma is used to:",
    options: ["Excise cancer", "Freeze superficial cancer cells", "Heat lesions", "Laser skin"],
    answer: "Freeze superficial cancer cells"
  },
  {
    question: "Which occupation has higher skin cancer risk?",
    options: ["Software engineer", "Farmer", "Accountant", "Chef"],
    answer: "Farmer"
  },
  {
    question: "Self-examination for new or changing skin lesions should be done:",
    options: ["Once a year", "Once in 5 years", "Monthly", "Only if symptoms arise"],
    answer: "Monthly"
  }
];

const Skin = () => {
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
      <h1>Carcinoma of the Skin (Skin Cancer)</h1>
      <p className="lead">“When the Body’s Outer Shield Turns Vulnerable — Early Detection Saves Lives”</p>

      <section className="info-section">
  <h3>🩺 What Is Skin Carcinoma?</h3>
  <p>
    Skin carcinoma refers to malignant growths arising from skin cells, most often linked to prolonged ultraviolet (UV) exposure. It’s among the most common cancers worldwide, encompassing both non-melanoma types (basal and squamous cell) and melanoma, which is more aggressive.
  </p>

  <h3>🔬 The Main Types of Skin Carcinoma</h3>
  <table>
    <thead>
      <tr>
        <th>Type</th>
        <th>Origin</th>
        <th>Common Features</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Basal Cell Carcinoma (BCC)</td>
        <td>Basal cells of epidermis</td>
        <td>Slow-growing, rarely metastasizes</td>
      </tr>
      <tr>
        <td>Squamous Cell Carcinoma (SCC)</td>
        <td>Squamous cells of epidermis</td>
        <td>May invade and spread if untreated</td>
      </tr>
      <tr>
        <td>Melanoma</td>
        <td>Melanocytes (pigment cells)</td>
        <td>Aggressive, high metastatic risk</td>
      </tr>
    </tbody>
  </table>

  <h3>☀️ Risk Factors</h3>
  <ul>
    <li>Chronic sun/UV exposure</li>
    <li>Fair skin, light eyes/hair</li>
    <li>Personal or family history of skin cancer</li>
    <li>Tanning bed use</li>
    <li>Chronic wounds, burns, scars</li>
    <li>Chemical exposure (arsenic, coal tar)</li>
    <li>Immunosuppression (HIV, transplant)</li>
    <li>Genetic conditions (e.g., Xeroderma Pigmentosum)</li>
  </ul>

  <h3>🚩 Warning Signs & Symptoms</h3>
  <ul>
    <li>New or changing moles or growths</li>
    <li>Non-healing ulcer &gt;3 weeks</li>
    <li>Bleeding, crusting, or oozing lesions</li>
    <li>Itching, pain, or tenderness in a mole</li>
    <li>Irregular borders or color changes</li>
    <li>Rapidly enlarging bump or patch</li>
  </ul>

  <h3>🔍 ABCDE Rule for Melanoma</h3>
  <table>
    <thead>
      <tr>
        <th>Feature</th>
        <th>Meaning</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>A – Asymmetry</td>
        <td>One half unlike the other</td>
      </tr>
      <tr>
        <td>B – Border</td>
        <td>Irregular, ragged, blurred edges</td>
      </tr>
      <tr>
        <td>C – Color</td>
        <td>Varied shades: black, brown, red</td>
      </tr>
      <tr>
        <td>D – Diameter</td>
        <td>&gt;6 mm (pencil eraser size)</td>
      </tr>
      <tr>
        <td>E – Evolving</td>
        <td>Changes in size, shape, symptoms</td>
      </tr>
    </tbody>
  </table>

  <h3>🩺 Diagnosis</h3>
  <ol>
    <li>
      <strong>Clinical Examination:</strong> Dermatoscopic analysis and total-body skin check
    </li>
    <li>
      <strong>Skin Biopsy:</strong> Punch or excisional biopsy for histological confirmation
    </li>
    <li>
      <strong>Imaging:</strong> CT, MRI, or PET-CT for advanced lesions and nodal/metastatic assessment
    </li>
    <li>
      <strong>Sentinel Lymph Node Biopsy:</strong> Especially for melanoma staging
    </li>
  </ol>

  <h3>🧬 Pathology: Key Differentiators</h3>
  <table>
    <thead>
      <tr>
        <th>Type</th>
        <th>Features</th>
        <th>Metastatic Spread</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>BCC</td>
        <td>Pearly nodule, rolled edges, telangiectasia</td>
        <td>Rare</td>
      </tr>
      <tr>
        <td>SCC</td>
        <td>Scaly, ulcerated lesion, crusty</td>
        <td>Possible</td>
      </tr>
      <tr>
        <td>Melanoma</td>
        <td>Pigmented, fast-changing mole</td>
        <td>High</td>
      </tr>
    </tbody>
  </table>

  <h3>🏥 Treatment Options</h3>
  <ul>
    <li>
      <strong>Surgical Excision:</strong> Wide local excision with safe margins; Mohs micrographic surgery for tissue preservation
    </li>
    <li>
      <strong>Cryotherapy / Electrocautery:</strong> For small, superficial BCC/SCC
    </li>
    <li>
      <strong>Topical Treatments:</strong> Imiquimod or 5-Fluorouracil for in situ or superficial lesions
    </li>
    <li>
      <strong>Radiotherapy:</strong> Adjuvant or for unresectable tumors
    </li>
    <li>
      <strong>Chemotherapy:</strong> Rarely for BCC/SCC; used in advanced cases
    </li>
    <li>
      <strong>Immunotherapy / Targeted Therapy:</strong> Checkpoint inhibitors (nivolumab, pembrolizumab) in melanoma; BRAF inhibitors for BRAF-positive cases
    </li>
  </ul>

  <h3>🩸 Follow-Up & Surveillance</h3>
  <ul>
    <li>Full-body skin exam every 6–12 months</li>
    <li>Monitor for recurrence, new lesions, lymphadenopathy</li>
    <li>Sun protection and skin care counseling</li>
    <li>Vitamin D monitoring if sun avoidance is strict</li>
  </ul>

  <h3>🌱 Prevention Strategies</h3>
  <ul>
    <li>Use broad-spectrum SPF 30+ sunscreen daily</li>
    <li>Avoid peak sun hours (10 AM–4 PM)</li>
    <li>Wear protective clothing, hats, sunglasses</li>
    <li>Never use tanning beds</li>
    <li>Perform regular skin self-exams</li>
    <li>Educate children and teens on sun safety</li>
  </ul>

  <h3>🏥 At Sukam Speciality Clinic</h3>
  <ul>
    <li>Early diagnosis via dermatoscopy and biopsy</li>
    <li>Expert dermatologic surgery with precise closure</li>
    <li>Collaboration with oncology and radiotherapy teams</li>
    <li>Immunotherapy coordination for melanoma patients</li>
    <li>Compassionate, individualized care plans</li>
  </ul>
</section>

      <section className="quiz-section">
        <h2>🧠 Quick Quiz — Perianal Abscess</h2>

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
                      {selectedAnswers[idx] === q.answer ? 'Correct' : `Incorrect (Your Answer: ${selectedAnswers[idx]})`}
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

export default Skin;
