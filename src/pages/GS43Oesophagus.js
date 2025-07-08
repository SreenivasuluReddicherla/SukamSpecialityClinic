
import React, { useState } from 'react';
import './RP1InfertilityInsights.css';

const quizData = [
  {
    question: "Most common site for esophageal SCC:",
    options: ["Lower third", "Upper third", "Middle third", "GE junction"],
    answer: "Upper third"
  },
  {
    question: "Adenocarcinoma commonly arises in:",
    options: ["Cervical esophagus", "Upper third", "Lower third", "Entire esophagus"],
    answer: "Lower third"
  },
  {
    question: "Earliest symptom of esophageal cancer:",
    options: ["Hoarseness", "Vomiting", "Dysphagia", "Bleeding"],
    answer: "Dysphagia"
  },
  {
    question: "Best diagnostic tool for esophageal cancer:",
    options: ["Barium swallow", "Endoscopy with biopsy", "CT scan", "Ultrasound"],
    answer: "Endoscopy with biopsy"
  },
  {
    question: "Risk factor for adenocarcinoma:",
    options: ["Smoking", "Alcohol", "Barrett’s esophagus", "Hot beverages"],
    answer: "Barrett’s esophagus"
  },
  {
    question: "PET-CT is primarily used to detect:",
    options: ["Tumor size", "Distant metastasis", "Vocal cord paralysis", "Barrett’s changes"],
    answer: "Distant metastasis"
  },
  {
    question: "Achalasia is associated with:",
    options: ["Stomach cancer", "Colon cancer", "Esophageal cancer", "Pancreatic cancer"],
    answer: "Esophageal cancer"
  },
  {
    question: "Recurrent laryngeal nerve involvement causes:",
    options: ["Dysphagia", "Vomiting", "Hoarseness", "Hemoptysis"],
    answer: "Hoarseness"
  },
  {
    question: "Most common histology worldwide:",
    options: ["SCC", "Adenocarcinoma", "Lymphoma", "Neuroendocrine tumor"],
    answer: "SCC"
  },
  {
    question: "Mainstay of treatment for operable esophageal cancer:",
    options: ["Chemotherapy", "Radiation", "Surgery", "Steroids"],
    answer: "Surgery"
  },
  {
    question: "Chemotherapy drugs used commonly include:",
    options: ["Cisplatin + 5-FU", "Methotrexate", "Cyclophosphamide", "Tamoxifen"],
    answer: "Cisplatin + 5-FU"
  },
  {
    question: "Barrett’s esophagus is seen in long-standing:",
    options: ["Alcoholism", "GERD", "Constipation", "Ulcer"],
    answer: "GERD"
  },
  {
    question: "Barium swallow shows “rat tail” sign in:",
    options: ["GERD", "Peptic ulcer", "Esophageal cancer", "Gastritis"],
    answer: "Esophageal cancer"
  },
  {
    question: "MIE stands for:",
    options: [
      "Multi Internal Endoscopy",
      "Minimally Invasive Esophagectomy",
      "Metastatic Imaging Evaluation",
      "Multiple Imaging Endoscopy"
    ],
    answer: "Minimally Invasive Esophagectomy"
  },
  {
    question: "Which is NOT a symptom of esophageal cancer?",
    options: ["Dysphagia", "Weight loss", "Hoarseness", "Diarrhea"],
    answer: "Diarrhea"
  },
  {
    question: "Stenting is used in:",
    options: ["GERD", "Advanced esophageal cancer", "Barrett’s", "Peptic ulcer"],
    answer: "Advanced esophageal cancer"
  },
  {
    question: "First step in evaluating dysphagia:",
    options: ["MRI", "Endoscopy", "CT scan", "PET-CT"],
    answer: "Endoscopy"
  },
  {
    question: "Which type of diet is protective?",
    options: ["High fat", "High fiber", "Low protein", "High sugar"],
    answer: "High fiber"
  },
  {
    question: "Main site of metastasis for esophageal cancer:",
    options: ["Liver", "Lungs", "Bones", "Liver and lungs"],
    answer: "Liver and lungs"
  },
  {
    question: "Definitive chemoradiotherapy is advised in:",
    options: [
      "Barrett’s",
      "Inoperable esophageal cancer",
      "Early-stage GERD",
      "Peptic ulcer bleeding"
    ],
    answer: "Inoperable esophageal cancer"
  }
];

