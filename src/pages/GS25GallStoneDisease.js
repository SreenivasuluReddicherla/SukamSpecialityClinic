import React, { useState } from 'react';
import './RP1InfertilityInsights.css';

const quizData = [
  {
    question: "Gallstones are most commonly made of:",
    options: ["Uric acid", "Cholesterol", "Calcium", "Protein"],
    answer: "Cholesterol"
  },
  {
    question: "Gallstones form in the:",
    options: ["Liver", "Stomach", "Gallbladder", "Kidney"],
    answer: "Gallbladder"
  },
  {
    question: "The classic pain of gallstones is located:",
    options: ["Lower abdomen", "Right upper abdomen", "Left chest", "Back of thigh"],
    answer: "Right upper abdomen"
  },
  {
    question: "Which condition is a complication of gallstones?",
    options: ["Asthma", "Pancreatitis", "Stroke", "Migraine"],
    answer: "Pancreatitis"
  },
  {
    question: "Investigation of choice:",
    options: ["X-ray", "ECG", "Ultrasound abdomen", "MRI brain"],
    answer: "Ultrasound abdomen"
  },
  {
    question: "Gallbladder inflammation is called:",
    options: ["Gastritis", "Hepatitis", "Cholecystitis", "Nephritis"],
    answer: "Cholecystitis"
  },
  {
    question: "Gallstones in bile duct is called:",
    options: ["Nephrolithiasis", "Choledocholithiasis", "Appendicitis", "Colitis"],
    answer: "Choledocholithiasis"
  },
  {
    question: "A common trigger for symptoms:",
    options: ["Rice", "Fatty meals", "Fruit juice", "Milk"],
    answer: "Fatty meals"
  },
  {
    question: "Gallstones are more common in:",
    options: ["Thin men", "Young girls", "Middle-aged women", "Children"],
    answer: "Middle-aged women"
  },
  {
    question: "ERCP is done to:",
    options: ["View kidney stones", "Remove bile duct stones", "Check lungs", "Fix bones"],
    answer: "Remove bile duct stones"
  },
  {
    question: "Which is not a typical symptom?",
    options: ["Vomiting", "Jaundice", "Cough", "Abdominal pain"],
    answer: "Cough"
  },
  {
    question: "Best treatment for symptomatic stones:",
    options: ["Antibiotics", "Laparoscopic cholecystectomy", "Diet only", "Wait and watch"],
    answer: "Laparoscopic cholecystectomy"
  },
  {
    question: "Gallbladder is:",
    options: ["Essential for life", "Can be removed safely", "Produces hormones", "Stores glucose"],
    answer: "Can be removed safely"
  },
  {
    question: "Which lab test is elevated in blocked bile duct?",
    options: ["TSH", "Lipase", "Bilirubin", "Hemoglobin"],
    answer: "Bilirubin"
  },
  {
    question: "Which is not a risk factor?",
    options: ["Obesity", "Oral contraceptives", "Regular exercise", "Diabetes"],
    answer: "Regular exercise"
  },
  {
    question: "Pigment stones are made of:",
    options: ["Bilirubin", "Sugar", "Enzymes", "Salt"],
    answer: "Bilirubin"
  },
  {
    question: "In severe pain with fever, suspect:",
    options: ["Cholecystitis", "Ulcer", "IBS", "Appendicitis"],
    answer: "Cholecystitis"
  },
  {
    question: "Gallstone pancreatitis can be:",
    options: ["Mild", "Severe", "Life-threatening", "All of the above"],
    answer: "All of the above"
  },
  {
    question: "After gallbladder removal:",
    options: ["Person cannot digest fats", "Life is normal", "Digestion stops", "Food has to be liquid forever"],
    answer: "Life is normal"
  },
  {
    question: "Which is not needed for diagnosis?",
    options: ["USG", "LFT", "CT in some cases", "Urine pregnancy test"],
    answer: "Urine pregnancy test"
  }
];

