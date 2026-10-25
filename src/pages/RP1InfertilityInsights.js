import React, { useEffect, useMemo, useState } from "react";

import "./RP1InfertilityInsights1.css";

const consultationTimings = [
  {
    title: "After 12 months",
    description:
      "If the female partner is under 35 and pregnancy has not occurred after 12 months of regular, unprotected intercourse.",
  },
  {
    title: "After 6 months",
    description:
      "If the female partner is 35 or older and pregnancy has not occurred after six months of trying.",
  },
  {
    title: "Seek advice earlier",
    description:
      "If there are irregular periods, a known reproductive condition, male fertility concerns, previous surgery or any other concern about fertility.",
  },
];

const fertilitySteps = [
  "The woman must release a mature egg.",
  "The fallopian tube must be open and functional.",
  "Healthy sperm must reach and fertilise the egg.",
  "The fertilised egg must develop into an embryo.",
  "The embryo must travel to the uterus.",
  "The uterine environment must support implantation and pregnancy.",
];

const femaleFactors = [
  {
    title: "Ovulation problems",
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
      "Age can also affect natural conception, response to fertility medication and the risk of miscarriage.",
    ],
  },
  {
    title: "Fallopian tube problems",
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


const chapters = [
  "Your fertility journey",
  "Understanding fertility",
  "Female fertility factors",
  "Male fertility factors",
  "When to seek help",
  "Fertility tests",
  "Treatment options",
  "Healthy fertility habits",
  "Myths & facts",
  "Frequently asked questions",
  "Awareness quiz",
  "Next steps",
];

const spreadMeta = [
  {
    leftTitle: "Understanding Your Fertility Journey",
    rightTitle: "When should you seek help?",
  },
  {
    leftTitle: "What is infertility?",
    rightTitle: "How conception works",
  },
  {
    leftTitle: "Ovulation & age",
    rightTitle: "Tubal, pelvic & uterine factors",
  },
  {
    leftTitle: "Male fertility factors",
    rightTitle: "Unexplained infertility",
  },
  {
    leftTitle: "When to seek fertility advice earlier",
    rightTitle: "When not to wait",
  },
  {
    leftTitle: "Your fertility consultation",
    rightTitle: "Tests for both partners",
  },
  {
    leftTitle: "Treatment options",
    rightTitle: "Choosing the right treatment",
  },
  {
    leftTitle: "Lifestyle & fertility",
    rightTitle: "Emotional care & Sukam approach",
  },
  {
    leftTitle: "Fertility myths & facts",
    rightTitle: "More myths & facts",
  },
  {
    leftTitle: "Frequently asked questions",
    rightTitle: "More common questions",
  },
  {
    leftTitle: "Quick fertility awareness quiz",
    rightTitle: "Complete your quiz",
  },
  {
    leftTitle: "Take the first step with clarity",
    rightTitle: "End",
  },
];

const BulletList = ({ items, compact = false }) => (
  <ul className={`inf-reader-list ${compact ? "is-compact" : ""}`.trim()}>
    {items.map((item) => (
      <li key={item}>{item}</li>
    ))}
  </ul>
);

const PageNumber = ({ number }) => (
  <div className="inf-reader-page-number">
    <span>{String(number).padStart(2, "0")}</span>
  </div>
);

const InfoNote = ({ children }) => (
  <div className="inf-reader-info-note">
    <span className="inf-reader-info-icon" aria-hidden="true">
      i
    </span>
    <p>{children}</p>
  </div>
);

const ConsultationIllustration = () => (
  <svg
    className="inf-reader-illustration"
    viewBox="0 0 620 275"
    role="img"
    aria-label="Couple speaking with a fertility doctor"
  >
    <rect width="620" height="275" rx="16" fill="#f8f4f2" />
    <circle cx="85" cy="66" r="36" fill="#dcefe9" />
    <circle cx="554" cy="70" r="46" fill="#e4f1eb" />
    <rect x="44" y="193" width="536" height="52" rx="8" fill="#d7e6f3" />
    <rect x="438" y="143" width="82" height="54" rx="6" fill="#ffffff" />
    <rect x="451" y="156" width="56" height="7" rx="3.5" fill="#ef8cb8" />
    <rect x="451" y="171" width="42" height="7" rx="3.5" fill="#9cb9d7" />

    <circle cx="170" cy="116" r="29" fill="#e8b18d" />
    <path
      d="M137 113c3-37 55-50 70-13-11-7-20-6-27-3-12 5-24 14-43 16Z"
      fill="#244d72"
    />
    <rect x="143" y="144" width="69" height="84" rx="25" fill="#4d87c5" />

    <circle cx="278" cy="116" r="29" fill="#efb38e" />
    <path
      d="M243 112c8-36 56-45 72-7-10-7-25-10-39-7-13 3-24 10-33 14Z"
      fill="#43364b"
    />
    <path
      d="M246 128c2 52 8 79 8 104h55c0-27 5-58 6-106-22 18-46 17-69 2Z"
      fill="#4d3548"
    />
    <rect x="245" y="148" width="72" height="80" rx="28" fill="#ef78a6" />

    <circle cx="445" cy="103" r="29" fill="#ebb18c" />
    <path
      d="M410 100c8-34 53-42 68-5-12-7-26-9-39-6-11 3-20 7-29 11Z"
      fill="#263a58"
    />
    <path
      d="M422 132c14 18 38 18 49 0l28 24-10 72h-91l-7-73 31-23Z"
      fill="#ffffff"
    />
    <path d="M438 134v66M455 134v66" stroke="#6d8fb2" strokeWidth="5" />
    <circle cx="447" cy="176" r="10" fill="none" stroke="#6d8fb2" strokeWidth="5" />
    <path
      d="M391 170c-34 7-48 31-63 43"
      stroke="#ebb18c"
      strokeWidth="12"
      strokeLinecap="round"
    />
    <path
      d="M497 171c29 2 40 18 49 31"
      stroke="#ebb18c"
      strokeWidth="12"
      strokeLinecap="round"
    />

    <path
      d="M59 204c-13-44 4-74 25-97 9 28 2 60-25 97Z"
      fill="#8fc8b1"
      opacity=".8"
    />
    <path
      d="M557 202c-10-38 4-68 25-91 6 27-3 60-25 91Z"
      fill="#9bcab9"
      opacity=".8"
    />
  </svg>
);

const QuickCheck = ({
  questionIndex,
  selectedAnswers,
  onOptionClick,
  showResults,
  compact = false,
}) => {
  const question = quizData[questionIndex];

  return (
    <div className={`inf-reader-quick-check ${compact ? "is-compact" : ""}`.trim()}>
      <div className="inf-reader-quick-check-title">
        <span aria-hidden="true">✦</span>
        <strong>Quick check</strong>
      </div>

      <p>{question.question}</p>

      <div className="inf-reader-radio-list">
        {question.options.map((option) => {
          const isSelected = selectedAnswers[questionIndex] === option;
          const isCorrect = showResults && option === question.answer;
          const isIncorrect = showResults && isSelected && option !== question.answer;

          return (
            <button
              type="button"
              key={option}
              className={[
                "inf-reader-radio-option",
                isSelected ? "is-selected" : "",
                isCorrect ? "is-correct" : "",
                isIncorrect ? "is-incorrect" : "",
              ]
                .filter(Boolean)
                .join(" ")}
              onClick={() => onOptionClick(questionIndex, option)}
              disabled={showResults}
            >
              <span className="inf-reader-radio-dot" aria-hidden="true" />
              <span>{option}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

const MythFact = ({ item }) => (
  <div className="inf-reader-myth-fact">
    <span>Myth</span>
    <h3>{item.myth}</h3>
    <p>
      <strong>Fact:</strong> {item.fact}
    </p>
  </div>
);

const FaqItem = ({ item }) => (
  <div className="inf-reader-faq-card">
    <h3>{item.question}</h3>
    <p>{item.answer}</p>
  </div>
);

const BookPage = ({ side, pageNumber, children, onTurnPage, isEnd = false }) => (
  <article
    className={`inf-reader-book-page inf-reader-book-page--${side} ${
      isEnd ? "inf-reader-book-page--end" : ""
    }`.trim()}
  >
    <div className="inf-reader-paper-grain" aria-hidden="true" />
    <PageNumber number={pageNumber} />

    <div className="inf-reader-page-content">{children}</div>

    {side === "right" && onTurnPage && (
      <button type="button" className="inf-reader-turn-page" onClick={onTurnPage}>
        Turn page <span aria-hidden="true">↗</span>
      </button>
    )}
  </article>
);

const PageTurnSheet = ({ turnMeta }) => {
  if (!turnMeta) {
    return null;
  }

  return (
    <div
      className={`inf-reader-page-turn-sheet inf-reader-page-turn-sheet--${turnMeta.direction}`}
      aria-hidden="true"
    >
      <div className="inf-reader-turn-face inf-reader-turn-face--front">
        <div className="inf-reader-turn-page-number">
          {String(turnMeta.frontPage).padStart(2, "0")}
        </div>
        <h3>{turnMeta.frontTitle}</h3>
        <div className="inf-reader-turn-lines">
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
        <div className="inf-reader-turn-curl" />
      </div>

      <div className="inf-reader-turn-face inf-reader-turn-face--back">
        <div className="inf-reader-turn-page-number">
          {String(turnMeta.backPage).padStart(2, "0")}
        </div>
        <h3>{turnMeta.backTitle}</h3>
        <div className="inf-reader-turn-lines">
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
      </div>
    </div>
  );
};

const InfertilityInsights = () => {
  const [currentChapter, setCurrentChapter] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [fontScale, setFontScale] = useState(1);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isTurning, setIsTurning] = useState(false);
  const [turnMeta, setTurnMeta] = useState(null);

  const totalQuestions = quizData.length;
  const answeredCount = Object.keys(selectedAnswers).length;
  const chapterProgress = ((currentChapter + 1) / chapters.length) * 100;

  const quizResults = useMemo(() => {
    const correct = quizData.reduce(
      (score, question, index) =>
        score + (selectedAnswers[index] === question.answer ? 1 : 0),
      0
    );

    return {
      correct,
      wrong: totalQuestions - correct,
      percentage: Math.round((correct / totalQuestions) * 100),
    };
  }, [selectedAnswers, totalQuestions]);

  useEffect(() => {
    return () => {
      if ("speechSynthesis" in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  useEffect(() => {
    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    }
  }, [currentChapter]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowRight") {
        requestChapterChange(currentChapter + 1);
      }

      if (event.key === "ArrowLeft") {
        requestChapterChange(currentChapter - 1);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });

  const handleOptionClick = (questionIndex, option) => {
    if (showResults) {
      return;
    }

    setSelectedAnswers((current) => ({
      ...current,
      [questionIndex]: option,
    }));
  };

  const scrollBookIntoView = () => {
    window.requestAnimationFrame(() => {
      document.querySelector(".inf-reader-book-stage")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  };

  const requestChapterChange = (index) => {
    if (
      index < 0 ||
      index >= chapters.length ||
      index === currentChapter ||
      isTurning
    ) {
      return;
    }

    const direction = index > currentChapter ? "next" : "prev";
    const fromMeta = spreadMeta[currentChapter];
    const toMeta = spreadMeta[index];

    const nextTurnMeta =
      direction === "next"
        ? {
            direction,
            from: currentChapter,
            to: index,
            frontTitle: fromMeta.rightTitle,
            backTitle: toMeta.leftTitle,
            frontPage: currentChapter * 2 + 2,
            backPage: index * 2 + 1,
          }
        : {
            direction,
            from: currentChapter,
            to: index,
            frontTitle: fromMeta.leftTitle,
            backTitle: toMeta.rightTitle,
            frontPage: currentChapter * 2 + 1,
            backPage: index * 2 + 2,
          };

    setTurnMeta(nextTurnMeta);
    setIsTurning(true);

    window.setTimeout(() => {
      setCurrentChapter(index);
    }, 390);

    window.setTimeout(() => {
      setIsTurning(false);
      setTurnMeta(null);
      scrollBookIntoView();
    }, 820);
  };

  const handleFontSize = () => {
    setFontScale((current) => {
      if (current === 1) return 1.035;
      if (current === 1.035) return 0.965;
      return 1;
    });
  };

  const handleListen = () => {
    if (!("speechSynthesis" in window)) {
      return;
    }

    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      return;
    }

    const text = document.querySelector(".inf-reader-book-spread")?.innerText || "";

    if (!text.trim()) {
      return;
    }

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.95;
    utterance.pitch = 1;
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);

    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
    setIsSpeaking(true);
  };

  const renderChapter = () => {
    const leftPageNumber = currentChapter * 2 + 1;
    const rightPageNumber = leftPageNumber + 1;

    switch (currentChapter) {
      case 0:
        return (
          <>
            <BookPage side="left" pageNumber={leftPageNumber}>
              <h2>Understanding Your Fertility Journey</h2>

              <p className="inf-reader-lead-copy">
                Every fertility journey begins with understanding.
              </p>

              <p>
                For many couples, trying to conceive begins with hope and excitement. But
                when pregnancy does not happen as expected, the same journey can gradually
                become confusing, stressful and emotionally exhausting.
              </p>

              <p>
                Delayed conception does not always mean that pregnancy is impossible. It may
                simply mean that the couple would benefit from a systematic fertility
                evaluation.
              </p>

              <div className="inf-reader-quote-card">
                <span aria-hidden="true">“</span>
                <p>
                  Every journey to parenthood is different. The right information can help
                  you take the next step with confidence.
                </p>
              </div>

              <ConsultationIllustration />
            </BookPage>

            <BookPage
              side="right"
              pageNumber={rightPageNumber}
              onTurnPage={() => requestChapterChange(1)}
            >
              <h2>When should you seek help?</h2>

              <div className="inf-reader-timeline">
                {consultationTimings.map((item, index) => (
                  <div className="inf-reader-timeline-item" key={item.title}>
                    <span>{index + 1}</span>
                    <div>
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <InfoNote>
                Your doctor may recommend an earlier evaluation based on your medical
                history and individual situation.
              </InfoNote>

              <QuickCheck
                questionIndex={1}
                selectedAnswers={selectedAnswers}
                onOptionClick={handleOptionClick}
                showResults={showResults}
              />
            </BookPage>
          </>
        );

      case 1:
        return (
          <>
            <BookPage side="left" pageNumber={leftPageNumber}>
              <h2>What is infertility?</h2>

              <p>
                Infertility is generally defined as the inability to achieve pregnancy after
                12 months or more of regular, unprotected sexual intercourse.
              </p>

              <div className="inf-reader-highlight-box">
                <strong>Fertility is a shared journey.</strong>
                <p>
                  Infertility is not solely a woman’s concern or a man’s concern. Both
                  partners should ideally be evaluated together.
                </p>
              </div>

              <h3>Primary infertility</h3>
              <p>
                Primary infertility refers to difficulty achieving a first pregnancy despite
                regular, unprotected intercourse for the recommended period.
              </p>

              <h3>Secondary infertility</h3>
              <p>
                Secondary infertility occurs when a couple has conceived in the past but is
                currently unable to achieve another pregnancy.
              </p>

              <p className="inf-reader-small-note">
                Having conceived earlier does not guarantee that fertility will remain
                unchanged. Age, ovulation, ovarian reserve, sperm factors, infections and
                surgery can influence future fertility.
              </p>
            </BookPage>

            <BookPage
              side="right"
              pageNumber={rightPageNumber}
              onTurnPage={() => requestChapterChange(2)}
            >
              <h2>How conception works</h2>

              <p>
                Pregnancy requires several biological events to occur in the correct
                sequence.
              </p>

              <div className="inf-reader-numbered-list">
                {fertilitySteps.map((step, index) => (
                  <div key={step}>
                    <span>{index + 1}</span>
                    <p>{step}</p>
                  </div>
                ))}
              </div>

              <InfoNote>
                A difficulty at any stage can reduce the chance of conception. Sometimes
                more than one factor may be present.
              </InfoNote>

              <QuickCheck
                questionIndex={0}
                selectedAnswers={selectedAnswers}
                onOptionClick={handleOptionClick}
                showResults={showResults}
              />
            </BookPage>
          </>
        );

      case 2:
        return (
          <>
            <BookPage side="left" pageNumber={leftPageNumber}>
              <h2>Ovulation & age</h2>

              <h3>{femaleFactors[0].title}</h3>
              <p>
                Irregular or absent ovulation is a common reason for delayed conception. It
                may be associated with:
              </p>
              <BulletList items={femaleFactors[0].items} compact />
              <p className="inf-reader-small-note">{femaleFactors[0].note}</p>

              <h3>{femaleFactors[1].title}</h3>
              {femaleFactors[1].paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </BookPage>

            <BookPage
              side="right"
              pageNumber={rightPageNumber}
              onTurnPage={() => requestChapterChange(3)}
            >
              <h2>Tubal, pelvic & uterine factors</h2>

              <h3>{femaleFactors[2].title}</h3>
              <BulletList items={femaleFactors[2].items} compact />

              <h3>{femaleFactors[3].title}</h3>
              <BulletList items={femaleFactors[3].items} compact />

              <h3>{femaleFactors[4].title}</h3>
              <BulletList items={femaleFactors[4].items} compact />

              <InfoNote>{femaleFactors[4].note}</InfoNote>
            </BookPage>
          </>
        );

      case 3:
        return (
          <>
            <BookPage side="left" pageNumber={leftPageNumber}>
              <h2>Male fertility factors</h2>

              <p>
                Male fertility depends on sperm production, sperm quality and the ability to
                deliver sperm into the female reproductive tract.
              </p>

              <BulletList items={maleConcerns} compact />

              <div className="inf-reader-highlight-box">
                <strong>Semen analysis</strong>
                <p>
                  A semen analysis is usually one of the first investigations in a fertility
                  evaluation. An abnormal result should be interpreted carefully and may
                  sometimes need to be repeated.
                </p>
              </div>
            </BookPage>

            <BookPage
              side="right"
              pageNumber={rightPageNumber}
              onTurnPage={() => requestChapterChange(4)}
            >
              <h2>Unexplained infertility</h2>

              <p>
                In some couples, ovulation appears normal, the fallopian tubes are open, the
                uterus does not show a significant abnormality and semen parameters are
                within acceptable limits—but pregnancy still does not occur.
              </p>

              <div className="inf-reader-quote-card is-blue">
                <span aria-hidden="true">“</span>
                <p>
                  Unexplained infertility does not mean there is no reason. It means standard
                  investigations have not identified a definite cause.
                </p>
              </div>

              <p>
                Fertilisation, egg quality, sperm function, embryo development or
                implantation may involve factors that routine tests cannot fully measure.
              </p>

              <p>
                Treatment is selected according to age, duration of infertility, previous
                treatment and the overall fertility profile.
              </p>

              <QuickCheck
                questionIndex={4}
                selectedAnswers={selectedAnswers}
                onOptionClick={handleOptionClick}
                showResults={showResults}
              />
            </BookPage>
          </>
        );

      case 4:
        return (
          <>
            <BookPage side="left" pageNumber={leftPageNumber}>
              <h2>When to seek fertility advice earlier</h2>

              <p>
                Consider consulting a fertility specialist without waiting for 12 months if
                any of the following apply:
              </p>

              <BulletList items={earlyAdviceItems.slice(0, 7)} />

              <InfoNote>
                Early evaluation is particularly important when reproductive time may
                influence the available treatment choices.
              </InfoNote>
            </BookPage>

            <BookPage
              side="right"
              pageNumber={rightPageNumber}
              onTurnPage={() => requestChapterChange(5)}
            >
              <h2>When not to wait</h2>

              <BulletList items={earlyAdviceItems.slice(7)} />

              <div className="inf-reader-highlight-box">
                <strong>Earlier advice can provide clarity.</strong>
                <p>
                  Seeking an evaluation does not automatically mean IVF will be required.
                  Sometimes the next step may be timing guidance, treatment of a hormonal
                  condition, infection management or evaluation of a male factor.
                </p>
              </div>

              <div className="inf-reader-quote-card">
                <span aria-hidden="true">“</span>
                <p>
                  A fertility consultation is an assessment, not a commitment to advanced
                  treatment.
                </p>
              </div>
            </BookPage>
          </>
        );

      case 5:
        return (
          <>
            <BookPage side="left" pageNumber={leftPageNumber}>
              <h2>Your fertility consultation</h2>

              <p>
                Fertility evaluation should be systematic and individualised. Not every
                couple requires every available test.
              </p>

              <h3>Your doctor may discuss</h3>
              <BulletList items={consultationTopics} compact />

              <div className="inf-reader-highlight-box">
                <strong>Attend together whenever possible</strong>
                <p>
                  Both partners’ histories and results are considered together before
                  treatment is planned.
                </p>
              </div>
            </BookPage>

            <BookPage
              side="right"
              pageNumber={rightPageNumber}
              onTurnPage={() => requestChapterChange(6)}
            >
              <h2>Tests for both partners</h2>

              <div className="inf-reader-two-mini-columns">
                <div>
                  <h3>For women</h3>
                  <BulletList items={femaleEvaluation} compact />
                </div>

                <div>
                  <h3>For men</h3>
                  <BulletList items={maleEvaluation} compact />
                </div>
              </div>

              <InfoNote>
                Ovarian reserve tests estimate likely ovarian response; they do not by
                themselves determine whether natural conception is possible or impossible.
              </InfoNote>

              <QuickCheck
                questionIndex={3}
                selectedAnswers={selectedAnswers}
                onOptionClick={handleOptionClick}
                showResults={showResults}
              />
            </BookPage>
          </>
        );

      case 6:
        return (
          <>
            <BookPage side="left" pageNumber={leftPageNumber}>
              <h2>Treatment options</h2>

              <div className="inf-reader-no-banner">
                <strong>No.</strong>
                <p>
                  Infertility does not always require IVF. Treatment should match the cause,
                  age, duration of infertility and individual circumstances.
                </p>
              </div>

              <h3>Treatment may include</h3>
              <BulletList items={treatmentOptions.slice(0, 6)} />
            </BookPage>

            <BookPage
              side="right"
              pageNumber={rightPageNumber}
              onTurnPage={() => requestChapterChange(7)}
            >
              <h2>Choosing the right treatment</h2>

              <BulletList items={treatmentOptions.slice(6)} />

              <div className="inf-reader-highlight-box">
                <strong>Most suitable, not automatically most advanced</strong>
                <p>
                  The goal is to select an appropriate pathway while considering medical
                  findings, time, emotional readiness and personal preferences.
                </p>
              </div>

              <QuickCheck
                questionIndex={2}
                selectedAnswers={selectedAnswers}
                onOptionClick={handleOptionClick}
                showResults={showResults}
              />
            </BookPage>
          </>
        );

      case 7:
        return (
          <>
            <BookPage side="left" pageNumber={leftPageNumber}>
              <h2>Lifestyle & fertility</h2>

              <p>
                Lifestyle changes cannot correct every fertility condition, but they can
                support reproductive and general health.
              </p>

              <BulletList items={lifestyleMeasures} />

              <InfoNote>
                Be cautious about unproven supplements, detox programmes and treatments that
                promise guaranteed pregnancy.
              </InfoNote>
            </BookPage>

            <BookPage
              side="right"
              pageNumber={rightPageNumber}
              onTurnPage={() => requestChapterChange(8)}
            >
              <h2>Emotional care & Sukam approach</h2>

              <div className="inf-reader-quote-card">
                <span aria-hidden="true">“</span>
                <p>
                  Neither partner should be blamed. Infertility is a medical concern—not a
                  personal failure.
                </p>
              </div>

              <p>
                Open communication, emotional support and counselling can help couples cope
                with investigations and treatment.
              </p>

              <h3>Our approach at Sukam Clinic</h3>
              <BulletList items={clinicApproach} compact />
            </BookPage>
          </>
        );

      case 8:
        return (
          <>
            <BookPage side="left" pageNumber={leftPageNumber}>
              <h2>Fertility myths & facts</h2>

              <div className="inf-reader-myth-stack">
                {mythsAndFacts.slice(0, 3).map((item) => (
                  <MythFact item={item} key={item.myth} />
                ))}
              </div>
            </BookPage>

            <BookPage
              side="right"
              pageNumber={rightPageNumber}
              onTurnPage={() => requestChapterChange(9)}
            >
              <h2>More myths & facts</h2>

              <div className="inf-reader-myth-stack">
                {mythsAndFacts.slice(3).map((item) => (
                  <MythFact item={item} key={item.myth} />
                ))}
              </div>

              <InfoNote>
                Fertility information should be interpreted in the context of the individual
                couple rather than through general assumptions.
              </InfoNote>
            </BookPage>
          </>
        );

      case 9:
        return (
          <>
            <BookPage side="left" pageNumber={leftPageNumber}>
              <h2>Frequently asked questions</h2>

              <div className="inf-reader-faq-stack">
                {faqs.slice(0, 3).map((item) => (
                  <FaqItem item={item} key={item.question} />
                ))}
              </div>
            </BookPage>

            <BookPage
              side="right"
              pageNumber={rightPageNumber}
              onTurnPage={() => requestChapterChange(10)}
            >
              <h2>More common questions</h2>

              <div className="inf-reader-faq-stack">
                {faqs.slice(3).map((item) => (
                  <FaqItem item={item} key={item.question} />
                ))}
              </div>
            </BookPage>
          </>
        );

      case 10:
        return (
          <>
            <BookPage side="left" pageNumber={leftPageNumber}>
              <h2>Quick fertility awareness quiz</h2>

              <p className="inf-reader-quiz-intro">
                Answer all five questions, then check your score on the next page.
              </p>

              {[0, 1, 2].map((questionIndex) => (
                <QuickCheck
                  key={quizData[questionIndex].question}
                  questionIndex={questionIndex}
                  selectedAnswers={selectedAnswers}
                  onOptionClick={handleOptionClick}
                  showResults={showResults}
                  compact
                />
              ))}
            </BookPage>

            <BookPage
              side="right"
              pageNumber={rightPageNumber}
              onTurnPage={() => requestChapterChange(11)}
            >
              <h2>Complete your quiz</h2>

              {[3, 4].map((questionIndex) => (
                <QuickCheck
                  key={quizData[questionIndex].question}
                  questionIndex={questionIndex}
                  selectedAnswers={selectedAnswers}
                  onOptionClick={handleOptionClick}
                  showResults={showResults}
                  compact
                />
              ))}

              {!showResults && (
                <button
                  type="button"
                  className="inf-reader-result-button"
                  disabled={answeredCount !== totalQuestions}
                  onClick={() => setShowResults(true)}
                >
                  See Results
                </button>
              )}

              {showResults && (
                <div className="inf-reader-result-card" aria-live="polite">
                  <strong>{quizResults.percentage}%</strong>
                  <div>
                    <h3>Your fertility awareness score</h3>
                    <p>
                      {quizResults.correct} correct · {quizResults.wrong} incorrect
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setSelectedAnswers({});
                        setShowResults(false);
                      }}
                    >
                      Try again
                    </button>
                  </div>
                </div>
              )}

              <InfoNote>
                Continue to the final spread for clinic details and the end of this guide.
              </InfoNote>
            </BookPage>
          </>
        );

      case 11:
      default:
        return (
          <>
            <BookPage side="left" pageNumber={leftPageNumber}>
              <h2>Take the first step with clarity</h2>

              <p>
                If pregnancy has not occurred within the expected time—or if either partner
                has a condition that may affect fertility—an early consultation can provide
                clarity.
              </p>

              <p>
                A fertility evaluation is not a commitment to IVF. It is the first step
                toward understanding the possible reason for delayed conception and selecting
                an appropriate path forward.
              </p>

              <div className="inf-reader-contact-card">
                <span>Consult</span>
                <h3>Dr Anitha A Manoj</h3>
                <p>Senior Fertility Specialist · Highrisk Obstetrician</p>
                <strong>Sukam Clinic – Maternity, Fertility & Speciality</strong>
                <em>Building Dreams, Delivering Miracles</em>

                <div>
                  <a href="tel:8108108310">8108108310</a>
                  <a href="tel:9108108980">9108108980</a>
                  <a
                    href="https://www.sukamspeciality.in/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Visit website
                  </a>
                </div>
              </div>

              <div className="inf-reader-final-reminder">
                <strong>Remember</strong>
                <p>
                  Every couple’s situation is different. Clear counselling, realistic
                  expectations and personalised care remain central to ethical fertility
                  treatment.
                </p>
              </div>
            </BookPage>

            <BookPage side="right" pageNumber={rightPageNumber} isEnd>
              <div className="inf-reader-end-page">
                <div className="inf-reader-end-heart" aria-hidden="true">
                  ♡
                </div>
                <span>Infertility Insights</span>
                <h2>End</h2>
                <p>
                  Thank you for taking the time to understand your fertility journey.
                </p>
                <div className="inf-reader-end-rule" />
                <strong>Better information. Brighter tomorrows.</strong>
              </div>
            </BookPage>
          </>
        );
    }
  };

  return (
    <main className="inf-reader" style={{ "--reader-scale": fontScale }}>
      <header className="inf-reader-header">
        <div className="inf-reader-header-mark" aria-hidden="true">
          ♡
        </div>

        <div className="inf-reader-header-copy">
          <h1>Infertility Insights</h1>
          <p>A patient-friendly guide to understanding your fertility journey</p>
        </div>

        <div className="inf-reader-header-decoration" aria-hidden="true" />
      </header>

      <div className="inf-reader-layout">
        <aside className="inf-reader-contents">
          <h2>CONTENTS</h2>

          <nav aria-label="Infertility guide chapters">
            {chapters.map((chapter, index) => (
              <button
                type="button"
                key={chapter}
                className={currentChapter === index ? "is-active" : ""}
                onClick={() => requestChapterChange(index)}
                disabled={isTurning}
              >
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{chapter}</strong>
              </button>
            ))}
          </nav>

          <div className="inf-reader-contents-footer">
            <span aria-hidden="true">♡</span>
            <p>
              Better information.
              <br />
              Brighter tomorrows.
            </p>
          </div>
        </aside>

        <section className="inf-reader-book-stage">
          <div className="inf-reader-tools">
            <button
              type="button"
              className="inf-reader-tool-button"
              onClick={handleFontSize}
              aria-label="Change reading font size"
              title="Change font size"
              disabled={isTurning}
            >
              <span>Aa</span>
              <small>⌄</small>
            </button>

            <button
              type="button"
              className={`inf-reader-tool-button ${isSpeaking ? "is-active" : ""}`.trim()}
              onClick={handleListen}
              aria-label={isSpeaking ? "Stop listening" : "Listen to chapter"}
              disabled={isTurning}
            >
              <span aria-hidden="true">◉</span>
              <strong>{isSpeaking ? "Stop" : "Listen"}</strong>
            </button>
          </div>

          <div
            className={`inf-reader-book-spread ${isTurning ? "is-turning" : ""}`.trim()}
          >
            {renderChapter()}
            <PageTurnSheet turnMeta={turnMeta} />
          </div>

          <div className="inf-reader-navigation">
            <button
              type="button"
              className="inf-reader-nav-button inf-reader-nav-button--previous"
              onClick={() => requestChapterChange(currentChapter - 1)}
              disabled={currentChapter === 0 || isTurning}
            >
              <span aria-hidden="true">←</span>
              Previous
            </button>

            <div className="inf-reader-progress">
              <strong>
                Chapter {currentChapter + 1} of {chapters.length}
              </strong>

              <div className="inf-reader-progress-row">
                <div className="inf-reader-progress-track">
                  <div
                    className="inf-reader-progress-fill"
                    style={{ width: `${chapterProgress}%` }}
                  />
                </div>
                <span>{Math.round(chapterProgress)}%</span>
              </div>
            </div>

            <button
              type="button"
              className="inf-reader-nav-button inf-reader-nav-button--next"
              onClick={() => requestChapterChange(currentChapter + 1)}
              disabled={currentChapter === chapters.length - 1 || isTurning}
            >
              Next page
              <span aria-hidden="true">→</span>
            </button>
          </div>

          <p className="inf-reader-keyboard-hint">
            Tip: use the left and right arrow keys to turn pages.
          </p>
        </section>
      </div>
    </main>
  );
};

export default InfertilityInsights;
