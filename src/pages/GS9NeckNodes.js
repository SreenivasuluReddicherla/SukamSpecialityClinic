import React, { useState } from 'react';
import './RP1InfertilityInsights.css';

const quizData = [
  {
    question: "What is the main function of lymph nodes?",
    options: [
      "Pump blood",
      "Filter waste",
      "Trap and destroy pathogens",
      "Carry oxygen"
    ],
    answer: "Trap and destroy pathogens"
  },
  {
    question: "Most common cause of neck node enlargement is:",
    options: [
      "Cancer",
      "Fungal infection",
      "Viral or bacterial infection",
      "Tuberculosis"
    ],
    answer: "Viral or bacterial infection"
  },
  {
    question: "A painless, hard, fixed node could suggest:",
    options: [
      "Flu",
      "Tooth infection",
      "Metastatic cancer",
      "Thyroid cyst"
    ],
    answer: "Metastatic cancer"
  },
  {
    question: "FNAC helps in diagnosing:",
    options: [
      "Hearing loss",
      "Lymph node cause",
      "Sinus infection",
      "Allergy"
    ],
    answer: "Lymph node cause"
  },
  {
    question: "Matted nodes in the neck are commonly seen in:",
    options: [
      "Dengue",
      "Tuberculosis",
      "Sinusitis",
      "Hyperthyroidism"
    ],
    answer: "Tuberculosis"
  },
  {
    question: "A tender, warm, soft neck node usually suggests:",
    options: [
      "Cancer",
      "Viral infection",
      "Stroke",
      "Neck sprain"
    ],
    answer: "Viral infection"
  },
  {
    question: "Which investigation is first preferred for evaluating a neck swelling?",
    options: [
      "MRI",
      "X-ray",
      "Ultrasound",
      "Colonoscopy"
    ],
    answer: "Ultrasound"
  },
  {
    question: "Which of the following is NOT a worrying sign?",
    options: [
      "Gradual increase in size",
      "Fixed node",
      "Node present <1 week",
      "Hoarseness with node"
    ],
    answer: "Node present <1 week"
  },
  {
    question: "Which infection is often linked to persistent neck nodes in TB-endemic countries?",
    options: [
      "Hepatitis",
      "Tuberculosis",
      "Dengue",
      "Malaria"
    ],
    answer: "Tuberculosis"
  },
  {
    question: "A person with neck swelling and night sweats might have:",
    options: [
      "Allergy",
      "Asthma",
      "Lymphoma",
      "Appendicitis"
    ],
    answer: "Lymphoma"
  },
  {
    question: "Which test helps confirm tuberculosis in lymph nodes?",
    options: [
      "ECG",
      "Mantoux/IGRA",
      "Liver function",
      "CT Brain"
    ],
    answer: "Mantoux/IGRA"
  },
  {
    question: "Reactive lymph nodes are typically:",
    options: [
      "Hard and fixed",
      "Enlarged due to systemic response",
      "Cancerous",
      "Very painful"
    ],
    answer: "Enlarged due to systemic response"
  },
  {
    question: "What is the most common level of cervical nodes affected by oral cancer?",
    options: [
      "Level I",
      "Level IV",
      "Level VI",
      "Level VII"
    ],
    answer: "Level I"
  },
  {
    question: "Which age group most commonly presents with infectious cervical nodes?",
    options: [
      "Infants",
      "Children",
      "Elderly",
      "Pregnant women"
    ],
    answer: "Children"
  },
  {
    question: "Lymphoma often presents with:",
    options: [
      "Rash",
      "Painful swelling",
      "Painless lymphadenopathy",
      "Yellowing of eyes"
    ],
    answer: "Painless lymphadenopathy"
  },
  {
    question: "Core biopsy is used when:",
    options: [
      "FNAC is inconclusive",
      "Patient refuses blood test",
      "To check fever",
      "For ear infection"
    ],
    answer: "FNAC is inconclusive"
  },
  {
    question: "Cat scratch disease causes enlarged nodes due to:",
    options: [
      "Virus",
      "Bartonella henselae bacteria",
      "Fungus",
      "Mites"
    ],
    answer: "Bartonella henselae bacteria"
  },
  {
    question: "Dental infections often cause:",
    options: [
      "Ear node swelling",
      "Submandibular lymphadenopathy",
      "Lung swelling",
      "Vocal cord weakness"
    ],
    answer: "Submandibular lymphadenopathy"
  },
  {
    question: "Sarcoidosis may cause neck node swelling with:",
    options: [
      "Dry cough and joint pain",
      "High BP",
      "Jaundice",
      "Low blood sugar"
    ],
    answer: "Dry cough and joint pain"
  },
  {
    question: "Which specialist usually deals with persistent neck swellings?",
    options: [
      "Cardiologist",
      "ENT Surgeon",
      "Neurologist",
      "Dermatologist"
    ],
    answer: "ENT Surgeon"
  }
];

