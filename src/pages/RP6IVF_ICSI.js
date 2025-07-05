import React, { useState } from 'react';
import './RP1InfertilityInsights.css';

const quizData = [
  {
    question: "What does IVF stand for?",
    options: [
      "In-Vitro Fertilization",
      "Intra Vaginal Fusion",
      "Induced Vaginal Fertility",
      "Internal Vaginal Follicles"
    ],
    answer: "In-Vitro Fertilization"
  },
  {
    question: "When is ICSI recommended?",
    options: [
      "Only in twin pregnancies",
      "When the uterus is small",
      "When sperm count is low",
      "When the eggs are immature"
    ],
    answer: "When sperm count is low"
  },
  {
    question: "How are embryos created in IVF?",
    options: [
      "Inside the uterus",
      "In a lab using egg and sperm",
      "Through natural intercourse",
      "Using donor placenta"
    ],
    answer: "In a lab using egg and sperm"
  },
  {
    question: "What is the ideal age for IVF success?",
    options: [
      "18–22",
      "25–35",
      "40–50",
      "Any age is equally successful"
    ],
    answer: "25–35"
  },
  {
    question: "What is embryo transfer?",
    options: [
      "Transfer of sperm",
      "Transfer of fertilized egg into uterus",
      "Transfer of uterus",
      "Menstrual cycle regulation"
    ],
    answer: "Transfer of fertilized egg into uterus"
  },
  {
    question: "How many embryos are usually transferred?",
    options: [
      "5–6",
      "Only 1",
      "Usually 1–2, based on age and quality",
      "All embryos at once"
    ],
    answer: "Usually 1–2, based on age and quality"
  },
  {
    question: "Does IVF always require ICSI?",
    options: [
      "Yes",
      "No",
      "Only for women",
      "Only in summer"
    ],
    answer: "No"
  },
  {
    question: "How many days after embryo transfer is a pregnancy test done?",
    options: [
      "3 days",
      "7 days",
      "14 days",
      "30 days"
    ],
    answer: "14 days"
  },
  {
    question: "What is ovarian stimulation?",
    options: [
      "Painful uterine massage",
      "Taking hormone injections to grow eggs",
      "Vaginal cleaning",
      "Sperm testing"
    ],
    answer: "Taking hormone injections to grow eggs"
  },
  {
    question: "Which hormone helps with egg maturation?",
    options: [
      "hCG",
      "Insulin",
      "Estrogen",
      "Cortisol"
    ],
    answer: "hCG"
  },
  {
    question: "IVF success depends MOST on:",
    options: [
      "Timing of ultrasound",
      "Age and embryo quality",
      "Size of uterus",
      "Color of cervix"
    ],
    answer: "Age and embryo quality"
  },
  {
    question: "Can embryos be frozen?",
    options: [
      "No",
      "Only for one day",
      "Yes, safely for years",
      "Only if the woman is under 25"
    ],
    answer: "Yes, safely for years"
  },
  {
    question: "Is ICSI useful in female infertility?",
    options: [
      "No",
      "Yes, always",
      "Mainly useful in male infertility",
      "Only during ovulation"
    ],
    answer: "Mainly useful in male infertility"
  },
  {
    question: "Do IVF or ICSI require surgery?",
    options: [
      "No, only minor procedures",
      "Yes, open surgery",
      "Cesarean",
      "Hysterectomy"
    ],
    answer: "No, only minor procedures"
  },
  {
    question: "Is bed rest compulsory after IVF?",
    options: [
      "Yes, for a month",
      "No, only for a few hours post-transfer",
      "Strict hospitalization",
      "Not needed at all"
    ],
    answer: "No, only for a few hours post-transfer"
  }
];

