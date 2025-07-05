import React, { useState } from 'react';
import './RP1InfertilityInsights.css';

const quizData = [
  {
    question: "Mastalgia refers to:",
    options: [
      "Breast lump",
      "Breast discharge",
      "Breast pain",
      "Breast cancer"
    ],
    answer: "Breast pain"
  },
  {
    question: "Cyclical mastalgia is related to:",
    options: [
      "Diet",
      "Menstrual cycle",
      "Injury",
      "Posture"
    ],
    answer: "Menstrual cycle"
  },
  {
    question: "Most breast pain is:",
    options: [
      "Cancerous",
      "Due to infection",
      "Benign",
      "Hormonal cancer"
    ],
    answer: "Benign"
  },
  {
    question: "Which of the following is NOT a cause of mastalgia?",
    options: [
      "Hormonal changes",
      "Ill-fitting bra",
      "Asthma",
      "Costochondritis"
    ],
    answer: "Asthma"
  },
  {
    question: "Pain felt in the breast but originating from chest wall is called:",
    options: [
      "Referred pain",
      "Cyclical mastalgia",
      "Cancer pain",
      "Galactorrhea"
    ],
    answer: "Referred pain"
  },
  {
    question: "Fibrocystic breast changes are:",
    options: [
      "Rare",
      "Always cancerous",
      "Common benign cause of breast pain",
      "Infectious"
    ],
    answer: "Common benign cause of breast pain"
  },
  {
    question: "A red, hot, painful breast with fever may suggest:",
    options: [
      "Cancer",
      "Mastitis",
      "Fibroadenoma",
      "Cyst rupture"
    ],
    answer: "Mastitis"
  },
  {
    question: "Which supplement is sometimes used for cyclical mastalgia?",
    options: [
      "Vitamin C",
      "Vitamin D",
      "Evening primrose oil",
      "Folic acid"
    ],
    answer: "Evening primrose oil"
  },
  {
    question: "Non-cyclical mastalgia is more common in:",
    options: [
      "Teenagers",
      "Pregnant women",
      "Women over 40",
      "Infants"
    ],
    answer: "Women over 40"
  },
  {
    question: "Worsening breast pain with skin puckering may suggest:",
    options: [
      "Cyst",
      "Fibroadenoma",
      "Breast cancer",
      "Hormonal pain"
    ],
    answer: "Breast cancer"
  },
  {
    question: "Ultrasound is usually preferred in women:",
    options: [
      "Over 50",
      "Over 30",
      "Under 40",
      "Pregnant women"
    ],
    answer: "Under 40"
  },
  {
    question: "Which lifestyle change can help with mastalgia?",
    options: [
      "High-fat diet",
      "Tight bras",
      "Reducing caffeine",
      "Excessive massage"
    ],
    answer: "Reducing caffeine"
  },
  {
    question: "Which of these is a red flag with breast pain?",
    options: [
      "Cyclical pattern",
      "Pain improves with period",
      "Lump with skin change",
      "Pain both sides"
    ],
    answer: "Lump with skin change"
  },
  {
    question: "Costochondritis is:",
    options: [
      "Breast infection",
      "Rib cartilage inflammation",
      "Hormonal disorder",
      "Skin condition"
    ],
    answer: "Rib cartilage inflammation"
  },
  {
    question: "Pain that moves with breathing or posture may be from:",
    options: [
      "Muscle/rib",
      "Breast cancer",
      "Nipple ducts",
      "Ovaries"
    ],
    answer: "Muscle/rib"
  },
  {
    question: "Pain that improves after the menstrual period is usually:",
    options: [
      "Cancer-related",
      "Cyclical mastalgia",
      "Non-cyclical",
      "Dangerous"
    ],
    answer: "Cyclical mastalgia"
  },
  {
    question: "NSAIDs can be used for:",
    options: [
      "Hormonal imbalance",
      "Cyst resolution",
      "Pain relief",
      "Treating tumors"
    ],
    answer: "Pain relief"
  },
  {
    question: "Best time for breast self-exam is:",
    options: [
      "First day of period",
      "During ovulation",
      "7 days after period",
      "Anytime"
    ],
    answer: "7 days after period"
  },
  {
    question: "Which imaging is best for dense breasts in young women?",
    options: [
      "MRI",
      "Mammogram",
      "Ultrasound",
      "CT scan"
    ],
    answer: "Ultrasound"
  },
  {
    question: "Most cases of mastalgia can be managed with:",
    options: [
      "Surgery",
      "Chemotherapy",
      "Reassurance and symptom control",
      "Radiation"
    ],
    answer: "Reassurance and symptom control"
  }
];

