import React, { useState } from 'react';
import './RP1InfertilityInsights.css';

const quizData = [
  {
    question: "What is the medical definition of infertility in women under 35?",
    options: [
      "No periods for 3 months",
      "Failure to conceive after 6 months",
      "Failure to conceive after 12 months",
      "Painful periods"
    ],
    answer: "Failure to conceive after 12 months"
  },
  {
    question: "Which condition is a common cause of anovulation in women?",
    options: ["Endometriosis", "PCOS", "Fibroids", "Tuberculosis"],
    answer: "PCOS"
  },
  {
    question: "What is AMH primarily used to assess?",
    options: ["Ovulation timing", "Uterine lining", "Egg reserve", "Menstrual cycle length"],
    answer: "Egg reserve"
  },
  {
    question: "Which test is done to assess if fallopian tubes are open?",
    options: ["Transvaginal ultrasound", "HSG (Hysterosalpingography)", "Pap smear", "FSH test"],
    answer: "HSG (Hysterosalpingography)"
  },
  {
    question: "A male fertility test that checks count, motility, and shape is called:",
    options: ["Scrotal scan", "Semen analysis", "Sperm washing", "Hormonal assay"],
    answer: "Semen analysis"
  },
  {
    question: "At what female age does fertility begin to significantly decline?",
    options: ["28", "30", "35", "40"],
    answer: "35"
  },
  {
    question: "Which hormone triggers egg release from the ovary?",
    options: ["FSH", "LH", "Prolactin", "TSH"],
    answer: "LH"
  },
  {
    question: "Which condition is characterized by tissue similar to the uterine lining growing outside the uterus?",
    options: ["PCOS", "Endometriosis", "Adenomyosis", "Fibroids"],
    answer: "Endometriosis"
  },
  {
    question: "In IVF, where does fertilization take place?",
    options: ["In the uterus", "In the lab", "In the fallopian tube", "In the ovary"],
    answer: "In the lab"
  },
  {
    question: "Which is NOT typically part of a female fertility work-up?",
    options: ["Semen analysis", "AMH test", "HSG", "Ultrasound"],
    answer: "Semen analysis"
  },
  {
    question: "What lifestyle factor is known to negatively affect both egg and sperm quality?",
    options: ["Caffeine", "Smoking", "Yoga", "Hydration"],
    answer: "Smoking"
  },
  {
    question: "What percentage of infertility cases involve male factors?",
    options: ["10%", "20%", "40–50%", "80%"],
    answer: "40–50%"
  },
  {
    question: "Which of the following is true about unexplained infertility?",
    options: [
      "It means both partners have no reproductive organs",
      "It is untreatable",
      "It accounts for 10–15% of infertility cases",
      "It only affects older women"
    ],
    answer: "It accounts for 10–15% of infertility cases"
  },
  {
    question: "Which hormone is often elevated in women with PCOS?",
    options: ["Estrogen", "FSH", "LH", "Prolactin"],
    answer: "LH"
  },
  {
    question: "What is secondary infertility?",
    options: [
      "Infertility due to age",
      "Inability to conceive after having one child",
      "Infertility in men",
      "Infertility due to blocked tubes"
    ],
    answer: "Inability to conceive after having one child"
  },
  {
    question: "Which treatment is used for severe male infertility?",
    options: ["IUI", "Clomiphene", "ICSI", "Hysteroscopy"],
    answer: "ICSI"
  },
  {
    question: "Which fertility treatment involves placing sperm directly into the uterus?",
    options: ["IVF", "IUI", "OI", "HSG"],
    answer: "IUI"
  },
  {
    question: "Which of the following is a sign of ovulation?",
    options: [
      "Heavy bleeding",
      "Mild abdominal pain (Mittelschmerz)",
      "High prolactin",
      "Fever"
    ],
    answer: "Mild abdominal pain (Mittelschmerz)"
  },
  {
    question: "Which statement is FALSE?",
    options: [
      "Men’s fertility remains constant throughout life",
      "Egg quality declines with age",
      "IVF doesn’t guarantee success",
      "Lifestyle changes can improve fertility"
    ],
    answer: "Men’s fertility remains constant throughout life"
  },
  {
    question: "Which supplement may help improve sperm motility?",
    options: ["Calcium", "Vitamin D", "Coenzyme Q10", "Iron"],
    answer: "Coenzyme Q10"
  },
  {
    question: "Which of the following is NOT a typical emotional reaction to infertility?",
    options: ["Anxiety", "Guilt", "Joy", "Isolation"],
    answer: "Joy"
  },
  {
    question: "How does stress affect fertility?",
    options: [
      "It boosts ovulation",
      "It may disrupt hormonal balance",
      "It has no effect",
      "It guarantees pregnancy"
    ],
    answer: "It may disrupt hormonal balance"
  },
  {
    question: "A blocked fallopian tube prevents:",
    options: [
      "Egg maturation",
      "Sperm production",
      "Fertilization and egg transport",
      "Menstrual flow"
    ],
    answer: "Fertilization and egg transport"
  },
  {
    question: "When should a woman over 35 seek fertility evaluation?",
    options: [
      "After 1 year of trying",
      "After 6 months of trying",
      "Immediately",
      "After 2 years"
    ],
    answer: "After 6 months of trying"
  },
  {
    question: "Which statement about IVF is TRUE?",
    options: [
      "It always leads to twins",
      "It guarantees pregnancy",
      "It involves embryo transfer into the uterus",
      "It requires surgery every time"
    ],
    answer: "It involves embryo transfer into the uterus"
  }
];

