
import React, { useState } from 'react';
import './RP1InfertilityInsights.css';

const quizData = [
  {
    question: "Soft tissue sarcoma arises from:",
    options: ["Epithelial cells", "Blood vessels", "Connective tissues", "Liver cells"],
    answer: "Connective tissues"
  },
  {
    question: "Most common location for STS:",
    options: ["Upper limb", "Abdomen", "Lower extremity", "Brain"],
    answer: "Lower extremity"
  },
  {
    question: "Best imaging for local STS evaluation:",
    options: ["X-ray", "CT chest", "MRI with contrast", "PET scan"],
    answer: "MRI with contrast"
  },
  {
    question: "Histological confirmation of STS is done by:",
    options: ["Fine-needle aspiration", "Core needle biopsy", "Ultrasound", "MRI"],
    answer: "Core needle biopsy"
  },
  {
    question: "Liposarcoma originates from:",
    options: ["Bone", "Fat", "Nerves", "Skin"],
    answer: "Fat"
  },
  {
    question: "Most common metastasis site for STS:",
    options: ["Brain", "Lungs", "Liver", "Bones"],
    answer: "Lungs"
  },
  {
    question: "Radiotherapy in STS is used to:",
    options: ["Cure diabetes", "Reduce lung metastasis", "Control local recurrence", "Increase bleeding"],
    answer: "Control local recurrence"
  },
  {
    question: "Rhabdomyosarcoma is more common in:",
    options: ["Elderly", "Teenagers", "Children", "Pregnant women"],
    answer: "Children"
  },
  {
    question: "The key to STS cure is:",
    options: ["Chemotherapy alone", "Radiotherapy", "Wide local surgical excision", "Steroids"],
    answer: "Wide local surgical excision"
  },
  {
    question: "Grade of STS refers to:",
    options: ["Tumor size", "Tumor shape", "Aggressiveness", "Metastasis"],
    answer: "Aggressiveness"
  },
  {
    question: "Do not perform excision without:",
    options: ["Anesthesia", "Blood tests", "Biopsy", "IV fluids"],
    answer: "Biopsy"
  },
  {
    question: "Which genetic disorder increases STS risk?",
    options: ["Down syndrome", "Neurofibromatosis type 1", "Marfan syndrome", "Cystic fibrosis"],
    answer: "Neurofibromatosis type 1"
  },
  {
    question: "Painless, growing lump in the thigh may be:",
    options: ["Lipoma", "Sarcoma", "Sebaceous cyst", "Varicose vein"],
    answer: "Sarcoma"
  },
  {
    question: "Ifosfamide is used for:",
    options: ["Tuberculosis", "Leukemia", "Sarcoma chemotherapy", "Anemia"],
    answer: "Sarcoma chemotherapy"
  },
  {
    question: "Lung CT is done in STS because:",
    options: ["Heart disease", "Infection", "Detect pulmonary metastasis", "Check oxygen levels"],
    answer: "Detect pulmonary metastasis"
  },
  {
    question: "Retroperitoneal sarcomas often present with:",
    options: ["Constipation", "Visible mass", "Vague abdominal fullness", "Painful urination"],
    answer: "Vague abdominal fullness"
  },
  {
    question: "Wide surgical margins help to:",
    options: ["Avoid chemotherapy", "Reduce recurrence", "Increase scar size", "Improve cosmetics"],
    answer: "Reduce recurrence"
  },
  {
    question: "Which subtype is blood vessel–origin sarcoma?",
    options: ["Angiosarcoma", "Liposarcoma", "Fibrosarcoma", "Rhabdomyosarcoma"],
    answer: "Angiosarcoma"
  },
  {
    question: "Most important predictor of outcome:",
    options: ["Patient age", "Tumor grade and size", "Gender", "Site"],
    answer: "Tumor grade and size"
  },
  {
    question: "PET-CT in sarcoma is helpful for:",
    options: ["Local pain", "Mapping disease spread", "Muscle tears", "Diagnosing diabetes"],
    answer: "Mapping disease spread"
  }
];

