import React, { useState } from 'react';
import './RP1InfertilityInsights.css';

const quizData = [
  {
    question: "Which virus is most commonly associated with cervical cancer?",
    options: [
      "Hepatitis B",
      "Human Immunodeficiency Virus (HIV)",
      "Human Papillomavirus (HPV)",
      "Epstein-Barr Virus"
    ],
    answer: "Human Papillomavirus (HPV)"
  },
  {
    question: "What does a Pap smear test detect?",
    options: [
      "Cervical muscle strength",
      "Abnormal cervical cells",
      "Vaginal infections",
      "Ovarian tumors"
    ],
    answer: "Abnormal cervical cells"
  },
  {
    question: "The HPV vaccine is most effective when given at what age?",
    options: [
      "After menopause",
      "At 9–14 years",
      "Between 30–40 years",
      "After marriage"
    ],
    answer: "At 9–14 years"
  },
  {
    question: "Which of the following is an early symptom of cervical cancer?",
    options: [
      "Severe nausea",
      "Abdominal bloating",
      "Abnormal vaginal bleeding",
      "Breast pain"
    ],
    answer: "Abnormal vaginal bleeding"
  },
  {
    question: "How often should women between ages 30–65 undergo co-testing (Pap + HPV)?",
    options: [
      "Every year",
      "Every 2 years",
      "Every 5 years",
      "Only once after marriage"
    ],
    answer: "Every 5 years"
  },
  {
    question: "What is LEEP used for?",
    options: [
      "Removing fibroids",
      "Removing abnormal cervical cells",
      "Treating vaginal infections",
      "Curing HPV"
    ],
    answer: "Removing abnormal cervical cells"
  },
  {
    question: "True or False: Most HPV infections clear on their own.",
    options: ["True", "False"],
    answer: "True"
  },
  {
    question: "Which of the following is NOT a method of cervical cancer prevention?",
    options: [
      "Pap smear",
      "HPV vaccine",
      "Safe sex practices",
      "Mammogram"
    ],
    answer: "Mammogram"
  },
  {
    question: "Cervical cancer affects which part of the female body?",
    options: [
      "Uterus lining",
      "Fallopian tube",
      "Cervix",
      "Ovary"
    ],
    answer: "Cervix"
  },
  {
    question: "HPV is transmitted primarily through:",
    options: [
      "Sharing utensils",
      "Insect bites",
      "Sexual contact",
      "Kissing"
    ],
    answer: "Sexual contact"
  },
  {
    question: "What is a colposcopy?",
    options: [
      "Removal of uterus",
      "Biopsy of ovaries",
      "A test to view the cervix with magnification",
      "A scan to view the brain"
    ],
    answer: "A test to view the cervix with magnification"
  },
  {
    question: "A woman with HPV but no symptoms should:",
    options: [
      "Ignore it",
      "Wait until she has symptoms",
      "Begin regular screening and follow-up",
      "Take antibiotics"
    ],
    answer: "Begin regular screening and follow-up"
  },
  {
    question: "Smoking increases cervical cancer risk by:",
    options: [
      "Directly mutating DNA in cervical cells",
      "Weakening immune response to HPV",
      "Increasing blood flow to abnormal cells",
      "Causing hormonal imbalance"
    ],
    answer: "Weakening immune response to HPV"
  },
  {
    question: "What is CIN (Cervical Intraepithelial Neoplasia)?",
    options: [
      "Cervical muscle weakness",
      "A benign ovarian cyst",
      "Precancerous changes in the cervix",
      "A type of fibroid"
    ],
    answer: "Precancerous changes in the cervix"
  },
  {
    question: "After successful treatment, a cervical cancer survivor should:",
    options: [
      "Avoid further checkups",
      "Only take herbal medicines",
      "Undergo regular follow-up and monitoring",
      "Stop all medications"
    ],
    answer: "Undergo regular follow-up and monitoring"
  }
];


