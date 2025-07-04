import React, { useState } from 'react';
import './RP1InfertilityInsights.css';

const quizData = [
  {
    question: "What is a normal range for a menstrual cycle?",
    options: ["15–20 days", "21–35 days", "40–50 days", "10–15 days"],
    answer: "21–35 days"
  },
  {
    question: "Amenorrhea refers to:",
    options: ["Painful periods", "Heavy periods", "Absence of periods", "Short cycles"],
    answer: "Absence of periods"
  },
  {
    question: "Which hormone is often elevated in PCOS?",
    options: ["Prolactin", "Estrogen", "Insulin", "Cortisol"],
    answer: "Insulin"
  },
  {
    question: "Which of the following causes heavy bleeding?",
    options: ["Fibroids", "Appendicitis", "Gallstones", "Migraine"],
    answer: "Fibroids"
  },
  {
    question: "Oligomenorrhea means:",
    options: ["Frequent periods", "Infrequent periods", "Heavy bleeding", "Mid-cycle spotting"],
    answer: "Infrequent periods"
  },
  {
    question: "Hypothyroidism can cause:",
    options: [
      "Frequent ovulation",
      "Irregular or absent periods",
      "Long cycles with normal bleeding",
      "None of the above"
    ],
    answer: "Irregular or absent periods"
  },
  {
    question: "A typical period lasts:",
    options: ["1–2 days", "3–7 days", "10–12 days", "Over 14 days"],
    answer: "3–7 days"
  },
  {
    question: "Which condition is commonly linked to insulin resistance?",
    options: ["Thyroid disorder", "PCOS", "Endometriosis", "Adenomyosis"],
    answer: "PCOS"
  },
  {
    question: "Spotting between periods is called:",
    options: ["Menorrhagia", "Amenorrhea", "Metrorrhagia", "Dysmenorrhea"],
    answer: "Metrorrhagia"
  },
  {
    question: "Which imaging helps identify fibroids or polyps?",
    options: ["ECG", "X-ray", "Pelvic ultrasound", "EEG"],
    answer: "Pelvic ultrasound"
  },
  {
    question: "True or False: Birth control can regulate irregular cycles.",
    options: ["True", "False"],
    answer: "True"
  },
  {
    question: "Which vitamin helps with PMS symptoms?",
    options: ["Vitamin D", "Vitamin K", "Vitamin A", "Vitamin E"],
    answer: "Vitamin D"
  },
  {
    question: "Common sign of menorrhagia:",
    options: [
      "Cramping",
      "Skipped period",
      "Soaking pads every hour",
      "Irregular spotting"
    ],
    answer: "Soaking pads every hour"
  },
  {
    question: "PCOS is diagnosed using:",
    options: [
      "EEG",
      "Pelvic MRI",
      "Hormonal blood tests + Ultrasound",
      "Urine test only"
    ],
    answer: "Hormonal blood tests + Ultrasound"
  },
  {
    question: "Sudden weight loss can cause:",
    options: ["Amenorrhea", "Fibroids", "Thyroid nodules", "Ovulation"],
    answer: "Amenorrhea"
  },
  {
    question: "Dysmenorrhea is best defined as:",
    options: [
      "Excess bleeding",
      "Painful menstruation",
      "Mid-cycle bleeding",
      "Absence of periods"
    ],
    answer: "Painful menstruation"
  },
  {
    question: "Which of the following is a natural remedy for cramps?",
    options: [
      "High-sugar diet",
      "Hot water bottle",
      "Cold compress",
      "Antibiotics"
    ],
    answer: "Hot water bottle"
  },
  {
    question: "What is the first step in assessing irregular cycles?",
    options: [
      "Colonoscopy",
      "Detailed menstrual history",
      "Chest X-ray",
      "Biopsy"
    ],
    answer: "Detailed menstrual history"
  },
  {
    question: "Which phase follows ovulation?",
    options: ["Follicular", "Luteal", "Menstrual", "Secretory"],
    answer: "Luteal"
  },
  {
    question: "Hormone responsible for ovulation is:",
    options: ["TSH", "FSH", "LH", "Prolactin"],
    answer: "LH"
  },
  {
    question: "Excess androgens in females cause:",
    options: [
      "Irregular periods",
      "Acne",
      "Hirsutism",
      "All of the above"
    ],
    answer: "All of the above"
  },
  {
    question: "Best diagnostic for adenomyosis:",
    options: ["CT scan", "X-ray", "MRI", "PET scan"],
    answer: "MRI"
  },
  {
    question: "Which condition is NOT a cause of irregular periods?",
    options: ["PCOS", "Diabetes", "Epilepsy", "Thyroid imbalance"],
    answer: "Epilepsy"
  },
  {
    question: "Which of these is a warning sign needing urgent care?",
    options: [
      "Light flow",
      "Period lasting 2 days",
      "Fainting with heavy bleeding",
      "Cramps only on day 1"
    ],
    answer: "Fainting with heavy bleeding"
  },
  {
    question: "At Sukam, what’s our first goal in treating menstrual irregularities?",
    options: [
      "Prescribe surgery",
      "Understand the root cause",
      "Recommend a hysterectomy",
      "Ignore unless severe"
    ],
    answer: "Understand the root cause"
  }
];


