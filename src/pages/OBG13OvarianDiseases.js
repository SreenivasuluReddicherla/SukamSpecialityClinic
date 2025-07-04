import React, { useState } from 'react';
import './RP1InfertilityInsights.css';

const quizData = [
  {
    question: "Ovaries are responsible for:",
    options: [
      "Insulin production",
      "Estrogen and egg release",
      "Bile secretion",
      "Blood cell production"
    ],
    answer: "Estrogen and egg release"
  },
  {
    question: "PCOS is caused by:",
    options: [
      "Infection",
      "Excess male hormones",
      "Cancer",
      "Uterine fibroids"
    ],
    answer: "Excess male hormones"
  },
  {
    question: "Endometriomas are also known as:",
    options: [
      "Chocolate cysts",
      "Water cysts",
      "Dermoid cysts",
      "Blood clots"
    ],
    answer: "Chocolate cysts"
  },
  {
    question: "Ovarian torsion is a:",
    options: [
      "Normal part of menstruation",
      "Medical emergency",
      "Menopausal symptom",
      "Type of infection"
    ],
    answer: "Medical emergency"
  },
  {
    question: "Which test assesses ovarian reserve?",
    options: ["CA-125", "Hemoglobin", "AMH", "ESR"],
    answer: "AMH"
  },
  {
    question: "Most common ovarian cysts are:",
    options: [
      "Cancerous",
      "Functional",
      "Endometriomas",
      "Torsions"
    ],
    answer: "Functional"
  },
  {
    question: "Which ovarian disease affects teenage girls most often?",
    options: ["PCOS", "Ovarian cancer", "POI", "None of the above"],
    answer: "PCOS"
  },
  {
    question: "What hormone is high in PCOS?",
    options: ["Insulin", "Estrogen", "Oxytocin", "Cortisol"],
    answer: "Insulin"
  },
  {
    question: "Common PCOS symptoms include:",
    options: [
      "Acne",
      "Irregular periods",
      "Facial hair",
      "All of the above"
    ],
    answer: "All of the above"
  },
  {
    question: "Ovarian cancer risk increases with:",
    options: [
      "Smoking",
      "Age >50",
      "Family history",
      "All of the above"
    ],
    answer: "All of the above"
  },
  {
    question: "Which is NOT a cyst type?",
    options: [
      "Dermoid",
      "Endometrial",
      "Hemorrhagic",
      "Insulin"
    ],
    answer: "Insulin"
  },
  {
    question: "Pain on one side during ovulation may suggest:",
    options: [
      "Torsion",
      "Mittelschmerz",
      "Infection",
      "Fibroid"
    ],
    answer: "Mittelschmerz"
  },
  {
    question: "CA-125 is used to detect:",
    options: [
      "Liver disease",
      "Kidney failure",
      "Ovarian cancer",
      "PCOS"
    ],
    answer: "Ovarian cancer"
  },
  {
    question: "Which hormone is often low in POI?",
    options: ["FSH", "AMH", "TSH", "LH"],
    answer: "AMH"
  },
  {
    question: "Fertility is preserved best with:",
    options: [
      "Hysterectomy",
      "Oophorectomy",
      "Cystectomy",
      "Oncosurgery"
    ],
    answer: "Cystectomy"
  },
  {
    question: "Ultrasound helps in:",
    options: [
      "Blood test",
      "Cyst detection",
      "CT scanning",
      "MRI"
    ],
    answer: "Cyst detection"
  },
  {
    question: "Early menopause is also called:",
    options: ["PCOS", "POI", "PID", "PMS"],
    answer: "POI"
  },
  {
    question: "Laparoscopy is used for:",
    options: [
      "Thyroid surgery",
      "Appendix",
      "Ovary & pelvic disease",
      "Headache"
    ],
    answer: "Ovary & pelvic disease"
  },
  {
    question: "Ovarian drilling is used in:",
    options: ["Endometriosis", "PCOS", "Menopause", "POI"],
    answer: "PCOS"
  },
  {
    question: "Which is a non-cancerous cyst?",
    options: [
      "Endometrioma",
      "Functional cyst",
      "Oncocyst",
      "Sarcoma"
    ],
    answer: "Functional cyst"
  },
  {
    question: "PCOS affects fertility by:",
    options: [
      "Preventing ovulation",
      "Affecting uterus",
      "Blocking tubes",
      "Thinning the lining"
    ],
    answer: "Preventing ovulation"
  },
  {
    question: "Which test is most reliable for PCOS diagnosis?",
    options: [
      "Ultrasound and hormones",
      "CT scan",
      "ECG",
      "X-ray"
    ],
    answer: "Ultrasound and hormones"
  },
  {
    question: "Ovarian cysts often resolve in:",
    options: [
      "1–2 days",
      "1–2 months",
      "1–2 years",
      "Never"
    ],
    answer: "1–2 months"
  },
  {
    question: "A dermoid cyst may contain:",
    options: [
      "Air",
      "Teeth and hair",
      "Fat only",
      "Blood"
    ],
    answer: "Teeth and hair"
  },
  {
    question: "POI may cause:",
    options: [
      "Excess bleeding",
      "Late menopause",
      "Hot flashes, infertility",
      "Acne only"
    ],
    answer: "Hot flashes, infertility"
  }
];


