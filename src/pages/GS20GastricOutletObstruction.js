import React, { useState } from 'react';
import './RP1InfertilityInsights.css';

const quizData = [
  {
    question: "Gastric outlet obstruction blocks:",
    options: [
      "Colon",
      "Esophagus",
      "Duodenum or pylorus",
      "Ileum"
    ],
    answer: "Duodenum or pylorus"
  },
  {
    question: "Most common benign cause in adults:",
    options: [
      "Gallstones",
      "Peptic ulcer disease",
      "Appendicitis",
      "Hernia"
    ],
    answer: "Peptic ulcer disease"
  },
  {
    question: "Projectile vomiting of undigested food suggests:",
    options: [
      "Liver failure",
      "GOO",
      "GERD",
      "Asthma"
    ],
    answer: "GOO"
  },
  {
    question: "Visible peristalsis is a sign of:",
    options: [
      "Functional bloating",
      "Intestinal perforation",
      "GOO",
      "Jaundice"
    ],
    answer: "GOO"
  },
  {
    question: "Which electrolyte disturbance is common?",
    options: [
      "Hypernatremia",
      "Hyperkalemia",
      "Hypokalemia",
      "Hyperchloremia"
    ],
    answer: "Hypokalemia"
  },
  {
    question: "Non-bilious vomiting suggests obstruction:",
    options: [
      "Before pylorus",
      "After ileum",
      "Below rectum",
      "Past ampulla of Vater"
    ],
    answer: "Before pylorus"
  },
  {
    question: "Best investigation for diagnosis:",
    options: [
      "Colonoscopy",
      "Endoscopy",
      "EEG",
      "Thyroid scan"
    ],
    answer: "Endoscopy"
  },
  {
    question: "A major malignant cause in elderly:",
    options: [
      "Pancreatic carcinoma",
      "TB",
      "Hemorrhoids",
      "GERD"
    ],
    answer: "Pancreatic carcinoma"
  },
  {
    question: "Infantile GOO is often due to:",
    options: [
      "Cyst",
      "Pyloric stenosis",
      "Gallstone",
      "Ulcer"
    ],
    answer: "Pyloric stenosis"
  },
  {
    question: "Repeated vomiting leads to:",
    options: [
      "Acidosis",
      "Metabolic alkalosis",
      "Respiratory acidosis",
      "Hypernatremia"
    ],
    answer: "Metabolic alkalosis"
  },
  {
    question: "Which symptom may lead to aspiration pneumonia?",
    options: [
      "Burping",
      "Bloating",
      "Vomiting",
      "Diarrhea"
    ],
    answer: "Vomiting"
  },
  {
    question: "Endoscopic biopsy is essential when:",
    options: [
      "GERD is suspected",
      "Mass lesion found",
      "Functional bloating",
      "Fatty liver seen"
    ],
    answer: "Mass lesion found"
  },
  {
    question: "Which of the following is not a cause of GOO?",
    options: [
      "Pancreatic head tumor",
      "Duodenal ulcer",
      "Hemorrhoids",
      "Gastric cancer"
    ],
    answer: "Hemorrhoids"
  },
  {
    question: "What is used to temporarily relieve malignant GOO?",
    options: [
      "Band ligation",
      "NG tube",
      "Endoscopic stenting",
      "Colon resection"
    ],
    answer: "Endoscopic stenting"
  },
  {
    question: "One major complication if left untreated:",
    options: [
      "Brain swelling",
      "Gastric perforation",
      "Eye damage",
      "Kidney cyst"
    ],
    answer: "Gastric perforation"
  },
  {
    question: "Which blood test result is common in GOO?",
    options: [
      "Low amylase",
      "High TSH",
      "Hypokalemia",
      "Hyperbilirubinemia"
    ],
    answer: "Hypokalemia"
  },
  {
    question: "In cancer-associated GOO, the treatment goal is often:",
    options: [
      "Cure diabetes",
      "Palliative relief",
      "Cure tuberculosis",
      "Stop bleeding"
    ],
    answer: "Palliative relief"
  },
  {
    question: "Post-vagotomy care must include:",
    options: [
      "Steroids",
      "Antivirals",
      "Diet control and acid suppression",
      "Thyroxine"
    ],
    answer: "Diet control and acid suppression"
  },
  {
    question: "Nutritional rehab should begin:",
    options: [
      "Before NG tube",
      "After bypass/stent",
      "After 30 days",
      "Only in children"
    ],
    answer: "After bypass/stent"
  },
  {
    question: "GOO is best described as:",
    options: [
      "A kidney disease",
      "Food poisoning",
      "Outflow blockage at stomach exit",
      "Small bowel twist"
    ],
    answer: "Outflow blockage at stomach exit"
  }
];

