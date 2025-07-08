
import React, { useState } from 'react';
import './RP1InfertilityInsights.css';

const quizData = [
  {
    question: "Most common type of pancreatic cancer:",
    options: ["NET", "Acinar cell carcinoma", "Adenocarcinoma", "Lymphoma"],
    answer: "Adenocarcinoma"
  },
  {
    question: "Classic presentation of head of pancreas tumor:",
    options: ["Painful jaundice", "Painless jaundice", "Hypoglycemia", "Dysphagia"],
    answer: "Painless jaundice"
  },
  {
    question: "Courvoisier’s sign indicates:",
    options: [
      "Stone in bile duct",
      "Gallbladder rupture",
      "Palpable gallbladder with malignancy",
      "Gastritis"
    ],
    answer: "Palpable gallbladder with malignancy"
  },
  {
    question: "Tumor marker commonly elevated in pancreatic cancer:",
    options: ["AFP", "CA 125", "CEA", "CA 19-9"],
    answer: "CA 19-9"
  },
  {
    question: "Best imaging for staging pancreatic cancer:",
    options: ["Ultrasound", "MRI", "Triphasic CT (Pancreas protocol)", "X-ray"],
    answer: "Triphasic CT (Pancreas protocol)"
  },
  {
    question: "Surgery for pancreatic head tumors:",
    options: [
      "Distal pancreatectomy",
      "Whipple’s procedure",
      "Partial gastrectomy",
      "Hepatectomy"
    ],
    answer: "Whipple’s procedure"
  },
  {
    question: "Chemotherapy used postoperatively:",
    options: ["Methotrexate", "FOLFIRINOX", "Tamoxifen", "Letrozole"],
    answer: "FOLFIRINOX"
  },
  {
    question: "New-onset diabetes in elderly may indicate:",
    options: ["GERD", "Chronic pancreatitis", "Pancreatic cancer", "Appendicitis"],
    answer: "Pancreatic cancer"
  },
  {
    question: "ERCP is used in:",
    options: ["Liver biopsy", "Pancreatic biopsy", "Biliary stenting", "Blood culture"],
    answer: "Biliary stenting"
  },
  {
    question: "Main risk factor for pancreatic cancer:",
    options: ["GERD", "Smoking", "IBS", "Celiac disease"],
    answer: "Smoking"
  },
  {
    question: "Most common location of pancreatic cancer:",
    options: ["Tail", "Body", "Head", "Neck"],
    answer: "Head"
  },
  {
    question: "Pancreatic cancer usually presents at:",
    options: ["Stage I", "Early stages", "Advanced stage", "In situ"],
    answer: "Advanced stage"
  },
  {
    question: "Pain in pancreatic cancer classically radiates to:",
    options: ["Left arm", "Right leg", "Back", "Neck"],
    answer: "Back"
  },
  {
    question: "Best chance of cure is in:",
    options: [
      "Resectable tumors",
      "Metastatic disease",
      "Cirrhosis",
      "Chronic diarrhea"
    ],
    answer: "Resectable tumors"
  },
  {
    question: "Palliative procedure for jaundice in unresectable cases:",
    options: ["Cholecystectomy", "Splenectomy", "ERCP stenting", "Hemicolectomy"],
    answer: "ERCP stenting"
  },
  {
    question: "New targeted therapy for advanced pancreatic cancer:",
    options: [
      "Cetuximab",
      "Bevacizumab",
      "PARP inhibitors (in BRCA+)",
      "Rituximab"
    ],
    answer: "PARP inhibitors (in BRCA+)"
  },
  {
    question: "Symptom not typically seen in early pancreatic cancer:",
    options: ["Jaundice", "Weight loss", "Dysphagia", "Anorexia"],
    answer: "Dysphagia"
  },
  {
    question: "Whipple’s surgery includes removal of all EXCEPT:",
    options: ["Pancreatic head", "Duodenum", "Spleen", "Gallbladder"],
    answer: "Spleen"
  },
  {
    question: "Most important predictor of survival:",
    options: ["Gender", "AFP level", "Tumor resectability", "Pain severity"],
    answer: "Tumor resectability"
  },
  {
    question: "Key nutritional challenge in pancreatic cancer:",
    options: [
      "Vitamin B12 deficiency",
      "Protein overload",
      "Malabsorption due to enzyme deficiency",
      "Hyperkalemia"
    ],
    answer: "Malabsorption due to enzyme deficiency"
  }
];

