import React, { useState } from 'react';
import './RP1InfertilityInsights.css';

const quizData = [
  {
    question: "Liver abscess means:",
    options: ["Tumor", "Fatty liver", "Collection of pus in the liver", "Cirrhosis"],
    answer: "Collection of pus in the liver"
  },
  {
    question: "Most common organism in amoebic abscess:",
    options: ["E. coli", "Entamoeba histolytica", "Hepatitis B", "Salmonella"],
    answer: "Entamoeba histolytica"
  },
  {
    question: "Amoebic abscess pus looks like:",
    options: ["Milky white", "Anchovy sauce", "Clear yellow", "Bloody"],
    answer: "Anchovy sauce"
  },
  {
    question: "First-line imaging in suspected liver abscess:",
    options: ["Chest X-ray", "Colonoscopy", "Ultrasound abdomen", "MRI brain"],
    answer: "Ultrasound abdomen"
  },
  {
    question: "Common symptom:",
    options: ["Seizure", "High-grade fever with chills", "Itching", "Hematuria"],
    answer: "High-grade fever with chills"
  },
  {
    question: "Common location of abscess:",
    options: ["Liver left lobe", "Gallbladder", "Right lobe of liver", "Pancreas"],
    answer: "Right lobe of liver"
  },
  {
    question: "Pyogenic abscess needs:",
    options: ["Just painkillers", "Only hydration", "IV antibiotics + drainage", "No treatment"],
    answer: "IV antibiotics + drainage"
  },
  {
    question: "Amoebic abscess often occurs in:",
    options: ["Elderly", "Alcoholics", "Immunocompromised", "Young adult males"],
    answer: "Young adult males"
  },
  {
    question: "Which test confirms amoebic infection?",
    options: ["Mantoux", "ELISA for Entamoeba", "LFT", "CRP"],
    answer: "ELISA for Entamoeba"
  },
  {
    question: "Which can rupture and cause empyema?",
    options: ["Kidney cyst", "Gallstone", "Liver abscess", "Pancreatitis"],
    answer: "Liver abscess"
  },
  {
    question: "First blood change seen:",
    options: ["Low hemoglobin", "High white blood cells", "Low ESR", "Low calcium"],
    answer: "High white blood cells"
  },
  {
    question: "Pyogenic abscess is more likely in:",
    options: ["Anemic patients", "Diabetics", "Healthy children", "PCOD patients"],
    answer: "Diabetics"
  },
  {
    question: "Pus collection is best treated by:",
    options: ["Insulin", "Drainage", "Antacids", "Steroids"],
    answer: "Drainage"
  },
  {
    question: "Liver abscess can mimic:",
    options: ["Appendicitis", "Gallbladder stone", "Right lower pneumonia", "Urinary infection"],
    answer: "Right lower pneumonia"
  },
  {
    question: "Danger of untreated abscess:",
    options: ["Rash", "Liver cancer", "Rupture and peritonitis", "Diabetes"],
    answer: "Rupture and peritonitis"
  },
  {
    question: "Most liver abscesses occur in:",
    options: ["Pancreas", "Spleen", "Right liver lobe", "Bile duct"],
    answer: "Right liver lobe"
  },
  {
    question: "Amoebic abscess can be treated with:",
    options: ["Ciprofloxacin", "Metronidazole", "Rifampicin", "Amphotericin"],
    answer: "Metronidazole"
  },
  {
    question: "Chronic alcoholics are at risk because:",
    options: ["Weak immunity", "High glucose", "Liver enlargement", "None"],
    answer: "Weak immunity"
  },
  {
    question: "Drainage is required when:",
    options: ["<2 cm", "Asymptomatic", "Large abscess or risk of rupture", "Always"],
    answer: "Large abscess or risk of rupture"
  },
  {
    question: "Prevention includes:",
    options: ["Raw salad", "Street food", "Bottled water", "Skipping antibiotics"],
    answer: "Bottled water"
  }
];


