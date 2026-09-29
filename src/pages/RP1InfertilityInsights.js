import React, { useMemo, useState } from "react";
import "./RP1Infertility.css";

const fertilitySteps = [
  "The woman must release a mature egg.",
  "The fallopian tube must be open and functional.",
  "Healthy sperm must reach and fertilise the egg.",
  "The fertilised egg must develop into an embryo.",
  "The embryo must travel to the uterus.",
  "The uterine environment must support implantation and pregnancy.",
];

const consultationTimings = [
  "After 12 months of trying when the female partner is below 35 years",
  "After six months when the female partner is 35 years or older",
  "Without delay when the female partner is above 40 years",
  "Earlier when either partner has a known condition that may affect fertility",
];

const femaleFactors = [
  {
    title: "Ovulation problems",
    intro:
      "Irregular or absent ovulation is a common reason for delayed conception. It may be associated with:",
    items: [
      "PCOS or PCOD",
      "Thyroid disorders",
      "Elevated prolactin",
      "Significant weight changes",
      "Excessive exercise",
      "Severe physical or emotional stress",
      "Diminished ovarian reserve",
      "Premature ovarian insufficiency",
    ],
    note:
      "Irregular menstrual cycles can be an important sign that ovulation is not occurring consistently.",
  },
  {
    title: "Age-related decline in fertility",
    paragraphs: [
      "Female fertility gradually declines with age, with a more noticeable reduction after the mid-thirties. Both the number and quality of available eggs decrease over time.",
      "Age can also affect the possibility of natural conception, the response to fertility medication and the risk of miscarriage. Age alone does not determine the outcome, but it is an important factor when planning evaluation and treatment.",
    ],
  },
  {
    title: "Fallopian tube problems",
    intro:
      "The fallopian tubes allow the egg and sperm to meet. Tubal blockage or damage may follow:",
    items: [
      "Pelvic infections",
      "Genital tuberculosis",
      "Previous pelvic or abdominal surgery",
      "Endometriosis",
      "A previous ectopic pregnancy",
      "Pelvic adhesions",
    ],
    note:
      "Tubal problems may not cause obvious symptoms and are often discovered only during fertility evaluation.",
  },
  {
    title: "Endometriosis",
    paragraphs: [
      "Endometriosis occurs when tissue similar to the uterine lining grows outside the uterus. It may affect the ovaries, fallopian tubes and surrounding pelvic structures.",
    ],
    intro: "Possible symptoms include:",
    items: [
      "Painful periods",
      "Chronic pelvic pain",
      "Pain during intercourse",
      "Pain during bowel movements around menstruation",
      "Difficulty conceiving",
    ],
    note:
      "Some women with endometriosis may have mild symptoms or no noticeable pain.",
  },
  {
    title: "Uterine conditions",
    intro:
      "Certain conditions affecting the uterus may interfere with implantation or pregnancy. These include:",
    items: [
      "Fibroids",
      "Endometrial polyps",
      "Congenital uterine abnormalities",
      "Intrauterine adhesions",
      "Problems affecting the uterine lining",
    ],
    note:
      "Not every fibroid or uterine abnormality causes infertility. Its size, number and location help determine whether treatment is necessary.",
  },
];

const maleConcerns = [
  "Low sperm count",
  "Reduced sperm movement",
  "Abnormal sperm shape",
  "Absence of sperm in the semen",
  "Varicocele",
  "Hormonal disorders",
  "Previous infections",
  "Testicular injury or surgery",
  "Ejaculation or erection difficulties",
  "Genetic conditions",
  "Exposure to excessive heat, tobacco, alcohol, anabolic steroids or certain medications",
];

const earlyAdviceItems = [
  "Female age of 35 years or above",
  "Very irregular or absent periods",
  "Severe menstrual or pelvic pain",
  "Known PCOS, endometriosis or fibroids",
  "Previous pelvic infection or genital tuberculosis",
  "History of ectopic pregnancy",
  "Previous ovarian, pelvic or abdominal surgery",
  "Recurrent pregnancy loss",
  "Cancer treatment or planned chemotherapy",
  "Known low ovarian reserve",
  "Sexual or ejaculation difficulties",
  "Previous testicular injury, surgery or undescended testis",
  "Known abnormal semen analysis",
  "A medical condition or medication that may affect fertility",
];

