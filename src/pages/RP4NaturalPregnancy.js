import React, { useState } from 'react';
import './RP1InfertilityInsights.css';

const quizData = [
  {
    question: "What does OITI stand for?",
    options: [
      "Ovarian Injection and Treatment Initiation",
      "Ovulation Induction with Timed Intercourse",
      "Ovary Implant Transfer",
      "Oocyte Insemination Timing Intervention"
    ],
    answer: "Ovulation Induction with Timed Intercourse"
  },
  {
    question: "Which medicine is commonly used to induce ovulation?",
    options: ["Paracetamol", "Letrozole", "Insulin", "Estrogen-only pills"],
    answer: "Letrozole"
  },
  {
    question: "What is used to trigger egg release in an OITI cycle?",
    options: ["FSH", "Estrogen", "hCG", "Vitamin D"],
    answer: "hCG"
  },
  {
    question: "How is ovulation monitored in OITI?",
    options: ["CT scan", "Blood pressure", "Transvaginal ultrasound", "Chest X-ray"],
    answer: "Transvaginal ultrasound"
  },
  {
    question: "What is the ideal follicle size before triggering ovulation?",
    options: ["10 mm", "14 mm", "18–20 mm", "25 mm"],
    answer: "18–20 mm"
  },
  {
    question: "When is intercourse advised after hCG trigger?",
    options: ["12 hours later", "24–36 hours later", "3 days later", "Anytime"],
    answer: "24–36 hours later"
  },
  {
    question: "How many OITI cycles are generally tried before shifting to IUI?",
    options: ["1 cycle", "2–3 cycles", "3–6 cycles", "10 cycles"],
    answer: "3–6 cycles"
  },
  {
    question: "Who is NOT a good candidate for OITI?",
    options: [
      "Woman with regular periods",
      "Woman with open tubes",
      "Man with severe sperm abnormality",
      "Woman under 30"
    ],
    answer: "Man with severe sperm abnormality"
  },
  {
    question: "What support may be given in the luteal phase?",
    options: ["Estrogen", "Progesterone", "Antibiotics", "Painkillers"],
    answer: "Progesterone"
  },
  {
    question: "What is the main goal of OITI?",
    options: [
      "Collecting eggs for IVF",
      "Stimulating ovulation and planning intercourse",
      "Donating eggs",
      "Blocking ovulation"
    ],
    answer: "Stimulating ovulation and planning intercourse"
  }
];

const NaturalPregnancy = () => {
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
      <h1>🌿 Natural Pregnancy / OITI</h1>
      <p className="lead">“Sometimes, a little guidance brings nature back on track.”</p>

      <section className="info-section">
  <h3>💗 What is OITI?</h3>
  <p>
    Ovulation Induction with Timed Intercourse (OITI) is one of the simplest and most natural forms of fertility treatment. 
    It involves stimulating ovulation in women who are not ovulating regularly (or at all), and then guiding couples 
    on the best time for intercourse to maximize the chance of conception.
  </p>
  <p>
    OITI is non-invasive, affordable, and often the first-line treatment for many women with ovulatory disorders or 
    unexplained infertility. It beautifully blends medical science with natural conception.
  </p>

  <h3>🩺 Who Can Benefit from OITI?</h3>
  <ul>
    <li>Women with irregular or absent periods (e.g., PCOS)</li>
    <li>Couples with unexplained infertility</li>
    <li>Couples with normal test results seeking natural conception</li>
    <li>Young couples with good egg reserve and open fallopian tubes</li>
    <li>Those wanting to try natural methods before IUI/IVF</li>
  </ul>
  <p><strong>Not suitable for:</strong> Women with blocked fallopian tubes or couples with severe male infertility.</p>

  <h3>🔄 Step-by-Step OITI Process</h3>
  <ol>
    <li>
      <strong>Baseline Evaluation:</strong> Hormone blood tests (FSH, LH, AMH, TSH, Prolactin), and ultrasound scan.
    </li>
    <li>
      <strong>Ovulation Induction:</strong> Medicines like Letrozole or Clomiphene Citrate (Day 2–5); hormone injections if needed.
    </li>
    <li>
      <strong>Follicular Monitoring:</strong> Ultrasounds on Days 8, 10, 12 to monitor follicle growth and endometrial thickness.
    </li>
    <li>
      <strong>Triggering Ovulation:</strong> hCG shot given when follicle reaches 18–20 mm.
    </li>
    <li>
      <strong>Timed Intercourse:</strong> Intercourse guided 24–36 hours after the trigger; may be advised over 2–3 days.
    </li>
    <li>
      <strong>Luteal Phase Support:</strong> Progesterone supplements as needed; pregnancy test after 14 days.
    </li>
  </ol>

  <h3>📅 Timeline for an OITI Cycle</h3>
  <table>
    <thead>
      <tr><th>Day</th><th>Activity</th></tr>
    </thead>
    <tbody>
      <tr><td>Day 1–3</td><td>Period begins</td></tr>
      <tr><td>Day 2–5</td><td>Start ovulation medications</td></tr>
      <tr><td>Day 8–12</td><td>Follicle scan monitoring</td></tr>
      <tr><td>Day 12–14</td><td>Trigger shot + Timed intercourse</td></tr>
      <tr><td>Day 15–28</td><td>Wait and support phase</td></tr>
      <tr><td>Day 28+</td><td>Pregnancy test</td></tr>
    </tbody>
  </table>

  <h3>📈 How Many OITI Cycles Should I Try?</h3>
  <ul>
    <li>Most couples try 3–6 cycles based on age and egg reserve.</li>
    <li>Cumulative success increases when ovulation is well monitored.</li>
    <li>If no pregnancy after 4–6 cycles, move to IUI or IVF.</li>
  </ul>

  <h3>💖 Sukam’s Approach to OITI</h3>
  <ul>
    <li>Customized medication plans for each woman</li>
    <li>Minimal scans and stress-free cycle tracking</li>
    <li>Natural cycle support with lifestyle guidance</li>
    <li>Fertility diet and supplement recommendations</li>
    <li>Clear advice on timing, signs, and intercourse guidance</li>
  </ul>
  <p>We aim to help couples conceive in the most natural and least invasive way possible.</p>

  <h3>🌼 Real Story – "A Natural Blessing"</h3>
  <p>
    <strong>Anjali, 29 years, Newly Married:</strong> “I have PCOS and irregular cycles. I didn’t want to jump into IVF.
    With simple medicines and timely guidance from the Sukam team, I ovulated and conceived naturally in just my second OITI cycle.
    It felt so empowering.”
  </p>

  <h3>🌱 Let Nature Take Its Course</h3>
  <p>
    OITI is where simplicity meets science. It’s a gentle, guided path for couples who wish to start a family 
    naturally. At <strong>Sukam Speciality Clinic & Fertility Centre</strong>, we support your journey with clarity, compassion, and hope.
  </p>
  <p><strong>Take your first step today — the most beautiful journeys often begin with the smallest steps.</strong></p>
</section>


      <section className="quiz-section">
        <h2>🧠 Natural Pregnancy / OITI Quiz — Are You Fertility-Smart?</h2>

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

export default NaturalPregnancy;
