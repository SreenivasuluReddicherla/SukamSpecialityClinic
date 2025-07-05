import React, { useState } from 'react';
import './RP1InfertilityInsights.css';

const quizData = [
  {
    question: "At what age range does menarche typically occur?",
    options: ["6–8 years", "9–15 years", "16–20 years", "18–25 years"],
    answer: "9–15 years"
  },
  {
    question: "Which hormone primarily surges during the first half of the menstrual cycle?",
    options: ["Progesterone", "Estrogen", "Testosterone", "Cortisol"],
    answer: "Estrogen"
  },
  {
    question: "Irregular cycles in teenage years are usually due to:",
    options: ["Thyroid cancer", "Fully established ovulation", "Immature hormonal axis", "Poor hygiene"],
    answer: "Immature hormonal axis"
  },
  {
    question: "Which is NOT a symptom of PCOD?",
    options: ["Acne", "Sudden weight loss", "Irregular periods", "Hirsutism (excess hair growth)"],
    answer: "Sudden weight loss"
  },
  {
    question: "The most fertile period in a woman’s life is usually:",
    options: ["10–20 years", "20–30 years", "30–40 years", "After 40"],
    answer: "20–30 years"
  },
  {
    question: "Basal body temperature rises after:",
    options: ["Menstruation", "Ovulation", "Estrogen drop", "Contraceptive use"],
    answer: "Ovulation"
  },
  {
    question: "Which of the following is a long-term contraceptive?",
    options: ["Emergency pill", "Male condom", "Copper IUD", "Cervical cap"],
    answer: "Copper IUD"
  },
  {
    question: "Which vitamin is recommended during preconception?",
    options: ["Vitamin A", "Vitamin C", "Folic acid", "Calcium"],
    answer: "Folic acid"
  },
  {
    question: "A common side effect of oral contraceptive pills is:",
    options: ["Increased height", "Breast tenderness", "Hearing loss", "Vision improvement"],
    answer: "Breast tenderness"
  },
  {
    question: "Which of the following is a natural method of contraception?",
    options: ["Vaginal ring", "Calendar method", "IUD", "Patch"],
    answer: "Calendar method"
  },
  {
    question: "The hormone responsible for ovulation is:",
    options: ["FSH", "LH", "Estrogen", "Cortisol"],
    answer: "LH"
  },
  {
    question: "Menstrual hygiene products include all except:",
    options: ["Tampons", "Menstrual cups", "Reusable pads", "Sterile gloves"],
    answer: "Sterile gloves"
  },
  {
    question: "PCOD is primarily associated with:",
    options: ["Hypothyroidism", "Estrogen deficiency", "Insulin resistance", "Low iron"],
    answer: "Insulin resistance"
  },
  {
    question: "Which symptom is common during PMS?",
    options: ["Hair loss", "Joint dislocation", "Mood swings", "Itching"],
    answer: "Mood swings"
  },
  {
    question: "Anovulatory cycles mean:",
    options: ["Periods without ovulation", "Periods with bleeding only once a year", "Periods during pregnancy", "No menstruation"],
    answer: "Periods without ovulation"
  },
  {
    question: "Which hormone is dominant in the second half of the cycle?",
    options: ["Estrogen", "Progesterone", "Testosterone", "Oxytocin"],
    answer: "Progesterone"
  },
  {
    question: "Which of these can worsen PCOS?",
    options: ["Healthy fats", "Excessive sugar", "Balanced exercise", "High fiber"],
    answer: "Excessive sugar"
  },
  {
    question: "The first menstrual cycle is called:",
    options: ["Ovulation", "Menopause", "Menarche", "Dysmenorrhea"],
    answer: "Menarche"
  },
  {
    question: "Cervical mucus during ovulation is usually:",
    options: ["Thick and dry", "Clear and stretchy", "Milky and clumpy", "None of the above"],
    answer: "Clear and stretchy"
  },
  {
    question: "Sukam Speciality Clinic offers which of the following?",
    options: ["Teen menstrual workshops", "Only surgical care", "Men-only counseling", "None of the above"],
    answer: "Teen menstrual workshops"
  }
];


