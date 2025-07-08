
import React, { useState } from 'react';
import './RP1InfertilityInsights.css';

const quizData = [
  {
    question: "Most common histology in rectal cancer:",
    options: ["Squamous cell", "Adenocarcinoma", "Lymphoma", "Sarcoma"],
    answer: "Adenocarcinoma"
  },
  {
    question: "Most common histology in anal cancer:",
    options: [
      "Adenocarcinoma",
      "Squamous cell carcinoma",
      "Transitional cell",
      "Melanoma"
    ],
    answer: "Squamous cell carcinoma"
  },
  {
    question: "HPV is associated with:",
    options: ["Rectal cancer", "Colon cancer", "Anal cancer", "Pancreatic cancer"],
    answer: "Anal cancer"
  },
  {
    question: "Best investigation for staging rectal cancer:",
    options: ["CT scan", "PET scan", "MRI pelvis", "Barium enema"],
    answer: "MRI pelvis"
  },
  {
    question: "Surgery of choice for low rectal tumor with sphincter involvement:",
    options: ["LAR", "Hartmann’s", "APR", "Sigmoidectomy"],
    answer: "APR"
  },
  {
    question: "Nigro protocol includes:",
    options: [
      "Radiation only",
      "5-FU + Cisplatin + Radiation",
      "Surgery + chemo",
      "Immunotherapy only"
    ],
    answer: "5-FU + Cisplatin + Radiation"
  },
  {
    question: "Typical presentation of anal cancer:",
    options: [
      "Right iliac mass",
      "Painless jaundice",
      "Bleeding and perianal pain",
      "Flank pain"
    ],
    answer: "Bleeding and perianal pain"
  },
  {
    question: "CEA is a useful marker in:",
    options: [
      "Anal cancer",
      "Rectal adenocarcinoma",
      "Stomach cancer",
      "Liver cirrhosis"
    ],
    answer: "Rectal adenocarcinoma"
  },
  {
    question: "Which is a high-risk condition for anal cancer?",
    options: ["GERD", "Asthma", "HIV infection", "Appendicitis"],
    answer: "HIV infection"
  },
  {
    question: "Best screening method in high-risk anal cancer patients:",
    options: [
      "Barium enema",
      "Stool culture",
      "High-resolution anoscopy",
      "Capsule endoscopy"
    ],
    answer: "High-resolution anoscopy"
  },
  {
    question: "Anal canal ends at:",
    options: [
      "Rectosigmoid junction",
      "Pelvic floor",
      "Anal verge",
      "Ileocecal valve"
    ],
    answer: "Anal verge"
  },
  {
    question: "Low anterior resection preserves:",
    options: ["Bladder", "Anal sphincter", "Sigmoid colon", "Perianal skin"],
    answer: "Anal sphincter"
  },
  {
    question: "Most anal cancers are treated with:",
    options: [
      "Surgery",
      "Chemoradiation",
      "Endoscopy",
      "Immunotherapy alone"
    ],
    answer: "Chemoradiation"
  },
  {
    question: "Most common site of metastasis in rectal cancer:",
    options: ["Lungs", "Liver", "Brain", "Bones"],
    answer: "Liver"
  },
  {
    question: "HPV vaccines help prevent:",
    options: ["Colon cancer", "Rectal cancer", "Anal cancer", "Pancreatic cancer"],
    answer: "Anal cancer"
  },
  {
    question: "Common side effect of pelvic radiotherapy:",
    options: [
      "Constipation",
      "Radiation proctitis",
      "Tinnitus",
      "Hair loss"
    ],
    answer: "Radiation proctitis"
  },
  {
    question: "Anal cancer is more common in:",
    options: [
      "Elderly males",
      "Young females",
      "HIV-positive MSM",
      "Non-smokers"
    ],
    answer: "HIV-positive MSM"
  },
  {
    question: "APR results in:",
    options: [
      "Temporary colostomy",
      "Permanent colostomy",
      "No stoma",
      "Ileostomy"
    ],
    answer: "Permanent colostomy"
  },
  {
    question: "Sign of advanced rectal tumor:",
    options: ["Hemorrhoids", "Abdominal fullness", "Tenesmus", "Dysphagia"],
    answer: "Tenesmus"
  },
  {
    question: "Post-treatment surveillance includes:",
    options: [
      "Monthly colonoscopy",
      "DRE every 3–6 months",
      "Liver biopsy",
      "Daily CA 19-9"
    ],
    answer: "DRE every 3–6 months"
  }
];