const GallStoneDisease = () => {
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
      <h1>🟠 Gall Stone Disease</h1>
      <p className="lead">“Hard stones, sharp pain, soft groans.”</p>

      <section className="info-section">
  <h3>🪨 A Common but Misunderstood Problem</h3>
  <p>
    Gallstone disease affects millions — yet many suffer in silence or ignore early signs. These hardened deposits formed inside the gallbladder may remain silent or trigger pain, inflammation, jaundice, or even life-threatening pancreatitis. They're not just a digestive inconvenience — they can become emergencies.
  </p>

  <h3>🧪 How Do Gallstones Form?</h3>
  <p>
    The gallbladder stores bile, a digestive fluid made by the liver. When bile components — cholesterol, bile salts, and pigments — become imbalanced, solid crystals form and clump into stones.
  </p>
  <ul>
    <li>🟡 <strong>Cholesterol Stones</strong> – Most common, yellow-green</li>
    <li>⚫ <strong>Pigment Stones</strong> – Black/brown, formed from excess bilirubin</li>
    <li>🌀 <strong>Mixed Stones</strong> – Combination of cholesterol and pigment</li>
  </ul>

  <h3>⚠️ Who’s at Risk?</h3>
  <p>Classic memory aid: <strong>5 F’s – Fat, Forty, Female, Fertile, Fair-skinned</strong></p>
  <ul>
    <li>Women (especially pregnancy or post-pregnancy)</li>
    <li>Age above 40 years</li>
    <li>Obesity or rapid weight loss</li>
    <li>Sedentary lifestyle</li>
    <li>Diabetes or insulin resistance</li>
    <li>High-fat, low-fiber diet</li>
    <li>Family history of gallstones</li>
    <li>Oral contraceptive or estrogen therapy</li>
  </ul>

  <h3>📍 How It Strikes: Signs You Can’t Ignore</h3>
  <ul>
    <li>Sudden pain in the upper right abdomen (often post-meal)</li>
    <li>Pain radiating to right shoulder blade or back</li>
    <li>Nausea, vomiting, bloating</li>
    <li>Fever with chills (if infection)</li>
    <li>Yellow eyes or dark urine (if bile duct involved)</li>
  </ul>
  <p>
    A classic "gallbladder attack" lasts 30 minutes to several hours — don’t wait it out if it recurs.
  </p>

  <h3>🔥 When It Gets Serious</h3>
  <table>
    <thead>
      <tr>
        <th>Complication</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>Cholecystitis</strong></td>
        <td>Gallbladder inflammation with fever, tenderness</td>
      </tr>
      <tr>
        <td><strong>Choledocholithiasis</strong></td>
        <td>Stone in bile duct — causes jaundice, needs urgent ERCP</td>
      </tr>
      <tr>
        <td><strong>Pancreatitis</strong></td>
        <td>Blocked pancreatic duct — medical emergency</td>
      </tr>
      <tr>
        <td><strong>Empyema</strong></td>
        <td>Pus in gallbladder — needs emergency surgery</td>
      </tr>
      <tr>
        <td><strong>Gallbladder perforation</strong></td>
        <td>Rupture — rare but life-threatening</td>
      </tr>
    </tbody>
  </table>

  <h3>🩻 How It’s Diagnosed</h3>
  <ul>
    <li>Abdominal ultrasound – first and most accurate test</li>
    <li>Liver function tests – check bilirubin, ALP, AST/ALT</li>
    <li>MRCP – if bile duct involvement is suspected</li>
    <li>CT scan – if complications suspected</li>
    <li>ERCP – for bile duct stone removal and stenting</li>
  </ul>

  <h3>🛠️ How Is It Treated?</h3>
  <h4>✅ Asymptomatic Stones</h4>
  <ul>
    <li>No surgery needed in most cases</li>
    <li>Monitoring if patient is high-risk or symptomatic in future</li>
  </ul>

  <h4>✅ Symptomatic Gallstones</h4>
  <ul>
    <li><strong>Laparoscopic cholecystectomy</strong> – 30–60 minute keyhole surgery</li>
    <li>Open surgery – reserved for severe or complicated cases</li>
  </ul>

  <h4>✅ Bile Duct Stones</h4>
  <ul>
    <li><strong>ERCP</strong> – For removal before or after gallbladder surgery</li>
  </ul>

  <h3>🏥 What We Offer at Sukam Specialty Clinic</h3>
  <ul>
    <li>✅ Bedside ultrasound + LFT for all suspected gallstone cases</li>
    <li>✅ Symptom classification – silent vs active disease</li>
    <li>✅ Pre-op optimization: sugar control, infection screen, anesthesia clearance</li>
    <li>✅ Rapid referral for <strong>laparoscopic day-care surgery</strong></li>
    <li>✅ Post-op dietary and lifestyle counseling</li>
  </ul>

  <h3>🧘‍♀️ Life After Gallbladder Removal</h3>
  <ul>
    <li>Most people live normally without a gallbladder</li>
    <li>Bile flows directly from liver to intestine</li>
    <li>Mild bloating or loose stools may occur initially</li>
    <li>Advised: avoid binge eating oily/spicy foods long-term</li>
  </ul>

  <h3>🔍 Myths vs. Facts</h3>
  <table>
    <thead>
      <tr>
        <th>Myth</th>
        <th>Fact</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Home remedies dissolve gallstones</td>
        <td>Only very tiny cholesterol stones may dissolve — surgery is definitive</td>
      </tr>
      <tr>
        <td>Surgery is risky and leaves scars</td>
        <td>Laparoscopic surgery is minimally invasive and safe</td>
      </tr>
      <tr>
        <td>Gallstones can be flushed by diet</td>
        <td>No scientific evidence supports this claim</td>
      </tr>
      <tr>
        <td>Stones come back after removal</td>
        <td>No — gallbladder is removed, so recurrence is not possible</td>
      </tr>
      <tr>
        <td>Wait until the pain is unbearable</td>
        <td>Delaying can cause complications — early surgery is safer</td>
      </tr>
    </tbody>
  </table>
</section>

      <section className="quiz-section">
        <h2>🧠 Quick Quiz — Gall Stone Disease</h2>

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

export default GallStoneDisease;
