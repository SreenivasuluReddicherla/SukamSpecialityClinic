
import React, { useState } from 'react';
import './RP1InfertilityInsights.css';

const quizData = [
  {
    question: "Most common type of penile carcinoma is:",
    options: [
      "Basal cell carcinoma",
      "Squamous cell carcinoma",
      "Melanoma",
      "Sarcoma"
    ],
    answer: "Squamous cell carcinoma"
  },
  {
    question: "HPV types most commonly associated with penile cancer:",
    options: ["1 and 2", "16 and 18", "6 and 11", "5 and 8"],
    answer: "16 and 18"
  },
  {
    question: "Phimosis is considered a risk factor because:",
    options: [
      "It protects the glans",
      "It traps smegma and promotes chronic irritation",
      "It prevents urination",
      "It enhances immunity"
    ],
    answer: "It traps smegma and promotes chronic irritation"
  },
  {
    question: "A painless ulcer on the penis that doesn’t heal may indicate:",
    options: ["Syphilis", "Penile carcinoma", "Scabies", "Candidiasis"],
    answer: "Penile carcinoma"
  },
  {
    question: "Gold standard for diagnosis is:",
    options: ["X-ray", "Urine test", "Biopsy", "Blood smear"],
    answer: "Biopsy"
  },
  {
    question: "Imaging best suited to assess local invasion:",
    options: ["MRI", "Chest X-ray", "PET scan", "Colonoscopy"],
    answer: "MRI"
  },
  {
    question: "Lymph nodes commonly involved first:",
    options: ["Cervical", "Inguinal", "Axillary", "Mediastinal"],
    answer: "Inguinal"
  },
  {
    question: "Partial penectomy is done when:",
    options: [
      "The glans is involved but shaft can be preserved",
      "Whole penis must be removed",
      "Tumor is only in urethra",
      "No tumor present"
    ],
    answer: "The glans is involved but shaft can be preserved"
  },
  {
    question: "Which of these is a red flag symptom?",
    options: [
      "Penile itch",
      "Skin dryness",
      "Non-healing, bleeding lesion",
      "Hair fall"
    ],
    answer: "Non-healing, bleeding lesion"
  },
  {
    question: "Circumcision reduces the risk of penile cancer by:",
    options: [
      "Increasing blood flow",
      "Removing foreskin and improving hygiene",
      "Enhancing testosterone",
      "None of the above"
    ],
    answer: "Removing foreskin and improving hygiene"
  },
  {
    question: "HPV vaccination is effective if given:",
    options: [
      "After cancer diagnosis",
      "During surgery",
      "Before sexual exposure",
      "After age 50"
    ],
    answer: "Before sexual exposure"
  },
  {
    question: "Organ-preserving surgery includes:",
    options: [
      "Wide local excision",
      "Total penectomy",
      "Lymph node dissection",
      "Radiotherapy"
    ],
    answer: "Wide local excision"
  },
  {
    question: "A man with chronic balanitis should be:",
    options: [
      "Ignored",
      "Advised on hygiene",
      "Regularly screened for cancer",
      "Given antibiotics only"
    ],
    answer: "Regularly screened for cancer"
  },
  {
    question: "Mohs micrographic surgery is best for:",
    options: [
      "Deeply invasive SCC",
      "Metastatic disease",
      "Superficial, well-defined lesions",
      "Multiple lesions"
    ],
    answer: "Superficial, well-defined lesions"
  },
  {
    question: "First step in a suspicious penile lesion:",
    options: [
      "Wait and watch",
      "Immediate surgery",
      "Biopsy",
      "Apply antifungal cream"
    ],
    answer: "Biopsy"
  },
  {
    question: "Chemotherapy is used in penile cancer for:",
    options: [
      "Early-stage SCC",
      "Advanced or metastatic disease",
      "HPV clearance",
      "Post-surgery wound healing"
    ],
    answer: "Advanced or metastatic disease"
  },
  {
    question: "Groin lymph node dissection is indicated when:",
    options: [
      "Node is palpable or confirmed metastatic",
      "Only penile shaft is involved",
      "No lesion is seen",
      "PSA is high"
    ],
    answer: "Node is palpable or confirmed metastatic"
  },
  {
    question: "Smoking contributes to penile cancer by:",
    options: [
      "Strengthening foreskin",
      "Suppressing immune surveillance",
      "Increasing testosterone",
      "Enhancing blood flow"
    ],
    answer: "Suppressing immune surveillance"
  },
  {
    question: "Penile cancer is most common in men aged:",
    options: ["<20 years", "30–40", "50–70", "80+"],
    answer: "50–70"
  },
  {
    question: "Psychosocial support is essential because:",
    options: [
      "Cosmetic concerns",
      "Sexual health implications",
      "Emotional distress",
      "All of the above"
    ],
    answer: "All of the above"
  }
];

