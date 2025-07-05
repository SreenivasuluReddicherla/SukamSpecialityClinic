import React, { useState } from 'react';
import './RP1InfertilityInsights.css';

const quizData = [
  {
    question: "Barrett’s Oesophagus is:",
    options: [
      "Cancer of the esophagus",
      "Change in the esophageal lining due to reflux",
      "A bacterial infection",
      "Hiatal hernia"
    ],
    answer: "Change in the esophageal lining due to reflux"
  },
  {
    question: "Which lining replaces normal squamous cells in Barrett’s?",
    options: [
      "Cuboidal",
      "Columnar intestinal-type",
      "Ciliated",
      "Transitional"
    ],
    answer: "Columnar intestinal-type"
  },
  {
    question: "Main risk factor for Barrett’s:",
    options: [
      "Alcoholic liver disease",
      "GERD",
      "Smoking only",
      "Appendicitis"
    ],
    answer: "GERD"
  },
  {
    question: "Key diagnostic test:",
    options: [
      "Colonoscopy",
      "Barium swallow",
      "Endoscopy with biopsy",
      "CT scan"
    ],
    answer: "Endoscopy with biopsy"
  },
  {
    question: "Barrett’s lining appears:",
    options: [
      "Grey and pale",
      "Pink and smooth",
      "Red and velvety",
      "White and nodular"
    ],
    answer: "Red and velvety"
  },
  {
    question: "Which increases cancer risk?",
    options: [
      "Non-dysplastic Barrett’s",
      "High-grade dysplasia",
      "Mild gastritis",
      "Gallstones"
    ],
    answer: "High-grade dysplasia"
  },
  {
    question: "Treatment for non-dysplastic Barrett’s:",
    options: [
      "Surgery",
      "Radiation",
      "PPI and surveillance",
      "Chemotherapy"
    ],
    answer: "PPI and surveillance"
  },
  {
    question: "Endoscopic RFA is used to:",
    options: [
      "Dilate strictures",
      "Remove polyps",
      "Destroy Barrett’s tissue",
      "Repair hiatal hernia"
    ],
    answer: "Destroy Barrett’s tissue"
  },
  {
    question: "How often to screen non-dysplastic Barrett’s?",
    options: [
      "Monthly",
      "Annually",
      "Every 3–5 years",
      "Never"
    ],
    answer: "Every 3–5 years"
  },
  {
    question: "A man with GERD for 10 years is at risk of:",
    options: [
      "Colon cancer",
      "Stomach hernia",
      "Barrett’s esophagus",
      "Bowel obstruction"
    ],
    answer: "Barrett’s esophagus"
  },
  {
    question: "Which is NOT a Barrett’s complication?",
    options: [
      "Stricture",
      "Cancer",
      "Hemorrhoids",
      "Ulceration"
    ],
    answer: "Hemorrhoids"
  },
  {
    question: "Barrett’s is more common in:",
    options: [
      "Women",
      "Men",
      "Children",
      "Teenagers"
    ],
    answer: "Men"
  },
  {
    question: "The process of Barrett’s formation is called:",
    options: [
      "Metaplasia",
      "Dysplasia",
      "Atrophy",
      "Necrosis"
    ],
    answer: "Metaplasia"
  },
  {
    question: "Which symptom should prompt endoscopy?",
    options: [
      "GERD < 2 weeks",
      "Weight gain",
      "Long-term reflux + anemia",
      "Constipation"
    ],
    answer: "Long-term reflux + anemia"
  },
  {
    question: "Definitive diagnosis of dysplasia is made via:",
    options: [
      "Biopsy",
      "CT scan",
      "Barium meal",
      "Ultrasound"
    ],
    answer: "Biopsy"
  },
  {
    question: "Best lifestyle advice for Barrett’s:",
    options: [
      "Heavy dinner at night",
      "Sleep right after meals",
      "Elevate head of bed",
      "Eat spicy food"
    ],
    answer: "Elevate head of bed"
  },
  {
    question: "Which drug class is key in treatment?",
    options: [
      "NSAIDs",
      "Antibiotics",
      "PPIs",
      "Laxatives"
    ],
    answer: "PPIs"
  },
  {
    question: "Which feature suggests high-grade dysplasia?",
    options: [
      "Weight stability",
      "Sudden weight loss",
      "Normal biopsy",
      "Mild inflammation"
    ],
    answer: "Sudden weight loss"
  },
  {
    question: "Cryotherapy in Barrett’s is used for:",
    options: [
      "Freezing varices",
      "Ablating abnormal tissue",
      "Cooling chest pain",
      "Gastric ulcers"
    ],
    answer: "Ablating abnormal tissue"
  },
  {
    question: "Barrett’s surveillance helps to:",
    options: [
      "Treat hernias",
      "Prevent reflux",
      "Catch early cancer",
      "Cure asthma"
    ],
    answer: "Catch early cancer"
  }
];


