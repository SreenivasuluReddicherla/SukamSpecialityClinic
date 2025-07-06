import React, { useState } from 'react';
import './RP1InfertilityInsights.css';

const quizData = [
  {
    question: "Fatty liver means excess fat in:",
    options: ["Pancreas", "Heart", "Liver", "Lungs"],
    answer: "Liver"
  },
  {
    question: "NAFLD stands for:",
    options: [
      "Non-Acid Fatty Liver Disease",
      "Non-Alcoholic Fatty Liver Disease",
      "No Alcohol Fat Lipid Disease",
      "None"
    ],
    answer: "Non-Alcoholic Fatty Liver Disease"
  },
  {
    question: "Most fatty liver patients are:",
    options: ["Symptomatic", "Asymptomatic", "Jaundiced", "Bleeding"],
    answer: "Asymptomatic"
  },
  {
    question: "Best screening tool:",
    options: ["Endoscopy", "Ultrasound", "Liver biopsy", "MRI brain"],
    answer: "Ultrasound"
  },
  {
    question: "Reversible stage:",
    options: ["Cirrhosis", "Fibrosis", "Steatosis", "HCC"],
    answer: "Steatosis"
  },
  {
    question: "Common cause of NAFLD:",
    options: ["Tuberculosis", "Obesity", "Typhoid", "Anemia"],
    answer: "Obesity"
  },
  {
    question: "NASH is:",
    options: [
      "A virus",
      "Inflammation with fat in liver",
      "A parasite",
      "A bile duct block"
    ],
    answer: "Inflammation with fat in liver"
  },
  {
    question: "Symptom not seen in early fatty liver:",
    options: ["Fatigue", "Weight loss", "Right upper pain", "Yellow eyes"],
    answer: "Yellow eyes"
  },
  {
    question: "Best diet modification:",
    options: ["Fried food daily", "Refined carbs", "Fiber-rich diet", "Soda"],
    answer: "Fiber-rich diet"
  },
  {
    question: "Alcoholic fatty liver requires:",
    options: ["Antibiotics", "Steroids", "Stopping alcohol", "Insulin"],
    answer: "Stopping alcohol"
  },
  {
    question: "Test to assess liver stiffness:",
    options: ["ECG", "FibroScan", "EEG", "Pap smear"],
    answer: "FibroScan"
  },
  {
    question: "Elevated liver enzymes:",
    options: ["ALT, AST", "ALP, PSA", "BUN, creatinine", "Hemoglobin"],
    answer: "ALT, AST"
  },
  {
    question: "Fibrosis means:",
    options: ["Infection", "Fat only", "Scarring", "Bleeding"],
    answer: "Scarring"
  },
  {
    question: "One supplement used:",
    options: ["Iron", "Vitamin E", "Cortisol", "Estrogen"],
    answer: "Vitamin E"
  },
  {
    question: "GLP-1 analogs are useful in:",
    options: [
      "Hypertension",
      "Liver cancer",
      "Diabetes-related fatty liver",
      "Asthma"
    ],
    answer: "Diabetes-related fatty liver"
  },
  {
    question: "Advanced fatty liver can lead to:",
    options: ["Cirrhosis", "Piles", "Fracture", "Brain fog"],
    answer: "Cirrhosis"
  },
  {
    question: "NAFLD can occur in:",
    options: [
      "Only alcoholics",
      "Only diabetics",
      "Lean people too",
      "Only females"
    ],
    answer: "Lean people too"
  },
  {
    question: "A correct lifestyle advice:",
    options: [
      "Eat fried snacks",
      "Avoid walking",
      "Increase sugar",
      "Walk 30 min/day"
    ],
    answer: "Walk 30 min/day"
  },
  {
    question: "Statins in fatty liver are:",
    options: [
      "Harmful",
      "Contraindicated",
      "Useful in dyslipidemia",
      "Illegal"
    ],
    answer: "Useful in dyslipidemia"
  },
  {
    question: "Which is NOT a typical risk factor?",
    options: ["Diabetes", "Sedentary life", "Obesity", "Asthma"],
    answer: "Asthma"
  }
];


