import React, { useState } from 'react';
import './RP1InfertilityInsights.css';

const quizData = [
  {
    question: "Hydrocele is the accumulation of fluid in the:",
    options: [
      "Epididymis",
      "Tunica vaginalis",
      "Vas deferens",
      "Seminal vesicle"
    ],
    answer: "Tunica vaginalis"
  },
  {
    question: "Which test helps differentiate hydrocele from other scrotal swellings?",
    options: ["ECG", "Transillumination", "Blood pressure", "Spirometry"],
    answer: "Transillumination"
  },
  {
    question: "What type of hydrocele is commonly seen in infants?",
    options: ["Acquired", "Reactive", "Communicating", "Encysted"],
    answer: "Communicating"
  },
  {
    question: "Which of these is a common symptom of hydrocele?",
    options: ["Burning urination", "Testicular torsion", "Painless swelling", "Itchy rash"],
    answer: "Painless swelling"
  },
  {
    question: "Ultrasound in hydrocele shows:",
    options: ["Air-filled sac", "Solid tumor", "Clear fluid collection", "Calcification"],
    answer: "Clear fluid collection"
  },
  {
    question: "A long-standing hydrocele can lead to:",
    options: ["Testicular atrophy", "Lung fibrosis", "Liver cirrhosis", "Kidney stones"],
    answer: "Testicular atrophy"
  },
  {
    question: "Hydrocele aspiration is mainly used when:",
    options: [
      "Surgery is urgently needed",
      "Patient is not fit for surgery",
      "There's a torsion",
      "Fluid is infected"
    ],
    answer: "Patient is not fit for surgery"
  },
  {
    question: "Lord’s procedure is a surgical technique for:",
    options: ["Hernia repair", "Hydrocele repair", "Piles", "Varicocele"],
    answer: "Hydrocele repair"
  },
  {
    question: "Communicating hydrocele in infants may close spontaneously by age:",
    options: ["6 months", "1 year", "2 years", "5 years"],
    answer: "2 years"
  },
  {
    question: "Which of these is NOT a differential diagnosis of hydrocele?",
    options: ["Varicocele", "Inguinal hernia", "Torsion", "Hemorrhoid"],
    answer: "Hemorrhoid"
  },
  {
    question: "Hydrocele fluid is usually:",
    options: [
      "Thick and purulent",
      "Bloody",
      "Clear and straw-colored",
      "Dark brown"
    ],
    answer: "Clear and straw-colored"
  },
  {
    question: "Which is a complication of hydrocele surgery?",
    options: ["Brain stroke", "Diarrhea", "Scrotal hematoma", "Gastritis"],
    answer: "Scrotal hematoma"
  },
  {
    question: "Best initial investigation in adult hydrocele:",
    options: ["MRI", "Urine culture", "Ultrasound", "CT scan"],
    answer: "Ultrasound"
  },
  {
    question: "Which tropical infection is associated with secondary hydrocele?",
    options: ["Dengue", "Tuberculosis", "Filariasis", "Malaria"],
    answer: "Filariasis"
  },
  {
    question: "When is surgical repair for hydrocele advised in infants?",
    options: [
      "Always immediately",
      "Only if persists after 2 years",
      "In newborns",
      "When fever is present"
    ],
    answer: "Only if persists after 2 years"
  },
  {
    question: "Which structure fails to close in congenital hydrocele?",
    options: [
      "Vas deferens",
      "Spermatic cord",
      "Processus vaginalis",
      "Epididymal duct"
    ],
    answer: "Processus vaginalis"
  },
  {
    question: "Adult hydrocele is usually:",
    options: ["Infectious", "Idiopathic", "Fungal", "Cancerous"],
    answer: "Idiopathic"
  },
  {
    question: "Which condition may mimic hydrocele but is a vascular issue?",
    options: ["Varicocele", "Tumor", "Spermatocele", "Orchitis"],
    answer: "Varicocele"
  },
  {
    question: "A hydrocele that doesn’t transilluminate may indicate:",
    options: [
      "Simple hydrocele",
      "Hematocele or tumor",
      "Epididymal cyst",
      "Normal testicle"
    ],
    answer: "Hematocele or tumor"
  },
  {
    question: "Post-hydrocelectomy, a patient is advised to:",
    options: [
      "Avoid water",
      "Wear tight underwear",
      "Resume gym immediately",
      "Sleep sitting up"
    ],
    answer: "Wear tight underwear"
  }
];

