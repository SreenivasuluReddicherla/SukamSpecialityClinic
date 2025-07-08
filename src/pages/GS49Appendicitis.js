
import React, { useState } from 'react';
import './RP1InfertilityInsights.css';

const quizData = [
  {
    question: "Appendicitis is inflammation of:",
    options: ["Gallbladder", "Small intestine", "Appendix", "Kidney"],
    answer: "Appendix"
  },
  {
    question: "Classic location of pain is:",
    options: ["Right lower abdomen", "Left upper abdomen", "Behind chest", "Lower back"],
    answer: "Right lower abdomen"
  },
  {
    question: "First symptom is usually:",
    options: ["Bloody diarrhea", "Nausea", "Central abdominal pain", "Constipation"],
    answer: "Central abdominal pain"
  },
  {
    question: "The danger of untreated appendicitis:",
    options: ["Vomiting", "Rupture", "Migraine", "Pneumonia"],
    answer: "Rupture"
  },
  {
    question: "Appendicitis often requires:",
    options: ["Bed rest", "Appendectomy", "Dialysis", "Liver transplant"],
    answer: "Appendectomy"
  },
  {
    question: "A common test to support diagnosis:",
    options: ["ECG", "Ultrasound", "X-ray chest", "Skin biopsy"],
    answer: "Ultrasound"
  },
  {
    question: "Appendicitis in elderly is often:",
    options: ["Easy to detect", "Rapidly fatal", "Painless", "Vague and subtle"],
    answer: "Vague and subtle"
  },
  {
    question: "McBurney’s point is:",
    options: ["On the chest", "Right lower abdomen", "Behind ear", "Under foot"],
    answer: "Right lower abdomen"
  },
  {
    question: "A surgical emergency:",
    options: ["UTI", "Acute appendicitis", "IBS", "Hernia without pain"],
    answer: "Acute appendicitis"
  },
  {
    question: "Pain aggravated by:",
    options: ["Lying down", "Coughing", "Eating sweets", "Taking antacids"],
    answer: "Coughing"
  },
  {
    question: "Lab sign in appendicitis:",
    options: ["Low WBC", "High platelets", "Elevated WBC", "Anemia"],
    answer: "Elevated WBC"
  },
  {
    question: "A CT scan is:",
    options: ["Avoided always", "Diagnostic", "Not useful", "Replaced by MRI"],
    answer: "Diagnostic"
  },
  {
    question: "In children, diagnosis is best made with:",
    options: ["Endoscopy", "Ultrasound", "PET scan", "Colonoscopy"],
    answer: "Ultrasound"
  },
  {
    question: "Early treatment prevents:",
    options: ["Ulcer", "Appendicular rupture", "Heart disease", "TB"],
    answer: "Appendicular rupture"
  },
  {
    question: "Laparoscopic appendectomy benefit:",
    options: ["No anesthesia", "Longer stay", "Early recovery", "More pain"],
    answer: "Early recovery"
  },
  {
    question: "Antibiotics alone may be used when:",
    options: ["Late rupture", "Mild early cases", "Cancer", "Appendectomy refused"],
    answer: "Mild early cases"
  },
  {
    question: "Most common age group:",
    options: ["Infants", "Adolescents and young adults", "Elderly", "Neonates"],
    answer: "Adolescents and young adults"
  },
  {
    question: "False about appendix:",
    options: ["Essential for digestion", "Can get inflamed", "Can rupture", "May be removed surgically"],
    answer: "Essential for digestion"
  },
  {
    question: "Psoas sign indicates:",
    options: ["Liver issue", "Appendix irritation", "Kidney problem", "Gallbladder stone"],
    answer: "Appendix irritation"
  },
  {
    question: "Appendix location in pregnancy may:",
    options: ["Remain same", "Shift upward", "Disappear", "Rotate to left side"],
    answer: "Shift upward"
  }
];

