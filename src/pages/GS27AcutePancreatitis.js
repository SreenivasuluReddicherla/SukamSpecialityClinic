import React, { useState } from 'react';
import './RP1InfertilityInsights.css';

const quizData = [
  {
    question: "Key diagnostic enzyme:",
    options: ["AST", "Lipase", "Ammonia", "GGT"],
    answer: "Lipase"
  },
  {
    question: "Most common causes of acute pancreatitis:",
    options: ["Hepatitis & TB", "Gallstones & alcohol", "Cystic fibrosis", "Viral flu"],
    answer: "Gallstones & alcohol"
  },
  {
    question: "Cullen’s sign indicates:",
    options: ["Mild pancreatitis", "Internal bleeding", "Viral hepatitis", "Duodenal ulcer"],
    answer: "Internal bleeding"
  },
  {
    question: "Pain of pancreatitis radiates to:",
    options: ["Left leg", "Back", "Neck", "Chest"],
    answer: "Back"
  },
  {
    question: "Serum calcium in severe pancreatitis:",
    options: ["High", "Normal", "Low", "Unchanged"],
    answer: "Low"
  },
  {
    question: "First imaging modality:",
    options: ["CT", "USG", "MRI", "X-ray"],
    answer: "USG"
  },
  {
    question: "ERCP is done when:",
    options: ["In all cases", "Gallstone obstruction present", "Patient has viral cause", "Pain is mild"],
    answer: "Gallstone obstruction present"
  },
  {
    question: "Best nutrition strategy:",
    options: ["TPN for all", "Early oral feeding if tolerated", "No food for 10 days", "Only IV glucose"],
    answer: "Early oral feeding if tolerated"
  },
  {
    question: "Which drug may cause pancreatitis?",
    options: ["Paracetamol", "Azathioprine", "Ranitidine", "Metformin"],
    answer: "Azathioprine"
  },
  {
    question: "Pseudocyst usually forms:",
    options: ["In 2–3 days", "After 4–6 weeks", "Within hours", "Never"],
    answer: "After 4–6 weeks"
  },
  {
    question: "Infected necrosis needs:",
    options: ["Steroids", "Surgical or endoscopic drainage", "Fluids only", "Diet control"],
    answer: "Surgical or endoscopic drainage"
  },
  {
    question: "Ranson’s score predicts:",
    options: ["Etiology", "Need for surgery", "Mortality", "Calcium levels"],
    answer: "Mortality"
  },
  {
    question: "High CRP indicates:",
    options: ["Viral infection", "Mild illness", "Severe inflammation", "Fungal infection"],
    answer: "Severe inflammation"
  },
  {
    question: "Common complication:",
    options: ["Hepatitis", "Pancreatic pseudocyst", "Gallbladder rupture", "Varices"],
    answer: "Pancreatic pseudocyst"
  },
  {
    question: "Pain relief drug:",
    options: ["Paracetamol", "Morphine", "Diazepam", "Aspirin"],
    answer: "Morphine"
  },
  {
    question: "Alcoholic pancreatitis often leads to:",
    options: ["Hepatic coma", "Cirrhosis", "Chronic pancreatitis", "Viral hepatitis"],
    answer: "Chronic pancreatitis"
  },
  {
    question: "Amylase remains high for:",
    options: ["1–2 hours", "1 day", "3–5 days", "2 weeks"],
    answer: "3–5 days"
  },
  {
    question: "If ileus develops:",
    options: ["Start oral feeding", "Insert NG tube", "Push laxatives", "Give antibiotics"],
    answer: "Insert NG tube"
  },
  {
    question: "First priority in ER:",
    options: ["CT scan", "IV fluids", "Enema", "Antacids"],
    answer: "IV fluids"
  },
  {
    question: "Role of cholecystectomy:",
    options: ["Avoids ERCP", "Prevents recurrent gallstone pancreatitis", "Worsens pain", "Stops enzyme production"],
    answer: "Prevents recurrent gallstone pancreatitis"
  }
];

