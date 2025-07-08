
import React, { useState } from 'react';
import './RP1InfertilityInsights.css';

const quizData = [
  {
    question: "Most common thyroid cancer type:",
    options: ["Anaplastic", "Medullary", "Papillary", "Follicular"],
    answer: "Papillary"
  },
  {
    question: "Cancer arising from C-cells of the thyroid:",
    options: ["Papillary", "Medullary", "Follicular", "Hurthle cell"],
    answer: "Medullary"
  },
  {
    question: "First-line investigation for a thyroid nodule:",
    options: ["CT scan", "Thyroid scan", "Ultrasound", "PET scan"],
    answer: "Ultrasound"
  },
  {
    question: "Thyroid cancers are mostly:",
    options: [
      "Painful and hot",
      "Non-functioning cold nodules",
      "Hyperthyroid",
      "Cystic always"
    ],
    answer: "Non-functioning cold nodules"
  },
  {
    question: "RAI is used in:",
    options: ["Anaplastic cancer", "Medullary cancer", "Papillary cancer", "Laryngeal cancer"],
    answer: "Papillary cancer"
  },
  {
    question: "Which is the most aggressive thyroid cancer?",
    options: ["Papillary", "Follicular", "Anaplastic", "Hurthle cell"],
    answer: "Anaplastic"
  },
  {
    question: "Hoarseness in thyroid cancer may indicate:",
    options: ["Infection", "Nerve involvement", "Vocal abuse", "Laryngitis"],
    answer: "Nerve involvement"
  },
  {
    question: "RET mutation is associated with:",
    options: ["Papillary", "Anaplastic", "Medullary", "Follicular"],
    answer: "Medullary"
  },
  {
    question: "Gold standard for diagnosing thyroid cancer:",
    options: ["MRI", "Biopsy", "FNAC", "Scintigraphy"],
    answer: "FNAC"
  },
  {
    question: "Bethesda category VI suggests:",
    options: ["Non-diagnostic", "Atypia", "Malignancy", "Benign"],
    answer: "Malignancy"
  },
  {
    question: "Most common metastatic site of thyroid cancer:",
    options: ["Brain", "Bones", "Lung", "Liver"],
    answer: "Lung"
  },
  {
    question: "Which tumor marker is useful post-thyroidectomy?",
    options: ["T3", "Calcitonin", "Thyroglobulin", "Cortisol"],
    answer: "Thyroglobulin"
  },
  {
    question: "Targeted therapy for RAI-refractory thyroid cancer:",
    options: ["Cisplatin", "Sorafenib", "Methotrexate", "Etoposide"],
    answer: "Sorafenib"
  },
  {
    question: "Voice change post-surgery is due to injury to:",
    options: ["Phrenic nerve", "Vagus nerve", "Recurrent laryngeal nerve", "Sympathetic chain"],
    answer: "Recurrent laryngeal nerve"
  },
  {
    question: "In medullary carcinoma, which hormone may be elevated?",
    options: ["Thyroglobulin", "TSH", "Calcitonin", "Cortisol"],
    answer: "Calcitonin"
  },
  {
    question: "Hurthle cell carcinoma is a variant of:",
    options: ["Papillary", "Medullary", "Follicular", "Anaplastic"],
    answer: "Follicular"
  },
  {
    question: "Total thyroidectomy is needed for tumors:",
    options: ["<0.5 cm", ">1 cm", "Always", "Only in benign cases"],
    answer: ">1 cm"
  },
  {
    question: "Which condition is NOT a risk factor?",
    options: ["Radiation exposure", "Family history", "High iodine diet", "RET mutation"],
    answer: "High iodine diet"
  },
  {
    question: "Cold nodule on scan with suspicious FNAC:",
    options: ["Monitor", "Ignore", "Surgical removal", "Start steroids"],
    answer: "Surgical removal"
  },
  {
    question: "Levothyroxine is used post-surgery to:",
    options: ["Treat diabetes", "Suppress TSH", "Improve calcium", "Prevent infection"],
    answer: "Suppress TSH"
  }
];

