import React, { useState } from 'react';
import './RP1InfertilityInsights.css';

const quizData = [
  {
    question: "What does IUI stand for?",
    options: [
      "Intrauterine Injection",
      "Intrauterine Insemination",
      "Internal Uterine Irrigation",
      "In Vitro Uterine Infusion"
    ],
    answer: "Intrauterine Insemination"
  },
  {
    question: "When is IUI typically done in a menstrual cycle?",
    options: [
      "During menstruation",
      "After ovulation",
      "During ovulation",
      "Anytime"
    ],
    answer: "During ovulation"
  },
  {
    question: "What is the main purpose of sperm washing?",
    options: [
      "To clean sperm for donation",
      "To remove male hormones",
      "To concentrate healthy sperm",
      "To color sperm for lab visibility"
    ],
    answer: "To concentrate healthy sperm"
  },
  {
    question: "How long does the IUI procedure usually take?",
    options: [
      "1 hour",
      "30 minutes",
      "5–10 minutes",
      "Overnight stay required"
    ],
    answer: "5–10 minutes"
  },
  {
    question: "Which hormone is used to trigger ovulation before IUI?",
    options: [
      "Insulin",
      "hCG",
      "Estrogen",
      "Cortisol"
    ],
    answer: "hCG"
  },
  {
    question: "What is the success rate of IUI in women under 35?",
    options: [
      "2–5%",
      "10–15%",
      "25–30%",
      "50%"
    ],
    answer: "10–15%"
  },
  {
    question: "Can IUI be performed in a natural cycle without medications?",
    options: [
      "No",
      "Yes",
      "Only for older women",
      "Only with IVF"
    ],
    answer: "Yes"
  },
  {
    question: "Is anesthesia required for IUI?",
    options: [
      "Always",
      "Sometimes",
      "No",
      "Only during retrieval"
    ],
    answer: "No"
  },
  {
    question: "What type of infertility is best suited for IUI?",
    options: [
      "Tubal blockages",
      "Severe male factor",
      "Unexplained infertility",
      "Uterine cancer"
    ],
    answer: "Unexplained infertility"
  },
  {
    question: "What happens after IUI?",
    options: [
      "Hospital admission",
      "Immediate pregnancy test",
      "Luteal support and wait for pregnancy test",
      "Emergency procedure"
    ],
    answer: "Luteal support and wait for pregnancy test"
  },
  {
    question: "Which of these is a benefit of IUI?",
    options: [
      "Highly invasive",
      "Complex and risky",
      "Less expensive and simple",
      "Requires egg retrieval"
    ],
    answer: "Less expensive and simple"
  },
  {
    question: "Can donor sperm be used in IUI?",
    options: [
      "No",
      "Only in IVF",
      "Yes",
      "Only if partner agrees"
    ],
    answer: "Yes"
  },
  {
    question: "What is hCG used for in an IUI cycle?",
    options: [
      "Enhancing sperm motility",
      "Triggering ovulation",
      "Supporting pregnancy",
      "Reducing cramps"
    ],
    answer: "Triggering ovulation"
  },
  {
    question: "How many IUI cycles are typically recommended before moving to IVF?",
    options: [
      "1",
      "2",
      "3–6",
      "10–12"
    ],
    answer: "3–6"
  },
  {
    question: "Does IUI guarantee pregnancy?",
    options: [
      "Yes",
      "No",
      "Only with twins",
      "Only if done at home"
    ],
    answer: "No"
  }
];

