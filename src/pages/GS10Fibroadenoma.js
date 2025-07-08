import React, { useState } from 'react';
import './RP1InfertilityInsights.css';

const quizData = [
  {
    question: "Fibroadenoma is usually a:",
    options: [
      "Cancerous tumor",
      "Cyst",
      "Benign breast lump",
      "Pus collection"
    ],
    answer: "Benign breast lump"
  },
  {
    question: "Most fibroadenomas are found in women aged:",
    options: [
      "60–70",
      "40–50",
      "15–35",
      "After menopause"
    ],
    answer: "15–35"
  },
  {
    question: "The typical feel of a fibroadenoma is:",
    options: [
      "Soft and fixed",
      "Firm, mobile, rubbery",
      "Painful and hot",
      "Hard and stuck to skin"
    ],
    answer: "Firm, mobile, rubbery"
  },
  {
    question: "Which imaging test is preferred for breast lumps in young women?",
    options: [
      "MRI",
      "CT scan",
      "Mammogram",
      "Ultrasound"
    ],
    answer: "Ultrasound"
  },
  {
    question: "A fibroadenoma larger than 5 cm is called:",
    options: [
      "Microadenoma",
      "Complex fibroadenoma",
      "Giant fibroadenoma",
      "Phyllodes tumor"
    ],
    answer: "Giant fibroadenoma"
  },
  {
    question: "FNAC is done to:",
    options: [
      "Remove the lump",
      "Detect pus",
      "Sample lump cells",
      "Stop bleeding"
    ],
    answer: "Sample lump cells"
  },
  {
    question: "If a fibroadenoma is small and not changing, the best approach is:",
    options: [
      "Radiation",
      "Chemotherapy",
      "Monitoring",
      "Urgent surgery"
    ],
    answer: "Monitoring"
  },
  {
    question: "What is NOT a typical feature of fibroadenoma?",
    options: [
      "Sudden weight loss",
      "Breast lump",
      "Painless swelling",
      "Lump moves with finger pressure"
    ],
    answer: "Sudden weight loss"
  },
  {
    question: "Which type may have higher cancer risk?",
    options: [
      "Simple",
      "Complex",
      "Cyst",
      "Milk duct swelling"
    ],
    answer: "Complex"
  },
  {
    question: "The breast lump that increases with pregnancy may be:",
    options: [
      "Breast abscess",
      "Cancer",
      "Fibroadenoma",
      "Sebaceous cyst"
    ],
    answer: "Fibroadenoma"
  },
  {
    question: "Which hormone influences fibroadenoma growth?",
    options: [
      "Insulin",
      "Thyroxine",
      "Estrogen",
      "Testosterone"
    ],
    answer: "Estrogen"
  },
  {
    question: "Fibroadenoma can be confused with:",
    options: [
      "Lipoma",
      "Cyst",
      "Breast cancer",
      "All of the above"
    ],
    answer: "All of the above"
  },
  {
    question: "After excision of a fibroadenoma:",
    options: [
      "Cancer risk increases",
      "Lump always recurs",
      "Pathology confirms diagnosis",
      "Breastfeeding is not possible"
    ],
    answer: "Pathology confirms diagnosis"
  },
  {
    question: "Phyllodes tumor is different from fibroadenoma because it can be:",
    options: [
      "Malignant",
      "Fluid-filled",
      "Painful",
      "Seen in men"
    ],
    answer: "Malignant"
  },
  {
    question: "Best way to prevent worry with a breast lump is:",
    options: [
      "Self-diagnose",
      "Massage it",
      "Ignore it",
      "Consult a doctor early"
    ],
    answer: "Consult a doctor early"
  },
  {
    question: "Mammography is routinely advised in:",
    options: [
      "Women under 20",
      "Pregnant women",
      "Women above 40",
      "Men only"
    ],
    answer: "Women above 40"
  },
  {
    question: "Which lump is more mobile and well-defined?",
    options: [
      "Cancer",
      "Fibroadenoma",
      "Abscess",
      "TB node"
    ],
    answer: "Fibroadenoma"
  },
  {
    question: "Can fibroadenoma reappear after removal?",
    options: [
      "No",
      "Yes",
      "Only after menopause",
      "Only with infection"
    ],
    answer: "Yes"
  },
  {
    question: "When is surgery recommended for fibroadenoma?",
    options: [
      "If it is painful",
      "If it grows",
      "If the patient desires removal",
      "All of the above"
    ],
    answer: "All of the above"
  },
  {
    question: "Fibroadenomas do NOT usually cause:",
    options: [
      "Nipple discharge",
      "Pain",
      "Skin dimpling",
      "Cancer"
    ],
    answer: "Cancer"
  }
];

