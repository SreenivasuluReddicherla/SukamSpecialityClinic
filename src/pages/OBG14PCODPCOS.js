import React, { useState } from 'react';
import './RP1InfertilityInsights.css';

const quizData = [
  {
    question: "PCOS stands for:",
    options: [
      "Primary cervical ovarian syndrome",
      "Polycystic ovarian syndrome",
      "Pelvic cyst ovary syndrome",
      "None"
    ],
    answer: "Polycystic ovarian syndrome"
  },
  {
    question: "A common symptom of PCOS is:",
    options: [
      "Weight loss",
      "Regular cycles",
      "Acne and hair growth",
      "Vaginal dryness"
    ],
    answer: "Acne and hair growth"
  },
  {
    question: "PCOS affects:",
    options: [
      "Only the ovaries",
      "Reproductive and metabolic systems",
      "Lungs",
      "Liver"
    ],
    answer: "Reproductive and metabolic systems"
  },
  {
    question: "Insulin resistance in PCOS causes:",
    options: [
      "Hypoglycemia",
      "Increased testosterone",
      "Improved fertility",
      "None"
    ],
    answer: "Increased testosterone"
  },
  {
    question: "Best diet for PCOS includes:",
    options: [
      "High sugar",
      "Low fiber",
      "Low glycemic index",
      "High saturated fat"
    ],
    answer: "Low glycemic index"
  },
  {
    question: "Which hormone is usually elevated in PCOS?",
    options: ["Estrogen", "LH", "TSH", "FSH"],
    answer: "LH"
  },
  {
    question: "PCOS can cause:",
    options: [
      "Kidney stones",
      "Irregular periods",
      "Frequent infections",
      "Uterine prolapse"
    ],
    answer: "Irregular periods"
  },
  {
    question: "Which test helps assess ovarian reserve?",
    options: ["AMH", "ESR", "HbA1c", "Creatinine"],
    answer: "AMH"
  },
  {
    question: "First-line treatment in PCOS is:",
    options: [
      "Surgery",
      "Lifestyle modification",
      "Radiation",
      "Blood transfusion"
    ],
    answer: "Lifestyle modification"
  },
  {
    question: "PCOS can increase risk of:",
    options: [
      "Gallbladder stones",
      "Diabetes",
      "Cancer of liver",
      "Brain tumor"
    ],
    answer: "Diabetes"
  },
  {
    question: "Lean PCOS means:",
    options: [
      "No symptoms",
      "Thin women with PCOS",
      "PCOS that goes away",
      "Less insulin resistance"
    ],
    answer: "Thin women with PCOS"
  },
  {
    question: "Best exercise for PCOS is:",
    options: [
      "Weight lifting only",
      "Cardio and yoga",
      "No exercise",
      "Only stretching"
    ],
    answer: "Cardio and yoga"
  },
  {
    question: "Ovulation-inducing drug used in PCOS:",
    options: ["Metformin", "Clomiphene", "Paracetamol", "Omeprazole"],
    answer: "Clomiphene"
  },
  {
    question: "Which scan shows polycystic ovaries?",
    options: [
      "ECG",
      "X-ray",
      "Transvaginal ultrasound",
      "EEG"
    ],
    answer: "Transvaginal ultrasound"
  },
  {
    question: "Which skin issue is common in PCOS?",
    options: ["Dryness", "Psoriasis", "Acne", "Vitiligo"],
    answer: "Acne"
  },
  {
    question: "A key feature of PCOS is:",
    options: [
      "One large cyst",
      "Multiple small follicles",
      "Fibroids",
      "Tumors"
    ],
    answer: "Multiple small follicles"
  },
  {
    question: "Elevated AMH is seen in:",
    options: ["Menopause", "POI", "PCOS", "Endometriosis"],
    answer: "PCOS"
  },
  {
    question: "Common hormonal imbalance in PCOS:",
    options: ["Low FSH", "High LH", "High cortisol", "Low TSH"],
    answer: "High LH"
  },
  {
    question: "PCOS affects:",
    options: [
      "Just young girls",
      "Only postmenopausal women",
      "Reproductive-age women",
      "Infants"
    ],
    answer: "Reproductive-age women"
  },
  {
    question: "PCOS increases risk of:",
    options: [
      "Heart disease",
      "Thyroid cancer",
      "Lung infection",
      "Bone fracture"
    ],
    answer: "Heart disease"
  },
  {
    question: "Hair thinning in PCOS is due to:",
    options: ["Estrogen", "Insulin", "Androgens", "Progesterone"],
    answer: "Androgens"
  },
  {
    question: "Weight loss improves:",
    options: [
      "Fertility",
      "Hormonal balance",
      "Ovulation",
      "All of the above"
    ],
    answer: "All of the above"
  },
  {
    question: "Which gland is involved in PCOS?",
    options: ["Thyroid", "Adrenal", "Ovaries", "Pituitary only"],
    answer: "Ovaries"
  },
  {
    question: "Anti-androgens help reduce:",
    options: [
      "Periods",
      "Pain",
      "Acne and facial hair",
      "Fatigue"
    ],
    answer: "Acne and facial hair"
  },
  {
    question: "PCOS affects how many women globally (approx.)?",
    options: ["1 in 3", "1 in 10", "1 in 50", "1 in 100"],
    answer: "1 in 10"
  }
];


