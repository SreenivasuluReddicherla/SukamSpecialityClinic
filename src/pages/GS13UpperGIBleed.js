import React, { useState } from 'react';
import './RP1InfertilityInsights.css';

const quizData = [
  {
    question: "Upper GI bleeding refers to bleeding from:",
    options: [
      "Colon and rectum",
      "Esophagus, stomach, duodenum",
      "Small intestine only",
      "Pancreas"
    ],
    answer: "Esophagus, stomach, duodenum"
  },
  {
    question: "Most common cause of upper GI bleed is:",
    options: [
      "Esophageal cancer",
      "Duodenal ulcer",
      "Colon cancer",
      "Hemorrhoids"
    ],
    answer: "Duodenal ulcer"
  },
  {
    question: "Black, tarry stool is called:",
    options: [
      "Hematemesis",
      "Hematochezia",
      "Melena",
      "Steatorrhea"
    ],
    answer: "Melena"
  },
  {
    question: "Which test is most useful to locate upper GI bleeding?",
    options: [
      "Colonoscopy",
      "Ultrasound",
      "Upper GI endoscopy",
      "X-ray"
    ],
    answer: "Upper GI endoscopy"
  },
  {
    question: "Coffee-ground vomiting suggests:",
    options: [
      "Recent bleeding",
      "Digested blood in the stomach",
      "Liver failure",
      "Pancreatic leakage"
    ],
    answer: "Digested blood in the stomach"
  },
  {
    question: "A tear at the gastroesophageal junction is called:",
    options: [
      "Barrett’s esophagus",
      "Mallory-Weiss tear",
      "Zenker’s diverticulum",
      "Achalasia"
    ],
    answer: "Mallory-Weiss tear"
  },
  {
    question: "Which of the following can cause painless upper GI bleeding?",
    options: [
      "Gastric ulcer",
      "Varices",
      "Appendicitis",
      "Crohn’s disease"
    ],
    answer: "Varices"
  },
  {
    question: "Which drug class can increase risk of GI bleeding?",
    options: [
      "Statins",
      "NSAIDs",
      "Antihistamines",
      "Antacids"
    ],
    answer: "NSAIDs"
  },
  {
    question: "Which infection is linked to peptic ulcers?",
    options: [
      "Hepatitis B",
      "H. pylori",
      "HPV",
      "E. coli"
    ],
    answer: "H. pylori"
  },
  {
    question: "Anemia with no visible bleeding may suggest:",
    options: [
      "Pancreatitis",
      "Occult GI bleed",
      "Hyperthyroidism",
      "Gallstones"
    ],
    answer: "Occult GI bleed"
  },
  {
    question: "Recurrent retching in alcoholism may cause:",
    options: [
      "Gallbladder stones",
      "Mallory-Weiss tear",
      "Jaundice",
      "Ulcerative colitis"
    ],
    answer: "Mallory-Weiss tear"
  },
  {
    question: "Varices are associated with which organ’s disease?",
    options: [
      "Kidney",
      "Lung",
      "Liver",
      "Pancreas"
    ],
    answer: "Liver"
  },
  {
    question: "Octreotide is used to treat bleeding from:",
    options: [
      "Ulcers",
      "Varices",
      "Cancers",
      "Gallbladder"
    ],
    answer: "Varices"
  },
  {
    question: "First step in active bleeding is:",
    options: [
      "Endoscopy",
      "CT scan",
      "IV fluids and stabilization",
      "Surgery"
    ],
    answer: "IV fluids and stabilization"
  },
  {
    question: "Which blood test is useful to assess severity?",
    options: [
      "ESR",
      "CBC",
      "Lipase",
      "PSA"
    ],
    answer: "CBC"
  },
  {
    question: "Brisk bleeding with shock and vomiting blood needs:",
    options: [
      "Home rest",
      "Oral rehydration",
      "Emergency hospital care",
      "Colonoscopy"
    ],
    answer: "Emergency hospital care"
  },
  {
    question: "Which drug reduces stomach acid?",
    options: [
      "NSAIDs",
      "Beta-blockers",
      "Proton pump inhibitors",
      "Diuretics"
    ],
    answer: "Proton pump inhibitors"
  },
  {
    question: "Which lifestyle habit worsens ulcers and GI bleeds?",
    options: [
      "Yoga",
      "Alcohol",
      "Walking",
      "Fruit intake"
    ],
    answer: "Alcohol"
  },
  {
    question: "Melena typically indicates bleeding from:",
    options: [
      "Lower rectum",
      "Small intestine",
      "Upper GI tract",
      "Colon"
    ],
    answer: "Upper GI tract"
  },
  {
    question: "A patient with cirrhosis and GI bleed is most likely to have:",
    options: [
      "Gallstones",
      "Constipation",
      "Esophageal varices",
      "Intestinal worms"
    ],
    answer: "Esophageal varices"
  }
];