const Mastalgia = () => {
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
      <h1>🟠 Mastalgia</h1>
      <p className="lead">“Sore, swollen, and often hormonal.”</p>

      <section className="info-section">
  <h3>💢 What Is Mastalgia?</h3>
  <p>
    Mastalgia refers to pain in one or both breasts. It can be mild, sharp, stabbing, or throbbing.
    While commonly benign and hormone-related, persistent or localized pain should be evaluated to rule out
    underlying causes. It affects up to 70% of women at some point in their lives.
  </p>

  <h3>📘 Types of Mastalgia</h3>
  <table>
    <thead>
      <tr><th>Type</th><th>Features</th></tr>
    </thead>
    <tbody>
      <tr>
        <td>Cyclical Mastalgia</td>
        <td>Linked to menstrual cycle; starts before periods, improves afterward</td>
      </tr>
      <tr>
        <td>Non-Cyclical Mastalgia</td>
        <td>Unrelated to cycle; constant or intermittent, common after 40</td>
      </tr>
      <tr>
        <td>Extramammary Pain</td>
        <td>Feels like breast pain but comes from chest wall, ribs, or heart</td>
      </tr>
    </tbody>
  </table>

  <h3>🔍 Common Causes</h3>
  <table>
    <thead>
      <tr><th>Cause</th><th>Description</th></tr>
    </thead>
    <tbody>
      <tr><td>Hormonal fluctuations</td><td>Menstrual cycle, pregnancy, menopause</td></tr>
      <tr><td>Fibrocystic changes</td><td>Lumpy or tender breasts due to fluid-filled cysts</td></tr>
      <tr><td>Medications</td><td>OCPs, hormone therapy, antidepressants</td></tr>
      <tr><td>Poorly fitted bras</td><td>Cause localized discomfort or strain</td></tr>
      <tr><td>Stress & anxiety</td><td>Increase pain perception</td></tr>
      <tr><td>Chest wall conditions</td><td>Costochondritis, muscle strain</td></tr>
      <tr><td>Infections</td><td>Mastitis or abscess, especially in breastfeeding</td></tr>
      <tr><td>Breast cancer (rare)</td><td>Usually painless, but can present as pain in some cases</td></tr>
    </tbody>
  </table>

  <h3>⚠️ When Should You See a Doctor?</h3>
  <ul>
    <li>Persistent or worsening breast pain</li>
    <li>Localized pain in one spot</li>
    <li>Presence of lump, swelling, or nipple changes</li>
    <li>Nipple discharge or inversion</li>
    <li>Pain unrelated to periods</li>
    <li>Redness, warmth, or fever over breast</li>
  </ul>

  <h3>🏥 Evaluation at Our Clinic</h3>
  <ul>
    <li>✅ <strong>Clinical History:</strong> Menstrual pattern, pregnancy status, bra fit, pain features</li>
    <li>✅ <strong>Breast Exam:</strong> Check for lumps, skin or nipple changes</li>
    <li>✅ <strong>Ultrasound:</strong> First-line imaging for focal pain (under 40)</li>
    <li>✅ <strong>Mammography:</strong> Preferred in women over 40</li>
    <li>✅ <strong>FNAC or Biopsy:</strong> If lump is found or imaging is inconclusive</li>
    <li>✅ <strong>Chest Wall Evaluation:</strong> For rib or muscular pain sources</li>
  </ul>

  <h3>🛠️ Treatment & Relief</h3>
  <table>
    <thead>
      <tr><th>Method</th><th>Description</th></tr>
    </thead>
    <tbody>
      <tr><td>Lifestyle Changes</td><td>Well-fitted bra, avoid caffeine/smoking</td></tr>
      <tr><td>Dietary Modifications</td><td>Low-fat, high-fiber diet, Vitamin E or evening primrose oil (under supervision)</td></tr>
      <tr><td>Pain Medications</td><td>Paracetamol, ibuprofen for temporary relief</td></tr>
      <tr><td>Topical NSAIDs</td><td>For localized pain</td></tr>
      <tr><td>Hormonal Adjustments</td><td>Modify OCPs or HRT under guidance</td></tr>
      <tr><td>Physical Therapy</td><td>For posture or muscle-related causes</td></tr>
      <tr><td>Surgery</td><td>Rare, unless linked to fibroadenoma/cyst</td></tr>
    </tbody>
  </table>

  <h3>🧘‍♀️ Self-Care Tips</h3>
  <ul>
    <li>Wear supportive bras, especially during physical activity</li>
    <li>Use warm/cold compresses as needed</li>
    <li>Manage stress through relaxation techniques</li>
    <li>Keep a breast pain diary to identify patterns</li>
    <li>Cut back on caffeine and fatty foods if cyclical pain</li>
  </ul>

  <h3>🧐 Myths vs. Facts</h3>
  <table>
    <thead>
      <tr><th>Myth</th><th>Fact</th></tr>
    </thead>
    <tbody>
      <tr><td>All breast pain is cancer</td><td>Over 90% of mastalgia is non-cancerous</td></tr>
      <tr><td>Surgery is always needed</td><td>Most cases improve with non-surgical care</td></tr>
      <tr><td>Only women get breast pain</td><td>Men can also have breast pain (e.g., gynecomastia)</td></tr>
      <tr><td>Breast pain doesn’t need evaluation</td><td>Persistent or localized pain should be checked</td></tr>
    </tbody>
  </table>

  <h3>👩‍⚕️ Why Choose Us?</h3>
  <ul>
    <li>✅ Private, comfortable breast exam suites</li>
    <li>✅ On-site ultrasound & mammography</li>
    <li>✅ Experienced female clinicians for your comfort</li>
    <li>✅ Fast-track breast pain/lump evaluation</li>
    <li>✅ Personalized care plans tailored to your symptoms and age</li>
  </ul>
</section>

      <section className="quiz-section">
        <h2>🧠 Mastalgia Quiz — Test Your Knowledge!</h2>

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

export default Mastalgia;