const CervicalCancer = () => {
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
      <h1>🎗️ Cervical Cancer</h1>
      <p className="lead">“Preventable, detectable, beatable.”</p>

      <section className="info-section">
  <h3>🌸 A Gentle Beginning – Why This Matters</h3>
  <p><strong>“Cervical cancer whispers before it roars. Listen to your body. Trust screening. Take control.”</strong></p>
  <p>
    Cervical cancer begins in the cervix, the narrow passage at the base of the uterus that opens into the vagina.
    While it may sound frightening, here is the truth:
  </p>
  <ul>
    <li>✅ It is one of the most preventable cancers in women.</li>
    <li>✅ Early detection almost always means cure.</li>
    <li>✅ Vaccines exist that can stop it before it starts.</li>
  </ul>
  <p>
    And yet, cervical cancer continues to claim the lives of thousands of women each year in India — not because it’s incurable,
    but because it often goes undiagnosed until it’s too late. This is not a failure of medicine, but a failure of awareness.
    Let this guide change that.
  </p>

  <h3>🔬 Knowing the Cervix – Understanding the Basics</h3>
  <ul>
    <li><strong>What is the cervix?</strong> Lower part of the uterus, opens into the vagina</li>
    <li>Allows menstrual flow, directs sperm, and opens during childbirth</li>
    <li><strong>Where does cancer start?</strong> Abnormal changes in the cervical lining (CIN)</li>
  </ul>
  <p>Without treatment, CIN can develop into invasive cancer over 5–15 years.</p>

  <h3>🧬 The Real Culprit – HPV Infection</h3>
  <p>
    HPV (Human Papillomavirus) is a very common virus transmitted through sexual contact.
    Of 100+ HPV types, about 14 are high-risk. Types 16 and 18 cause 70% of cervical cancer cases.
  </p>
  <p>Most infections clear within 1–2 years. Persistent infection leads to risk.</p>
  <p><strong>🛡️ HPV is the cause of nearly all cervical cancers.</strong></p>

  <h3>⚠️ Risk Factors – Who Is More Vulnerable?</h3>
  <ul>
    <li>🌿 Early sexual activity</li>
    <li>🌿 Multiple sexual partners</li>
    <li>🌿 Smoking or secondhand smoke exposure</li>
    <li>🌿 Long-term use of oral contraceptives</li>
    <li>🌿 Weak immune system (e.g., HIV)</li>
    <li>🌿 Not vaccinated against HPV</li>
    <li>🌿 Poor hygiene or screening awareness</li>
    <li>🌿 Family history (rare, but possible)</li>
  </ul>
  <p><em>Even one partner is enough for HPV exposure — it’s about contact, not promiscuity.</em></p>

  <h3>🔊 When Silence Speaks – Symptoms of Cervical Cancer</h3>
  <ul>
    <li>🔴 Vaginal bleeding between periods, after sex, or post-menopause</li>
    <li>🟡 Watery or foul-smelling discharge</li>
    <li>🟠 Pain during intercourse</li>
    <li>🔵 Pelvic or back pain</li>
    <li>⚫ Fatigue, leg swelling, weight loss (late stages)</li>
  </ul>
  <p><strong>Listen to your body — early action saves lives.</strong></p>

  <h3>🩺 Screening – Your First Line of Defense</h3>
  <table>
    <thead>
      <tr><th>Test</th><th>Purpose</th><th>Age Group</th><th>Frequency</th></tr>
    </thead>
    <tbody>
      <tr><td>Pap Smear</td><td>Detects abnormal cells</td><td>21–65 yrs</td><td>Every 3 years</td></tr>
      <tr><td>HPV DNA Test</td><td>Detects high-risk HPV</td><td>30–65 yrs</td><td>Every 5 years</td></tr>
      <tr><td>Co-testing</td><td>Pap + HPV</td><td>30–65 yrs</td><td>Every 5 years</td></tr>
      <tr><td>Colposcopy</td><td>Magnified cervical exam</td><td>If abnormal results</td><td>As advised</td></tr>
      <tr><td>Biopsy</td><td>Confirm diagnosis</td><td>As needed</td><td>One-time or follow-up</td></tr>
    </tbody>
  </table>
  <p>✅ Painless, quick, and life-saving.</p>

  <h3>💉 HPV Vaccination – A Gift for the Next Generation</h3>
  <ul>
    <li><strong>Ideal age:</strong> 9–14 years (before sexual activity)</li>
    <li><strong>Catch-up:</strong> Up to 26 years, sometimes 45 after consultation</li>
    <li><strong>Even sexually active women can benefit</strong></li>
  </ul>
  <table>
    <thead>
      <tr><th>Vaccine</th><th>Protection</th><th>Doses</th></tr>
    </thead>
    <tbody>
      <tr><td>Cervarix</td><td>HPV 16, 18</td><td>2–3 doses</td></tr>
      <tr><td>Gardasil-4</td><td>HPV 6, 11, 16, 18</td><td>2–3 doses</td></tr>
      <tr><td>Gardasil-9</td><td>9 HPV types (not widely available)</td><td>2–3 doses</td></tr>
    </tbody>
  </table>
  <p><em>Vaccination empowers — it doesn’t promote early sexual activity.</em></p>

  <h3>🛠️ Treatment Options – A Stage-Based Approach</h3>
  <table>
    <thead>
      <tr><th>Stage</th><th>Treatment Options</th></tr>
    </thead>
    <tbody>
      <tr><td>CIN I–III</td><td>LEEP, cryotherapy, conization</td></tr>
      <tr><td>Stage IA–IB1</td><td>Conization, radical hysterectomy</td></tr>
      <tr><td>Stage IB2–IIA</td><td>Hysterectomy or chemoradiation</td></tr>
      <tr><td>Stage IIB–IVA</td><td>Radiation + chemo (cisplatin)</td></tr>
      <tr><td>Stage IVB</td><td>Chemo ± immunotherapy/targeted therapy</td></tr>
    </tbody>
  </table>
  <ul>
    <li>Fertility-sparing surgeries possible in early stages</li>
    <li>Emotional, sexual, and physical healing support is vital</li>
  </ul>

  <h3>🌈 Life After Cervical Cancer – You Are Not Alone</h3>
  <ul>
    <li>Follow-up visits every 3–6 months</li>
    <li>Pelvic exams, scans</li>
    <li>Manage side effects: dryness, fatigue, anxiety</li>
    <li>Fertility counseling if relevant</li>
    <li>Join support groups for emotional recovery</li>
  </ul>
  <p>💖 Many survivors live long, full, and healthy lives.</p>

  <h3>❓ FAQs, Myth Busters & Quiz</h3>
  <ul>
    <li>❌ “Only promiscuous women get HPV.” → <strong>False:</strong> Just one exposure is enough</li>
    <li>❌ “Vaccinated = No Pap smear.” → <strong>False:</strong> Vaccines don’t cover all strains</li>
    <li>❌ “Pap smear is painful.” → <strong>False:</strong> Slight discomfort at most</li>
    <li>❌ “I had a hysterectomy, I’m safe.” → <strong>Depends:</strong> If due to cancer, screening may still be needed</li>
  </ul>
</section>


      <section className="quiz-section">
        <h2>🧠 Cervical Cancer Quiz — Test Your Knowledge</h2>

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

export default CervicalCancer;