const NeckNodes = () => {
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
      <h1>🟠 Neck Nodes</h1>
      <p className="lead">“Swollen glands with stories to tell.”</p>

      <section className="info-section">
  <h3>🔍 What Are Neck Nodes?</h3>
  <p>
    The term “neck nodes” refers to enlarged lymph nodes in the neck. Lymph nodes are small, bean-shaped immune organs that filter harmful substances and help fight infections.
    When they become swollen or tender, it's usually due to infections, inflammation, or, less commonly, cancers.
    While most neck swellings are benign and self-limiting, persistent, hard, or painless lymph node enlargements should be properly evaluated to rule out more serious conditions.
  </p>

  <h3>🧬 Functions of Lymph Nodes</h3>
  <ul>
    <li>Trap and destroy bacteria and viruses</li>
    <li>Transport immune cells throughout the body</li>
    <li>Filter lymph fluid before it returns to the bloodstream</li>
  </ul>
  <p>
    There are over 300 lymph nodes in the head and neck region—classified into different levels (I to VII) based on their anatomical location.
  </p>

  <h3>🦠 Common Causes of Neck Node Enlargement</h3>
  <table>
    <thead>
      <tr><th>Type</th><th>Possible Causes</th></tr>
    </thead>
    <tbody>
      <tr><td>Infectious</td><td>Viral (cold, flu, EBV), Bacterial (tonsillitis, TB), Fungal</td></tr>
      <tr><td>Reactive/Inflammatory</td><td>Allergies, autoimmune diseases (like lupus)</td></tr>
      <tr><td>Neoplastic (Cancerous)</td><td>Lymphoma, metastatic head & neck cancers, leukemia</td></tr>
      <tr><td>Others</td><td>Sarcoidosis, medications, cat-scratch disease</td></tr>
    </tbody>
  </table>

  <h3>⚠️ When to Worry About a Neck Node?</h3>
  <table>
    <thead>
      <tr><th>Benign Signs</th><th>Concerning Signs</th></tr>
    </thead>
    <tbody>
      <tr><td>Soft, tender, mobile</td><td>Hard, fixed, painless</td></tr>
      <tr><td>Appears suddenly</td><td>Gradually enlarges over weeks</td></tr>
      <tr><td>Redness or warmth</td><td>Associated with weight loss or night sweats</td></tr>
      <tr><td>Resolves in 2–3 weeks</td><td>Persists beyond 3 weeks without change</td></tr>
      <tr><td>Occurs during cold or infection</td><td>Found without clear cause or systemic symptoms</td></tr>
    </tbody>
  </table>

  <h3>🤒 Symptoms That May Accompany Neck Nodes</h3>
  <ul>
    <li>Fever and chills</li>
    <li>Sore throat or ear pain</li>
    <li>Tooth or gum infections</li>
    <li>Night sweats</li>
    <li>Fatigue or weight loss</li>
    <li>Hoarseness or voice change</li>
    <li>Difficulty swallowing or breathing</li>
  </ul>

  <h3>🧪 How We Evaluate Neck Node Swellings</h3>
  <p>At [Your Clinic Name], we take a stepwise and structured approach:</p>
  <ol>
    <li><strong>Detailed History and Physical Examination</strong><br />Node size, texture, mobility, and location are evaluated along with signs of infection or systemic illness.</li>
    <li><strong>Blood Investigations</strong><br />CBC, ESR, CRP, tuberculosis tests (Mantoux/IGRA), autoimmune screening if required.</li>
    <li><strong>Neck Ultrasound</strong><br />To assess size, vascularity, internal structure, and suspicious features.</li>
    <li><strong>FNAC (Fine Needle Aspiration Cytology)</strong><br />Quick, minimally invasive test to check for infection or malignancy.</li>
    <li><strong>Further Imaging</strong><br />CT/MRI if deeper or multiple suspicious nodes are found.</li>
    <li><strong>Biopsy (if needed)</strong><br />Core/excisional biopsy if FNAC is inconclusive or suspicion is high.</li>
  </ol>

  <h3>📊 Possible Diagnoses Based on Evaluation</h3>
  <table>
    <thead>
      <tr><th>Finding</th><th>Likely Diagnosis</th></tr>
    </thead>
    <tbody>
      <tr><td>Tender, soft node + fever</td><td>Viral or bacterial infection</td></tr>
      <tr><td>Hard, fixed node + weight loss</td><td>Metastatic cancer or lymphoma</td></tr>
      <tr><td>Multiple enlarged nodes + fatigue</td><td>Infectious mononucleosis or leukemia</td></tr>
      <tr><td>Matted lymph nodes + TB exposure</td><td>Tubercular lymphadenitis</td></tr>
    </tbody>
  </table>

  <h3>💊 Treatment Depends on the Cause</h3>
  <table>
    <thead>
      <tr><th>Diagnosis</th><th>Management</th></tr>
    </thead>
    <tbody>
      <tr><td>Bacterial infection</td><td>Antibiotics and rest</td></tr>
      <tr><td>Tuberculosis (TB)</td><td>Full 6-month ATT regimen</td></tr>
      <tr><td>Viral cause</td><td>Supportive care only</td></tr>
      <tr><td>Lymphoma or cancer</td><td>Referral to oncology for staging and treatment</td></tr>
      <tr><td>Reactive nodes</td><td>Watchful waiting, treat underlying trigger</td></tr>
    </tbody>
  </table>

  <h3>🏥 At Our Clinic: Neck Node Care Pathway</h3>
  <p><strong>✅ Our 7-Step Approach:</strong></p>
  <ol>
    <li>Quick & compassionate history + exam</li>
    <li>On-site blood tests and neck ultrasound</li>
    <li>ENT, dental, and systemic cause evaluation</li>
    <li>Same-day FNAC (if indicated)</li>
    <li>TB screening, autoimmune panel if needed</li>
    <li>Tailored treatment (antibiotics, referral, or follow-up)</li>
    <li>Clear follow-up plan to re-evaluate non-resolving swellings</li>
  </ol>
  <p>We prioritize accurate diagnosis, timely referrals, and patient reassurance, minimizing unnecessary worry or delay.</p>

  <h3>❗ Complications of Ignoring Persistent Neck Nodes</h3>
  <ul>
    <li>Spread of infection or abscess formation</li>
    <li>Missed diagnosis of tuberculosis or lymphoma</li>
    <li>Airway compression (rare)</li>
    <li>Delay in cancer detection</li>
  </ul>

  <h3>🧠 Myths vs. Facts</h3>
  <table>
    <thead>
      <tr><th>Myth</th><th>Fact</th></tr>
    </thead>
    <tbody>
      <tr><td>Neck nodes always mean cancer</td><td>Over 90% are due to infection or benign causes</td></tr>
      <tr><td>If one node is big, surgery is always needed</td><td>Most cases resolve without surgery</td></tr>
      <tr><td>Antibiotics cure all neck swellings</td><td>Not effective for viral or autoimmune causes</td></tr>
      <tr><td>You can ignore it if it doesn’t hurt</td><td>Painless nodes can still be serious</td></tr>
    </tbody>
  </table>
</section>


      <section className="quiz-section">
        <h2>🧠 Neck Nodes Quiz — Test Your Knowledge!</h2>

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

export default NeckNodes;
