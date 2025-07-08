
import React, { useState } from 'react';
import './RP1InfertilityInsights.css';

const quizData = [
  {
    question: "Most common type of oral cavity cancer is:",
    options: [
      "Basal cell carcinoma",
      "Squamous cell carcinoma",
      "Adenocarcinoma",
      "Melanoma"
    ],
    answer: "Squamous cell carcinoma"
  },
  {
    question: "Which is a known risk factor for oral cancer?",
    options: [
      "High-protein diet",
      "Chewing tobacco",
      "Daily exercise",
      "Drinking milk"
    ],
    answer: "Chewing tobacco"
  },
  {
    question: "Precancerous lesion with white patch in the mouth is called:",
    options: ["Erythroplakia", "Leukoplakia", "Glossitis", "Lichen planus"],
    answer: "Leukoplakia"
  },
  {
    question: "Common symptom of early oral carcinoma:",
    options: [
      "Abdominal pain",
      "Skin rash",
      "Non-healing mouth ulcer",
      "Blurred vision"
    ],
    answer: "Non-healing mouth ulcer"
  },
  {
    question: "Submucous fibrosis is linked with:",
    options: ["Milk", "Betel nut chewing", "Alcohol", "Sun exposure"],
    answer: "Betel nut chewing"
  },
  {
    question: "HPV-16 is a risk factor for:",
    options: [
      "Esophageal cancer",
      "Oral cavity carcinoma",
      "Breast cancer",
      "Colon cancer"
    ],
    answer: "Oral cavity carcinoma"
  },
  {
    question: "Standard diagnostic test for oral cancer:",
    options: ["MRI", "CT scan", "Biopsy", "Ultrasound"],
    answer: "Biopsy"
  },
  {
    question: "Lymph node metastasis is assessed using:",
    options: [
      "Liver function test",
      "Neck palpation and imaging",
      "Spirometry",
      "ECG"
    ],
    answer: "Neck palpation and imaging"
  },
  {
    question: "Oral cancer staging includes all EXCEPT:",
    options: ["Tumor size", "Node involvement", "Vision test", "Distant spread"],
    answer: "Vision test"
  },
  {
    question: "Oral cancer commonly spreads to:",
    options: ["Brain", "Liver", "Neck lymph nodes", "Spleen"],
    answer: "Neck lymph nodes"
  },
  {
    question: "Wide excision and neck dissection are part of:",
    options: [
      "Cosmetic surgery",
      "Oral cancer surgery",
      "Sinus surgery",
      "Cataract surgery"
    ],
    answer: "Oral cancer surgery"
  },
  {
    question: "Concurrent chemo-radiation is used in:",
    options: ["Stage I oral cancer", "Advanced oral cancer", "Acne", "UTI"],
    answer: "Advanced oral cancer"
  },
  {
    question: "Cetuximab targets:",
    options: ["DNA repair", "EGFR", "Platelets", "Cholesterol"],
    answer: "EGFR"
  },
  {
    question: "Speech therapy is important after:",
    options: [
      "Toe amputation",
      "Tongue surgery",
      "Hernia repair",
      "Cataract removal"
    ],
    answer: "Tongue surgery"
  },
  {
    question: "A person chewing gutkha is at risk of:",
    options: ["Liver disease", "Oral cancer", "Eye infection", "Migraine"],
    answer: "Oral cancer"
  },
  {
    question: "Common site of oral cancer in India:",
    options: ["Tongue", "Buccal mucosa", "Nasal septum", "Hard palate"],
    answer: "Buccal mucosa"
  },
  {
    question: "Early detection improves:",
    options: ["Anxiety", "Financial loss", "Survival rates", "None of the above"],
    answer: "Survival rates"
  },
  {
    question: "Radiation side effects can include:",
    options: ["Hearing loss", "Mucositis", "Memory loss", "Diarrhea"],
    answer: "Mucositis"
  },
  {
    question: "HPV vaccination can reduce risk of:",
    options: [
      "Kidney stones",
      "Oral and cervical cancer",
      "Asthma",
      "GERD"
    ],
    answer: "Oral and cervical cancer"
  },
  {
    question: "Main goal in oral cancer rehab:",
    options: [
      "Weight loss",
      "Cosmetic enhancement",
      "Functional recovery (speech, swallow)",
      "Mental sedation"
    ],
    answer: "Functional recovery (speech, swallow)"
  }
];