const Anorectum = () => {
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
      <h1>Carcinoma Anorectum (Anal and Rectal Cancer)</h1>
      <p className="lead">“A disease that often hides behind routine symptoms—timely diagnosis can make all the 
difference.”</p>

      <section className="info-section">
        <h3>📌 Overview</h3>
        <p>
          Carcinoma of the anorectal region involves malignancies arising from the anal canal and the lowermost rectum.
          These cancers can be difficult to diagnose early because their symptoms often overlap with benign conditions like hemorrhoids or fissures.
          While rectal cancers are mostly adenocarcinomas, anal cancers are usually squamous cell carcinomas and require different treatment approaches.
        </p>

        <h3>📖 Anatomical and Histological Classification</h3>
        <table>
          <thead>
            <tr><th>Type</th><th>Description</th><th>Histology</th></tr>
          </thead>
          <tbody>
            <tr><td>Rectal Cancer</td><td>From rectal mucosa (distal 12–15 cm of colon)</td><td>Adenocarcinoma</td></tr>
            <tr><td>Anal Canal Cancer</td><td>Below dentate line to anal verge</td><td>Squamous cell carcinoma</td></tr>
            <tr><td>Anal Margin Cancer</td><td>Perianal skin</td><td>SCC, Basal cell carcinoma</td></tr>
            <tr><td>Cloacogenic Carcinoma</td><td>From transitional epithelium</td><td>Rare subtype</td></tr>
          </tbody>
        </table>

        <h3>📊 Epidemiology</h3>
        <ul>
          <li>Rectal cancer is more common than anal cancer.</li>
          <li>Anal cancer comprises only 2–3% of colorectal cancers, but incidence is rising due to HPV.</li>
        </ul>

        <h3>⚠️ Risk Factors</h3>
        <ul>
          <li>HPV infection (especially HPV-16)</li>
          <li>Smoking, immunosuppression (e.g., HIV)</li>
          <li>Receptive anal intercourse</li>
          <li>Ulcerative colitis or IBD</li>
          <li>Low fiber, high-fat diet</li>
          <li>Family history of colorectal cancer</li>
        </ul>

        <h3>🚨 Common Symptoms</h3>
        <p><strong>Rectal Cancer:</strong></p>
        <ul>
          <li>Bleeding per rectum</li>
          <li>Change in bowel habits, pencil-thin stools</li>
          <li>Tenesmus, mucous in stool, weight loss</li>
        </ul>
        <p><strong>Anal Cancer:</strong></p>
        <ul>
          <li>Bleeding, pain during defecation</li>
          <li>Perianal mass or ulcer</li>
          <li>Fistula or wart-like growth</li>
          <li>Anal itching or discharge</li>
        </ul>

        <h3>🔬 Investigations</h3>
        <ul>
          <li>Digital Rectal Exam (DRE)</li>
          <li>Proctoscopy / Anoscopy + Biopsy</li>
          <li>CEA (rectal cancer marker), p16 (HPV marker)</li>
          <li>MRI pelvis (staging), CT CAP (metastasis)</li>
          <li>High-resolution anoscopy for anal lesions</li>
        </ul>

        <h3>🧬 Histological Differences</h3>
        <table>
          <thead>
            <tr><th>Feature</th><th>Rectal Cancer</th><th>Anal Cancer</th></tr>
          </thead>
          <tbody>
            <tr><td>Origin</td><td>Colonic-type mucosa</td><td>Squamous epithelium</td></tr>
            <tr><td>Histology</td><td>Adenocarcinoma</td><td>Squamous cell carcinoma</td></tr>
            <tr><td>Marker</td><td>CEA</td><td>p16 (HPV-related)</td></tr>
          </tbody>
        </table>

        <h3>🧾 Staging</h3>
        <p><strong>Rectal Cancer:</strong> TNM-based staging</p>
        <p><strong>Anal Cancer:</strong> AJCC staging</p>
        <ul>
          <li>T1: &lt; 2 cm</li>
          <li>T2: 2–5 cm</li>
          <li>T3: &gt; 5 cm</li>
          <li>N: perirectal, inguinal, or iliac nodes</li>
          <li>M: metastasis</li>
        </ul>

        <h3>💊 Treatment Strategy</h3>
        <p><strong>Rectal Cancer:</strong></p>
        <ul>
          <li>Early: Low Anterior Resection (LAR) or Abdominoperineal Resection (APR)</li>
          <li>Locally advanced: Neoadjuvant chemoradiation → Surgery → Adjuvant chemo</li>
          <li>Metastatic: Chemotherapy ± palliative surgery</li>
        </ul>
        <p><strong>Anal Cancer:</strong></p>
        <ul>
          <li>T1–T3: Definitive chemoradiation (Nigro protocol)</li>
          <li>Persistent or recurrent: Salvage APR</li>
          <li>Metastatic: Chemotherapy ± immunotherapy</li>
        </ul>

        <h3>🔁 Post-Treatment Surveillance</h3>
        <ul>
          <li>DRE: Every 3–6 months</li>
          <li>Proctoscopy/Anoscopy: Every 6–12 months</li>
          <li>CEA (if rectal, elevated baseline)</li>
          <li>Imaging yearly for advanced disease</li>
          <li>HPV screening in high-risk survivors</li>
        </ul>

        <h3>📈 Prognosis</h3>
        <ul>
          <li>Early rectal cancer: &gt;80%</li>
          <li>Locally advanced: 50–70%</li>
          <li>Early anal cancer: 75–85%</li>
          <li>Metastatic: &lt;20%</li>
        </ul>
        <p><em>HPV-positive anal cancer has better outcomes with treatment.</em></p>

        <h3>✅ Prevention Tips</h3>
        <ul>
          <li>HPV vaccination</li>
          <li>Safe sexual practices</li>
          <li>High-fiber, low-fat diet</li>
          <li>Routine evaluation of rectal bleeding</li>
          <li>Early screening in high-risk individuals (e.g., HIV, transplant recipients)</li>
        </ul>

        <h3>🏥 At Our Clinic – Sukam Speciality Care</h3>
        <ul>
          <li>On-site proctoscopy, DRE, and biopsy</li>
          <li>HPV screening and anal wart evaluation</li>
          <li>Pre-surgery stoma counseling & support</li>
          <li>Collaborative treatment planning with oncologists</li>
          <li>Survivorship care & pelvic rehab</li>
          <li>Psychosocial support for cancer patients</li>
        </ul>
      </section>

      <section className="quiz-section">
        <h2>🧠 Quick Quiz — Perianal Abscess</h2>

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

export default Anorectum;
