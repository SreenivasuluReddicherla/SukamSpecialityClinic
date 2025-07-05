import React, { useState } from 'react';
import './RP1InfertilityInsights.css';

const quizData = [
  {
    question: "A breast abscess is:",
    options: [
      "Cancer",
      "Cyst",
      "Pus-filled infection",
      "Milk clot"
    ],
    answer: "Pus-filled infection"
  },
  {
    question: "Commonest cause of breast abscess is:",
    options: [
      "Bacteria entering cracked nipple",
      "Breast cancer",
      "Hormonal changes",
      "Allergy"
    ],
    answer: "Bacteria entering cracked nipple"
  },
  {
    question: "Which group is at highest risk of breast abscess?",
    options: [
      "Men",
      "Teenagers",
      "Breastfeeding mothers",
      "Postmenopausal women"
    ],
    answer: "Breastfeeding mothers"
  },
  {
    question: "Most breast abscesses occur due to:",
    options: [
      "Diabetes",
      "Blocked ducts + infection",
      "Smoking",
      "Milk allergy"
    ],
    answer: "Blocked ducts + infection"
  },
  {
    question: "Key symptom of a breast abscess is:",
    options: [
      "Painless lump",
      "Coldness of breast",
      "Painful red lump",
      "Nipple retraction"
    ],
    answer: "Painful red lump"
  },
  {
    question: "Which imaging is most useful in breast abscess?",
    options: [
      "CT scan",
      "X-ray",
      "Ultrasound",
      "Mammogram"
    ],
    answer: "Ultrasound"
  },
  {
    question: "Needle aspiration is suitable for abscesses:",
    options: [
      "Less than 3 cm",
      "More than 5 cm",
      "With no pus",
      "That are cancerous"
    ],
    answer: "Less than 3 cm"
  },
  {
    question: "If untreated, breast abscess may lead to:",
    options: [
      "Discharge of milk",
      "Fistula",
      "Improved pain",
      "No problem"
    ],
    answer: "Fistula"
  },
  {
    question: "Which bacteria most often causes abscesses?",
    options: [
      "E. coli",
      "Pseudomonas",
      "Staphylococcus aureus",
      "H. pylori"
    ],
    answer: "Staphylococcus aureus"
  },
  {
    question: "Pain, fever, redness, and lump in breastfeeding woman suggests:",
    options: [
      "Galactorrhea",
      "Fibroadenoma",
      "Breast abscess",
      "Ovarian cyst"
    ],
    answer: "Breast abscess"
  },
  {
    question: "Women with nipple piercings are at risk because:",
    options: [
      "Better milk flow",
      "Increased infection entry",
      "Less hormones",
      "Reduced breast pain"
    ],
    answer: "Increased infection entry"
  },
  {
    question: "Antibiotic therapy is started:",
    options: [
      "After surgery only",
      "Only if fever is present",
      "Immediately",
      "After stopping breastfeeding"
    ],
    answer: "Immediately"
  },
  {
    question: "Breastfeeding should be:",
    options: [
      "Completely stopped",
      "Continued on both sides",
      "Continued on unaffected side",
      "Not discussed"
    ],
    answer: "Continued on unaffected side"
  },
  {
    question: "Which of the following is NOT a risk factor?",
    options: [
      "Smoking",
      "Poor latching during feeding",
      "Hormone replacement",
      "Diabetes"
    ],
    answer: "Hormone replacement"
  },
  {
    question: "Post-surgery, patients should:",
    options: [
      "Avoid washing the area",
      "Leave wound open",
      "Follow proper wound dressing",
      "Restart gym immediately"
    ],
    answer: "Follow proper wound dressing"
  },
  {
    question: "Recurrent abscesses may need:",
    options: [
      "Core biopsy",
      "Fistula surgery",
      "Diet changes only",
      "Chemotherapy"
    ],
    answer: "Fistula surgery"
  },
  {
    question: "What kind of scar is expected after incision?",
    options: [
      "Big deforming scar",
      "Disfiguring mark",
      "Usually small, well-healed",
      "Always infected"
    ],
    answer: "Usually small, well-healed"
  },
  {
    question: "A woman with mastitis should:",
    options: [
      "Stop all feeds",
      "Wait till pus forms",
      "See a doctor early",
      "Start antibiotics on her own"
    ],
    answer: "See a doctor early"
  },
  {
    question: "Painkillers used in abscess include:",
    options: [
      "Insulin",
      "Paracetamol or ibuprofen",
      "Morphine only",
      "None"
    ],
    answer: "Paracetamol or ibuprofen"
  },
  {
    question: "Pus culture helps in:",
    options: [
      "Diagnosing cancer",
      "Choosing the right antibiotic",
      "Breastfeeding technique",
      "Checking hormones"
    ],
    answer: "Choosing the right antibiotic"
  }
];

