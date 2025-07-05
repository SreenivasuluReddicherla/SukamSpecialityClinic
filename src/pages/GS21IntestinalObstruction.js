import React, { useState } from 'react';
import './RP1InfertilityInsights.css';

const quizData = [
  {
    question: "A common cause of small bowel obstruction in adults:",
    options: [
      "Gallstones",
      "Adhesions",
      "Appendicitis",
      "Hernia"
    ],
    answer: "Adhesions"
  },
  {
    question: "Volvulus refers to:",
    options: [
      "Infection",
      "Intestinal twist",
      "Tumor",
      "Foreign body"
    ],
    answer: "Intestinal twist"
  },
  {
    question: "Symptom NOT common in obstruction:",
    options: [
      "Vomiting",
      "Diarrhea",
      "Distension",
      "Pain"
    ],
    answer: "Diarrhea"
  },
  {
    question: "X-ray finding in obstruction:",
    options: [
      "Double bubble",
      "Lung opacity",
      "Air-fluid levels",
      "Calcification"
    ],
    answer: "Air-fluid levels"
  },
  {
    question: "Feculent vomiting suggests:",
    options: [
      "GERD",
      "Lower bowel obstruction",
      "Gallbladder stone",
      "Gastritis"
    ],
    answer: "Lower bowel obstruction"
  },
  {
    question: "Paralytic ileus is best managed by:",
    options: [
      "Emergency surgery",
      "Antibiotics",
      "Conservative care",
      "Endoscopy"
    ],
    answer: "Conservative care"
  },
  {
    question: "Hernia causes obstruction by:",
    options: [
      "Inflammation",
      "Adhesion",
      "External compression",
      "Tumor spread"
    ],
    answer: "External compression"
  },
  {
    question: "Endoscopic treatment is best for:",
    options: [
      "Volvulus",
      "Adhesions",
      "Strangulation",
      "Cancer"
    ],
    answer: "Volvulus"
  },
  {
    question: "Nasogastric tube is used to:",
    options: [
      "Provide nutrition",
      "Stop bleeding",
      "Decompress stomach",
      "Reduce fever"
    ],
    answer: "Decompress stomach"
  },
  {
    question: "Electrolyte most commonly lost in vomiting:",
    options: [
      "Sodium",
      "Potassium",
      "Calcium",
      "Phosphate"
    ],
    answer: "Potassium"
  },
  {
    question: "A red flag for surgery:",
    options: [
      "Gas passage",
      "Persistent pain with fever",
      "Early satiety",
      "Passing stools"
    ],
    answer: "Persistent pain with fever"
  },
  {
    question: "Common cause in children:",
    options: [
      "Adhesion",
      "Hernia",
      "Intussusception",
      "Tumor"
    ],
    answer: "Intussusception"
  },
  {
    question: "Which is not a mechanical cause?",
    options: [
      "Tumor",
      "Volvulus",
      "Adhesion",
      "Hypokalemia"
    ],
    answer: "Hypokalemia"
  },
  {
    question: "Chronic constipation + distension in elderly suggests:",
    options: [
      "Ulcer",
      "Large bowel cancer",
      "Appendicitis",
      "PUD"
    ],
    answer: "Large bowel cancer"
  },
  {
    question: "Mainstay of diagnosis:",
    options: [
      "ECG",
      "CT abdomen",
      "MRI spine",
      "Liver biopsy"
    ],
    answer: "CT abdomen"
  },
  {
    question: "Ogilvie’s syndrome is:",
    options: [
      "Functional large bowel pseudo-obstruction",
      "Gallstone ileus",
      "Tuberculosis",
      "Malabsorption"
    ],
    answer: "Functional large bowel pseudo-obstruction"
  },
  {
    question: "Pain relief alone is:",
    options: [
      "Sufficient",
      "Misleading in obstruction",
      "Definitive",
      "Curative"
    ],
    answer: "Misleading in obstruction"
  },
  {
    question: "String sign on barium study suggests:",
    options: [
      "Crohn’s disease stricture",
      "Ulcer",
      "IBS",
      "Typhoid"
    ],
    answer: "Crohn’s disease stricture"
  },
  {
    question: "Most common post-op cause of obstruction:",
    options: [
      "Hernia",
      "Adhesions",
      "Tumor",
      "TB"
    ],
    answer: "Adhesions"
  },
  {
    question: "In case of strangulated hernia, the treatment is:",
    options: [
      "Wait 48 hours",
      "NG tube",
      "Immediate surgery",
      "Colonoscopy"
    ],
    answer: "Immediate surgery"
  }
];

