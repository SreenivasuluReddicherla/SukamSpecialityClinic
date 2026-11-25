import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import "./RP2DecliningFertility.css";

/**
 * Declining Fertility — Sukam digital patient guide.
 * Uses the same book layout, page turning, and responsive design patterns
 * as the supplied RP1 Infertility Insights reader.
 */

const ageMilestones = [
  { age: "Before 30", detail: "Fertility at peak, high egg quality" },
  { age: "30–35", detail: "Gradual decline begins" },
  { age: "35–38", detail: "Sharper drop, higher miscarriage risk" },
  { age: "38–40", detail: "Significant reduction in natural conception" },
  { age: "After 40", detail: "Low egg quality; IVF success rates also decline" },
];

// Figures are from the client's supplied article. They should be clinically
// reviewed before publication; individual outcomes vary substantially.
const ageStatistics = [
  { age: "<30", conception: "20–25%", miscarriage: "<10%", ivf: "45–50%" },
  { age: "35", conception: "15%", miscarriage: "20%", ivf: "35–40%" },
  { age: "38", conception: "10%", miscarriage: "30%", ivf: "20–25%" },
  { age: "40", conception: "5–8%", miscarriage: "40%+", ivf: "10–15%" },
  { age: ">43", conception: "<3%", miscarriage: "50%+", ivf: "<5%" },
];

const maleChanges = [
  "Lower sperm count and motility",
  "Increased sperm DNA fragmentation",
  "Delayed conception",
  "Higher risk of autism, schizophrenia, and genetic conditions in children",
];

const acceleratingFactors = [
  { label: "Lifestyle", detail: "Smoking, alcohol, obesity, lack of sleep" },
  { label: "Medical", detail: "PCOS, endometriosis, fibroids, autoimmune disease" },
  { label: "Environmental", detail: "Toxins, pesticides, endocrine disruptors" },
  { label: "Stress", detail: "Chronic emotional stress affects hormones" },
];

const womensTests = [
  "AMH, FSH, LH, Estradiol levels",
  "Antral Follicle Count (AFC) via ultrasound",
  "Ovulation tracking (LH kits, BBT, scan)",
  "HSG for tube blockage, biopsy if indicated",
];

const mensTests = [
  "Semen analysis (count, motility, morphology)",
  "DNA fragmentation test",
  "Hormone panel: FSH, LH, Testosterone",
];

const preservationMethods = [
  {
    title: "Egg Freezing",
    detail: "Best before 35; helpful for career/family delay or cancer patients",
  },
  {
    title: "Sperm Freezing",
    detail: "Ideal for men delaying marriage or with risky jobs",
  },
  {
    title: "Embryo Freezing",
    detail: "Common with IVF for future use",
  },
  {
    title: "Ovarian Tissue Freezing",
    detail: "Still experimental, promising for cancer survivors",
  },
];

const artOptions = [
  {
    title: "Ovulation Induction",
    detail: "Letrozole, Clomiphene for cycle regularization",
  },
  {
    title: "IUI",
    detail: "Simple, less invasive, useful in early-stage infertility",
  },
  {
    title: "IVF & ICSI",
    detail: "Best chance when egg quality/quantity is low",
  },
  {
    title: "Donor Gametes",
    detail: "Option if own egg/sperm is non-viable",
  },
  {
    title: "PGT-A",
    detail: "Genetic testing of embryos to avoid miscarriage",
  },
];

const emotionalChallenges = [
  "Guilt over “waiting too long”",
  "Pressure from family/society",
  "Fear of missing out on motherhood or fatherhood",
  "Emotional burnout from repeated treatments",
];

const faqs = [
  {
    question: "Can I conceive naturally after 40?",
    answer: "Yes, but chances are low. IVF may be needed.",
  },
  {
    question: "Does male fertility decline?",
    answer: "Yes, sperm quality declines after age 40–45.",
  },
  {
    question: "What’s the cost of egg freezing?",
    answer: "₹80,000–₹1.5 lakhs, plus annual storage fees.",
  },
  {
    question: "Can stress alone cause infertility?",
    answer: "Rarely by itself, but it impacts hormones.",
  },
  {
    question: "When should I see a fertility expert?",
    answer: "After 12 months of trying (<35) or 6 months (>35).",
  },
  {
    question: "How many eggs should I freeze?",
    answer: "12–15 mature eggs recommended for 1–2 children.",
  },
  {
    question: "Can diet improve fertility?",
    answer: "Yes. Antioxidants, omega-3s, and balanced meals help.",
  },
  {
    question: "Does birth control delay fertility long-term?",
    answer: "No. Fertility resumes after stopping pills.",
  },
];

