
import React, { useState } from 'react';
import './RP1InfertilityInsights.css';

const quizData = [
  {
    question: "Most common type of gastric cancer:",
    options: ["Lymphoma", "Adenocarcinoma", "Sarcoma", "Neuroendocrine tumor"],
    answer: "Adenocarcinoma"
  },
  {
    question: "Classic node in advanced gastric cancer:",
    options: ["Inguinal node", "Virchow’s node", "Axillary node", "Epitrochlear node"],
    answer: "Virchow’s node"
  },
  {
    question: "Gold standard test for diagnosis:",
    options: ["Barium meal", "CT scan", "Endoscopy with biopsy", "PET scan"],
    answer: "Endoscopy with biopsy"
  },
  {
    question: "H. pylori is linked to which cancer type?",
    options: ["Colon", "Gastric lymphoma", "Pancreatic", "Liver"],
    answer: "Gastric lymphoma"
  },
  {
    question: "Signet-ring cells are seen in:",
    options: ["Diffuse gastric cancer", "Intestinal cancer", "GIST", "Lymphoma"],
    answer: "Diffuse gastric cancer"
  },
  {
    question: "Common early symptom of gastric cancer:",
    options: ["Severe pain", "Palpable lump", "Indigestion and early satiety", "Jaundice"],
    answer: "Indigestion and early satiety"
  },
  {
    question: "Surgery for distal stomach tumors:",
    options: ["Total gastrectomy", "Subtotal gastrectomy", "Splenectomy", "Whipple’s"],
    answer: "Subtotal gastrectomy"
  },
  {
    question: "Which stage has best prognosis:",
    options: ["T3N2", "Stage I", "Stage III", "Stage IV"],
    answer: "Stage I"
  },
  {
    question: "Endoscopic resection is done in:",
    options: ["Advanced cancer", "T1, well-differentiated tumors", "Signet-ring carcinoma", "Lymphoma"],
    answer: "T1, well-differentiated tumors"
  },
  {
    question: "FLOT regimen includes all EXCEPT:",
    options: ["Oxaliplatin", "Docetaxel", "Methotrexate", "5-FU"],
    answer: "Methotrexate"
  },
  {
    question: "Best investigation for assessing metastasis:",
    options: ["Barium meal", "Endoscopy", "PET-CT", "USG"],
    answer: "PET-CT"
  },
  {
    question: "Sister Mary Joseph’s nodule is found in:",
    options: ["Groin", "Neck", "Umbilicus", "Armpit"],
    answer: "Umbilicus"
  },
  {
    question: "Helicobacter pylori is best tested via:",
    options: ["Stool microscopy", "Serology", "Urease test (during endoscopy)", "Biopsy for TB"],
    answer: "Urease test (during endoscopy)"
  },
  {
    question: "Lymph node dissection in gastric cancer is called:",
    options: ["N1 resection", "D2 lymphadenectomy", "Sentinel node biopsy", "Axillary clearance"],
    answer: "D2 lymphadenectomy"
  },
  {
    question: "Which is NOT a risk factor for gastric cancer:",
    options: ["Smoked food", "GERD", "H. pylori", "Smoking"],
    answer: "GERD"
  },
  {
    question: "Early satiety occurs due to:",
    options: ["Gastritis", "Tumor occupying space", "Liver disease", "Diabetes"],
    answer: "Tumor occupying space"
  },
  {
    question: "First-line chemotherapy for advanced gastric cancer:",
    options: ["Paclitaxel alone", "CAPOX / FLOT", "Methotrexate", "Letrozole"],
    answer: "CAPOX / FLOT"
  },
  {
    question: "Sign of gastric outlet obstruction:",
    options: ["Constipation", "Projectile vomiting", "Jaundice", "Hemoptysis"],
    answer: "Projectile vomiting"
  },
  {
    question: "GISTs are treated primarily with:",
    options: ["Chemotherapy", "Imatinib (targeted therapy)", "Steroids", "Radiotherapy"],
    answer: "Imatinib (targeted therapy)"
  },
  {
    question: "Nodular umbilical metastasis is called:",
    options: ["Krukenberg tumor", "Sister Mary Joseph nodule", "Irish node", "Blumer’s shelf"],
    answer: "Sister Mary Joseph nodule"
  }
];