const PCODPCOS = () => {
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
      <h1>🌸 PCOD / PCOS</h1>
      <p className="lead">“When hormones dance out of rhythm, but hope stays in tune.”</p>
      <section className="info-section">
  <h3>🔍 Introduction</h3>
  <p>
    Polycystic Ovary Disease (PCOD) and Polycystic Ovary Syndrome (PCOS) are often misunderstood and mismanaged. These conditions affect hormonal balance, metabolism, fertility, and emotional wellbeing — with diverse presentations in different women. Understanding their triggers and patterns is essential for effective care.
  </p>

  <h3>🔄 What’s the Difference Between PCOD and PCOS?</h3>
  <table>
    <thead>
      <tr>
        <th>Feature</th>
        <th>PCOD (Disease)</th>
        <th>PCOS (Syndrome)</th>
      </tr>
    </thead>
    <tbody>
      <tr><td>Nature</td><td>Structural disorder</td><td>Systemic metabolic–endocrine syndrome</td></tr>
      <tr><td>Cause</td><td>Poor lifestyle, immature follicles</td><td>Hormonal imbalance, insulin resistance, inflammation</td></tr>
      <tr><td>Ovulation</td><td>Often regular</td><td>Often irregular or absent</td></tr>
      <tr><td>Fertility Impact</td><td>May still ovulate and conceive</td><td>Ovulation frequently impaired</td></tr>
      <tr><td>Severity</td><td>Milder</td><td>More severe, chronic, multi-organ involvement</td></tr>
      <tr><td>Cystic Pattern</td><td>Enlarged ovaries with multiple immature follicles</td><td>"String of pearls" + metabolic features</td></tr>
      <tr><td>Long-term Risks</td><td>Less</td><td>Higher — diabetes, infertility, heart disease</td></tr>
    </tbody>
  </table>
  <p><strong>Note:</strong> PCOD can progress to PCOS if lifestyle isn’t addressed early.</p>

  <h3>🧬 Pathophysiology: What Happens in the Body</h3>
  <ul>
    <li><strong>↑ LH</strong> → More androgen (male hormone) production</li>
    <li><strong>↓ FSH</strong> → Poor follicle maturation</li>
    <li><strong>↑ Androgens</strong> → Acne, facial hair, ovulatory issues</li>
    <li><strong>↑ Insulin resistance</strong> → Fat storage, inflammation, worsened hormones</li>
    <li><strong>HPO Axis Disruption:</strong> The brain-ovary feedback loop is impaired</li>
    <li><strong>Ovarian Ultrasound:</strong> Multiple follicles (&lt;10mm) seen on periphery + thick capsule</li>
  </ul>

  <h3>👩‍🦰 PCOS Patterns Across Life Stages</h3>
  <ul>
    <li><strong>Adolescents:</strong> Irregular cycles, acne, mood swings</li>
    <li><strong>20s–30s:</strong> Infertility, hirsutism, cycle disturbances</li>
    <li><strong>Postpartum:</strong> Worsening due to insulin spikes or weight gain</li>
    <li><strong>Perimenopause:</strong> Risk of metabolic syndrome, diabetes</li>
  </ul>

  <h3>🧭 Types of PCOS (Phenotypes)</h3>
  <ul>
    <li><strong>Type A:</strong> Irregular periods + high androgens + cysts</li>
    <li><strong>Type B:</strong> High androgens + irregular periods (no cysts)</li>
    <li><strong>Type C:</strong> Regular periods + high androgens + cysts</li>
    <li><strong>Type D (Lean PCOS):</strong> Thin body, hormonal symptoms, no insulin resistance</li>
  </ul>

  <h3>🔍 Symptoms to Watch</h3>
  <ul>
    <li><strong>Menstrual:</strong> Delayed/missing periods, spotting, heavy/scanty flow</li>
    <li><strong>Skin & Hair:</strong> Oily skin, acne, facial hair, hair thinning</li>
    <li><strong>Metabolic:</strong> Weight gain, brain fog, acanthosis nigricans</li>
    <li><strong>Fertility & Mental:</strong> Infertility, mood swings, depression, low libido</li>
  </ul>

  <h3>🧪 Diagnosis at Sukam</h3>
  <ul>
    <li><strong>Clinical:</strong> Cycle tracking, hirsutism scoring (Ferriman–Gallwey)</li>
    <li><strong>Blood Tests:</strong> LH, FSH, Testosterone, AMH, Insulin, HbA1c, Lipids</li>
    <li><strong>Imaging:</strong> Transvaginal US showing &gt; 12 follicles per ovary</li>
  </ul>
  <p><strong>Note:</strong> PCOS is not over-diagnosed in teens — we look beyond immature ovaries.</p>

  <h3>🎯 Treatment Goals</h3>
  <ul>
    <li>Restore ovulation</li>
    <li>Balance hormones</li>
    <li>Improve insulin sensitivity</li>
    <li>Prevent long-term complications</li>
    <li>Support fertility (if needed)</li>
  </ul>

  <h4>1️⃣ Lifestyle First</h4>
  <ul>
    <li><strong>Nutrition:</strong> Low-GI, anti-inflammatory, avoid sugar/trans fats</li>
    <li><strong>Exercise:</strong> Daily walking, resistance training, yoga for PCOS</li>
    <li><strong>Stress:</strong> Mindfulness, journaling, 7–9 hrs sleep</li>
  </ul>

  <h4>2️⃣ Medical Management</h4>
  <ul>
    <li><strong>Metformin:</strong> For insulin resistance, ovulation</li>
    <li><strong>Letrozole / Clomiphene:</strong> Ovulation induction</li>
    <li><strong>OCPs:</strong> Regulate cycles, improve skin/hair</li>
    <li><strong>Spironolactone / Finasteride:</strong> Hirsutism, acne</li>
    <li><strong>Myo-inositol:</strong> Egg quality & insulin sensitivity</li>
  </ul>

  <h4>3️⃣ Fertility Focus</h4>
  <ul>
    <li>Ovulation induction + follicle tracking</li>
    <li>IUI or IVF for resistant cases</li>
    <li>Ovarian drilling (rare cases)</li>
  </ul>

  <h4>4️⃣ Integrative & Holistic Care</h4>
  <ul>
    <li>PCOS yoga & meditation</li>
    <li>PCOS-friendly meal plans</li>
    <li>Skin & hair care</li>
    <li>Ayurvedic herbs (Shatavari, Ashoka)</li>
    <li>Emotional wellness sessions</li>
  </ul>

  <h3>⚠️ Long-Term Risks if Untreated</h3>
  <ul>
    <li>Type 2 diabetes</li>
    <li>Endometrial cancer</li>
    <li>Heart disease, fatty liver</li>
    <li>Infertility, anxiety, depression</li>
  </ul>

  <h3>⏳ Ovarian Reserve & Fertility Preservation</h3>
  <ul>
    <li><strong>Tests:</strong> AMH, follicle count, ovulation kits</li>
    <li><strong>Consider:</strong> Egg freezing in high-AMH women if delaying pregnancy</li>
  </ul>

  <h3>❗ Myths vs. Facts</h3>
  <ul>
    <li><strong>Myth:</strong> “Only overweight women get PCOS”<br /><strong>Fact:</strong> Lean PCOS exists and can be harder to detect.</li>
    <li><strong>Myth:</strong> “Junk food causes PCOS”<br /><strong>Fact:</strong> Diet worsens it but isn't the root cause.</li>
    <li><strong>Myth:</strong> “Cured once periods return”<br /><strong>Fact:</strong> Needs lifelong monitoring.</li>
    <li><strong>Myth:</strong> “Surgery cures PCOS”<br /><strong>Fact:</strong> Surgery helps a few — not a cure.</li>
    <li><strong>Myth:</strong> “No cysts means no PCOS”<br /><strong>Fact:</strong> Hormonal imbalance may occur without visible cysts.</li>
  </ul>
</section>

      

      <section className="quiz-section">
        <h2>🧠 PCOS Quiz — How Much Do You Know?</h2>

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

export default PCODPCOS;