const IntestinalObstruction = () => {
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
      <h1>🟠 Intestinal Obstruction</h1>
      <p className="lead">“Traffic jam in your gut.”</p>

      <section className="info-section">
  <h3>🚧 What Happens When the Intestine Gets Blocked?</h3>
  <p>
    Intestinal obstruction is a condition where the normal flow of contents through the intestines is
    blocked—either partially or completely. It may occur in the small or large intestine and can be
    mechanical (physical blockage) or functional (muscle-related). If not treated in time, it can
    lead to bowel damage, infection, perforation, or sepsis.
  </p>

  <h3>📂 A Breakdown of the Types</h3>
  <table>
    <thead>
      <tr><th>Category</th><th>Subtype</th></tr>
    </thead>
    <tbody>
      <tr><td>Mechanical</td><td>Small Bowel, Large Bowel</td></tr>
      <tr><td>Functional</td><td>Paralytic ileus, Pseudo-obstruction (Ogilvie’s syndrome)</td></tr>
    </tbody>
  </table>

  <h3>⚙️ Why Does It Occur?</h3>
  <p><strong>Small Bowel Obstruction (SBO)</strong> is usually caused by:</p>
  <ul>
    <li>Post-surgical adhesions</li>
    <li>Incarcerated or strangulated hernias</li>
    <li>Intussusception in children</li>
    <li>Strictures from Crohn’s disease</li>
  </ul>
  <p><strong>Large Bowel Obstruction (LBO)</strong> may result from:</p>
  <ul>
    <li>Colorectal cancer</li>
    <li>Sigmoid volvulus</li>
    <li>Diverticular disease</li>
    <li>Fecal impaction</li>
  </ul>
  <p><strong>Functional obstruction</strong> (like paralytic ileus) happens when bowel movement stops without a physical block, commonly in ICU patients, post-surgery, or due to electrolyte imbalance.</p>

  <h3>🩺 Clues from the Body</h3>
  <table>
    <thead>
      <tr><th>Symptom</th><th>Small Bowel</th><th>Large Bowel</th></tr>
    </thead>
    <tbody>
      <tr><td>Pain</td><td>Crampy, intermittent</td><td>Dull, lower abdomen</td></tr>
      <tr><td>Vomiting</td><td>Early, frequent</td><td>Late, feculent</td></tr>
      <tr><td>Distension</td><td>Mild to moderate</td><td>Marked</td></tr>
      <tr><td>Constipation</td><td>May pass flatus early</td><td>No stool or flatus</td></tr>
      <tr><td>Bowel Sounds</td><td>Hyperactive early</td><td>Absent in late stage</td></tr>
    </tbody>
  </table>

  <h3>⚠️ Signs to Watch Out For</h3>
  <ul>
    <li>Severe abdominal pain or rigidity</li>
    <li>Persistent vomiting</li>
    <li>No passage of stool or gas</li>
    <li>Dehydration signs (dry mouth, low BP, sunken eyes)</li>
    <li>Fever, shock, or sepsis (in late cases)</li>
    <li>Visible loops and peristalsis in thin individuals</li>
  </ul>

  <h3>🔍 Making the Diagnosis</h3>
  <ul>
    <li><strong>Plain X-ray:</strong> Shows air-fluid levels, dilated bowel loops</li>
    <li><strong>CT scan with contrast:</strong> Identifies exact level and cause (tumor, hernia, volvulus)</li>
    <li><strong>Ultrasound:</strong> Helpful in children (e.g., intussusception)</li>
    <li><strong>Blood tests:</strong> Evaluate infection, kidney function, and electrolytes</li>
  </ul>

  <h3>🧭 The Treatment Gameplan</h3>
  <p><strong>Initial Stabilization:</strong></p>
  <ul>
    <li>NPO (nothing by mouth)</li>
    <li>IV fluids and electrolyte correction</li>
    <li>Nasogastric (NG) tube for decompression</li>
    <li>Antibiotics if infection or strangulation is suspected</li>
  </ul>

  <p><strong>Definitive Treatment (Based on Cause):</strong></p>
  <table>
    <thead>
      <tr><th>Condition</th><th>Approach</th></tr>
    </thead>
    <tbody>
      <tr><td>Adhesions</td><td>Trial of conservative care; surgery if needed</td></tr>
      <tr><td>Hernia</td><td>Emergency surgery if strangulated</td></tr>
      <tr><td>Tumor</td><td>Oncologic resection or palliative stenting</td></tr>
      <tr><td>Volvulus</td><td>Endoscopic detorsion ± surgery</td></tr>
      <tr><td>Paralytic Ileus</td><td>Supportive care and treat underlying cause</td></tr>
      <tr><td>Intussusception</td><td>Air/barium enema (children); surgery if recurrent</td></tr>
    </tbody>
  </table>

  <h3>🚨 What If Left Untreated?</h3>
  <ul>
    <li>Strangulation and tissue death</li>
    <li>Perforation of bowel and peritonitis</li>
    <li>Sepsis and multi-organ failure</li>
    <li>Severe dehydration and kidney injury</li>
    <li>Death, particularly in elderly or frail patients</li>
  </ul>

  <h3>🏥 How We Manage It at [Your Clinic Name]</h3>
  <ul>
    <li>✅ Immediate symptom relief with pain and vomiting control</li>
    <li>✅ Bedside X-ray and ultrasound access</li>
    <li>✅ Quick referral for CT and surgical intervention</li>
    <li>✅ 24x7 IV fluid and monitoring facility</li>
    <li>✅ Multilingual handouts on surgical prep and recovery</li>
    <li>✅ Ongoing follow-up for cancer, hernia, and GI health</li>
  </ul>

  <h3>❌ Myth Busters</h3>
  <table>
    <thead>
      <tr><th>Myth</th><th>Truth</th></tr>
    </thead>
    <tbody>
      <tr><td>"All obstructions need surgery."</td><td>Many mild cases respond to conservative care.</td></tr>
      <tr><td>"It’s just gas."</td><td>Could be life-threatening — always rule out obstruction.</td></tr>
      <tr><td>"Vomiting clears the blockage."</td><td>It doesn’t, especially in mechanical obstruction.</td></tr>
      <tr><td>"Elderly don't get obstruction."</td><td>They’re actually at higher risk — especially large bowel.</td></tr>
    </tbody>
  </table>
</section>


      <section className="quiz-section">
        <h2>🧠 Quick Quiz — Intestinal Obstruction</h2>

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

export default IntestinalObstruction;
