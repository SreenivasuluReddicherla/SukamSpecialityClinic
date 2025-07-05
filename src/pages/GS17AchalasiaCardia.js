import React, { useState } from 'react';
import './RP1InfertilityInsights.css';

const quizData = [
  {
    question: "Achalasia is caused by:",
    options: [
      "Esophageal cancer",
      "Hiatal hernia",
      "Failure of LES relaxation",
      "Acid overproduction"
    ],
    answer: "Failure of LES relaxation"
  },
  {
    question: "Most common symptom of Achalasia:",
    options: [
      "Vomiting",
      "Heartburn",
      "Dysphagia",
      "Jaundice"
    ],
    answer: "Dysphagia"
  },
  {
    question: "Barium swallow in Achalasia shows:",
    options: [
      "Apple core lesion",
      "Bird's beak appearance",
      "Corkscrew pattern",
      "Double bubble"
    ],
    answer: "Bird's beak appearance"
  },
  {
    question: "LES in achalasia is:",
    options: [
      "Open continuously",
      "Too relaxed",
      "Fails to relax",
      "Hyperactive"
    ],
    answer: "Fails to relax"
  },
  {
    question: "Best diagnostic test for Achalasia:",
    options: [
      "Endoscopy",
      "Manometry",
      "CT scan",
      "pH test"
    ],
    answer: "Manometry"
  },
  {
    question: "Type II Achalasia is best treated with:",
    options: [
      "Medications only",
      "Botox",
      "Pneumatic dilatation",
      "Proton pump inhibitors"
    ],
    answer: "Pneumatic dilatation"
  },
  {
    question: "Aspiration during sleep in achalasia is due to:",
    options: [
      "Acid reflux",
      "Esophageal food retention",
      "Diaphragm spasm",
      "Gallstones"
    ],
    answer: "Esophageal food retention"
  },
  {
    question: "Best treatment in young fit patient:",
    options: [
      "Botox",
      "Surgery (Heller’s myotomy)",
      "PPIs",
      "Ryles tube feeding"
    ],
    answer: "Surgery (Heller’s myotomy)"
  },
  {
    question: "POEM is:",
    options: [
      "Palliative oncology method",
      "Peroral endoscopic myotomy",
      "Cardiac surgery",
      "Fissure repair"
    ],
    answer: "Peroral endoscopic myotomy"
  },
  {
    question: "Regurgitation in achalasia is:",
    options: [
      "Acidic",
      "Bile stained",
      "Non-acidic, undigested",
      "Bloody"
    ],
    answer: "Non-acidic, undigested"
  },
  {
    question: "A key risk if achalasia is untreated:",
    options: [
      "Gallstones",
      "Lung cancer",
      "Esophageal cancer",
      "Crohn’s disease"
    ],
    answer: "Esophageal cancer"
  },
  {
    question: "Achalasia typically begins at:",
    options: [
      "Childhood",
      "Adolescence",
      "25–50 years",
      ">70 years"
    ],
    answer: "25–50 years"
  },
  {
    question: "All are symptoms of achalasia EXCEPT:",
    options: [
      "Weight loss",
      "Dysphagia",
      "Hematemesis",
      "Chest pain"
    ],
    answer: "Hematemesis"
  },
  {
    question: "Type III achalasia has:",
    options: [
      "Best prognosis",
      "Spastic contractions",
      "Complete peristalsis",
      "Low LES pressure"
    ],
    answer: "Spastic contractions"
  },
  {
    question: "Pseudoachalasia may be due to:",
    options: [
      "Viral infection",
      "Underactive thyroid",
      "GE junction cancer",
      "TB"
    ],
    answer: "GE junction cancer"
  },
  {
    question: "LES stands for:",
    options: [
      "Liver enzyme system",
      "Left esophageal segment",
      "Lower esophageal sphincter",
      "Lung evaluation study"
    ],
    answer: "Lower esophageal sphincter"
  },
  {
    question: "Manometry shows:",
    options: [
      "Blood pressure",
      "LES relaxation and peristalsis",
      "Acid production",
      "Barium flow"
    ],
    answer: "LES relaxation and peristalsis"
  },
  {
    question: "Post-surgery GERD prevention is done by:",
    options: [
      "Removing stomach",
      "Adding stent",
      "Fundoplication",
      "Omeprazole alone"
    ],
    answer: "Fundoplication"
  },
  {
    question: "Endoscopy in achalasia helps to:",
    options: [
      "Treat it fully",
      "Check for cancer or narrowing",
      "Visualize heart",
      "Diagnose hiatal hernia only"
    ],
    answer: "Check for cancer or narrowing"
  },
  {
    question: "Bird’s beak sign indicates:",
    options: [
      "Stricture",
      "Cancer",
      "Achalasia",
      "Pancreatitis"
    ],
    answer: "Achalasia"
  }
];