const clinicServices = [
  "Early screening and personalized strategies",
  "Egg, sperm & embryo freezing",
  "ART options and mind-body care",
  "Total support for every life stage",
];

const quizData = [
  {
    question: "At what age does female fertility begin to decline?",
    options: ["25", "30", "35", "40"],
    answer: "35",
  },
  {
    question: "AMH is used to evaluate:",
    options: ["Tubal function", "Uterine lining", "Ovarian reserve", "Menstrual length"],
    answer: "Ovarian reserve",
  },
  {
    question: "A man’s sperm DNA quality can be tested with:",
    options: ["HSG", "AFC", "DFI", "AMH"],
    answer: "DFI",
  },
  {
    question: "Best age to consider egg freezing:",
    options: ["After 40", "Before 35", "After menopause", "Age doesn't matter"],
    answer: "Before 35",
  },
  {
    question: "Which is NOT a method of fertility preservation?",
    options: ["Embryo freezing", "Ovulation induction", "Sperm banking", "Oocyte freezing"],
    answer: "Ovulation induction",
  },
  {
    question: "PGT-A helps detect:",
    options: ["Tubal scarring", "Hormonal imbalance", "Chromosomal abnormalities", "Fibroids"],
    answer: "Chromosomal abnormalities",
  },
  {
    question: "Which lifestyle factor does NOT improve fertility?",
    options: ["Regular exercise", "Smoking", "Healthy weight", "Antioxidants"],
    answer: "Smoking",
  },
  {
    question: "What is the role of Letrozole in fertility?",
    options: ["Stimulates ovulation", "Improves sperm count", "Treats fibroids", "Freezes eggs"],
    answer: "Stimulates ovulation",
  },
  {
    question: "Which hormone indicates poor ovarian reserve if elevated?",
    options: ["FSH", "LH", "TSH", "Prolactin"],
    answer: "FSH",
  },
  {
    question: "Emotional wellness in fertility care includes:",
    options: ["Counseling", "Support groups", "Mindfulness", "All of the above"],
    answer: "All of the above",
  },
];

const chapters = [
  { label: "Understanding decline", leftTitle: "What is Declining Fertility?", rightTitle: "The Biological Clock" },
  { label: "Age & male fertility", leftTitle: "Fertility by Age", rightTitle: "Understanding Male Fertility Decline" },
  { label: "Fertility influences", leftTitle: "Factors That Accelerate Decline", rightTitle: "Everyday Fertility Habits" },
  { label: "Fertility assessment", leftTitle: "How Women Assess Fertility", rightTitle: "How Men Assess Fertility" },
  { label: "Preserving fertility", leftTitle: "Freezing Eggs & Ovarian Tissue", rightTitle: "Sperm & Embryo Freezing" },
  { label: "Treatment options", leftTitle: "Ovulation Induction & IUI", rightTitle: "IVF, ICSI & Other Options" },
  { label: "Emotional wellbeing", leftTitle: "The Emotional Impact", rightTitle: "Finding Support" },
  { label: "Common questions", leftTitle: "FAQs: Age & Fertility", rightTitle: "FAQs: Planning Ahead" },
  { label: "Your fertility timeline", leftTitle: "Your Fertility, Your Timeline", rightTitle: "Sukam Clinic Support" },
  { label: "Quiz: Questions 1–4", leftTitle: "Quiz: Questions 1 & 2", rightTitle: "Quiz: Questions 3 & 4" },
  { label: "Quiz: Questions 5–8", leftTitle: "Quiz: Questions 5 & 6", rightTitle: "Quiz: Questions 7 & 8" },
  { label: "Quiz: Final questions", leftTitle: "Quiz: Questions 9 & 10", rightTitle: "Your Quiz Results" },
  { label: "Score breakdown", leftTitle: "Score Breakdown: 1–5", rightTitle: "Score Breakdown: 6–10" },
  { label: "Next steps & End", leftTitle: "Take the First Step", rightTitle: "End" },
];

const BulletList = ({ items, compact = false }) => (
  <ul className={`df-reader-list ${compact ? "is-compact" : ""}`.trim()}>
    {items.map((item) => <li key={item}>{item}</li>)}
  </ul>
);

const LabeledList = ({ items }) => (
  <div className="df-reader-labeled-list">
    {items.map((item) => (
      <div key={item.title || item.label} className="df-reader-labeled-item">
        <strong>{item.title || item.label}</strong>
        <p>{item.detail}</p>
      </div>
    ))}
  </div>
);

const InfoNote = ({ children }) => (
  <div className="df-reader-info-note">
    <span className="df-reader-info-icon" aria-hidden="true">i</span>
    <p>{children}</p>
  </div>
);

