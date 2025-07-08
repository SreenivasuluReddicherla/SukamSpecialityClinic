import React, { useState } from 'react';
import './RP1InfertilityInsights.css';

const quizData = [
  {
    question: "What is a hernia?",
    options: [
      "Muscle spasm",
      "Organ enlargement",
      "Protrusion through a weak area in the muscle",
      "Fluid collection"
    ],
    answer: "Protrusion through a weak area in the muscle"
  },
  {
    question: "Which type of hernia is most common in males?",
    options: ["Umbilical", "Femoral", "Direct Inguinal", "Indirect Inguinal"],
    answer: "Indirect Inguinal"
  },
  {
    question: "Which hernia is most prone to strangulation?",
    options: ["Direct inguinal", "Femoral", "Hiatal", "Umbilical"],
    answer: "Femoral"
  },
  {
    question: "An irreducible hernia with vomiting suggests:",
    options: [
      "Incarcerated hernia",
      "Strangulated hernia",
      "Reducible hernia",
      "Epigastric hernia"
    ],
    answer: "Strangulated hernia"
  },
  {
    question: "Which investigation is best for internal or recurrent hernias?",
    options: ["X-ray", "CT Scan", "ECG", "MRI Brain"],
    answer: "CT Scan"
  },
  {
    question: "A patient with a previous surgery develops a new bulge. Likely diagnosis?",
    options: ["Spigelian hernia", "Incisional hernia", "Femoral hernia", "Hiatal hernia"],
    answer: "Incisional hernia"
  },
  {
    question: "Which of the following is NOT a risk factor for hernia?",
    options: ["Chronic cough", "Obesity", "Diabetes", "Constipation"],
    answer: "Diabetes"
  },
  {
    question: "What is the function of surgical mesh?",
    options: [
      "Absorbs fluid",
      "Prevents blood loss",
      "Reinforces the hernia defect",
      "Fights infection"
    ],
    answer: "Reinforces the hernia defect"
  },
  {
    question: "Which hernia appears at the belly button?",
    options: ["Femoral", "Umbilical", "Epigastric", "Inguinal"],
    answer: "Umbilical"
  },
  {
    question: "What is the preferred treatment for a strangulated hernia?",
    options: ["Antibiotics", "Watchful waiting", "Emergency surgery", "Painkillers"],
    answer: "Emergency surgery"
  },
  {
    question: "Which technique involves keyhole incisions?",
    options: [
      "Open hernia repair",
      "Laparoscopic hernia repair",
      "Direct closure",
      "Robotic splinting"
    ],
    answer: "Laparoscopic hernia repair"
  },
  {
    question: "Which hernia is more common in women?",
    options: ["Inguinal", "Femoral", "Epigastric", "Hiatal"],
    answer: "Femoral"
  },
  {
    question: "Hiatal hernia occurs through which structure?",
    options: ["Inguinal canal", "Abdominal wall", "Diaphragm", "Rectus sheath"],
    answer: "Diaphragm"
  },
  {
    question: "What is Hesselbach’s triangle associated with?",
    options: ["Femoral hernia", "Indirect hernia", "Direct inguinal hernia", "Umbilical hernia"],
    answer: "Direct inguinal hernia"
  },
  {
    question: "Strangulated hernia can lead to:",
    options: ["Pneumonia", "Sepsis", "Liver failure", "Stroke"],
    answer: "Sepsis"
  },
  {
    question: "Best imaging tool for femoral hernia:",
    options: ["Chest X-ray", "Ultrasound abdomen", "Colonoscopy", "ECG"],
    answer: "Ultrasound abdomen"
  },
  {
    question: "A hernia that returns back easily is:",
    options: ["Incarcerated", "Reducible", "Obstructed", "Strangulated"],
    answer: "Reducible"
  },
  {
    question: "Mesh hernioplasty is used in:",
    options: [
      "Non-surgical patients",
      "Only umbilical hernia",
      "All hernias needing reinforcement",
      "Diabetic hernias only"
    ],
    answer: "All hernias needing reinforcement"
  },
  {
    question: "Which muscle group forms the abdominal wall?",
    options: ["Gluteals", "Diaphragm", "Rectus abdominis", "Quadriceps"],
    answer: "Rectus abdominis"
  },
  {
    question: "Post-operative advice includes:",
    options: [
      "Resume lifting weights early",
      "Avoid constipation",
      "Ignore mild fever",
      "Restrict all activity for 6 months"
    ],
    answer: "Avoid constipation"
  }
];

