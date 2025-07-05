import React, { useState } from 'react';
import './RP1InfertilityInsights.css';

const quizData = [
  {
    question: "Hysteroscopy is done through:",
    options: ["Abdominal incision", "Vaginal route", "Rectum", "Mouth"],
    answer: "Vaginal route"
  },
  {
    question: "Which fluid is commonly used to distend the uterus during hysteroscopy?",
    options: ["Iodine", "CO₂", "Normal saline", "Blood"],
    answer: "Normal saline"
  },
  {
    question: "Chromopertubation checks for:",
    options: ["Ovarian cysts", "Fallopian tube patency", "PCOS", "Uterine contractions"],
    answer: "Fallopian tube patency"
  },
  {
    question: "Best time to perform hysteroscopy is:",
    options: ["Day 2", "Day 10", "Day 18", "Any time"],
    answer: "Day 10"
  },
  {
    question: "Hysteroscopy is helpful in detecting:",
    options: ["Ectopic pregnancy", "Ovarian torsion", "Endometrial polyps", "Cervical cancer"],
    answer: "Endometrial polyps"
  },
  {
    question: "Laparoscopy is contraindicated in:",
    options: ["Endometriosis", "Acute pelvic infection", "Uterine fibroids", "Infertility"],
    answer: "Acute pelvic infection"
  },
  {
    question: "Which of these is NOT visible in hysteroscopy?",
    options: ["Endometrium", "Ovaries", "Cervical canal", "Uterine cavity"],
    answer: "Ovaries"
  },
  {
    question: "Ovarian drilling is done in:",
    options: ["Endometriosis", "Fibroid uterus", "PCOS", "Menopause"],
    answer: "PCOS"
  },
  {
    question: "Septum resection improves:",
    options: ["Pain", "Miscarriage rate", "Thyroid function", "IUD placement"],
    answer: "Miscarriage rate"
  },
  {
    question: "Shoulder pain post laparoscopy is due to:",
    options: ["Muscle strain", "CO₂ gas irritation", "Nerve damage", "Anemia"],
    answer: "CO₂ gas irritation"
  },
  {
    question: "Hysteroscopy is useful in:",
    options: ["Diagnosing ovarian cancer", "Removing submucosal fibroids", "Assessing endometriomas", "Fallopian tube block repair"],
    answer: "Removing submucosal fibroids"
  },
  {
    question: "Common complication of hysteroscopy is:",
    options: ["Uterine perforation", "Appendicitis", "Gallstones", "Vaginal prolapse"],
    answer: "Uterine perforation"
  },
  {
    question: "Laparoscopic dye test is called:",
    options: ["Chromo-scan", "Hysterosonography", "Chromopertubation", "Lipo-tubation"],
    answer: "Chromopertubation"
  },
  {
    question: "Uterine anomalies like septum are best corrected by:",
    options: ["Laparotomy", "Vaginal dilation", "Hysteroscopic resection", "Ovarian stimulation"],
    answer: "Hysteroscopic resection"
  },
  {
    question: "Which is a diagnostic laparoscopy sign for endometriosis?",
    options: ["Polyp", "Chocolate cyst", "Fibroid", "Septum"],
    answer: "Chocolate cyst"
  },
  {
    question: "Entry point for laparoscope is:",
    options: ["Vagina", "Umbilicus", "Groin", "Perineum"],
    answer: "Umbilicus"
  },
  {
    question: "Which hormone phase is preferred for hysteroscopy?",
    options: ["Follicular", "Luteal", "Menstrual", "Ovulation"],
    answer: "Follicular"
  },
  {
    question: "Adhesiolysis is:",
    options: ["Removal of cysts", "Treatment for fibroids", "Separation of pelvic adhesions", "Dilatation of cervix"],
    answer: "Separation of pelvic adhesions"
  },
  {
    question: "IUD retrieval under hysteroscopy is done when:",
    options: ["It is in place", "It is expelled", "It is embedded or not visualized", "It is removed already"],
    answer: "It is embedded or not visualized"
  },
  {
    question: "CO₂ gas is used in laparoscopy to:",
    options: ["Clean blood", "Stop bleeding", "Inflate abdominal cavity", "Decrease pain"],
    answer: "Inflate abdominal cavity"
  },
  {
    question: "After hystero-laparoscopy, when can one attempt conception?",
    options: ["After 6 months", "Immediately", "After 1 menstrual cycle", "After a year"],
    answer: "After 1 menstrual cycle"
  },
  {
    question: "Tubal blockage can be treated during laparoscopy by:",
    options: ["Polypectomy", "Dye instillation", "Fimbrioplasty or cannulation", "Ablation"],
    answer: "Fimbrioplasty or cannulation"
  },
  {
    question: "Saline infusion sonography is less sensitive than:",
    options: ["Hysteroscopy", "USG", "X-ray", "Pap smear"],
    answer: "Hysteroscopy"
  },
  {
    question: "Uterine fibroids may be removed through hysteroscopy if they are:",
    options: ["Intramural", "Subserosal", "Submucosal", "Cervical"],
    answer: "Submucosal"
  },
  {
    question: "Which is a relative contraindication to laparoscopy?",
    options: ["Obesity", "Severe cardiopulmonary disease", "Infertility", "PCOS"],
    answer: "Severe cardiopulmonary disease"
  }
];