const GastricOutletObstruction = () => {
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
      <h1>🟠 Gastric Outlet Obstruction</h1>
      <p className="lead">“A bottleneck that blocks your appetite.”</p>

      <section className="info-section">
  <h3>🚫 What’s Going Wrong?</h3>
  <p>
    Gastric Outlet Obstruction (GOO) refers to a mechanical or functional blockage at the pylorus or the beginning of the duodenum — the passage from the stomach to the small intestine. This blockage causes retention of food and secretions in the stomach, leading to symptoms like vomiting, bloating, and poor digestion.
  </p>

  <h3>🧍‍♀️ Who Is at Risk?</h3>
  <p>
    The cause of GOO varies with age. In younger individuals, benign causes such as ulcers are more common. In older adults, malignancies must be considered carefully.
  </p>

  <h3>📌 Causes at a Glance</h3>
  <table>
    <thead>
      <tr><th>Category</th><th>Common Causes</th></tr>
    </thead>
    <tbody>
      <tr><td>Benign</td><td>Peptic ulcer disease, chronic gastritis, caustic ingestion, post-surgical scarring</td></tr>
      <tr><td>Malignant</td><td>Gastric cancer, pancreatic cancer, duodenal cancer, lymphoma</td></tr>
      <tr><td>Congenital</td><td>Pyloric stenosis (especially in infants)</td></tr>
      <tr><td>Others</td><td>Crohn’s disease, bezoars, foreign body obstruction</td></tr>
    </tbody>
  </table>

  <h3>🩺 How It Presents</h3>
  <p>
    Symptoms vary from mild to severe. Patients often feel full after a few bites, experience vomiting of undigested food, or lose weight unintentionally. Some cases show signs of advanced dehydration and malnutrition.
  </p>
  <ul>
    <li>Persistent vomiting (non-bilious if obstruction is proximal, bilious if distal)</li>
    <li>Visible gastric peristalsis (abdominal wall movement)</li>
    <li>Unexplained weight loss</li>
    <li>Epigastric pain or bloating</li>
    <li>Signs of dehydration (dry tongue, sunken eyes)</li>
    <li>Constipation or gastric distention (in late stages)</li>
  </ul>

  <h3>🔍 The Diagnostic Trail</h3>
  <ul>
    <li><strong>Abdominal X-ray:</strong> Shows large gastric bubble or air-fluid levels</li>
    <li><strong>Ultrasound/CT scan:</strong> Detects masses, thickening, or inflammation</li>
    <li><strong>Upper GI Endoscopy:</strong> Visualizes ulcers, narrowing, or tumors; allows biopsy</li>
    <li><strong>Electrolyte Tests:</strong> May show hypokalemia, metabolic alkalosis from vomiting</li>
  </ul>

  <h3>💡 Strategies for Relief and Cure</h3>
  <p><strong>Benign GOO Management:</strong></p>
  <ul>
    <li>Nasogastric (NG) tube decompression</li>
    <li>IV fluid resuscitation and electrolyte correction</li>
    <li>Proton Pump Inhibitors (PPIs) to promote ulcer healing</li>
    <li>Endoscopic balloon dilatation for scar-related narrowing</li>
    <li>Surgical options: Vagotomy, pyloroplasty, antrectomy if unresponsive</li>
  </ul>

  <p><strong>Malignant GOO Management:</strong></p>
  <ul>
    <li>Resection of tumors (if operable)</li>
    <li>Endoscopic stenting or gastrojejunostomy (if unresectable)</li>
    <li>Palliative care and nutritional support in advanced stages</li>
  </ul>

  <h3>⚠️ Risks if Left Untreated</h3>
  <ul>
    <li>Severe dehydration and electrolyte imbalances</li>
    <li>Aspiration pneumonia from recurrent vomiting</li>
    <li>Metabolic alkalosis and hypokalemia</li>
    <li>Stomach dilation and risk of rupture</li>
    <li>Cachexia and fatal complications in elderly or cancer patients</li>
  </ul>

  <h3>👨‍⚕️ Our Approach to GOO at [Your Clinic Name]</h3>
  <ul>
    <li>✅ Fast-track evaluation via bedside ultrasound and endoscopy</li>
    <li>✅ Immediate NG tube insertion and IV correction when needed</li>
    <li>✅ Interdisciplinary GI-surgical coordination for ulcer and cancer-related cases</li>
    <li>✅ Personalized nutrition recovery plans</li>
    <li>✅ Psycho-social support for patients with cancer-related GOO</li>
  </ul>

  <p><strong>Gastric Outlet Obstruction is a manageable condition — but early detection and appropriate intervention can make all the difference in outcome and quality of life.</strong></p>
</section>


      <section className="quiz-section">
        <h2>🧠 Quick Quiz — Gastric Outlet Obstruction</h2>

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

export default GastricOutletObstruction;
