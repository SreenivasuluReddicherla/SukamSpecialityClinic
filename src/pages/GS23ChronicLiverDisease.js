import React, { useState } from 'react';
import './RP1InfertilityInsights.css';

const quizData = [
  {
    question: "Which of the following is not a cause of CLD?",
    options: ["Hepatitis B", "Gallbladder stone", "Alcohol", "NAFLD"],
    answer: "Gallbladder stone"
  },
  {
    question: "The liver shows fibrosis for how long to be termed CLD?",
    options: [">1 week", ">1 month", ">6 months", ">5 years"],
    answer: ">6 months"
  },
  {
    question: "First blood parameter to fall in cirrhosis:",
    options: ["ALT", "Platelets", "WBC", "ESR"],
    answer: "Platelets"
  },
  {
    question: "Early sign of portal hypertension:",
    options: ["Fatty stool", "Itching", "Splenomegaly", "Vomiting"],
    answer: "Splenomegaly"
  },
  {
    question: "NAFLD is most strongly linked to:",
    options: ["Tuberculosis", "Hypertension", "Metabolic syndrome", "GERD"],
    answer: "Metabolic syndrome"
  },
  {
    question: "FibroScan measures:",
    options: ["Enzyme levels", "Viral load", "Liver stiffness", "Blood pressure"],
    answer: "Liver stiffness"
  },
  {
    question: "Synthetic function of liver is reflected by:",
    options: ["ALT", "Bilirubin", "Albumin", "SGOT"],
    answer: "Albumin"
  },
  {
    question: "Drug to prevent variceal bleeding:",
    options: ["Aspirin", "Propranolol", "Amoxicillin", "Metformin"],
    answer: "Propranolol"
  },
  {
    question: "Hepatic encephalopathy presents with:",
    options: ["Fever", "Confusion", "Rash", "Edema"],
    answer: "Confusion"
  },
  {
    question: "Liver transplant is indicated when:",
    options: ["ALT is high", "MELD score >15", "Hepatitis A infection", "Nausea"],
    answer: "MELD score >15"
  },
  {
    question: "Alcohol-induced CLD is not improved by:",
    options: ["Multivitamins", "Abstinence", "Hydration", "Steroids"],
    answer: "Abstinence"
  },
  {
    question: "Ascites means:",
    options: ["Liver scarring", "Fluid in lungs", "Fluid in abdomen", "Jaundice"],
    answer: "Fluid in abdomen"
  },
  {
    question: "Which is a hepatotoxic drug?",
    options: [
      "Paracetamol (high dose)",
      "Ranitidine",
      "Amoxicillin",
      "Cefixime"
    ],
    answer: "Paracetamol (high dose)"
  },
  {
    question: "Cirrhosis can lead to:",
    options: ["Liver cancer", "Pancreatitis", "Kidney stone", "Thyroid nodules"],
    answer: "Liver cancer"
  },
  {
    question: "Liver detoxifies:",
    options: ["Blood", "Urine", "Food only", "Hormones and toxins"],
    answer: "Hormones and toxins"
  },
  {
    question: "Advanced liver disease has:",
    options: ["Low INR", "High albumin", "High bilirubin", "Low ALT"],
    answer: "High bilirubin"
  },
  {
    question: "Autoimmune hepatitis needs:",
    options: ["Antibiotics", "Steroids", "Surgery", "Iron tablets"],
    answer: "Steroids"
  },
  {
    question: "Fatigue in CLD is due to:",
    options: ["Anemia", "BP", "Muscle gain", "Flu"],
    answer: "Anemia"
  },
  {
    question: "Best diet in CLD:",
    options: [
      "High protein (compensated)",
      "Fried foods",
      "Keto",
      "Intermittent fasting"
    ],
    answer: "High protein (compensated)"
  },
  {
    question: "The term “compensated cirrhosis” means:",
    options: [
      "With symptoms",
      "No liver function left",
      "Liver damaged, but functioning",
      "Liver has recovered"
    ],
    answer: "Liver damaged, but functioning"
  }
];