const QuoteCard = ({ children }) => (
  <div className="df-reader-quote-card">
    <span aria-hidden="true">“</span>
    <p>{children}</p>
  </div>
);

const ConsultationIllustration = () => (
  <svg
    className="df-reader-illustration"
    viewBox="0 0 620 275"
    role="img"
    aria-label="A couple discussing fertility plans with a doctor"
  >
    <rect width="620" height="275" rx="16" fill="#f8f4f2" />
    <circle cx="85" cy="66" r="36" fill="#dcefe9" />
    <circle cx="554" cy="70" r="46" fill="#e4f1eb" />
    <rect x="44" y="193" width="536" height="52" rx="8" fill="#d7e6f3" />
    <rect x="438" y="143" width="82" height="54" rx="6" fill="#ffffff" />
    <rect x="451" y="156" width="56" height="7" rx="3.5" fill="#ef8cb8" />
    <rect x="451" y="171" width="42" height="7" rx="3.5" fill="#9cb9d7" />
    <circle cx="170" cy="116" r="29" fill="#e8b18d" />
    <path d="M137 113c3-37 55-50 70-13-11-7-20-6-27-3-12 5-24 14-43 16Z" fill="#244d72" />
    <rect x="143" y="144" width="69" height="84" rx="25" fill="#4d87c5" />
    <circle cx="278" cy="116" r="29" fill="#efb38e" />
    <path d="M243 112c8-36 56-45 72-7-10-7-25-10-39-7-13 3-24 10-33 14Z" fill="#43364b" />
    <path d="M246 128c2 52 8 79 8 104h55c0-27 5-58 6-106-22 18-46 17-69 2Z" fill="#4d3548" />
    <rect x="245" y="148" width="72" height="80" rx="28" fill="#ef78a6" />
    <circle cx="445" cy="103" r="29" fill="#ebb18c" />
    <path d="M410 100c8-34 53-42 68-5-12-7-26-9-39-6-11 3-20 7-29 11Z" fill="#263a58" />
    <path d="M422 132c14 18 38 18 49 0l28 24-10 72h-91l-7-73 31-23Z" fill="#ffffff" />
    <path d="M438 134v66M455 134v66" stroke="#6d8fb2" strokeWidth="5" />
    <circle cx="447" cy="176" r="10" fill="none" stroke="#6d8fb2" strokeWidth="5" />
    <path d="M391 170c-34 7-48 31-63 43" stroke="#ebb18c" strokeWidth="12" strokeLinecap="round" />
    <path d="M497 171c29 2 40 18 49 31" stroke="#ebb18c" strokeWidth="12" strokeLinecap="round" />
    <path d="M59 204c-13-44 4-74 25-97 9 28 2 60-25 97Z" fill="#8fc8b1" opacity=".8" />
    <path d="M557 202c-10-38 4-68 25-91 6 27-3 60-25 91Z" fill="#9bcab9" opacity=".8" />
  </svg>
);

