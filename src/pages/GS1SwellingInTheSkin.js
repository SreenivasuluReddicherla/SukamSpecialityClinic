import React, { useState } from 'react';
import './RP1InfertilityInsights.css';

const quizData = [
  {
    question: "Which of the following is a sign of cellulitis?",
    options: [
      "Itching without redness",
      "Cold, pale skin",
      "Red, warm, painful swelling",
      "Skin peeling only"
    ],
    answer: "Red, warm, painful swelling"
  },
  {
    question: "Angioedema is most often caused by:",
    options: [
      "Bacterial infection",
      "Heart failure",
      "Allergy",
      "Trauma"
    ],
    answer: "Allergy"
  },
  {
    question: "Which condition leads to firm, non-pitting swelling?",
    options: [
      "Lymphedema",
      "Heart failure",
      "Eczema",
      "Psoriasis"
    ],
    answer: "Lymphedema"
  },
  {
    question: "Which test helps diagnose Deep Vein Thrombosis (DVT)?",
    options: [
      "CT Scan",
      "Doppler ultrasound",
      "X-ray",
      "Liver function test"
    ],
    answer: "Doppler ultrasound"
  },
  {
    question: "Pitting edema is most commonly seen in:",
    options: [
      "Angioedema",
      "Cellulitis",
      "Heart failure",
      "Urticaria"
    ],
    answer: "Heart failure"
  },
  {
    question: "Cold compresses are helpful in:",
    options: [
      "Chronic lymphedema",
      "Sudden allergic reactions",
      "Pitting edema",
      "Liver-related swelling"
    ],
    answer: "Sudden allergic reactions"
  },
  {
    question: "Which of the following medications may cause swelling as a side effect?",
    options: [
      "Paracetamol",
      "Steroids",
      "Iron supplements",
      "Multivitamins"
    ],
    answer: "Steroids"
  },
  {
    question: "Sudden leg swelling and pain with skin warmth could indicate:",
    options: [
      "Eczema",
      "Lymphedema",
      "DVT",
      "Angioedema"
    ],
    answer: "DVT"
  },
  {
    question: "Infections leading to skin swelling are best treated with:",
    options: [
      "Diuretics",
      "Antibiotics",
      "Antivirals",
      "Steroids"
    ],
    answer: "Antibiotics"
  },
  {
    question: "Elevating the legs is a helpful technique to:",
    options: [
      "Increase blood pressure",
      "Reduce edema",
      "Treat cellulitis",
      "Prevent allergies"
    ],
    answer: "Reduce edema"
  },
  {
    question: "Urticaria is also called:",
    options: [
      "Boils",
      "Eczema",
      "Hives",
      "Ringworm"
    ],
    answer: "Hives"
  },
  {
    question: "Which organ dysfunction is least likely to cause swelling?",
    options: [
      "Heart",
      "Kidney",
      "Pancreas",
      "Liver"
    ],
    answer: "Pancreas"
  },
  {
    question: "Which lifestyle measure can help prevent swelling?",
    options: [
      "High salt intake",
      "Tight clothing",
      "Regular movement",
      "Skipping water intake"
    ],
    answer: "Regular movement"
  },
  {
    question: "Recurrent, hard swelling after mastectomy may be:",
    options: [
      "DVT",
      "Angioedema",
      "Lymphedema",
      "Allergy"
    ],
    answer: "Lymphedema"
  },
  {
    question: "Which of the following is not an infectious cause of swelling?",
    options: [
      "Cellulitis",
      "Abscess",
      "Erysipelas",
      "Urticaria"
    ],
    answer: "Urticaria"
  },
  {
    question: "Which of the following is a red flag?",
    options: [
      "Itching without pain",
      "Mild foot puffiness at night",
      "Sudden swelling with breathlessness",
      "Swelling relieved by elevation"
    ],
    answer: "Sudden swelling with breathlessness"
  },
  {
    question: "Steroids help most in which cause of swelling?",
    options: [
      "Allergy",
      "Heart failure",
      "Kidney failure",
      "Fracture"
    ],
    answer: "Allergy"
  },
  {
    question: "Compression therapy is NOT used in:",
    options: [
      "Lymphedema",
      "Varicose veins",
      "Cellulitis",
      "Venous insufficiency"
    ],
    answer: "Cellulitis"
  },
  {
    question: "A swelling that pits when pressed and stays indented is:",
    options: [
      "Lymphatic edema",
      "Pitting edema",
      "Allergic reaction",
      "Muscle spasm"
    ],
    answer: "Pitting edema"
  },
  {
    question: "Which condition is more likely to cause generalized swelling?",
    options: [
      "Bug bite",
      "Kidney disease",
      "Elbow sprain",
      "Skin rash"
    ],
    answer: "Kidney disease"
  }
];