const Oesophagus = () => {
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
      <h1>Carcinoma of the Oesophagus (Esophageal Cancer) </h1>
      <p className="lead">“Silent until late—but early detection can rewrite the story.”</p>

      <section className="info-section">
  <h3>🩺 Overview</h3>
  <p>
    Esophageal cancer is a malignant tumor of the esophagus—the muscular tube connecting
    the throat to the stomach. It’s highly aggressive, often detected late due to vague
    symptoms, and carries a poor prognosis when advanced. Early-stage disease, however,
    can be curable with prompt, aggressive treatment. Globally, it ranks in the top 10
    cancers, with especially high incidence in parts of Asia, including India.
  </p>

  <h3>🔬 Types of Esophageal Cancer</h3>
  <table>
    <thead>
      <tr>
        <th>Type</th>
        <th>Description</th>
        <th>Location</th>
        <th>Risk Factors</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Squamous Cell Carcinoma (SCC)</td>
        <td>Arises from flat mucosal cells</td>
        <td>Upper/middle third</td>
        <td>Smoking, alcohol, hot drinks, poor diet</td>
      </tr>
      <tr>
        <td>Adenocarcinoma</td>
        <td>From glandular cells—often in Barrett’s</td>
        <td>Lower third</td>
        <td>GERD, obesity, Barrett’s esophagus</td>
      </tr>
    </tbody>
  </table>

  <h3>⚠️ Risk Factors</h3>
  <table>
    <thead>
      <tr>
        <th>Category</th>
        <th>Examples</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Lifestyle</td>
        <td>Tobacco, alcohol, hot beverages, poor oral hygiene</td>
      </tr>
      <tr>
        <td>Dietary</td>
        <td>Nitrosamines, low fruits & vegetables, iron deficiency</td>
      </tr>
      <tr>
        <td>Medical</td>
        <td>GERD, Barrett’s esophagus, achalasia, caustic injury</td>
      </tr>
      <tr>
        <td>Genetic/Other</td>
        <td>Tylosis, Plummer-Vinson syndrome, prior radiation</td>
      </tr>
    </tbody>
  </table>

  <h3>🚩 Symptoms: When to Suspect</h3>
  <ul>
    <li>Progressive dysphagia – solids → liquids</li>
    <li>Odynophagia (painful swallowing)</li>
    <li>Unexplained weight loss</li>
    <li>Regurgitation or choking on food</li>
    <li>Persistent chest/back pain</li>
    <li>Hoarseness (recurrent laryngeal nerve involvement)</li>
    <li>Cough during meals</li>
    <li>Bleeding or anemia</li>
  </ul>

  <h3>🩺 Clinical Evaluation</h3>
  <ul>
    <li>Detailed history: dysphagia pattern, weight loss, GERD, habits</li>
    <li>Physical exam: often normal early; assess nodes, nutrition</li>
    <li>Check for hoarseness → vocal cord palsy evaluation</li>
  </ul>

  <h3>🔍 Diagnostic Work-Up</h3>
  <table>
    <thead>
      <tr>
        <th>Investigation</th>
        <th>Role</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Upper GI Endoscopy (EGD)</td>
        <td>Visualize lesion + biopsy</td>
      </tr>
      <tr>
        <td>Barium Swallow</td>
        <td>Shows “rat tail” or shouldering</td>
      </tr>
      <tr>
        <td>CECT Chest-Abdomen</td>
        <td>Local staging, nodal assessment</td>
      </tr>
      <tr>
        <td>Endoscopic Ultrasound (EUS)</td>
        <td>T-staging and nodal involvement</td>
      </tr>
      <tr>
        <td>PET-CT</td>
        <td>Distant metastasis detection</td>
      </tr>
      <tr>
        <td>Biopsy</td>
        <td>Histological confirmation and grade</td>
      </tr>
    </tbody>
  </table>

  <h3>📊 TNM Staging Summary</h3>
  <table>
    <thead>
      <tr>
        <th>Category</th>
        <th>Details</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>T</td>
        <td>
          T1: Submucosa<br/>
          T2: Muscularis propria<br/>
          T3: Adventitia<br/>
          T4: Adjacent structures
        </td>
      </tr>
      <tr>
        <td>N</td>
        <td>N0: No nodes<br/>N1–N3: Increasing nodal spread</td>
      </tr>
      <tr>
        <td>M</td>
        <td>M0: No metastasis<br/>M1: Distant organs</td>
      </tr>
    </tbody>
  </table>

  <h3>🛠️ Treatment Options</h3>
  <ol>
    <li>
      <strong>Surgery</strong> (operable cases)
      <ul>
        <li>Transthoracic Esophagectomy (TTE) – middle/lower tumors</li>
        <li>Transhiatal Esophagectomy – avoids thoracotomy</li>
        <li>Minimally Invasive Esophagectomy (MIE) – lower morbidity</li>
        <li>Three-field lymphadenectomy – for SCC</li>
      </ul>
    </li>
    <li>
      <strong>Chemoradiotherapy (CRT)</strong>
      <ul>
        <li>Neoadjuvant: Shrinks tumor pre-op</li>
        <li>Definitive CRT: For inoperable disease</li>
        <li>Adjuvant: Select post-op cases</li>
        <li>Common agents: Cisplatin, 5-FU, Paclitaxel + Carboplatin</li>
      </ul>
    </li>
    <li>
      <strong>Palliative Therapy</strong>
      <ul>
        <li>Stenting – relieve dysphagia</li>
        <li>Feeding jejunostomy – when oral intake fails</li>
        <li>Palliative radiation/chemo</li>
        <li>Pain and symptom management</li>
      </ul>
    </li>
  </ol>

  <h3>📅 Follow-up & Surveillance</h3>
  <ul>
    <li>0–2 years: CT scan and nutrition check every 3–6 months</li>
    <li>2–5 years: Surveillance every 6–12 months</li>
    <li>Assess for recurrence: dysphagia, weight loss, new pain</li>
  </ul>

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
        <td>Early-stage diagnosis</td>
        <td>5-year survival 60–70%</td>
      </tr>
      <tr>
        <td>Node-negative disease</td>
        <td>Improved outcomes</td>
      </tr>
      <tr>
        <td>Advanced/metastatic</td>
        <td>Survival &lt;1 year</td>
      </tr>
      <tr>
        <td>Adenocarcinoma vs SCC</td>
        <td>Adeno may respond better to targeted therapy</td>
      </tr>
    </tbody>
  </table>

  <h3>🌱 Prevention Tips</h3>
  <ul>
    <li>Quit smoking and limit alcohol</li>
    <li>Manage GERD aggressively</li>
    <li>Surveillance endoscopy for Barrett’s</li>
    <li>Avoid scalding hot beverages</li>
    <li>Eat a fiber-rich, antioxidant diet</li>
  </ul>

  <h3>🏥 At Sukam Speciality Clinic</h3>
  <ul>
    <li>Expert upper GI endoscopy with biopsy</li>
    <li>Multidisciplinary esophageal cancer board</li>
    <li>Stenting and nutritional support</li>
    <li>Minimally invasive esophagectomy (MIE)</li>
    <li>Comprehensive palliative and survivorship care</li>
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

export default Oesophagus;
