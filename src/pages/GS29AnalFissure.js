import React, { useState } from 'react';
import './RP1InfertilityInsights.css';

const quizData = [
  {
    question: "Typical location of anal fissure:",
    options: ["Lateral wall", "Posterior midline", "Anterior rectum", "Superior anal canal"],
    answer: "Posterior midline"
  },
  {
    question: "Most common cause:",
    options: ["Infection", "Cancer", "Hard stool", "Hemorrhoid"],
    answer: "Hard stool"
  },
  {
    question: "Symptom hallmark:",
    options: ["Painless mass", "Sharp anal pain during defecation", "Black stools", "Fever"],
    answer: "Sharp anal pain during defecation"
  },
  {
    question: "Duration defining “acute” fissure:",
    options: ["< 2 weeks", "< 4 weeks", "< 6 weeks", "< 3 months"],
    answer: "< 6 weeks"
  },
  {
    question: "Associated feature of chronic fissure:",
    options: ["Soft skin", "Sentinel tag", "Abscess", "Anal wart"],
    answer: "Sentinel tag"
  },
  {
    question: "First-line topical drug:",
    options: ["Nitrofurantoin", "Diltiazem", "Fluconazole", "Zinc oxide"],
    answer: "Diltiazem"
  },
  {
    question: "Best dietary advice:",
    options: ["High protein", "High fiber", "Keto diet", "Low water"],
    answer: "High fiber"
  },
  {
    question: "Sitz bath helps by:",
    options: ["Drying the area", "Increasing blood flow", "Blocking infection", "Soaking stool"],
    answer: "Increasing blood flow"
  },
  {
    question: "Pain in fissure is due to:",
    options: ["Tumor growth", "Infection", "Internal sphincter spasm", "Gas"],
    answer: "Internal sphincter spasm"
  },
  {
    question: "Bleeding in fissure:",
    options: ["Profuse and black", "Bright red", "Only mucus", "Always clotted"],
    answer: "Bright red"
  },
  {
    question: "When is LIS considered?",
    options: ["Day 1", "After 1 week", "After 6 weeks and failed meds", "Never"],
    answer: "After 6 weeks and failed meds"
  },
  {
    question: "Feature of acute fissure:",
    options: ["Fibrosis", "Indurated base", "Fresh linear tear", "Fistula tract"],
    answer: "Fresh linear tear"
  },
  {
    question: "Role of stool softeners:",
    options: ["Reduce bleeding", "Relax sphincter", "Ease passage", "Stop bleeding"],
    answer: "Ease passage"
  },
  {
    question: "Incontinence risk is highest with:",
    options: ["Botox", "LIS in elderly", "Sitz bath", "Fiber"],
    answer: "LIS in elderly"
  },
  {
    question: "Avoid this habit:",
    options: ["Deep breathing", "Prolonged straining", "Early rising", "Running"],
    answer: "Prolonged straining"
  },
  {
    question: "Which ointment causes headache?",
    options: ["Diltiazem", "Lidocaine", "Nitroglycerin", "Hydrocortisone"],
    answer: "Nitroglycerin"
  },
  {
    question: "Digital rectal exam is:",
    options: ["Mandatory", "Avoided in acute phase", "Always done", "Replaces anoscopy"],
    answer: "Avoided in acute phase"
  },
  {
    question: "Most fissures heal:",
    options: ["On their own", "With surgery", "With early conservative care", "Never heal"],
    answer: "With early conservative care"
  },
  {
    question: "Botox helps by:",
    options: ["Destroying veins", "Relaxing sphincter", "Cauterizing vessels", "Reducing bacteria"],
    answer: "Relaxing sphincter"
  },
  {
    question: "If fissure is off-midline, suspect:",
    options: ["TB/HIV", "Hemorrhoids", "IBS", "IBS"],
    answer: "TB/HIV"
  }
];