const IUI = () => {
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
      <h1>🌟 IUI – A Shortcut for Sperm on Their Journey Home</h1>
      <p className="lead">“A simple, effective step closer to your dream.”</p>

      <section className="info-section">
  <h3>💗 Introduction – What is IUI?</h3>
  <p>
    Intrauterine Insemination (IUI) is a fertility treatment that involves placing specially prepared sperm
    directly into a woman’s uterus during ovulation. It is a simpler, lower-cost, and less invasive option than IVF,
    and is often the first-line treatment offered for infertility.
  </p>
  <p>
    The goal of IUI is to help more healthy sperm reach the egg at the right time—giving nature a helpful push.
  </p>

  <h3>🩺 When is IUI Recommended?</h3>
  <ul>
    <li>Unexplained infertility</li>
    <li>Mild male factor infertility (low count or motility)</li>
    <li>Cervical mucus issues</li>
    <li>Mild endometriosis</li>
    <li>Ovulation problems like PCOS</li>
    <li>Single women or same-sex couples using donor sperm</li>
  </ul>
  <p>IUI is not suitable for women with blocked fallopian tubes or severe male infertility.</p>

  <h3>🔬 Step-by-Step IUI Process</h3>
  <ol>
    <li>
      <strong>Initial Evaluation:</strong> Blood tests (AMH, FSH, LH, TSH), ultrasound, semen analysis
    </li>
    <li>
      <strong>Ovulation Monitoring:</strong> Natural or stimulated cycle, follicle tracking, and trigger shot
    </li>
    <li>
      <strong>Sperm Collection & Preparation:</strong> Lab washing and processing of semen sample
    </li>
    <li>
      <strong>Insemination Procedure:</strong> Painless 5–10 min procedure using soft catheter; no anesthesia needed
    </li>
    <li>
      <strong>Luteal Phase Support:</strong> Progesterone supplements and pregnancy test after 14 days
    </li>
  </ol>

  <h3>📅 IUI Timeline at a Glance</h3>
  <table>
    <thead>
      <tr><th>Day</th><th>Process</th></tr>
    </thead>
    <tbody>
      <tr><td>1–3</td><td>Period begins, baseline scan</td></tr>
      <tr><td>3–7</td><td>Ovulation medications (if needed)</td></tr>
      <tr><td>8–13</td><td>Ultrasound monitoring</td></tr>
      <tr><td>12–14</td><td>Trigger injection + IUI</td></tr>
      <tr><td>15–28</td><td>Luteal support</td></tr>
      <tr><td>28+</td><td>Pregnancy test</td></tr>
    </tbody>
  </table>

  <h3>📈 How Many IUI Cycles Should I Try?</h3>
  <ul>
    <li>Try 3–6 IUI cycles before considering IVF</li>
    <li>Success depends on age, egg quality, sperm health, uterine condition</li>
  </ul>
  <p><strong>Per Cycle Success Rates:</strong></p>
  <ul>
    <li>Women under 35: 10–15%</li>
    <li>Age 35–39: 7–10%</li>
    <li>Over 40: less than 5%</li>
  </ul>

  <h3>👩‍⚕️ Who is an Ideal Candidate for IUI?</h3>
  <ul>
    <li>Mild male factor infertility (low count/motility)</li>
    <li>PCOS and other ovulatory issues</li>
    <li>Unexplained infertility</li>
    <li>At least one open fallopian tube and normal uterus</li>
    <li>Single women or LGBTQ+ couples using donor sperm</li>
  </ul>

  <h3>💖 Sukam’s Approach to IUI – Natural, Nurturing, Personalized</h3>
  <ul>
    <li>
      <strong>Customized Stimulation:</strong> Based on age and hormone levels; minimal or natural cycle options
    </li>
    <li>
      <strong>Precision Ovulation Tracking:</strong> Serial scans, trigger timing based on follicle size
    </li>
    <li>
      <strong>Advanced Sperm Preparation:</strong> Density gradient/swim-up for motility enhancement
    </li>
    <li>
      <strong>Nutrition & Lifestyle Support:</strong> Fertility-friendly diet, supplement guidance
    </li>
    <li>
      <strong>Emotional Counseling:</strong> Transparent sessions, clear cost explanation, stress care
    </li>
  </ul>
  <p>We ensure every couple feels informed, calm, and confident throughout the IUI process.</p>

  <h3>🌟 Patient Story – "A Simple Step That Brought Big Joy"</h3>
  <p>
    <strong>Riya, 30 years, Teacher:</strong> "After a year of trying, we tried IUI. Sukam's team kept us
    reassured and informed. I conceived in my second cycle. I’m forever grateful."
  </p>

  <h3>👣 Take the First Step Toward Parenthood</h3>
  <p>
    IUI isn’t just a treatment — it’s a doorway to hope, courage, and new beginnings. At
    <strong> Sukam Speciality Clinic & Fertility Centre</strong>, we walk beside you from consultation to the
    moment you hear a heartbeat. Begin your journey with clarity, care, and confidence.
  </p>
</section>


      <section className="quiz-section">
        <h2>🧠 IUI Quiz — How Fertility-Savvy Are You?</h2>

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

export default IUI;