const Hernia = () => {
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
      <h1>🟠 Hernia</h1>
      <p className="lead">“Understanding, Identifying, and Treating Abdominal Wall Defects”</p>

      <section className="info-section">
  <h3>🧠 What Exactly Is a Hernia?</h3>
  <p>
    A hernia occurs when an internal organ or tissue pushes through a weakened area in the
    surrounding muscle or fascia. It often presents as a visible or palpable bulge in the
    abdomen or groin. Hernias are mechanical defects that typically worsen over time and don’t
    heal spontaneously. While some stay painless and reducible, others can lead to emergencies
    like bowel strangulation if untreated.
  </p>

  <h3>📍 The Anatomy Behind a Hernia</h3>
  <p>
    The abdominal wall is composed of muscle and connective tissue that holds internal organs in
    place. When this wall weakens or tears, contents like the intestine can protrude outward,
    forming a hernial sac. The opening in the wall is termed the <strong>hernial orifice</strong>.
  </p>

  <h3>⚙️ How Does a Hernia Form?</h3>
  <ul>
    <li>Increased intra-abdominal pressure (e.g., heavy lifting, chronic cough, constipation)</li>
    <li>Weak abdominal muscles (aging, post-surgery, congenital defects)</li>
    <li>Defective collagen synthesis (genetic tissue weakness)</li>
  </ul>

  <h3>📚 Classification of Hernias</h3>
  <ul>
    <li><strong>Inguinal Hernia:</strong> Most common; appears in the groin area
      <ul>
        <li>Indirect – through inguinal canal (congenital)</li>
        <li>Direct – through Hesselbach’s triangle (abdominal wall weakness)</li>
        <li>More common in males</li>
      </ul>
    </li>
    <li><strong>Femoral Hernia:</strong> Below the groin fold; more frequent in females; higher strangulation risk</li>
    <li><strong>Umbilical Hernia:</strong> At the belly button; seen in infants, obese adults, and pregnant women</li>
    <li><strong>Epigastric Hernia:</strong> Midline above umbilicus, between sternum and belly button</li>
    <li><strong>Incisional Hernia:</strong> At the site of a previous surgery</li>
    <li><strong>Hiatal Hernia:</strong> Stomach slips through the diaphragm into chest</li>
    <li><strong>Spigelian / Obturator / Lumbar Hernia:</strong> Rare types, often detected only with imaging</li>
  </ul>

  <h3>🚨 Red Flags: Symptoms of a Hernia</h3>
  <ul>
    <li><strong>Local Signs:</strong> Bulge increasing with strain/cough, localized discomfort, heaviness</li>
    <li><strong>Complications:</strong>
      <ul>
        <li>Irreducibility – bulge can’t be pushed back in</li>
        <li>Obstruction – vomiting, abdominal distension</li>
        <li>Strangulation – severe pain, redness, fever, potential shock</li>
      </ul>
    </li>
  </ul>

  <h3>🔬 Diagnosis: How We Evaluate Hernias</h3>
  <ul>
    <li><strong>Clinical Examination:</strong> Cough impulse, palpation while standing</li>
    <li><strong>Ultrasound Abdomen:</strong> Great for superficial hernias</li>
    <li><strong>CT Scan:</strong> Preferred for complex, internal or recurrent hernias</li>
    <li><strong>Upper GI Endoscopy:</strong> Useful for suspected hiatal hernias</li>
  </ul>

  <h3>📈 Understanding Hernia Progression</h3>
  <table>
    <thead>
      <tr>
        <th>Stage</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Reducible</td>
        <td>Can be pushed back into place</td>
      </tr>
      <tr>
        <td>Irreducible</td>
        <td>Stuck outside but not painful</td>
      </tr>
      <tr>
        <td>Obstructed</td>
        <td>Contents trapped → vomiting, pain</td>
      </tr>
      <tr>
        <td>Strangulated</td>
        <td>Blood supply compromised → emergency</td>
      </tr>
    </tbody>
  </table>

  <h3>🛠️ Treatment Options</h3>
  <ul>
    <li><strong>1. Open Hernia Repair:</strong> Traditional incision technique; suitable for smaller hernias; mesh often used</li>
    <li><strong>2. Laparoscopic Hernia Repair:</strong> Minimally invasive; faster recovery; good for bilateral or recurrent hernias</li>
    <li><strong>3. Robotic Hernia Surgery:</strong> Advanced option; provides precision and minimal tissue trauma</li>
  </ul>

  <h3>🧵 Mesh Repair: Why and When?</h3>
  <p>
    Mesh is used to reinforce the weakened area and prevent recurrence. Modern meshes are safe,
    lightweight, and well-tolerated by the body.
  </p>

  <h3>⚠️ Complications if Untreated</h3>
  <ul>
    <li>Bowel strangulation and necrosis</li>
    <li>Chronic groin pain</li>
    <li>Cosmetic and functional concerns</li>
    <li>Incarceration and intestinal blockage</li>
    <li>Emotional and lifestyle impacts</li>
  </ul>

  <h3>🏃‍♂️ Lifestyle & Prevention Tips</h3>
  <ul>
    <li>Eat fiber-rich foods and stay hydrated to avoid constipation</li>
    <li>Maintain a healthy weight</li>
    <li>Avoid smoking to preserve tissue strength</li>
    <li>Lift correctly—use your legs, not your back</li>
    <li>Treat chronic coughs or asthma</li>
  </ul>

  <h3>🏥 At Sukam Speciality Clinic</h3>
  <ul>
    <li>✅ Consults with hernia repair specialists</li>
    <li>✅ Day-care laparoscopic hernia surgeries</li>
    <li>✅ Tailored mesh selection for optimal results</li>
    <li>✅ Post-op physiotherapy and pain management</li>
    <li>✅ Structured follow-up for long-term success</li>
  </ul>

  <h3>🧠 Myths vs Facts</h3>
  <table>
    <thead>
      <tr>
        <th>Myth</th>
        <th>Fact</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Hernia is only cosmetic</td>
        <td>It may cause serious complications if ignored</td>
      </tr>
      <tr>
        <td>Hernia forms from one-time lifting</td>
        <td>It develops over time due to existing weakness</td>
      </tr>
      <tr>
        <td>Mesh is unsafe</td>
        <td>Modern meshes are safe, tested, and effective</td>
      </tr>
      <tr>
        <td>All hernias hurt</td>
        <td>Many are painless until complications set in</td>
      </tr>
    </tbody>
  </table>

  <h3>❓Frequently Asked Questions</h3>
  <ul>
    <li><strong>Q1:</strong> Can a hernia heal without surgery?<br/>🩺 <em>No. Surgery is the only definitive treatment.</em></li>
    <li><strong>Q2:</strong> Is hernia surgery painful?<br/>🩺 <em>Minimally invasive methods result in mild, manageable discomfort.</em></li>
    <li><strong>Q3:</strong> Will I have a scar?<br/>🩺 <em>Laparoscopy leaves small scars; open surgery may leave a linear scar.</em></li>
    <li><strong>Q4:</strong> When can I resume work?<br/>🩺 <em>Most return within 7–10 days after laparoscopic repair.</em></li>
    <li><strong>Q5:</strong> Can hernias recur?<br/>🩺 <em>With expert repair and mesh use, recurrence is rare.</em></li>
  </ul>
</section>

      <section className="quiz-section">
        <h2>🧠 Quick Quiz — Hernia</h2>

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

export default Hernia;