const OralCavity = () => {
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
      <h1>Carcinoma of the Oral Cavity</h1>
      <p className="lead">“Speaking Up for Early Detection—Your Mouth Can Save Your Life”</p>

      <section className="info-section">
  <h3>🧠 What Is Oral Cavity Carcinoma?</h3>
  <p>
    Carcinoma of the oral cavity refers to malignant tumors arising in any part of the mouth—lips, buccal mucosa, anterior tongue, floor of mouth, hard palate, gingiva, or retromolar trigone. Over 90% are squamous cell carcinomas (SCC), which can invade locally and metastasize to lymph nodes if untreated.
  </p>

  <h3>👥 Who Is at Risk?</h3>
  <table>
    <thead>
      <tr>
        <th>Risk Factor</th>
        <th>Details</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Tobacco Use</td>
        <td>Smoking, chewing gutkha, khaini, betel quid</td>
      </tr>
      <tr>
        <td>Alcohol</td>
        <td>Synergistic with tobacco</td>
      </tr>
      <tr>
        <td>Poor Oral Hygiene</td>
        <td>Ill-fitting dentures, chronic irritation</td>
      </tr>
      <tr>
        <td>HPV Infection</td>
        <td>High-risk types, especially HPV-16</td>
      </tr>
      <tr>
        <td>Age & Gender</td>
        <td>More common in males over 40</td>
      </tr>
      <tr>
        <td>Nutritional Deficiency</td>
        <td>Low fruit and vegetable intake</td>
      </tr>
    </tbody>
  </table>

  <h3>🚩 How Does It Begin?</h3>
  <ul>
    <li>Precancerous lesions: leukoplakia, erythroplakia, oral submucous fibrosis</li>
    <li>Chronic mucosal irritation or inflammation</li>
    <li>Genetic mutations induced by carcinogens</li>
  </ul>

  <h3>⚠️ Symptoms to Watch Out For</h3>
  <ul>
    <li>Non-healing ulcer or sore &gt;2 weeks</li>
    <li>White or red patches on oral mucosa</li>
    <li>Lump or thickening in cheek, tongue, or gum</li>
    <li>Pain or difficulty chewing, swallowing, speaking</li>
    <li>Restricted tongue movement or numbness</li>
    <li>Spontaneous oral bleeding</li>
    <li>Loose teeth or poorly fitting dentures</li>
  </ul>

  <h3>🩺 Clinical Examination</h3>
  <ol>
    <li>Inspection & palpation of all oral surfaces for induration</li>
    <li>Detailed tongue and floor-of-mouth examination</li>
    <li>Cervical and supraclavicular lymph node palpation</li>
    <li>Toluidine blue staining or direct biopsy of suspicious areas</li>
  </ol>

  <h3>🔍 Diagnostic Tools</h3>
  <table>
    <thead>
      <tr>
        <th>Test</th>
        <th>Purpose</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Incisional / Punch Biopsy</td>
        <td>Gold standard for histologic diagnosis</td>
      </tr>
      <tr>
        <td>CT / MRI Head &amp; Neck</td>
        <td>Assess local invasion and bone involvement</td>
      </tr>
      <tr>
        <td>Ultrasound Neck</td>
        <td>Evaluate nodal metastasis</td>
      </tr>
      <tr>
        <td>PET-CT</td>
        <td>Detect distant metastases</td>
      </tr>
      <tr>
        <td>HPV Testing</td>
        <td>Determine viral etiology in SCC</td>
      </tr>
      <tr>
        <td>FNAC of Nodes</td>
        <td>Confirm metastatic involvement</td>
      </tr>
    </tbody>
  </table>

  <h3>📊 Staging: TNM System</h3>
  <p>
    Staged by primary tumor size/depth (T1–T4), regional nodes (N0–N2), and distant metastasis (M0–M1).  
    Early: T1–T2, N0. Locally advanced: T3–T4 and/or N1–N2. Metastatic: any T/N with M1.
  </p>

  <h3>🛠️ Treatment Modalities</h3>
  <h4>1. Surgery</h4>
  <ul>
    <li>Wide local excision with clear margins</li>
    <li>Neck dissection for nodal disease</li>
    <li>Reconstruction with local or free flaps as needed</li>
  </ul>

  <h4>2. Radiotherapy</h4>
  <p>
    External beam radiation, used post-operatively or as primary therapy in unresectable tumors.
  </p>

  <h4>3. Chemotherapy</h4>
  <p>
    Concurrent with radiation in advanced cases; common agents include cisplatin, 5-FU, docetaxel.
  </p>

  <h4>4. Targeted / Immunotherapy</h4>
  <p>
    EGFR inhibitors (cetuximab) and checkpoint inhibitors (nivolumab, pembrolizumab) for recurrent or metastatic disease.
  </p>

  <h3>🦷 Rehabilitation & Supportive Care</h3>
  <ul>
    <li>Speech and swallowing therapy</li>
    <li>Nutrition support and prosthodontic rehabilitation</li>
    <li>Psychological counseling and tobacco cessation programs</li>
  </ul>

  <h3>📅 Follow-Up Protocol</h3>
  <table>
    <thead>
      <tr>
        <th>Time Frame</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Every 3 months (1st year)</td>
        <td>Physical exam and neck palpation</td>
      </tr>
      <tr>
        <td>Every 6 months (years 2–3)</td>
        <td>Imaging as indicated by symptoms</td>
      </tr>
      <tr>
        <td>Annually thereafter</td>
        <td>Lifelong surveillance advised</td>
      </tr>
    </tbody>
  </table>

  <h3>🌱 Prevention Tips</h3>
  <ul>
    <li>Quit tobacco and limit alcohol use</li>
    <li>Maintain excellent oral hygiene</li>
    <li>Regular dental and oral cancer screenings</li>
    <li>Avoid betel nut and areca quid chewing</li>
    <li>Protect against occupational chemical exposures</li>
    <li>Eat a diet rich in fruits and vegetables</li>
  </ul>

  <h3>🏥 Sukam’s Approach to Oral Cancer</h3>
  <ul>
    <li>Routine oral screening and early biopsy</li>
    <li>Head &amp; neck oncology consultation</li>
    <li>Multidisciplinary tumor board planning</li>
    <li>Focus on functional preservation and quality of life</li>
    <li>Access to reconstructive, radiation, and nutrition experts</li>
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

export default OralCavity;