const HysteroLaparoscopy = () => {
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
      <h1>🔬 Hystero-Laparoscopy</h1>
      <p className="lead">“A peek inside to find and fix.”</p>

      <section className="info-section">
  <h3>🔍 Why Hysteroscopy & Hystero-Laparoscopy?</h3>
  <p>
    Some answers can’t be found on scans or blood tests—sometimes, we need to look inside. Literally.
    That’s where hysteroscopy and hystero-laparoscopy step in: not just diagnostic tools, but bridges between uncertainty and answers in women’s health.
  </p>

  <h3>🧬 The Role in Modern Gynecology</h3>
  <p>
    In today’s precision medicine era, minimally invasive diagnostic and operative tools have become the norm.
    Among them, Hysteroscopy and Hystero-Laparoscopy are essential for diagnosing and treating uterine and pelvic conditions—especially infertility, abnormal bleeding, and recurrent miscarriage.
    These are often combined for maximum diagnostic and therapeutic value in one session.
  </p>

  <h3>🛠️ Understanding the Tools</h3>
  <p><strong>Hysteroscopy:</strong> A telescope-like device is passed through the cervix into the uterus. The cavity is filled with saline or gas for visualization. There are two types:</p>
  <ul>
    <li>Diagnostic hysteroscopy – Views the uterine cavity</li>
    <li>Operative hysteroscopy – Removes polyps, fibroids, adhesions</li>
  </ul>

  <p><strong>Hystero-Laparoscopy:</strong> Combines hysteroscopy with laparoscopy (via small abdominal incision) for a comprehensive internal view including uterus, tubes, ovaries, and peritoneum.</p>
  <p>Useful for:</p>
  <ul>
    <li>Assessing tubal blockages or adhesions</li>
    <li>Mapping endometriosis</li>
    <li>Diagnosing ovarian cysts or pelvic pathology</li>
    <li>Fertility-enhancing surgeries (like ovarian drilling or adhesiolysis)</li>
  </ul>

  <h3>📋 Indications</h3>
  <p><strong>Hysteroscopy:</strong></p>
  <ul>
    <li>Irregular or heavy bleeding</li>
    <li>Infertility or repeated miscarriage</li>
    <li>Uterine anomalies (e.g., septum)</li>
    <li>Polyps, fibroids, IUD issues, or retained tissue</li>
  </ul>

  <p><strong>Hystero-Laparoscopy:</strong></p>
  <ul>
    <li>Unexplained infertility</li>
    <li>Suspected endometriosis or tubal block</li>
    <li>Chronic pelvic pain</li>
    <li>PCOS (for ovarian drilling)</li>
    <li>Failed IVF or IUI</li>
  </ul>

  <h3>🧠 What Can Be Detected & Treated</h3>
  <table>
    <thead>
      <tr><th>Condition</th><th>Hysteroscopy</th><th>Laparoscopy</th></tr>
    </thead>
    <tbody>
      <tr><td>Uterine polyps</td><td>✅ View & remove</td><td>—</td></tr>
      <tr><td>Submucosal fibroids</td><td>✅ Resectable</td><td>✅ Location & impact</td></tr>
      <tr><td>Uterine septum</td><td>✅ Correct</td><td>✅ Confirm externally</td></tr>
      <tr><td>Tubal block</td><td>—</td><td>✅ Dye test (chromopertubation)</td></tr>
      <tr><td>Endometriosis</td><td>—</td><td>✅ Spot, stage, treat</td></tr>
      <tr><td>Pelvic adhesions</td><td>—</td><td>✅ Visualize & release</td></tr>
      <tr><td>PCOS</td><td>—</td><td>✅ Ovarian drilling</td></tr>
    </tbody>
  </table>

  <h3>🩺 Real Clinical Scenarios</h3>
  <p><strong>Case 1: The Silent Obstacle</strong><br/>
  31 y/o woman with 3 years of infertility. Hystero-laparoscopy revealed uterine septum and mild endometriosis. Septum was resected. Conceived naturally in 4 months.</p>

  <p><strong>Case 2: The IVF Mystery</strong><br/>
  35 y/o with two failed IVF cycles. Hysteroscopy found a tiny polyp near the implantation zone. Polyp removed. Conceived with frozen embryo transfer.</p>

  <h3>⚙️ Step-by-Step Procedure</h3>
  <p><strong>Before Surgery:</strong></p>
  <ul>
    <li>Fasting 6 hours</li>
    <li>Blood tests, ECG, ultrasound</li>
    <li>Counseling and consent</li>
    <li>Ideally scheduled Day 6–10 of cycle</li>
  </ul>
  <p><strong>During Surgery:</strong></p>
  <ul>
    <li>Hysteroscopy: Vaginal camera, saline distension</li>
    <li>Laparoscopy: 2–3 small incisions, CO₂ insufflation, pelvic dye test</li>
  </ul>
  <p><strong>After Surgery:</strong></p>
  <ul>
    <li>Day care or overnight stay</li>
    <li>Mild cramps or shoulder pain (due to gas)</li>
    <li>Routine resumed in 2–3 days</li>
    <li>Fertility planning from next cycle if applicable</li>
  </ul>

  <h3>⏳ Recovery & Risks</h3>
  <p><strong>Recovery:</strong></p>
  <ul>
    <li>Discharged same or next day</li>
    <li>No stitches for hysteroscopy</li>
    <li>Laparoscopy stitches heal in 5–7 days</li>
  </ul>
  <p><strong>Rare Risks:</strong></p>
  <ul>
    <li>Infection or bleeding</li>
    <li>Uterine perforation (very rare)</li>
    <li>Gas embolism (extremely rare)</li>
    <li>Bowel/bladder injury (rare with skilled surgeons)</li>
  </ul>

  <h3>🌿 Holistic Support at Sukam</h3>
  <ul>
    <li>Pre-op dietary guidance (iron, hydration)</li>
    <li>Healing diet and supplements post-op</li>
    <li>Yoga for recovery (esp. post-laparoscopy)</li>
    <li>Fertility and menstrual counseling</li>
    <li>Scheduled follow-up scans</li>
  </ul>

  <h3>💡 Why Early Hystero-Laparoscopy Can Help</h3>
  <ul>
    <li>Avoids unnecessary hormonal treatments</li>
    <li>Improves IVF or IUI outcomes</li>
    <li>Supports natural conception in borderline cases</li>
    <li>Prevents long-term issues (endometriosis, TB adhesions)</li>
  </ul>
  <p><strong>At Sukam Speciality Clinic, we don’t just perform procedures — we uncover clarity, restore confidence, and guide you toward motherhood with care and compassion.</strong></p>
</section>


      <section className="quiz-section">
        <h2>🧠 Hystero-Laparoscopy Quiz — Test Your Knowledge!</h2>

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

export default HysteroLaparoscopy;
