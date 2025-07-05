import React, { useState } from 'react';
import './RP1InfertilityInsights.css';

const quizData = [
  {
    question: "Dyspepsia refers to:",
    options: [
      "Diarrhea",
      "Vomiting",
      "Upper abdominal discomfort",
      "Heart attack"
    ],
    answer: "Upper abdominal discomfort"
  },
  {
    question: "Most common cause of functional dyspepsia:",
    options: [
      "H. pylori",
      "Anxiety and visceral hypersensitivity",
      "Gallstones",
      "Appendicitis"
    ],
    answer: "Anxiety and visceral hypersensitivity"
  },
  {
    question: "Red flag symptom in dyspepsia:",
    options: [
      "Bloating",
      "Nausea",
      "Weight loss",
      "Burping"
    ],
    answer: "Weight loss"
  },
  {
    question: "A test used to detect H. pylori:",
    options: [
      "Ultrasound",
      "ECG",
      "Urea breath test",
      "Liver function test"
    ],
    answer: "Urea breath test"
  },
  {
    question: "Burning in upper abdomen may suggest:",
    options: [
      "Gastritis",
      "Kidney stone",
      "Asthma",
      "UTI"
    ],
    answer: "Gastritis"
  },
  {
    question: "Dyspepsia is not commonly caused by:",
    options: [
      "Stress",
      "Ulcer",
      "Broken bone",
      "GERD"
    ],
    answer: "Broken bone"
  },
  {
    question: "PPIs act by:",
    options: [
      "Reducing acid production",
      "Killing bacteria",
      "Increasing motility",
      "Coating the stomach lining"
    ],
    answer: "Reducing acid production"
  },
  {
    question: "Most common age group for functional dyspepsia:",
    options: [
      "<1 year",
      "15–45 years",
      ">70 years",
      "Neonates"
    ],
    answer: "15–45 years"
  },
  {
    question: "Antacids are best for:",
    options: [
      "Quick relief",
      "Long-term cure",
      "Antibiotic use",
      "Cough"
    ],
    answer: "Quick relief"
  },
  {
    question: "Which is an organic cause of dyspepsia?",
    options: [
      "Stress",
      "Duodenal ulcer",
      "Fast eating",
      "Overwork"
    ],
    answer: "Duodenal ulcer"
  },
  {
    question: "In dyspepsia, if red flags are present:",
    options: [
      "Wait for a week",
      "Give syrup",
      "Perform endoscopy",
      "Start antibiotics"
    ],
    answer: "Perform endoscopy"
  },
  {
    question: "Which is NOT a symptom of dyspepsia?",
    options: [
      "Early satiety",
      "Upper abdominal pain",
      "Leg swelling",
      "Nausea"
    ],
    answer: "Leg swelling"
  },
  {
    question: "Prokinetics help by:",
    options: [
      "Reducing acid",
      "Speeding gastric emptying",
      "Killing H. pylori",
      "Increasing appetite"
    ],
    answer: "Speeding gastric emptying"
  },
  {
    question: "Functional dyspepsia means:",
    options: [
      "Cancer",
      "Ulcer",
      "No visible lesion",
      "Liver problem"
    ],
    answer: "No visible lesion"
  },
  {
    question: "Which food is safe in dyspepsia?",
    options: [
      "Fried chicken",
      "Mint chutney",
      "Steamed rice",
      "Carbonated drinks"
    ],
    answer: "Steamed rice"
  },
  {
    question: "Gastric ulcers are best diagnosed by:",
    options: [
      "USG",
      "CT scan",
      "Endoscopy",
      "MRI"
    ],
    answer: "Endoscopy"
  },
  {
    question: "One safe drink in dyspepsia:",
    options: [
      "Soda",
      "Cold coffee",
      "Jeera water",
      "Whisky"
    ],
    answer: "Jeera water"
  },
  {
    question: "Functional dyspepsia commonly coexists with:",
    options: [
      "Migraines",
      "Depression or anxiety",
      "Skin allergy",
      "Hernia"
    ],
    answer: "Depression or anxiety"
  },
  {
    question: "Antidepressants in dyspepsia are used:",
    options: [
      "In cancer",
      "For motility disorders",
      "For hypersensitive stomach",
      "Never used"
    ],
    answer: "For hypersensitive stomach"
  },
  {
    question: "Dyspepsia with anemia needs:",
    options: [
      "Painkiller",
      "Blood transfusion",
      "Endoscopy",
      "X-ray"
    ],
    answer: "Endoscopy"
  }
];

