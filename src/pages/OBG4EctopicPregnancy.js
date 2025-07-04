import React, { useState } from 'react';
import './RP1InfertilityInsights.css';

const quizData = [
  {
    question: "Where do most ectopic pregnancies occur?",
    options: ["Uterus", "Ovary", "Fallopian tube", "Cervix"],
    answer: "Fallopian tube"
  },
  {
    question: "Common early symptom of ectopic pregnancy is:",
    options: ["Sharp right shoulder pain", "Sudden swelling", "One-sided pelvic pain", "Back acne"],
    answer: "One-sided pelvic pain"
  },
  {
    question: "Which test is crucial for diagnosis?",
    options: ["MRI", "Urine glucose", "Transvaginal ultrasound", "Chest X-ray"],
    answer: "Transvaginal ultrasound"
  },
  {
    question: "Methotrexate is:",
    options: [
      "A painkiller",
      "A hormone",
      "A chemotherapy drug that stops cell growth",
      "A fertility booster"
    ],
    answer: "A chemotherapy drug that stops cell growth"
  },
  {
    question: "Which is an emergency sign?",
    options: ["Breast tenderness", "Spotting", "Fainting and shoulder pain", "Headache"],
    answer: "Fainting and shoulder pain"
  },
  {
    question: "After ectopic, pregnancy is possible:",
    options: ["Never", "Only with IVF", "In many cases", "Only in surrogacy"],
    answer: "In many cases"
  },
  {
    question: "Methotrexate is most suitable when:",
    options: [
      "Rupture has occurred",
      "The embryo has heartbeat",
      "hCG is <5000, no bleeding",
      "The woman has twins"
    ],
    answer: "hCG is <5000, no bleeding"
  },
  {
    question: "hCG levels in ectopic pregnancy:",
    options: ["Rise normally", "Fall sharply", "Rise slowly or plateau", "Show no change"],
    answer: "Rise slowly or plateau"
  },
  {
    question: "Risk factor for ectopic is:",
    options: ["PCOS", "C-section", "Tubal surgery", "Diabetes"],
    answer: "Tubal surgery"
  },
  {
    question: "Treatment goal in ectopic is:",
    options: ["Continue pregnancy", "Remove uterus", "End pregnancy safely", "Boost ovulation"],
    answer: "End pregnancy safely"
  }
];