const AchalasiaCardia = () => {
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const handleOptionClick = (questionIndex, option) => {
    setSelectedAnswers({ ...selectedAnswers, [questionIndex]: option });
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
      <h1>🟠 Achalasia Cardia</h1>
      <p className="lead">“A food pipe freeze, mid-meal.”</p>

      <section className="info-section">
  <h3>🔍 What is Achalasia?</h3>
  <p>
    Achalasia is a rare motility disorder of the esophagus where the Lower Esophageal Sphincter (LES) fails to relax, and the esophageal muscles lose their coordinated movement. This leads to difficulty swallowing, regurgitation of undigested food, and sometimes chest pain.
  </p>
  <p>
    Imagine a locked gate at the stomach’s entrance while food accumulates and stagnates in the esophagus — that’s achalasia.
  </p>

  <h3>🧠 The Core Mechanism</h3>
  <ul>
    <li>Loss of peristalsis – the wave-like motion that moves food down</li>
    <li>Failure of LES to relax during swallowing</li>
  </ul>
  <p>This is due to degeneration of ganglion cells in the esophageal wall's myenteric plexus.</p>

  <h3>📋 Typical Symptoms</h3>
  <table>
    <thead>
      <tr><th>Symptom</th><th>Description</th></tr>
    </thead>
    <tbody>
      <tr><td>Progressive dysphagia</td><td>Difficulty swallowing both solids and liquids</td></tr>
      <tr><td>Regurgitation</td><td>Non-acidic, undigested food returns to the mouth</td></tr>
      <tr><td>Chest pain</td><td>Burning or tightness behind the breastbone, especially after meals</td></tr>
      <tr><td>Weight loss</td><td>Due to poor food intake over time</td></tr>
      <tr><td>Nocturnal cough or aspiration</td><td>Food spills into the airway during sleep</td></tr>
      <tr><td>Bad breath (halitosis)</td><td>Caused by food stasis in the esophagus</td></tr>
    </tbody>
  </table>

  <h3>🧩 Differential Diagnosis</h3>
  <table>
    <thead>
      <tr><th>Condition</th><th>Key Differentiator</th></tr>
    </thead>
    <tbody>
      <tr><td>Esophageal cancer</td><td>Starts with solids, rapid weight loss, older age</td></tr>
      <tr><td>GERD</td><td>Dominated by acid regurgitation and heartburn</td></tr>
      <tr><td>Esophageal stricture</td><td>History of chronic reflux or chemical ingestion</td></tr>
      <tr><td>Diffuse esophageal spasm</td><td>Chest pain more than dysphagia; corkscrew appearance on imaging</td></tr>
      <tr><td>Pseudoachalasia</td><td>Caused by malignancy near gastroesophageal junction, common in elderly</td></tr>
    </tbody>
  </table>

  <h3>🧪 Diagnosis: Step-by-Step</h3>
  <ol>
    <li><strong>Barium Swallow:</strong> “Bird’s beak” tapering of LES with dilated proximal esophagus</li>
    <li><strong>Esophageal Manometry:</strong> No peristalsis, high LES pressure, incomplete LES relaxation (gold standard)</li>
    <li><strong>Upper GI Endoscopy:</strong> Rules out pseudoachalasia or tumors, visualizes retained food in a dilated esophagus</li>
  </ol>

  <h3>📚 Types of Achalasia (Chicago Classification)</h3>
  <table>
    <thead>
      <tr><th>Type</th><th>Features</th></tr>
    </thead>
    <tbody>
      <tr><td>Type I (Classic)</td><td>No peristalsis, minimal esophageal pressure</td></tr>
      <tr><td>Type II</td><td>Aperistalsis with uniform pressurization (best response to treatment)</td></tr>
      <tr><td>Type III</td><td>Spastic type with abnormal, premature contractions (worst prognosis)</td></tr>
    </tbody>
  </table>

  <h3>🛠️ Treatment: Restoring the Gateway</h3>
  <ul>
    <li><strong>Medical Therapy:</strong> Nitrates or calcium channel blockers (limited, used in elderly)</li>
    <li><strong>Botulinum Toxin Injection:</strong> Endoscopic relief, lasts ~6 months</li>
    <li><strong>Pneumatic (Balloon) Dilatation:</strong> Endoscopic stretching of LES, effective but may need repeats; 2% perforation risk</li>
    <li><strong>Heller’s Myotomy:</strong> Surgical cutting of LES muscle fibers, often combined with fundoplication; best long-term relief</li>
    <li><strong>POEM (Per-Oral Endoscopic Myotomy):</strong> Endoscopic version of myotomy; less invasive, excellent for Type III achalasia</li>
  </ul>

  <h3>⚠️ Complications if Left Untreated</h3>
  <ul>
    <li>Megaesophagus (severely dilated esophagus)</li>
    <li>Aspiration pneumonia</li>
    <li>Malnutrition and weight loss</li>
    <li>Increased risk of esophageal squamous cell cancer</li>
  </ul>

  <h3>👩‍⚕️ Our Clinic’s Achalasia Management Approach</h3>
  <ul>
    <li>✅ Symptom evaluation and detailed history</li>
    <li>✅ Barium swallow and endoscopy on-site</li>
    <li>✅ Referral for manometry, POEM, or Heller's surgery as needed</li>
    <li>✅ Dietary support post-treatment (liquids → soft → solids)</li>
    <li>✅ Long-term surveillance to detect complications early</li>
  </ul>

  <h3>📣 Public Tips & Patient Advice</h3>
  <ul>
    <li>Dysphagia to both solids and liquids early in disease is a red flag</li>
    <li>Avoid lying down right after meals</li>
    <li>Soft or blended foods may help ease swallowing</li>
    <li>Do not mistake this condition for simple acid reflux</li>
    <li>Modern procedures like POEM can restore normal eating — safely and effectively</li>
  </ul>

  <p><strong>Achalasia is rare but treatable. Early diagnosis and intervention make all the difference.</strong></p>
</section>


      <section className="quiz-section">
        <h2>🧠 Quick Quiz — Achalasia Cardia</h2>

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

export default AchalasiaCardia;
