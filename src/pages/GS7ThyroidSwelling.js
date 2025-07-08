import React, { useState } from 'react';
import './RP1InfertilityInsights.css';

const quizData = [
  {
    question: "Thyroid swelling that involves the entire gland is called:",
    options: [
      "Solitary nodule",
      "Diffuse goiter",
      "Adenoma",
      "Lymphadenitis"
    ],
    answer: "Diffuse goiter"
  },
  {
    question: "Which test helps check thyroid hormone levels?",
    options: [
      "CBC",
      "TSH, T3, T4",
      "CRP",
      "Lipid profile"
    ],
    answer: "TSH, T3, T4"
  },
  {
    question: "What is the most common cause of thyroid swelling worldwide?",
    options: [
      "Thyroid cancer",
      "Iodine deficiency",
      "Tuberculosis",
      "Diabetes"
    ],
    answer: "Iodine deficiency"
  },
  {
    question: "A lump in the neck that moves with swallowing may suggest:",
    options: [
      "Lymph node",
      "Thyroid swelling",
      "Cystic hygroma",
      "Salivary stone"
    ],
    answer: "Thyroid swelling"
  },
  {
    question: "Graves’ disease is associated with:",
    options: [
      "Hypothyroidism",
      "Hyperthyroidism",
      "Normal thyroid function",
      "No symptoms"
    ],
    answer: "Hyperthyroidism"
  },
  {
    question: "Hashimoto's thyroiditis causes:",
    options: [
      "Thyroid cancer",
      "Thyroid cyst",
      "Hypothyroidism",
      "Hyperthyroidism"
    ],
    answer: "Hypothyroidism"
  },
  {
    question: "A 'cold nodule' on thyroid scan indicates:",
    options: [
      "Functioning tissue",
      "Inactive tissue",
      "High hormone production",
      "Iodine uptake"
    ],
    answer: "Inactive tissue"
  },
  {
    question: "Most solitary thyroid nodules are:",
    options: [
      "Malignant",
      "Benign",
      "Inflammatory",
      "Parathyroid in origin"
    ],
    answer: "Benign"
  },
  {
    question: "Which hormone does the thyroid gland produce?",
    options: [
      "Insulin",
      "Cortisol",
      "Thyroxine",
      "Prolactin"
    ],
    answer: "Thyroxine"
  },
  {
    question: "FNAC is used to:",
    options: [
      "Remove thyroid",
      "Assess thyroid function",
      "Evaluate nodule cells",
      "Measure iodine level"
    ],
    answer: "Evaluate nodule cells"
  },
  {
    question: "Surgery is indicated in all EXCEPT:",
    options: [
      "Thyroid cancer",
      "Cosmetic swelling",
      "Mild iodine deficiency",
      "Large obstructive goiter"
    ],
    answer: "Mild iodine deficiency"
  },
  {
    question: "Thyroid nodules in which group are more likely cancerous?",
    options: [
      "Young women",
      "Elderly men",
      "Adolescents",
      "Children"
    ],
    answer: "Elderly men"
  },
  {
    question: "An overactive thyroid may cause:",
    options: [
      "Weight gain",
      "Cold intolerance",
      "Anxiety and tremors",
      "Constipation"
    ],
    answer: "Anxiety and tremors"
  },
  {
    question: "A person with hoarseness and thyroid swelling should:",
    options: [
      "Wait 6 months",
      "Take homeopathy",
      "Consult ENT or endocrine surgeon",
      "Apply warm compress"
    ],
    answer: "Consult ENT or endocrine surgeon"
  },
  {
    question: "Thyroiditis is usually due to:",
    options: [
      "Autoimmune or viral causes",
      "Worm infestation",
      "Calcium deficiency",
      "Bone marrow failure"
    ],
    answer: "Autoimmune or viral causes"
  },
  {
    question: "Which nutrient deficiency contributes to goiter?",
    options: [
      "Iron",
      "Zinc",
      "Iodine",
      "Magnesium"
    ],
    answer: "Iodine"
  },
  {
    question: "TSH is produced by:",
    options: [
      "Thyroid",
      "Liver",
      "Pituitary gland",
      "Hypothalamus"
    ],
    answer: "Pituitary gland"
  },
  {
    question: "Thyroid cancer is most often:",
    options: [
      "Inoperable",
      "Rapidly fatal",
      "Treatable with good prognosis",
      "Seen in children"
    ],
    answer: "Treatable with good prognosis"
  },
  {
    question: "Thyroid function in a person with Hashimoto’s is usually:",
    options: [
      "Normal",
      "Hyperactive",
      "Hypoactive",
      "Fluctuating randomly"
    ],
    answer: "Hypoactive"
  },
  {
    question: "The most definitive test for diagnosing thyroid cancer is:",
    options: [
      "Ultrasound",
      "FNAC",
      "TSH",
      "CT scan"
    ],
    answer: "FNAC"
  }
];

