
import React, { useState } from 'react';
import './RP1InfertilityInsights.css';

const quizData = [
  {
    question: "Most common type of colon cancer:",
    options: ["Squamous carcinoma", "Lymphoma", "Adenocarcinoma", "Sarcoma"],
    answer: "Adenocarcinoma"
  },
  {
    question: "Gold standard for diagnosing colon cancer:",
    options: ["CT scan", "Colonoscopy with biopsy", "USG abdomen", "Barium enema"],
    answer: "Colonoscopy with biopsy"
  },
  {
    question: "A tumor marker useful in follow-up of colon cancer:",
    options: ["CA 125", "AFP", "CEA", "CA 19-9"],
    answer: "CEA"
  },
  {
    question: "Most common site of metastasis from colon cancer:",
    options: ["Brain", "Liver", "Bone", "Kidney"],
    answer: "Liver"
  },
  {
    question: "Stage with best prognosis:",
    options: [
      "Stage IV",
      "Stage I",
      "Stage III",
      "Stage II with lymphovascular invasion"
    ],
    answer: "Stage I"
  },
  {
    question: "Which of the following increases colon cancer risk?",
    options: [
      "High-fiber diet",
      "Smoking",
      "Green leafy vegetables",
      "Regular exercise"
    ],
    answer: "Smoking"
  },
  {
    question: "Lynch syndrome is associated with:",
    options: ["Liver cancer", "Colon cancer", "Breast cancer", "Pancreatic cancer"],
    answer: "Colon cancer"
  },
  {
    question: "Right-sided colon cancers typically present with:",
    options: ["Tenesmus", "Obstruction", "Anemia", "Rectal bleeding"],
    answer: "Anemia"
  },
  {
    question: "FAP is characterized by:",
    options: [
      "Few small polyps",
      "Over 100 polyps",
      "Single large polyp",
      "No polyps"
    ],
    answer: "Over 100 polyps"
  },
  {
    question: "Standard chemotherapy regimen for colon cancer:",
    options: ["CHOP", "FOLFOX", "ABVD", "R-CHOP"],
    answer: "FOLFOX"
  },
  {
    question: "Cetuximab is used only in:",
    options: [
      "KRAS mutated tumors",
      "KRAS wild-type tumors",
      "HER2+ tumors",
      "MSI-H tumors"
    ],
    answer: "KRAS wild-type tumors"
  },
  {
    question: "MSI-high tumors respond well to:",
    options: [
      "Bevacizumab",
      "Radiotherapy",
      "Checkpoint inhibitors",
      "Antibiotics"
    ],
    answer: "Checkpoint inhibitors"
  },
  {
    question: "Which of the following is NOT a risk factor for colon cancer?",
    options: ["Obesity", "Sedentary lifestyle", "High-fiber diet", "Ulcerative colitis"],
    answer: "High-fiber diet"
  },
  {
    question: "Fecal occult blood test is useful for:",
    options: [
      "Diagnosing late-stage CRC",
      "Chemotherapy monitoring",
      "Screening",
      "Prognosis"
    ],
    answer: "Screening"
  },
  {
    question: "Most common location of colon cancer:",
    options: ["Sigmoid colon", "Cecum", "Transverse colon", "Ascending colon"],
    answer: "Sigmoid colon"
  },
  {
    question: "Colon cancers commonly arise from:",
    options: ["Hemorrhoids", "Diverticula", "Adenomatous polyps", "Peptic ulcers"],
    answer: "Adenomatous polyps"
  },
  {
    question: "Best next step in a 52-year-old with positive FOBT:",
    options: ["MRI pelvis", "Stool culture", "Colonoscopy", "X-ray"],
    answer: "Colonoscopy"
  },
  {
    question: "Total proctocolectomy is needed in:",
    options: ["Lynch syndrome", "FAP", "Sporadic cancer", "IBD in remission"],
    answer: "FAP"
  },
  {
    question: "Which rectal sign may be present in left-sided colon cancer?",
    options: ["Hemorrhoids", "Spurious diarrhea", "Pencil-thin stools", "Tenesmus"],
    answer: "Pencil-thin stools"
  },
  {
    question: "One preventive strategy for colon cancer:",
    options: [
      "Low protein diet",
      "Regular deworming",
      "Screening colonoscopy",
      "Daily antibiotic use"
    ],
    answer: "Screening colonoscopy"
  }
];

