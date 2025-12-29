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
        <h3>INFERTILITY – A JOURNEY, NOT A LABEL</h3>
        <p>
          Infertility is not a failure, a diagnosis stamped overnight, or a verdict on one’s worth. It is a
          journey shaped by biology, timing, health, emotions, and sometimes unexplained variables. For many
          couples, the most painful part is not the condition itself—but the uncertainty, the repeated “maybe
          next month,” and the silent question: Why hasn’t it happened yet?
        </p>
        <p>
          Globally, infertility affects 1 in 6 couples at some point in their reproductive lives. Yet every
          infertility story is unique. Some struggle briefly, others longer. Some have clear medical causes;
          others face unexplained delays despite normal reports.
        </p>
        <p>Understanding infertility begins with shifting the mindset:</p>
        <ul>
          <li>From blame → to biology</li>
          <li>From guilt → to knowledge</li>
          <li>From silence → to informed conversations</li>
        </ul>
        <p>
          This insight guide aims to decode infertility layer by layer, empowering individuals and couples
          with clarity, compassion, and confidence.
        </p>

        <h3>HOW NATURAL CONCEPTION REALLY WORKS (AND WHY IT OFTEN DOESN’T)</h3>
        <p>Pregnancy is not automatic. Even in the healthiest couples:</p>
        <ul>
          <li>
            The chance of conception per cycle is 15–20%
            <br />
            → This means even healthy couples do not get pregnant every month; pregnancy takes time.
          </li>
          <li>
            Nearly 80–85% conceive within one year
            <br />
            → Most couples conceive naturally within one year of regular, well-timed intercourse.
          </li>
          <li>
            Stress, illness, timing, and lifestyle can reduce this probability
            <br />
            → Physical and mental stress, poor health, wrong timing, or unhealthy habits can delay pregnancy.
          </li>
        </ul>

        <p>For pregnancy to occur, multiple steps must align perfectly:</p>

        <p>
          <strong>In Women</strong>
        </p>
        <ul>
          <li>
            Regular ovulation
            <br />
            → The ovary releases one egg every month on time, which is necessary for pregnancy.
          </li>
          <li>
            Healthy eggs with genetic integrity
            <br />
            → Eggs should be strong and genetically normal to form a healthy embryo.
          </li>
          <li>
            Open fallopian tubes
            <br />
            → The tubes should be open so the egg and sperm can meet naturally.
          </li>
          <li>
            Balanced hormones
            <br />
            → Hormones should be in proper balance to control ovulation, periods, and implantation.
          </li>
          <li>
            Receptive uterine lining
            <br />
            → The uterus lining should be healthy and thick enough to allow the embryo to attach.
          </li>
        </ul>

        <p>
          <strong>In Men</strong>
        </p>
        <ul>
          <li>
            Adequate sperm count
            <br />
            → Enough sperm should be present to increase the chance of reaching the egg.
          </li>
          <li>
            Good motility (movement)
            <br />
            → Sperm should be able to swim forward properly to reach the egg.
          </li>
          <li>
            Normal morphology (shape)
            <br />
            → Sperm should have a normal shape to successfully enter the egg.
          </li>
          <li>
            Healthy DNA integrity
            <br />
            → The genetic material inside the sperm should be intact to support embryo growth.
          </li>
        </ul>

        <p>
          <strong>For the Couple</strong>
        </p>
        <ul>
          <li>
            Correct timing of intercourse
            <br />
            → Intercourse should happen during the fertile days when the egg is available.
          </li>
          <li>
            Emotional and physical wellbeing
            <br />
            → Good mental and physical health supports normal fertility function.
          </li>
          <li>
            Absence of chronic inflammation or infections
            <br />
            → Long-standing infections or inflammation can interfere with conception.
          </li>
        </ul>
        <p>
          A delay in pregnancy does not always mean infertility—but persistent delays signal the need for
          deeper evaluation.
        </p>

        <h3>FEMALE FACTORS – BEYOND PERIODS AND OVULATION</h3>
        <h4>1. Ovulatory Disorders</h4>
        <p>Ovulation may be:</p>
        <ul>
          <li>Irregular</li>
          <li>Delayed</li>
          <li>Absent</li>
        </ul>
        <p>Common causes include:</p>
        <ul>
          <li>
            PCOS
            <br />
            → A hormonal condition causing irregular ovulation and periods.
          </li>
          <li>
            Thyroid disorders
            <br />
            → Thyroid imbalance affects hormones needed for ovulation.
          </li>
          <li>
            High prolactin levels
            <br />
            → Excess prolactin hormone can stop ovulation.
          </li>
          <li>
            Stress and weight fluctuations
            <br />
            → Sudden stress or weight changes can disturb hormonal balance.
          </li>
        </ul>

        <h4>2. Egg Quality & Ovarian Reserve</h4>
        <p>Age plays a major role:</p>
        <ul>
          <li>Egg quantity and quality decline after 30</li>
          <li>
            Sharp decline after 35
            <br />
            → Fertility drops faster after 35 due to poorer egg quality.
          </li>
          <li>Genetic errors increase with age</li>
          <li>
            Low AMH, poor response to stimulation, or repeated embryo failures may indicate compromised egg
            quality.
          </li>
        </ul>

        <h4>3. Tubal & Pelvic Factors</h4>
        <ul>
          <li>
            Blocked fallopian tubes
            <br />
            → Egg and sperm cannot meet if the tubes are blocked.
          </li>
          <li>Pelvic inflammatory disease</li>
          <li>
            Endometriosis
            <br />
            → Tissue growing outside the uterus causes inflammation and fertility problems.
          </li>
          <li>
            Adhesions from previous surgeries
            <br />
            → Scar tissue may block or distort reproductive organs.
          </li>
        </ul>
        <p>Even partial tubal damage can impair fertilization.</p>

        <h4>4. Uterine Factors</h4>
        <ul>
          <li>
            Fibroids
            <br />
            → Non-cancerous growths that can affect implantation.
          </li>
          <li>
            Polyps
            <br />
            → Small growths inside the uterus that interfere with pregnancy.
          </li>
          <li>
            Congenital anomalies
            <br />
            → Structural abnormalities present from birth.
          </li>
          <li>
            Thin or inflamed endometrium
            <br />
            → The uterine lining is not healthy enough to support pregnancy.
          </li>
        </ul>
        <p>The uterus must be not only normal in shape—but functionally receptive.</p>

        <h3>MALE FACTORS – THE SILENT HALF OF INFERTILITY</h3>
        <p>Male infertility contributes to 40–50% of infertility cases, yet remains under-discussed.</p>
        <p>
          <strong>Key Male Factors</strong>
        </p>
        <ul>
          <li>Low sperm count (Oligospermia)</li>
          <li>Poor motility (Asthenospermia)</li>
          <li>Abnormal morphology (Teratospermia)</li>
          <li>
            Complete absence of sperm (Azoospermia)
            <br />
            → No sperm present in semen.
          </li>
        </ul>

        <p>
          <strong>Hidden Contributors</strong>
        </p>
        <ul>
          <li>
            Varicocele
            <br />
            → Enlarged veins around the testis affecting sperm quality.
          </li>
          <li>Hormonal imbalance</li>
          <li>Infections</li>
          <li>Smoking, alcohol, heat exposure</li>
          <li>Occupational toxins</li>
          <li>Genetic abnormalities</li>
        </ul>

        <p>
          <strong>Advanced Considerations</strong>
        </p>
        <p>Even with normal semen reports:</p>
        <ul>
          <li>
            DNA fragmentation
            <br />
            → Damage to sperm DNA affecting embryo development.
          </li>
          <li>Oxidative stress</li>
          <li>Epigenetic defects</li>
        </ul>
        <p>may impair fertilization or embryo development.</p>
        <p>Male fertility is dynamic and treatable, especially when detected early.</p>

        <h3>UNEXPLAINED INFERTILITY – WHEN REPORTS ARE NORMAL BUT PREGNANCY IS NOT</h3>
        <p>Unexplained infertility affects 10–15% of couples.</p>
        <p>Possible hidden reasons:</p>
        <ul>
          <li>Subtle egg or sperm quality issues</li>
          <li>
            Implantation failure
            <br />
            → Embryo forms but does not attach to the uterus.
          </li>
          <li>Immune dysregulation</li>
          <li>
            Poor embryo-endometrial synchrony
            <br />
            → Timing mismatch between embryo and uterine lining.
          </li>
          <li>
            Lifestyle and stress effects
            <br />
            → Daily habits and stress impact fertility silently.
          </li>
        </ul>

        <p>Unexplained infertility does not mean untreatable infertility. Many couples conceive with:</p>
        <ul>
          <li>
            Ovulation induction
            <br />
            → Medicines used to help release eggs.
          </li>
          <li>
            IUI
            <br />
            → Sperm placed directly into the uterus.
          </li>
          <li>
            IVF
            <br />
            → Egg and sperm fertilised outside the body.
          </li>
          <li>
            Lifestyle correction
            <br />
            → Improving diet, weight, sleep, and stress.
          </li>
          <li>
            Psychological support
            <br />
            → Emotional counselling to reduce stress impact.
          </li>
        </ul>
        <p>Sometimes, the explanation emerges only during treatment.</p>

        <h3>THE ROLE OF AGE, TIME & MODERN LIFESTYLES</h3>
        <p>
          <strong>Age Matters</strong>
        </p>
        <ul>
          <li>
            Female fertility peaks in the 20s
            <br />
            → Best egg quality and quantity.
          </li>
          <li>Declines gradually after 30</li>
          <li>Rapid decline after 35</li>
          <li>
            Male fertility also declines after 40
            <br />
            → Reduced sperm quality and genetic stability.
          </li>
        </ul>

        <p>
          <strong>Lifestyle Influences</strong>
        </p>
        <ul>
          <li>Poor sleep</li>
          <li>
            Obesity or underweight
            <br />
            → Disturbs ovulation and sperm production.
          </li>
          <li>Sedentary habits</li>
          <li>Processed foods</li>
          <li>Chronic stress</li>
          <li>Excessive caffeine, alcohol, smoking</li>
        </ul>

        <p>
          <strong>Environmental Factors</strong>
        </p>
        <ul>
          <li>Pollution</li>
          <li>Plastics (endocrine disruptors)</li>
          <li>
            Radiation exposure
            <br />
            → Damages eggs and sperm.
          </li>
          <li>Occupational hazards</li>
        </ul>
        <p>
          Modern life has extended timelines for parenthood, but biology still follows its own clock.
        </p>

        <h3>EMOTIONAL & PSYCHOLOGICAL DIMENSIONS OF INFERTILITY</h3>
        <p>Infertility affects:</p>
        <ul>
          <li>Self-esteem</li>
          <li>
            Marital intimacy
            <br />
            → Strain in emotional and physical closeness.
          </li>
          <li>
            Social relationships
            <br />
            → Isolation from family and society.
          </li>
          <li>
            Mental health
            <br />
            → Increased anxiety and depression.
          </li>
        </ul>

        <p>Common emotions include:</p>
        <ul>
          <li>Guilt</li>
          <li>Anger</li>
          <li>Grief</li>
          <li>Isolation</li>
          <li>Anxiety</li>
        </ul>

        <p>Repeated cycles of hope and disappointment can lead to:</p>
        <ul>
          <li>Depression</li>
          <li>Sexual dysfunction</li>
          <li>Relationship strain</li>
        </ul>

        <p>
          Emotional care is not optional—it is integral to fertility care. Couples who receive counselling
          often show:
        </p>
        <ul>
          <li>Better treatment adherence</li>
          <li>Improved outcomes</li>
          <li>Healthier coping mechanisms</li>
        </ul>

        <h3>DIAGNOSIS – MOVING FROM CONFUSION TO CLARITY</h3>
        <p>A structured fertility evaluation includes:</p>

        <p>
          <strong>For Women</strong>
        </p>
        <ul>
          <li>Hormonal profile</li>
          <li>
            Ultrasound
            <br />
            → Visual assessment of ovaries and uterus.
          </li>
          <li>
            AMH testing
            <br />
            → Measures egg reserve.
          </li>
          <li>Tubal patency tests</li>
          <li>Uterine cavity assessment</li>
        </ul>

        <p>
          <strong>For Men</strong>
        </p>
        <ul>
          <li>
            Semen analysis
            <br />
            → Tests sperm count, movement, and shape.
          </li>
          <li>Hormonal evaluation</li>
          <li>
            Scrotal examination
            <br />
            → Physical examination of testes.
          </li>
          <li>
            Genetic tests
            <br />
            → Detects inherited causes when needed.
          </li>
        </ul>

        <p>
          <strong>For Couples</strong>
        </p>
        <ul>
          <li>Timing analysis</li>
          <li>Sexual health evaluation</li>
          <li>Infection screening</li>
          <li>
            Lifestyle assessment
            <br />
            → Reviews daily habits affecting fertility.
          </li>
        </ul>

        <p>Diagnosis should be personalized—not rushed or generic.</p>

        <h3>TREATMENT PATHWAYS – FROM SIMPLE TO ADVANCED</h3>
        <p>Infertility treatment is stepwise, not one-size-fits-all.</p>

        <p>
          <strong>Conservative Options</strong>
        </p>
        <ul>
          <li>
            Cycle tracking
            <br />
            → Monitoring ovulation and fertile days.
          </li>
          <li>
            Ovulation induction
            <br />
            → Medicines to stimulate egg release.
          </li>
          <li> Lifestyle modification</li>
        </ul>

        <p>
          <strong>Assisted Options</strong>
        </p>
        <ul>
          <li>IUI (Intrauterine Insemination)</li>
          <li>IVF (In Vitro Fertilization)</li>
          <li>ICSI</li>
          <li>Surgical correction</li>
          <li>Fertility preservation</li>
        </ul>

        <p>Treatment choice depends on:</p>
        <ul>
          <li>Age</li>
          <li>Duration of infertility</li>
          <li>Cause</li>
          <li>Emotional readiness</li>
          <li>Financial considerations</li>
        </ul>

        <p>Success is not only pregnancy—but a healthy mother, baby, and family.</p>

        <h3>HOPE, SCIENCE & MOVING FORWARD</h3>
        <p>Infertility is not the end of the story—it is often the middle chapter.</p>
        <p>Today’s reproductive medicine offers:</p>
        <ul>
          <li>Advanced diagnostics</li>
          <li>Precision treatments</li>
          <li>Personalized protocols</li>
          <li>Emotional support systems</li>
        </ul>

        <p>What matters most:</p>
        <ul>
          <li>Early evaluation</li>
          <li>Evidence-based care</li>
          <li>Trust in the medical team</li>
          <li>Emotional resilience</li>
        </ul>

        <h4>Final Message</h4>
        <p>
          Infertility does not define a person or a couple. It is a medical condition with solutions, not a
          personal shortcoming. Every story has its hurdles—but with the right insights, the ‘why not yet’
          becomes a ‘how we got there.’
        </p>
        <p> <strong>At Sukam Speciality Clinic & Fertility Centre, we believe in:</strong><br /> ✅ Medical precision + emotional sensitivity<br /> ✅ Personalized protocols<br /> ✅ Full transparency and holistic wellness </p> 
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
