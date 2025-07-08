
import React, { useState } from 'react';
import './RP1InfertilityInsights.css';

const quizData = [
  {
    question: "What does LASER stand for?",
    options: [
      "Light Amplification by Sound Emission Radiation",
      "Light Amplification by Stimulated Emission of Radiation",
      "Low Area Surgical Energy Ray",
      "Light Activated Surgical Energy Radiance"
    ],
    answer: "Light Amplification by Stimulated Emission of Radiation"
  },
  {
    question: "Which of the following is a major benefit of LASER surgery?",
    options: [
      "Longer operation time",
      "More bleeding",
      "Faster healing",
      "Increased scarring"
    ],
    answer: "Faster healing"
  },
  {
    question: "Which LASER is used in proctology?",
    options: ["Excimer", "Diode", "Argon", "YAG only"],
    answer: "Diode"
  },
  {
    question: "FiLaC is a LASER procedure used for:",
    options: ["Varicose veins", "Fistula in Ano", "Hernia", "Gallstones"],
    answer: "Fistula in Ano"
  },
  {
    question: "HoLEP is used to treat:",
    options: [
      "Gallstones",
      "Kidney failure",
      "Enlarged Prostate (BPH)",
      "Urethral stones"
    ],
    answer: "Enlarged Prostate (BPH)"
  },
  {
    question: "LASER lithotripsy is used in:",
    options: ["Colon surgery", "Gallbladder", "Kidney stones", "Heart block"],
    answer: "Kidney stones"
  },
  {
    question: "Which of the following is TRUE about LASER piles surgery?",
    options: [
      "Requires hospital stay",
      "Blood loss is high",
      "Pain is less",
      "Recurrence is higher"
    ],
    answer: "Pain is less"
  },
  {
    question: "LASER surgery reduces:",
    options: ["Clotting", "Healing", "Infection risk", "Cost"],
    answer: "Infection risk"
  },
  {
    question: "One of the common complications of LASER surgery is:",
    options: [
      "Thermal injury (rare)",
      "Cardiac arrest",
      "Stroke",
      "Liver failure"
    ],
    answer: "Thermal injury (rare)"
  },
  {
    question: "LASER is not suitable for:",
    options: [
      "Hemorrhoids",
      "Advanced cancer with spread",
      "Cervical erosion",
      "Varicose veins"
    ],
    answer: "Advanced cancer with spread"
  },
  {
    question: "The type of LASER used in eye surgery (LASIK):",
    options: ["Diode", "Excimer", "Nd:YAG", "CO₂"],
    answer: "Excimer"
  },
  {
    question: "LASER vaporization is used in:",
    options: [
      "Skin tightening",
      "Tissue removal",
      "Fat melting",
      "Pain management only"
    ],
    answer: "Tissue removal"
  },
  {
    question: "In proctology LASER, the anesthesia used is usually:",
    options: ["General", "Local or spinal", "Cardiac", "None needed"],
    answer: "Local or spinal"
  },
  {
    question: "LASER surgery for fissure helps by:",
    options: [
      "Deep cutting",
      "Muscle removal",
      "Gentle ablation with minimal sphincter damage",
      "Large incision"
    ],
    answer: "Gentle ablation with minimal sphincter damage"
  },
  {
    question: "Which LASER is used for deep urological tissues?",
    options: ["CO₂", "Holmium", "Diode", "Excimer"],
    answer: "Holmium"
  },
  {
    question: "Post-LASER surgery patients usually:",
    options: [
      "Are admitted for a week",
      "Return home the same day",
      "Require transfusion",
      "Need morphine always"
    ],
    answer: "Return home the same day"
  },
  {
    question: "LASER is commonly used in which gynecological condition?",
    options: [
      "Fibroids removal",
      "Cervical erosion treatment",
      "Ovarian cancer",
      "Ectopic pregnancy"
    ],
    answer: "Cervical erosion treatment"
  },
  {
    question: "LASER surgery scars are typically:",
    options: ["Hypertrophic", "Pigmented", "Minimal or none", "Infected"],
    answer: "Minimal or none"
  },
  {
    question: "A major indication of LASER in skin is for:",
    options: ["Lipoma removal", "Hair transplant", "Wart and mole ablation", "Botox"],
    answer: "Wart and mole ablation"
  },
  {
    question: "LASER FiLaC is preferred because it:",
    options: [
      "Cuts muscle",
      "Removes anus",
      "Preserves sphincter",
      "Always needs GA"
    ],
    answer: "Preserves sphincter"
  }
];

