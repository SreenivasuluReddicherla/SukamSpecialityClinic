import React, { useState } from 'react';
import './RP1InfertilityInsights.css';

const quizData = [
  {
    question: "Which of the following is a structural cause of AUB?",
    options: ["Coagulopathy", "Ovulatory dysfunction", "Polyp", "Endometrial dysfunction"],
    answer: "Polyp"
  },
  {
    question: "Bleeding between periods is known as:",
    options: ["Menorrhagia", "Metrorrhagia", "Amenorrhea", "Dysmenorrhea"],
    answer: "Metrorrhagia"
  },
  {
    question: "PALM-COEIN classification is used for:",
    options: ["Fibroid staging", "AUB diagnosis", "Thyroid dysfunction", "Ovary imaging"],
    answer: "AUB diagnosis"
  },
  {
    question: "Which test is essential in postmenopausal bleeding?",
    options: ["Thyroid test", "Lipid profile", "Endometrial biopsy", "ECG"],
    answer: "Endometrial biopsy"
  },
  {
    question: "AUB in PCOS is due to:",
    options: ["Frequent ovulation", "Coagulation disorder", "Anovulation", "Fibroids"],
    answer: "Anovulation"
  },
  {
    question: "AUB in a teenage girl with bruises suggests:",
    options: ["PCOS", "Fibroid", "Coagulopathy", "Adenomyosis"],
    answer: "Coagulopathy"
  },
  {
    question: "Endometrial ablation is ideal for:",
    options: ["Young girls", "Cancer patients", "Women who completed family", "Pregnant women"],
    answer: "Women who completed family"
  },
  {
    question: "Fibroids are also called:",
    options: ["Endometrial glands", "Myomas", "Polyps", "Cancers"],
    answer: "Myomas"
  },
  {
    question: "AUB with facial hair, acne, and obesity points to:",
    options: ["Fibroid", "PCOS", "PID", "Menopause"],
    answer: "PCOS"
  },
  {
    question: "Postmenopausal bleeding requires:",
    options: ["Wait and watch", "Uterine massage", "Immediate evaluation", "Iron tablets only"],
    answer: "Immediate evaluation"
  }
];