const AgeStatisticsTable = () => (
  <div className="df-reader-table-wrap">
    <table className="df-reader-age-table">
      <caption>Age-related fertility estimates from the supplied guide</caption>
      <thead>
        <tr>
          <th scope="col">Age</th>
          <th scope="col">Monthly conception chance</th>
          <th scope="col">Miscarriage risk</th>
          <th scope="col">IVF success rate</th>
        </tr>
      </thead>
      <tbody>
        {ageStatistics.map((row) => (
          <tr key={row.age}>
            <td data-label="Age">{row.age}</td>
            <td data-label="Monthly conception">{row.conception}</td>
            <td data-label="Miscarriage risk">{row.miscarriage}</td>
            <td data-label="IVF success">{row.ivf}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const QuickCheck = ({ index, selectedAnswers, showResults, onSelect }) => {
  const item = quizData[index];
  return (
    <div className="df-reader-quick-check df-reader-quick-check--decline">
      <div className="df-reader-quick-check-title">
        <span aria-hidden="true">✦</span>
        <strong>Question {index + 1} of {quizData.length}</strong>
      </div>
      <p>{item.question}</p>
      <div className="df-reader-radio-list">
        {item.options.map((option) => {
          const selected = selectedAnswers[index] === option;
          const correct = showResults && option === item.answer;
          const incorrect = showResults && selected && option !== item.answer;
          return (
            <button
              type="button"
              key={option}
              disabled={showResults}
              aria-pressed={selected}
              className={[
                "df-reader-radio-option",
                selected ? "is-selected" : "",
                correct ? "is-correct" : "",
                incorrect ? "is-incorrect" : "",
              ].filter(Boolean).join(" ")}
              onClick={() => onSelect(index, option)}
            >
              <span className="df-reader-radio-dot" aria-hidden="true" />
              <span>{option}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

const BookPage = ({ side, number, title, onTurnPage, isEnd = false, children }) => (
  <article
    className={`df-reader-book-page df-reader-book-page--${side} ${isEnd ? "df-reader-book-page--end" : ""}`.trim()}
  >
    <div className="df-reader-paper-grain" aria-hidden="true" />
    <div className="df-reader-page-number">
      <span>{String(number).padStart(2, "0")}</span>
    </div>
    <div className="df-reader-page-content">
      {!isEnd && <h2>{title}</h2>}
      {children}
    </div>
    {side === "right" && onTurnPage && (
      <button type="button" className="df-reader-turn-page" onClick={onTurnPage}>
        Turn page <span aria-hidden="true">↗</span>
      </button>
    )}
  </article>
);

const PageTurnSheet = ({ meta }) => {
  if (!meta) return null;
  return (
    <div
      className={`df-reader-page-turn-sheet df-reader-page-turn-sheet--${meta.direction}`}
      aria-hidden="true"
    >
      <div className="df-reader-turn-face df-reader-turn-face--front">
        <div className="df-reader-turn-page-number">
          {String(meta.frontPage).padStart(2, "0")}
        </div>
        <h3>{meta.frontTitle}</h3>
        <div className="df-reader-turn-lines">
          <span /><span /><span /><span /><span />
        </div>
        <div className="df-reader-turn-curl" />
      </div>
      <div className="df-reader-turn-face df-reader-turn-face--back">
        <div className="df-reader-turn-page-number">
          {String(meta.backPage).padStart(2, "0")}
        </div>
        <h3>{meta.backTitle}</h3>
        <div className="df-reader-turn-lines">
          <span /><span /><span /><span /><span />
        </div>
      </div>
    </div>
  );
};

const ScoreDetails = ({ start, end, showResults, selectedAnswers }) => {
  if (!showResults) {
    return (
      <InfoNote>
        Complete all 10 quiz questions and select See Results to unlock your detailed score breakdown.
      </InfoNote>
    );
  }
  return (
    <div className="df-reader-score-details">
      {quizData.slice(start, end).map((item, localIndex) => {
        const index = start + localIndex;
        const correct = selectedAnswers[index] === item.answer;
        return (
          <div className="df-reader-score-detail" key={item.question}>
            <div className="df-reader-score-detail-heading">
              <strong>Q{index + 1}. {item.question}</strong>
              <span className={correct ? "is-correct" : "is-incorrect"}>
                {correct ? "Correct" : "Incorrect"}
              </span>
            </div>
            <p><strong>Your answer:</strong> {selectedAnswers[index] || "Not answered"}</p>
            {!correct && <p><strong>Correct answer:</strong> {item.answer}</p>}
          </div>
        );
      })}
    </div>
  );
};

const DecliningFertility = () => {
  const [currentChapter, setCurrentChapter] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [fontScale, setFontScale] = useState(1);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [turnMeta, setTurnMeta] = useState(null);
  const [isTurning, setIsTurning] = useState(false);

  const bookStageRef = useRef(null);
  const bookSpreadRef = useRef(null);
  const turnTimersRef = useRef([]);
  const isTurningRef = useRef(false);

  const totalQuestions = quizData.length;
  const answeredCount = Object.keys(selectedAnswers).length;
  const quizProgress = (answeredCount / totalQuestions) * 100;
  const chapterProgress = ((currentChapter + 1) / chapters.length) * 100;

  const results = useMemo(() => {
    const correct = quizData.reduce(
      (count, item, index) => count + (selectedAnswers[index] === item.answer ? 1 : 0),
      0
    );
    return {
      correct,
      wrong: totalQuestions - correct,
      percentage: Math.round((correct / totalQuestions) * 100),
    };
  }, [selectedAnswers, totalQuestions]);

  const stopSpeech = useCallback(() => {
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      window.speechSynthesis.cancel();
    }
    setIsSpeaking(false);
  }, []);

  useEffect(() => {
    return () => {
      turnTimersRef.current.forEach((timer) => window.clearTimeout(timer));
      if ("speechSynthesis" in window) window.speechSynthesis.cancel();
    };
  }, []);

  useEffect(() => {
    stopSpeech();
  }, [currentChapter, stopSpeech]);

  const scrollBookIntoView = useCallback(() => {
    window.requestAnimationFrame(() => {
      bookStageRef.current?.scrollIntoView({
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
          ? "auto"
          : "smooth",
        block: "start",
      });
    });
  }, []);

  const changeChapter = useCallback((index) => {
    if (
      index < 0 ||
      index >= chapters.length ||
      index === currentChapter ||
      isTurningRef.current
    ) return;

    stopSpeech();

    // The 3D spread is for desktop. Mobile stacks two natural-height pages.
    // Change chapters directly on phones rather than displaying a hidden flip.
    const canAnimate = window.matchMedia("(min-width: 769px) and (prefers-reduced-motion: no-preference)").matches;
    if (!canAnimate) {
      setCurrentChapter(index);
      scrollBookIntoView();
      return;
    }

    const direction = index > currentChapter ? "next" : "prev";
    const previous = chapters[currentChapter];
    const upcoming = chapters[index];

    const meta = direction === "next"
      ? {
          direction,
          frontTitle: previous.rightTitle,
          backTitle: upcoming.leftTitle,
          frontPage: currentChapter * 2 + 2,
          backPage: index * 2 + 1,
        }
      : {
          direction,
          frontTitle: previous.leftTitle,
          backTitle: upcoming.rightTitle,
          frontPage: currentChapter * 2 + 1,
          backPage: index * 2 + 2,
        };

    isTurningRef.current = true;
    setIsTurning(true);
    setTurnMeta(meta);

    turnTimersRef.current.forEach((timer) => window.clearTimeout(timer));
    turnTimersRef.current = [
      window.setTimeout(() => setCurrentChapter(index), 395),
      window.setTimeout(() => {
        setTurnMeta(null);
        setIsTurning(false);
        isTurningRef.current = false;
        scrollBookIntoView();
      }, 830),
    ];
  }, [currentChapter, scrollBookIntoView, stopSpeech]);

  useEffect(() => {
    const onKeyDown = (event) => {
      const targetTag = event.target?.tagName;
      if (["INPUT", "TEXTAREA", "SELECT"].includes(targetTag) || event.altKey || event.ctrlKey || event.metaKey) {
        return;
      }
      if (event.key === "ArrowRight") changeChapter(currentChapter + 1);
      if (event.key === "ArrowLeft") changeChapter(currentChapter - 1);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [changeChapter, currentChapter]);

  const handleAnswerSelect = (index, answer) => {
    if (showResults) return;
    setSelectedAnswers((current) => ({ ...current, [index]: answer }));
  };

  const handleTryAgain = () => {
    setSelectedAnswers({});
    setShowResults(false);
    changeChapter(9);
  };

  const handleFontSize = () => {
    setFontScale((current) => {
      if (current === 1) return 1.035;
      if (current === 1.035) return 0.965;
      return 1;
    });
  };

  const handleListen = () => {
    if (!( "speechSynthesis" in window) || !("SpeechSynthesisUtterance" in window)) return;
    if (isSpeaking) {
      stopSpeech();
      return;
    }
    const text = bookSpreadRef.current?.innerText || "";
    if (!text.trim()) return;
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
    const leftPage = currentChapter * 2 + 1;
    const rightPage = leftPage + 1;
    const { leftTitle, rightTitle } = chapters[currentChapter];
    const next = currentChapter < chapters.length - 1
      ? () => changeChapter(currentChapter + 1)
      : undefined;

    const left = (content) => (
      <BookPage side="left" number={leftPage} title={leftTitle}>{content}</BookPage>
    );
    const right = (content) => (
      <BookPage side="right" number={rightPage} title={rightTitle} onTurnPage={next}>
        {content}
      </BookPage>
    );

    switch (currentChapter) {
      case 0:
        return <>
          {left(<>
            <p className="df-reader-lead-copy">“When biology slows down, science steps in.”</p>
            <p>
              Declining fertility refers to the natural, age-related reduction in reproductive
              potential. While fertility declines in both men and women over time, women
              experience a more rapid drop due to their finite egg supply.
            </p>
            <p>
              Fertility isn’t just about conceiving — age also impacts pregnancy outcomes.
              Delayed parenthood raises the chances of miscarriage, complications, and
              chromosomal issues in the baby.
            </p>
            <QuoteCard>
              Understanding this biological process is essential for making timely,
              informed reproductive decisions.
            </QuoteCard>
            <ConsultationIllustration />
          </>)}
          {right(<>
            <p>Female fertility and the biological clock</p>
            <div className="df-reader-timeline">
              {ageMilestones.map((item, index) => (
                <div className="df-reader-timeline-item" key={item.age}>
                  <span>{index + 1}</span>
                  <div><h3>{item.age}</h3><p>{item.detail}</p></div>
                </div>
              ))}
            </div>
            <InfoNote>
              Fertility changes gradually and varies between individuals.
              A consultation can help with personal planning.
            </InfoNote>
          </>)}
        </>;

      case 1:
        return <>
          {left(<>
            <p className="df-reader-lead-copy">Age-related fertility estimates</p>
            <AgeStatisticsTable />
            <InfoNote>
              These figures are reproduced from the supplied educational content.
              They are not a prediction for an individual. IVF success rates vary by
              clinic, treatment cycle, diagnosis and how outcomes are measured.
            </InfoNote>
          </>)}
          {right(<>
            <p>
              Male fertility also declines with age, especially after 40–45 years.
              Key concerns include:
            </p>
            <BulletList items={maleChanges} compact />
            <div className="df-reader-highlight-box">
              <strong>Planning ahead</strong>
              <p>Sperm banking is a wise choice for men planning late fatherhood.</p>
            </div>
          </>)}
        </>;

      case 2:
        return <>
          {left(<>
            <p>Some health and environmental factors may accelerate fertility decline.</p>
            <LabeledList items={acceleratingFactors} />
            <InfoNote>
              Individual fertility concerns should be evaluated rather than
              attributed to a single lifestyle factor.
            </InfoNote>
          </>)}
          {right(<>
            <p className="df-reader-lead-copy">Support your reproductive wellbeing</p>
            <BulletList
              items={[
                "Antioxidant-rich diet",
                "Good sleep",
                "Regular exercise",
                "Stress management",
              ]}
            />
            <QuoteCard>
              Early awareness and healthy habits support informed choices about
              your fertility timeline.
            </QuoteCard>
            <p>
              These measures may complement, but do not replace, medical evaluation
              when fertility concerns are present.
            </p>
          </>)}
        </>;

      case 3:
        return <>
          {left(<>
            <p>Female fertility testing may include:</p>
            <div className="df-reader-numbered-list">
              {womensTests.map((item, index) => (
                <div key={item}><span>{index + 1}</span><p>{item}</p></div>
              ))}
            </div>
            <div className="df-reader-highlight-box">
              <strong>Early testing = Empowered planning.</strong>
              <p>Tests are selected and interpreted based on personal medical history.</p>
            </div>
          </>)}
          {right(<>
            <p>Male fertility assessment may include:</p>
            <div className="df-reader-numbered-list">
              {mensTests.map((item, index) => (
                <div key={item}><span>{index + 1}</span><p>{item}</p></div>
              ))}
            </div>
            <InfoNote>
              A clinician can explain which tests are relevant to each partner
              and how to interpret the findings together.
            </InfoNote>
          </>)}
        </>;

      case 4:
        return <>
          {left(<>
            <div className="df-reader-preservation-grid">
              <div className="df-reader-highlight-box">
                <strong>{preservationMethods[0].title}</strong>
                <p>{preservationMethods[0].detail}</p>
              </div>
              <div className="df-reader-highlight-box">
                <strong>{preservationMethods[3].title}</strong>
                <p>{preservationMethods[3].detail}</p>
              </div>
            </div>
            <InfoNote>
              Fertility preservation decisions depend on age, treatment timing,
              medical history, available procedures and personal preferences.
            </InfoNote>
          </>)}
          {right(<>
            <div className="df-reader-preservation-grid">
              <div className="df-reader-highlight-box">
                <strong>{preservationMethods[1].title}</strong>
                <p>{preservationMethods[1].detail}</p>
              </div>
              <div className="df-reader-highlight-box">
                <strong>{preservationMethods[2].title}</strong>
                <p>{preservationMethods[2].detail}</p>
              </div>
            </div>
            <p>
              Complement fertility planning with an antioxidant-rich diet, good
              sleep, regular exercise and stress management.
            </p>
          </>)}
        </>;

      case 5:
        return <>
          {left(<>
            <p>Assisted reproductive technology (ART) offers several treatment options.</p>
            <LabeledList items={artOptions.slice(0, 2)} />
            <div className="df-reader-quote-card is-blue">
              <span aria-hidden="true">“</span>
              <p>Appropriate treatment depends on an individual's fertility assessment.</p>
            </div>
          </>)}
          {right(<>
            <LabeledList items={artOptions.slice(2)} />
            <InfoNote>
              PGT-A and other genetic tests are not appropriate for everyone and do not
              guarantee prevention of miscarriage. Discuss the benefits and limitations
              of each treatment with a fertility specialist.
            </InfoNote>
          </>)}
        </>;

      case 6:
        return <>
          {left(<>
            <p>Age-related fertility concerns can create significant emotional stress.</p>
            <BulletList items={emotionalChallenges} compact />
            <QuoteCard>
              Your reproductive journey is personal. Support and understanding
              are important at every stage.
            </QuoteCard>
          </>)}
          {right(<>
            <p>
              At Sukam, we prioritize mental wellness too — with counseling,
              support groups, and fertility coaching.
            </p>
            <div className="df-reader-highlight-box">
              <strong>Emotional wellness includes</strong>
              <BulletList items={["Counseling", "Support groups", "Mindfulness"]} compact />
            </div>
            <p>
              Discuss your concerns, ask questions and involve your support
              network as you make fertility-related decisions.
            </p>
          </>)}
        </>;

      case 7:
        return <>
          {left(<div className="df-reader-faq-stack">
            {faqs.slice(0, 4).map((item) => (
              <div className="df-reader-faq-card" key={item.question}>
                <h3>{item.question}</h3><p>{item.answer}</p>
              </div>
            ))}
          </div>)}
          {right(<div className="df-reader-faq-stack">
            {faqs.slice(4).map((item) => (
              <div className="df-reader-faq-card" key={item.question}>
                <h3>{item.question}</h3><p>{item.answer}</p>
              </div>
            ))}
          </div>)}
        </>;

      case 8:
        return <>
          {left(<>
            <p>
              Declining fertility is not the end — it’s a signal to plan ahead.
              With the right tools, awareness, and care, your dreams of parenthood
              are still within reach.
            </p>
            <QuoteCard>
              Know your body. Know your options. Take the first step today.
            </QuoteCard>
            <p>
              Early planning and personalised guidance can help you understand
              your available options.
            </p>
          </>)}
          {right(<>
            <p><strong>At Sukam Speciality Clinic &amp; Fertility Centre, we offer:</strong></p>
            <BulletList items={clinicServices} />
            <div className="df-reader-highlight-box">
              <strong>Planning with clarity</strong>
              <p>
                Discuss screening, preservation and reproductive treatment
                options with the clinical team.
              </p>
            </div>
          </>)}
        </>;

      case 9:
        return <>
          {left(<>
            <div className="df-reader-quiz-intro">
              <p>Declining Fertility Quiz — What Do You Know?</p>
              <span>{answeredCount} of {totalQuestions} answered</span>
            </div>
            {[0, 1].map((index) => (
              <QuickCheck key={index} index={index} selectedAnswers={selectedAnswers}
                showResults={showResults} onSelect={handleAnswerSelect} />
            ))}
          </>)}
          {right(<>
            {[2, 3].map((index) => (
              <QuickCheck key={index} index={index} selectedAnswers={selectedAnswers}
                showResults={showResults} onSelect={handleAnswerSelect} />
            ))}
            <InfoNote>Choose one answer for each question. Your selections are saved as you turn pages.</InfoNote>
          </>)}
        </>;

      case 10:
        return <>
          {left(<>
            {[4, 5].map((index) => (
              <QuickCheck key={index} index={index} selectedAnswers={selectedAnswers}
                showResults={showResults} onSelect={handleAnswerSelect} />
            ))}
          </>)}
          {right(<>
            {[6, 7].map((index) => (
              <QuickCheck key={index} index={index} selectedAnswers={selectedAnswers}
                showResults={showResults} onSelect={handleAnswerSelect} />
            ))}
          </>)}
        </>;

      case 11:
        return <>
          {left(<>
            {[8, 9].map((index) => (
              <QuickCheck key={index} index={index} selectedAnswers={selectedAnswers}
                showResults={showResults} onSelect={handleAnswerSelect} />
            ))}
          </>)}
          {right(<>
            <div className="df-reader-completion-panel">
              <h3>Knowledge check complete?</h3>
              <p>Answer all 10 questions to see your score and detailed breakdown.</p>
              <div className="df-reader-quiz-progress-meta">
                <span>{answeredCount} / {totalQuestions} answered</span>
                <strong>{Math.round(quizProgress)}%</strong>
              </div>
              <div className="df-reader-quiz-progress-track" role="progressbar"
                aria-label="Quiz completion" aria-valuenow={answeredCount}
                aria-valuemin={0} aria-valuemax={totalQuestions}>
                <div style={{ width: `${quizProgress}%` }} />
              </div>
              {!showResults ? (
                <button type="button" className="df-reader-result-button"
                  disabled={answeredCount !== totalQuestions}
                  onClick={() => setShowResults(true)}>
                  See Results
                </button>
              ) : (
                <div className="df-reader-result-card" aria-live="polite">
                  <strong>{results.percentage}%</strong>
                  <div>
                    <h3>Your score</h3>
                    <p>{results.correct} correct · {results.wrong} incorrect</p>
                    <button type="button" onClick={handleTryAgain}>Try Again</button>
                  </div>
                </div>
              )}
            </div>
            {showResults && (
              <InfoNote>Turn to the next chapter for a question-by-question breakdown.</InfoNote>
            )}
          </>)}
        </>;

      case 12:
        return <>
          {left(<ScoreDetails start={0} end={5} showResults={showResults}
            selectedAnswers={selectedAnswers} />)}
          {right(<ScoreDetails start={5} end={10} showResults={showResults}
            selectedAnswers={selectedAnswers} />)}
        </>;

      case 13:
      default:
        return <>
          {left(<>
            <p>
              Declining fertility is not the end — understanding your options
              is the first step towards thoughtful planning.
            </p>
            <div className="df-reader-contact-card">
              <span>Sukam Clinic</span>
              <h3>Consult Dr Anitha A Manoj</h3>
              <p>Senior Fertility Specialist · Highrisk Obstetrician</p>
              <strong>Maternity, Fertility &amp; Speciality</strong>
              <div>
                <a href="tel:8108108310">8108108310</a>
                <a href="tel:9108108980">9108108980</a>
                <a href="https://www.sukamspeciality.in/" target="_blank" rel="noopener noreferrer">
                  Visit Website
                </a>
              </div>
            </div>
            <p className="df-reader-small-note">
              This guide supports education and does not replace personalised
              advice from a qualified clinician.
            </p>
          </>)}
          {<BookPage side="right" number={rightPage} title={rightTitle} isEnd>
            <div className="df-reader-end-page">
              <div className="df-reader-end-heart" aria-hidden="true">♡</div>
              <span>Declining Fertility</span>
              <h2>End</h2>
              <p>Thank you for reading and learning about your fertility timeline.</p>
              <div className="df-reader-end-rule" />
              <strong>Better information. Brighter tomorrows.</strong>
            </div>
          </BookPage>}
        </>;
    }
  };

  return (
    <main className="df-reader" style={{ "--reader-scale": fontScale }}>
      <header className="df-reader-header">
        <div className="df-reader-header-mark" aria-hidden="true">♡</div>
        <div className="df-reader-header-copy">
          <h1>Declining Fertility</h1>
          <p>“When biology slows down, science steps in.”</p>
        </div>
        <div className="df-reader-header-decoration" aria-hidden="true" />
      </header>

      <div className="df-reader-layout">
        <aside className="df-reader-contents">
          <h2>CONTENTS</h2>
          <nav aria-label="Declining fertility guide chapters">
            {chapters.map((chapter, index) => (
              <button key={chapter.label} type="button"
                className={currentChapter === index ? "is-active" : ""}
                disabled={isTurning}
                aria-current={currentChapter === index ? "page" : undefined}
                onClick={() => changeChapter(index)}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{chapter.label}</strong>
              </button>
            ))}
          </nav>
          <div className="df-reader-contents-footer">
            <span aria-hidden="true">♡</span>
            <p>Better information.<br />Brighter tomorrows.</p>
          </div>
        </aside>

        <section className="df-reader-book-stage" ref={bookStageRef}>
          <div className="df-reader-tools">
            <button type="button" className="df-reader-tool-button"
              onClick={handleFontSize} disabled={isTurning}
              aria-label="Change reading font size" title="Change font size">
              <span>Aa</span><small>⌄</small>
            </button>
            <button type="button"
              className={`df-reader-tool-button ${isSpeaking ? "is-active" : ""}`.trim()}
              onClick={handleListen} disabled={isTurning}
              aria-label={isSpeaking ? "Stop listening" : "Listen to chapter"}>
              <span aria-hidden="true">◉</span>
              <strong>{isSpeaking ? "Stop" : "Listen"}</strong>
            </button>
          </div>

          <div className={`df-reader-book-spread ${isTurning ? "is-turning" : ""}`.trim()}
            ref={bookSpreadRef}>
            {renderChapter()}
            <PageTurnSheet meta={turnMeta} />
          </div>

          <div className="df-reader-navigation">
            <button type="button"
              className="df-reader-nav-button df-reader-nav-button--previous"
              onClick={() => changeChapter(currentChapter - 1)}
              disabled={currentChapter === 0 || isTurning}>
              <span aria-hidden="true">←</span> Previous
            </button>
            <div className="df-reader-progress">
              <strong>Chapter {currentChapter + 1} of {chapters.length}</strong>
              <div className="df-reader-progress-row">
                <div className="df-reader-progress-track">
                  <div className="df-reader-progress-fill" style={{ width: `${chapterProgress}%` }} />
                </div>
                <span>{Math.round(chapterProgress)}%</span>
              </div>
            </div>
            <button type="button"
              className="df-reader-nav-button df-reader-nav-button--next"
              onClick={() => changeChapter(currentChapter + 1)}
              disabled={currentChapter === chapters.length - 1 || isTurning}>
              Next page <span aria-hidden="true">→</span>
            </button>
          </div>
          <p className="df-reader-keyboard-hint">
            Tip: use the left and right arrow keys to turn pages.
          </p>
        </section>
      </div>
    </main>
  );
};

export default DecliningFertility;
