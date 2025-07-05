import React, { useState } from 'react';
import './RP1InfertilityInsights.css';

const quizData = [
  {
    question: "Which skin infection is caused by bacteria?",
    options: [
      "Ringworm",
      "Herpes",
      "Impetigo",
      "Scabies"
    ],
    answer: "Impetigo"
  },
  {
    question: "What is the main symptom of scabies?",
    options: [
      "Fever",
      "Crusting",
      "Intense itching, especially at night",
      "Swelling"
    ],
    answer: "Intense itching, especially at night"
  },
  {
    question: "Which of these is a fungal infection?",
    options: [
      "Boil",
      "Cellulitis",
      "Ringworm",
      "Molluscum"
    ],
    answer: "Ringworm"
  },
  {
    question: "Honey-colored crusts on a child’s face suggest:",
    options: [
      "Chickenpox",
      "Impetigo",
      "Herpes",
      "Psoriasis"
    ],
    answer: "Impetigo"
  },
  {
    question: "Warts are caused by which virus?",
    options: [
      "Herpes",
      "HIV",
      "HPV",
      "Varicella"
    ],
    answer: "HPV"
  },
  {
    question: "Which is the best treatment for athlete’s foot?",
    options: [
      "Oral antibiotics",
      "Topical antifungal",
      "Moisturizer",
      "Steroid cream"
    ],
    answer: "Topical antifungal"
  },
  {
    question: "Grouped, painful blisters on lips are typical of:",
    options: [
      "Herpes simplex",
      "Impetigo",
      "Scabies",
      "Ringworm"
    ],
    answer: "Herpes simplex"
  },
  {
    question: "Cutaneous larva migrans is due to:",
    options: [
      "Bacteria",
      "Fungus",
      "Parasite",
      "Virus"
    ],
    answer: "Parasite"
  },
  {
    question: "Which infection causes burrows between fingers?",
    options: [
      "Molluscum",
      "Scabies",
      "Ringworm",
      "Cellulitis"
    ],
    answer: "Scabies"
  },
  {
    question: "Which is NOT contagious?",
    options: [
      "Warts",
      "Eczema",
      "Herpes",
      "Impetigo"
    ],
    answer: "Eczema"
  },
  {
    question: "Common area affected in candidiasis is:",
    options: [
      "Scalp",
      "Skin folds",
      "Feet",
      "Nails"
    ],
    answer: "Skin folds"
  },
  {
    question: "Boils are caused by infection of:",
    options: [
      "Lymph nodes",
      "Sweat glands",
      "Hair follicles",
      "Blood vessels"
    ],
    answer: "Hair follicles"
  },
  {
    question: "Most effective way to prevent skin fungal infection:",
    options: [
      "Share clothes",
      "Avoid bathing",
      "Keep skin dry",
      "Use thick creams"
    ],
    answer: "Keep skin dry"
  },
  {
    question: "Which one requires incision and drainage?",
    options: [
      "Boil",
      "Ringworm",
      "Herpes",
      "Erysipelas"
    ],
    answer: "Boil"
  },
  {
    question: "Molluscum contagiosum is commonly seen in:",
    options: [
      "Elderly only",
      "Children",
      "Diabetics only",
      "Only athletes"
    ],
    answer: "Children"
  },
  {
    question: "What is a key danger of untreated cellulitis?",
    options: [
      "Allergy",
      "Brain tumor",
      "Bloodstream infection",
      "Liver damage"
    ],
    answer: "Bloodstream infection"
  },
  {
    question: "Permethrin cream is used to treat:",
    options: [
      "Herpes",
      "Scabies",
      "Ringworm",
      "Candidiasis"
    ],
    answer: "Scabies"
  },
  {
    question: "Tinea corporis refers to:",
    options: [
      "Scalp ringworm",
      "Fungal infection of the body",
      "Nail fungus",
      "Foot fungus"
    ],
    answer: "Fungal infection of the body"
  },
  {
    question: "Herpes infection can be triggered by:",
    options: [
      "Stress",
      "Fever",
      "Menstruation",
      "All of the above"
    ],
    answer: "All of the above"
  },
  {
    question: "Which of the following may reappear repeatedly despite treatment?",
    options: [
      "Herpes",
      "Cellulitis",
      "Boil",
      "Cutaneous larva migrans"
    ],
    answer: "Herpes"
  }
];


