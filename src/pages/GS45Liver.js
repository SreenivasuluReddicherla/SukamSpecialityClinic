
import React, { useState } from 'react';
import './RP1InfertilityInsights.css';

const quizData = [
  {
    question: "Most common type of liver cancer:",
    options: [
      "Cholangiocarcinoma",
      "Hepatocellular carcinoma",
      "Hemangioma",
      "Lymphoma"
    ],
    answer: "Hepatocellular carcinoma"
  },
  {
    question: "Key risk factor for HCC:",
    options: ["Hepatitis A", "Hepatitis B", "Typhoid", "Dengue"],
    answer: "Hepatitis B"
  },
  {
    question: "AFP is elevated in:",
    options: ["Cirrhosis only", "Viral hepatitis", "HCC", "Cholelithiasis"],
    answer: "HCC"
  },
  {
    question: "Triphasic CT finding in HCC:",
    options: [
      "Hypodense lesion",
      "Arterial enhancement with washout",
      "Calcification",
      "Cystic appearance"
    ],
    answer: "Arterial enhancement with washout"
  },
  {
    question: "HCC develops even in absence of cirrhosis in:",
    options: ["HCV", "Alcoholism", "HBV", "NAFLD"],
    answer: "HBV"
  },
  {
    question: "Curative treatment for small tumors <3 cm:",
    options: ["Chemotherapy", "RFA", "TACE", "Sorafenib"],
    answer: "RFA"
  },
  {
    question: "TACE stands for:",
    options: [
      "Targeted Axillary Cancer Evaluation",
      "Transarterial Chemoembolization",
      "Total Arterial Chemotherapy",
      "Transvenous Access for Chemotherapy"
    ],
    answer: "Transarterial Chemoembolization"
  },
  {
    question: "Child-Pugh score is used for:",
    options: [
      "Tumor staging",
      "Liver function assessment",
      "Imaging scoring",
      "Chemo response"
    ],
    answer: "Liver function assessment"
  },
  {
    question: "Best chance of cure in cirrhotic liver with small tumor:",
    options: ["Resection", "Transplant", "Chemotherapy", "Observation"],
    answer: "Transplant"
  },
  {
    question: "Milan criteria for transplant includes:",
    options: [
      "Any HCC <10 cm",
      "≤3 nodules <3 cm each, or 1 <5 cm",
      "AFP >1000",
      "Metastatic HCC"
    ],
    answer: "≤3 nodules <3 cm each, or 1 <5 cm"
  },
  {
    question: "Common site of metastasis from HCC:",
    options: ["Brain", "Bone", "Lung", "Colon"],
    answer: "Lung"
  },
  {
    question: "First-line systemic drug for advanced HCC:",
    options: ["Methotrexate", "Lenvatinib", "Imatinib", "Letrozole"],
    answer: "Lenvatinib"
  },
  {
    question: "Surveillance in cirrhotic patients includes:",
    options: [
      "CT every month",
      "MRI yearly",
      "USG + AFP every 6 months",
      "PET scan quarterly"
    ],
    answer: "USG + AFP every 6 months"
  },
  {
    question: "HCC is rarely associated with:",
    options: [
      "NAFLD",
      "Hepatitis C",
      "Cirrhosis",
      "Acute Hepatitis A"
    ],
    answer: "Acute Hepatitis A"
  },
  {
    question: "Aflatoxins are linked to:",
    options: ["Kidney failure", "HCC", "Colon cancer", "Brain tumor"],
    answer: "HCC"
  },
  {
    question: "Imaging feature of HCC on MRI:",
    options: [
      "T1 bright",
      "Peripheral rim enhancement",
      "Arterial hyperenhancement with washout",
      "Calcification"
    ],
    answer: "Arterial hyperenhancement with washout"
  },
  {
    question: "Immunotherapy approved for HCC includes:",
    options: ["Trastuzumab", "Atezolizumab", "Rituximab", "Bevacizumab alone"],
    answer: "Atezolizumab"
  },
  {
    question: "Which of the following is NOT a feature of cirrhosis?",
    options: [
      "Gynecomastia",
      "Palmar erythema",
      "Spider nevi",
      "Tactile hallucinations"
    ],
    answer: "Tactile hallucinations"
  },
  {
    question: "Preferred treatment in intermediate-stage disease:",
    options: ["Surgery", "TACE", "RFA", "Observation"],
    answer: "TACE"
  },
  {
    question: "Sign of portal hypertension in HCC:",
    options: ["Headache", "Ascites", "Cough", "Constipation"],
    answer: "Ascites"
  }
];