const Pancreas = () => {
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
      <h1>Carcinoma Pancreas (Pancreatic Cancer)</h1>
      <p className="lead">“A quiet destroyer deep in the abdomen—early recognition changes fate.”</p>

      <section className="info-section">
  <h3>🩺 What Is Pancreatic Cancer?</h3>
  <p>
    Pancreatic cancer refers to the uncontrolled growth of malignant cells in the pancreas, 
    a vital organ behind the stomach that produces digestive enzymes and insulin. It’s 
    notoriously aggressive, often diagnosed late due to vague early symptoms and its deep 
    location, leading to a poor prognosis.
  </p>

  <h3>🔬 Types of Pancreatic Cancer</h3>
  <table>
    <thead>
      <tr><th>Type</th><th>Origin / Notes</th></tr>
    </thead>
    <tbody>
      <tr>
        <td>Adenocarcinoma (Exocrine)</td>
        <td>From ductal cells; &gt;90% of cases; highly aggressive</td>
      </tr>
      <tr>
        <td>Neuroendocrine Tumors (NETs)</td>
        <td>From endocrine islet cells; slower-growing, rarer</td>
      </tr>
      <tr>
        <td>Cystic Tumors (IPMN, MCN)</td>
        <td>From ductal epithelium; may be premalignant</td>
      </tr>
      <tr>
        <td>Acinar Cell Carcinoma</td>
        <td>From acinar cells; rare, poor prognosis</td>
      </tr>
    </tbody>
  </table>

  <h3>⚠️ Risk Factors</h3>
  <table>
    <thead>
      <tr><th>Category</th><th>Factors</th></tr>
    </thead>
    <tbody>
      <tr><td>Lifestyle</td><td>Smoking, alcohol, obesity, high-fat diet</td></tr>
      <tr><td>Medical</td><td>Chronic pancreatitis, diabetes mellitus</td></tr>
      <tr><td>Family History</td><td>BRCA mutations, Lynch syndrome, familial cases</td></tr>
      <tr><td>Environmental</td><td>Chemical exposures</td></tr>
      <tr><td>Demographics</td><td>Age &gt;60, slightly male-predominant</td></tr>
    </tbody>
  </table>

  <h3>📍 Common Symptoms</h3>
  <ul>
    <li>Painless jaundice (yellow skin/eyes)</li>
    <li>Dark urine, pale stools, pruritus</li>
    <li>Unexplained weight loss, anorexia</li>
    <li>Upper abdominal pain radiating to the back</li>
    <li>New-onset diabetes in older adults</li>
    <li>Fatigue, nausea</li>
    <li>Palpable gallbladder (Courvoisier’s sign)</li>
  </ul>

  <h3>🔬 Investigations</h3>
  <table>
    <thead>
      <tr><th>Test</th><th>Role</th></tr>
    </thead>
    <tbody>
      <tr><td>Ultrasound Abdomen</td><td>Initial screening; detects biliary dilation</td></tr>
      <tr><td>Contrast CT (Pancreas Protocol)</td><td>Best for mass detection and staging</td></tr>
      <tr><td>MRI / MRCP</td><td>Non-invasive ductal imaging</td></tr>
      <tr><td>EUS (Endoscopic Ultrasound)</td><td>High-resolution imaging + guided biopsy</td></tr>
      <tr><td>ERCP</td><td>Diagnosis and biliary stenting</td></tr>
      <tr><td>CA 19-9</td><td>Tumor marker; monitoring, not screening</td></tr>
      <tr><td>Biopsy / FNAC</td><td>Histological confirmation</td></tr>
    </tbody>
  </table>

  <h3>🗂️ TNM and Staging (AJCC)</h3>
  <table>
    <thead>
      <tr><th>Stage</th><th>Description</th></tr>
    </thead>
    <tbody>
      <tr><td>Resectable</td><td>Confined to pancreas; no major vessel invasion</td></tr>
      <tr><td>Borderline Resectable</td><td>Limited vascular involvement; may need neoadjuvant therapy</td></tr>
      <tr><td>Locally Advanced</td><td>Major vessel encasement; unresectable</td></tr>
      <tr><td>Metastatic</td><td>Spread to liver, lungs, peritoneum</td></tr>
    </tbody>
  </table>

  <h3>🧬 Tumor Marker: CA 19-9</h3>
  <p>
    CA 19-9 is elevated in most pancreatic adenocarcinomas and useful for monitoring treatment response. It’s not a screening tool, as levels can rise in cholangitis or obstruction.
  </p>

  <h3>🧰 Treatment Options</h3>
  <ol>
    <li>
      <strong>Surgery</strong> (only curative option)
      <ul>
        <li>Whipple’s (pancreaticoduodenectomy): head tumors</li>
        <li>Distal pancreatectomy: body/tail tumors</li>
        <li>Total pancreatectomy: extensive disease</li>
        <li>Mandatory lymph node dissection</li>
      </ul>
    </li>
    <li>
      <strong>Neoadjuvant Therapy</strong> – Chemo ± radiation for borderline cases to shrink tumor
    </li>
    <li>
      <strong>Adjuvant Therapy</strong> – Post-op chemo (Gemcitabine or FOLFIRINOX) to reduce recurrence
    </li>
    <li>
      <strong>Palliative Care</strong> – ERCP stenting for jaundice, celiac plexus block for pain, 
      chemo regimens, enzyme supplements, nutrition & psychosocial support
    </li>
  </ol>

  <h3>📊 Prognosis</h3>
  <table>
    <thead>
      <tr><th>Factor</th><th>Outcome</th></tr>
    </thead>
    <tbody>
      <tr><td>Resectable / early stage</td><td>5-year survival ~20–30%</td></tr>
      <tr><td>Locally advanced</td><td>Median survival ~6–12 months</td></tr>
      <tr><td>Metastatic disease</td><td>Median survival ~4–6 months without treatment</td></tr>
      <tr><td>Node / vascular invasion</td><td>Worse prognosis</td></tr>
    </tbody>
  </table>

  <h3>🌱 Prevention Strategies</h3>
  <ul>
    <li>Avoid smoking and excessive alcohol</li>
    <li>Maintain healthy weight and diet rich in fiber, antioxidants</li>
    <li>Manage chronic pancreatitis and diabetes</li>
    <li>Genetic testing and surveillance in high-risk families</li>
  </ul>

  <h3>🏥 Sukam Speciality Clinic’s Role</h3>
  <ul>
    <li>Pancreas-protocol CT & MRI evaluation</li>
    <li>Endoscopic ultrasound biopsy and ERCP stenting</li>
    <li>Collaboration with GI oncology and HPB surgeons</li>
    <li>Palliative symptom management and dietary support</li>
    <li>Referral for Whipple’s procedure when appropriate</li>
    <li>Emotional and end-of-life care services</li>
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

export default Pancreas;
