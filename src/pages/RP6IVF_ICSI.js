import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import "./RP6IVF_ICSI.css";

/**
 * Sukam Clinic — IVF & ICSI digital book.
 * All article paragraphs, lists, tables and original quiz questions come
 * from the supplied source component. No extra React packages required.
 */
const quizData = [
  {
    "question": "What does IVF stand for?",
    "options": [
      "In-Vitro Fertilization",
      "Intra Vaginal Fusion",
      "Induced Vaginal Fertility",
      "Internal Vaginal Follicles"
    ],
    "answer": "In-Vitro Fertilization"
  },
  {
    "question": "When is ICSI recommended?",
    "options": [
      "Only in twin pregnancies",
      "When the uterus is small",
      "When sperm count is low",
      "When the eggs are immature"
    ],
    "answer": "When sperm count is low"
  },
  {
    "question": "How are embryos created in IVF?",
    "options": [
      "Inside the uterus",
      "In a lab using egg and sperm",
      "Through natural intercourse",
      "Using donor placenta"
    ],
    "answer": "In a lab using egg and sperm"
  },
  {
    "question": "What is the ideal age for IVF success?",
    "options": [
      "18–22",
      "25–35",
      "40–50",
      "Any age is equally successful"
    ],
    "answer": "25–35"
  },
  {
    "question": "What is embryo transfer?",
    "options": [
      "Transfer of sperm",
      "Transfer of fertilized egg into uterus",
      "Transfer of uterus",
      "Menstrual cycle regulation"
    ],
    "answer": "Transfer of fertilized egg into uterus"
  },
  {
    "question": "How many embryos are usually transferred?",
    "options": [
      "5–6",
      "Only 1",
      "Usually 1–2, based on age and quality",
      "All embryos at once"
    ],
    "answer": "Usually 1–2, based on age and quality"
  },
  {
    "question": "Does IVF always require ICSI?",
    "options": [
      "Yes",
      "No",
      "Only for women",
      "Only in summer"
    ],
    "answer": "No"
  },
  {
    "question": "How many days after embryo transfer is a pregnancy test done?",
    "options": [
      "3 days",
      "7 days",
      "14 days",
      "30 days"
    ],
    "answer": "14 days"
  },
  {
    "question": "What is ovarian stimulation?",
    "options": [
      "Painful uterine massage",
      "Taking hormone injections to grow eggs",
      "Vaginal cleaning",
      "Sperm testing"
    ],
    "answer": "Taking hormone injections to grow eggs"
  },
  {
    "question": "Which hormone helps with egg maturation?",
    "options": [
      "hCG",
      "Insulin",
      "Estrogen",
      "Cortisol"
    ],
    "answer": "hCG"
  },
  {
    "question": "IVF success depends MOST on:",
    "options": [
      "Timing of ultrasound",
      "Age and embryo quality",
      "Size of uterus",
      "Color of cervix"
    ],
    "answer": "Age and embryo quality"
  },
  {
    "question": "Can embryos be frozen?",
    "options": [
      "No",
      "Only for one day",
      "Yes, safely for years",
      "Only if the woman is under 25"
    ],
    "answer": "Yes, safely for years"
  },
  {
    "question": "Is ICSI useful in female infertility?",
    "options": [
      "No",
      "Yes, always",
      "Mainly useful in male infertility",
      "Only during ovulation"
    ],
    "answer": "Mainly useful in male infertility"
  },
  {
    "question": "Do IVF or ICSI require surgery?",
    "options": [
      "No, only minor procedures",
      "Yes, open surgery",
      "Cesarean",
      "Hysterectomy"
    ],
    "answer": "No, only minor procedures"
  },
  {
    "question": "Is bed rest compulsory after IVF?",
    "options": [
      "Yes, for a month",
      "No, only for a few hours post-transfer",
      "Strict hospitalization",
      "Not needed at all"
    ],
    "answer": "No, only for a few hours post-transfer"
  }
];

