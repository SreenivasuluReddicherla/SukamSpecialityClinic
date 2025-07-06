import React, { useState } from 'react';
import './RP1InfertilityInsights.css';

const quizData = [
  {
    question: "Which type of bilirubin is elevated in obstructive jaundice?",
    options: ["Unconjugated", "Conjugated", "Indirect", "Total only"],
    answer: "Conjugated"
  },
  {
    question: "Pale stools are caused by:",
    options: ["Excess iron", "Dehydration", "Lack of bile pigment", "Fatty diet"],
    answer: "Lack of bile pigment"
  },
  {
    question: "The most common benign cause of obstructive jaundice:",
    options: ["Pancreatic tumor", "Hepatitis", "Gallstones", "Tuberculosis"],
    answer: "Gallstones"
  },
  {
    question: "Which investigation is both diagnostic and therapeutic?",
    options: ["MRCP", "Ultrasound", "ERCP", "Liver biopsy"],
    answer: "ERCP"
  },
  {
    question: "Pruritus in jaundice is due to:",
    options: ["Dehydration", "Bile salts in skin", "Uric acid", "Liver enzymes"],
    answer: "Bile salts in skin"
  },
  {
    question: "Tumor marker for pancreaticobiliary malignancy:",
    options: ["AFP", "CA 19-9", "PSA", "CEA"],
    answer: "CA 19-9"
  },
  {
    question: "Courvoisier’s sign indicates:",
    options: ["Gallstones", "Liver abscess", "Malignant obstructive jaundice", "Hemolytic anemia"],
    answer: "Malignant obstructive jaundice"
  },
  {
    question: "Which enzyme is typically raised in obstructive jaundice?",
    options: ["SGPT", "GGT", "Amylase", "Creatinine"],
    answer: "GGT"
  },
  {
    question: "In obstructive jaundice, urine appears:",
    options: ["Milky", "Tea-colored", "Bright red", "Clear"],
    answer: "Tea-colored"
  },
  {
    question: "First-line imaging test:",
    options: ["MRI", "Ultrasound", "CT", "PET"],
    answer: "Ultrasound"
  },
  {
    question: "A stent is inserted during:",
    options: ["PTC", "Liver biopsy", "ERCP", "Colonoscopy"],
    answer: "ERCP"
  },
  {
    question: "Which of the following is a malignant cause?",
    options: ["Pancreatic head tumor", "Gallstone", "Ascaris", "Sclerosing cholangitis"],
    answer: "Pancreatic head tumor"
  },
  {
    question: "Ampullary tumors affect:",
    options: ["Pancreas only", "Liver", "Junction of bile and pancreatic ducts", "Spleen"],
    answer: "Junction of bile and pancreatic ducts"
  },
  {
    question: "Prolonged jaundice may lead to:",
    options: ["Anemia", "Vitamin K deficiency", "Hyperkalemia", "Hyperthyroidism"],
    answer: "Vitamin K deficiency"
  },
  {
    question: "In ERCP, stones can be:",
    options: ["Visualized only", "Removed", "Burned", "Transplanted"],
    answer: "Removed"
  },
  {
    question: "MRCP is preferred because:",
    options: ["It’s invasive", "It uses contrast", "It gives 3D images of bile ducts", "It’s done during surgery"],
    answer: "It gives 3D images of bile ducts"
  },
  {
    question: "Fever, jaundice, RUQ pain =",
    options: ["Charcot’s triad", "Beck’s triad", "Murphy’s triad", "Cushing’s triad"],
    answer: "Charcot’s triad"
  },
  {
    question: "Post-cholecystectomy bile leak causes:",
    options: ["Hematuria", "Ascites", "Biloma", "Hepatomegaly"],
    answer: "Biloma"
  },
  {
    question: "Malignant jaundice is usually:",
    options: ["Intermittent", "Mild", "Painless and progressive", "Associated with itching only"],
    answer: "Painless and progressive"
  },
  {
    question: "ERCP is not done when:",
    options: ["Patient has bleeding tendency", "Jaundice is present", "Mass is suspected", "Bilirubin is high"],
    answer: "Patient has bleeding tendency"
  }
];


