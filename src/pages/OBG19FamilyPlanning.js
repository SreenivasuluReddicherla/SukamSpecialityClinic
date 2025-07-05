import React, { useState } from 'react';
import './RP1InfertilityInsights.css';

const quizData = [
  {
    question: "Which method provides STI protection?",
    options: ["Copper-T", "Male condom", "IUD", "Pills"],
    answer: "Male condom"
  },
  {
    question: "The lactational amenorrhea method is effective up to:",
    options: ["2 years", "6 months", "3 months", "1 year"],
    answer: "6 months"
  },
  {
    question: "Mini-pill contains:",
    options: ["Estrogen only", "Progesterone only", "Both hormones", "No hormones"],
    answer: "Progesterone only"
  },
  {
    question: "Most suitable contraception during breastfeeding is:",
    options: ["Combined pill", "Progesterone-only pill", "Vaginal ring", "Patch"],
    answer: "Progesterone-only pill"
  },
  {
    question: "Copper IUD prevents pregnancy by:",
    options: ["Killing sperm", "Thickening cervical mucus", "Stopping ovulation", "None of the above"],
    answer: "Killing sperm"
  },
  {
    question: "Which of the following is irreversible?",
    options: ["Pills", "IUD", "Vasectomy", "Implants"],
    answer: "Vasectomy"
  },
  {
    question: "Hormonal IUD benefit includes:",
    options: ["Heavy bleeding", "Lighter periods", "Infertility", "Early menopause"],
    answer: "Lighter periods"
  },
  {
    question: "Injectable contraceptive is given:",
    options: ["Weekly", "Monthly", "Every 3 months", "Annually"],
    answer: "Every 3 months"
  },
  {
    question: "Emergency contraception is best within:",
    options: ["12 hrs", "24 hrs", "72 hrs", "7 days"],
    answer: "72 hrs"
  },
  {
    question: "Method with immediate fertility return after stopping is:",
    options: ["Pills", "Injection", "Implant", "Vasectomy"],
    answer: "Pills"
  },
  {
    question: "Sterilization failure rate is:",
    options: ["5%", "1%", "10%", "0%"],
    answer: "1%"
  },
  {
    question: "Condoms are effective if:",
    options: ["Reused", "Used correctly", "Washed", "Stored in heat"],
    answer: "Used correctly"
  },
  {
    question: "COCs are contraindicated in:",
    options: ["PCOS", "Smokers >35 yrs", "Acne", "Fibroids"],
    answer: "Smokers >35 yrs"
  },
  {
    question: "Most effective reversible method is:",
    options: ["Patch", "Pills", "IUD", "Foam"],
    answer: "IUD"
  },
  {
    question: "Which doesn’t affect ovulation?",
    options: ["Pills", "Copper-T", "Injection", "Implant"],
    answer: "Copper-T"
  },
  {
    question: "Common side effect of injection (DMPA) is:",
    options: ["Weight loss", "Spotting", "Bone strength increase", "Migraine"],
    answer: "Spotting"
  },
  {
    question: "Postpartum IUD can be placed at:",
    options: ["6 hours", "6 weeks", "6 months", "Never"],
    answer: "6 weeks"
  },
  {
    question: "Vasectomy involves cutting:",
    options: ["Vas deferens", "Urethra", "Penis", "Testes"],
    answer: "Vas deferens"
  },
  {
    question: "Ring method is placed in:",
    options: ["Uterus", "Cervix", "Vagina", "Abdomen"],
    answer: "Vagina"
  },
  {
    question: "Natural method effectiveness is around:",
    options: ["25%", "50%", "75%", "99%"],
    answer: "75%"
  },
  {
    question: "IUD insertion is ideally done:",
    options: ["During ovulation", "Post-menstrual", "Anytime", "During pregnancy"],
    answer: "Post-menstrual"
  },
  {
    question: "A woman with uncontrolled hypertension should avoid:",
    options: ["Barrier method", "Progesterone-only pill", "Combined pill", "IUD"],
    answer: "Combined pill"
  },
  {
    question: "Male condom failure rate (typical use):",
    options: ["2%", "15%", "0.1%", "100%"],
    answer: "15%"
  },
  {
    question: "Post sterilization, confirmation requires:",
    options: ["Urine test", "Pelvic scan", "Semen analysis", "Hormonal test"],
    answer: "Semen analysis"
  },
  {
    question: "Most cost-effective method over 10 years:",
    options: ["Pills", "IUD", "Patch", "Emergency pill"],
    answer: "IUD"
  }
];