const SwellingInTheSkin = () => {
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
      <h1>🟠 Swelling in the Skin</h1>
      <p className="lead">“Lumps and bumps that signal something beneath the surface.”</p>

      <section className="info-section">
  <h3>📌 Introduction</h3>
  <p>
    Swelling in the skin is a visible or palpable enlargement of a body part due to fluid accumulation, inflammation, infection, or trauma. This condition may be short-lived or persistent and can be a sign of something as mild as an insect bite or as serious as an organ-related disorder.
    Whether it's a tender lump, a red patch, or a diffuse puffiness in your legs or face, swelling is not just cosmetic—it often reflects a deeper issue needing attention.
  </p>

  <h3>🔬 The Science Behind Skin Swelling</h3>
  <p>
    Swelling, also known as <strong>edema</strong>, occurs when fluid leaks from small blood vessels into surrounding tissues. The underlying trigger could be:
  </p>
  <ul>
    <li>Inflammation due to injury or infection.</li>
    <li>Allergic reaction leading to histamine release.</li>
    <li>Mechanical blockage of veins or lymph vessels.</li>
    <li>Organ dysfunction like heart, kidney, or liver failure.</li>
    <li>Immune system response to allergens or autoimmunity.</li>
  </ul>

  <h3>🧭 Types of Skin Swelling</h3>
  <h4>🟠 1. Localized Swelling</h4>
  <p>Occurs in one part of the body.</p>
  <ul><li>Examples: Insect bite, abscess, sprained ankle, pimple.</li></ul>

  <h4>🔵 2. Generalized Swelling</h4>
  <p>Affects large portions of the body or multiple areas.</p>
  <ul><li>Examples: Swelling in both legs due to heart failure, facial swelling due to kidney disease.</li></ul>

  <h3>📋 Common Causes and Examples</h3>
  <table>
    <thead>
      <tr>
        <th>Cause Category</th>
        <th>Specific Conditions</th>
        <th>Features</th>
      </tr>
    </thead>
    <tbody>
      <tr><td>Infections</td><td>Cellulitis, abscess, fungal infection</td><td>Red, warm, tender swelling</td></tr>
      <tr><td>Allergic Reactions</td><td>Urticaria, angioedema</td><td>Sudden, soft swelling with itching</td></tr>
      <tr><td>Trauma</td><td>Sprain, fracture, bruise</td><td>Swelling with pain and bruising</td></tr>
      <tr><td>Venous Issues</td><td>Varicose veins, DVT</td><td>Swelling with heaviness or skin color changes</td></tr>
      <tr><td>Lymphedema</td><td>Post-surgical or congenital</td><td>Firm, non-pitting swelling in limbs</td></tr>
      <tr><td>Heart/Kidney/Liver</td><td>CHF, Nephrotic syndrome, Cirrhosis</td><td>Bilateral, pitting edema</td></tr>
      <tr><td>Medications</td><td>Steroids, NSAIDs, antihypertensives</td><td>Gradual or sudden swelling, usually reversible</td></tr>
    </tbody>
  </table>

  <h3>🎨 Visual Suggestions</h3>
  <ul>
    <li>Infographic: <em>"Why Does Skin Swell?"</em> – diagram showing 5 main causes: Infection, Injury, Allergy, Circulatory, Organ Dysfunction.</li>
    <li>Image Set:
      <ul>
        <li>Allergic swelling of the lips</li>
        <li>Cellulitis on the leg</li>
        <li>Pitting vs. non-pitting edema in feet</li>
        <li>Lymphedema post-breast surgery</li>
      </ul>
    </li>
  </ul>

  <h3>⚠️ When to Worry: Red Flags</h3>
  <ul>
    <li>Painful, spreading redness</li>
    <li>Fever or chills</li>
    <li>Swelling with shortness of breath</li>
    <li>Swelling that doesn't go away with elevation</li>
    <li>Skin becoming shiny, stretched, or ulcerated</li>
    <li>Recurrent or unexplained swelling</li>
  </ul>

  <h3>🧊 First Aid Tips at Home</h3>
  <ul>
    <li>Cold compress: For acute injury or bites.</li>
    <li>Elevation: Raise legs above heart level to reduce swelling.</li>
    <li>Gentle compression: Use bandages or sleeves if advised.</li>
    <li>Hydration: Helps flush out retained fluids.</li>
    <li>OTC antihistamines: For allergic swelling.</li>
    <li>Avoid scratching: Prevents infection.</li>
  </ul>

  <h3>💊 Medical Treatments</h3>
  <table>
    <thead>
      <tr><th>Cause</th><th>Treatment Options</th></tr>
    </thead>
    <tbody>
      <tr><td>Infection</td><td>Antibiotics, incision & drainage (I&D)</td></tr>
      <tr><td>Allergy</td><td>Antihistamines, corticosteroids</td></tr>
      <tr><td>Inflammatory Skin Disease</td><td>Topical steroids, immunosuppressants</td></tr>
      <tr><td>Lymphedema</td><td>Manual lymph drainage, compression garments</td></tr>
      <tr><td>Heart Failure</td><td>Diuretics, salt restriction, cardiac meds</td></tr>
      <tr><td>Kidney Disease</td><td>Protein management, dialysis (if advanced)</td></tr>
      <tr><td>Liver Disease</td><td>Diuretics, fluid restriction, liver care</td></tr>
    </tbody>
  </table>

  <h3>❓ Myth vs. Reality</h3>
  <table>
    <thead>
      <tr><th>Myth</th><th>Fact</th></tr>
    </thead>
    <tbody>
      <tr><td>All swelling is dangerous.</td><td>Some swelling is harmless and temporary, like during pregnancy.</td></tr>
      <tr><td>Swelling = Infection.</td><td>Not always—could be allergy, poor circulation, or organ failure.</td></tr>
      <tr><td>Massage helps all swelling.</td><td>Can worsen certain conditions like DVT or cellulitis.</td></tr>
      <tr><td>You must always rest.</td><td>Movement improves lymphatic and venous return unless contraindicated.</td></tr>
    </tbody>
  </table>

  <h3>🏃‍♂️ Lifestyle Tips to Prevent Swelling</h3>
  <ul>
    <li>Reduce salt intake.</li>
    <li>Avoid prolonged standing or sitting.</li>
    <li>Use compression stockings if prone to leg swelling.</li>
    <li>Stay hydrated.</li>
    <li>Manage chronic conditions like diabetes and hypertension.</li>
    <li>Avoid self-medication with NSAIDs unless prescribed.</li>
  </ul>

  <h3>🧪 Investigations (When Needed)</h3>
  <ul>
    <li>CBC (for infection)</li>
    <li>Renal and liver function tests</li>
    <li>Urinalysis (for protein loss)</li>
    <li>Doppler ultrasound (for DVT or venous insufficiency)</li>
    <li>ECG and echocardiogram (for cardiac causes)</li>
  </ul>
</section>


      <section className="quiz-section">
        <h2>🧠 Quick Quiz — How Much Do You Know About Skin Swelling?</h2>

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

export default SwellingInTheSkin;