const SkinInfections = () => {
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
      <h1>🔠 Skin Infections</h1>
      <p className="lead">"Red, warm, and angry—your skin’s SOS."</p>

      <section className="info-section">
  <h3>📌 Introduction</h3>
  <p>
    Your skin is the body’s first line of defense. But when it’s breached—by cuts, scrapes, dryness, or bites—it can become a gateway for infections. Skin infections are caused by various germs, including bacteria, viruses, fungi, and parasites, each presenting differently.
    Recognizing these signs early can prevent complications and scarring.
  </p>

  <h3>🧫 Classification of Skin Infections</h3>
  <p>Skin infections are broadly classified based on the type of organism:</p>
  <ol>
    <li>
      <strong>Bacterial Infections</strong><br />
      Common and often localized.
      <ul>
        <li><strong>Cellulitis:</strong> Red, hot, painful swelling often on legs or arms.</li>
        <li><strong>Impetigo:</strong> Honey-colored crusts, especially in children.</li>
        <li><strong>Boils/Furuncles:</strong> Painful pus-filled lumps due to infected hair follicles.</li>
        <li><strong>Erysipelas:</strong> A sharp-edged, shiny red rash, often on the face or legs.</li>
      </ul>
    </li>
    <li>
      <strong>Fungal Infections</strong><br />
      Thrive in warm, moist environments.
      <ul>
        <li><strong>Ringworm (Tinea):</strong> Circular, itchy rash with clear center.</li>
        <li><strong>Candidiasis:</strong> Affects skin folds (under breasts, groin).</li>
        <li><strong>Athlete’s foot:</strong> Scaling, itching between toes.</li>
      </ul>
    </li>
    <li>
      <strong>Viral Infections</strong><br />
      Often contagious and may recur.
      <ul>
        <li><strong>Herpes Simplex:</strong> Painful, grouped blisters on lips or genitals.</li>
        <li><strong>Warts (HPV):</strong> Thickened, rough skin growths.</li>
        <li><strong>Molluscum Contagiosum:</strong> Dome-shaped, pearly bumps with a dimple.</li>
      </ul>
    </li>
    <li>
      <strong>Parasitic Infections</strong>
      <ul>
        <li><strong>Scabies:</strong> Intense itching, burrows between fingers.</li>
        <li><strong>Cutaneous larva migrans:</strong> Creeping eruptions due to hookworm larvae.</li>
      </ul>
    </li>
  </ol>

  <h3>🖼️ Visual Suggestions</h3>
  <ul>
    <li>Collage: Images showing common skin infections—impetigo, ringworm, herpes, scabies.</li>
    <li>Infographic: <em>"Know Your Germs"</em> – Bacteria, Fungi, Viruses, Parasites with skin effects.</li>
  </ul>

  <h3>📍 Symptoms to Watch For</h3>
  <ul>
    <li>Redness, swelling, warmth</li>
    <li>Pain or itching</li>
    <li>Pus or drainage</li>
    <li>Crusting or scaling</li>
    <li>Fever (in some bacterial infections)</li>
    <li>Grouped blisters or ulcers</li>
  </ul>

  <h3>⚠️ When to Seek Medical Help</h3>
  <ul>
    <li>Rapidly spreading redness</li>
    <li>Painful, pus-filled lesions</li>
    <li>High fever or chills</li>
    <li>Recurring infections</li>
    <li>Infection in people with diabetes or weak immunity</li>
    <li>Signs of systemic illness (breathlessness, confusion)</li>
  </ul>

  <h3>💊 Treatments</h3>

  <h4>🔹 For Bacterial Infections:</h4>
  <ul>
    <li>Topical antibiotics: Mupirocin, fusidic acid</li>
    <li>Oral antibiotics: Flucloxacillin, cefalexin</li>
    <li>Drainage: For abscesses or boils</li>
  </ul>

  <h4>🔹 For Fungal Infections:</h4>
  <ul>
    <li>Antifungal creams: Clotrimazole, terbinafine</li>
    <li>Oral antifungals: Itraconazole, fluconazole (for extensive infection)</li>
  </ul>

  <h4>🔹 For Viral Infections:</h4>
  <ul>
    <li>Antivirals: Acyclovir (for herpes)</li>
    <li>Cryotherapy or salicylic acid: For warts</li>
    <li>Immunity boosters: In recurrent cases</li>
  </ul>

  <h4>🔹 For Parasitic Infections:</h4>
  <ul>
    <li>Scabicides: Permethrin, ivermectin</li>
    <li>Antiparasitic creams: For larva migrans</li>
  </ul>

  <h3>🛡️ Prevention Tips</h3>
  <ul>
    <li>Maintain good hygiene.</li>
    <li>Avoid sharing towels, razors, or clothes.</li>
    <li>Keep skin dry, especially in folds.</li>
    <li>Wear breathable fabrics.</li>
    <li>Treat wounds promptly.</li>
    <li>Manage diabetes or chronic skin diseases carefully.</li>
  </ul>

  <h3>❗ Myths vs. Facts</h3>
  <table>
    <thead>
      <tr><th>Myth</th><th>Fact</th></tr>
    </thead>
    <tbody>
      <tr>
        <td>Only dirty people get skin infections.</td>
        <td>Even clean skin can be infected due to breaks, weak immunity, or contact.</td>
      </tr>
      <tr>
        <td>All rashes are fungal.</td>
        <td>Many itchy skin conditions are bacterial, allergic, or autoimmune.</td>
      </tr>
      <tr>
        <td>You can treat any infection with antibiotic creams.</td>
        <td>Fungal and viral infections need different treatments.</td>
      </tr>
      <tr>
        <td>Once treated, skin infections don’t come back.</td>
        <td>Some (like herpes or fungal) can recur without good hygiene and care.</td>
      </tr>
    </tbody>
  </table>

  <h3>🌿 Lifestyle and Natural Tips</h3>
  <ul>
    <li><strong>Coconut oil:</strong> Natural antifungal and anti-inflammatory (use for mild fungal rashes).</li>
    <li><strong>Turmeric paste:</strong> May help with minor cuts due to antibacterial properties.</li>
    <li><strong>Neem wash:</strong> Traditionally used for fungal and bacterial prevention.</li>
    <li><strong>Tea tree oil:</strong> Effective against fungal infections (dilute before use).</li>
  </ul>
</section>

      <section className="quiz-section">
        <h2>🧠 Skin Infections Quiz — Test Your Knowledge!</h2>

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

export default SkinInfections;