const articlePages = [
  {
    title: "💖 Introduction – Why IVF & ICSI?",
    content: (
      <>
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
            <h3 className="ivf-reader-section-subhead">🧬 What is IVF?</h3>
            <p>
                In-Vitro Fertilization (IVF) involves fertilizing an egg with sperm outside the body. It allows doctors to select high-quality eggs and sperm,
                monitor fertilization, and choose the healthiest embryos to implant into the uterus.
              </p>
      </>
    ),
  },
  {
    title: "🧬 What is IVF? (continued)",
    content: (
      <>
            <ul><li>Ovarian stimulation using hormones to produce multiple eggs</li><li>Egg retrieval from the ovaries</li><li>Fertilization of eggs in a lab dish</li><li>Embryo culture for a few days</li><li>Embryo transfer to the uterus</li><li>Hormonal support and pregnancy testing</li></ul>
            <p>
                IVF is especially helpful for tubal blockages, PCOS, endometriosis, older age, and unexplained infertility.
              </p>
            <h3 className="ivf-reader-section-subhead">🧬 What is ICSI?</h3>
            <p>
                Intracytoplasmic Sperm Injection (ICSI) is a form of IVF where a single sperm is directly injected into a mature egg, ideal for male factor infertility.
              </p>
            <ul><li>Low sperm count or poor motility</li><li>Failed fertilization in previous IVF</li><li>Surgically retrieved sperm (TESA/PESA)</li><li>Unexplained infertility</li></ul>
            <p>
                ICSI improves fertilization chances but embryo quality and uterine health also affect pregnancy outcomes.
              </p>
      </>
    ),
  },
  {
    title: "📋 IVF & ICSI Step-by-Step (Single Cycle)",
    content: (
      <>
            <ol><li><strong>Pre-Treatment Consultation:</strong> Hormone tests, ultrasound, semen analysis, and counseling</li><li><strong>Ovarian Stimulation:</strong> Hormonal injections for 10–12 days, monitored via scan</li><li><strong>Trigger &amp; Egg Retrieval:</strong> hCG injection followed by egg retrieval under sedation</li><li><strong>Fertilization:</strong> Standard IVF or ICSI performed, embryos cultured 3–5 days</li><li><strong>Embryo Transfer:</strong> One or two embryos transferred painlessly</li><li><strong>Luteal Support &amp; Testing:</strong> Hormone medications and pregnancy testing after 14 days</li></ol>
            <h3 className="ivf-reader-section-subhead">⏳ IVF/ICSI Timelines &amp; Success Rates</h3>
            <ul><li>🗓️ Day 1–12: Stimulation</li><li>🗓️ Day 13: Trigger injection</li><li>🗓️ Day 15: Egg retrieval</li><li>🗓️ Day 17–20: Embryo transfer</li><li>🗓️ Day 34: Pregnancy test</li></ul>
            <p><strong>Success Rates:</strong></p>
            <ul><li>Under 35: 50–60%</li></ul>
      </>
    ),
  },
  {
    title: "⏳ IVF/ICSI Timelines & Success Rates (continued)",
    content: (
      <>
            <ul><li>Age 35–39: 30–40%</li><li>Over 40: 10–20%</li></ul>
            <p>
            <strong>Frozen Embryo Transfer (FET):</strong> In some cases, embryos are frozen and transferred later for better uterine readiness or OHSS prevention.
              </p>
            <h3 className="ivf-reader-section-subhead">👩‍⚕️ Who Should Consider IVF or ICSI?</h3>
            <ul><li>Blocked or damaged fallopian tubes</li><li>Low sperm count or motility</li><li>PCOS unresponsive to medication</li><li>Unexplained infertility</li><li>Endometriosis</li><li>Multiple failed IUIs</li><li>Age &gt;35</li><li>Preimplantation genetic testing (PGT) required</li></ul>
            <h3 className="ivf-reader-section-subhead">💖 Sukam’s Holistic Fertility Approach</h3>
            <ul><li>🔬 Advanced IVF-ICSI Lab with cutting-edge equipment</li></ul>
      </>
    ),
  },
  {
    title: "💖 Sukam’s Holistic Fertility Approach (continued)",
    content: (
      <>
            <ul><li>🧬 Personalized treatment protocols</li><li>🧘 Mind-body therapy: yoga, meditation, emotional support</li><li>🥗 Fertility-focused nutrition plans</li><li>💬 Transparent pricing with no hidden charges</li><li>🫶 Dedicated fertility counselors at every step</li></ul>
            <h3 className="ivf-reader-section-subhead">📖 Real Stories from Sukam</h3>
            <p><strong>Radha, 36:</strong> “After 4 failed IUIs, I feared IVF. Sukam made me feel informed and supported. My first IVF cycle succeeded — I now hold my baby boy!”</p>
            <p><strong>Naveen &amp; Priya:</strong> “ICSI helped us with male infertility. Thanks to Sukam's caring team and constant updates, we’re now expecting twins!”</p>
            <h3 className="ivf-reader-section-subhead">👣 Take the First Step Toward Parenthood</h3>
            <p>
                IVF &amp; ICSI aren’t just treatments — they’re journeys of hope, science, and strength. At Sukam, we walk every step with you.
              </p>
      </>
    ),
  },
];

