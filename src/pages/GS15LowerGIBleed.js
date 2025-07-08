import React, { useState } from 'react';
import './RP1InfertilityInsights.css';

const quizData = [
  {
    question: "Lower GI bleeding originates from:",
    options: [
      "Esophagus",
      "Stomach",
      "Colon, rectum, or distal ileum",
      "Pancreas"
    ],
    answer: "Colon, rectum, or distal ileum"
  },
  {
    question: "Bright red rectal bleeding is called:",
    options: [
      "Melena",
      "Hematochezia",
      "Occult bleed",
      "Hematemesis"
    ],
    answer: "Hematochezia"
  },
  {
    question: "Most common cause of painless bleeding in elderly:",
    options: [
      "Hemorrhoids",
      "Diverticulosis",
      "Anal fissure",
      "Colitis"
    ],
    answer: "Diverticulosis"
  },
  {
    question: "A teenager with blood on toilet paper and pain likely has:",
    options: [
      "Fissure",
      "AV malformation",
      "Cancer",
      "Ulcer"
    ],
    answer: "Fissure"
  },
  {
    question: "Sudden painless massive bleeding in elderly suggests:",
    options: [
      "Polyps",
      "Angiodysplasia",
      "Diverticular bleed",
      "IBS"
    ],
    answer: "Diverticular bleed"
  },
  {
    question: "Blood mixed with mucus in loose stools suggests:",
    options: [
      "Gastritis",
      "Colorectal cancer",
      "Ulcerative colitis",
      "Hemorrhoids"
    ],
    answer: "Ulcerative colitis"
  },
  {
    question: "Which is NOT a cause of lower GI bleeding?",
    options: [
      "Anal fissure",
      "Crohn’s disease",
      "Esophageal varices",
      "Colon polyp"
    ],
    answer: "Esophageal varices"
  },
  {
    question: "Occult blood test detects:",
    options: [
      "Visible blood",
      "Blood in urine",
      "Hidden stool blood",
      "Liver enzymes"
    ],
    answer: "Hidden stool blood"
  },
  {
    question: "Most suitable investigation in stable bleeding:",
    options: [
      "CT head",
      "Colonoscopy",
      "MRI pelvis",
      "Ultrasound abdomen"
    ],
    answer: "Colonoscopy"
  },
  {
    question: "Bleeding that resolves spontaneously is seen in:",
    options: [
      "Hemorrhoids",
      "Fissure",
      "Diverticular disease",
      "Colon cancer"
    ],
    answer: "Diverticular disease"
  },
  {
    question: "Which drug increases risk of GI bleeding?",
    options: [
      "Paracetamol",
      "Beta blockers",
      "NSAIDs",
      "Antacids"
    ],
    answer: "NSAIDs"
  },
  {
    question: "Hemorrhoid bleeding usually appears:",
    options: [
      "Mixed with stool",
      "Coated on surface",
      "Tarry black",
      "Yellowish"
    ],
    answer: "Coated on surface"
  },
  {
    question: "Which colon segment is mostly affected by cancer?",
    options: [
      "Sigmoid",
      "Duodenum",
      "Ileum",
      "Cecum"
    ],
    answer: "Sigmoid"
  },
  {
    question: "AV malformation is best treated by:",
    options: [
      "Surgery",
      "Embolization or cauterization",
      "Antibiotics",
      "Antacids"
    ],
    answer: "Embolization or cauterization"
  },
  {
    question: "Proctoscopy can identify:",
    options: [
      "Esophageal tumor",
      "Rectal hemorrhoids",
      "Liver disease",
      "Intussusception"
    ],
    answer: "Rectal hemorrhoids"
  },
  {
    question: "Stool with foul odor and black color implies:",
    options: [
      "Lower GI bleed",
      "Constipation",
      "Upper GI bleed",
      "IBS"
    ],
    answer: "Upper GI bleed"
  },
  {
    question: "Bleeding due to IBD is often:",
    options: [
      "Painless",
      "Mixed with mucus",
      "Large volume",
      "Always occult"
    ],
    answer: "Mixed with mucus"
  },
  {
    question: "Hematochezia with abdominal pain suggests:",
    options: [
      "Gastric ulcer",
      "Ischemic colitis",
      "Cirrhosis",
      "Gallstones"
    ],
    answer: "Ischemic colitis"
  },
  {
    question: "CT angiography is used when:",
    options: [
      "Bleeding is mild",
      "Colonoscopy is contraindicated",
      "For hemorrhoids",
      "Urinary bleeding"
    ],
    answer: "Colonoscopy is contraindicated"
  },
  {
    question: "Chronic occult GI bleeding leads to:",
    options: [
      "Jaundice",
      "Anemia",
      "Hepatitis",
      "Diarrhea"
    ],
    answer: "Anemia"
  }
];