const FamilyPlanning = () => {
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
      <h1>🤰 Family Planning</h1>
      <p className="lead">“Your future, your family, your choice.”</p>

      <section className="info-section">
  <h3>🎯 The Purpose</h3>
  <p>
    Whether it’s a newly married couple waiting to settle, a mother spacing between children, or someone 
    certain she doesn’t want more—family planning offers tailored options that match every lifestyle, health 
    condition, and belief.
  </p>

  <h3>📦 Categories of Family Planning Methods</h3>

  <h4>1️⃣ Natural Methods</h4>
  <ul>
    <li>Calendar/Rhythm method</li>
    <li>Cervical mucus monitoring</li>
    <li>Basal body temperature tracking</li>
    <li>Lactational Amenorrhea Method (LAM – exclusive breastfeeding under 6 months)</li>
  </ul>
  <p><strong>Effectiveness:</strong> Moderate<br/>
  <strong>Ideal for:</strong> Motivated couples, postpartum mothers, religious preferences</p>

  <h4>2️⃣ Barrier Methods</h4>
  <ul>
    <li>Male condom</li>
    <li>Female condom</li>
    <li>Diaphragm</li>
    <li>Spermicide (foam, gel, suppository)</li>
  </ul>
  <p><strong>Effectiveness:</strong> 72–98%<br/>
  <strong>Best suited for:</strong> Occasional users, new couples, STI prevention</p>

  <h4>3️⃣ Hormonal Methods</h4>
  <p><strong>A. Combined Estrogen-Progesterone</strong></p>
  <ul>
    <li>Oral contraceptive pills (COCs)</li>
    <li>Patches</li>
    <li>Vaginal rings</li>
  </ul>
  <p><strong>B. Progesterone-Only</strong></p>
  <ul>
    <li>Mini pills (safe during breastfeeding)</li>
    <li>Depo-Provera injection (every 3 months)</li>
    <li>Implants (e.g., Nexplanon – lasts 3–5 years)</li>
  </ul>
  <p><strong>Effectiveness:</strong> 91–99%<br/>
  <strong>Ideal for:</strong> Long-term but reversible contraception<br/>
  <strong>Avoid in:</strong> Smokers &gt;35 yrs, clotting disorders</p>

  <h4>4️⃣ Intrauterine Devices (IUDs)</h4>
  <p><strong>Non-Hormonal (Copper-T):</strong> Lasts 10–12 years, no hormones</p>
  <p><strong>Hormonal (Mirena, etc.):</strong> Lasts 3–5 years, reduces bleeding</p>
  <p><strong>Effectiveness:</strong> 99%<br/>
  <strong>Insertion:</strong> Done in-clinic, safe during breastfeeding, reversible upon removal</p>

  <h4>5️⃣ Permanent Methods</h4>
  <p><strong>Female Sterilization:</strong> Tubal ligation, done laparoscopically or postpartum</p>
  <p><strong>Male Sterilization (Vasectomy):</strong> Outpatient, simple, confirmed with semen test</p>
  <p><strong>Effectiveness:</strong> &gt;99.5%<br/>
  <strong>Note:</strong> Typically non-reversible</p>

  <h3>🚨 Emergency Contraception</h3>
  <ul>
    <li>Emergency pills (Levonorgestrel within 72 hours)</li>
    <li>Copper-T insertion within 5 days</li>
  </ul>
  <p><strong>Note:</strong> For rare use only, not a regular contraceptive method</p>

  <h3>🤝 How We Help at Sukam</h3>
  <ul>
    <li>Customized family planning counseling</li>
    <li>Review of medical history (BP, diabetes, clotting disorders)</li>
    <li>Safe postpartum options including LAM, POPs, IUDs, and sterilization</li>
    <li>Respect for cultural, personal, and fertility preferences</li>
  </ul>

  <h3>📊 Family Planning Comparison Chart</h3>
  <table>
    <thead>
      <tr>
        <th>Method</th>
        <th>Effectiveness</th>
        <th>Duration</th>
        <th>Reversible</th>
        <th>Safe in Breastfeeding</th>
      </tr>
    </thead>
    <tbody>
      <tr><td>Condoms</td><td>85–98%</td><td>One-time</td><td>✅</td><td>✅</td></tr>
      <tr><td>COCs</td><td>91–99%</td><td>Daily</td><td>✅</td><td>❌</td></tr>
      <tr><td>Mini-pill</td><td>91–99%</td><td>Daily</td><td>✅</td><td>✅</td></tr>
      <tr><td>Injection</td><td>94%</td><td>3 months</td><td>✅</td><td>✅</td></tr>
      <tr><td>Implant</td><td>99%</td><td>3–5 yrs</td><td>✅</td><td>✅</td></tr>
      <tr><td>Copper IUD</td><td>99%</td><td>10–12 yrs</td><td>✅</td><td>✅</td></tr>
      <tr><td>Hormonal IUD</td><td>99%</td><td>3–5 yrs</td><td>✅</td><td>✅</td></tr>
      <tr><td>Sterilization</td><td>&gt;99%</td><td>Permanent</td><td>❌</td><td>✅</td></tr>
      <tr><td>Vasectomy</td><td>&gt;99%</td><td>Permanent</td><td>❌</td><td>✅</td></tr>
    </tbody>
  </table>

  <h3>❓ Common Questions Patients Ask</h3>
  <ul>
    <li><strong>Q:</strong> Will I gain weight on hormonal contraception?<br/>
      <strong>A:</strong> Slight weight gain with injectables; minimal with pills or IUDs.</li>
    <li><strong>Q:</strong> Can I get pregnant immediately after stopping birth control?<br/>
      <strong>A:</strong> Yes, except injectables (may take longer).</li>
    <li><strong>Q:</strong> Are contraceptive pills harmful long-term?<br/>
      <strong>A:</strong> No. They may reduce ovarian and endometrial cancer risk.</li>
    <li><strong>Q:</strong> Is sterilization foolproof?<br/>
      <strong>A:</strong> Extremely effective but has &lt;1% failure risk.</li>
  </ul>

  <p><strong>At Sukam, we support your reproductive autonomy with compassionate, science-backed guidance—because every woman deserves choice, clarity, and confidence.</strong></p>
</section>


      <section className="quiz-section">
        <h2>🧠 Family Planning Quiz — Know Your Options!</h2>

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

export default FamilyPlanning;