const Colon = () => {
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
      <h1>Carcinoma Colon (Colon Cancer) </h1>
      <p className="lead">“A silent journey through the gut — but early detection can rewrite the story.”</p>

      <section className="info-section">
  <h3>💡 Introduction</h3>
  <p>
    Colon cancer, or colorectal carcinoma, refers to malignancy arising from the lining of the large intestine (colon or rectum).
    It is one of the most common cancers worldwide, especially in urban populations and older adults.
    It often starts as benign polyps that can turn cancerous over time—making screening and prevention highly effective.
    With early detection, colon cancer is one of the most treatable solid-organ malignancies.
  </p>

  <h3>🔍 Types of Colon Cancer</h3>
  <table>
    <thead>
      <tr><th>Type</th><th>Features</th></tr>
    </thead>
    <tbody>
      <tr><td>Adenocarcinoma</td><td>Most common (&gt;95%)</td></tr>
      <tr><td>Mucinous adenocarcinoma</td><td>Secretes mucus, worse prognosis</td></tr>
      <tr><td>Signet-ring cell carcinoma</td><td>Rare, aggressive</td></tr>
      <tr><td>Neuroendocrine tumors</td><td>Arising from hormone-producing cells</td></tr>
      <tr><td>Squamous cell carcinoma / lymphoma / sarcoma</td><td>Very rare in colon</td></tr>
    </tbody>
  </table>

  <h3>⚠️ Risk Factors</h3>
  <table>
    <thead>
      <tr><th>Category</th><th>Factors</th></tr>
    </thead>
    <tbody>
      <tr><td>Age</td><td>&gt;50 years</td></tr>
      <tr><td>Family History</td><td>Colon cancer, adenomatous polyps</td></tr>
      <tr><td>Genetic Syndromes</td><td>FAP, Lynch syndrome</td></tr>
      <tr><td>Inflammatory Bowel Disease</td><td>Ulcerative colitis, Crohn’s disease</td></tr>
      <tr><td>Diet</td><td>Low fiber, high red meat/fat, processed foods</td></tr>
      <tr><td>Lifestyle</td><td>Obesity, smoking, alcohol, sedentary habits</td></tr>
      <tr><td>Diabetes / Insulin Resistance</td><td>Increases risk</td></tr>
    </tbody>
  </table>

  <h3>🩺 Common Symptoms</h3>
  <ul>
    <li>Change in bowel habits (constipation/diarrhea)</li>
    <li>Blood in stools (bright red or black)</li>
    <li>Unexplained weight loss</li>
    <li>Persistent abdominal pain or bloating</li>
    <li>Fatigue, anemia (especially in right-sided tumors)</li>
    <li>Feeling of incomplete evacuation</li>
    <li>Palpable abdominal mass (advanced stage)</li>
  </ul>

  <h3>🔬 Diagnostic Evaluation</h3>
  <table>
    <thead>
      <tr><th>Investigation</th><th>Role</th></tr>
    </thead>
    <tbody>
      <tr><td>Colonoscopy with biopsy</td><td>Gold standard</td></tr>
      <tr><td>CEA (Carcinoembryonic Antigen)</td><td>Tumor marker (monitoring, not screening)</td></tr>
      <tr><td>CT scan – Abdomen & Pelvis</td><td>Staging tool (tumor, nodes, metastasis)</td></tr>
      <tr><td>MRI (for rectal cancers)</td><td>Better for soft tissue and wall invasion</td></tr>
      <tr><td>Barium enema</td><td>Historical tool (rarely used today)</td></tr>
      <tr><td>Fecal occult blood test (FOBT)</td><td>Used in screening</td></tr>
    </tbody>
  </table>

  <h3>📊 Staging (TNM – AJCC)</h3>
  <table>
    <thead>
      <tr><th>Stage</th><th>Features</th></tr>
    </thead>
    <tbody>
      <tr><td>Stage I</td><td>Tumor invades wall, no nodes/metastasis</td></tr>
      <tr><td>Stage II</td><td>Deeper invasion, still no nodes</td></tr>
      <tr><td>Stage III</td><td>Lymph node involvement</td></tr>
      <tr><td>Stage IV</td><td>Distant metastasis (liver, lung, peritoneum)</td></tr>
    </tbody>
  </table>

  <h3>💉 Treatment Strategy</h3>
  <h4>1. Surgery – Cornerstone of Treatment</h4>
  <table>
    <thead>
      <tr><th>Surgery</th><th>Indication</th></tr>
    </thead>
    <tbody>
      <tr><td>Right/left hemicolectomy</td><td>Standard for localized colon cancer</td></tr>
      <tr><td>Extended colectomy</td><td>Hereditary syndromes, widespread polyps</td></tr>
      <tr><td>Total proctocolectomy</td><td>FAP, synchronous colon + rectal tumors</td></tr>
      <tr><td>Laparoscopic or open</td><td>Based on center expertise</td></tr>
    </tbody>
  </table>

  <h4>2. Adjuvant Chemotherapy</h4>
  <ul>
    <li>Used in Stage III and high-risk Stage II</li>
    <li>FOLFOX regimen (5-FU, Leucovorin, Oxaliplatin)</li>
    <li>Reduces recurrence and improves survival</li>
  </ul>

  <h4>3. Targeted & Immunotherapy (Advanced disease)</h4>
  <table>
    <thead>
      <tr><th>Type</th><th>Drugs</th><th>Use</th></tr>
    </thead>
    <tbody>
      <tr><td>Anti-EGFR</td><td>Cetuximab, Panitumumab</td><td>KRAS/NRAS wild-type tumors</td></tr>
      <tr><td>Anti-VEGF</td><td>Bevacizumab</td><td>Advanced/metastatic CRC</td></tr>
      <tr><td>Checkpoint inhibitors</td><td>Pembrolizumab, Nivolumab</td><td>MSI-High tumors (immunogenic)</td></tr>
    </tbody>
  </table>

  <h4>4. Palliative Care</h4>
  <ul>
    <li>For Stage IV/metastatic disease</li>
    <li>Includes chemo, radiation, colostomy, nutrition</li>
    <li>Symptom control: bleeding, obstruction, pain</li>
  </ul>

  <h3>📅 Screening Guidelines</h3>
  <table>
    <thead>
      <tr><th>Group</th><th>Screening Recommendation</th></tr>
    </thead>
    <tbody>
      <tr><td>Average-risk individuals</td><td>Colonoscopy every 10 years from age 45</td></tr>
      <tr><td>Family history / IBD</td><td>Earlier and more frequent screening</td></tr>
      <tr><td>FAP, Lynch syndrome</td><td>Genetic testing, yearly colonoscopy from age 20s</td></tr>
    </tbody>
  </table>

  <h3>📈 Prognosis by Stage</h3>
  <table>
    <thead>
      <tr><th>Stage</th><th>5-Year Survival Rate</th></tr>
    </thead>
    <tbody>
      <tr><td>Stage I</td><td>~90%</td></tr>
      <tr><td>Stage II</td><td>~75%</td></tr>
      <tr><td>Stage III</td><td>~50%</td></tr>
      <tr><td>Stage IV</td><td>&lt;10%</td></tr>
    </tbody>
  </table>

  <h3>🏥 Sukam Speciality Clinic’s Approach</h3>
  <ul>
    <li>On-site colonoscopy with biopsy</li>
    <li>High-resolution CT scan staging</li>
    <li>Coordination with surgical & medical oncology</li>
    <li>Post-op CEA monitoring</li>
    <li>Stoma care, dietary guidance, survivorship support</li>
    <li>Psychological counseling & rehabilitation</li>
  </ul>

  <h3>✅ Tips for Prevention</h3>
  <ul>
    <li>High-fiber diet: whole grains, fruits, vegetables</li>
    <li>Limit red and processed meat</li>
    <li>Quit smoking and alcohol</li>
    <li>Stay physically active</li>
    <li>Routine screening from age 45 or earlier if high-risk</li>
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

export default Colon;