const AcutePancreatitis = () => {
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
      <h1>🟠 Acute Pancreatitis</h1>
      <p className="lead">“A fiery flare-up deep in your belly.”</p>

      <section className="info-section">
  <h3>🌪️ A Dangerous Storm Within</h3>
  <p>
    Acute pancreatitis is a sudden inflammatory attack of the pancreas — an organ crucial for digesting food and regulating blood sugar.
    When triggered, the pancreas turns its own digestive enzymes against itself, causing self-digestion, severe pain, tissue destruction, and, in some cases, multi-organ failure.
    It can range from mild discomfort to a rapidly fatal condition, requiring careful monitoring, intensive care, and targeted management.
    What makes it more dangerous is how suddenly it strikes — often without prior warning.
  </p>

  <h3>🧪 Why Does the Pancreas Go Rogue?</h3>
  <p>Under normal conditions, the pancreas produces enzymes that activate only in the small intestine. In pancreatitis, these enzymes activate too early and damage the pancreas itself.</p>
  <p><strong>Most common causes:</strong></p>
  <ul>
    <li>Gallstones (blocking the pancreatic duct)</li>
    <li>Alcohol (toxic to pancreatic cells)</li>
  </ul>
  <p><strong>Other causes include:</strong></p>
  <ul>
    <li>Hypertriglyceridemia, hypercalcemia</li>
    <li>ERCP trauma, pancreatic tumors</li>
    <li>Certain drugs (azathioprine, valproate)</li>
    <li>Autoimmune pancreatitis, viral infections (mumps, coxsackievirus)</li>
    <li>Trauma, especially in children</li>
    <li>Idiopathic (unknown in ~20%)</li>
  </ul>

  <h3>⚠️ Sudden Onset, Severe Pain</h3>
  <ul>
    <li>Severe epigastric pain, radiating to back</li>
    <li>Pain worsened by food, relieved on leaning forward</li>
    <li>Nausea, vomiting, abdominal tenderness/distension</li>
    <li>Fever, rapid pulse</li>
    <li>Cullen’s sign (around navel), Grey-Turner sign (flanks) in severe cases</li>
    <li>Shock or sepsis in advanced stages</li>
  </ul>

  <h3>🔬 Biochemical & Radiologic Diagnosis</h3>
  <ul>
    <li><strong>Blood tests:</strong> Elevated serum amylase/lipase, CRP, WBC, low calcium</li>
    <li><strong>Liver tests:</strong> LFTs for gallstone-related causes</li>
    <li><strong>Imaging:</strong> 
      <ul>
        <li>Ultrasound – to detect gallstones</li>
        <li>CECT – for necrosis, pseudocysts</li>
        <li>MRCP – for biliary duct obstruction</li>
      </ul>
    </li>
  </ul>

  <h3>📊 Clinical Scoring — How Severe Is It?</h3>
  <ul>
    <li><strong>Ranson’s Criteria</strong> – mortality prediction</li>
    <li><strong>BISAP Score</strong> – bedside severity score</li>
    <li><strong>CT Severity Index</strong> – imaging-based classification</li>
    <li><strong>APACHE II, Marshall Score</strong> – ICU and organ dysfunction monitoring</li>
  </ul>

  <h3>🩺 Treatment: Gentle Support Over Aggression</h3>
  <p>There’s no cure — just supportive care until recovery.</p>
  <ul>
    <li><strong>NPO:</strong> No food to rest the gut</li>
    <li><strong>IV fluids:</strong> Lactated Ringer’s for resuscitation</li>
    <li><strong>Pain relief:</strong> Opioids (fentanyl, morphine)</li>
    <li><strong>Antiemetics:</strong> For nausea/vomiting</li>
    <li><strong>Monitor vitals, electrolytes, urine output</strong></li>
  </ul>
  <h4>Nutrition</h4>
  <ul>
    <li><strong>Mild:</strong> Oral feeding after 48–72 hrs</li>
    <li><strong>Severe:</strong> Enteral via NJ tube (TPN if not feasible)</li>
  </ul>
  <h4>Antibiotics</h4>
  <ul>
    <li>Only if infection (e.g., necrosis, sepsis, cholangitis)</li>
  </ul>
  <h4>Interventions</h4>
  <ul>
    <li>ERCP for gallstone cholangitis</li>
    <li>Drainage of abscess/pseudocyst via surgery or PCD</li>
    <li>ICU care for organ failure</li>
  </ul>

  <h3>⏳ Complications That May Arise</h3>
  <h4>Local:</h4>
  <ul>
    <li>Pancreatic necrosis (infected or sterile)</li>
    <li>Pseudocyst, pancreatic abscess, hemorrhage</li>
    <li>Pancreatic ascites, fistulas</li>
  </ul>
  <h4>Systemic:</h4>
  <ul>
    <li>ARDS, renal failure, hypocalcemia</li>
    <li>Shock, sepsis, DIC</li>
  </ul>

  <h3>🏥 Clinical Pathway at Our Center</h3>
  <ul>
    <li>✅ Serum amylase-lipase + USG within 1 hour</li>
    <li>✅ IV fluid resuscitation protocol</li>
    <li>✅ Opioid-based pain control</li>
    <li>✅ Early triage for gallstone pancreatitis and ERCP</li>
    <li>✅ CECT within 72 hrs if worsening</li>
    <li>✅ ICU referral/surgical tie-ups for severe cases</li>
    <li>✅ Post-discharge monitoring for pseudocysts, alcohol cessation, nutrition</li>
  </ul>

  <h3>📚 Important Teaching Points</h3>
  <ul>
    <li>Lipase &gt; amylase for diagnosis</li>
    <li>Laparoscopic cholecystectomy advised during same admission if gallstones</li>
    <li>Alcohol-induced cases may recur — counsel for cessation</li>
    <li>Early enteral nutrition improves outcomes</li>
    <li>Prophylactic antibiotics are harmful — only use if infection</li>
  </ul>

  <h3>🔄 Long-Term Outlook</h3>
  <p>
    Most patients recover fully, but some may develop:
  </p>
  <ul>
    <li>Chronic pancreatitis (especially alcohol-related)</li>
    <li>Pseudocyst needing endoscopic or surgical drainage</li>
    <li>Exocrine or endocrine insufficiency (enzymes, insulin)</li>
  </ul>
  <p>🚫 Avoid recurrence with lifestyle change — no alcohol, low-fat diet, gallbladder surgery when needed.</p>
</section>


      <section className="quiz-section">
        <h2>🧠 Quick Quiz — Acute Pancreatitis</h2>

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

export default AcutePancreatitis;
