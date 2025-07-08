
import React, { useState } from 'react';
import './RP1InfertilityInsights.css';

const quizData = [
  {
    question: "Most common type of breast cancer:",
    options: ["Lobular carcinoma", "Papillary carcinoma", "Ductal carcinoma", "Paget's disease"],
    answer: "Ductal carcinoma"
  },
  {
    question: "First imaging tool in a 45-year-old woman with a lump:",
    options: ["Ultrasound", "PET scan", "Mammogram", "MRI"],
    answer: "Mammogram"
  },
  {
    question: "Which receptor is tested for targeted therapy?",
    options: ["TSH", "HER2", "FSH", "hCG"],
    answer: "HER2"
  },
  {
    question: "Breast-conserving surgery requires:",
    options: ["No further treatment", "Postoperative radiotherapy", "Mastectomy", "Chemotherapy always"],
    answer: "Postoperative radiotherapy"
  },
  {
    question: "Red, swollen breast with skin thickening suggests:",
    options: ["Paget's disease", "Fibroadenoma", "Inflammatory breast cancer", "DCIS"],
    answer: "Inflammatory breast cancer"
  },
  {
    question: "Tamoxifen is used in:",
    options: ["HER2-positive tumors", "ER/PR-positive tumors", "Triple negative tumors", "Inflammatory cancer only"],
    answer: "ER/PR-positive tumors"
  },
  {
    question: "Triple negative cancer lacks:",
    options: ["Estrogen receptor", "Progesterone receptor", "HER2", "All of the above"],
    answer: "All of the above"
  },
  {
    question: "Which is a warning sign of breast cancer?",
    options: ["Lump with pain", "Nipple discharge (bloody)", "Smooth symmetrical breast", "Milky discharge in lactation"],
    answer: "Nipple discharge (bloody)"
  },
  {
    question: "Node evaluation during surgery is done via:",
    options: ["MRI", "FNAC", "Sentinel lymph node biopsy", "Endoscopy"],
    answer: "Sentinel lymph node biopsy"
  },
  {
    question: "DCIS is:",
    options: ["Invasive", "Pre-cancerous and non-invasive", "Metastatic", "Inflammatory"],
    answer: "Pre-cancerous and non-invasive"
  },
  {
    question: "Which gene is most linked to hereditary breast cancer?",
    options: ["BRCA1", "APC", "p53", "CFTR"],
    answer: "BRCA1"
  },
  {
    question: "Paget’s disease of the nipple presents with:",
    options: ["Red, eczematous nipple", "Lump in axilla", "Fever", "Painful ulcer"],
    answer: "Red, eczematous nipple"
  },
  {
    question: "High-grade tumors require:",
    options: ["Surveillance", "Surgery only", "Multimodal treatment", "No treatment"],
    answer: "Multimodal treatment"
  },
  {
    question: "Hormonal therapy in postmenopausal women includes:",
    options: ["Tamoxifen", "Aromatase inhibitors", "HER2 blockers", "Testosterone"],
    answer: "Aromatase inhibitors"
  },
  {
    question: "Mammograms should begin from age:",
    options: ["25", "35", "40", "50"],
    answer: "40"
  },
  {
    question: "Breast cancer in men:",
    options: ["Does not occur", "Occurs only in young males", "Is rare but possible", "Is always fatal"],
    answer: "Is rare but possible"
  },
  {
    question: "HER2-targeted drug:",
    options: ["Trastuzumab", "Doxorubicin", "Letrozole", "Methotrexate"],
    answer: "Trastuzumab"
  },
  {
    question: "Postoperative recurrence prevention includes:",
    options: ["Chemotherapy", "Radiotherapy", "Hormonal therapy", "All of the above"],
    answer: "All of the above"
  },
  {
    question: "Breast self-exam should be done:",
    options: ["Monthly", "Yearly", "Only by doctors", "Before age 15"],
    answer: "Monthly"
  },
  {
    question: "Orange peel skin appearance is due to:",
    options: [
      "Edema from lymphatic obstruction",
      "Dry skin",
      "Fungal infection",
      "Injury"
    ],
    answer: "Edema from lymphatic obstruction"
  }
];