const guideTopics = [
  "💖 Introduction – Why IVF & ICSI?",
  "🧬 What is IVF?",
  "🧬 What is ICSI?",
  "📋 IVF & ICSI Step-by-Step (Single Cycle)",
  "👩‍⚕️ Who Should Consider IVF or ICSI?",
  "💖 Sukam’s Holistic Fertility Approach",
  "📖 Real Stories from Sukam",
  "👣 Take the First Step Toward Parenthood"
];

const bookPages = [
  {"kind": "article", "title": "💖 Introduction – Why IVF & ICSI?", "articleIndex": 0},
  {"kind": "article", "title": "🧬 What is IVF? (continued)", "articleIndex": 1},
  {"kind": "article", "title": "📋 IVF & ICSI Step-by-Step (Single Cycle)", "articleIndex": 2},
  {"kind": "article", "title": "⏳ IVF/ICSI Timelines & Success Rates (continued)", "articleIndex": 3},
  {"kind": "article", "title": "💖 Sukam’s Holistic Fertility Approach (continued)", "articleIndex": 4},
  {"kind": "quiz", "title": "Fertility awareness quiz · Q1–4", "start": 0, "end": 4},
  {"kind": "quiz", "title": "Fertility awareness quiz · Q5–8", "start": 4, "end": 8},
  {"kind": "quiz", "title": "Fertility awareness quiz · Q9–12", "start": 8, "end": 12},
  {"kind": "quiz", "title": "Fertility awareness quiz · Q13–15", "start": 12, "end": 15},
  {"kind": "results", "title": "Quiz results & answer review", "start": 0, "end": 4},
  {"kind": "breakdown", "title": "Answer review · Q5–9", "start": 4, "end": 9},
  {"kind": "breakdown", "title": "Answer review · Q10–15", "start": 9, "end": 15},
  {"kind": "closing", "title": "Take the next step with Sukam Clinic"},
  {"kind": "end", "title": "End"},
];

const chapters = [
  {
    "label": "Introduction – Why IVF & ICSI?",
    "leftTitle": "💖 Introduction – Why IVF & ICSI?",
    "rightTitle": "🧬 What is IVF? (continued)"
  },
  {
    "label": "IVF & ICSI Step-by-Step (Single Cycle)",
    "leftTitle": "📋 IVF & ICSI Step-by-Step (Single Cycle)",
    "rightTitle": "⏳ IVF/ICSI Timelines & Success Rates (continued)"
  },
  {
    "label": "Sukam’s Holistic Fertility Approach",
    "leftTitle": "💖 Sukam’s Holistic Fertility Approach (continued)",
    "rightTitle": "Fertility awareness quiz · Q1–4"
  },
  {
    "label": "Quiz · 5–12",
    "leftTitle": "Fertility awareness quiz · Q5–8",
    "rightTitle": "Fertility awareness quiz · Q9–12"
  },
  {
    "label": "Quiz · 13–4",
    "leftTitle": "Fertility awareness quiz · Q13–15",
    "rightTitle": "Quiz results & answer review"
  },
  {
    "label": "Review Q5–15",
    "leftTitle": "Answer review · Q5–9",
    "rightTitle": "Answer review · Q10–15"
  },
  {
    "label": "Next steps & End",
    "leftTitle": "Take the next step with Sukam Clinic",
    "rightTitle": "End"
  }
];

const QuizQuestion = ({ index, selectedAnswers, showResults, onSelect }) => {
  const item = quizData[index];
  const chosen = selectedAnswers[index];
  return (
    <fieldset className="ivf-reader-quick-check">
      <legend className="ivf-reader-quick-check-title">
        <span aria-hidden="true">✦</span> Question {index + 1} of {quizData.length}
      </legend>
      <p>{item.question}</p>
      <div className="ivf-reader-radio-list">
        {item.options.map((option, i) => {
          const selected = chosen === option;
          const correct = showResults && option === item.answer;
          const incorrect = showResults && selected && !correct;
          return (
            <button
              type="button"
              key={`${index}-${i}`}
              disabled={showResults}
              aria-pressed={selected}
              className={[
                "ivf-reader-radio-option",
                selected ? "is-selected" : "",
                correct ? "is-correct" : "",
                incorrect ? "is-incorrect" : "",
              ].filter(Boolean).join(" ")}
              onClick={() => onSelect(index, option)}
            >
              <span className="ivf-reader-radio-dot" aria-hidden="true" />
              <span>{option}</span>
            </button>
          );
        })}
      </div>
    </fieldset>
  );
};