const MenarcheToMenopause = () => {
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
      <h1>🌿 Menarche to Menopausal Care</h1>
      <p className="lead">“From first flow to final pause – complete care.”</p>

      <section className="info-section">
  <h3>🎀 Introduction — Celebrating the Journey of Womanhood</h3>
  <p>
    The journey from menarche to menopause is one of the most remarkable biological and emotional transformations 
    a woman undergoes. Spanning nearly four decades of hormonal, physical, reproductive, emotional, and societal shifts, 
    this path defines much more than just fertility. It is the rhythm of a woman’s body, echoing resilience, cycles, growth, and wisdom.
  </p>
  <p>
    At <strong>Sukam Speciality Clinic and Fertility Centre</strong>, we celebrate every phase—from the first period to the graceful arrival of menopause—
    with care, compassion, education, and clinical precision.
  </p>

  <h3>🩸 Menarche — More Than Just the First Period</h3>
  <ul>
    <li><strong>Typical age:</strong> 9–15 years</li>
    <li><strong>Signals:</strong> Hormonal surge, breast growth, body hair, mood shifts</li>
    <li><strong>Experience:</strong> Confusion, curiosity, cultural emotions</li>
  </ul>
  <p><strong>Sukam Support:</strong> Period education kits, hygiene guides, parent-teen workshops</p>

  <h3>🌿 Navigating Adolescence — Hormones in High Gear</h3>
  <ul>
    <li><strong>Challenges:</strong> Painful periods, social discomfort, hormonal acne</li>
    <li><strong>Teen PCOD Signs:</strong> Weight gain, facial hair, acne</li>
    <li><strong>Tools:</strong> Menstrual tracking apps, gyne consults, lifestyle kits</li>
  </ul>

  <h3>🌼 Reproductive Bloom — 20s to 30s</h3>
  <ul>
    <li><strong>Priorities:</strong> Fertility awareness, ovulation tracking</li>
    <li><strong>Concerns:</strong> PCOS, fibroids, endometriosis, PMDD</li>
    <li><strong>Our Role:</strong> Fertility workshops, wellness planning, conception guidance</li>
  </ul>

  <h3>🛡️ Contraception — Informed Choices, Confident Steps</h3>
  <ul>
    <li><strong>Short-term:</strong> Condoms, pills</li>
    <li><strong>Long-term:</strong> IUDs, implants</li>
    <li><strong>Natural:</strong> Rhythm, mucus tracking</li>
  </ul>
  <p><strong>Sukam Offers:</strong> Life-stage contraceptive counseling, postpartum options, open Q&A lines</p>

  <h3>🌱 Planning for Pregnancy — Creating the Right Soil</h3>
  <ul>
    <li><strong>Tests:</strong> Thyroid, hemoglobin, sugar, rubella, hepatitis, varicella</li>
    <li><strong>Prepping:</strong> Folic acid, medication reviews, emotional readiness</li>
    <li><strong>Sukam Services:</strong> Preconception cleanse, fertility mapping, couple consults</li>
  </ul>

  <h3>🤰 Pregnancy — When the Body Becomes a Universe</h3>
  <ul>
    <li><strong>First Trimester:</strong> Fatigue, nausea, emotional swings</li>
    <li><strong>Second:</strong> Stability, appetite, glow</li>
    <li><strong>Third:</strong> Heaviness, pressure, nesting</li>
  </ul>
  <p><strong>We Offer:</strong> Trimester yoga, nutrition, emotional & clinical support</p>

  <h3>👶 The Fourth Trimester — Rediscovering the Self Post-Birth</h3>
  <ul>
    <li><strong>Issues:</strong> Lochia, engorgement, sleep loss, identity shifts</li>
    <li><strong>Hormones:</strong> Estrogen drop, prolactin rise</li>
    <li><strong>Care:</strong> Lactation help, PPD screening, pelvic healing</li>
  </ul>

  <h3>🔥 Perimenopause — When the Symphony Slows</h3>
  <ul>
    <li><strong>Symptoms:</strong> Irregular cycles, hot flashes, anxiety</li>
    <li><strong>Checks:</strong> Thyroid, endometrial scan</li>
    <li><strong>Sukam Plan:</strong> Lifestyle reset, hormone balance, bone health</li>
  </ul>

  <h3>🧘‍♀️ Menopause — Closing One Chapter, Opening Another</h3>
  <ul>
    <li><strong>Changes:</strong> Dryness, weight gain, skin thinning, urgency</li>
    <li><strong>Risks:</strong> Osteoporosis, heart disease</li>
    <li><strong>Support:</strong> HRT options, vaginal care, strength training, dietary help</li>
  </ul>

  <p><strong>From menarche to menopause, Sukam walks beside every woman — with empathy, expertise, and empowerment.</strong></p>
</section>


      <section className="quiz-section">
        <h2>🧠 Menarche to Menopause Quiz — How Well Do You Know Your Cycle?</h2>

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

export default MenarcheToMenopause;