const FattyLiver = () => {
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
      <h1>🟠 Fatty Liver</h1>
      <p className="lead">“A silent overload that weighs down your liver.”</p>

      <section className="info-section">
  <h3>🫀 The Silent Storage Problem</h3>
  <p>
    Fatty liver, medically known as <strong>hepatic steatosis</strong>, occurs when fat accumulates inside liver cells, interfering with normal function. Initially silent, this buildup can progress to inflammation (NASH), fibrosis, cirrhosis, or even liver cancer if left unmanaged. It's increasingly common due to lifestyle-related risk factors like obesity, diabetes, and poor diet.
  </p>

  <h3>📚 The Two Broad Categories</h3>
  <table>
    <thead>
      <tr>
        <th>Type</th>
        <th>Explanation</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>NAFLD (Non-Alcoholic Fatty Liver Disease)</td>
        <td>Fat accumulation without significant alcohol use; linked to obesity, diabetes, and metabolic syndrome.</td>
      </tr>
      <tr>
        <td>AFLD (Alcoholic Fatty Liver Disease)</td>
        <td>Result of excessive alcohol consumption leading to fat buildup and liver inflammation.</td>
      </tr>
    </tbody>
  </table>
  <p><strong>MAFLD</strong> (Metabolic-Associated Fatty Liver Disease) is now a newer term that includes metabolic contributors irrespective of alcohol intake.</p>

  <h3>⚠️ Who Is at Risk?</h3>
  <ul>
    <li>Overweight or obese individuals</li>
    <li>People with type 2 diabetes or insulin resistance</li>
    <li>High cholesterol or triglyceride levels</li>
    <li>Sedentary lifestyle and poor dietary habits</li>
    <li>Excessive alcohol use</li>
    <li>PCOS, thyroid disorders, and even “lean NAFLD” with poor lifestyle</li>
  </ul>

  <h3>🩺 How It Shows Up (or Doesn’t)</h3>
  <p>Most people with fatty liver have <strong>no symptoms</strong>. When present, they may include:</p>
  <ul>
    <li>Mild upper right abdominal discomfort</li>
    <li>Fatigue or heaviness post meals</li>
    <li>In advanced cases: jaundice, swelling, confusion, or weight loss</li>
  </ul>

  <h3>🔬 How Is It Diagnosed?</h3>
  <table>
    <thead>
      <tr>
        <th>Test</th>
        <th>Role</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Liver Function Tests (LFTs)</td>
        <td>Mildly raised ALT/AST in some cases</td>
      </tr>
      <tr>
        <td>Ultrasound Abdomen</td>
        <td>Most common first-line tool showing “bright liver”</td>
      </tr>
      <tr>
        <td>FibroScan (Elastography)</td>
        <td>Assesses liver fat and stiffness (fibrosis)</td>
      </tr>
      <tr>
        <td>MRI or CT</td>
        <td>Advanced imaging to assess liver detail</td>
      </tr>
      <tr>
        <td>Liver Biopsy</td>
        <td>Used selectively for staging if unclear</td>
      </tr>
      <tr>
        <td>Metabolic Panel</td>
        <td>Includes lipid profile, HbA1c, insulin resistance</td>
      </tr>
    </tbody>
  </table>

  <h3>📉 How Bad Can It Get?</h3>
  <ol>
    <li><strong>Simple Steatosis</strong> – Fat only (reversible)</li>
    <li><strong>NASH</strong> – Inflammation with fat, ± scarring</li>
    <li><strong>Fibrosis</strong> – Early scar tissue forms</li>
    <li><strong>Cirrhosis</strong> – Permanent scarring and loss of function</li>
    <li><strong>HCC (Liver Cancer)</strong> – Risk increases with cirrhosis</li>
  </ol>

  <h3>🔄 Reversing the Damage</h3>
  <p><strong>Good news:</strong> Early fatty liver is reversible with lifestyle changes:</p>
  <ul>
    <li>🏋️ Target 7–10% weight loss</li>
    <li>🚶‍♂️ Daily 30–45 minutes of brisk walking, yoga, or cycling</li>
    <li>🥦 Diet changes: Less sugar, fried foods, more fiber and healthy fats</li>
    <li>💊 Control diabetes, triglycerides, and cholesterol</li>
    <li>🍷 Strict alcohol avoidance</li>
    <li>📈 Regular monitoring and follow-up with LFTs and FibroScan</li>
  </ul>

  <h3>💊 Do Medications Help?</h3>
  <p>No magic pill exists yet — but in selected patients, these may help:</p>
  <ul>
    <li>Vitamin E – for non-diabetic NAFLD with NASH</li>
    <li>Pioglitazone – for diabetics with biopsy-proven NASH</li>
    <li>Statins – to control lipids (safe in NAFLD)</li>
    <li>Metformin – for insulin resistance (helps overall metabolic profile)</li>
    <li>Liver supplements – e.g., silymarin, UDCA for mild support</li>
    <li>Newer agents – GLP-1 analogs and SGLT2 inhibitors in diabetics</li>
  </ul>

  <h3>🏥 At Our Clinic</h3>
  <ul>
    <li>✅ On-site ultrasound + FibroScan screening</li>
    <li>✅ Complete metabolic workup: HbA1c, lipids, insulin resistance</li>
    <li>✅ Personalized diet plans and weight reduction guidance</li>
    <li>✅ Regular tracking of liver function and fibrosis grading</li>
    <li>✅ Referral to liver specialist or oncology if advanced changes found</li>
    <li>✅ Patient workshops for lifestyle reversal awareness</li>
  </ul>

  <h3>🧠 Myths vs. Facts</h3>
  <table>
    <thead>
      <tr>
        <th>Myth</th>
        <th>Reality</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>“Fatty liver only happens to drinkers.”</td>
        <td>NAFLD is now more common than AFLD.</td>
      </tr>
      <tr>
        <td>“You’ll always feel symptoms.”</td>
        <td>Most patients are completely asymptomatic.</td>
      </tr>
      <tr>
        <td>“It’s not serious.”</td>
        <td>Can progress to cirrhosis or liver cancer.</td>
      </tr>
      <tr>
        <td>“Only obese people get it.”</td>
        <td>Even lean people with poor lifestyle can have NAFLD.</td>
      </tr>
      <tr>
        <td>“There’s a medicine to cure it.”</td>
        <td>Lifestyle change is the mainstay. No approved drug yet.</td>
      </tr>
    </tbody>
  </table>

  <h3>📝 Patient Tips</h3>
  <ul>
    <li>✅ Include more fiber-rich vegetables and whole grains</li>
    <li>✅ Exercise daily — even brisk walking helps</li>
    <li>🚫 Avoid sugary drinks and highly processed snacks</li>
    <li>🚫 Don't skip meals or follow crash diets</li>
    <li>✅ Manage stress and get adequate sleep</li>
  </ul>
</section>


      <section className="quiz-section">
        <h2>🧠 Quick Quiz — Fatty Liver</h2>

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

export default FattyLiver;