const Penis = () => {
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
      <h1>Carcinoma of the Penis (Penile Cancer)</h1>
      <p className="lead">“Early Diagnosis Saves Function, Confidence, and Life”</p>

      <section className="info-section">
  <h3>🧐 What Is Penile Cancer?</h3>
  <p>
    Penile carcinoma is a rare malignancy of the skin and tissues of the penis, most often  
    arising on the glans, foreskin, or shaft. Over 95% are squamous cell carcinomas (SCC),  
    which can progress from slow-growing nodules to aggressive disease if untreated.  
    It’s more common in regions with variable hygiene and circumcision practices.
  </p>

  <h3>⚠️ Risk Factors</h3>
  <ul>
    <li>Poor genital hygiene → smegma build-up and chronic irritation</li>
    <li>Phimosis → unretractable foreskin</li>
    <li>HPV infection (types 16 &amp; 18)</li>
    <li>Uncircumcised status without good hygiene</li>
    <li>Smoking</li>
    <li>Multiple sexual partners ↑ HPV exposure</li>
    <li>Chronic inflammation (lichen sclerosus, balanitis)</li>
    <li>Immunosuppression (HIV, post-transplant)</li>
  </ul>

  <h3>🚩 Symptoms and Early Signs</h3>
  <ul>
    <li>Lump, ulcer, or growth on glans, foreskin, or shaft</li>
    <li>Persistent redness, itching, or irritation</li>
    <li>Non-healing sore with discharge or crusting</li>
    <li>Foul odor or bleeding from lesion</li>
    <li>Penile or foreskin swelling</li>
    <li>Inguinal (groin) lymph node enlargement</li>
  </ul>

  <h3>📍 Sites of Origin</h3>
  <table>
    <thead>
      <tr>
        <th>Site</th>
        <th>Approx. % of Cases</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Glans penis</td>
        <td>~50%</td>
      </tr>
      <tr>
        <td>Prepuce (foreskin)</td>
        <td>20–30%</td>
      </tr>
      <tr>
        <td>Shaft</td>
        <td>~20%</td>
      </tr>
      <tr>
        <td>Urethral involvement</td>
        <td>Rare; late stage</td>
      </tr>
    </tbody>
  </table>

  <h3>🔬 Types of Penile Carcinoma</h3>
  <ul>
    <li>Squamous Cell Carcinoma (SCC) – most common</li>
    <li>Basaloid &amp; Warty SCC – often HPV-related</li>
    <li>Adenocarcinoma – rare glandular variant</li>
    <li>Melanoma – pigmented, very rare</li>
    <li>Sarcoma – aggressive mesenchymal tumors</li>
  </ul>

  <h3>🩺 Clinical Evaluation</h3>
  <ul>
    <li>Thorough inspection of glans, shaft, foreskin, base</li>
    <li>Palpation for induration, ulceration, bleeding</li>
    <li>Inguinal &amp; pelvic lymph node exam</li>
    <li>MRI or Doppler ultrasound of penis → tumour extent</li>
    <li>Incisional or wedge biopsy for histologic confirmation</li>
  </ul>

  <h3>🔍 Investigations and Staging</h3>
  <ol>
    <li>
      <strong>Biopsy:</strong> Confirms histological type and grade under local anesthesia  
    </li>
    <li>
      <strong>Imaging:</strong>
      <ul>
        <li>MRI penis → depth of invasion</li>
        <li>Ultrasound groin → nodal status</li>
        <li>CT / PET-CT → metastatic work-up</li>
      </ul>
    </li>
    <li>
      <strong>Staging (TNM):</strong>  
      <ul>
        <li>T: Tumor size/depth</li>
        <li>N: Inguinal/pelvic node involvement</li>
        <li>M: Distant metastases</li>
      </ul>
    </li>
  </ol>

  <h3>🛠️ Treatment Modalities</h3>
  <h4>1. Surgery</h4>
  <table>
    <thead>
      <tr>
        <th>Procedure</th>
        <th>When Used</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Circumcision</td>
        <td>Pre-cancerous or very superficial lesions</td>
      </tr>
      <tr>
        <td>Wide local excision</td>
        <td>Localized SCC with margin</td>
      </tr>
      <tr>
        <td>Partial penectomy</td>
        <td>Tumors of glans or distal shaft</td>
      </tr>
      <tr>
        <td>Total penectomy</td>
        <td>Extensive, invasive tumors</td>
      </tr>
      <tr>
        <td>Groin lymph node dissection</td>
        <td>Palpable or imaging-positive nodes</td>
      </tr>
    </tbody>
  </table>

  <h4>2. Radiotherapy</h4>
  <ul>
    <li>External beam or brachytherapy for early or palliative cases</li>
  </ul>

  <h4>3. Chemotherapy</h4>
  <ul>
    <li>For locally advanced, nodal or metastatic disease</li>
    <li>Common agents: Cisplatin, 5-FU, Paclitaxel</li>
  </ul>

  <h4>4. Laser Ablation / Mohs Surgery</h4>
  <ul>
    <li>Selected early/superficial tumors for tissue preservation</li>
  </ul>

  <h3>📈 Prognosis</h3>
  <table>
    <thead>
      <tr>
        <th>Factor</th>
        <th>Outcome</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Early detection (T1)</td>
        <td>Excellent cure rates</td>
      </tr>
      <tr>
        <td>Node-negative</td>
        <td>85–90% 5-year survival</td>
      </tr>
      <tr>
        <td>Node-positive</td>
        <td>30–60% survival depending on extent</td>
      </tr>
      <tr>
        <td>Distant metastasis</td>
        <td>Poor prognosis; focus on palliation</td>
      </tr>
    </tbody>
  </table>

  <h3>🧠 Functional &amp; Psychosocial Considerations</h3>
  <ul>
    <li>Body image and sexual function concerns</li>
    <li>Psychological support and counseling</li>
    <li>Reconstructive options (e.g., phalloplasty) in select cases</li>
    <li>Urinary diversion planning post-total penectomy</li>
  </ul>

  <h3>🌱 Prevention &amp; Public Awareness</h3>
  <ul>
    <li>Early circumcision (pre-puberty) reduces risk</li>
    <li>Maintain excellent genital hygiene</li>
    <li>Use condoms to lower HPV transmission</li>
    <li>HPV vaccination for adolescents (boys and girls)</li>
    <li>Avoid tobacco; limit sexual partners</li>
  </ul>

  <h3>🏥 Sukam’s Commitment to Penile Cancer</h3>
  <ul>
    <li>Compassionate, early-detection clinics</li>
    <li>Access to urologic oncology and reconstructive teams</li>
    <li>Multidisciplinary tumor board planning</li>
    <li>Psychological and sexual health support</li>
    <li>HPV awareness and STI prevention education</li>
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

export default Penis;