const Liver = () => {
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
      <h1>Carcinoma Liver (Hepatocellular Carcinoma – HCC)</h1>
      <p className="lead">“A silent invader in a diseased liver — vigilance can save life.”</p>

      <section className="info-section">
  <h3>🩺 What Is Primary Liver Cancer?</h3>

  <p>
    Primary liver cancer, or hepatocellular carcinoma (HCC), is a malignant tumor arising from hepatocytes—the main functional cells of the liver. It accounts for over 80–90% of primary liver malignancies. HCC typically develops in the setting of chronic liver disease, including cirrhosis from viral hepatitis (B and C), alcohol-related damage, or fatty liver, complicating both diagnosis and management.
  </p>

  <h3>🌍 Global & Indian Burden</h3>

  <ul>
    <li>6th most common cancer worldwide</li>
    <li>3rd leading cause of cancer-related death globally</li>
    <li>Rising incidence in India due to hepatitis B/C, NAFLD, and cirrhosis</li>
  </ul>

  <h3>⚠️ Major Risk Factors</h3>

  <table>
    <thead>
      <tr>
        <th>Risk Factor</th>
        <th>Mechanism / Notes</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Chronic Hepatitis B</td>
        <td>Direct viral oncogenesis, can occur without cirrhosis</td>
      </tr>
      <tr>
        <td>Chronic Hepatitis C</td>
        <td>Fibrosis and cirrhosis leading to malignant transformation</td>
      </tr>
      <tr>
        <td>Alcoholic Liver Disease</td>
        <td>Chronic inflammation and fibrosis</td>
      </tr>
      <tr>
        <td>NAFLD / NASH</td>
        <td>Metabolic syndrome–associated fatty liver progressing to cirrhosis</td>
      </tr>
      <tr>
        <td>Aflatoxin B₁</td>
        <td>Dietary toxin causing p53 mutations</td>
      </tr>
      <tr>
        <td>Genetic Disorders</td>
        <td>Hemochromatosis, Wilson’s disease</td>
      </tr>
      <tr>
        <td>Family History</td>
        <td>Inherited predisposition in some families</td>
      </tr>
    </tbody>
  </table>

  <h3>⚠️ Symptoms – Often Silent</h3>

  <ul>
    <li>Unexplained weight loss</li>
    <li>Right upper abdominal pain or fullness</li>
    <li>Loss of appetite, early satiety</li>
    <li>Fatigue and general weakness</li>
    <li>Ascites and abdominal swelling</li>
    <li>Jaundice, easy bruising/bleeding</li>
    <li>Fever, malaise</li>
    <li>Palpable liver mass or hepatomegaly</li>
  </ul>

  <h3>🔬 Clinical Examination</h3>

  <ul>
    <li>Cachexia, jaundice, ascites, edema</li>
    <li>Palpable liver edge or nodular mass</li>
    <li>Evidence of portal hypertension (splenomegaly, dilated veins)</li>
    <li>Stigmata of chronic liver disease (spider nevi, gynecomastia)</li>
  </ul>

  <h3>🔍 Diagnostic Workup</h3>

  <table>
    <thead>
      <tr>
        <th>Test</th>
        <th>Purpose</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>AFP (Alpha-fetoprotein)</td>
        <td>Tumor marker elevated in ~60% of HCC</td>
      </tr>
      <tr>
        <td>Liver Function Tests</td>
        <td>Assess synthetic and excretory capacity</td>
      </tr>
      <tr>
        <td>Ultrasound Abdomen</td>
        <td>Screening tool in at-risk patients</td>
      </tr>
      <tr>
        <td>Triphasic CT / MRI</td>
        <td>Characteristic arterial enhancement and washout</td>
      </tr>
      <tr>
        <td>Liver Biopsy</td>
        <td>Reserved for atypical imaging or low AFP</td>
      </tr>
      <tr>
        <td>Viral Markers</td>
        <td>HBsAg, anti-HCV to identify etiology</td>
      </tr>
      <tr>
        <td>FibroScan / Elastography</td>
        <td>Quantify fibrosis and cirrhosis stage</td>
      </tr>
    </tbody>
  </table>

  <h3>📊 TNM Staging (Simplified)</h3>

  <table>
    <thead>
      <tr>
        <th>Stage</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>I</td>
        <td>Solitary tumor, no vascular invasion</td>
      </tr>
      <tr>
        <td>II</td>
        <td>Multiple tumors ≤5 cm or vascular invasion</td>
      </tr>
      <tr>
        <td>III</td>
        <td>Large tumor with major vessel involvement or peritoneal spread</td>
      </tr>
      <tr>
        <td>IV</td>
        <td>Distant metastases (lung, bone, lymph nodes)</td>
      </tr>
    </tbody>
  </table>

  <h3>🛠️ Other Staging Tools</h3>

  <ul>
    <li>BCLC (Barcelona Clinic Liver Cancer) – guides treatment algorithms</li>
    <li>Child-Pugh Score – grades liver function (A/B/C)</li>
    <li>MELD Score – prioritizes transplant candidates</li>
  </ul>

  <h3>🩺 Treatment Options</h3>

  <ol>
    <li>
      <strong>Curative Therapies</strong>
      <ul>
        <li>Surgical Resection – for early HCC in non-cirrhotic or Child-Pugh A livers</li>
        <li>Liver Transplantation – best for early unresectable lesions within Milan criteria</li>
        <li>Radiofrequency Ablation (RFA) – for small tumors &lt;3 cm in nonoperative candidates</li>
      </ul>
    </li>
    <li>
      <strong>Locoregional Therapies</strong>
      <ul>
        <li>Transarterial Chemoembolization (TACE) – intermediate-stage HCC</li>
        <li>Transarterial Radioembolization (TARE) – when TACE is contraindicated</li>
        <li>Microwave Ablation (MWA) – alternative to RFA</li>
      </ul>
    </li>
    <li>
      <strong>Systemic Therapy</strong>
      <ul>
        <li>Multikinase Inhibitors: Sorafenib, Lenvatinib</li>
        <li>Immunotherapy + Anti-angiogenic: Atezolizumab + Bevacizumab</li>
        <li>Second-line Agents: Regorafenib, Cabozantinib, PD-L1 inhibitors</li>
      </ul>
    </li>
    <li>
      <strong>Palliative Care</strong>
      <ul>
        <li>Ascites management, pain control, nutritional support</li>
        <li>Psychosocial and end-of-life counseling</li>
      </ul>
    </li>
  </ol>

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
        <td>Early-stage, resectable HCC</td>
        <td>5-year survival &gt;70%</td>
      </tr>
      <tr>
        <td>Transplant within Milan criteria</td>
        <td>5-year survival ~80%</td>
      </tr>
      <tr>
        <td>Advanced/metastatic disease</td>
        <td>Median survival &lt;12 months</td>
      </tr>
      <tr>
        <td>High AFP, vascular invasion</td>
        <td>Poor prognosis</td>
      </tr>
    </tbody>
  </table>

  <h3>🌱 Prevention & Screening</h3>

  <table>
    <thead>
      <tr>
        <th>Action</th>
        <th>Target Group</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>HBV Vaccination</td>
        <td>All infants and high-risk adults</td>
      </tr>
      <tr>
        <td>Regular USG + AFP</td>
        <td>Cirrhotic patients every 6 months</td>
      </tr>
      <tr>
        <td>Antiviral Therapy</td>
        <td>Chronic HBV/HCV to reduce progression</td>
      </tr>
      <tr>
        <td>Lifestyle Modification</td>
        <td>Avoid alcohol, manage diabetes, control obesity</td>
      </tr>
      <tr>
        <td>Aflatoxin Avoidance</td>
        <td>Proper storage of grains and nuts</td>
      </tr>
    </tbody>
  </table>

  <h3>🏥 Sukam Speciality Clinic’s Role</h3>

  <ul>
    <li>AFP-based surveillance and imaging protocols for early detection</li>
    <li>Multidisciplinary liver tumor board for personalized planning</li>
    <li>Referral pathways for transplant evaluation</li>
    <li>Access to targeted systemic and locoregional therapies</li>
    <li>Comprehensive palliative care in collaboration with hepatology and oncology teams</li>
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

export default Liver;
