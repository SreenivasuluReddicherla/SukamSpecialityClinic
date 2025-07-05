import React, { useState } from 'react';
import './RP1InfertilityInsights.css';

const quizData = [
  {
    question: "What causes varicose veins?",
    options: ["Artery blockage", "Weak vein valves", "Thick blood", "High sugar levels"],
    answer: "Weak vein valves"
  },
  {
    question: "Common site for varicose veins is:",
    options: ["Hands", "Neck", "Legs", "Abdomen"],
    answer: "Legs"
  },
  {
    question: "Which is the gold standard test for diagnosis?",
    options: ["X-ray", "CT scan", "Doppler ultrasound", "Blood test"],
    answer: "Doppler ultrasound"
  },
  {
    question: "A serious complication of varicose veins is:",
    options: ["Migraine", "Ulcer formation", "Diabetes", "Appendicitis"],
    answer: "Ulcer formation"
  },
  {
    question: "Compression stockings work by:",
    options: ["Blocking the vein", "Enhancing blood flow", "Causing skin tightening", "Reducing nerve sensitivity"],
    answer: "Enhancing blood flow"
  },
  {
    question: "Which condition may mimic varicose veins?",
    options: ["Cellulitis", "DVT", "Eczema", "Fungal infection"],
    answer: "DVT"
  },
  {
    question: "Pregnancy increases varicose vein risk due to:",
    options: ["Low calcium", "Hormonal changes", "High blood sugar", "Anemia"],
    answer: "Hormonal changes"
  },
  {
    question: "Which of these is a minimally invasive option?",
    options: ["Ligation", "Stripping", "EVLT", "Open surgery"],
    answer: "EVLT"
  },
  {
    question: "Leg elevation helps by:",
    options: ["Improving arterial flow", "Increasing cholesterol", "Reducing venous pressure", "Raising blood pressure"],
    answer: "Reducing venous pressure"
  },
  {
    question: "Bulging blue/purple veins are called:",
    options: ["Capillaries", "Arteries", "Varicose veins", "Lymph nodes"],
    answer: "Varicose veins"
  },
  {
    question: "Which exercise is best for vein health?",
    options: ["Weight lifting", "Running uphill", "Walking", "High jumping"],
    answer: "Walking"
  },
  {
    question: "Which lifestyle habit worsens varicose veins?",
    options: ["Walking", "Standing for long hours", "Yoga", "Cycling"],
    answer: "Standing for long hours"
  },
  {
    question: "Venous ulcers are usually seen on:",
    options: ["Abdomen", "Shin area", "Ankle and lower leg", "Heel"],
    answer: "Ankle and lower leg"
  },
  {
    question: "The main role of veins is to:",
    options: ["Pump blood", "Carry oxygen", "Carry blood to the heart", "Regulate blood pressure"],
    answer: "Carry blood to the heart"
  },
  {
    question: "Which vitamin is especially good for vein health?",
    options: ["Vitamin C", "Vitamin D", "Vitamin B12", "Vitamin A"],
    answer: "Vitamin C"
  },
  {
    question: "Which treatment uses sound or heat waves?",
    options: ["Phlebectomy", "Sclerotherapy", "Radiofrequency ablation", "Bloodletting"],
    answer: "Radiofrequency ablation"
  },
  {
    question: "Varicose veins usually worsen with:",
    options: ["Rest", "Cold temperatures", "Obesity", "High altitude"],
    answer: "Obesity"
  },
  {
    question: "Tight clothes affect veins by:",
    options: ["Increasing heart rate", "Reducing vein elasticity", "Blocking blood return", "Enhancing muscle mass"],
    answer: "Blocking blood return"
  },
  {
    question: "When should a patient with varicose veins see a doctor urgently?",
    options: ["For cosmetic opinion", "If there's itching", "If there's sudden swelling or pain", "After walking"],
    answer: "If there's sudden swelling or pain"
  },
  {
    question: "The medical term for blood clots in superficial veins is:",
    options: ["Cellulitis", "Thrombophlebitis", "Erythema", "Hyperpigmentation"],
    answer: "Thrombophlebitis"
  }
];