const Appendicitis = () => {
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
      <h1>🔵 Appendicitis</h1>
      <p className="lead">“When a tiny organ causes big trouble in your belly.”</p>

      <section className="info-section">
  <h3>🩺 What Really Happens?</h3>
  <p>
    Appendicitis is the inflammation of the appendix, a small, finger-like pouch attached to the
    beginning of the large intestine. Though its function is limited, when it gets blocked and
    inflamed, it can cause severe abdominal pain, and if left untreated, can burst (rupture) —
    leading to life-threatening complications like peritonitis or abscess.
  </p>

  <h3>⚠️ How It Starts and Escalates</h3>
  <ul>
    <li>Hardened stool (fecalith)</li>
    <li>Lymphoid hyperplasia (often in young people)</li>
    <li>Parasites (rare)</li>
    <li>Tumors or foreign bodies</li>
  </ul>
  <p>
    Once blocked, the appendix swells, gets infected, and begins to fill with pus. Without timely
    treatment, it may rupture, spreading infection into the abdomen.
  </p>

  <h3>🤒 What Do Patients Usually Feel?</h3>
  <p>Appendicitis can begin subtly or dramatically. The classic pain starts around the belly button, then moves to the lower right side (<strong>McBurney's point</strong>). But symptoms can vary depending on age, gender, and position of the appendix.</p>
  <ul>
    <li>Sudden pain near the belly button, later localizing to the right lower abdomen</li>
    <li>Worsens with walking, coughing, or jarring movements</li>
    <li>Loss of appetite</li>
    <li>Nausea and vomiting</li>
    <li>Low-grade fever</li>
    <li>Constipation or diarrhea (in some cases)</li>
    <li>Children: irritability, refusal to eat, lethargy</li>
    <li>Elderly: vague discomfort, minimal fever, often misdiagnosed</li>
  </ul>

  <h3>🔬 How Doctors Pinpoint It</h3>
  <ul>
    <li>Physical exam: Rebound tenderness, guarding, Rovsing’s sign, psoas sign</li>
    <li>Blood tests: Elevated white blood cells (WBC), CRP</li>
    <li>Ultrasound: First choice in children and pregnancy</li>
    <li>CT scan of the abdomen: Most accurate tool in adults</li>
    <li>Urinalysis: Helps rule out urinary infections</li>
    <li>Pregnancy test in females: To exclude ectopic pregnancy</li>
  </ul>

  <h3>🚨 When Things Go Wrong</h3>
  <ul>
    <li>Rupture → spilling infected material into the abdomen</li>
    <li>Peritonitis → widespread infection of the abdominal cavity</li>
    <li>Appendicular abscess or mass</li>
    <li>Sepsis, especially in elderly or immunocompromised patients</li>
  </ul>

  <h3>🏥 How It’s Treated</h3>
  <table>
    <thead>
      <tr>
        <th>Treatment Option</th>
        <th>Notes</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Open Appendectomy</td>
        <td>Traditional approach via lower abdominal incision</td>
      </tr>
      <tr>
        <td>Laparoscopic Appendectomy</td>
        <td>Minimally invasive, faster recovery, less pain</td>
      </tr>
      <tr>
        <td>Antibiotic-first approach</td>
        <td>Sometimes used in very early/mild cases or when surgery is delayed</td>
      </tr>
      <tr>
        <td>Drainage of abscess</td>
        <td>If collection is already formed before surgery</td>
      </tr>
    </tbody>
  </table>
  <p>Pain relief, fluids, and antibiotics are given pre- and post-operatively.</p>

  <h3>🏨 At Our Clinic</h3>
  <ul>
    <li>✅ Timely identification with focused clinical and ultrasound evaluation</li>
    <li>✅ Emergency care for acute abdomen cases</li>
    <li>✅ On-site labs and Ultrasound</li>
    <li>✅ Same-day laparoscopic surgery with early discharge options</li>
    <li>✅ Pediatric and elderly-specific protocols</li>
    <li>✅ Patient follow-up for recovery and scar care</li>
  </ul>

  <h3>🧠 Myths vs Truths</h3>
  <table>
    <thead>
      <tr>
        <th>Myth</th>
        <th>Truth</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>"Appendix pain is always on the right side."</td>
        <td>Sometimes it can be central or left-sided in pregnancy or rotated appendix.</td>
      </tr>
      <tr>
        <td>"You can manage appendicitis at home."</td>
        <td>Delay increases risk of rupture and complications.</td>
      </tr>
      <tr>
        <td>"Once removed, digestion is affected."</td>
        <td>No — the appendix has no critical digestive function.</td>
      </tr>
      <tr>
        <td>"Painkillers will fix it."</td>
        <td>They may mask symptoms, delaying proper care.</td>
      </tr>
    </tbody>
  </table>

  <h3>👩‍👧 Community Awareness Points</h3>
  <ul>
    <li>✅ Don’t ignore belly pain lasting more than 4–6 hours</li>
    <li>✅ In children, signs may include crying, fever, and poor feeding</li>
    <li>✅ Women of reproductive age may need to exclude ovarian or ectopic issues</li>
    <li>✅ Immediate care = safer surgery and quicker recovery</li>
  </ul>
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

export default Appendicitis;
