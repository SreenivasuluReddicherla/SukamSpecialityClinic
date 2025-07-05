import React, { useState } from 'react';
import './RP1InfertilityInsights.css';

const quizData = [
  {
    question: "Thyrotoxicosis is primarily caused by:",
    options: [
      "Low iodine levels",
      "Excessive thyroid hormone in the blood",
      "High calcium levels",
      "Adrenal hormone deficiency"
    ],
    answer: "Excessive thyroid hormone in the blood"
  },
  {
    question: "Which of the following is the most common cause of thyrotoxicosis?",
    options: [
      "Thyroid cancer",
      "Graves’ disease",
      "Goiter",
      "Thyroid cyst"
    ],
    answer: "Graves’ disease"
  },
  {
    question: "A typical symptom of thyrotoxicosis includes:",
    options: [
      "Weight gain",
      "Cold intolerance",
      "Slow heart rate",
      "Heat intolerance"
    ],
    answer: "Heat intolerance"
  },
  {
    question: "Which lab result pattern suggests thyrotoxicosis?",
    options: [
      "High TSH, low T3/T4",
      "Normal TSH, high T3/T4",
      "Low TSH, high T3/T4",
      "High TSH, high T3/T4"
    ],
    answer: "Low TSH, high T3/T4"
  },
  {
    question: "What is a common eye symptom in Graves' disease?",
    options: [
      "Drooping eyelids",
      "Blurred vision",
      "Bulging eyes",
      "Eye twitching"
    ],
    answer: "Bulging eyes"
  },
  {
    question: "The hormone primarily controlled by TSH is:",
    options: [
      "Cortisol",
      "Insulin",
      "Thyroxine (T4)",
      "Prolactin"
    ],
    answer: "Thyroxine (T4)"
  },
  {
    question: "Which medication is commonly used to treat thyrotoxicosis?",
    options: [
      "Levothyroxine",
      "Carbimazole",
      "Metformin",
      "Amlodipine"
    ],
    answer: "Carbimazole"
  },
  {
    question: "A potential complication of untreated thyrotoxicosis is:",
    options: [
      "Kidney failure",
      "Thyroid storm",
      "Stroke",
      "Cataract"
    ],
    answer: "Thyroid storm"
  },
  {
    question: "Beta-blockers are prescribed in thyrotoxicosis to:",
    options: [
      "Cure the disease",
      "Control the hormone level",
      "Reduce heart rate and tremors",
      "Treat eye symptoms"
    ],
    answer: "Reduce heart rate and tremors"
  },
  {
    question: "Thyrotoxicosis can affect which system the most?",
    options: [
      "Reproductive",
      "Respiratory",
      "Cardiovascular",
      "Skeletal"
    ],
    answer: "Cardiovascular"
  },
  {
    question: "Which of the following is a classic sign of hypermetabolism?",
    options: [
      "Constipation",
      "Weight loss",
      "Puffy face",
      "Bradycardia"
    ],
    answer: "Weight loss"
  },
  {
    question: "Postpartum thyroiditis can lead to:",
    options: [
      "Thyrotoxicosis",
      "Diabetes",
      "Anemia",
      "Migraine"
    ],
    answer: "Thyrotoxicosis"
  },
  {
    question: "Which test is useful for determining the cause of thyrotoxicosis?",
    options: [
      "MRI scan",
      "Thyroid nuclear scan",
      "CT abdomen",
      "Liver function test"
    ],
    answer: "Thyroid nuclear scan"
  },
  {
    question: "One of the first signs in elderly patients with thyrotoxicosis can be:",
    options: [
      "Diarrhea",
      "Psychosis",
      "Atrial fibrillation",
      "Eye swelling"
    ],
    answer: "Atrial fibrillation"
  },
  {
    question: "What does a low TSH level usually indicate?",
    options: [
      "Underactive thyroid",
      "Overactive thyroid",
      "Normal thyroid",
      "Pituitary disease"
    ],
    answer: "Overactive thyroid"
  },
  {
    question: "Thyroid storm is a:",
    options: [
      "Type of cancer",
      "Mild thyroid irritation",
      "Severe life-threatening form of thyrotoxicosis",
      "Radiation side effect"
    ],
    answer: "Severe life-threatening form of thyrotoxicosis"
  },
  {
    question: "The first-line diagnostic test for thyroid function is:",
    options: [
      "T3 only",
      "Ultrasound neck",
      "TSH level",
      "ECG"
    ],
    answer: "TSH level"
  },
  {
    question: "Which of the following is NOT a symptom of thyrotoxicosis?",
    options: [
      "Insomnia",
      "Anxiety",
      "Dry skin",
      "Palpitations"
    ],
    answer: "Dry skin"
  },
  {
    question: "Radioactive iodine therapy is contraindicated in:",
    options: [
      "Elderly patients",
      "Diabetic patients",
      "Pregnant women",
      "Hyperthyroid men"
    ],
    answer: "Pregnant women"
  },
  {
    question: "Graves’ disease is an example of a(n):",
    options: [
      "Viral infection",
      "Nutritional deficiency",
      "Autoimmune disorder",
      "Fungal illness"
    ],
    answer: "Autoimmune disorder"
  }
];