const SoftTissueSarcom = () => {
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
      <h1>Soft Tissue Sarcoma (STS) </h1>
      <p className="lead">“A Rare Cancer, but Early Awareness Can Change the Outcome”</p>

      <section className="info-section">
  <h3>🧠 What Is Soft Tissue Sarcoma?</h3>
  <p>
    Soft Tissue Sarcoma (STS) is a group of rare malignant tumors originating from mesenchymal 
    (connective) tissues—muscle, fat, blood vessels, nerves, and fibrous tissue. They can 
    occur anywhere but most commonly affect the limbs, trunk, retroperitoneum, and head & neck.
  </p>

  <h3>🔬 Types of Soft Tissue Sarcoma</h3>
  <table>
    <thead>
      <tr>
        <th>Type</th>
        <th>Origin</th>
        <th>Notes</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Liposarcoma</td>
        <td>Fat tissue</td>
        <td>Common in thigh, retroperitoneum</td>
      </tr>
      <tr>
        <td>Leiomyosarcoma</td>
        <td>Smooth muscle</td>
        <td>Often in uterus, GI tract</td>
      </tr>
      <tr>
        <td>Rhabdomyosarcoma</td>
        <td>Skeletal muscle</td>
        <td>Common in children</td>
      </tr>
      <tr>
        <td>Angiosarcoma</td>
        <td>Blood/lymph vessels</td>
        <td>Rare, highly aggressive</td>
      </tr>
      <tr>
        <td>Synovial Sarcoma</td>
        <td>Periarticular tissue</td>
        <td>Often affects young adults</td>
      </tr>
      <tr>
        <td>Fibrosarcoma</td>
        <td>Fibrous tissue</td>
        <td>Can mimic benign masses</td>
      </tr>
      <tr>
        <td>MPNST</td>
        <td>Peripheral nerve sheath</td>
        <td>Associated with NF1 syndrome</td>
      </tr>
    </tbody>
  </table>

  <h3>⚠️ Risk Factors</h3>
  <ul>
    <li>Genetic syndromes (Li-Fraumeni, Neurofibromatosis type 1)</li>
    <li>Prior radiation exposure (post-radiation sarcoma)</li>
    <li>Chronic lymphedema (Stewart-Treves syndrome)</li>
    <li>Chemical exposures (vinyl chloride, arsenic)</li>
    <li>Age & gender patterns: some subtypes in young males</li>
  </ul>

  <h3>🚩 Signs & Symptoms</h3>
  <ul>
    <li>Painless, enlarging lump or swelling</li>
    <li>Gradually increasing size over weeks/months</li>
    <li>Deep-seated mass beneath muscle</li>
    <li>Pain or neurologic symptoms if pressing on nerves</li>
    <li>Advanced signs: weight loss, fatigue, bleeding</li>
  </ul>

  <h3>📍 Common Locations</h3>
  <table>
    <thead>
      <tr>
        <th>Region</th>
        <th>Frequency</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Lower extremity (thigh)</td>
        <td>~40%</td>
      </tr>
      <tr>
        <td>Upper extremity</td>
        <td>~15%</td>
      </tr>
      <tr>
        <td>Trunk / chest wall</td>
        <td>10–15%</td>
      </tr>
      <tr>
        <td>Retroperitoneum</td>
        <td>15–20%</td>
      </tr>
      <tr>
        <td>Head & neck</td>
        <td>&lt;10%</td>
      </tr>
    </tbody>
  </table>

  <h3>🩺 Diagnosis</h3>
  <h4>1. Imaging Studies</h4>
  <table>
    <thead>
      <tr>
        <th>Modality</th>
        <th>Purpose</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>MRI with contrast</td>
        <td>Optimal for local tumor definition</td>
      </tr>
      <tr>
        <td>CT scan</td>
        <td>Chest metastasis screening, retroperitoneal lesions</td>
      </tr>
      <tr>
        <td>PET-CT</td>
        <td>Mapping advanced/metastatic disease</td>
      </tr>
    </tbody>
  </table>

  <h4>2. Biopsy (Mandatory)</h4>
  <ul>
    <li>Core needle biopsy (preferred)</li>
    <li>Incisional biopsy if core inconclusive</li>
    <li>Avoid excisional biopsy unless lesion &lt;3 cm and superficial</li>
  </ul>

  <h4>3. Histopathology & Immunohistochemistry</h4>
  <p>Confirms histologic subtype and tumor grade.</p>

  <h3>📈 Staging – AJCC TNM System</h3>
  <table>
    <thead>
      <tr>
        <th>Component</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>T (Tumor)</td>
        <td>Size and depth of invasion</td>
      </tr>
      <tr>
        <td>N (Nodes)</td>
        <td>Regional lymph node spread (rare)</td>
      </tr>
      <tr>
        <td>M (Metastasis)</td>
        <td>Distant spread—lung most common</td>
      </tr>
      <tr>
        <td>Grade (G1–G3)</td>
        <td>Predicts tumor aggressiveness</td>
      </tr>
    </tbody>
  </table>

  <h3>🛠️ Treatment Strategy</h3>
  <h4>✂️ 1. Surgery – Curative Cornerstone</h4>
  <ul>
    <li>Wide local excision with negative margins</li>
    <li>Limb-sparing operations when feasible</li>
    <li>Amputation only for neurovascular involvement or recurrent disease</li>
    <li>Multiorgan resection for retroperitoneal sarcomas</li>
  </ul>

  <h4>☢️ 2. Radiotherapy</h4>
  <ul>
    <li>Preoperative (tumor shrinkage) or postoperative</li>
    <li>Reduces local recurrence—especially high-grade/deep tumors</li>
    <li>Caution in retroperitoneum due to adjacent organs</li>
  </ul>

  <h4>💊 3. Chemotherapy</h4>
  <ul>
    <li>High-grade, metastatic, or chemosensitive subtypes</li>
    <li>Agents: Doxorubicin, Ifosfamide, Gemcitabine, Docetaxel</li>
    <li>Neoadjuvant or adjuvant in select cases</li>
    <li>Targeted therapies (e.g., Pazopanib, Imatinib) for specific mutations</li>
  </ul>

  <h3>🚶‍♂️ Follow-Up and Surveillance</h3>
  <table>
    <thead>
      <tr>
        <th>Period</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>First 2–3 years</td>
        <td>MRI/CT every 3–6 months</td>
      </tr>
      <tr>
        <td>3–5 years</td>
        <td>Imaging every 6–12 months</td>
      </tr>
      <tr>
        <td>After 5 years</td>
        <td>Annual clinical visits and chest imaging</td>
      </tr>
    </tbody>
  </table>

  <h3>⚖️ Prognosis</h3>
  <table>
    <thead>
      <tr>
        <th>Factor</th>
        <th>Impact</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Tumor size &lt;5 cm</td>
        <td>Better outcome</td>
      </tr>
      <tr>
        <td>Low-grade histology</td>
        <td>&gt;90% 5-year survival</td>
      </tr>
      <tr>
        <td>High-grade, deep, large tumors</td>
        <td>Increased recurrence and metastasis</td>
      </tr>
      <tr>
        <td>Complete surgical margins</td>
        <td>Key predictor of cure</td>
      </tr>
    </tbody>
  </table>

  <h3>🌱 Preventive Considerations</h3>
  <ul>
    <li>Prompt evaluation of any growing painless mass</li>
    <li>Avoid open excision before imaging and biopsy</li>
    <li>Genetic counseling in inherited syndromes</li>
    <li>Limit unnecessary radiation exposure</li>
  </ul>

  <h3>🏥 Sukam’s Commitment to STS Care</h3>
  <ul>
    <li>Multidisciplinary sarcoma board review</li>
    <li>Access to limb-sparing reconstructive techniques</li>
    <li>Integrated oncology, radiation, and targeted drug pathways</li>
    <li>Pre-op counseling with physiotherapy and emotional support</li>
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

export default SoftTissueSarcom;