const Fibroadenoma = () => {
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
      <h1>🟠 Fibroadenoma</h1>
      <p className="lead">“A breast lump that’s more chill than scary.”</p>

      <section className="info-section">
  <h3>🎀 What Is a Fibroadenoma?</h3>
  <p>
    A fibroadenoma is a benign (non-cancerous) breast tumor, commonly seen in young women between the
    ages of 15 and 35. It consists of both glandular (fibro-) and connective (-adenoma) tissues. These
    lumps are usually smooth, firm, mobile under the skin, and often painless.
  </p>
  <p>
    Though harmless in most cases, any breast lump should be clinically examined and confirmed to rule out
    other possibilities.
  </p>

  <h3>🔎 Key Features of Fibroadenoma</h3>
  <ul>
    <li>Firm, round or oval-shaped breast lump</li>
    <li>Painless and easily movable</li>
    <li>Feels like a marble under the skin</li>
    <li>May remain the same size, shrink, or grow over time</li>
    <li>Usually &lt; 3 cm but may reach up to 5 cm (giant fibroadenoma)</li>
  </ul>

  <h3>🩺 Who Is at Risk?</h3>
  <table>
    <thead>
      <tr><th>Factor</th><th>Explanation</th></tr>
    </thead>
    <tbody>
      <tr><td>Young age (15–35 years)</td><td>Most common in this age group</td></tr>
      <tr><td>Family history</td><td>May have a hereditary link</td></tr>
      <tr><td>Hormonal influence</td><td>Can grow during pregnancy or hormone therapy</td></tr>
      <tr><td>Oral contraceptives</td><td>May affect size in some women</td></tr>
    </tbody>
  </table>

  <h3>🔬 Types of Fibroadenoma</h3>
  <ul>
    <li><strong>Simple Fibroadenoma:</strong> Most common; uniform, non-cancerous</li>
    <li><strong>Complex Fibroadenoma:</strong> May contain cysts or calcium; slightly higher cancer risk</li>
    <li><strong>Giant/Juvenile Fibroadenoma:</strong> Rapidly growing; often seen in teens</li>
  </ul>

  <h3>📌 Symptoms to Watch For</h3>
  <ul>
    <li>New lump detected during self-exam</li>
    <li>Usually painless and located on one side</li>
    <li>Doesn’t vary with menstrual cycle</li>
    <li>Typically no nipple discharge or skin changes</li>
  </ul>
  <p><strong>Reminder:</strong> All breast lumps, even if painless, need medical evaluation.</p>

  <h3>🩻 How We Diagnose Fibroadenoma</h3>
  <ul>
    <li><strong>Clinical Breast Exam:</strong> Physical check for lump characteristics</li>
    <li><strong>Breast Ultrasound:</strong> Preferred imaging for women under 40</li>
    <li><strong>Mammography:</strong> Used for women over 40 to detect mass/calcifications</li>
    <li><strong>FNAC or Core Needle Biopsy:</strong> Confirms diagnosis and rules out malignancy</li>
  </ul>

  <h3>🛠️ Treatment Options</h3>
  <table>
    <thead>
      <tr><th>Option</th><th>Description</th></tr>
    </thead>
    <tbody>
      <tr>
        <td>Observation</td>
        <td>If benign and asymptomatic, monitor every 6–12 months</td>
      </tr>
      <tr>
        <td>Surgical Removal (Excision)</td>
        <td>Advised if lump is &gt;3–4 cm, painful, growing, or patient prefers removal</td>
      </tr>
      <tr>
        <td>Minimal Scar Techniques</td>
        <td>Cosmetic excision under local or general anesthesia, often same-day</td>
      </tr>
    </tbody>
  </table>

  <h3>❤️ After Surgery – What to Expect</h3>
  <ul>
    <li>Outpatient procedure with fast recovery</li>
    <li>Minimal scarring with cosmetic techniques</li>
    <li>Resume daily activities in 2–3 days</li>
    <li>Final confirmation via pathology report</li>
  </ul>

  <h3>🚩 When to Seek Immediate Care</h3>
  <ul>
    <li>Sudden lump growth</li>
    <li>Redness, pain, or swelling over lump</li>
    <li>Bloody or unusual nipple discharge</li>
    <li>Skin retraction or fixed mass</li>
  </ul>

  <h3>❌ Myths vs ✅ Facts</h3>
  <table>
    <thead>
      <tr><th>Myth</th><th>Fact</th></tr>
    </thead>
    <tbody>
      <tr><td>"All lumps mean cancer."</td><td>Most breast lumps in young women are benign.</td></tr>
      <tr><td>"If painless, it's harmless."</td><td>Every lump must be evaluated to confirm safety.</td></tr>
      <tr><td>"Only older women get breast issues."</td><td>Fibroadenomas are common in teens and young women.</td></tr>
      <tr><td>"Removing a lump increases cancer risk."</td><td>Excision doesn’t increase risk — it helps provide clarity.</td></tr>
    </tbody>
  </table>

  <h3>🏥 Our Clinic’s Breast Lump Care Program</h3>
  <ul>
    <li>✅ Clinical exam + same-day imaging (ultrasound)</li>
    <li>✅ FNAC or biopsy under local anesthesia if required</li>
    <li>✅ Quick pathology turnaround</li>
    <li>✅ Treatment options based on lump size and patient preference</li>
    <li>✅ Cosmetic excision with minimal scarring by experienced surgeons</li>
    <li>✅ Support for teenage and adult patients with compassionate care</li>
  </ul>
</section>


      <section className="quiz-section">
        <h2>🧠 Quick Quiz — Fibroadenoma Facts</h2>

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

export default Fibroadenoma;
