import React, { useState } from 'react';
import './RP1InfertilityInsights.css';

const quizData = [
  {
    question: "Which hormone is primarily responsible for prostate growth in BPH?",
    options: ["Estrogen", "Testosterone", "DHT", "Cortisol"],
    answer: "DHT"
  },
  {
    question: "Which of the following is a storage symptom of BPH?",
    options: ["Hesitancy", "Weak stream", "Frequency", "Straining"],
    answer: "Frequency"
  },
  {
    question: "Which investigation helps measure urine flow?",
    options: ["Uroflowmetry", "PSA", "CT Scan", "DRE"],
    answer: "Uroflowmetry"
  },
  {
    question: "Which is the gold standard surgical treatment for BPH?",
    options: ["UroLift", "HoLEP", "TURP", "Open Prostatectomy"],
    answer: "TURP"
  },
  {
    question: "What does IPSS stand for?",
    options: [
      "International Prostate Safety Score",
      "Indian Prostate Screening Score",
      "International Prostate Symptom Score",
      "Internal Pelvic Screening System"
    ],
    answer: "International Prostate Symptom Score"
  },
  {
    question: "Which class of drug helps shrink the prostate gland?",
    options: [
      "Alpha blockers",
      "Beta blockers",
      "5-alpha reductase inhibitors",
      "Antihistamines"
    ],
    answer: "5-alpha reductase inhibitors"
  },
  {
    question: "What is the function of the prostate?",
    options: [
      "Urine production",
      "Sperm motility",
      "Produces seminal fluid",
      "Testosterone synthesis"
    ],
    answer: "Produces seminal fluid"
  },
  {
    question: "Which of the following is not a risk factor for BPH?",
    options: ["Age above 50", "Obesity", "High-fiber diet", "Diabetes"],
    answer: "High-fiber diet"
  },
  {
    question: "Which test helps rule out malignancy in BPH patients?",
    options: ["Urine microscopy", "DRE", "Serum PSA", "Blood sugar"],
    answer: "Serum PSA"
  },
  {
    question: "A patient has nocturia and straining. What's the likely diagnosis?",
    options: ["UTI", "BPH", "Kidney stone", "Bladder tumor"],
    answer: "BPH"
  },
  {
    question: "What symptom is typically not seen in BPH?",
    options: ["Poor stream", "Hematuria", "Dribbling", "Hesitancy"],
    answer: "Hematuria"
  },
  {
    question: "What would be an abnormal post-void residual urine volume?",
    options: ["10 mL", "50 mL", ">100 mL", "<30 mL"],
    answer: ">100 mL"
  },
  {
    question: "Which of these procedures uses laser technology?",
    options: ["TURP", "HoLEP", "UroLift", "Rezum"],
    answer: "HoLEP"
  },
  {
    question: "What role does alpha-blocker play in BPH?",
    options: [
      "Reduces inflammation",
      "Relaxes bladder",
      "Relaxes prostate smooth muscle",
      "Shrinks prostate"
    ],
    answer: "Relaxes prostate smooth muscle"
  },
  {
    question: "Which of these is a complication of untreated BPH?",
    options: [
      "Erectile dysfunction",
      "Chronic kidney disease",
      "Lung fibrosis",
      "Stroke"
    ],
    answer: "Chronic kidney disease"
  },
  {
    question: "What dietary change helps in BPH?",
    options: ["High protein intake", "Limit caffeine", "Increase red meat", "Avoid fruits"],
    answer: "Limit caffeine"
  },
  {
    question: "Which investigation helps visualize the prostate and residual urine?",
    options: ["X-ray", "CT scan", "Ultrasound KUB", "MRI brain"],
    answer: "Ultrasound KUB"
  },
  {
    question: "What is a major concern with acute urinary retention?",
    options: ["Pain", "Fever", "Renal shutdown", "Nausea"],
    answer: "Renal shutdown"
  },
  {
    question: "What is the usual consistency of the prostate in BPH?",
    options: [
      "Hard and nodular",
      "Soft and spongy",
      "Smooth, enlarged",
      "Shrunken"
    ],
    answer: "Smooth, enlarged"
  },
  {
    question: "Which of the following is false about BPH?",
    options: [
      "It affects mostly elderly men",
      "It is always malignant",
      "It may require lifelong treatment",
      "PSA may be mildly elevated"
    ],
    answer: "It is always malignant"
  }
];