const Thyroid = () => {
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
      <h1>Carcinoma of the Thyroid (Thyroid Cancer)</h1>
      <p className="lead">“A Cancer That Whispers—But Early Detection Speaks Volumes”</p>

      <section className="info-section">
  <h3>🩺 What Is Thyroid Cancer?</h3>
  <p>
    Thyroid cancer is a malignant tumor of the thyroid gland—a butterfly-shaped organ in the front of the neck that produces hormones regulating metabolism. Although most thyroid cancers grow slowly and have excellent outcomes, aggressive subtypes require prompt, specialized management.
  </p>

  <h3>🔬 Types of Thyroid Carcinoma</h3>
  <table>
    <thead>
      <tr>
        <th>Type</th>
        <th>Description</th>
        <th>Prognosis</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Papillary carcinoma</td>
        <td>Most common (~80%), slow-growing, often spreads to lymph nodes</td>
        <td>Excellent</td>
      </tr>
      <tr>
        <td>Follicular carcinoma</td>
        <td>10–15%, may invade blood vessels and metastasize to lungs/bones</td>
        <td>Good</td>
      </tr>
      <tr>
        <td>Medullary carcinoma</td>
        <td>From parafollicular C-cells; may occur in familial syndromes</td>
        <td>Moderate</td>
      </tr>
      <tr>
        <td>Anaplastic carcinoma</td>
        <td>Rare, highly aggressive, seen in older patients</td>
        <td>Poor</td>
      </tr>
      <tr>
        <td>Hurthle cell carcinoma</td>
        <td>Variant of follicular; more aggressive</td>
        <td>Moderate</td>
      </tr>
    </tbody>
  </table>

  <h3>👥 Who Is at Risk?</h3>
  <ul>
    <li>Females more than males (3:1 ratio)</li>
    <li>Age 30–60 years</li>
    <li>Family history of thyroid cancer or MEN syndromes</li>
    <li>Head and neck radiation exposure</li>
    <li>Iodine deficiency (linked to follicular type)</li>
    <li>Genetic mutations (RET, BRAF, RAS)</li>
  </ul>

  <h3>⚠️ Symptoms and Red Flags</h3>
  <ul>
    <li>Painless, enlarging thyroid nodule</li>
    <li>Hoarseness or voice changes</li>
    <li>Difficulty swallowing (dysphagia)</li>
    <li>Neck swelling or pressure sensation</li>
    <li>Persistent cough not from infection</li>
    <li>Enlarged cervical lymph nodes</li>
    <li>Flushing or diarrhea in medullary carcinoma</li>
  </ul>

  <h3>🩺 Clinical Examination</h3>
  <ol>
    <li>Palpation of thyroid: mobility, consistency, fixation</li>
    <li>Observation of nodule movement with swallowing</li>
    <li>Cervical lymph node assessment</li>
    <li>Laryngoscopy if hoarseness suggests vocal cord palsy</li>
  </ol>

  <h3>🔍 Investigations</h3>
  <table>
    <thead>
      <tr>
        <th>Test</th>
        <th>Purpose</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Thyroid function tests (T3, T4, TSH)</td>
        <td>Generally normal in malignancy</td>
      </tr>
      <tr>
        <td>Neck ultrasound</td>
        <td>Characterizes nodules: solid vs cystic, calcifications, vascularity</td>
      </tr>
      <tr>
        <td>FNAC (Fine Needle Aspiration Cytology)</td>
        <td>Gold standard for preoperative diagnosis</td>
      </tr>
      <tr>
        <td>Radioisotope thyroid scan</td>
        <td>Distinguishes cold (suspicious) from hot nodules</td>
      </tr>
      <tr>
        <td>CT/MRI neck</td>
        <td>Evaluates large tumors and extrathyroidal extension</td>
      </tr>
      <tr>
        <td>Calcitonin & CEA levels</td>
        <td>Markers for medullary carcinoma</td>
      </tr>
      <tr>
        <td>Genetic testing</td>
        <td>RET mutation screening in familial medullary cases</td>
      </tr>
    </tbody>
  </table>

  <h3>📋 Bethesda Classification for FNAC Results</h3>
  <table>
    <thead>
      <tr>
        <th>Category</th>
        <th>Risk of Malignancy</th>
        <th>Recommended Action</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>I – Non-diagnostic</td>
        <td>&lt;5%</td>
        <td>Repeat FNAC</td>
      </tr>
      <tr>
        <td>II – Benign</td>
        <td>&lt;3%</td>
        <td>Clinical observation</td>
      </tr>
      <tr>
        <td>III – Atypia of undetermined significance</td>
        <td>5–15%</td>
        <td>Repeat or consider surgery</td>
      </tr>
      <tr>
        <td>IV – Follicular neoplasm</td>
        <td>15–30%</td>
        <td>Lobectomy</td>
      </tr>
      <tr>
        <td>V – Suspicious for malignancy</td>
        <td>60–75%</td>
        <td>Surgical excision</td>
      </tr>
      <tr>
        <td>VI – Malignant</td>
        <td>&gt;97%</td>
        <td>Total thyroidectomy</td>
      </tr>
    </tbody>
  </table>

  <h3>🛠️ Treatment Strategy</h3>
  <ol>
    <li>
      <strong>Surgery</strong>
      <ul>
        <li>Hemithyroidectomy for low-risk small tumors (&lt;1 cm)</li>
        <li>Total thyroidectomy for tumors &gt;1 cm, bilateral or aggressive types</li>
        <li>Neck dissection if lymph node metastasis is present</li>
        <li>Completion thyroidectomy when malignancy is found post-lobectomy</li>
      </ul>
    </li>
    <li>
      <strong>Radioactive Iodine (RAI) Therapy</strong>
      <ul>
        <li>Used for papillary and follicular cancers to ablate residual tissue</li>
        <li>Not effective for medullary or anaplastic carcinoma</li>
      </ul>
    </li>
    <li>
      <strong>Thyroid Hormone Suppression</strong>
      <ul>
        <li>High-dose levothyroxine to suppress TSH and reduce tumor stimulation</li>
      </ul>
    </li>
    <li>
      <strong>Targeted Therapy / Chemotherapy</strong>
      <ul>
        <li>Tyrosine kinase inhibitors (sorafenib, lenvatinib) for RAI-refractory cases</li>
        <li>Medullary carcinoma agents: vandetanib, cabozantinib</li>
      </ul>
    </li>
    <li>
      <strong>External Beam Radiotherapy</strong>
      <ul>
        <li>Considered for unresectable or anaplastic tumors</li>
      </ul>
    </li>
  </ol>

  <h3>📅 Follow-Up Protocol</h3>
  <table>
    <thead>
      <tr>
        <th>Interval</th>
        <th>Monitoring</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Every 3–6 months (1st year)</td>
        <td>TSH, thyroglobulin (Tg), anti-Tg antibodies, neck ultrasound</td>
      </tr>
      <tr>
        <td>Annually (after 1st year)</td>
        <td>Tg levels and ultrasound as indicated</td>
      </tr>
      <tr>
        <td>RAI-refractory / Tg+/scan–</td>
        <td>PET-CT for occult disease</td>
      </tr>
    </tbody>
  </table>

  <h3>⚖️ Prognosis</h3>
  <table>
    <thead>
      <tr>
        <th>Type</th>
        <th>10-Year Survival</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Papillary</td>
        <td>&gt;90%</td>
      </tr>
      <tr>
        <td>Follicular</td>
        <td>85–90%</td>
      </tr>
      <tr>
        <td>Medullary</td>
        <td>~75%</td>
      </tr>
      <tr>
        <td>Anaplastic</td>
        <td>&lt;10%</td>
      </tr>
    </tbody>
  </table>

  <h3>🌱 Prevention and Early Detection</h3>
  <ul>
    <li>Regular neck examination during annual check-ups</li>
    <li>Ultrasound evaluation of detected nodules</li>
    <li>Avoid unnecessary head/neck radiation</li>
    <li>Genetic counseling and testing for familial syndromes</li>
    <li>Be alert for hoarseness or new neck swelling</li>
  </ul>

  <h3>🏥 At Sukam Speciality Clinic</h3>
  <ul>
    <li>Ultrasound-guided FNAC for accurate diagnosis</li>
    <li>Expert thyroid surgeons with nerve-monitoring capability</li>
    <li>On-site RAI therapy and endocrinology collaboration</li>
    <li>Long-term follow-up and hormonal support</li>
    <li>Emotional counseling and survivorship care plans</li>
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

export default Thyroid;