const EctopicPregnancy = () => {
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
      <h1>🚨 Ectopic Pregnancy</h1>
      <p className="lead">“A twist in the journey of life that needs urgent attention.”</p>

      <section className="info-section">
  <h3>💡 What Is an Ectopic Pregnancy?</h3>
  <p>
    An ectopic pregnancy occurs when a fertilized egg implants outside the uterus, most commonly in a fallopian tube. It is a life-threatening condition if not treated promptly, as the embryo cannot survive and the surrounding tissues cannot safely support its growth. About 1 in 50 pregnancies is ectopic.
  </p>
  <p>
    Early diagnosis and treatment are essential to protect health, future fertility, and life.
  </p>

  <h3>📍 Where Can Ectopic Pregnancies Occur?</h3>
  <ul>
    <li>Fallopian tube (98% cases)</li>
    <li>Ovary</li>
    <li>Cervix</li>
    <li>Abdominal cavity</li>
    <li>Cesarean scar</li>
    <li>Cornual (corner of uterus) — especially dangerous</li>
  </ul>
  <p>⚠️ These locations lack the support for normal pregnancy, and rupture can lead to shock or death.</p>

  <h3>⚠️ Causes and Risk Factors</h3>
  <ul>
    <li>Pelvic Inflammatory Disease (PID)</li>
    <li>Previous ectopic pregnancy</li>
    <li>Fallopian tube surgery or sterilization</li>
    <li>Endometriosis</li>
    <li>IVF or assisted reproductive technology</li>
    <li>Smoking</li>
    <li>Maternal age over 35</li>
  </ul>
  <p>Note: Even women with no risk factors can have an ectopic pregnancy.</p>

  <h3>🩸 Symptoms of Ectopic Pregnancy</h3>
  <p><strong>Early signs (5–8 weeks):</strong></p>
  <ul>
    <li>One-sided pelvic pain</li>
    <li>Spotting or light bleeding</li>
    <li>Low backache</li>
    <li>Breast tenderness, nausea</li>
  </ul>
  <p><strong>Emergency signs (suggesting rupture):</strong></p>
  <ul>
    <li>Sharp or stabbing abdominal pain</li>
    <li>Shoulder tip pain</li>
    <li>Fainting or dizziness</li>
    <li>Heavy bleeding</li>
    <li>Fast heart rate</li>
  </ul>
  <p>🚨 Immediate care is critical if these symptoms occur.</p>

  <h3>🔬 Diagnosis – How Is Ectopic Pregnancy Confirmed?</h3>
  <ul>
    <li><strong>hCG blood tests:</strong> Typically rise slowly or remain low</li>
    <li><strong>Transvaginal ultrasound:</strong> Absence of intrauterine pregnancy; ectopic sac visible in some cases</li>
    <li><strong>Pelvic exam:</strong> May detect tenderness or mass</li>
  </ul>
  <p>⏳ Diagnosis may take a few days with repeated scans or blood tests.</p>

  <h3>🩺 Treatment Options for Ectopic Pregnancy</h3>
  <p><strong>Medical (Non-surgical):</strong></p>
  <ul>
    <li>Methotrexate injection to stop cell growth</li>
    <li>Best for hCG &lt; 5000, early stage, no rupture, no fetal heartbeat</li>
    <li>Follow-up with serial hCG monitoring</li>
  </ul>
  <p><strong>Surgical:</strong></p>
  <ul>
    <li><strong>Salpingostomy:</strong> Removes ectopic and preserves tube</li>
    <li><strong>Salpingectomy:</strong> Removes damaged tube if ruptured</li>
    <li><strong>Emergency surgery:</strong> For internal bleeding or rupture</li>
  </ul>

  <h3>🌱 Can I Get Pregnant Again?</h3>
  <p>Yes! Many women conceive naturally after an ectopic pregnancy. Success depends on:</p>
  <ul>
    <li>Remaining fallopian tube’s health</li>
    <li>Cause of the ectopic</li>
    <li>Treatment method used</li>
  </ul>
  <p>
    Recommendations may include waiting 3–6 months, doing early scans in future pregnancies, and considering IVF if both tubes are damaged.
  </p>

  <h3>🧠 Emotional Healing After Ectopic Pregnancy</h3>
  <p>Grieving after an ectopic is real and valid. Common feelings include:</p>
  <ul>
    <li>Guilt and confusion</li>
    <li>Fear of trying again</li>
    <li>Loss of confidence in one’s body</li>
  </ul>
  <p><strong>At Sukam, we support healing through:</strong></p>
  <ul>
    <li>Compassionate counseling</li>
    <li>Partner support sessions</li>
    <li>Mind-body therapy and grief circles</li>
    <li>Safe space to process and recover</li>
  </ul>
  <p>❤️ Your body did not fail — it protected you.</p>

  <h3>👩‍⚕️ Sukam’s Ectopic Pregnancy Care</h3>
  <ul>
    <li>🧪 Early detection and pregnancy monitoring</li>
    <li>🩺 Fertility-preserving treatments (methotrexate or laparoscopy)</li>
    <li>🔁 Post-treatment hCG monitoring</li>
    <li>🧑‍⚕️ Fertility planning and counseling</li>
    <li>🧘 Mental health & emotional recovery programs</li>
    <li>🤝 Partner-inclusive healing approach</li>
  </ul>
  <p><strong>At Sukam, ectopic care is never “just a medical event.” We walk with you — fully and compassionately.</strong></p>
</section>


      <section className="quiz-section">
        <h2>🧠 Ectopic Pregnancy Quiz – Test Your Knowledge!</h2>

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

export default EctopicPregnancy;