const Hydrocele = () => {
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
      <h1>🟠 Hydrocele</h1>
      <p className="lead">“A Painless Scrotal Swelling That Deserves Attention 
        - Understanding Hydrocele: Causes, Symptoms, Treatment, and When to Worry”</p>

      <section className="info-section">
  <h3>💧 What Is a Hydrocele?</h3>
  <p>
    A hydrocele is an accumulation of clear fluid within the tunica vaginalis—the thin sac surrounding the testicle. It presents as a painless swelling in the scrotum, often first noticed without associated discomfort. Hydroceles are benign and non-cancerous but may resemble conditions like hernia or tumors, requiring proper evaluation.
  </p>

  <h3>🧬 Anatomy Refresher</h3>
  <ul>
    <li>The testicles are covered by the tunica vaginalis—a double-layered sac.</li>
    <li>A small amount of fluid normally lubricates the scrotal space.</li>
    <li>In a hydrocele, this fluid builds up due to increased production or reduced absorption.</li>
  </ul>

  <h3>📚 Types of Hydrocele</h3>
  <ul>
    <li><strong>1. Congenital Hydrocele (Communicating):</strong>
      <ul>
        <li>Seen in infants or newborns</li>
        <li>Due to failure of closure of the processus vaginalis</li>
        <li>Size may fluctuate during the day</li>
      </ul>
    </li>
    <li><strong>2. Acquired (Adult) Hydrocele:</strong>
      <ul>
        <li>Common in men over 40</li>
        <li>May be idiopathic or secondary to:
          <ul>
            <li>Infections (e.g., epididymitis, filariasis)</li>
            <li>Trauma</li>
            <li>Tumors</li>
            <li>Post-surgical complications</li>
          </ul>
        </li>
      </ul>
    </li>
  </ul>

  <h3>🔍 Clinical Features</h3>
  <ul>
    <li>Scrotal swelling—usually one-sided, smooth, and non-tender</li>
    <li>Heaviness or fullness without pain</li>
    <li>Positive transillumination test</li>
    <li>Larger swellings may cause discomfort while walking or sitting</li>
  </ul>

  <h3>🔬 How Is Hydrocele Diagnosed?</h3>
  <ol>
    <li><strong>History & Physical Examination:</strong> Scrotal inspection and palpation, checking for fluctuation and transillumination</li>
    <li><strong>Ultrasound Scrotum:</strong> Confirms diagnosis and rules out torsion, tumors</li>
    <li><strong>Additional Tests:</strong> If secondary cause suspected
      <ul>
        <li>Urinalysis</li>
        <li>Blood tests (e.g., filariasis screen)</li>
        <li>Tumor markers if needed</li>
      </ul>
    </li>
  </ol>

  <h3>⚖️ Differential Diagnosis</h3>
  <ul>
    <li>Inguinal hernia</li>
    <li>Varicocele</li>
    <li>Testicular torsion</li>
    <li>Epididymo-orchitis</li>
    <li>Testicular tumor</li>
    <li>Spermatocele</li>
  </ul>

  <h3>🛠️ Treatment Options</h3>
  <ul>
    <li><strong>1. Observation:</strong> Often resolves in infants by 1–2 years; adult cases may also be observed if asymptomatic</li>
    <li><strong>2. Aspiration:</strong> Temporary relief in non-surgical candidates; higher recurrence and infection risk</li>
    <li><strong>3. Surgical Repair (Hydrocelectomy):</strong> Outpatient definitive treatment
      <ul>
        <li>Jaboulay’s procedure – Excision and eversion</li>
        <li>Lord’s procedure – Plication of sac</li>
      </ul>
    </li>
    <li>⛔ <strong>Sclerotherapy:</strong> Not preferred due to recurrence and complications</li>
  </ul>

  <h3>⚠️ Complications of Untreated or Large Hydroceles</h3>
  <ul>
    <li>Heaviness or discomfort</li>
    <li>Pressure-related testicular atrophy</li>
    <li>Secondary infection or bleeding</li>
    <li>Cosmetic distress</li>
    <li>Masking underlying pathology (e.g., tumor)</li>
  </ul>

  <h3>🩹 Tips After Hydrocelectomy</h3>
  <ul>
    <li>Mild swelling and discomfort are normal</li>
    <li>Wear supportive underwear</li>
    <li>Avoid strenuous activity for 2 weeks</li>
    <li>Follow up with imaging if swelling persists</li>
  </ul>

  <h3>🛡️ Preventive Care</h3>
  <ul>
    <li>Timely treatment of infections</li>
    <li>Good scrotal hygiene</li>
    <li>Use protection during contact sports</li>
    <li>Don’t ignore or self-diagnose scrotal lumps</li>
  </ul>

  <h3>🧠 Myths vs Facts</h3>
  <table>
    <thead>
      <tr>
        <th>Myth</th>
        <th>Fact</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Hydrocele is always painful</td>
        <td>Most hydroceles are painless</td>
      </tr>
      <tr>
        <td>Only children get hydrocele</td>
        <td>Adults can also develop hydroceles</td>
      </tr>
      <tr>
        <td>Surgery for hydrocele is dangerous</td>
        <td>Hydrocelectomy is a safe, minor procedure</td>
      </tr>
      <tr>
        <td>Hydrocele turns into cancer</td>
        <td>Hydrocele is benign, but underlying tumor must be ruled out</td>
      </tr>
    </tbody>
  </table>

  <h3>🏥 Sukam Speciality Clinic’s Approach</h3>
  <ul>
    <li>✅ Detailed evaluation with clinical exam and imaging</li>
    <li>✅ Personalized management (conservative or surgical)</li>
    <li>✅ Day-care surgery with minimal downtime</li>
    <li>✅ Dedicated follow-up and post-op guidance</li>
  </ul>
</section>

      <section className="quiz-section">
        <h2>🧠 Quick Quiz — Hydrocele</h2>

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

export default Hydrocele;