const BreastAbscess = () => {
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
      <h1>🟠 Breast Abscess</h1>
      <p className="lead">“A painful boil that needs a quick fix.”</p>

      <section className="info-section">
  <h3>💢 What Is a Breast Abscess?</h3>
  <p>
    A breast abscess is a painful, pus-filled infection in the breast tissue. It usually develops from untreated mastitis or a blocked milk duct,
    most commonly in breastfeeding women. However, it may also affect non-lactating women with risk factors like smoking, diabetes, or immune suppression.
  </p>

  <h3>🧬 What Causes a Breast Abscess?</h3>
  <ul>
    <li>Blocked milk duct → Milk stasis</li>
    <li>Untreated mastitis (inflammation) turns infectious</li>
    <li>Bacteria entering through cracked nipples</li>
    <li>Poor breastfeeding technique</li>
    <li>Smoking or diabetes in non-lactating women</li>
  </ul>
  <p><strong>Most common organism:</strong> <em>Staphylococcus aureus</em></p>

  <h3>🩺 Who Is at Risk?</h3>
  <table>
    <thead>
      <tr><th>Group</th><th>Why?</th></tr>
    </thead>
    <tbody>
      <tr><td>Breastfeeding mothers</td><td>Milk stasis, cracked nipples, blocked ducts</td></tr>
      <tr><td>Smokers</td><td>Weakened immune defenses in ducts</td></tr>
      <tr><td>Diabetic or immunocompromised</td><td>Delayed healing, increased infection risk</td></tr>
      <tr><td>Women with nipple piercings/trauma</td><td>Entry point for bacterial infection</td></tr>
    </tbody>
  </table>

  <h3>🔍 Common Symptoms of Breast Abscess</h3>
  <ul>
    <li>Localized pain, swelling, and warmth</li>
    <li>Red, firm lump that may enlarge</li>
    <li>Fever, chills, and body aches</li>
    <li>Nipple discharge (possibly pus or blood)</li>
    <li>Pain or difficulty while breastfeeding</li>
    <li>Fatigue, feeling unwell</li>
  </ul>

  <h3>🧪 Diagnosis at Our Clinic</h3>
  <ul>
    <li>✅ <strong>Clinical Breast Exam:</strong> Tenderness, skin changes, lump characteristics</li>
    <li>✅ <strong>Ultrasound:</strong> Confirms fluid collection and rules out cyst or mastitis</li>
    <li>✅ <strong>Pus Culture:</strong> Tailors antibiotic treatment (if drainage performed)</li>
    <li>✅ <strong>Blood Tests:</strong> CBC, CRP if fever/severe infection suspected</li>
  </ul>

  <h3>💊 Treatment Options</h3>
  <table>
    <thead>
      <tr><th>Approach</th><th>Description</th></tr>
    </thead>
    <tbody>
      <tr><td>Antibiotics</td><td>Broad-spectrum initially; adjusted per culture report</td></tr>
      <tr><td>Drainage</td><td>Needle aspiration (small abscess) or I&D surgery (large or ruptured abscess)</td></tr>
      <tr><td>Pain relief</td><td>Paracetamol, ibuprofen</td></tr>
      <tr><td>Lactation support</td><td>Continue breastfeeding from unaffected breast; express milk from affected side</td></tr>
      <tr><td>Wound care</td><td>Daily dressing and hygiene counseling</td></tr>
    </tbody>
  </table>

  <h3>🔪 When Is Surgery Required?</h3>
  <ul>
    <li>Abscess &gt;3 cm or rupturing</li>
    <li>Not resolving with aspiration</li>
    <li>Extensive necrosis or fistula formation</li>
    <li>Multiple recurrences</li>
  </ul>

  <h3>🤱 Breastfeeding Guidance</h3>
  <ul>
    <li>Continue breastfeeding from the other breast</li>
    <li>Express milk from the infected side to prevent engorgement</li>
    <li>Maintain nipple hygiene</li>
    <li>Consult lactation expert if breastfeeding becomes painful</li>
  </ul>

  <h3>⚠️ Complications If Left Untreated</h3>
  <ul>
    <li>Spread of infection to surrounding tissue</li>
    <li>Chronic abscess or fistula formation</li>
    <li>Sepsis (in rare, severe cases)</li>
    <li>Scarring or cosmetic distortion of breast</li>
  </ul>

  <h3>🧐 Myths vs. Facts</h3>
  <table>
    <thead>
      <tr><th>Myth</th><th>Fact</th></tr>
    </thead>
    <tbody>
      <tr><td>Only breastfeeding women get abscesses</td><td>Can occur in non-lactating women too</td></tr>
      <tr><td>You must stop breastfeeding</td><td>Breastfeeding is usually continued with care</td></tr>
      <tr><td>All breast lumps are cancer</td><td>Abscesses are infections, not tumors</td></tr>
      <tr><td>Surgery always leaves a scar</td><td>Minimal scarring possible with expert care</td></tr>
    </tbody>
  </table>

  <h3>🏥 How We Manage Breast Abscess at [Your Clinic Name]</h3>
  <ul>
    <li>✅ Rapid diagnosis with bedside ultrasound</li>
    <li>✅ On-the-spot aspiration or minor surgical drainage</li>
    <li>✅ Early antibiotic therapy tailored to the infection</li>
    <li>✅ Wound dressing support and at-home guidance</li>
    <li>✅ Lactation support and pain relief</li>
    <li>✅ Follow-up to ensure healing and cosmetic care</li>
  </ul>
</section>

      <section className="quiz-section">
        <h2>🧠 Quick Quiz — Breast Abscess</h2>

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

export default BreastAbscess;
