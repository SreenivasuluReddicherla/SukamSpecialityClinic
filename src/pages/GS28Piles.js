import React, { useState } from 'react';
import './RP1InfertilityInsights.css';

const quizData = [
  {
    question: "Most common presenting symptom of internal piles:",
    options: ["Severe pain", "Bright red bleeding per rectum", "Constipation", "Diarrhea"],
    answer: "Bright red bleeding per rectum"
  },
  {
    question: "Which hemorrhoids are usually painful?",
    options: ["Grade I", "Internal", "External thrombosed", "All are painless"],
    answer: "External thrombosed"
  },
  {
    question: "A common trigger for piles:",
    options: ["High protein diet", "Low fiber diet", "Excess water", "Antibiotic use"],
    answer: "Low fiber diet"
  },
  {
    question: "Grade II hemorrhoids:",
    options: ["Do not prolapse", "Prolapse and need manual reduction", "Prolapse and reduce spontaneously", "Bleed profusely"],
    answer: "Prolapse and reduce spontaneously"
  },
  {
    question: "Best non-surgical measure for early piles:",
    options: ["Antibiotics", "Laxatives only", "High fiber diet and water", "Iron supplements"],
    answer: "High fiber diet and water"
  },
  {
    question: "Rubber band ligation is used for:",
    options: ["Grade I", "Grade IV", "Grade II/III", "External piles"],
    answer: "Grade II/III"
  },
  {
    question: "Common postoperative complaint after hemorrhoidectomy:",
    options: ["Nausea", "Constipation", "Pain", "Jaundice"],
    answer: "Pain"
  },
  {
    question: "Which technique uses stapler?",
    options: ["Milligan-Morgan", "PPH", "DG-HAL", "Laser"],
    answer: "PPH"
  },
  {
    question: "Diagnostic tool for hemorrhoids:",
    options: ["MRI", "Colonoscopy", "Proctoscopy", "Sigmoid biopsy"],
    answer: "Proctoscopy"
  },
  {
    question: "Sitz bath helps by:",
    options: ["Dissolving piles", "Improving blood circulation", "Preventing stones", "Treating diarrhea"],
    answer: "Improving blood circulation"
  },
  {
    question: "Hemorrhoids are swollen:",
    options: ["Lymph nodes", "Arteries", "Veins", "Glands"],
    answer: "Veins"
  },
  {
    question: "External hemorrhoids are located:",
    options: ["Above pectinate line", "In small intestine", "Below pectinate line", "Inside rectum"],
    answer: "Below pectinate line"
  },
  {
    question: "Stapled hemorrhoidectomy causes:",
    options: ["More pain", "Less pain", "No bleeding", "High infection"],
    answer: "Less pain"
  },
  {
    question: "One major complication if untreated:",
    options: ["Appendicitis", "Anemia", "Asthma", "UTI"],
    answer: "Anemia"
  },
  {
    question: "Which therapy uses heat to shrink hemorrhoids?",
    options: ["Rubber band", "Infrared coagulation", "PPH", "Steroids"],
    answer: "Infrared coagulation"
  },
  {
    question: "Hemorrhoids in pregnancy:",
    options: ["Never occur", "Require immediate surgery", "Often resolve after delivery", "Are cancerous"],
    answer: "Often resolve after delivery"
  },
  {
    question: "Preventive step:",
    options: ["High fat diet", "Use of antacids", "Increased fluid and fiber", "Using hot pads"],
    answer: "Increased fluid and fiber"
  },
  {
    question: "Bleeding with piles is:",
    options: ["Dark and mixed with stool", "Bright red, painless", "Tarry and black", "Mucous only"],
    answer: "Bright red, painless"
  },
  {
    question: "Colonoscopy is indicated in:",
    options: ["Children", "Elderly with rectal bleeding", "Grade I piles", "Diabetic patients"],
    answer: "Elderly with rectal bleeding"
  },
  {
    question: "Lifestyle advice includes:",
    options: ["Avoid water", "Suppress urge to defecate", "Avoid long sitting in toilet", "Eat raw meat"],
    answer: "Avoid long sitting in toilet"
  }
];