const ObstructiveJaundice = () => {
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
      <h1>🟠 Obstructive Jaundice</h1>
      <p className="lead">“Bile backs up, and your eyes show the story.”</p>

      <section className="info-section">
  <h3>🧬 Understanding the Basics — It’s More Than Just "Jaundice"</h3>
  <p>
    Jaundice is not a disease—it’s a sign. In <strong>obstructive jaundice</strong>, a mechanical blockage prevents bile from draining properly through the biliary system. The result is a buildup of conjugated bilirubin in the blood, leading to yellowing of the skin, eyes, and mucous membranes.
  </p>
  <p>
    Unlike hepatocellular jaundice (from liver damage), in obstructive jaundice, the liver remains structurally intact but is blocked somewhere along the biliary pathway.
  </p>

  <h3>🛣️ The Biliary Highway — Where Can It Get Blocked?</h3>
  <p><strong>Bile Flow:</strong> Liver → Intrahepatic ducts → Common Hepatic Duct → Common Bile Duct → Ampulla of Vater → Duodenum</p>
  <ul>
    <li><strong>Intrahepatic:</strong> PSC, metastases</li>
    <li><strong>Extrahepatic:</strong> CBD stones, strictures, cholangiocarcinoma</li>
    <li><strong>Ampullary compression:</strong> Pancreatic head tumors</li>
  </ul>

  <h3>🧪 Common Etiologies — Categorized by Cause</h3>
  <h4>🔹 Benign Causes:</h4>
  <ul>
    <li>Gallstones (choledocholithiasis)</li>
    <li>Post-surgical strictures</li>
    <li>Chronic pancreatitis</li>
    <li>PSC (Primary Sclerosing Cholangitis)</li>
    <li>Parasitic infections (Ascaris, liver flukes)</li>
  </ul>
  <h4>🔸 Malignant Causes:</h4>
  <ul>
    <li>Pancreatic head carcinoma</li>
    <li>Cholangiocarcinoma</li>
    <li>Ampullary carcinoma</li>
    <li>Gallbladder cancer</li>
    <li>Porta hepatis lymphadenopathy (metastatic)</li>
  </ul>
  <p>⚠️ In patients &gt;60 with painless jaundice, always suspect malignancy first.</p>

  <h3>🚨 Clinical Red Flags — Recognizing Obstructive Jaundice</h3>
  <ul>
    <li>Yellowing of eyes/skin (scleral icterus)</li>
    <li>Dark urine (conjugated bilirubin)</li>
    <li>Clay-colored stools (lack of bile pigments)</li>
    <li>Severe itching (bile salts in skin)</li>
    <li>Fever and chills (suggest cholangitis)</li>
    <li>Weight loss, anorexia (in malignancy)</li>
    <li>RUQ abdominal pain (colicky or dull)</li>
  </ul>

  <h3>🧬 Diagnostic Work-Up — From Suspicion to Source</h3>
  <h4>🔍 Blood Investigations:</h4>
  <ul>
    <li>LFT: High conjugated bilirubin, ALP, GGT</li>
    <li>Mildly raised AST/ALT</li>
    <li>Prolonged PT (Vitamin K malabsorption)</li>
    <li>CA 19-9, CEA: If malignancy suspected</li>
  </ul>

  <h4>🩻 Imaging Modalities:</h4>
  <ul>
    <li><strong>Ultrasound:</strong> First-line for duct dilation, stones</li>
    <li><strong>MRCP:</strong> Non-invasive gold standard for bile duct anatomy</li>
    <li><strong>CT Abdomen:</strong> Mass lesion detection</li>
    <li><strong>ERCP:</strong> Diagnostic & therapeutic</li>
    <li><strong>PTC:</strong> Used when ERCP not feasible</li>
    <li><strong>EUS:</strong> High-res for ampullary/pancreatic masses</li>
  </ul>
  <p>✨ Sequence: USG → MRCP → ERCP/EUS/CT depending on clinical suspicion</p>

  <h3>🩺 Therapeutic Strategy — Cause-Driven, Not Just Symptom-Driven</h3>
  <h4>Step 1: Stabilize Patient</h4>
  <ul>
    <li>IV fluids & electrolytes</li>
    <li>Vitamin K if PT is prolonged</li>
    <li>Antibiotics if cholangitis suspected</li>
    <li>Nutrition support (oral/TPN)</li>
  </ul>

  <h4>Step 2: Relieve Obstruction</h4>
  <h5>✅ Gallstone-Related:</h5>
  <ul>
    <li>ERCP + sphincterotomy + stone extraction</li>
    <li>Cholecystectomy after recovery</li>
  </ul>
  <h5>✅ Benign Stricture:</h5>
  <ul>
    <li>Balloon dilatation + stenting (ERCP)</li>
    <li>Surgical bypass if recurrent</li>
  </ul>
  <h5>✅ Malignant Causes:</h5>
  <ul>
    <li>ERCP stenting (palliation)</li>
    <li>Surgical resection (e.g., Whipple for ampullary/pancreatic cancer)</li>
    <li>Oncology referral for chemo/radiotherapy</li>
  </ul>

  <h3>🏥 How We Manage at Sukam Specialty Clinic</h3>
  <ul>
    <li>✅ Same-day liver panel + point-of-care ultrasound</li>
    <li>✅ Clinical triage: gallstone vs malignancy vs infection</li>
    <li>✅ Quick referral to ERCP/MRCP centers</li>
    <li>✅ Nutrition support and vitamin correction</li>
    <li>✅ Family education and counseling sessions</li>
    <li>✅ Continued monitoring for patients post-stenting or surgery</li>
  </ul>

  <h3>📌 Important Clinical Pearls</h3>
  <ul>
    <li>Conjugated bilirubin = dark urine</li>
    <li>No bile in intestines = pale stools</li>
    <li>Courvoisier’s sign = painless jaundice + palpable gallbladder = malignancy</li>
    <li>Obstruction &gt; weeks → secondary biliary cirrhosis</li>
    <li>Malignancy is top differential in elderly with painless jaundice</li>
  </ul>

  <h3>📚 Case Capsule</h3>
  <p><strong>Patient:</strong> 64-year-old male with yellowing, pruritus, dark urine, 5 kg weight loss</p>
  <ul>
    <li>✅ Ultrasound → Dilated CBD, mass near ampulla</li>
    <li>✅ MRCP → Confirmed ampullary obstruction</li>
    <li>✅ CA 19-9 elevated</li>
    <li>✅ ERCP stent placed for decompression</li>
    <li>✅ Referred for Whipple — Histology confirmed ampullary carcinoma</li>
    <li>✅ 6-month follow-up: Bilirubin normalized, good recovery</li>
  </ul>
</section>


      <section className="quiz-section">
        <h2>🧠 Quick Quiz — Obstructive Jaundice</h2>

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

export default ObstructiveJaundice;