const MenstrualIrregularities = () => {
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
      <h1>🔄 Menstrual Irregularities</h1>
      <p className="lead">“When your monthly guest gets unpredictable.”</p>

      <section className="info-section">
  <h3>🩸 What Are Menstrual Irregularities?</h3>
  <p>
    Menstrual irregularities refer to any deviation from a normal menstrual cycle. A typical cycle lasts 21–35 days, with bleeding for 2–7 days. Changes in frequency, flow, duration, or symptoms can signal an issue.
  </p>
  <p><strong>Types of Irregularities:</strong></p>
  <ul>
    <li>Amenorrhea: Absence of menstruation</li>
    <li>Oligomenorrhea: Infrequent periods (interval &gt;35 days)</li>
    <li>Polymenorrhea: Frequent periods (interval &lt;21 days)</li>
    <li>Menorrhagia: Heavy or prolonged bleeding</li>
    <li>Hypomenorrhea: Scanty periods</li>
    <li>Metrorrhagia: Bleeding between periods</li>
    <li>Dysmenorrhea: Painful periods</li>
  </ul>

  <h3>📚 Causes of Menstrual Irregularities — Explained</h3>
  <p><strong>A. Hormonal Causes</strong></p>
  <ul>
    <li><strong>PCOS:</strong> Excess androgens disrupt ovulation, linked to acne, weight gain, and missed periods</li>
    <li><strong>Thyroid Disorders:</strong> Both hyper/hypothyroidism can alter cycle regularity</li>
    <li><strong>Hyperprolactinemia:</strong> Elevated prolactin suppresses ovulation</li>
    <li><strong>Perimenopause:</strong> Hormonal shifts can lead to irregular cycles</li>
    <li><strong>Adrenal Disorders:</strong> Conditions like Cushing’s disrupt hormone production</li>
  </ul>

  <p><strong>B. Structural Causes</strong></p>
  <ul>
    <li>Fibroids: Non-cancerous growths causing heavy flow & pain</li>
    <li>Endometriosis: Endometrial-like tissue grows outside uterus</li>
    <li>Adenomyosis: Endometrial tissue in uterine muscle wall</li>
    <li>Polyps: Small growths in uterus causing spotting/bleeding</li>
  </ul>

  <p><strong>C. Lifestyle & Systemic Factors</strong></p>
  <ul>
    <li>Stress & Anxiety: Disrupts hormone release</li>
    <li>Extreme Weight Changes: Affects hormonal balance</li>
    <li>Excessive Exercise: Can cause amenorrhea in athletes</li>
    <li>Eating Disorders: Suppress ovulation via fat/nutrient deficiency</li>
    <li>Medications: Antipsychotics, hormonal pills may alter cycles</li>
  </ul>

  <p><strong>D. Other Medical Conditions</strong></p>
  <ul>
    <li>Diabetes: Uncontrolled sugar can disrupt hormones</li>
    <li>Bleeding Disorders: Like Von Willebrand disease causing menorrhagia</li>
    <li>Chronic Illness: Liver/kidney conditions alter hormone metabolism</li>
  </ul>

  <h3>⏳ When to Be Concerned?</h3>
  <ul>
    <li>Missed periods for over 3 months (not pregnant)</li>
    <li>Bleeding longer than 7 days</li>
    <li>Soaking &gt;1 pad/hour for several hours</li>
    <li>Severe pain not relieved by medicine</li>
    <li>Spotting after intercourse or between cycles</li>
    <li>Irregular periods affecting fertility</li>
  </ul>

  <h3>🧪 Diagnosis & Evaluation at Sukam</h3>
  <ul>
    <li>Detailed menstrual & medical history</li>
    <li>Hormone tests: TSH, LH, FSH, prolactin, estrogen, progesterone</li>
    <li>Ultrasound (pelvic or transvaginal)</li>
    <li>Endometrial biopsy if needed</li>
    <li>Hysteroscopy or saline infusion sonography</li>
  </ul>

  <h3>🧭 Treatment Options</h3>
  <ul>
    <li><strong>PCOS:</strong> Weight loss, Metformin, hormone therapy</li>
    <li><strong>Thyroid issues:</strong> Treated with Levothyroxine</li>
    <li><strong>Fibroids:</strong> IUD, myomectomy as needed</li>
    <li><strong>Perimenopause:</strong> Hormone therapy</li>
    <li><strong>Lifestyle:</strong> Diet, stress, exercise modifications</li>
    <li>Holistic options: Diet consult, Yoga, Ayurveda (if desired)</li>
  </ul>

  <h3>🍎 Nutrition Tips for Menstrual Balance</h3>
  <ul>
    <li>Iron: Spinach, red meat, lentils</li>
    <li>Omega-3s: Flaxseed, walnuts, fish</li>
    <li>B-complex: Eggs, whole grains</li>
    <li>Magnesium: Avocado, banana, dark chocolate</li>
    <li>Hydration: 2–3L/day reduces cramps & bloating</li>
  </ul>

  <h3>🧘‍♀️ Holistic Tips We Encourage at Sukam</h3>
  <ul>
    <li>Yoga: Malasana, Supta Baddha Konasana for pelvic flow</li>
    <li>Abdominal massage between cycles</li>
    <li>Journaling emotional release</li>
    <li>Evening digital detox for hormonal balance</li>
  </ul>

  <h3>🧠 Myths vs. Facts</h3>
  <ul>
    <li><strong>❌ Myth:</strong> “Irregular periods are normal in teenagers.”<br /><strong>✅ Fact:</strong> While common early in puberty, they should be tracked & evaluated.</li>
    <li><strong>❌ Myth:</strong> “Irregular cycles mean you can’t get pregnant.”<br /><strong>✅ Fact:</strong> Ovulation can still occur; fertility evaluation is key.</li>
    <li><strong>❌ Myth:</strong> “Birth control causes infertility.”<br /><strong>✅ Fact:</strong> Pills don’t affect long-term fertility after stopping.</li>
    <li><strong>❌ Myth:</strong> “Skipping periods is dangerous.”<br /><strong>✅ Fact:</strong> Skipping periods is often medically guided and safe.</li>
  </ul>

  <h3>👩‍⚕️ What You Can Expect at Sukam</h3>
  <ul>
    <li>Supportive, judgement-free consultation</li>
    <li>Cycle tracking & symptom evaluation</li>
    <li>Hormone mapping + ultrasound follow-ups</li>
    <li>Medical, lifestyle & fertility-focused care</li>
  </ul>
</section>


      <section className="quiz-section">
        <h2>🧠 Menstrual Irregularities Quiz — Know Your Cycle!</h2>
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

export default MenstrualIrregularities;