const IVF_ICSI = () => {
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
      <h1>✨ IVF & ICSI</h1>
      <p className="lead">“Science meets stardust to create life.”</p>

      <section className="info-section">
  <h3>💖 Introduction – Why IVF & ICSI?</h3>
  <p>
    Infertility affects millions of couples around the world, and it can be one of the most emotionally challenging journeys a person goes through.
    Fortunately, with advancements in reproductive medicine, parenthood is now possible through assisted reproductive technologies like
    <strong> IVF (In-Vitro Fertilization)</strong> and <strong>ICSI (Intracytoplasmic Sperm Injection)</strong>.
  </p>
  <p>
    IVF and ICSI are not just clinical procedures—they are lifelines of hope. Whether you're facing blocked fallopian tubes, male infertility,
    PCOS, or unexplained infertility, these procedures provide a scientific solution combined with emotional care.
  </p>
  <p>In this guide, we explain IVF and ICSI in simple terms so you can make informed, empowered decisions.</p>

  <h3>🧬 What is IVF?</h3>
  <p>
    In-Vitro Fertilization (IVF) involves fertilizing an egg with sperm outside the body. It allows doctors to select high-quality eggs and sperm,
    monitor fertilization, and choose the healthiest embryos to implant into the uterus.
  </p>
  <ul>
    <li>Ovarian stimulation using hormones to produce multiple eggs</li>
    <li>Egg retrieval from the ovaries</li>
    <li>Fertilization of eggs in a lab dish</li>
    <li>Embryo culture for a few days</li>
    <li>Embryo transfer to the uterus</li>
    <li>Hormonal support and pregnancy testing</li>
  </ul>
  <p>
    IVF is especially helpful for tubal blockages, PCOS, endometriosis, older age, and unexplained infertility.
  </p>

  <h3>🧬 What is ICSI?</h3>
  <p>
    Intracytoplasmic Sperm Injection (ICSI) is a form of IVF where a single sperm is directly injected into a mature egg, ideal for male factor infertility.
  </p>
  <ul>
    <li>Low sperm count or poor motility</li>
    <li>Failed fertilization in previous IVF</li>
    <li>Surgically retrieved sperm (TESA/PESA)</li>
    <li>Unexplained infertility</li>
  </ul>
  <p>
    ICSI improves fertilization chances but embryo quality and uterine health also affect pregnancy outcomes.
  </p>

  <h3>📋 IVF & ICSI Step-by-Step (Single Cycle)</h3>
  <ol>
    <li><strong>Pre-Treatment Consultation:</strong> Hormone tests, ultrasound, semen analysis, and counseling</li>
    <li><strong>Ovarian Stimulation:</strong> Hormonal injections for 10–12 days, monitored via scan</li>
    <li><strong>Trigger & Egg Retrieval:</strong> hCG injection followed by egg retrieval under sedation</li>
    <li><strong>Fertilization:</strong> Standard IVF or ICSI performed, embryos cultured 3–5 days</li>
    <li><strong>Embryo Transfer:</strong> One or two embryos transferred painlessly</li>
    <li><strong>Luteal Support & Testing:</strong> Hormone medications and pregnancy testing after 14 days</li>
  </ol>

  <h3>⏳ IVF/ICSI Timelines & Success Rates</h3>
  <ul>
    <li>🗓️ Day 1–12: Stimulation</li>
    <li>🗓️ Day 13: Trigger injection</li>
    <li>🗓️ Day 15: Egg retrieval</li>
    <li>🗓️ Day 17–20: Embryo transfer</li>
    <li>🗓️ Day 34: Pregnancy test</li>
  </ul>
  <p><strong>Success Rates:</strong></p>
  <ul>
    <li>Under 35: 50–60%</li>
    <li>Age 35–39: 30–40%</li>
    <li>Over 40: 10–20%</li>
  </ul>
  <p>
    <strong>Frozen Embryo Transfer (FET):</strong> In some cases, embryos are frozen and transferred later for better uterine readiness or OHSS prevention.
  </p>

  <h3>👩‍⚕️ Who Should Consider IVF or ICSI?</h3>
  <ul>
    <li>Blocked or damaged fallopian tubes</li>
    <li>Low sperm count or motility</li>
    <li>PCOS unresponsive to medication</li>
    <li>Unexplained infertility</li>
    <li>Endometriosis</li>
    <li>Multiple failed IUIs</li>
    <li>Age &gt;35</li>
    <li>Preimplantation genetic testing (PGT) required</li>
  </ul>

  <h3>💖 Sukam’s Holistic Fertility Approach</h3>
  <ul>
    <li>🔬 Advanced IVF-ICSI Lab with cutting-edge equipment</li>
    <li>🧬 Personalized treatment protocols</li>
    <li>🧘 Mind-body therapy: yoga, meditation, emotional support</li>
    <li>🥗 Fertility-focused nutrition plans</li>
    <li>💬 Transparent pricing with no hidden charges</li>
    <li>🫶 Dedicated fertility counselors at every step</li>
  </ul>

  <h3>📖 Real Stories from Sukam</h3>
  <p><strong>Radha, 36:</strong> “After 4 failed IUIs, I feared IVF. Sukam made me feel informed and supported. My first IVF cycle succeeded — I now hold my baby boy!”</p>
  <p><strong>Naveen & Priya:</strong> “ICSI helped us with male infertility. Thanks to Sukam's caring team and constant updates, we’re now expecting twins!”</p>

  <h3>👣 Take the First Step Toward Parenthood</h3>
  <p>
    IVF & ICSI aren’t just treatments — they’re journeys of hope, science, and strength. At Sukam, we walk every step with you.
  </p>
</section>


      <section className="quiz-section">
        <h2>🧠 IVF & ICSI Quiz — Test Your Knowledge!</h2>

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

export default IVF_ICSI;