const AnalFissure = () => {
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
      <h1>🟠 Anal Fissure</h1>
      <p className="lead">“A painful tear in the lining down under.”</p>

      <section className="info-section">
  <h3>🔍 What Happens When the Skin Tears?</h3>
  <p>
    An acute fissure in ano is a small tear in the skin of the anal canal, typically occurring just inside the anus. Although small in size, it can cause excruciating pain during and after bowel movements, often accompanied by bleeding.
    It is one of the most common causes of painful defecation in young adults and can become chronic or recurrent if not managed early and appropriately.
  </p>

  <h3>📍 Where and Why Does It Occur?</h3>
  <p>
    Most fissures occur posteriorly (6 o’clock position) — where blood flow is relatively poor, making healing slower. A smaller percentage occur anteriorly, particularly in women after childbirth.
    The tear typically involves the epithelium of the anoderm — a sensitive area without much protective tissue, making it prone to injury during:
  </p>
  <ul>
    <li>Passing hard stools</li>
    <li>Repeated straining or constipation</li>
    <li>Prolonged diarrhea</li>
    <li>Vaginal delivery or trauma</li>
    <li>Anal intercourse</li>
    <li>Post-surgical or inflammatory injury</li>
  </ul>
  <p>
    The tear causes exposure of internal sphincter fibers, leading to pain-induced muscle spasm, which further reduces blood supply and delays healing — forming a vicious cycle.
  </p>

  <h3>⚠️ Hallmark Symptoms You Should Know</h3>
  <ul>
    <li>Sharp, burning, or cutting pain during or after defecation</li>
    <li>Bright red bleeding seen on toilet paper or in the pan</li>
    <li>Spasm or tightness in the anal region</li>
    <li>Fear of passing stools, leading to stool withholding</li>
    <li>Constipation worsens, perpetuating the issue</li>
  </ul>
  <p><em>Note: Unlike hemorrhoids, fissure-related bleeding is mild, fresh red, and usually not mixed with stools.</em></p>

  <h3>🧑‍⚕️ How It’s Diagnosed</h3>
  <ul>
    <li>Inspection of the anal area reveals a small linear tear, often at the 6 o’clock position</li>
    <li>Gentle parting of the buttocks may provoke visible spasm or pain</li>
    <li>Digital rectal examination is usually avoided in acute cases due to pain</li>
    <li>No advanced testing is usually needed unless symptoms are atypical or persistent</li>
  </ul>
  <p>
    In suspected chronic cases or unusual presentations, anoscopy or proctoscopy under local anesthesia may be performed.
  </p>

  <h3>📊 Acute vs Chronic: Why It Matters</h3>
  <table>
    <thead>
      <tr><th>Acute Fissure</th><th>Chronic Fissure</th></tr>
    </thead>
    <tbody>
      <tr><td>&lt; 6 weeks duration</td><td>&gt; 6 weeks duration</td></tr>
      <tr><td>Fresh tear, superficial</td><td>Deeper ulcer with indurated edges</td></tr>
      <tr><td>Intense pain and bleeding</td><td>Pain less severe but persistent</td></tr>
      <tr><td>Responds well to conservative therapy</td><td>Often requires intervention</td></tr>
      <tr><td>No sentinel tag or hypertrophied papilla</td><td>Commonly seen in chronic cases</td></tr>
    </tbody>
  </table>

  <h3>🩺 First-Line Treatment — Conservative and Effective</h3>
  <ul>
    <li>✅ High-fiber diet (fruits, greens, whole grains)</li>
    <li>✅ Plenty of fluids (2–3 liters/day)</li>
    <li>✅ Stool softeners (lactulose, psyllium husk)</li>
    <li>✅ Warm sitz baths (10–15 minutes, 2–3 times/day)</li>
    <li>✅ Topical analgesics and anesthetic ointments (2% lidocaine)</li>
    <li>✅ Topical vasodilators (e.g., 0.2% nitroglycerin, 2% diltiazem)</li>
    <li>✅ Avoid straining during bowel movements</li>
    <li>✅ Pain control with NSAIDs if required</li>
  </ul>
  <p><strong>💡 Around 80–90% of acute fissures heal completely with conservative treatment if initiated early.</strong></p>

  <h3>🚫 What to Avoid</h3>
  <ul>
    <li>Holding stools due to pain</li>
    <li>Dry or low-fiber diet</li>
    <li>Excessive straining</li>
    <li>Using irritant soaps or wipes</li>
    <li>Ignoring symptoms beyond 2–3 weeks</li>
  </ul>

  <h3>🔧 When Do We Intervene?</h3>
  <p>If the fissure:</p>
  <ul>
    <li>Persists beyond 6 weeks</li>
    <li>Has features of chronicity (sentinel pile, fibrosis, papilla)</li>
    <li>Does not respond to medications</li>
    <li>Causes severe lifestyle limitation</li>
  </ul>
  <p><strong>Advanced options include:</strong></p>
  <ul>
    <li>Botulinum toxin injection into the internal sphincter</li>
    <li>Lateral Internal Sphincterotomy (LIS) – gold standard for chronic fissures</li>
    <li>Anal advancement flap – in complex or recurrent cases</li>
  </ul>
  <p><em>LIS has a &gt;95% success rate, though there’s a small risk of incontinence, especially in women or multiparous patients.</em></p>

  <h3>🔍 Associated Conditions (That Shouldn't Be Missed)</h3>
  <ul>
    <li>Crohn’s disease</li>
    <li>Tuberculosis of the anal canal</li>
    <li>HIV/AIDS-related ulcers</li>
    <li>Syphilis or other STDs</li>
    <li>Anal carcinoma (rare)</li>
  </ul>
  <p>
    In such cases, biopsy, culture, or colonoscopy may be warranted.
  </p>

  <h3>🏥 Our Clinic’s Approach to Fissure Management</h3>
  <ul>
    <li>🔹 Day 1: Diagnosis with visual examination (no digital trauma)</li>
    <li>🔹 Patient education with fiber and fluid chart</li>
    <li>🔹 Start of nitroglycerin/diltiazem ointment + stool softener</li>
    <li>🔹 Sit-down discussion to break fear-constipation cycle</li>
    <li>🔹 Weekly follow-up to assess pain scale, healing progress</li>
    <li>🔹 Laser LIS or Botox arranged in non-responders (if needed)</li>
  </ul>
  <p>
    Our approach is gentle, evidence-based, and highly patient-centric — with a strong focus on avoiding surgery whenever possible.
  </p>

  <h3>🌟 Prognosis and Prevention</h3>
  <p>With early care, acute fissures resolve within 2–4 weeks. Long-term prevention requires:</p>
  <ul>
    <li>Good bowel habits</li>
    <li>Fiber-rich diet and hydration</li>
    <li>Avoidance of trauma or harsh cleaning</li>
    <li>Addressing constipation at the root</li>
  </ul>
</section>


      <section className="quiz-section">
        <h2>🧠 Quick Quiz — Anal Fissure</h2>

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

export default AnalFissure;