const PageTurnSheet = ({ meta }) => {
  if (!meta) return null;
  return (
    <div
      className={`ivf-reader-page-turn-sheet ivf-reader-page-turn-sheet--${meta.direction}`}
      aria-hidden="true"
    >
      <div className="ivf-reader-turn-face ivf-reader-turn-face--front">
        <div className="ivf-reader-turn-page-number">
          {String(meta.frontPage).padStart(2, "0")}
        </div>
        <h3>{meta.frontTitle}</h3>
        <div className="ivf-reader-turn-lines"><span /><span /><span /><span /><span /></div>
        <div className="ivf-reader-turn-curl" />
      </div>
      <div className="ivf-reader-turn-face ivf-reader-turn-face--back">
        <div className="ivf-reader-turn-page-number">
          {String(meta.backPage).padStart(2, "0")}
        </div>
        <h3>{meta.backTitle}</h3>
        <div className="ivf-reader-turn-lines"><span /><span /><span /><span /><span /></div>
      </div>
    </div>
  );
};

const BookPage = ({ number, side, title, isEnd, onTurnPage, children }) => (
  <article className={`ivf-reader-book-page ivf-reader-book-page--${side} ${isEnd ? "ivf-reader-book-page--end" : ""}`.trim()}>
    <div className="ivf-reader-paper-grain" aria-hidden="true" />
    <div className="ivf-reader-page-number">
      <span>{String(number).padStart(2, "0")}</span>
    </div>
    <div className="ivf-reader-page-content">
      {!isEnd && <h2>{title}</h2>}
      {children}
    </div>
    {side === "right" && onTurnPage && (
      <button type="button" className="ivf-reader-turn-page" onClick={onTurnPage}>
        Turn page <span aria-hidden="true">↗</span>
      </button>
    )}
  </article>
);

const ScoreDetails = ({ start, end, showResults, selectedAnswers }) => {
  if (!showResults) {
    return (
      <div className="ivf-reader-info-note">
        <span className="ivf-reader-info-icon" aria-hidden="true">i</span>
        <p>Answer all {quizData.length} quiz questions and select See Results to unlock the detailed breakdown.</p>
      </div>
    );
  }
  return (
    <div className="ivf-reader-score-details">
      {quizData.slice(start, end).map((q, idx) => {
        const n = start + idx;
        const correct = selectedAnswers[n] === q.answer;
        return (
          <div key={n} className="ivf-reader-score-detail">
            <div className="ivf-reader-score-detail-heading">
              <strong>Q{n + 1}. {q.question}</strong>
              <span className={correct ? "is-correct" : "is-incorrect"}>
                {correct ? "Correct" : "Incorrect"}
              </span>
            </div>
            <p><strong>Your answer:</strong> {selectedAnswers[n] || "Not answered"}</p>
            {!correct && <p><strong>Correct answer:</strong> {q.answer}</p>}
          </div>
        );
      })}
    </div>
  );
};