const Piles = () => {
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
      <h1>🟠 Hemorrhoids (Piles)</h1>
      <p className="lead">“Swollen veins that cause discomfort down under.”</p>

      <section className="info-section">
  <h3>🔍 What Really Are Piles?</h3>
  <p>
    Piles, or hemorrhoids, are dilated, swollen blood vessels in the anal canal — similar to varicose veins in the legs.
    These vascular cushions normally help with stool control and continence. But when they become engorged, inflamed, or prolapsed, they turn pathological.
    They’re one of the most common anorectal complaints, often underreported due to embarrassment.
    Chronic straining, constipation, sedentary lifestyle, and certain medical conditions increase the risk.
  </p>

  <h3>📍 Understanding Internal vs. External Piles</h3>
  <h4>📌 Internal Hemorrhoids:</h4>
  <ul>
    <li>Originate above the dentate (pectinate) line</li>
    <li>Usually painless, but bleed during or after passing stool</li>
    <li>Graded based on prolapse:
      <ul>
        <li>Grade I – No prolapse, only bleeding</li>
        <li>Grade II – Prolapse but retracts spontaneously</li>
        <li>Grade III – Prolapse, needs manual reduction</li>
        <li>Grade IV – Permanently prolapsed and irreducible</li>
      </ul>
    </li>
  </ul>

  <h4>📌 External Hemorrhoids:</h4>
  <ul>
    <li>Originate below the dentate line</li>
    <li>Covered by skin, often painful — especially if thrombosed</li>
    <li>Present as lumps, itching, pain, and bleeding</li>
  </ul>

  <h3>🚩 What Brings It On?</h3>
  <ul>
    <li>Chronic constipation or diarrhea</li>
    <li>Prolonged straining during defecation</li>
    <li>Low-fiber diet</li>
    <li>Sedentary lifestyle, prolonged sitting</li>
    <li>Pregnancy and childbirth</li>
    <li>Portal hypertension (rarely)</li>
    <li>Obesity and heavy lifting</li>
  </ul>
  <p>They’re also more common with aging, as the supportive connective tissue of the anal cushions weakens.</p>

  <h3>🔎 Key Symptoms That Raise a Red Flag</h3>
  <ul>
    <li>Bright red bleeding per rectum — often coating the stool or dripping into the pan</li>
    <li>Anal itching or discomfort</li>
    <li>Feeling of incomplete evacuation</li>
    <li>Bulge or swelling at the anus during/after defecation</li>
    <li>Mucous discharge</li>
    <li>Pain (usually external piles or thrombosed internal piles)</li>
    <li>Soiling of undergarments in advanced cases</li>
  </ul>
  <p><strong>Note:</strong> If there's dark blood, weight loss, or altered bowel habits, one must rule out colorectal cancer or inflammatory bowel disease.</p>

  <h3>🩺 How the Diagnosis Is Made</h3>
  <ul>
    <li><strong>Digital Rectal Examination (DRE):</strong> To palpate internal swelling or rule out masses</li>
    <li><strong>Proctoscopy / Anoscopy:</strong> Direct visualization of internal hemorrhoids</li>
    <li><strong>Sigmoidoscopy / Colonoscopy:</strong> For patients:
      <ul>
        <li>Over 45 years</li>
        <li>With change in bowel habits</li>
        <li>With persistent bleeding</li>
        <li>With malignancy risk factors</li>
      </ul>
    </li>
  </ul>

  <h3>🧴 When to Treat Conservatively?</h3>
  <p>First-line for early-stage (Grade I/II):</p>
  <ul>
    <li>High-fiber diet (fruits, vegetables, whole grains)</li>
    <li>Adequate water intake</li>
    <li>Stool softeners or bulk-forming laxatives</li>
    <li>Warm sitz baths</li>
    <li>Topical creams (lidocaine, hydrocortisone, flavonoids)</li>
    <li>Avoid prolonged straining or sitting on the toilet</li>
  </ul>
  <p>✅ In many patients, Grade I/II hemorrhoids improve significantly with lifestyle and dietary changes.</p>

  <h3>💉 When Is a Procedure Necessary?</h3>
  <h4>🔹 Minimally Invasive (OPD-based) Treatments:</h4>
  <ul>
    <li>Rubber band ligation – common for Grade II/III</li>
    <li>Infrared coagulation (IRC)</li>
    <li>Sclerotherapy – injection to obliterate veins</li>
  </ul>

  <h4>🔹 Surgical Options – Reserved for:</h4>
  <ul>
    <li>Grade III/IV hemorrhoids</li>
    <li>Recurrent, bleeding, painful piles</li>
    <li>Complicated or thrombosed hemorrhoids</li>
    <li>Failure of outpatient procedures</li>
  </ul>
  <p><strong>Common Surgical Techniques:</strong></p>
  <ul>
    <li>Conventional hemorrhoidectomy (Milligan-Morgan)</li>
    <li>Stapled hemorrhoidopexy (PPH)</li>
    <li>Laser hemorrhoidoplasty</li>
    <li>Doppler-guided hemorrhoidal artery ligation (DG-HAL)</li>
  </ul>
  <p><em>Recovery from hemorrhoidectomy may take 1–2 weeks, with postoperative pain being the most reported issue.</em></p>

  <h3>⚠️ Possible Complications (If Untreated or Mismanaged)</h3>
  <ul>
    <li>Anemia due to chronic blood loss</li>
    <li>Thrombosis and intense pain</li>
    <li>Ulceration and infection</li>
    <li>Prolapse and soiling</li>
    <li>Rarely, abscess or fistula formation</li>
  </ul>
  <p>Psychologically, patients suffer embarrassment, social withdrawal, and anxiety — making it a quality-of-life condition, not just a surgical one.</p>

  <h3>🏥 At Our Clinic – What You Can Expect</h3>
  <ul>
    <li>✅ Detailed evaluation and confirmation with anoscopy/proctoscopy</li>
    <li>✅ Staging of hemorrhoids and tailoring treatment accordingly</li>
    <li>✅ Nutrition counselling with a high-fiber recovery plan</li>
    <li>✅ Same-day procedures like banding, sclerotherapy, or laser</li>
    <li>✅ Dedicated surgical team for advanced or complex hemorrhoids</li>
    <li>✅ Postoperative care with sitz bath guidance, wound care tips, and anxiety support</li>
    <li>✅ Follow-up reviews to ensure healing and lifestyle compliance</li>
  </ul>
  <p>Our emphasis is always on non-invasive options first, with surgery reserved for necessary cases — in line with global best practices.</p>

  <h3>💡 Clinical Pearls</h3>
  <ul>
    <li>Painless bleeding during defecation in a young adult = suspect internal hemorrhoids</li>
    <li>Painful anal lump = usually external thrombosed hemorrhoid</li>
    <li>High-fiber + fluids + activity = long-term prevention</li>
    <li>Avoid long bathroom sitting or mobile phone use while defecating</li>
    <li>Colonoscopy is essential in older patients to rule out cancer</li>
  </ul>
</section>


      <section className="quiz-section">
        <h2>🧠 Quick Quiz — Hemorrhoids</h2>

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

export default Piles;