const consultationTopics = [
  "Duration of trying to conceive",
  "Menstrual cycle pattern",
  "Frequency and timing of intercourse",
  "Previous pregnancies or miscarriages",
  "Past medical conditions",
  "Previous operations and treatments",
  "Current medications",
  "Family and genetic history",
  "Lifestyle and occupational exposures",
  "Previous fertility investigations or treatments",
];

const femaleEvaluation = [
  "Physical and gynaecological examination",
  "Pelvic ultrasound",
  "Assessment of ovulation",
  "Ovarian reserve tests when indicated",
  "Thyroid, prolactin or other hormonal tests",
  "Evaluation of the uterus",
  "Testing the fallopian tubes when required",
];

const maleEvaluation = [
  "Medical and reproductive history",
  "Semen analysis",
  "Physical examination when indicated",
  "Hormonal, genetic or specialised testing in selected cases",
];

const treatmentOptions = [
  "Fertility awareness and correctly timed intercourse",
  "Lifestyle and preconception guidance",
  "Treatment of thyroid or other hormonal conditions",
  "Ovulation induction",
  "Timed intercourse",
  "Intrauterine insemination, or IUI",
  "Treatment of selected male fertility conditions",
  "Surgery for carefully selected uterine, tubal or pelvic conditions",
  "In-vitro fertilisation, or IVF",
  "Intracytoplasmic sperm injection, or ICSI",
  "Donor-assisted treatment when medically appropriate",
];

const lifestyleMeasures = [
  "Maintaining a healthy and sustainable body weight",
  "Eating a balanced diet",
  "Exercising regularly without extreme physical strain",
  "Avoiding tobacco and recreational drugs",
  "Limiting or avoiding alcohol",
  "Getting adequate sleep",
  "Reviewing medications and supplements with a doctor",
  "Managing diabetes, thyroid disease and other medical conditions",
  "Avoiding non-prescribed hormonal or fertility products",
];

const clinicApproach = [
  "Evaluating both partners",
  "Identifying factors that may delay conception",
  "Avoiding unnecessary investigations",
  "Explaining findings in understandable language",
  "Supporting natural conception whenever reasonably possible",
  "Using ovulation induction or IUI when clinically appropriate",
  "Recommending IVF or ICSI when there is a clear indication",
  "Preparing couples for a healthy pregnancy",
  "Providing continuity from fertility care through pregnancy and delivery",
];

const mythsAndFacts = [
  {
    myth: "Infertility is usually the woman’s fault.",
    fact:
      "Fertility concerns may involve the woman, the man, both partners or sometimes no clearly identifiable factor.",
  },
  {
    myth: "Regular periods always mean fertility is normal.",
    fact:
      "Regular cycles are reassuring, but they do not confirm egg quality, tubal function, sperm health or implantation.",
  },
  {
    myth: "A previous child means infertility cannot occur later.",
    fact:
      "Secondary infertility can develop even after an earlier natural conception.",
  },
  {
    myth: "Every couple with infertility requires IVF.",
    fact:
      "Treatment depends on the cause. Some couples may conceive with guidance, medication, timed intercourse or IUI.",
  },
  {
    myth: "Stress is the only reason pregnancy is not happening.",
    fact:
      "Stress can affect well-being, but infertility should not be dismissed as “just stress.” Appropriate medical evaluation is important.",
  },
  {
    myth: "One abnormal semen analysis confirms permanent infertility.",
    fact:
      "Semen parameters can vary. The result should be clinically interpreted and may need reassessment.",
  },
];

