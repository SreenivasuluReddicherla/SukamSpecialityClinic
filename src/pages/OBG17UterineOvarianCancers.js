import React, { useState } from 'react';
import './RP1InfertilityInsights.css';

const quizData = [
  {
    question: "Which is the most common symptom of uterine cancer?",
    options: ["Abnormal uterine bleeding", "Weight gain", "Hair loss", "Frequent urination"],
    answer: "Abnormal uterine bleeding"
  },
  {
    question: "Ovarian cancer is often diagnosed at:",
    options: ["Early stages", "Late stages", "Before symptoms", "Not diagnosable"],
    answer: "Late stages"
  },
  {
    question: "True or False: Family history can increase risk for ovarian cancer.",
    options: ["True", "False"],
    answer: "True"
  },
  {
    question: "Which test helps detect ovarian cancer?",
    options: ["Pap smear", "CA-125 blood test", "Mammogram", "Colonoscopy"],
    answer: "CA-125 blood test"
  },
  {
    question: "Can uterine cancer be treated successfully if caught early?",
    options: ["Yes", "No"],
    answer: "Yes"
  }
];

const UterineOvarianCancers = () => {
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
      <h1>🎗️ Uterine and Ovarian Cancers</h1>
      <p className="lead">
        “Guarding the core of womanhood.”
      </p>

      <section className="info-section">
  <h3>💗 Every Woman Deserves Confidence in Her Body</h3>
  <p>
    Uterine and ovarian cancers affect the most intimate parts of a woman’s body—often arriving without much 
    warning. But with early awareness and regular checkups, you can take control of your health.
  </p>
  <p>
    At <strong>Sukam Speciality Clinic</strong>, we stand by you with early screening, expert diagnosis, modern 
    treatments, and emotional support—every step of the way.
  </p>

  <h3>🧬 What Is Uterine Cancer?</h3>
  <p>
    Uterine cancer—mostly endometrial cancer—begins in the inner lining of the uterus and is the most 
    common gynecologic cancer.
  </p>
  <ul>
    <li><strong>Endometrial Cancer:</strong> Most common type, starts in the uterine lining</li>
    <li><strong>Uterine Sarcoma:</strong> Rare cancer that begins in muscle/connective tissue of uterus</li>
  </ul>
  <p><strong>Risk factors:</strong> Age, obesity, hormonal imbalance, diabetes, PCOS</p>

  <h3>🧬 What Is Ovarian Cancer?</h3>
  <p>
    Ovarian cancer starts in the ovaries and is often detected late because its symptoms mimic other common 
    conditions. It’s more common after menopause but may also affect younger women.
  </p>
  <ul>
    <li><strong>Epithelial Tumors:</strong> Most common type</li>
    <li><strong>Germ Cell Tumors:</strong> Occur in younger women</li>
    <li><strong>Stromal Tumors:</strong> Rare, may affect hormone production</li>
  </ul>

  <h3>🔍 Early Symptoms to Watch For</h3>
  <table>
    <thead>
      <tr><th>Uterine Cancer</th><th>Ovarian Cancer</th></tr>
    </thead>
    <tbody>
      <tr><td>Abnormal vaginal bleeding</td><td>Bloating or abdominal swelling</td></tr>
      <tr><td>Pelvic or lower abdominal pain</td><td>Early satiety or loss of appetite</td></tr>
      <tr><td>Unusual vaginal discharge</td><td>Frequent urination or constipation</td></tr>
      <tr><td>Pain during intercourse</td><td>Fatigue or unexplained weight loss</td></tr>
    </tbody>
  </table>
  <p><strong>Note:</strong> Persistent or unusual symptoms should never be ignored.</p>

  <h3>🩺 How Are They Diagnosed?</h3>
  <ul>
    <li>Pelvic exam</li>
    <li>Transvaginal ultrasound</li>
    <li>Endometrial biopsy (for uterine cancer)</li>
    <li>CA-125 blood test (for ovarian cancer)</li>
    <li>CT/MRI/PET scans for staging and spread</li>
  </ul>
  <p>Early diagnosis leads to better outcomes—never delay evaluation.</p>

  <h3>⚕️ Treatment Options</h3>
  <ul>
    <li><strong>Surgery:</strong> Hysterectomy, oophorectomy, lymph node removal</li>
    <li><strong>Chemotherapy:</strong> For systemic cancer cell control</li>
    <li><strong>Radiation therapy:</strong> For localized tumors</li>
    <li><strong>Hormone therapy:</strong> For hormone-sensitive cancers</li>
    <li><strong>Targeted & Immunotherapy:</strong> For advanced or recurrent cancer</li>
  </ul>
  <p>
    At Sukam, we personalize every treatment plan considering fertility, age, health status, and your 
    preferences.
  </p>

  <h3>🛡️ Prevention & Risk Reduction</h3>
  <ul>
    <li>Maintain healthy weight and active lifestyle</li>
    <li>Manage diabetes, PCOS, and thyroid disorders</li>
    <li>Use hormone replacement therapy cautiously</li>
    <li>Annual gynecological exams and ultrasound when needed</li>
    <li>Report any abnormal bleeding promptly</li>
  </ul>

  <h3>🧬 Genetics & Family History</h3>
  <p>
    Inherited mutations like <strong>BRCA1, BRCA2</strong>, or <strong>Lynch syndrome</strong> can increase your 
    risk. Consider genetic counseling if you have a strong family history of breast, ovarian, or colorectal 
    cancers.
  </p>

  <h3>🌿 Wellness Tips</h3>
  <ul>
    <li>Eat antioxidant-rich foods (berries, greens, turmeric)</li>
    <li>Stay physically active (150 min/week)</li>
    <li>Sleep 7–8 hours per night</li>
    <li>Avoid smoking and excessive alcohol</li>
    <li>Practice stress relief—yoga, journaling, therapy</li>
  </ul>

  <h3>❌ Myth Buster</h3>
  <p><strong>“Pap smear checks for all female cancers.”</strong></p>
  <p>🚫 False. Pap smears detect cervical cancer only. Uterine and ovarian cancers need separate evaluations.</p>

  <h3>🤝 How We Support You at Sukam</h3>
  <ul>
    <li>Women’s cancer awareness & screening drives</li>
    <li>Expert gynecologic oncology consultations</li>
    <li>Fertility-sparing surgeries for young women</li>
    <li>Post-treatment rehab & survivorship programs</li>
    <li>Nutrition, psychological, and spiritual support</li>
    <li>Follow-up and recurrence surveillance</li>
  </ul>
  <p>
    <strong>At Sukam, we treat the woman, not just the diagnosis—with science, support, and soul.</strong>
  </p>
</section>


      <section className="quiz-section">
        <h2>🧠 Uterine & Ovarian Cancer Quiz — Test Your Awareness</h2>

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
          <button className="submit-button" onClick={() => setShowResults(true)}>
            See Results
          </button>
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

export default UterineOvarianCancers;