const Stomach = () => {
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
      <h1>Carcinoma Stomach (Gastric Cancer)</h1>
      <p className="lead">“A silent threat that grows in the gut—early recognition saves lives.”</p>

      <section className="info-section">

  <h3>🩺 What Is Gastric Cancer?</h3>
  <p>
    Carcinoma of the stomach refers to malignant tumors arising from the gastric lining.  
    It ranks among the top five causes of cancer mortality globally, especially prevalent  
    in Asia. Early symptoms are vague and often missed, so diagnosis frequently occurs  
    at an advanced stage.
  </p>

  <h3>🔬 Types of Gastric Cancer</h3>
  <table>
    <thead>
      <tr>
        <th>Type</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Adenocarcinoma (90%)</td>
        <td>From gastric mucosa; most common subtype</td>
      </tr>
      <tr>
        <td>Diffuse type (Signet-ring cells)</td>
        <td>Infiltrative, aggressive, seen in younger patients</td>
      </tr>
      <tr>
        <td>Intestinal type</td>
        <td>Gland-forming, often linked to environmental factors</td>
      </tr>
      <tr>
        <td>Lymphoma (MALT)</td>
        <td>Associated with H. pylori infection</td>
      </tr>
      <tr>
        <td>GISTs</td>
        <td>Mesenchymal tumors arising from interstitial cells</td>
      </tr>
      <tr>
        <td>Other rare variants</td>
        <td>Squamous cell carcinoma, neuroendocrine tumors</td>
      </tr>
    </tbody>
  </table>

  <h3>⚠️ Risk Factors</h3>
  <table>
    <thead>
      <tr>
        <th>Category</th>
        <th>Risk Factors</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Dietary</td>
        <td>High salt, smoked or pickled foods, nitrates</td>
      </tr>
      <tr>
        <td>Infection</td>
        <td>H. pylori, EBV</td>
      </tr>
      <tr>
        <td>Genetic</td>
        <td>CDH1 mutation (hereditary diffuse), Lynch syndrome</td>
      </tr>
      <tr>
        <td>Lifestyle</td>
        <td>Smoking, alcohol, obesity</td>
      </tr>
      <tr>
        <td>Medical</td>
        <td>Chronic gastritis, gastric polyps, pernicious anemia, prior surgery</td>
      </tr>
      <tr>
        <td>Environmental</td>
        <td>Low socioeconomic status, rural residence</td>
      </tr>
    </tbody>
  </table>

  <h3>🚩 Red Flag Symptoms</h3>
  <ul>
    <li>Persistent epigastric pain or discomfort</li>
    <li>Early satiety or feeling full quickly</li>
    <li>Unintentional weight loss and loss of appetite</li>
    <li>Nausea, vomiting, or melena (black stools)</li>
    <li>Anemia, fatigue</li>
    <li>Palpable abdominal mass (late stage)</li>
    <li>Virchow’s node (left supraclavicular lymphadenopathy)</li>
  </ul>

  <h3>🩺 Clinical Evaluation</h3>
  <ul>
    <li>History: epigastric pain, indigestion, weight loss, risk factors</li>
    <li>General exam: pallor, cachexia, weight loss</li>
    <li>Abdominal exam: tenderness, mass, hepatomegaly</li>
    <li>Lymph node exam: Virchow’s, Sister Mary Joseph’s nodule</li>
    <li>Per rectal exam: melena or occult blood</li>
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
        <td>Upper GI Endoscopy + Biopsy</td>
        <td>✅ Gold standard for diagnosis</td>
      </tr>
      <tr>
        <td>CECT Abdomen</td>
        <td>Staging: tumor extent, nodal and liver metastases</td>
      </tr>
      <tr>
        <td>EUS (Endoscopic Ultrasound)</td>
        <td>Depth of invasion (T-staging)</td>
      </tr>
      <tr>
        <td>PET-CT</td>
        <td>Detect distant metastases, assess treatment response</td>
      </tr>
      <tr>
        <td>H. pylori Testing</td>
        <td>Especially if MALT lymphoma suspected</td>
      </tr>
      <tr>
        <td>CBC, LFTs, CEA, CA 19-9</td>
        <td>Supportive labs, not diagnostic alone</td>
      </tr>
    </tbody>
  </table>

  <h3>📊 TNM Staging Summary</h3>
  <table>
    <thead>
      <tr>
        <th>T</th>
        <th>N</th>
        <th>M</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          T1 – Mucosa/submucosa<br/>
          T2 – Muscularis propria<br/>
          T3 – Subserosa<br/>
          T4 – Serosa or adjacent structures
        </td>
        <td>
          N0 – No nodes<br/>
          N1 – 1–2 nodes<br/>
          N2 – 3–6 nodes<br/>
          N3 – ≥7 nodes
        </td>
        <td>M0 – No mets<br/>M1 – Distant spread</td>
      </tr>
    </tbody>
  </table>

  <h3>🛠️ Treatment Strategy</h3>

  <h4>1. Surgery – Mainstay of Cure</h4>
  <table>
    <thead>
      <tr>
        <th>Procedure</th>
        <th>Indication</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Subtotal (distal) gastrectomy</td>
        <td>Tumor in distal stomach</td>
      </tr>
      <tr>
        <td>Total gastrectomy</td>
        <td>Tumor in proximal or body region</td>
      </tr>
      <tr>
        <td>D2 lymphadenectomy</td>
        <td>Standard nodal clearance in Asia</td>
      </tr>
      <tr>
        <td>R0 resection</td>
        <td>Goal: negative margins</td>
      </tr>
    </tbody>
  </table>

  <h4>2. Neoadjuvant / Adjuvant Chemotherapy</h4>
  <ul>
    <li>Neoadjuvant chemo improves resectability</li>
    <li>Adjuvant chemo reduces recurrence</li>
    <li>Common regimens: FLOT, ECF, CAPOX</li>
  </ul>

  <h4>3. Radiotherapy</h4>
  <p>
    Often combined with chemotherapy post-operatively in locally advanced cases.  
    Rarely used alone.
  </p>

  <h4>4. Palliative Therapy</h4>
  <ul>
    <li>Feeding jejunostomy or stenting for obstruction</li>
    <li>Palliative chemotherapy for symptom control</li>
    <li>Gastrojejunostomy for gastric outlet obstruction</li>
    <li>Nutrition support and pain management</li>
  </ul>

  <h3>📈 Prognosis by Stage</h3>
  <table>
    <thead>
      <tr>
        <th>Stage</th>
        <th>5-Year Survival</th>
      </tr>
    </thead>
    <tbody>
      <tr><td>I</td><td>&gt;70%</td></tr>
      <tr><td>II</td><td>~50%</td></tr>
      <tr><td>III</td><td>~30%</td></tr>
      <tr><td>IV</td><td>&gt;10%</td></tr>
    </tbody>
  </table>

  <h3>🌱 Prevention & Early Detection</h3>
  <ul>
    <li>Eradicate H. pylori</li>
    <li>Diet rich in fruits and vegetables</li>
    <li>Avoid excess salt, pickled and smoked meats</li>
    <li>Quit smoking and alcohol</li>
    <li>Surveillance endoscopy in high-risk individuals</li>
  </ul>

  <h3>🏥 At Sukam Speciality Clinic</h3>
  <ul>
    <li>Expert upper GI endoscopy with guided biopsy</li>
    <li>Early endoscopic resection in select cases</li>
    <li>Multidisciplinary tumor board for treatment planning</li>
    <li>Minimally invasive and laparoscopic gastrectomy</li>
    <li>Dedicated palliative care and nutritional support</li>
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

export default Stomach;