const ChronicLiverDisease = () => {
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
      <h1>🟠 Chronic Liver Disease</h1>
      <p className="lead">“To love you need a lover; to live, you need a liver!”</p>

      <section className="info-section">
  <h3>💡 Why Chronic Liver Disease Deserves Our Attention</h3>
  <p>
    Chronic Liver Disease (CLD) isn’t just a single illness — it’s a progressive syndrome that slowly destroys the liver over months or years. In India, it is a leading cause of premature death, often going undetected until complications arise. 
    Alcohol use, fatty liver, hepatitis, and undiagnosed inflammation are frequent triggers.
  </p>
  <p>
    Today, CLD isn't just the hepatologist’s domain — family doctors, diabetologists, gynecologists, and even orthopedicians often encounter its early signs.
  </p>

  <h3>🧬 Where It Begins: The Origins of Damage</h3>
  <ul>
    <li>🧪 Hepatitis B or C from childhood injections or transfusions</li>
    <li>🍺 Chronic alcohol intake — even weekend binge drinking</li>
    <li>🍩 Metabolic syndrome — obesity, diabetes, PCOS, insulin resistance</li>
    <li>🔁 Autoimmune hepatitis — body attacking its own liver</li>
    <li>🧬 Inherited conditions — Wilson’s disease, Hemochromatosis</li>
    <li>💊 Drug toxicity — e.g., anti-TB drugs, steroids, methotrexate</li>
  </ul>
  <p>The liver tries to regenerate — until fibrotic scarring limits its functional ability.</p>

  <h3>😶 Why It’s So Often Missed</h3>
  <p>CLD is silent in early stages. Many patients:</p>
  <ul>
    <li>Look normal</li>
    <li>Eat and function normally</li>
    <li>Have no specific abdominal pain</li>
    <li>Experience only mild fatigue</li>
  </ul>
  <p>It’s often found during check-ups, infertility workups, or after complications arise (jaundice, ascites, bleeding).</p>

  <h3>📊 India’s Unique CLD Landscape</h3>
  <ul>
    <li>NAFLD (fatty liver) is now the top cause of CLD</li>
    <li>Alcohol-related liver disease is rising rapidly in rural/semi-urban areas</li>
    <li>Hepatitis B & C remain endemic</li>
    <li>30–40% present late — already in cirrhosis stage</li>
  </ul>

  <h3>🧏 How the Liver Speaks — If We Listen</h3>
  <table>
    <thead>
      <tr>
        <th>Stage</th>
        <th>Subtle Signs</th>
        <th>Clinical Features</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Early fibrosis</td>
        <td>Fatigue, vague heaviness</td>
        <td>Fatty liver, mildly abnormal LFTs</td>
      </tr>
      <tr>
        <td>Compensated cirrhosis</td>
        <td>No jaundice yet</td>
        <td>Splenomegaly, low platelets, early varices</td>
      </tr>
      <tr>
        <td>Decompensated</td>
        <td>Progressive symptoms</td>
        <td>Ascites, jaundice, GI bleeding, confusion</td>
      </tr>
      <tr>
        <td>End-stage</td>
        <td>Muscle loss, infection risk</td>
        <td>High MELD, transplant required</td>
      </tr>
    </tbody>
  </table>

  <h3>🔍 Tools That Uncover the Truth</h3>
  <ul>
    <li>🖥️ <strong>Ultrasound</strong>: Fatty liver, texture, spleen size</li>
    <li>🧪 <strong>FibroScan/Elastography</strong>: Non-invasive fibrosis staging</li>
    <li>🩸 <strong>LFTs</strong>: Can be normal despite advanced disease</li>
    <li>📉 <strong>Platelet count</strong>: Early drop due to portal hypertension</li>
    <li>🧬 <strong>INR, albumin</strong>: Reflect liver’s synthetic capacity</li>
    <li>🦠 <strong>Serology</strong>: Hepatitis B/C, autoimmune antibodies</li>
    <li>🧲 <strong>CT/MRI</strong>: Screen for hepatocellular carcinoma (HCC)</li>
    <li>🔍 <strong>Endoscopy</strong>: Varices in decompensated disease</li>
  </ul>

  <h3>🛠️ What Can Be Done — And When</h3>
  <h4>✅ Early Disease</h4>
  <ul>
    <li>🥗 Weight loss and lifestyle reversal of fatty liver</li>
    <li>🍷 Complete alcohol cessation</li>
    <li>💉 Hepatitis A & B vaccination</li>
    <li>🧪 Regular enzyme + fibrosis monitoring</li>
  </ul>
  <h4>⛑️ Moderate-to-Severe Disease</h4>
  <ul>
    <li>🧃 Sodium restriction for ascites</li>
    <li>💊 Diuretics and beta-blockers (variceal bleeding risk)</li>
    <li>❌ Avoid NSAIDs, steroids unless essential</li>
    <li>🧠 Lactulose for encephalopathy</li>
    <li>🔄 Transplant consideration for MELD &gt;15 or frequent admissions</li>
  </ul>

  <h3>🏥 At Our Clinic: What We Do Differently</h3>
  <ul>
    <li>🧬 Metabolic screening for all diabetics, PCOS, and hypertensives</li>
    <li>📈 On-site FibroScan for non-invasive liver staging</li>
    <li>👩‍⚕️ Dedicated liver clinic with specialist oversight</li>
    <li>🧃 Lifestyle and hepatoprotective medication protocol</li>
    <li>🤰 Collaborative gynecology assessment for CLD in pregnancy</li>
    <li>🫂 End-stage CLD care with palliative support model</li>
  </ul>

  <h3>🚨 The Missed Opportunity</h3>
  <p>
    When jaundice or ascites appears, 80–90% of liver function may already be lost.
    That’s why <strong>early detection</strong> and <strong>lifestyle intervention</strong> are not optional — they’re lifesaving.
  </p>
</section>

      <section className="quiz-section">
        <h2>🧠 Quick Quiz — Chronic Liver Disease</h2>

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

export default ChronicLiverDisease;