const Breast = () => {
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
      <h1>Carcinoma Breast (Breast Cancer) </h1>
      <p className="lead">“Early detection is the best protection.”</p>

      <section className="info-section">
  <h3>🎗️ Understanding Breast Cancer</h3>
  <p>
    Breast cancer is a malignant tumor arising from breast tissue, most often in the ducts (ductal carcinoma) or lobules (lobular carcinoma). It’s the most common cancer in women worldwide and, while it can be life-threatening, early detection makes it highly curable. Men can also develop breast cancer, though this is rare.
  </p>

  <h3>🔬 Types of Breast Cancer</h3>
  <table>
    <thead>
      <tr>
        <th>Type</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Invasive Ductal Carcinoma (IDC)</td>
        <td>Starts in ducts and invades nearby tissue; ~70–80% of cases</td>
      </tr>
      <tr>
        <td>Invasive Lobular Carcinoma (ILC)</td>
        <td>Arises from lobules; often bilateral</td>
      </tr>
      <tr>
        <td>Ductal Carcinoma In Situ (DCIS)</td>
        <td>Non-invasive; confined to ducts; precursor to invasive cancer</td>
      </tr>
      <tr>
        <td>Triple Negative Breast Cancer (TNBC)</td>
        <td>Lacks ER, PR, HER2 receptors; aggressive</td>
      </tr>
      <tr>
        <td>HER2-Positive</td>
        <td>Overexpresses HER2 protein; responsive to targeted therapy</td>
      </tr>
      <tr>
        <td>Inflammatory Breast Cancer</td>
        <td>Aggressive; presents with red, swollen breast</td>
      </tr>
      <tr>
        <td>Paget’s Disease</td>
        <td>Rare; affects nipple-areolar complex</td>
      </tr>
    </tbody>
  </table>

  <h3>⚠️ Risk Factors</h3>
  <table>
    <thead>
      <tr>
        <th>Risk Factor</th>
        <th>Explanation</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Age &gt;40 years</td>
        <td>Risk increases with age</td>
      </tr>
      <tr>
        <td>Family History</td>
        <td>Especially BRCA1/BRCA2 mutations</td>
      </tr>
      <tr>
        <td>Early Menarche & Late Menopause</td>
        <td>Longer lifetime estrogen exposure</td>
      </tr>
      <tr>
        <td>Nulliparity / Late First Pregnancy</td>
        <td>Extended hormonal risk window</td>
      </tr>
      <tr>
        <td>Obesity & Sedentary Lifestyle</td>
        <td>Postmenopausal estrogen production</td>
      </tr>
      <tr>
        <td>Alcohol & Smoking</td>
        <td>Direct mutagenic impact</td>
      </tr>
      <tr>
        <td>Chest Radiation</td>
        <td>Especially in young females</td>
      </tr>
      <tr>
        <td>Hormone Replacement Therapy</td>
        <td>Combined estrogen-progesterone therapy</td>
      </tr>
    </tbody>
  </table>

  <h3>🚩 Warning Signs</h3>
  <ul>
    <li>Painless lump in breast or armpit</li>
    <li>Change in breast shape or size</li>
    <li>Bloody or abnormal nipple discharge</li>
    <li>Nipple inversion or retraction</li>
    <li>Skin changes: dimpling, puckering, “orange peel”</li>
    <li>Redness, swelling, persistent pain</li>
  </ul>

  <h3>🩺 Clinical Evaluation at Sukam</h3>
  <ul>
    <li>History and personalized risk assessment</li>
    <li>Thorough breast exam—standing and supine</li>
    <li>Axillary and supraclavicular node palpation</li>
    <li>Exam of opposite breast and regional nodes</li>
  </ul>

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
        <td>Mammography</td>
        <td>Gold standard screening for women &gt;40</td>
      </tr>
      <tr>
        <td>Breast Ultrasound</td>
        <td>Preferred in younger/dense breasts; characterizes lumps</td>
      </tr>
      <tr>
        <td>FNAC / Core Needle Biopsy</td>
        <td>Confirms malignancy and subtype</td>
      </tr>
      <tr>
        <td>Breast MRI</td>
        <td>Assess multifocal/multicentric disease in dense tissue</td>
      </tr>
      <tr>
        <td>Hormone Receptor Testing</td>
        <td>Determines ER/PR/HER2 status for therapy planning</td>
      </tr>
      <tr>
        <td>Staging Imaging</td>
        <td>PET-CT, CT chest/abdomen, bone scan if metastasis suspected</td>
      </tr>
    </tbody>
  </table>

  <h3>📊 TNM Staging Overview</h3>
  <table>
    <thead>
      <tr>
        <th>T (Tumor Size)</th>
        <th>N (Nodes)</th>
        <th>M (Metastasis)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>T1: &lt;2 cm<br/>T2: 2–5 cm<br/>T3: &gt;5 cm</td>
        <td>N0: No nodes<br/>N1: 1–3 nodes<br/>N2/N3: Multiple nodes</td>
        <td>M0: No distant spread<br/>M1: Metastasis present</td>
      </tr>
    </tbody>
  </table>

  <h3>🛠️ Treatment Options</h3>
  <h4>1. Surgery</h4>
  <table>
    <thead>
      <tr>
        <th>Type</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Breast-Conserving Surgery (Lumpectomy)</td>
        <td>Tumor removal + radiation</td>
      </tr>
      <tr>
        <td>Modified Radical Mastectomy (MRM)</td>
        <td>Breast + axillary node removal</td>
      </tr>
      <tr>
        <td>Sentinel Lymph Node Biopsy (SLNB)</td>
        <td>Minimally invasive nodal staging</td>
      </tr>
      <tr>
        <td>Oncoplastic Reconstruction</td>
        <td>Breast reshaping after lumpectomy</td>
      </tr>
    </tbody>
  </table>

  <h4>2. Radiation Therapy</h4>
  <p>Post-lumpectomy in all breast-conserving cases; post-mastectomy if high risk (T3, node-positive).</p>

  <h4>3. Chemotherapy</h4>
  <ul>
    <li>Adjuvant (after surgery) to lower recurrence</li>
    <li>Neoadjuvant (before surgery) to shrink large tumors</li>
    <li>Common regimens: Cyclophosphamide, Doxorubicin, Taxanes</li>
  </ul>

  <h4>4. Hormonal Therapy</h4>
  <p>For ER/PR-positive tumors: Tamoxifen or Aromatase Inhibitors.</p>

  <h4>5. Targeted Therapy</h4>
  <p>For HER2-positive tumors: Trastuzumab (Herceptin), Pertuzumab.</p>

  <h3>‍♀️ Survivorship & Follow-Up</h3>
  <table>
    <thead>
      <tr>
        <th>Year</th>
        <th>Follow-Up Frequency</th>
      </tr>
    </thead>
    <tbody>
      <tr><td>First 2 years</td><td>Every 3–6 months</td></tr>
      <tr><td>Years 3–5</td><td>Every 6 months</td></tr>
      <tr><td>After 5 years</td><td>Annually</td></tr>
      <tr><td>Imaging</td><td>Annual mammogram for breast-conserving surgery</td></tr>
    </tbody>
  </table>

  <h3>📈 Prognosis</h3>
  <table>
    <thead>
      <tr>
        <th>Factor</th>
        <th>Impact</th>
      </tr>
    </thead>
    <tbody>
      <tr><td>Early-stage (I, II)</td><td>5-year survival &gt;90%</td></tr>
      <tr><td>Node-negative</td><td>Better outcomes</td></tr>
      <tr><td>TNBC or HER2+</td><td>Aggressive but treatable with targeted therapy</td></tr>
      <tr><td>Stage IV (metastatic)</td><td>Chronic, controllable disease</td></tr>
    </tbody>
  </table>

  <h3>🌱 Prevention and Awareness</h3>
  <ul>
    <li>Monthly breast self-exam (BSE)</li>
    <li>Annual clinical breast exam (CBE) after age 40</li>
    <li>Mammogram every 1–2 years for women &gt;40</li>
    <li>Maintain healthy weight and active lifestyle</li>
    <li>Avoid smoking and limit alcohol</li>
    <li>Genetic counseling for BRCA if family history</li>
  </ul>

  <h3>🏥 Sukam Speciality Clinic Offers</h3>
  <ul>
    <li>Oncoplastic and reconstructive breast surgery</li>
    <li>Genetic counseling and BRCA testing</li>
    <li>Coordinated care with oncology, radiation, psychology</li>
    <li>Fertility preservation consultation for younger patients</li>
    <li>Personalized survivorship and follow-up care plans</li>
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

export default Breast;