const InfertilityInsights = () => {
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
      <h1>🧬 Infertility – Insights</h1>
      <p className="lead">“Every story has its hurdles — let’s decode the ‘why not yet.’”</p>

      <section className="info-section">
  <h3>💗 What is Infertility?</h3>
  <p>
    Infertility is defined as the inability to conceive after 12 months of regular, unprotected intercourse 
    (or 6 months if the woman is over 35). It may affect individuals or couples and can involve male, 
    female, or combined factors.
  </p>
  <p>
    <strong>It is a medical condition</strong> — not a personal failure. Around 15–20% of couples experience infertility, 
    but with the right care, many go on to conceive successfully.
  </p>
  <ul>
    <li><strong>Primary infertility:</strong> No prior pregnancies</li>
    <li><strong>Secondary infertility:</strong> Difficulty conceiving after a previous successful pregnancy</li>
  </ul>

  <h3>🔍 Common Causes of Infertility</h3>
  <p><strong>In Women:</strong></p>
  <ul>
    <li>Ovulatory disorders (PCOS, premature ovarian insufficiency)</li>
    <li>Blocked fallopian tubes (due to infections, surgery, endometriosis)</li>
    <li>Uterine abnormalities (fibroids, polyps, adhesions)</li>
    <li>Endometriosis</li>
    <li>Age-related decline in egg quality and reserve</li>
  </ul>
  <p><strong>In Men:</strong></p>
  <ul>
    <li>Low sperm count or poor motility</li>
    <li>Varicocele</li>
    <li>Hormonal imbalances (low testosterone, high prolactin)</li>
    <li>Infections or lifestyle-related sperm damage (smoking, obesity, alcohol)</li>
  </ul>
  <p><strong>Unexplained Infertility:</strong> Normal test results, but conception still doesn’t occur (10–15% cases).</p>

  <h3>🩺 How is Infertility Diagnosed?</h3>
  <p><strong>For Women:</strong></p>
  <ul>
    <li>Hormonal tests: AMH, FSH, LH, TSH, Prolactin, Estradiol</li>
    <li>Ultrasound scan for follicle count, ovarian and uterine evaluation</li>
    <li>HSG (Hysterosalpingography) to check tube patency</li>
    <li>Hysteroscopy/SIS to evaluate uterine cavity</li>
  </ul>
  <p><strong>For Men:</strong></p>
  <ul>
    <li>Semen analysis: count, motility, morphology</li>
    <li>Hormone tests: FSH, LH, Testosterone</li>
    <li>Scrotal ultrasound (if needed)</li>
  </ul>
  <p><strong>Advanced options:</strong> Genetic tests, post-coital test (rare), infection screening</p>

  <h3>📉 Fertility Timeline and Age Impact</h3>
  <table>
    <thead>
      <tr><th>Age Range</th><th>Monthly Pregnancy Rate</th><th>Egg Reserve & Quality</th></tr>
    </thead>
    <tbody>
      <tr><td>&lt;30</td><td>20–25%</td><td>Excellent</td></tr>
      <tr><td>30–34</td><td>15–20%</td><td>Good</td></tr>
      <tr><td>35–37</td><td>10–15%</td><td>Declining</td></tr>
      <tr><td>38–40</td><td>5–10%</td><td>Reduced</td></tr>
      <tr><td>41–43</td><td>&lt;5%</td><td>Poor</td></tr>
      <tr><td>&gt;44</td><td>&lt;2%</td><td>Very poor</td></tr>
    </tbody>
  </table>
  <p>Male fertility also declines with age, affecting motility and DNA integrity.</p>

  <h3>⚕️ Treatment Options Based on Cause</h3>
  <ul>
    <li><strong>Lifestyle changes:</strong> Weight loss, antioxidants, stress reduction</li>
    <li><strong>Ovulation Induction:</strong> Letrozole, Clomiphene for women with irregular ovulation</li>
    <li><strong>OITI:</strong> Timed intercourse after ovulation tracking</li>
    <li><strong>IUI:</strong> For mild male factor, cervical factor, or unexplained infertility</li>
    <li><strong>IVF:</strong> For tubal issues, endometriosis, or failed IUI cycles</li>
    <li><strong>ICSI:</strong> For poor sperm quality or failed fertilization in IVF</li>
    <li><strong>Advanced options:</strong> Donor eggs/sperm, surrogacy, PGT (genetic testing)</li>
  </ul>

  <h3>💬 Emotional and Social Impact</h3>
  <ul>
    <li>Feelings of shame, guilt, or inadequacy</li>
    <li>Relationship strain and intimacy challenges</li>
    <li>Social stigma or family pressure</li>
    <li>Anxiety and depression during long treatment periods</li>
  </ul>
  <p>
    At Sukam, emotional wellness is part of every fertility journey. We offer:<br />
    🧘‍♀️ Counseling • Peer groups • Mind-body therapies • Partner communication guidance
  </p>

  <h3>❌ Fertility Myths & Misconceptions</h3>
  <ul>
    <li><strong>Myth:</strong> Infertility is always due to the woman → <em>Fact:</em> Male factors are involved in ~50% cases</li>
    <li><strong>Myth:</strong> IVF guarantees pregnancy → <em>Fact:</em> Success depends on age, gametes, uterus</li>
    <li><strong>Myth:</strong> Just relax and it will happen → <em>Fact:</em> Stress is not the only cause; proper diagnosis is key</li>
    <li><strong>Myth:</strong> If you had a child once, infertility can’t happen → <em>Fact:</em> Secondary infertility is real</li>
    <li><strong>Myth:</strong> Donor eggs or sperm means it’s not “your baby” → <em>Fact:</em> Parenthood is about love and care</li>
  </ul>

  <h3>🧑‍⚕️ When to See a Fertility Specialist</h3>
  <ul>
    <li>If under 35 and not conceived in 12 months</li>
    <li>If over 35 and not conceived in 6 months</li>
    <li>Irregular periods, PCOS, endometriosis, thyroid problems</li>
    <li>History of multiple miscarriages</li>
    <li>Low sperm count or sexual dysfunction in men</li>
    <li>Interested in fertility preservation (egg/sperm freezing)</li>
  </ul>

  <h3>📘 Knowledge is the First Step</h3>
  <p>
    Infertility may feel overwhelming, but it is highly treatable. Early diagnosis, the right support, and 
    personalized care make a huge difference. Whether you pursue natural methods or advanced ART 
    like IVF/ICSI, your dream of parenthood is within reach.
  </p>
  <p>
    <strong>At Sukam Speciality Clinic & Fertility Centre, we believe in:</strong><br />
    ✅ Medical precision + emotional sensitivity<br />
    ✅ Personalized protocols<br />
    ✅ Full transparency and holistic wellness
  </p>
  <p><strong>Let us walk beside you — from uncertainty to new beginnings.</strong></p>
</section>


      <section className="quiz-section">
        <h2>🧠 Infertility Quiz — How Much Do You Know?</h2>

        {/* Progress Bar */}
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

export default InfertilityInsights;