const Dyspepsia = () => {
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
      <h1>🟠 Dyspepsia</h1>
      <p className="lead">“Bloating, burning, and meals that fight back.”</p>

      <section className="info-section">
  <h3>💢 What is Dyspepsia?</h3>
  <p>
    Dyspepsia refers to persistent or recurrent discomfort or pain in the upper abdomen, commonly called "indigestion." It includes a spectrum of symptoms often triggered by meals or stress.
  </p>

  <h3>📌 Core Symptoms:</h3>
  <ul>
    <li>Upper abdominal fullness or bloating</li>
    <li>Early satiety (feeling full after small meals)</li>
    <li>Burning or discomfort below the ribs</li>
    <li>Nausea, belching, or occasional vomiting</li>
    <li>Mild pain in the central upper abdomen</li>
  </ul>

  <h3>🔍 Functional vs Organic Dyspepsia</h3>
  <table>
    <thead>
      <tr><th>Type</th><th>Explanation</th><th>Examples</th></tr>
    </thead>
    <tbody>
      <tr><td>Functional (Non-ulcer)</td><td>Symptoms without visible disease on testing</td><td>Most common form</td></tr>
      <tr><td>Organic</td><td>Symptoms due to an identifiable cause</td><td>Peptic ulcer, gastritis, H. pylori, cancer</td></tr>
    </tbody>
  </table>

  <h3>🧬 Common Causes of Dyspepsia</h3>
  <p><strong>Functional Causes:</strong></p>
  <ul>
    <li>Visceral hypersensitivity</li>
    <li>Stress, anxiety, or depression</li>
    <li>Delayed gastric emptying</li>
  </ul>
  <p><strong>Organic Causes:</strong></p>
  <ul>
    <li>Peptic ulcer disease</li>
    <li>H. pylori infection</li>
    <li>GERD, gastritis, or duodenitis</li>
    <li>Gallstones or pancreatitis</li>
    <li>Gastric cancer (especially in older adults with weight loss)</li>
  </ul>

  <h3>🍽️ Dietary & Lifestyle Triggers</h3>
  <ul>
    <li>Spicy, oily, or fried food</li>
    <li>Overeating or eating too quickly</li>
    <li>Caffeine, carbonated drinks, or alcohol</li>
    <li>Smoking or irregular meals</li>
    <li>Lying down immediately after eating</li>
  </ul>

  <h3>🚨 Red Flag Symptoms (Seek Immediate Care)</h3>
  <ul>
    <li>New symptoms after age 45–50</li>
    <li>Unintentional weight loss or fatigue</li>
    <li>Persistent vomiting or nausea</li>
    <li>Difficulty or pain while swallowing</li>
    <li>Blood in vomit or black stools</li>
    <li>Family history of GI cancers</li>
  </ul>

  <h3>🧪 Diagnosis & Evaluation</h3>
  <ol>
    <li><strong>Clinical History:</strong> Symptoms, food triggers, medication use</li>
    <li><strong>Tests:</strong>
      <ul>
        <li>Upper GI Endoscopy – ulcers, gastritis, cancer</li>
        <li>H. pylori – urea breath test, stool antigen, biopsy</li>
        <li>Ultrasound – gallstones, liver, pancreas</li>
        <li>Blood tests – CBC, LFTs, amylase</li>
        <li>Stool test – occult blood, parasites</li>
      </ul>
    </li>
  </ol>

  <h3>💊 Treatment Approach</h3>
  <ol>
    <li><strong>Lifestyle & Diet Changes:</strong>
      <ul>
        <li>Eat small, frequent meals</li>
        <li>Avoid spicy, acidic, and greasy foods</li>
        <li>No eating 2 hours before bed</li>
        <li>Quit alcohol and smoking</li>
        <li>Incorporate yoga, stress management</li>
      </ul>
    </li>
    <li><strong>Medications:</strong>
      <table>
        <thead>
          <tr><th>Drug Class</th><th>Use</th></tr>
        </thead>
        <tbody>
          <tr><td>Antacids</td><td>Immediate symptom relief</td></tr>
          <tr><td>PPIs (omeprazole, esomeprazole)</td><td>Long-term acid suppression</td></tr>
          <tr><td>H2 blockers</td><td>Less used now, but helpful</td></tr>
          <tr><td>Prokinetics</td><td>Improve motility (e.g. domperidone, levosulpiride)</td></tr>
          <tr><td>Antibiotics</td><td>H. pylori eradication (triple therapy)</td></tr>
          <tr><td>Low-dose antidepressants</td><td>Helpful in functional dyspepsia with anxiety</td></tr>
        </tbody>
      </table>
    </li>
    <li><strong>H. pylori Eradication:</strong> 14-day triple therapy (PPI + clarithromycin + amoxicillin/metronidazole)</li>
  </ol>

  <h3>🌿 Holistic Remedies</h3>
  <ul>
    <li>Peppermint oil capsules – reduces spasms</li>
    <li>Ginger, fennel, ajwain – soothe digestion</li>
    <li>Acupressure or yoga – stress-linked symptom relief</li>
  </ul>

  <h3>📌 When to Refer to a Specialist</h3>
  <ul>
    <li>Red flag symptoms or poor response to medication</li>
    <li>Recurrent or severe dyspepsia</li>
    <li>Elderly with weight loss or vomiting</li>
    <li>Suspicion of cancer or ulcers</li>
  </ul>

  <h3>🏥 How We Handle Dyspepsia at Our Clinic</h3>
  <ul>
    <li>✅ Detailed symptom and diet analysis</li>
    <li>✅ On-site H. pylori test and medication start</li>
    <li>✅ Endoscopy within 72 hours for alarm cases</li>
    <li>✅ Long-term acid suppression when needed</li>
    <li>✅ GI health education and multilingual diet charts</li>
  </ul>

  <h3>🧠 Myths vs Facts</h3>
  <table>
    <thead>
      <tr><th>Myth</th><th>Fact</th></tr>
    </thead>
    <tbody>
      <tr><td>“Dyspepsia always means ulcer”</td><td>No, most cases are functional</td></tr>
      <tr><td>“Only spicy food causes indigestion”</td><td>Late meals, stress, posture also matter</td></tr>
      <tr><td>“It’s harmless”</td><td>May mask early ulcers or even cancer</td></tr>
      <tr><td>“If antacids help, no need to see a doctor”</td><td>Wrong—persistent symptoms need evaluation</td></tr>
    </tbody>
  </table>

  <p><strong>If your stomach speaks, don’t silence it with guesswork. Let’s treat the root cause together.</strong></p>
</section>


      <section className="quiz-section">
        <h2>🧠 Quick Quiz — Dyspepsia</h2>

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

export default Dyspepsia;