const LowerGIBleed = () => {
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
      <h1>🟠 Lower GI Bleed</h1>
      <p className="lead">“Red alerts from the digestive tract’s lower half.”</p>

      <section className="info-section">
  <h3>🩸 What Is Lower GI Bleeding?</h3>
  <p>
    Lower GI bleeding refers to blood loss originating from the colon, rectum, or distal small intestine—below the ligament of Treitz.
  </p>
  <p>
    It may present as:
    <ul>
      <li><strong>Mild:</strong> Streaks of blood on stool</li>
      <li><strong>Severe:</strong> Massive rectal bleeding, collapse, or anemia</li>
    </ul>
  </p>

  <h3>🔍 Key Presentations</h3>
  <table>
    <thead>
      <tr><th>Type of Bleeding</th><th>Typical Features</th></tr>
    </thead>
    <tbody>
      <tr><td>Hematochezia</td><td>Bright red or maroon blood per rectum</td></tr>
      <tr><td>Occult bleeding</td><td>No visible blood, but detected on stool test or via anemia</td></tr>
      <tr><td>Melena (rare)</td><td>Black, tarry stools if from slow/proximal source</td></tr>
    </tbody>
  </table>

  <h3>👶👨‍🦰👴 Common Causes by Age Group</h3>
  <ul>
    <li><strong>Children:</strong> Meckel’s diverticulum, juvenile polyps, fissures, intussusception, IBD</li>
    <li><strong>Adults &lt; 50:</strong> Hemorrhoids, fissures, IBD, infectious colitis, rectal ulcers</li>
    <li><strong>Elderly &gt; 60:</strong> Diverticulosis, angiodysplasia, colorectal cancer, ischemic colitis, radiation proctitis</li>
  </ul>

  <h3>🚑 Judging Severity at First Contact</h3>
  <ul>
    <li><strong>Bright red:</strong> Active lower source</li>
    <li><strong>Maroon:</strong> Possibly mid-gut source</li>
    <li><strong>Painful bleeding:</strong> Suggests fissure, IBD, ischemia</li>
    <li><strong>Painless bleeding:</strong> Hemorrhoids, cancer, diverticulosis</li>
    <li><strong>Associated symptoms:</strong> Dizziness, pallor, hypotension → significant blood loss</li>
    <li><strong>Medication use:</strong> NSAIDs, anticoagulants worsen bleeding</li>
  </ul>

  <h3>📌 Differential Diagnosis by Presentation</h3>
  <table>
    <thead>
      <tr><th>Clue</th><th>Likely Cause</th></tr>
    </thead>
    <tbody>
      <tr><td>Painless bright red blood on stool</td><td>Hemorrhoids, polyps</td></tr>
      <tr><td>Painful bleeding during defecation</td><td>Anal fissure</td></tr>
      <tr><td>Sudden large painless bleed (elderly)</td><td>Diverticular bleeding</td></tr>
      <tr><td>Bloody mucus</td><td>Ulcerative colitis</td></tr>
      <tr><td>Abdominal pain + bloody diarrhea</td><td>Infectious or ischemic colitis</td></tr>
      <tr><td>Chronic anemia + occult blood</td><td>Colorectal cancer, AV malformation</td></tr>
    </tbody>
  </table>

  <h3>🧪 Diagnostic Pathway at Sukam</h3>
  <ol>
    <li><strong>Basic Tests:</strong> CBC, stool occult blood, renal/liver profile, PT/INR</li>
    <li><strong>Rectal Evaluation:</strong> Proctoscopy or digital rectal exam</li>
    <li><strong>Sigmoidoscopy:</strong> Useful for recto-sigmoid pathology</li>
    <li><strong>Colonoscopy:</strong> Gold standard in stable patients — diagnostic + therapeutic</li>
    
    <li><strong>Capsule Endoscopy:</strong> If small bowel source suspected</li>
  </ol>

  <h3>🩺 Treatment Based on Cause</h3>
  <table>
    <thead>
      <tr><th>Cause</th><th>Treatment</th></tr>
    </thead>
    <tbody>
      <tr><td>Hemorrhoids/fissures</td><td>Sitz bath, fiber, ointments, banding, or surgery</td></tr>
      <tr><td>Diverticular bleed</td><td>Often stops spontaneously; colonoscopy or angioembolization if active</td></tr>
      <tr><td>AV malformation</td><td>Endoscopic cauterization</td></tr>
      <tr><td>IBD</td><td>Anti-inflammatory meds, immunosuppressants</td></tr>
      <tr><td>Infectious colitis</td><td>Antibiotics and fluids</td></tr>
      <tr><td>Colorectal cancer</td><td>Surgery, biopsy, staging</td></tr>
      <tr><td>Severe bleeding</td><td>IV fluids, transfusion, ICU care if needed</td></tr>
    </tbody>
  </table>

  <h3>⚖️ Conservative vs Surgical Management</h3>
  <ul>
    <li>75% of cases resolve spontaneously</li>
    <li>Surgery is considered for:
      <ul>
        <li>Massive, unresponsive bleeding</li>
        <li>Suspected malignancy</li>
        <li>Ischemic bowel requiring resection</li>
      </ul>
    </li>
  </ul>

  <h3>👩‍⚕️ Women-Specific Considerations</h3>
  <ul>
    <li>Differentiating rectal from vaginal bleeding is critical</li>
    <li>Post-menopausal bleeding can confuse the diagnosis</li>
    <li>IBD is more common in young women of childbearing age</li>
  </ul>

  <h3>📣 Tips for Public Awareness</h3>
  <ul>
    <li>Blood in stool is never normal</li>
    <li>Not all bleeding is hemorrhoids—get evaluated</li>
    <li>Colonoscopy can detect early cancer</li>
    <li>Iron-deficiency anemia may be the only sign of chronic GI loss</li>
    <li>Start screening colonoscopy after age 50</li>
  </ul>

  <h3>🏥 How We Manage Lower GI Bleeds at Sukam</h3>
  <ul>
    <li>✅ Walk-in rectal examination and proctoscopy</li>
    <li>✅ On-site sigmoidoscopy for early detection</li>
    <li>✅ Colonoscopy within 48 hours for stable cases</li>
    <li>✅ Referral coordination with advanced GI centers</li>
    <li>✅ Pre- and post-procedure counseling for prevention</li>
  </ul>
  <p><strong>Early detection, timely endoscopy, and personalized care — that's our commitment at Sukam.</strong></p>
</section>


      <section className="quiz-section">
        <h2>🧠 Lower GI Bleed Quiz — Test Your Knowledge!</h2>

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

export default LowerGIBleed;