const LASERSurgery = () => {
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
      <h1>LASER Surgery: Precision Healing Through Light</h1>
      <p className="lead">“Harnessing the Power of Light for Gentle, Effective, and Fast Recovery ”</p>

      <section className="info-section">
  <h3>🔬 What is LASER Surgery?</h3>
  <p>
    LASER stands for <strong>Light Amplification by Stimulated Emission of Radiation</strong>. LASER surgery uses a focused beam of high-intensity light to perform precise medical procedures. Unlike traditional blades or scissors, LASER allows surgeons to cut, vaporize, or coagulate tissue with minimal bleeding, pain, and recovery time.
  </p>

  <h3>💡 How Does LASER Work in Surgery?</h3>
  <p>A LASER beam delivers energy in the form of coherent light. This energy can:</p>
  <ul>
    <li>Cut tissues with surgical precision</li>
    <li>Seal blood vessels and lymphatics</li>
    <li>Vaporize unwanted or diseased tissue</li>
    <li>Stimulate healing at the cellular level</li>
  </ul>
  <p>Different wavelengths and intensities are used depending on the tissue type and procedure.</p>

  <h3>🧪 Types of LASER Used in Surgery</h3>
  <table>
    <thead>
      <tr>
        <th>Type of LASER</th>
        <th>Common Uses</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>CO₂ LASER</td>
        <td>Skin, piles, ENT, gynecology</td>
      </tr>
      <tr>
        <td>Nd:YAG LASER</td>
        <td>Urology, gynecology, liver lesions</td>
      </tr>
      <tr>
        <td>Diode LASER</td>
        <td>Proctology, varicose veins, dental procedures</td>
      </tr>
      <tr>
        <td>Excimer LASER</td>
        <td>Eye surgeries (e.g., LASIK)</td>
      </tr>
      <tr>
        <td>Holmium LASER</td>
        <td>Urological procedures (e.g., prostate, kidney stones)</td>
      </tr>
    </tbody>
  </table>

  <h3>🛠️ Common Procedures Using LASER Surgery</h3>
  <ul>
    <li><strong>Proctology:</strong> Piles (LASER hemorrhoidoplasty), fissure (sphincter-sparing ablation), fistula (FiLaC), perianal abscess, pilonidal sinus</li>
    <li><strong>Urology:</strong> HoLEP for BPH, lithotripsy for kidney stones, urethral stricture correction</li>
    <li><strong>Gynecology:</strong> Cervical erosion, vaginal tightening, endometriosis ablation</li>
    <li><strong>ENT & Skin:</strong> LASER tonsillectomy, skin tags, warts, scars, varicose vein ablation</li>
  </ul>

  <h3>✅ Advantages of LASER Surgery</h3>
  <table>
    <thead>
      <tr>
        <th>Feature</th>
        <th>LASER Surgery</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Pain</td>
        <td>Significantly reduced</td>
      </tr>
      <tr>
        <td>Bleeding</td>
        <td>Minimal to none</td>
      </tr>
      <tr>
        <td>Wound Healing</td>
        <td>Faster due to precision</td>
      </tr>
      <tr>
        <td>Scarring</td>
        <td>Minimal</td>
      </tr>
      <tr>
        <td>Infection Risk</td>
        <td>Reduced</td>
      </tr>
      <tr>
        <td>Hospital Stay</td>
        <td>Shorter or day-care</td>
      </tr>
      <tr>
        <td>Return to Work</td>
        <td>Quicker (1–3 days)</td>
      </tr>
    </tbody>
  </table>

  <h3>⚖️ Who Can Benefit?</h3>
  <ul>
    <li>Patients unfit for long surgeries</li>
    <li>Those with bleeding disorders</li>
    <li>Patients seeking scarless, pain-free day-care procedures</li>
    <li>Cases requiring extreme surgical precision</li>
  </ul>

  <h3>⚠️ When is LASER Not Recommended?</h3>
  <ul>
    <li>Large or advanced-stage malignancies</li>
    <li>Extensive deep tissue involvement</li>
    <li>Areas with high thermal sensitivity</li>
    <li>When cost is a significant concern</li>
  </ul>

  <h3>📝 How to Prepare for LASER Surgery</h3>
  <ol>
    <li><strong>Consultation & Evaluation</strong> – Clinical exam, blood tests, imaging</li>
    <li><strong>Pre-operative Counselling</strong> – Expectations, recovery, LASER vs conventional</li>
    <li><strong>Day of Surgery</strong> – Local/regional anesthesia or sedation; 15–45 minute procedure</li>
    <li><strong>Post-Procedure Recovery</strong> – Ambulation within hours, minimal dressing, same-day discharge</li>
  </ol>

  <h3>🏥 Sukam’s LASER Surgery Highlights</h3>
  <ul>
    <li>✅ Advanced LASER equipment with precision energy delivery</li>
    <li>✅ Specialized surgeons in LASER techniques</li>
    <li>✅ Customized care for piles, fistula, prostate, gynecologic needs</li>
    <li>✅ Minimal pain, faster healing, reduced downtime</li>
    <li>✅ Supportive aftercare and virtual guidance</li>
  </ul>

  <h3>🧘‍♂️ Recovery & Aftercare</h3>
  <ul>
    <li>✅ Avoid heavy lifting or straining briefly</li>
    <li>✅ Follow dietary guidance, especially post-anal procedures</li>
    <li>✅ Maintain hygiene, use sitz baths if prescribed</li>
    <li>✅ Most return to normal work in 1–3 days</li>
  </ul>

  <h3>🔍 Myths vs Facts</h3>
  <table>
    <thead>
      <tr>
        <th>Myth</th>
        <th>Fact</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>LASER surgery burns the body</td>
        <td>Modern LASERs are precisely controlled</td>
      </tr>
      <tr>
        <td>LASER surgery is not permanent</td>
        <td>As effective as open surgery, sometimes more</td>
      </tr>
      <tr>
        <td>LASER is only cosmetic</td>
        <td>Used widely in functional, life-saving procedures</td>
      </tr>
      <tr>
        <td>LASER recovery takes weeks</td>
        <td>Most recover within 24–72 hours</td>
      </tr>
    </tbody>
  </table>
</section>

      <section className="quiz-section">
        <h2>🧠 Quick Quiz — Perianal Abscess</h2>

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
                      {selectedAnswers[idx] === q.answer ? 'Correct' : `Incorrect (Your Answer: ${selectedAnswers[idx]})`}
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

export default LASERSurgery;