const VaricoseVeins = () => {
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
      <h1>🟠 Varicose Veins</h1>
      <p className="lead">“Veins that wind, bulge, and beg for relief.”</p>

      <section className="info-section">
  <h3>📌 Introduction</h3>
  <p>
    Varicose veins are enlarged, twisted, and swollen veins, commonly seen in the legs and feet. They result from weakened vein walls and faulty valves that allow blood to pool instead of flowing upward toward the heart.
    While often dismissed as a cosmetic concern, varicose veins can cause discomfort, leg heaviness, and lead to ulcers, bleeding, or deep vein thrombosis (DVT) if left untreated.
  </p>

  <h3>🩸 Why Do Varicose Veins Occur?</h3>
  <p>
    Healthy leg veins have one-way valves that keep blood moving upward. When these valves become weak or damaged, blood flows backward and collects in the vein—causing it to stretch and bulge.
  </p>

  <h4>📌 Common Causes:</h4>
  <ul>
    <li>Heredity (family history)</li>
    <li>Prolonged standing or sitting</li>
    <li>Obesity</li>
    <li>Pregnancy</li>
    <li>Hormonal changes</li>
    <li>Age over 40</li>
    <li>Chronic constipation (straining)</li>
  </ul>

  <h3>🩻 Symptoms of Varicose Veins</h3>
  <table>
    <thead>
      <tr>
        <th>Common Symptoms</th>
        <th>Serious Indicators</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Aching or heavy legs</td>
        <td>Skin discoloration near ankle</td>
      </tr>
      <tr>
        <td>Visible, bulging blue or purple veins</td>
        <td>Leg ulcers</td>
      </tr>
      <tr>
        <td>Burning, throbbing, or cramping</td>
        <td>Spontaneous bleeding from veins</td>
      </tr>
      <tr>
        <td>Itching over the veins</td>
        <td>Swelling with redness (possible DVT)</td>
      </tr>
    </tbody>
  </table>

  <h3>🖼️ Visual Suggestions</h3>
  <ul>
    <li>Diagram: Cross-section of a normal vs. varicose vein showing faulty valves.</li>
    <li>Photo grid: Mild to severe varicose veins with skin changes and ulcers.</li>
  </ul>

  <h3>🔍 Diagnosis</h3>
  <ul>
    <li><strong>Clinical Examination:</strong> Visual inspection while standing.</li>
    <li><strong>Venous Doppler Ultrasound:</strong> Gold standard for assessing valve function and vein blockage.</li>
    <li><strong>Venous Reflux Study:</strong> Measures backward flow in veins.</li>
  </ul>

  <h3>💊 Treatment Options</h3>
  <ol>
    <li>
      <strong>Conservative Management</strong>
      <ul>
        <li>Compression stockings: Improves circulation and reduces symptoms.</li>
        <li>Leg elevation: Reduces pressure and swelling.</li>
        <li>Weight loss: Relieves pressure on leg veins.</li>
        <li>Exercise (walking, calf raises): Boosts venous return.</li>
      </ul>
    </li>
    <li>
      <strong>Minimally Invasive Procedures</strong>
      <ul>
        <li>Sclerotherapy: Injection of a solution to close small veins.</li>
        <li>Endovenous Laser Treatment (EVLT): Uses laser to seal larger veins.</li>
        <li>Radiofrequency Ablation (RFA): Heat seals the vein via a catheter.</li>
        <li>Foam sclerotherapy: Used for larger varicose veins.</li>
      </ul>
    </li>
    <li>
      <strong>Surgical Treatment</strong>
      <ul>
        <li>Ligation and stripping: Tying off and removing damaged veins.</li>
        <li>Phlebectomy: Removal of superficial veins through tiny skin incisions.</li>
      </ul>
    </li>
  </ol>

  <h3>🦵 Self-Care and Daily Tips</h3>
  <ul>
    <li>Avoid standing for long periods.</li>
    <li>Do not cross your legs while sitting.</li>
    <li>Keep legs elevated when resting.</li>
    <li>Avoid tight clothing around thighs.</li>
    <li>Stay physically active.</li>
  </ul>

  <h3>❗ Complications (if untreated)</h3>
  <ul>
    <li>Chronic venous insufficiency</li>
    <li>Skin pigmentation or eczema</li>
    <li>Venous ulcers (non-healing sores)</li>
    <li>Bleeding varicosities</li>
    <li>Superficial thrombophlebitis</li>
    <li>Deep vein thrombosis (DVT)</li>
  </ul>

  <h3>✅ Prevention Tips</h3>
  <ul>
    <li>Maintain healthy body weight.</li>
    <li>Walk regularly.</li>
    <li>Wear compression stockings during travel or long hours of standing.</li>
    <li>Avoid high heels for extended periods.</li>
    <li>Stay hydrated and prevent constipation.</li>
  </ul>

  <h3>🧠 Myths vs. Facts</h3>
  <table>
    <thead>
      <tr>
        <th>Myth</th>
        <th>Fact</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Only old people get varicose veins.</td>
        <td>It can affect young adults, especially with genetic risk or pregnancy.</td>
      </tr>
      <tr>
        <td>It's only a cosmetic issue.</td>
        <td>Untreated cases may lead to ulcers, pain, and clots.</td>
      </tr>
      <tr>
        <td>Surgery is the only treatment.</td>
        <td>Many minimally invasive options exist now.</td>
      </tr>
      <tr>
        <td>Exercise worsens varicose veins.</td>
        <td>Moderate exercise actually helps circulation.</td>
      </tr>
    </tbody>
  </table>
</section>


      <section className="quiz-section">
        <h2>🧠 Varicose Veins Quiz — Test Your Knowledge!</h2>

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

export default VaricoseVeins;