const OvarianDiseases = () => {
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
      <h1>🥚 Ovarian Diseases</h1>
      <p className="lead">"Silent disruptors of hormonal harmony."</p>

      <section className="info-section">
  <h3>1️⃣ Understanding the Ovaries</h3>
  <p>
    The ovaries are two small, oval-shaped organs located on either side of the uterus. These powerhouse glands serve two primary roles:
  </p>
  <ul>
    <li>Produce eggs (ova) for reproduction</li>
    <li>Secrete hormones — estrogen, progesterone, and small amounts of testosterone</li>
  </ul>
  <p>
    Ovaries orchestrate the menstrual cycle, regulate fertility, and influence mood, skin, and heart health. Disruptions in ovarian function can lead to various conditions.
  </p>

  <h3>2️⃣ Categories of Ovarian Diseases</h3>
  <p>Ovarian diseases typically fall into four categories:</p>
  <ul>
    <li><strong>Hormonal disorders:</strong> PCOS, POI</li>
    <li><strong>Structural abnormalities:</strong> Cysts, tumors, torsion</li>
    <li><strong>Infectious/inflammatory:</strong> PID affecting ovaries</li>
    <li><strong>Malignancy:</strong> Ovarian cancer</li>
  </ul>

  <h3>3️⃣ Common Ovarian Conditions</h3>
  <h4>🌀 A. Polycystic Ovary Syndrome (PCOS)</h4>
  <p>
    Affects 1 in 10 women globally. Causes include genetic predisposition, insulin resistance, and elevated androgens.
  </p>
  <ul>
    <li><strong>Symptoms:</strong> Irregular cycles, hirsutism, acne, weight gain, infertility</li>
    <li><strong>Complications:</strong> Diabetes, high cholesterol, endometrial hyperplasia</li>
    <li><strong>Diagnosis:</strong> Based on Rotterdam criteria</li>
    <li><strong>Management:</strong> Lifestyle changes, metformin, oral contraceptives, ovulation induction, ovarian drilling</li>
  </ul>

  <h4>🌀 B. Ovarian Cysts</h4>
  <p>Fluid-filled sacs; most are benign and self-resolving.</p>
  <ul>
    <li><strong>Types:</strong> Functional, dermoid, endometriomas, hemorrhagic, cystadenomas</li>
    <li><strong>Symptoms:</strong> Pelvic pain, bloating, pain during intercourse, irregular bleeding</li>
    <li><strong>Treatment:</strong> Observation or surgical removal depending on complexity</li>
  </ul>

  <h4>🌀 C. Endometriosis of the Ovary (Endometrioma)</h4>
  <p>
    Endometriomas are cysts filled with old blood caused by endometriosis.
  </p>
  <ul>
    <li><strong>Symptoms:</strong> Chronic pelvic pain, painful periods, infertility</li>
    <li><strong>Diagnosis:</strong> Ultrasound, MRI, or laparoscopy</li>
    <li><strong>Management:</strong> Hormonal suppression, laparoscopy, IVF</li>
  </ul>

  <h4>🌀 D. Ovarian Torsion</h4>
  <p>A medical emergency involving ovary twisting and reduced blood flow.</p>
  <ul>
    <li><strong>Symptoms:</strong> Sudden one-sided pelvic pain, nausea, vomiting</li>
    <li><strong>Diagnosis:</strong> Doppler ultrasound</li>
    <li><strong>Treatment:</strong> Emergency laparoscopy; oophorectomy if necrotic</li>
  </ul>

  <h4>🌀 E. Premature Ovarian Insufficiency (POI)</h4>
  <p>
    Early menopause before age 40. Often due to genetics, autoimmune disease, or cancer treatment.
  </p>
  <ul>
    <li><strong>Symptoms:</strong> Hot flashes, irregular periods, infertility</li>
    <li><strong>Diagnosis:</strong> High FSH, low estrogen & AMH, small follicles on ultrasound</li>
    <li><strong>Management:</strong> HRT, egg donation or IVF if needed</li>
  </ul>

  <h4>🌀 F. Ovarian Cancer</h4>
  <p>
    Known as the "silent killer" due to vague symptoms. Types include epithelial (common), germ cell, and sex cord-stromal tumors.
  </p>
  <ul>
    <li><strong>Symptoms:</strong> Bloating, pelvic pain, early satiety, urinary symptoms</li>
    <li><strong>Diagnosis:</strong> CA-125, ultrasound, MRI, biopsy</li>
    <li><strong>Treatment:</strong> Surgery, chemotherapy, targeted therapy</li>
  </ul>

  <h3>4️⃣ Diagnosis at Sukam Speciality Clinic</h3>
  <ul>
    <li>Detailed history and pelvic exam</li>
    <li>Hormonal blood tests (FSH, LH, AMH, Prolactin, TSH)</li>
    <li>Ultrasound (transvaginal or abdominal)</li>
    <li>MRI/CT for complex cases</li>
    <li>Tumor markers: CA-125, AFP, hCG, LDH</li>
    <li>Laparoscopy if needed</li>
  </ul>

  <h3>5️⃣ Treatment Principles</h3>
  <table>
    <thead>
      <tr>
        <th>Condition</th>
        <th>Goal</th>
        <th>Treatment</th>
      </tr>
    </thead>
    <tbody>
      <tr><td>PCOS</td><td>Hormone balance & ovulation</td><td>Lifestyle, meds, ovulation drugs</td></tr>
      <tr><td>Cysts</td><td>Relieve pain, prevent rupture</td><td>Observe or surgical removal</td></tr>
      <tr><td>Endometriosis</td><td>Pain relief & fertility</td><td>Hormonal suppression, excision</td></tr>
      <tr><td>POI</td><td>Restore hormones & protect bones</td><td>HRT, egg donation if desired</td></tr>
      <tr><td>Torsion</td><td>Save ovary</td><td>Emergency laparoscopy</td></tr>
      <tr><td>Cancer</td><td>Cure or control spread</td><td>Surgery, chemotherapy, targeted therapy</td></tr>
    </tbody>
  </table>

  <h3>6️⃣ Lifestyle Advice</h3>
  <ul>
    <li>Eat hormone-supportive foods (fiber-rich, healthy fats, low sugar)</li>
    <li>Exercise 150 minutes/week</li>
    <li>Maintain a healthy weight — crucial in PCOS</li>
    <li>Practice stress-reduction: yoga, mindfulness</li>
    <li>Avoid smoking</li>
    <li>Schedule regular gynecological checkups</li>
  </ul>

  <h3>7️⃣ Patient FAQ</h3>
  <ul>
    <li><strong>Can I get pregnant with a cyst or PCOS?</strong><br />Yes — many women conceive with treatment.</li>
    <li><strong>Do all cysts require surgery?</strong><br />No — many resolve without surgery.</li>
    <li><strong>What if I have pain on one side each month?</strong><br />Could be ovulation (mittelschmerz) or a cyst — get an ultrasound.</li>
    <li><strong>Should I do CA-125 testing regularly?</strong><br />Not unless symptoms or strong family history exist.</li>
    <li><strong>I had one ovary removed. Can I still conceive?</strong><br />Yes — the other ovary can ovulate and support pregnancy.</li>
  </ul>
</section>


      <section className="quiz-section">
        <h2>🧠 Ovarian Diseases Quiz – How Much Do You Know?</h2>

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

export default OvarianDiseases;