const faqs = [
  {
    question:
      "How frequently should couples have intercourse while trying to conceive?",
    answer:
      "Regular intercourse every one to two days during the fertile window can help maximise the opportunity for conception. Couples who find strict timing stressful may instead have intercourse regularly throughout the cycle.",
  },
  {
    question: "Can I conceive if I have PCOS?",
    answer:
      "Yes. Many women with PCOS conceive naturally or with appropriate treatment. Management depends on menstrual regularity, ovulation, age, metabolic health and other fertility factors.",
  },
  {
    question: "Does low AMH mean pregnancy is impossible?",
    answer:
      "No. AMH mainly helps estimate ovarian reserve and likely response to ovarian stimulation. It does not, by itself, determine whether natural conception can or cannot occur.",
  },
  {
    question: "Is male infertility treatable?",
    answer:
      "Some male fertility conditions can be treated or improved. Others may require assisted reproductive techniques. The appropriate option depends on the cause and severity.",
  },
  {
    question: "When is IVF recommended?",
    answer:
      "IVF may be considered for blocked or severely damaged fallopian tubes, significant male-factor infertility, reduced reproductive time, failure of simpler treatments or other specific clinical indications.",
  },
  {
    question: "Can infertility be prevented?",
    answer:
      "Not every cause is preventable. However, prevention and timely treatment of reproductive infections, avoiding tobacco and anabolic steroids, protecting against testicular injury, maintaining general health and seeking timely fertility advice may reduce certain risks or prevent avoidable delays.",
  },
];

const quizData = [
  {
    question: "Fertility evaluation concerns:",
    options: [
      "Only the woman",
      "Only the man",
      "Both partners",
      "Only couples requiring IVF",
    ],
    answer: "Both partners",
  },
  {
    question: "A woman aged 36 should generally seek evaluation after:",
    options: [
      "Two years",
      "Six months of trying",
      "Five years",
      "Menopause",
    ],
    answer: "Six months of trying",
  },
  {
    question: "Does infertility always require IVF?",
    options: ["Yes", "No"],
    answer: "No",
  },
  {
    question: "Can infertility occur after a previous pregnancy?",
    options: ["Yes", "No"],
    answer: "Yes",
  },
  {
    question: "Can one test alone explain every fertility problem?",
    options: ["Yes", "No"],
    answer: "No",
  },
];

const SectionHeading = ({ eyebrow, title, description }) => (
  <div className="sukam-infertility-section-heading">
    {eyebrow && (
      <span className="sukam-infertility-section-eyebrow">{eyebrow}</span>
    )}

    <h2>{title}</h2>

    {description && <p>{description}</p>}
  </div>
);