const IVF_ICSI = () => {
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
      (count, item, index) => count + (selectedAnswers[index] === item.answer ? 1 : 0), 0
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

  useEffect(() => () => {
    turnTimersRef.current.forEach((timer) => window.clearTimeout(timer));
    if ("speechSynthesis" in window) window.speechSynthesis.cancel();
  }, []);

  useEffect(() => { stopSpeech(); }, [currentChapter, stopSpeech]);

  const scrollBookIntoView = useCallback(() => {
    window.requestAnimationFrame(() => {
      bookStageRef.current?.scrollIntoView({
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
        block: "start",
      });
    });
  }, []);

  const changeChapter = useCallback((index) => {
    if (index < 0 || index >= chapters.length || index === currentChapter || isTurningRef.current) return;
    stopSpeech();
    const animate = window.matchMedia("(min-width: 769px) and (prefers-reduced-motion: no-preference)").matches;
    if (!animate) {
      setCurrentChapter(index);
      scrollBookIntoView();
      return;
    }
    const direction = index > currentChapter ? "next" : "prev";
    const previous = chapters[currentChapter];
    const upcoming = chapters[index];
    const meta = direction === "next"
      ? { direction, frontTitle: previous.rightTitle, backTitle: upcoming.leftTitle,
          frontPage: currentChapter * 2 + 2, backPage: index * 2 + 1 }
      : { direction, frontTitle: previous.leftTitle, backTitle: upcoming.rightTitle,
          frontPage: currentChapter * 2 + 1, backPage: index * 2 + 2 };
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
      const tag = event.target?.tagName;
      if (["INPUT", "TEXTAREA", "SELECT"].includes(tag) ||
          event.target?.isContentEditable || event.altKey || event.ctrlKey || event.metaKey) return;
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
    changeChapter(2);
  };

  const handleFontSize = () => {
    setFontScale((current) => current === 1 ? 1.035 : current === 1.035 ? 0.965 : 1);
  };

  const handleListen = () => {
    if (!("speechSynthesis" in window) || !("SpeechSynthesisUtterance" in window)) return;
    if (isSpeaking) { stopSpeech(); return; }
    const text = bookSpreadRef.current?.innerText || "";
    if (!text.trim()) return;
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.95;
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
    setIsSpeaking(true);
  };

  const renderPage = (page, side, number, onTurnPage) => {
    const content = (() => {
      switch (page.kind) {
        case "article": return articlePages[page.articleIndex].content;
        case "quiz": return <>
          <div className="ivf-reader-quiz-intro">
            <p>Answer each question. Completed: {answeredCount} of {totalQuestions}.</p>
            <div className="ivf-reader-quiz-track" role="progressbar" aria-label="Quiz progress"
              aria-valuemin="0" aria-valuemax={totalQuestions} aria-valuenow={answeredCount}>
              <div className="ivf-reader-quiz-fill" style={{ width: `${quizProgress}%` }} />
            </div>
          </div>
          {quizData.slice(page.start, page.end).map((item, k) => (
            <QuizQuestion key={page.start + k} index={page.start + k} selectedAnswers={selectedAnswers}
              showResults={showResults} onSelect={handleAnswerSelect} />
          ))}
        </>;
        case "results": return <>
          <p className="ivf-reader-lead-copy">Complete the questionnaire to see your fertility awareness score.</p>
          {!showResults && (
            <button className="ivf-reader-result-button" type="button"
              disabled={answeredCount !== totalQuestions} onClick={() => setShowResults(true)}>
              See Results ({answeredCount}/{totalQuestions})
            </button>
          )}
          {showResults && (
            <div className="ivf-reader-result-card" aria-live="polite">
              <strong>{results.percentage}%</strong>
              <div>
                <h3>Your score</h3>
                <p>{results.correct} correct · {results.wrong} incorrect</p>
                <button type="button" onClick={handleTryAgain}>Try Again</button>
              </div>
            </div>
          )}
          <h3 className="ivf-reader-results-review-title">Detailed score breakdown</h3>
          <ScoreDetails start={page.start} end={page.end}
            showResults={showResults} selectedAnswers={selectedAnswers} />
        </>;
        case "breakdown": return <ScoreDetails start={page.start} end={page.end}
          showResults={showResults} selectedAnswers={selectedAnswers} />;
        case "review": return <>
          <p>Review the original questions and answers, and note anything you would like to discuss with your fertility specialist.</p>
          <div className="ivf-reader-quote-card"><span aria-hidden="true">“</span>
            <p>Understanding your options can help you make informed decisions.</p>
          </div>
        </>;
        case "closing": return <>
          <p>Every fertility journey is personal. Discuss your questions and test results with a qualified fertility specialist to find a suitable next step.</p>
          <h3 className="ivf-reader-section-subhead">Topics covered in this guide</h3>
          <ul className="ivf-reader-consult-summary">
            {guideTopics.map((topic) => <li key={topic}>{topic}</li>)}
          </ul>
          <p>Use these topics to make a note of what you would like to ask at your consultation.</p>
          <div className="ivf-reader-contact-card">
            <span>Consult Sukam Clinic</span>
            <h3>Sukam Clinic – Maternity, Fertility & Speciality</h3>
            <p>Fertility care, counselling, and individualised guidance.</p>
            <div>
              <a href="tel:8108108310">Call 8108108310</a>
              <a href="tel:9108108980">Call 9108108980</a>
              <a href="https://www.sukamspeciality.in/" target="_blank" rel="noreferrer">Visit Website</a>
            </div>
          </div>
        </>;
        case "end": return <div className="ivf-reader-end-page">
          <div className="ivf-reader-end-heart" aria-hidden="true">♡</div>
          <span>IVF & ICSI</span>
          <h2>End</h2>
          <p>Thank you for reading this fertility patient guide.</p>
          <div className="ivf-reader-end-rule" />
          <strong>Better information. Brighter tomorrows.</strong>
        </div>;
        default: return null;
      }
    })();

    return <BookPage key={number} number={number} side={side} title={page.title}
      isEnd={page.kind === "end"} onTurnPage={onTurnPage}>{content}</BookPage>;
  };

  const leftDescriptor = bookPages[currentChapter * 2];
  const rightDescriptor = bookPages[currentChapter * 2 + 1];
  const next = currentChapter < chapters.length - 1
    ? () => changeChapter(currentChapter + 1)
    : undefined;

  return (
    <main className="ivf-reader" style={{ "--reader-scale": fontScale }}>
      <header className="ivf-reader-header">
        <div className="ivf-reader-header-mark" aria-hidden="true">♡</div>
        <div className="ivf-reader-header-copy">
          <h1>IVF & ICSI</h1>
          <p>“Science meets stardust to create life.”</p>
        </div>
        <div className="ivf-reader-header-decoration" aria-hidden="true" />
      </header>
      <div className="ivf-reader-layout">
        <aside className="ivf-reader-contents">
          <h2>CONTENTS</h2>
          <nav aria-label="IVF & ICSI book chapters">
            {chapters.map((ch, idx) => (
              <button key={idx} type="button"
                className={currentChapter === idx ? "is-active" : ""}
                disabled={isTurning}
                aria-current={currentChapter === idx ? "page" : undefined}
                onClick={() => changeChapter(idx)}>
                <span>{String(idx + 1).padStart(2, "0")}</span>
                <strong>{ch.label}</strong>
              </button>
            ))}
          </nav>
          <div className="ivf-reader-contents-footer">
            <span aria-hidden="true">♡</span>
            <p>Better information.<br />Brighter tomorrows.</p>
          </div>
        </aside>
        <section className="ivf-reader-book-stage" ref={bookStageRef}>
          <div className="ivf-reader-tools">
            <button className="ivf-reader-tool-button" type="button" onClick={handleFontSize}
              disabled={isTurning} aria-label="Change font size" title="Change font size">
              <span>Aa</span><small>⌄</small>
            </button>
            <button className={`ivf-reader-tool-button ${isSpeaking ? "is-active" : ""}`.trim()}
              type="button" onClick={handleListen} disabled={isTurning}
              aria-label={isSpeaking ? "Stop listening" : "Listen to chapter"}>
              <span aria-hidden="true">◉</span>
              <strong>{isSpeaking ? "Stop" : "Listen"}</strong>
            </button>
          </div>
          <div className={`ivf-reader-book-spread ${isTurning ? "is-turning" : ""}`.trim()}
            ref={bookSpreadRef}>
            {renderPage(leftDescriptor, "left", currentChapter * 2 + 1)}
            {renderPage(rightDescriptor, "right", currentChapter * 2 + 2, next)}
            <PageTurnSheet meta={turnMeta} />
          </div>
          <div className="ivf-reader-navigation">
            <button type="button" className="ivf-reader-nav-button ivf-reader-nav-button--previous"
              onClick={() => changeChapter(currentChapter - 1)}
              disabled={currentChapter === 0 || isTurning}>
              <span aria-hidden="true">←</span> Previous
            </button>
            <div className="ivf-reader-progress">
              <strong>Chapter {currentChapter + 1} of {chapters.length}</strong>
              <div className="ivf-reader-progress-row">
                <div className="ivf-reader-progress-track">
                  <div className="ivf-reader-progress-fill" style={{ width: `${chapterProgress}%` }} />
                </div>
                <span>{Math.round(chapterProgress)}%</span>
              </div>
            </div>
            <button type="button" className="ivf-reader-nav-button ivf-reader-nav-button--next"
              onClick={() => changeChapter(currentChapter + 1)}
              disabled={currentChapter === chapters.length - 1 || isTurning}>
              Next page <span aria-hidden="true">→</span>
            </button>
          </div>
          <p className="ivf-reader-keyboard-hint">Tip: use the left and right arrow keys to turn pages.</p>
        </section>
      </div>
    </main>
  );
};

export default IVF_ICSI;