const UpperGIBleed = () => {
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
      <h1>🟠 Upper GI Bleed</h1>
      <p className="lead">“Blood from above, demanding urgent attention.”</p>

      <section className="info-section">
  <h3>🩸 Where Does the Bleeding Come From?</h3>
  <p>
    Upper GI bleeding refers to any bleeding originating from the esophagus, stomach, or duodenum (first part of the small intestine), located above the ligament of Treitz.
  </p>
  <p>
    The bleeding may be:
    <ul>
      <li><strong>Obvious (visible):</strong> Vomiting blood or passing black stools</li>
      <li><strong>Occult (hidden):</strong> Detected only by testing or through symptoms like fatigue or low hemoglobin</li>
    </ul>
  </p>

  <h3>🚨 Signs That Warrant Immediate Attention</h3>
  <ul>
    <li>Vomiting fresh red blood (hematemesis)</li>
    <li>Black, tarry stools (melena)</li>
    <li>Coffee-ground like vomitus</li>
    <li>Sudden fatigue, dizziness, or fainting</li>
    <li>Pale skin, rapid heartbeat, low blood pressure</li>
  </ul>
  <p>Chronic bleeding may only show as anemia or breathlessness—never ignore subtle signs.</p>

  <h3>📋 What Causes the Bleeding?</h3>
  <table>
    <thead>
      <tr><th>Source</th><th>Examples</th></tr>
    </thead>
    <tbody>
      <tr><td>Peptic Ulcers</td><td>Most common; caused by H. pylori or acid-related damage</td></tr>
      <tr><td>Esophageal Varices</td><td>Due to liver cirrhosis and portal hypertension</td></tr>
      <tr><td>Gastritis/Erosive Esophagitis</td><td>Often from alcohol, NSAIDs, or infections</td></tr>
      <tr><td>Mallory-Weiss Tear</td><td>From violent vomiting or retching</td></tr>
      <tr><td>Tumors</td><td>Stomach or esophageal cancers</td></tr>
      <tr><td>Post-Surgical Bleeding</td><td>Following gastric surgery or endoscopy</td></tr>
    </tbody>
  </table>
  <p><strong>Risk factors:</strong> NSAID overuse, alcohol, smoking</p>

  <h3>🧪 How It Is Diagnosed</h3>
  <ol>
    <li><strong>Clinical Examination:</strong> Check for signs of shock, anemia, or liver disease</li>
    <li><strong>Blood Tests:</strong> CBC, LFTs, RFTs, coagulation, blood group</li>
    <li><strong>Upper GI Endoscopy:</strong> Gold standard for diagnosis and treatment</li>
    <li><strong>CT Angiography:</strong> In cases where endoscopy fails to localize source</li>
  </ol>

  <h3>📹 What Happens During Endoscopy?</h3>
  <ul>
    <li>A flexible tube with a camera is passed through the mouth</li>
    <li>Stomach and duodenum are visualized for ulcers or varices</li>
    <li>Bleeding is controlled using clips, cautery, or injections</li>
    <li>Biopsies are taken if tumors are suspected</li>
  </ul>

  <h3>🛑 Treatment Strategy – Stopping the Bleed</h3>
  <ul>
    <li>IV fluids and proton pump inhibitors (PPIs)</li>
    <li>Blood transfusions for severe anemia</li>
    <li>Endoscopic control using clips, cauterization, or adrenaline injection</li>
    <li>Surgery (&lt;5% cases) when endoscopy fails</li>
    <li>Antibiotics and beta-blockers for variceal bleeds</li>
    <li>Portal pressure reduction medications (e.g., octreotide)</li>
  </ul>

  <h3>⚠️ Special Focus: Esophageal Varices</h3>
  <p>
    Dilated veins due to liver cirrhosis can rupture and cause severe bleeding. Urgent endoscopy with band ligation or sclerotherapy is life-saving. Long-term use of beta-blockers helps prevent rebleeding.
  </p>

  <h3>🛡️ Preventing Recurrence</h3>
  <ul>
    <li>H. pylori eradication in peptic ulcers</li>
    <li>Long-term PPIs for NSAID users</li>
    <li>Regular endoscopic surveillance for cirrhotic patients</li>
    <li>Avoid alcohol, NSAIDs, and smoking</li>
    <li>Maintain liver health with diet and compliance</li>
  </ul>

  <h3>❓ Patient FAQs</h3>
  <ul>
    <li><strong>Q:</strong> Can upper GI bleeding happen without pain?<br/><strong>A:</strong> Yes. Especially with varices or chronic ulcers.</li>
    <li><strong>Q:</strong> Will I need hospitalization?<br/><strong>A:</strong> Most likely — for stabilization, diagnosis, and monitoring.</li>
    <li><strong>Q:</strong> Is vomiting blood always serious?<br/><strong>A:</strong> Yes. Even one episode requires urgent care.</li>
  </ul>

  <h3>🏥 How We Handle It at Sukam Speciality Clinic</h3>
  <ul>
    <li>✅ Emergency stabilization protocols</li>
    <li>✅ 24x7 upper GI endoscopy availability</li>
    <li>✅ Onsite ICU and blood bank access</li>
    <li>✅ Expert endoscopic and medical care</li>
    <li>✅ Personalized aftercare to prevent recurrence</li>
  </ul>
  <p><strong>Your safety, stability, and recovery are our top priorities.</strong></p>
</section>

      <section className="quiz-section">
        <h2>🧠 Upper GI Bleeding — Quick Quiz</h2>

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
                      {selectedAnswers[idx] === q.answer ? 'Correct' : 'Incorrect'} (Your Answer: {selectedAnswers[idx]})
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

export default UpperGIBleed;