const CheckList = ({ items, className = "" }) => (
  <ul className={`sukam-infertility-check-list ${className}`.trim()}>
    {items.map((item) => (
      <li key={item}>
        <span className="sukam-infertility-check-icon" aria-hidden="true">
          ✓
        </span>
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

const InfertilityInsights = () => {
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const totalQuestions = quizData.length;
  const answeredCount = Object.keys(selectedAnswers).length;
  const progressPercentage = (answeredCount / totalQuestions) * 100;
  const isQuizComplete = answeredCount === totalQuestions;

  const results = useMemo(() => {
    const correct = quizData.reduce((score, question, index) => {
      return score + (selectedAnswers[index] === question.answer ? 1 : 0);
    }, 0);

    return {
      correct,
      wrong: totalQuestions - correct,
      percentage: Math.round((correct / totalQuestions) * 100),
    };
  }, [selectedAnswers, totalQuestions]);

  const handleOptionClick = (questionIndex, option) => {
    if (showResults) {
      return;
    }

    setSelectedAnswers((currentAnswers) => ({
      ...currentAnswers,
      [questionIndex]: option,
    }));
  };

  const handleShowResults = () => {
    if (isQuizComplete) {
      setShowResults(true);
    }
  };

  const handleTryAgain = () => {
    setSelectedAnswers({});
    setShowResults(false);
  };

  const getOptionStateClass = (questionIndex, option, answer) => {
    const isSelected = selectedAnswers[questionIndex] === option;

    if (!showResults) {
      return isSelected ? "is-selected" : "";
    }

    if (option === answer) {
      return "is-correct";
    }

    if (isSelected && option !== answer) {
      return "is-incorrect";
    }

    return "";
  };

  return (
    <main className="sukam-infertility-page">
      <div className="sukam-infertility-shell">
        {/* =========================================================
            Hero Section
        ========================================================= */}

        <header className="sukam-infertility-hero">
          <div className="sukam-infertility-hero-content">

            <h1>Infertility – Insights</h1>

            <p className="sukam-infertility-hero-subtitle">
              Every fertility journey begins with understanding
            </p>

            <p className="sukam-infertility-hero-text">
              For many couples, trying to conceive begins with hope and
              excitement. But when pregnancy does not happen as expected, the
              same journey can gradually become confusing, stressful and
              emotionally exhausting.
            </p>

            <div className="sukam-infertility-question-panel">
              <p className="sukam-infertility-question-panel-title">
                Questions often arise:
              </p>

              <div className="sukam-infertility-question-grid">
                <span>Why are we not conceiving?</span>
                <span>Is something wrong with me or my partner?</span>
                <span>Have we waited too long?</span>
                <span>Will we need IVF?</span>
                <span>Is pregnancy still possible?</span>
              </div>
            </div>

            <p className="sukam-infertility-hero-text">
              Delayed conception does not always mean that pregnancy is
              impossible. It simply means that the couple may benefit from a
              systematic fertility evaluation. Identifying the possible reason
              early can help avoid unnecessary delays, repeated treatments and
              emotional distress.
            </p>

            <p className="sukam-infertility-hero-emphasis">
              Infertility is not solely a woman’s concern or a man’s concern.
              Fertility is a shared journey, and both partners should ideally be
              evaluated together.
            </p>
          </div>

          <aside className="sukam-infertility-hero-card">
            <span className="sukam-infertility-hero-card-kicker">
              A clearer first step
            </span>

            <h2>Understand before assuming</h2>

            <p>
              A fertility evaluation is designed to identify possible causes,
              understand both partners’ health and guide the next appropriate
              step.
            </p>

            <div className="sukam-infertility-hero-card-stat">
              <strong>Both partners</strong>
              <span>should ideally be evaluated together.</span>
            </div>
          </aside>
        </header>

        {/* =========================================================
            What is Infertility?
        ========================================================= */}

        <section className="sukam-infertility-section">
          <SectionHeading
            eyebrow="Understanding infertility"
            title="What is infertility?"
          />

          <div className="sukam-infertility-definition-card">
            <p>
              Infertility is generally defined as the inability to achieve
              pregnancy after 12 months or more of regular, unprotected sexual
              intercourse.
            </p>
          </div>

          <p className="sukam-infertility-body-copy">
            However, couples do not always need to wait for an entire year
            before seeking medical advice.
          </p>

          <div className="sukam-infertility-timing-grid">
            {consultationTimings.map((item, index) => (
              <article className="sukam-infertility-timing-card" key={item}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{item}</p>
              </article>
            ))}
          </div>

          <div className="sukam-infertility-note">
            <span aria-hidden="true">i</span>

            <p>
              Seeking an evaluation does not automatically mean that advanced
              fertility treatment will be required. In many cases, identifying
              ovulation timing, correcting a hormonal condition, treating an
              infection or addressing a male fertility factor may improve the
              possibility of conception.
            </p>
          </div>
        </section>

        {/* =========================================================
            Primary and Secondary Infertility
        ========================================================= */}

        <section className="sukam-infertility-section">
          <SectionHeading
            eyebrow="Types"
            title="Primary and secondary infertility"
            description="Infertility may be classified into two broad types."
          />

          <div className="sukam-infertility-two-column-grid">
            <article className="sukam-infertility-info-card">
              <span className="sukam-infertility-card-number">01</span>

              <h3>Primary infertility</h3>

              <p>
                Primary infertility refers to difficulty achieving a first
                pregnancy despite regular, unprotected intercourse for the
                recommended period.
              </p>
            </article>

            <article className="sukam-infertility-info-card">
              <span className="sukam-infertility-card-number">02</span>

              <h3>Secondary infertility</h3>

              <p>
                Secondary infertility occurs when a couple has conceived in the
                past but is currently unable to achieve another pregnancy.
              </p>

              <p>
                The previous pregnancy may have resulted in childbirth,
                miscarriage or an ectopic pregnancy. Having conceived earlier
                does not guarantee that fertility will remain unchanged. Age,
                changes in ovulation, reduced ovarian reserve, sperm-related
                factors, infections, surgery and other health conditions can
                influence future fertility.
              </p>
            </article>
          </div>

          <p className="sukam-infertility-section-closing">
            Both primary and secondary infertility deserve appropriate
            evaluation and care.
          </p>
        </section>

        {/* =========================================================
            Fertility Depends on Both Partners
        ========================================================= */}

        <section className="sukam-infertility-section sukam-infertility-section--tinted">
          <SectionHeading
            eyebrow="How conception works"
            title="Fertility depends on both partners"
            description="Pregnancy requires several biological events to occur in the correct sequence."
          />

          <div className="sukam-infertility-steps-grid">
            {fertilitySteps.map((step, index) => (
              <article className="sukam-infertility-step-card" key={step}>
                <span>{index + 1}</span>
                <p>{step}</p>
              </article>
            ))}
          </div>

          <p className="sukam-infertility-section-closing">
            A difficulty at any stage can reduce the chance of conception.
            Sometimes more than one factor may be present, and in some couples,
            routine testing may not identify a definite cause.
          </p>
        </section>

        {/* =========================================================
            Female Fertility Factors
        ========================================================= */}

        <section className="sukam-infertility-section">
          <SectionHeading
            eyebrow="Female fertility"
            title="Common fertility factors in women"
          />

          <div className="sukam-infertility-factor-grid">
            {femaleFactors.map((factor) => (
              <article
                className="sukam-infertility-factor-card"
                key={factor.title}
              >
                <h3>{factor.title}</h3>

                {factor.paragraphs?.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}

                {factor.intro && <p>{factor.intro}</p>}

                {factor.items && <CheckList items={factor.items} />}

                {factor.note && (
                  <p className="sukam-infertility-card-note">{factor.note}</p>
                )}
              </article>
            ))}
          </div>
        </section>

        {/* =========================================================
            Male Fertility Factors
        ========================================================= */}

        <section className="sukam-infertility-section sukam-infertility-section--accent">
          <SectionHeading
            eyebrow="Male fertility"
            title="Common fertility factors in men"
          />

          <div className="sukam-infertility-content-grid">
            <div>
              <p className="sukam-infertility-body-copy">
                Male fertility depends on sperm production, sperm quality and
                the ability to deliver sperm into the female reproductive
                tract.
              </p>

              <p className="sukam-infertility-body-copy">
                Common concerns include:
              </p>

              <CheckList
                items={maleConcerns}
                className="sukam-infertility-check-list--two-column"
              />
            </div>

            <aside className="sukam-infertility-highlight-card">
              <h3>Semen analysis</h3>

              <p>
                A semen analysis is usually one of the first investigations in a
                fertility evaluation. An abnormal report should be interpreted
                carefully and may sometimes need to be repeated because semen
                parameters can vary.
              </p>

              <p>
                Male evaluation should not be postponed while the female partner
                undergoes multiple tests.
              </p>
            </aside>
          </div>
        </section>

        {/* =========================================================
            Unexplained Infertility
        ========================================================= */}

        <section className="sukam-infertility-section">
          <SectionHeading
            eyebrow="When routine tests are normal"
            title="What is unexplained infertility?"
          />

          <div className="sukam-infertility-reading-card">
            <p>
              In some couples, ovulation appears normal, the fallopian tubes are
              open, the uterus does not show a significant abnormality and semen
              parameters are within acceptable limits—but pregnancy still does
              not occur.
            </p>

            <p className="sukam-infertility-reading-card-emphasis">
              This is known as unexplained infertility.
            </p>

            <p>
              The term does not mean that there is no reason. It means that
              standard investigations have not identified a definite cause.
              Fertilisation, egg quality, sperm function, embryo development or
              implantation may involve factors that routine tests cannot fully
              measure.
            </p>

            <p>
              Treatment is selected according to the couple’s age, duration of
              infertility, previous treatments and overall fertility profile.
            </p>
          </div>
        </section>

        {/* =========================================================
            When to Seek Advice
        ========================================================= */}

        <section className="sukam-infertility-section">
          <SectionHeading
            eyebrow="Do not delay when"
            title="When should you seek fertility advice earlier?"
            description="Consider consulting a fertility specialist without waiting for 12 months if there is:"
          />

          <div className="sukam-infertility-warning-card">
            <CheckList
              items={earlyAdviceItems}
              className="sukam-infertility-check-list--two-column"
            />
          </div>

          <p className="sukam-infertility-section-closing">
            Early evaluation is particularly important when time may influence
            the available treatment choices.
          </p>
        </section>

        {/* =========================================================
            Fertility Evaluation
        ========================================================= */}

        <section className="sukam-infertility-section sukam-infertility-section--tinted">
          <SectionHeading
            eyebrow="Evaluation"
            title="What happens during a fertility evaluation?"
            description="Fertility evaluation should be systematic and individualised. Not every couple requires every available test."
          />

          <div className="sukam-infertility-evaluation-grid">
            <article className="sukam-infertility-evaluation-card">
              <span className="sukam-infertility-evaluation-label">
                Consultation
              </span>

              <h3>Detailed consultation</h3>

              <p>The doctor may discuss:</p>

              <CheckList items={consultationTopics} />

              <p className="sukam-infertility-card-note">
                Both partners should participate whenever possible.
              </p>
            </article>

            <article className="sukam-infertility-evaluation-card">
              <span className="sukam-infertility-evaluation-label">
                Women
              </span>

              <h3>Evaluation of the female partner</h3>

              <p>
                Depending on the clinical history, the evaluation may include:
              </p>

              <CheckList items={femaleEvaluation} />

              <p className="sukam-infertility-card-note">
                Ovarian reserve tests help estimate the likely response of the
                ovaries to stimulation. They do not independently confirm
                whether natural pregnancy is possible or impossible.
              </p>
            </article>

            <article className="sukam-infertility-evaluation-card">
              <span className="sukam-infertility-evaluation-label">Men</span>

              <h3>Evaluation of the male partner</h3>

              <p>Initial evaluation commonly includes:</p>

              <CheckList items={maleEvaluation} />

              <p className="sukam-infertility-card-note">
                The results of both partners are considered together before
                treatment is planned.
              </p>
            </article>
          </div>
        </section>

        {/* =========================================================
            Treatment
        ========================================================= */}

        <section className="sukam-infertility-section">
          <SectionHeading
            eyebrow="Treatment"
            title="Does infertility always require IVF?"
          />

          <div className="sukam-infertility-answer-banner">
            <span>No.</span>

            <p>
              IVF is one of several fertility treatments, but it is not the
              first or only solution for every couple.
            </p>
          </div>

          <p className="sukam-infertility-body-copy">
            Depending on the diagnosis, age and duration of infertility,
            treatment may include:
          </p>

          <div className="sukam-infertility-treatment-grid">
            {treatmentOptions.map((option) => (
              <div className="sukam-infertility-treatment-item" key={option}>
                <span aria-hidden="true">+</span>
                <p>{option}</p>
              </div>
            ))}
          </div>

          <p className="sukam-infertility-section-closing">
            The aim is to recommend the most suitable treatment—not
            automatically the most advanced treatment.
          </p>
        </section>

        {/* =========================================================
            Lifestyle & Emotional Wellbeing
        ========================================================= */}

        <section className="sukam-infertility-section">
          <div className="sukam-infertility-wellbeing-grid">
            <article className="sukam-infertility-wellbeing-card">
              <span className="sukam-infertility-section-eyebrow">
                Daily health
              </span>

              <h2>Lifestyle and fertility</h2>

              <p>
                Lifestyle changes cannot correct every fertility condition, but
                they can support reproductive and general health.
              </p>

              <p>Helpful measures may include:</p>

              <CheckList items={lifestyleMeasures} />

              <p className="sukam-infertility-card-note">
                Couples should be cautious about unproven supplements, detox
                programmes and treatments that promise guaranteed pregnancy.
              </p>
            </article>

            <article className="sukam-infertility-wellbeing-card">
              <span className="sukam-infertility-section-eyebrow">
                Emotional wellbeing
              </span>

              <h2>The emotional side of infertility</h2>

              <p>
                Infertility can affect emotional well-being, relationships,
                intimacy, work and social life. Feelings of sadness, anger,
                guilt, anxiety and isolation are common.
              </p>

              <p className="sukam-infertility-emphasis-line">
                Neither partner should be blamed. Infertility is a medical
                concern—not a personal failure.
              </p>

              <p>
                Open communication, emotional support and counselling can help
                couples cope with investigations and treatment. Seeking
                psychological support does not indicate weakness; it is part of
                comprehensive fertility care.
              </p>
            </article>
          </div>
        </section>

        {/* =========================================================
            Sukam Clinic Approach
        ========================================================= */}

        <section className="sukam-infertility-section sukam-infertility-clinic-panel">
          <div className="sukam-infertility-clinic-panel-heading">
            <span className="sukam-infertility-section-eyebrow">
              Sukam Clinic
            </span>

            <h2>Our approach at Sukam Clinic</h2>

            <p>
              At Sukam Clinic, fertility care begins by listening to the
              couple’s concerns and understanding their complete medical and
              reproductive history.
            </p>
          </div>

          <CheckList
            items={clinicApproach}
            className="sukam-infertility-check-list--two-column sukam-infertility-check-list--light"
          />

          <div className="sukam-infertility-clinic-panel-footer">
            <p>
              Every couple’s situation is different. Therefore, treatment is
              planned according to age, diagnosis, duration of infertility,
              ovarian reserve, semen findings, previous treatment and personal
              preferences.
            </p>

            <p>
              No fertility treatment can guarantee pregnancy. Clear counselling
              and realistic expectations are essential parts of ethical
              fertility care.
            </p>
          </div>
        </section>

        {/* =========================================================
            Myths and Facts
        ========================================================= */}

        <section className="sukam-infertility-section">
          <SectionHeading
            eyebrow="Clarity over misconceptions"
            title="Fertility myths and facts"
          />

          <div className="sukam-infertility-myth-grid">
            {mythsAndFacts.map((item) => (
              <article className="sukam-infertility-myth-card" key={item.myth}>
                <div className="sukam-infertility-myth-label">Myth</div>

                <h3>{item.myth}</h3>

                <div className="sukam-infertility-fact-block">
                  <span>Fact</span>
                  <p>{item.fact}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* =========================================================
            Frequently Asked Questions
        ========================================================= */}

        <section className="sukam-infertility-section">
          <SectionHeading
            eyebrow="Common questions"
            title="Frequently asked questions"
          />

          <div className="sukam-infertility-faq-list">
            {faqs.map((faq, index) => (
              <details
                className="sukam-infertility-faq-item"
                key={faq.question}
                open={index === 0}
              >
                <summary>
                  <span>{faq.question}</span>

                  <span
                    className="sukam-infertility-faq-icon"
                    aria-hidden="true"
                  >
                    +
                  </span>
                </summary>

                <div className="sukam-infertility-faq-answer">
                  <p>{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* =========================================================
            Fertility Awareness Quiz
        ========================================================= */}

        <section className="sukam-infertility-section sukam-infertility-quiz-section">
          <SectionHeading
            eyebrow="Knowledge check"
            title="Quick fertility awareness quiz"
            description="Answer all five questions and check your score."
          />

          <div className="sukam-infertility-quiz-progress-wrap">
            <div className="sukam-infertility-quiz-progress-meta">
              <span>
                {answeredCount} of {totalQuestions} answered
              </span>

              <span>{Math.round(progressPercentage)}%</span>
            </div>

            <div
              className="sukam-infertility-quiz-progress-track"
              role="progressbar"
              aria-label="Quiz progress"
              aria-valuemin="0"
              aria-valuemax={totalQuestions}
              aria-valuenow={answeredCount}
            >
              <div
                className="sukam-infertility-quiz-progress-bar"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
          </div>

          <div className="sukam-infertility-quiz-list">
            {quizData.map((question, questionIndex) => (
              <article
                className="sukam-infertility-quiz-card"
                key={question.question}
              >
                <div className="sukam-infertility-quiz-card-heading">
                  <span>
                    Question {questionIndex + 1} of {totalQuestions}
                  </span>

                  <h3>{question.question}</h3>
                </div>

                <div className="sukam-infertility-quiz-options">
                  {question.options.map((option, optionIndex) => {
                    const stateClass = getOptionStateClass(
                      questionIndex,
                      option,
                      question.answer
                    );

                    return (
                      <button
                        type="button"
                        className={`sukam-infertility-quiz-option ${stateClass}`.trim()}
                        key={option}
                        onClick={() =>
                          handleOptionClick(questionIndex, option)
                        }
                        disabled={showResults}
                        aria-pressed={
                          selectedAnswers[questionIndex] === option
                        }
                      >
                        <span className="sukam-infertility-option-letter">
                          {String.fromCharCode(65 + optionIndex)}
                        </span>

                        <span>{option}</span>
                      </button>
                    );
                  })}
                </div>

                {showResults && (
                  <div
                    className={`sukam-infertility-question-result ${
                      selectedAnswers[questionIndex] === question.answer
                        ? "is-correct"
                        : "is-incorrect"
                    }`}
                  >
                    <strong>
                      {selectedAnswers[questionIndex] === question.answer
                        ? "Correct"
                        : "Incorrect"}
                    </strong>

                    <span>Correct answer: {question.answer}</span>
                  </div>
                )}
              </article>
            ))}
          </div>

          {!showResults && (
            <div className="sukam-infertility-quiz-actions">
              <p>
                {isQuizComplete
                  ? "You have answered all questions."
                  : `Answer ${totalQuestions - answeredCount} more ${
                      totalQuestions - answeredCount === 1
                        ? "question"
                        : "questions"
                    } to view your result.`}
              </p>

              <button
                type="button"
                className="sukam-infertility-primary-button"
                onClick={handleShowResults}
                disabled={!isQuizComplete}
              >
                See Results
              </button>
            </div>
          )}

          {showResults && (
            <div
              className="sukam-infertility-results-card"
              aria-live="polite"
            >
              <div className="sukam-infertility-score-circle">
                <strong>{results.percentage}%</strong>
                <span>Your score</span>
              </div>

              <div className="sukam-infertility-results-content">
                <span className="sukam-infertility-section-eyebrow">
                  Quiz complete
                </span>

                <h3>
                  {results.correct} correct out of {totalQuestions}
                </h3>

                <p>
                  Correct answers: {results.correct} · Incorrect answers:{" "}
                  {results.wrong}
                </p>

                <button
                  type="button"
                  className="sukam-infertility-secondary-button"
                  onClick={handleTryAgain}
                >
                  Try Again
                </button>
              </div>
            </div>
          )}
        </section>

        {/* =========================================================
            Final CTA
        ========================================================= */}

        <section className="sukam-infertility-cta-section">
          <div className="sukam-infertility-cta-content">
            <span className="sukam-infertility-section-eyebrow">
              Take the first step with clarity
            </span>

            <h2>
              Understanding the reason is the beginning of the right path.
            </h2>

            <p>
              If pregnancy has not occurred within the expected time—or if
              either partner has a condition that may affect fertility—an early
              consultation can provide clarity.
            </p>

            <p>
              A fertility evaluation is not a commitment to IVF. It is the
              first step toward understanding the possible reason for delayed
              conception and selecting an appropriate path forward.
            </p>
          </div>

          <aside className="sukam-infertility-contact-card">
            <span className="sukam-infertility-contact-kicker">
              Consult
            </span>

            <h3>Dr Anitha A Manoj</h3>

            <p>Senior Fertility Specialist</p>
            <p>Highrisk Obstetrician</p>

            <div className="sukam-infertility-contact-divider" />

            <strong>
              Sukam Clinic – Maternity, Fertility & Speciality
            </strong>

            <span>Building Dreams, Delivering Miracles</span>

            <div className="sukam-infertility-contact-actions">
              <a href="tel:8108108310">
                Call 8108108310
              </a>

              <a href="tel:9108108980">
                Call 9108108980
              </a>

              <a
                href="https://www.sukamspeciality.in/"
                target="_blank"
                rel="noreferrer"
              >
                Visit Website
              </a>
            </div>
          </aside>
        </section>
      </div>
    </main>
  );
};

export default InfertilityInsights;