const Thyrotoxicosis = () => {
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
    return { correct, wrong: quizData.length - correct };
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
      <h1>🟠 Thyrotoxicosis</h1>
      <p className="lead">“Thyroid in overdrive, body on edge.”</p>

      <section className="info-section">
  <h3>🔥 What Is Thyrotoxicosis?</h3>
  <p>
    Thyrotoxicosis is a condition where the blood has excess thyroid hormones, causing the body’s metabolism to run in overdrive.
    While often caused by hyperthyroidism (overactive thyroid), it can also result from inflammation, medication, or hormone overuse.
  </p>
  <p>
    <strong>Note:</strong> Hyperthyroidism is one cause of thyrotoxicosis. Thyrotoxicosis describes the clinical state of excess hormones, regardless of source.
  </p>

  <h3>⚠️ Why It Matters</h3>
  <ul>
    <li>Heart rhythm abnormalities (e.g., atrial fibrillation)</li>
    <li>Osteoporosis and muscle wasting</li>
    <li>Weight loss despite good appetite</li>
    <li>Menstrual irregularities and infertility</li>
    <li>Thyroid storm – a rare, life-threatening emergency</li>
  </ul>

  <h3>🧠 Common Symptoms</h3>
  <table>
    <thead>
      <tr><th>System Affected</th><th>Symptoms</th></tr>
    </thead>
    <tbody>
      <tr><td>Metabolic</td><td>Weight loss, heat intolerance</td></tr>
      <tr><td>Cardiac</td><td>Palpitations, rapid heartbeat</td></tr>
      <tr><td>Neurologic</td><td>Anxiety, restlessness, insomnia, tremors</td></tr>
      <tr><td>Gastrointestinal</td><td>Frequent stools, diarrhea</td></tr>
      <tr><td>Skin & Hair</td><td>Hair thinning, excessive sweating</td></tr>
      <tr><td>Reproductive</td><td>Irregular periods, decreased libido</td></tr>
      <tr><td>Ocular (Graves')</td><td>Bulging eyes, dry or gritty sensation</td></tr>
    </tbody>
  </table>

  <h3>📌 Common Causes of Thyrotoxicosis</h3>
  <ul>
    <li>Graves’ disease – autoimmune overactivity of thyroid</li>
    <li>Toxic multinodular goiter or toxic adenoma</li>
    <li>Subacute or silent thyroiditis (inflammation)</li>
    <li>Excess iodine intake (e.g., amiodarone, contrast dyes)</li>
    <li>Overuse of thyroxine medication (TSH suppression)</li>
    <li>Rarely, hormone-secreting thyroid cancer</li>
  </ul>

  <h3>🔬 How It’s Diagnosed</h3>
  <ul>
    <li>✅ <strong>TSH, T3, T4:</strong> Low TSH, high T3/T4 confirm diagnosis</li>
    <li>✅ <strong>Anti-TSH receptor antibody:</strong> Confirms Graves’ disease</li>
    <li>✅ <strong>Ultrasound Neck:</strong> Detects nodules, vascularity</li>
    <li>✅ <strong>Thyroid Scan (Scintigraphy):</strong> Distinguishes diffuse vs. nodular activity</li>
    <li>✅ <strong>Anti-TPO antibodies:</strong> Suggest autoimmune thyroiditis</li>
  </ul>

  <h3>💊 Treatment Options</h3>
  <ul>
    <li>🔹 <strong>Medications:</strong>
      <ul>
        <li>Antithyroid drugs (methimazole, carbimazole)</li>
        <li>Beta-blockers (propranolol) to control symptoms</li>
      </ul>
    </li>
    <li>🔹 <strong>Radioactive Iodine Therapy:</strong> Used to shrink overactive thyroid tissue</li>
    <li>🔹 <strong>Surgery (Thyroidectomy):</strong> For large goiters, recurrent disease, or poor medication tolerance</li>
  </ul>

  <h3>👁️ Graves’ Eye Disease (Thyroid Orbitopathy)</h3>
  <ul>
    <li>Bulging or protruding eyes</li>
    <li>Redness, watering, double vision</li>
    <li>Dry, gritty sensation</li>
    <li>Ophthalmology referral may be required</li>
  </ul>

  <h3>🚨 Complications If Untreated</h3>
  <ul>
    <li>Heart failure, arrhythmias</li>
    <li>Osteoporosis and fractures</li>
    <li>Muscle weakness, fatigue</li>
    <li>Infertility or miscarriage</li>
    <li>Thyroid storm (fever, coma, shock)</li>
  </ul>

  <h3>🧐 Myths vs. Facts</h3>
  <table>
    <thead>
      <tr><th>Myth</th><th>Fact</th></tr>
    </thead>
    <tbody>
      <tr><td>Only women get thyrotoxicosis</td><td>More common in women but affects men too</td></tr>
      <tr><td>Weight loss is healthy</td><td>In thyrotoxicosis, it’s dangerous and muscle-wasting</td></tr>
      <tr><td>Can be treated with diet alone</td><td>Medical therapy is usually required</td></tr>
      <tr><td>Low TSH always means treatment</td><td>Needs evaluation with T3/T4 and symptoms</td></tr>
    </tbody>
  </table>

  <h3>🏥 Our Approach to Thyrotoxicosis at [Your Clinic Name]</h3>
  <ol>
    <li><strong>Detailed Consultation:</strong> History, vitals, thyroid size, eye exam</li>
    <li><strong>On-Site Thyroid Profile:</strong> TSH, T3, T4, antibodies with rapid reports</li>
    <li><strong>Ultrasound Evaluation:</strong> To assess gland size, nodules, and blood flow</li>
    <li><strong>Specialist Referrals:</strong> Cardiology for palpitations; ophthalmology if eye signs</li>
    <li><strong>Custom Treatment Plan:</strong> Medications, RAI, or surgery tailored to need</li>
    <li><strong>Follow-Up Every 4–8 Weeks:</strong> For dose adjustments and progress</li>
    <li><strong>Lifestyle Counseling:</strong> Sleep, hydration, diet, and stress control</li>
  </ol>
</section>


      <section className="quiz-section">
        <h2>🧠 Thyrotoxicosis Quiz — Test Your Knowledge!</h2>

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

export default Thyrotoxicosis;