const AbnormalUterineBleeding = () => {
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
      <h1>🔴 Abnormal Uterine Bleeding</h1>
      <p className="lead">“When your body speaks through the bleed.”</p>

      <section className="info-section">
  <h3>🩸 What is Abnormal Uterine Bleeding?</h3>
  <p>
    Abnormal Uterine Bleeding (AUB) refers to any bleeding from the uterus that is irregular in volume, duration, frequency, or timing and does not follow the normal menstrual pattern.
    It can affect women of any age—from puberty to menopause—and may result from a variety of structural or hormonal causes.
  </p>

  <h3>⏰ What is a Normal Menstrual Cycle?</h3>
  <ul>
    <li>Cycle length: 21–35 days</li>
    <li>Bleeding duration: 2–7 days</li>
    <li>Blood loss: ~30–80 ml (3–6 pads per day)</li>
    <li>Predictable and consistent cycle</li>
  </ul>
  <p>When bleeding falls outside this range or becomes unpredictable, it is termed abnormal.</p>

  <h3>🔹 Types of Abnormal Uterine Bleeding</h3>
  <ul>
    <li><strong>Menorrhagia:</strong> Heavy or prolonged bleeding (&gt;80 ml or &gt;7 days)</li>
    <li><strong>Metrorrhagia:</strong> Bleeding between periods</li>
    <li><strong>Menometrorrhagia:</strong> Heavy bleeding + irregular timing</li>
    <li><strong>Oligomenorrhea:</strong> Infrequent periods (&gt;35 days apart)</li>
    <li><strong>Polymenorrhea:</strong> Frequent periods (&lt;21 days apart)</li>
    <li><strong>Amenorrhea:</strong> Absence of periods for 3+ cycles</li>
    <li><strong>Postmenopausal Bleeding:</strong> Any bleeding after 12 months of menopause (always abnormal)</li>
  </ul>

  <h3>⚙️ Causes of AUB — The PALM-COEIN Classification</h3>

  <h4>Structural Causes (PALM)</h4>
  <ul>
    <li><strong>P – Polyp:</strong> Benign growths in the uterine lining</li>
    <li><strong>A – Adenomyosis:</strong> Uterine lining invading muscle wall</li>
    <li><strong>L – Leiomyoma:</strong> Fibroids that distort the uterus</li>
    <li><strong>M – Malignancy/Hyperplasia:</strong> Endometrial cancer or thickened lining</li>
  </ul>

  <h4>Non-Structural Causes (COEIN)</h4>
  <ul>
    <li><strong>C – Coagulopathy:</strong> Clotting disorders like von Willebrand disease</li>
    <li><strong>O – Ovulatory Dysfunction:</strong> PCOS, thyroid disorders, stress</li>
    <li><strong>E – Endometrial Dysfunction:</strong> Lining issues not linked to hormones/structure</li>
    <li><strong>I – Iatrogenic:</strong> Medication-induced (IUDs, HRT, etc.)</li>
    <li><strong>N – Not Yet Classified:</strong> Rare or unknown causes</li>
  </ul>

  <h3>🧬 Common AUB Scenarios by Age Group</h3>
  <ul>
    <li><strong>Adolescents:</strong> Anovulatory cycles, bleeding disorders</li>
    <li><strong>Reproductive Age:</strong> PCOS, fibroids, polyps, hormonal contraception effects, thyroid dysfunction</li>
    <li><strong>Perimenopause/Postmenopause:</strong> Hormonal decline, hyperplasia, endometrial atrophy</li>
  </ul>
  <p><strong>⚠️ Note:</strong> Postmenopausal bleeding is a red flag and must be evaluated urgently.</p>

  <h3>🩺 Diagnosis at Sukam Speciality Clinic</h3>
  <ul>
    <li><strong>1. Medical History:</strong> Menstrual diary, clot size, pad count, spotting</li>
    <li><strong>2. Physical Exam:</strong> Uterine size, tenderness, palpable masses</li>
    <li><strong>3. Lab Tests:</strong> CBC, TSH, Prolactin, β-hCG, Coagulation profile, FSH/LH</li>
    <li><strong>4. Imaging:</strong> Transvaginal ultrasound, SIS, hysteroscopy, endometrial biopsy</li>
  </ul>

  <h3>💊 Treatment Options</h3>

  <h4>1. Lifestyle & Nutritional Support</h4>
  <ul>
    <li>Iron-rich diet for anemia</li>
    <li>Weight loss (for PCOS)</li>
    <li>Stress reduction practices</li>
    <li>Avoid caffeine and refined sugar</li>
  </ul>

  <h4>2. Medical Management</h4>
  <ul>
    <li><strong>PCOS / Ovulation issues:</strong> OCPs, Metformin</li>
    <li><strong>Heavy bleeding:</strong> Tranexamic acid, NSAIDs</li>
    <li><strong>Hyperplasia:</strong> Progesterone therapy</li>
    <li><strong>Fibroids/Adenomyosis:</strong> Hormonal IUDs, GnRH agonists</li>
    <li><strong>Bleeding disorders:</strong> Hormone therapy, factor replacement</li>
  </ul>

  <h4>3. Surgical Interventions</h4>
  <ul>
    <li><strong>Hysteroscopic polypectomy:</strong> Removal of polyps</li>
    <li><strong>Myomectomy:</strong> Fibroid removal with fertility preservation</li>
    <li><strong>Endometrial ablation:</strong> For heavy bleeding in completed families</li>
    <li><strong>Hysterectomy:</strong> Final option for severe or cancerous AUB</li>
  </ul>

  <h3>🌿 Holistic Support at Sukam</h3>
  <ul>
    <li>Yoga therapy for hormone balance</li>
    <li>Optional Ayurveda: Ashoka, Lodhra, Shatavari</li>
    <li>Cycle education and menstrual counseling</li>
    <li>Anemia correction with nutrition + supplements</li>
  </ul>

  <h3>🚨 When to Seek Immediate Care</h3>
  <ul>
    <li>Bleeding for &gt;7 days</li>
    <li>Large clots or heavy flow</li>
    <li>Bleeding between periods or post-intercourse</li>
    <li>Symptoms of anemia: fatigue, dizziness</li>
    <li>Postmenopausal bleeding</li>
    <li>Failure of home remedies or OTC meds</li>
  </ul>

  <h3>❗ Myths vs. Facts</h3>
  <ul>
    <li><strong>Myth:</strong> “Irregular periods are normal in teens.”<br /><strong>Fact:</strong> Persistent irregularity should be investigated.</li>
    <li><strong>Myth:</strong> “Heavy periods always mean hormone issues.”<br /><strong>Fact:</strong> Could be due to fibroids or clotting disorders.</li>
    <li><strong>Myth:</strong> “All AUB cases need hysterectomy.”<br /><strong>Fact:</strong> Most are treatable with less invasive options.</li>
    <li><strong>Myth:</strong> “Menopause ends all period problems.”<br /><strong>Fact:</strong> Bleeding after menopause may indicate cancer.</li>
    <li><strong>Myth:</strong> “Hormonal pills are dangerous.”<br /><strong>Fact:</strong> They are safe and protective when used properly.</li>
  </ul>

  <h3>🔚 Final Words</h3>
  <p>
    Abnormal Uterine Bleeding is a symptom — not a diagnosis. It may be mild or serious, but identifying the cause early is essential for health, comfort, and fertility.
    At Sukam Speciality Clinic, we provide compassionate, step-by-step care to restore balance and empower every woman with clarity about her menstrual health.
  </p>
</section>


      <section className="quiz-section">
        <h2>🧠 Abnormal Uterine Bleeding Quiz — Know Your Flow!</h2>

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

export default AbnormalUterineBleeding;