const ThyroidSwelling = () => {
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
      <h1>🟠 Thyroid Swellings</h1>
      <p className="lead">“A lump that may be more than a bump.”</p>

      <section className="info-section">
  <h3>🦋 Overview</h3>
  <p>
    Thyroid swellings—such as goiters and nodules—are common neck abnormalities, particularly in women.
    While many are harmless, others may indicate hormonal issues, autoimmune diseases, or thyroid cancer.
    Early evaluation improves outcomes and prevents complications.
  </p>

  <h3>🧠 Understanding the Thyroid Gland</h3>
  <p>
    The thyroid gland, located at the base of the neck, regulates:
  </p>
  <ul>
    <li>Metabolism</li>
    <li>Energy levels</li>
    <li>Heart rate</li>
    <li>Body temperature</li>
    <li>Growth and development</li>
  </ul>
  <p>It functions via the hormones T3 and T4, regulated by TSH from the pituitary gland.</p>

  <h3>📌 Types of Thyroid Swellings</h3>
  <table>
    <thead>
      <tr><th>Type</th><th>Description</th></tr>
    </thead>
    <tbody>
      <tr><td>Diffuse Goiter</td><td>Uniform gland enlargement (iodine deficiency or autoimmune)</td></tr>
      <tr><td>Nodular Goiter</td><td>Presence of one or more nodules</td></tr>
      <tr><td>Solitary Thyroid Nodule (STN)</td><td>A single nodule—needs malignancy evaluation</td></tr>
      <tr><td>Multinodular Goiter (MNG)</td><td>Multiple nodules—usually benign</td></tr>
      <tr><td>Thyroid Cyst</td><td>Fluid-filled, often benign</td></tr>
      <tr><td>Thyroid Cancer</td><td>Painless, hard lump, may affect voice or lymph nodes</td></tr>
    </tbody>
  </table>

  <h3>⚠️ Causes of Thyroid Enlargement</h3>
  <ul>
    <li>Iodine deficiency</li>
    <li>Hashimoto’s Thyroiditis (hypothyroidism)</li>
    <li>Graves’ Disease (hyperthyroidism)</li>
    <li>Benign nodules</li>
    <li>Thyroid cancer (various types)</li>
    <li>Subacute or postpartum thyroiditis</li>
    <li>Drugs like lithium or amiodarone</li>
  </ul>

  <h3>🩺 Symptoms to Watch For</h3>
  <h4>Local Symptoms:</h4>
  <ul>
    <li>Visible neck swelling or lump that moves when swallowing</li>
    <li>Tightness or pressure in the neck</li>
    <li>Voice change or hoarseness</li>
    <li>Difficulty swallowing or breathing</li>
  </ul>

  <h4>Systemic Symptoms:</h4>
  <table>
    <thead>
      <tr><th>Hyperthyroidism</th><th>Hypothyroidism</th></tr>
    </thead>
    <tbody>
      <tr><td>Rapid heartbeat</td><td>Slow pulse</td></tr>
      <tr><td>Weight loss with good appetite</td><td>Weight gain</td></tr>
      <tr><td>Heat intolerance</td><td>Cold intolerance</td></tr>
      <tr><td>Anxiety, tremors</td><td>Depression, sluggishness</td></tr>
      <tr><td>Excessive sweating</td><td>Dry skin, hair fall</td></tr>
    </tbody>
  </table>

  <h3>🔬 Diagnostic Evaluation</h3>
  <ul>
    <li>✅ <strong>Thyroid Function Tests (T3, T4, TSH):</strong> Check hormone levels</li>
    <li>✅ <strong>Anti-thyroid Antibodies:</strong> Detect autoimmune thyroiditis</li>
    <li>✅ <strong>Ultrasound Neck:</strong> Evaluate nodules, cysts, vascularity</li>
    <li>✅ <strong>FNAC:</strong> Fine Needle Aspiration to assess for cancer</li>
    <li>✅ <strong>Thyroid Scintigraphy:</strong> Hot vs. cold nodules</li>
    <li>✅ <strong>CT/MRI:</strong> For large goiters with airway compression</li>
  </ul>

  <h3>💊 Treatment Options</h3>
  <ul>
    <li>🔹 <strong>Observation:</strong> For small, benign, non-symptomatic nodules</li>
    <li>🔹 <strong>Medications:</strong> 
      <ul>
        <li>Levothyroxine for hypothyroidism</li>
        <li>Antithyroid drugs for hyperthyroidism</li>
        <li>Iodine supplements where deficient</li>
      </ul>
    </li>
    <li>🔹 <strong>Minimally Invasive Options:</strong> Alcohol injection, RFA for benign nodules</li>
    <li>🔹 <strong>Surgery:</strong> Indicated for large, cancerous, or compressive nodules</li>
    <li>🔹 <strong>Radioactive Iodine:</strong> For toxic goiters or post-cancer treatment</li>
  </ul>

  <h3>✅ Prevention & Self-Monitoring</h3>
  <ul>
    <li>Use iodized salt regularly</li>
    <li>Screen if over 35, postpartum, or family history present</li>
    <li>Watch for neck changes or fatigue</li>
    <li>Avoid excessive soy and raw cabbage (in hypothyroid)</li>
    <li>Incorporate yoga or meditation to manage stress</li>
  </ul>

  <h3>🧐 Myths vs. Facts</h3>
  <table>
    <thead>
      <tr><th>Myth</th><th>Fact</th></tr>
    </thead>
    <tbody>
      <tr><td>All thyroid swellings are cancer</td><td>Over 90% are benign</td></tr>
      <tr><td>Only women get thyroid problems</td><td>Men can also develop nodules/cancer</td></tr>
      <tr><td>Thyroid issues always show symptoms</td><td>Silent goiters/nodules are common</td></tr>
      <tr><td>Normal hormones = harmless lump</td><td>Even euthyroid swellings can be cancer</td></tr>
    </tbody>
  </table>

  <h3>🏥 Our Approach to Thyroid Swellings at Sukam Speciality and Fertility Clinic</h3>
  <ol>
    <li><strong>Detailed History & Neck Examination:</strong> Focused exam with family and menstrual history</li>
    <li><strong>Same-Day Thyroid Profile:</strong> T3, T4, TSH with rapid reporting</li>
    <li><strong>Specialist Ultrasound:</strong> High-res scan to assess risk</li>
    <li><strong>FNAC:</strong> In-clinic sampling for cytological confirmation</li>
    <li><strong>Multidisciplinary Review:</strong> ENT + Endocrinologist + Radiologist opinion</li>
    <li><strong>Individualized Treatment Plan:</strong> Medication, RAI, or surgery as required</li>
    <li><strong>Safe Surgical Options:</strong> Hemithyroidectomy, Total/Completion thyroidectomy with voice monitoring</li>
    <li><strong>Post-Treatment Follow-up:</strong> Long-term hormonal and ultrasound monitoring</li>
  </ol>
</section>


      <section className="quiz-section">
        <h2>🧠 Thyroid Swellings Quiz — Test Your Knowledge!</h2>

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

export default ThyroidSwelling;