const BPH = () => {
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
      <h1>🟠 BPH (Benign Prostatic Hyperplasia)</h1>
      <p className="lead">“A Deep Dive into Prostate Enlargement ”</p>

      <section className="info-section">
  <h3>🧠 Overview: What Is BPH?</h3>
  <p>
    <strong>Benign Prostatic Hyperplasia (BPH)</strong> is a non-cancerous enlargement of the prostate gland, commonly affecting aging men. It occurs due to overgrowth of prostate cells, compressing the urethra and disrupting urine flow. While not malignant, untreated BPH can lead to retention, bladder damage, infections, and kidney issues.
  </p>

  <h3>🔬 Anatomy Refresher: Understanding the Prostate</h3>
  <ul>
    <li>The prostate is a walnut-sized gland located below the bladder, encircling the urethra.</li>
    <li>It produces seminal fluid for sperm transport and nourishment.</li>
    <li>Aging increases <strong>DHT</strong> (dihydrotestosterone), contributing to glandular enlargement.</li>
  </ul>

  <h3>⚙️ Pathophysiology of BPH</h3>
  <ol>
    <li><strong>Hormonal Imbalance:</strong> Shift in testosterone-estrogen ratio increases DHT.</li>
    <li><strong>Cell Proliferation:</strong> DHT binds to androgen receptors, triggering growth.</li>
    <li><strong>Compression:</strong> Enlarged prostate narrows urethra, obstructing urine flow.</li>
  </ol>

  <h3>📊 Prevalence and Impact</h3>
  <ul>
    <li>Up to 50% of men by age 60; 80% by age 80</li>
    <li>Not all cases are symptomatic</li>
    <li>May lead to poor sleep, anxiety about urination, and reduced life quality</li>
  </ul>

  <h3>🚽 Clinical Presentation: How BPH Shows Up</h3>
  <p><strong>Lower Urinary Tract Symptoms (LUTS):</strong></p>
  <ul>
    <li><strong>Storage Symptoms:</strong> Frequency, urgency, nocturia, urge incontinence</li>
    <li><strong>Voiding Symptoms:</strong> Hesitancy, poor stream, dribbling, intermittency, straining, incomplete emptying</li>
  </ul>

  <h3>🩺 Diagnostic Evaluation</h3>
  <ul>
    <li><strong>Clinical History:</strong> IPSS (International Prostate Symptom Score), sexual and lifestyle history</li>
    <li><strong>Physical Exam:</strong> Digital Rectal Examination (DRE)</li>
    <li><strong>Lab & Imaging:</strong>
      <ul>
        <li>Urinalysis (infections, hematuria)</li>
        <li>Serum PSA</li>
        <li>Renal function tests</li>
        <li>Ultrasound KUB with post-void residual</li>
        <li>Uroflowmetry</li>
      </ul>
    </li>
  </ul>

  <h3>📈 International Prostate Symptom Score (IPSS)</h3>
  <p>Each symptom (0–5):</p>
  <ul>
    <li>Incomplete emptying</li>
    <li>Frequency</li>
    <li>Intermittency</li>
    <li>Urgency</li>
    <li>Weak stream</li>
    <li>Straining</li>
    <li>Nocturia</li>
  </ul>
  <p><strong>Score Interpretation:</strong></p>
  <ul>
    <li>0–7: Mild</li>
    <li>8–19: Moderate</li>
    <li>20–35: Severe</li>
  </ul>

  <h3>🧰 Treatment: From Lifestyle to Surgery</h3>
  <ol>
    <li><strong>Lifestyle Measures:</strong> Fluid timing, avoid alcohol/caffeine, bladder training, exercise</li>
    <li><strong>Medical Management:</strong>
      <ul>
        <li>Alpha Blockers (Tamsulosin, Alfuzosin)</li>
        <li>5-alpha Reductase Inhibitors (Finasteride, Dutasteride)</li>
        <li>Combination Therapy</li>
        <li>Anticholinergics / Mirabegron for urgency-predominant symptoms</li>
      </ul>
    </li>
    <li><strong>Minimally Invasive Procedures:</strong> UroLift, Rezum (steam-based therapy)</li>
    <li><strong>Surgical Options:</strong> TURP (gold standard), HoLEP, rarely open prostatectomy</li>
  </ol>

  <h3>⚠️ Complications If Untreated</h3>
  <ul>
    <li>Urinary retention (acute/chronic)</li>
    <li>Bladder dysfunction and infections</li>
    <li>Kidney damage (hydronephrosis)</li>
    <li>Bladder stones</li>
  </ul>

  <h3>🔎 BPH vs Prostate Cancer: Key Differences</h3>
  <table>
    <thead>
      <tr>
        <th>Feature</th>
        <th>BPH</th>
        <th>Prostate Cancer</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Nature</td>
        <td>Benign enlargement</td>
        <td>Malignant growth</td>
      </tr>
      <tr>
        <td>PSA</td>
        <td>Mild/moderate rise</td>
        <td>Can be significantly elevated</td>
      </tr>
      <tr>
        <td>DRE</td>
        <td>Smooth, symmetrical</td>
        <td>Hard, nodular</td>
      </tr>
      <tr>
        <td>Growth</td>
        <td>Slow, age-related</td>
        <td>May be aggressive</td>
      </tr>
      <tr>
        <td>Symptoms</td>
        <td>Obstructive LUTS</td>
        <td>Often asymptomatic early on</td>
      </tr>
    </tbody>
  </table>

  <h3>🧠 Myths and Facts</h3>
  <table>
    <thead>
      <tr>
        <th>Myth</th>
        <th>Truth</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>All prostate enlargements mean cancer</td>
        <td>BPH is benign and does not cause cancer</td>
      </tr>
      <tr>
        <td>TURP affects sexual function</td>
        <td>Modern TURP preserves erectile and ejaculatory function in most cases</td>
      </tr>
      <tr>
        <td>All BPH needs surgery</td>
        <td>Many men are managed effectively with medications</td>
      </tr>
      <tr>
        <td>PSA is only for cancer</td>
        <td>PSA also helps monitor BPH progression and therapy response</td>
      </tr>
    </tbody>
  </table>

  <h3>🧘‍♂️ Holistic Tips</h3>
  <ul>
    <li>Practice pelvic floor strengthening exercises (Kegels)</li>
    <li>Stay hydrated — but limit evening fluids</li>
    <li>Use mindful bladder emptying postures</li>
    <li>Avoid OTC cold medications containing decongestants or antihistamines</li>
  </ul>
</section>

      <section className="quiz-section">
        <h2>🧠 Quick Quiz — BPH</h2>

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

export default BPH;