const BarrettEsophagus = () => {
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
      <h1>🟠 Barrett’s Esophagus</h1>
      <p className="lead">“A dangerous twist in chronic reflux.”</p>

      <section className="info-section">
  <h3>🩺 What Is Barrett’s Oesophagus?</h3>
  <p>
    Barrett’s Oesophagus is a condition where the normal squamous lining of the lower esophagus is replaced by a columnar (intestinal-type) lining—called intestinal metaplasia. This transformation is the body’s response to chronic acid reflux but comes with increased cancer risk.
  </p>

  <h3>❓ Why Does It Happen?</h3>
  <p>Barrett’s develops as a complication of long-standing GERD. Continuous acid and bile exposure cause cellular change in the esophageal lining.</p>
  <p><strong>Major Risk Factors:</strong></p>
  <ul>
    <li>Chronic GERD (&gt;5 years)</li>
    <li>Obesity (especially abdominal fat)</li>
    <li>Age &gt; 50</li>
    <li>Male gender</li>
    <li>White ethnicity</li>
    <li>Smoking and alcohol use</li>
    <li>Family history of esophageal adenocarcinoma</li>
  </ul>

  <h3>📌 Signs and Symptoms</h3>
  <p>Often asymptomatic and discovered during routine endoscopy. However, symptoms may include:</p>
  <ul>
    <li>Persistent heartburn or acid regurgitation</li>
    <li>Chest discomfort</li>
    <li>Difficulty or pain while swallowing</li>
    <li>Chronic cough or hoarseness</li>
    <li>Rarely, GI bleeding or iron-deficiency anemia</li>
  </ul>

  <h3>🧪 How Is Barrett’s Diagnosed?</h3>
  <ol>
    <li><strong>Upper GI Endoscopy (OGD):</strong> Red, velvety columnar mucosa replacing pink squamous lining</li>
    <li><strong>Biopsy & Histopathology:</strong> Confirms intestinal metaplasia; graded as:
      <ul>
        <li>Non-dysplastic Barrett’s</li>
        <li>Low-grade dysplasia (LGD)</li>
        <li>High-grade dysplasia (HGD)</li>
        <li>Early adenocarcinoma</li>
      </ul>
    </li>
    <li><strong>Surveillance Protocol:</strong> Endoscopic monitoring based on biopsy results</li>
  </ol>

  <h3>📊 Barrett’s vs Cancer Risk</h3>
  <table>
    <thead>
      <tr><th>Condition</th><th>Cancer Risk</th></tr>
    </thead>
    <tbody>
      <tr><td>Non-dysplastic Barrett’s</td><td>~0.3% per year</td></tr>
      <tr><td>Low-grade dysplasia</td><td>~0.5–1% per year</td></tr>
      <tr><td>High-grade dysplasia</td><td>5–10% per year</td></tr>
      <tr><td>Post-ablation Barrett’s</td><td>Very low (with follow-up)</td></tr>
    </tbody>
  </table>

  <h3>💊 How Is Barrett’s Oesophagus Managed?</h3>
  <ul>
    <li><strong>1. Aggressive GERD Control:</strong>
      <ul>
        <li>Proton Pump Inhibitors (PPIs) like pantoprazole or esomeprazole</li>
        <li>Weight loss, smoking/alcohol cessation, dietary changes</li>
        <li>Head-end elevation, avoid late-night meals</li>
      </ul>
    </li>
    <li><strong>2. Surveillance Endoscopy:</strong>
      <table>
        <thead>
          <tr><th>Barrett’s Type</th><th>Follow-Up</th></tr>
        </thead>
        <tbody>
          <tr><td>Non-dysplastic</td><td>Every 3–5 years</td></tr>
          <tr><td>Low-grade dysplasia</td><td>Every 6–12 months or consider ablation</td></tr>
          <tr><td>High-grade dysplasia</td><td>Immediate endoscopic therapy or surgery</td></tr>
        </tbody>
      </table>
    </li>
    <li><strong>3. Endoscopic Therapies for Dysplasia:</strong>
      <ul>
        <li>Radiofrequency Ablation (RFA)</li>
        <li>Endoscopic Mucosal Resection (EMR)</li>
        <li>Cryotherapy</li>
        <li>Esophagectomy (rare, in cancerous cases)</li>
      </ul>
    </li>
  </ul>

  <h3>⚠️ What If Left Untreated?</h3>
  <ul>
    <li>Progression to esophageal adenocarcinoma</li>
    <li>Strictures or ulcers in the esophagus</li>
    <li>Bleeding or food impaction</li>
    <li>Loss of esophageal motility over time</li>
  </ul>

  <h3>📘 Barrett’s vs GERD vs Esophageal Cancer</h3>
  <table>
    <thead>
      <tr><th>Feature</th><th>GERD</th><th>Barrett’s</th><th>Cancer</th></tr>
    </thead>
    <tbody>
      <tr><td>Reflux symptoms</td><td>Yes</td><td>Often</td><td>Sometimes</td></tr>
      <tr><td>Cellular change</td><td>No</td><td>Yes (metaplasia)</td><td>Yes (malignant)</td></tr>
      <tr><td>Curable</td><td>Yes</td><td>Manageable</td><td>Stage dependent</td></tr>
      <tr><td>Endoscopy</td><td>Optional</td><td>Required</td><td>Essential</td></tr>
      <tr><td>Risk of cancer</td><td>Low</td><td>Elevated</td><td>Present</td></tr>
    </tbody>
  </table>

  <h3>🏥 Our Clinic’s Barrett’s Oesophagus Care</h3>
  <ul>
    <li>✅ Routine endoscopy for GERD patients</li>
    <li>✅ On-site biopsy and dysplasia grading</li>
    <li>✅ Customized PPI therapy and dietary plans</li>
    <li>✅ Endoscopic ablation or mucosal resection when required</li>
    <li>✅ GI oncology collaboration for advanced cases</li>
    <li>✅ Bilingual handouts and lifestyle coaching for long-term care</li>
  </ul>

  <h3>📢 Public Awareness Tips</h3>
  <ul>
    <li>Heartburn lasting more than 5 years? Get checked.</li>
    <li>Barrett’s Oesophagus is silent but serious — screen early.</li>
    <li>Endoscopy saves lives by detecting cancer risk in time.</li>
    <li>With surveillance and treatment, progression can be prevented.</li>
  </ul>

  <p><strong>Barrett’s Oesophagus isn’t the end—it’s a wake-up call. Screen, treat, and protect your future.</strong></p>
</section>


      <section className="quiz-section">
        <h2>🧠 Quick Quiz — Barrett’s Esophagus</h2>

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

export default BarrettEsophagus;