const LiverAbscess = () => {
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
      <h1>🟠 Liver Abscess</h1>
      <p className="lead">“A pocket of pus where none should be.”</p>

      <section className="info-section">
  <h3>🦠 What Is a Liver Abscess?</h3>
  <p>
    A liver abscess is a localized collection of pus within the liver, formed due to infection. It may sound uncommon, but it is a frequent clinical finding in India and tropical regions — and can be life-threatening if not identified and drained in time.
  </p>

  <h3>💥 Why Does It Happen?</h3>
  <p>Infections reach the liver through:</p>
  <ul>
    <li>🩸 Bloodstream from gut infections</li>
    <li>➡️ Direct spread from adjacent organs</li>
    <li>🧬 Bile ducts during biliary obstruction</li>
    <li>🩺 Post-surgical trauma or interventions</li>
  </ul>

  <p><strong>Types of Liver Abscesses:</strong></p>
  <table>
    <thead>
      <tr>
        <th>Type</th>
        <th>Cause</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Amoebic</td>
        <td><em>Entamoeba histolytica</em> – most common in India 🇮🇳</td>
      </tr>
      <tr>
        <td>Pyogenic</td>
        <td>Bacterial – E. coli, Klebsiella, Streptococcus</td>
      </tr>
      <tr>
        <td>Fungal</td>
        <td>Rare – seen in immunocompromised individuals</td>
      </tr>
    </tbody>
  </table>

  <h3>👥 Who Is Most at Risk?</h3>
  <ul>
    <li>Adults aged 20–50</li>
    <li>Men &gt; Women</li>
    <li>Those living in poor sanitation settings</li>
    <li>Chronic alcoholics</li>
    <li>Diabetics and immunocompromised patients</li>
    <li>Patients with biliary tract disease or recurrent gut infections</li>
  </ul>

  <h3>📍 How It Presents: The Liver’s SOS</h3>
  <ul>
    <li>High fever with chills/rigors</li>
    <li>Right upper abdominal pain</li>
    <li>Nausea, vomiting, loss of appetite</li>
    <li>Jaundice (sometimes)</li>
    <li>Chest pain or cough (if diaphragm is irritated)</li>
    <li>Severe cases: confusion, low BP, or sepsis</li>
  </ul>

  <h3>🔬 Diagnostic Trail: Pinning It Down</h3>
  <ul>
    <li>✅ <strong>Ultrasound abdomen</strong> – first-line tool</li>
    <li>✅ <strong>CT scan</strong> – for deeper/multiple abscesses</li>
    <li>✅ <strong>Blood tests:</strong> High WBC, raised CRP/ESR, deranged LFTs</li>
    <li>✅ <strong>ELISA serology</strong> – for amoebiasis</li>
    <li>✅ <strong>Pus aspiration</strong> – for culture, wet mount</li>
  </ul>

  <h4>🧪 Amoebic vs Pyogenic Abscess: Key Differences</h4>
  <table>
    <thead>
      <tr>
        <th>Feature</th>
        <th>Amoebic</th>
        <th>Pyogenic</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Onset</td>
        <td>Gradual</td>
        <td>Sudden, toxic</td>
      </tr>
      <tr>
        <td>Age</td>
        <td>20–40 years</td>
        <td>Elderly, diabetics</td>
      </tr>
      <tr>
        <td>Fever</td>
        <td>Moderate</td>
        <td>High-grade, swinging</td>
      </tr>
      <tr>
        <td>Jaundice</td>
        <td>Rare</td>
        <td>Common</td>
      </tr>
      <tr>
        <td>Serology</td>
        <td>Positive</td>
        <td>Negative</td>
      </tr>
      <tr>
        <td>Pus Appearance</td>
        <td>Anchovy paste-like</td>
        <td>Foul-smelling, thick</td>
      </tr>
    </tbody>
  </table>

  <h3>🩺 Treatment: Medical & Interventional</h3>
  <h4>✅ Amoebic Abscess</h4>
  <ul>
    <li>Metronidazole or Tinidazole for 7–10 days</li>
    <li>+ Diloxanide furoate to eliminate intestinal cysts</li>
    <li>Drainage: only for large, left-lobe, or non-responding cases</li>
  </ul>

  <h4>✅ Pyogenic Abscess</h4>
  <ul>
    <li>IV antibiotics: ceftriaxone + metronidazole / piperacillin–tazobactam</li>
    <li>USG-guided aspiration or pigtail catheter drainage</li>
    <li>Surgery: for rupture, multiple abscesses, or poor response</li>
  </ul>

  <h3>⚠️ Complications to Watch</h3>
  <ul>
    <li>Rupture into abdomen or thorax (life-threatening)</li>
    <li>Sepsis and multiorgan failure</li>
    <li>Pleural effusion, empyema</li>
    <li>Chronic liver abscess or secondary bacterial infection</li>
  </ul>

  <h3>🏥 At Our Clinic</h3>
  <ul>
    <li>✅ Bedside ultrasound and rapid LFT/WBC evaluation</li>
    <li>✅ Risk stratification: amoebic vs pyogenic</li>
    <li>✅ Targeted antibiotic protocol with hepatologist input</li>
    <li>✅ Interventional drainage coordination</li>
    <li>✅ Post-recovery liver function tracking</li>
    <li>✅ Lifestyle, sanitation, and recurrence-prevention counseling</li>
  </ul>

  <h3>🛡️ Prevention Tips</h3>
  <ul>
    <li>🧼 Wash hands before meals and after toilet</li>
    <li>🚰 Drink only boiled or filtered water</li>
    <li>🥗 Avoid raw salads or street food in endemic zones</li>
    <li>💊 Treat intestinal infections early</li>
    <li>👨‍👩‍👧‍👦 Family screening in recurrent amoebiasis zones</li>
  </ul>

  <h3>📚 Did You Know?</h3>
  <ul>
    <li>Left-lobe abscesses can rupture into pericardium or lungs</li>
    <li>Amoebic abscesses often resolve completely with medication</li>
    <li>Children or elderly may present with vague symptoms — don’t overlook early signs</li>
  </ul>
</section>


      <section className="quiz-section">
        <h2>🧠 Quick Quiz — Liver Abscess</h2>

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

export default LiverAbscess;
