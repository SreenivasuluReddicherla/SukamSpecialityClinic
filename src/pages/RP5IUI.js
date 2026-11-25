import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import "./RP5IUI.css";

/**
 * Sukam Clinic — IUI – A Shortcut for Sperm on Their Journey Home digital book.
 * All article paragraphs, lists, tables and original quiz questions come
 * from the supplied source component. No extra React packages required.
 */
const quizData = [
  {
    "question": "What does IUI stand for?",
    "options": [
      "Intrauterine Injection",
      "Intrauterine Insemination",
      "Internal Uterine Irrigation",
      "In Vitro Uterine Infusion"
    ],
    "answer": "Intrauterine Insemination"
  },
  {
    "question": "When is IUI typically done in a menstrual cycle?",
    "options": [
      "During menstruation",
      "After ovulation",
      "During ovulation",
      "Anytime"
    ],
    "answer": "During ovulation"
  },
  {
    "question": "What is the main purpose of sperm washing?",
    "options": [
      "To clean sperm for donation",
      "To remove male hormones",
      "To concentrate healthy sperm",
      "To color sperm for lab visibility"
    ],
    "answer": "To concentrate healthy sperm"
  },
  {
    "question": "How long does the IUI procedure usually take?",
    "options": [
      "1 hour",
      "30 minutes",
      "5–10 minutes",
      "Overnight stay required"
    ],
    "answer": "5–10 minutes"
  },
  {
    "question": "Which hormone is used to trigger ovulation before IUI?",
    "options": [
      "Insulin",
      "hCG",
      "Estrogen",
      "Cortisol"
    ],
    "answer": "hCG"
  },
  {
    "question": "What is the success rate of IUI in women under 35?",
    "options": [
      "2–5%",
      "10–15%",
      "25–30%",
      "50%"
    ],
    "answer": "10–15%"
  },
  {
    "question": "Can IUI be performed in a natural cycle without medications?",
    "options": [
      "No",
      "Yes",
      "Only for older women",
      "Only with IVF"
    ],
    "answer": "Yes"
  },
  {
    "question": "Is anesthesia required for IUI?",
    "options": [
      "Always",
      "Sometimes",
      "No",
      "Only during retrieval"
    ],
    "answer": "No"
  },
  {
    "question": "What type of infertility is best suited for IUI?",
    "options": [
      "Tubal blockages",
      "Severe male factor",
      "Unexplained infertility",
      "Uterine cancer"
    ],
    "answer": "Unexplained infertility"
  },
  {
    "question": "What happens after IUI?",
    "options": [
      "Hospital admission",
      "Immediate pregnancy test",
      "Luteal support and wait for pregnancy test",
      "Emergency procedure"
    ],
    "answer": "Luteal support and wait for pregnancy test"
  },
  {
    "question": "Which of these is a benefit of IUI?",
    "options": [
      "Highly invasive",
      "Complex and risky",
      "Less expensive and simple",
      "Requires egg retrieval"
    ],
    "answer": "Less expensive and simple"
  },
  {
    "question": "Can donor sperm be used in IUI?",
    "options": [
      "No",
      "Only in IVF",
      "Yes",
      "Only if partner agrees"
    ],
    "answer": "Yes"
  },
  {
    "question": "What is hCG used for in an IUI cycle?",
    "options": [
      "Enhancing sperm motility",
      "Triggering ovulation",
      "Supporting pregnancy",
      "Reducing cramps"
    ],
    "answer": "Triggering ovulation"
  },
  {
    "question": "How many IUI cycles are typically recommended before moving to IVF?",
    "options": [
      "1",
      "2",
      "3–6",
      "10–12"
    ],
    "answer": "3–6"
  },
  {
    "question": "Does IUI guarantee pregnancy?",
    "options": [
      "Yes",
      "No",
      "Only with twins",
      "Only if done at home"
    ],
    "answer": "No"
  }
];

const articlePages = [
  {
    title: "💗 Introduction – What is IUI?",
    content: (
      <>
            <p>
                Intrauterine Insemination (IUI) is a fertility treatment that involves placing specially prepared sperm
                directly into a woman’s uterus during ovulation. It is a simpler, lower-cost, and less invasive option than IVF,
                and is often the first-line treatment offered for infertility.
              </p>
            <p>
                The goal of IUI is to help more healthy sperm reach the egg at the right time—giving nature a helpful push.
              </p>
            <h3 className="iui-reader-section-subhead">🩺 When is IUI Recommended?</h3>
            <ul><li>Unexplained infertility</li><li>Mild male factor infertility (low count or motility)</li><li>Cervical mucus issues</li><li>Mild endometriosis</li><li>Ovulation problems like PCOS</li><li>Single women or same-sex couples using donor sperm</li></ul>
            <p>IUI is not suitable for women with blocked fallopian tubes or severe male infertility.</p>
            <h3 className="iui-reader-section-subhead">🔬 Step-by-Step IUI Process</h3>
            <ol><li>
            <strong>Initial Evaluation:</strong> Blood tests (AMH, FSH, LH, TSH), ultrasound, semen analysis
                </li></ol>
      </>
    ),
  },
  {
    title: "🔬 Step-by-Step IUI Process (continued)",
    content: (
      <>
            <ol><li>
            <strong>Ovulation Monitoring:</strong> Natural or stimulated cycle, follicle tracking, and trigger shot
                </li><li>
            <strong>Sperm Collection &amp; Preparation:</strong> Lab washing and processing of semen sample
                </li><li>
            <strong>Insemination Procedure:</strong> Painless 5–10 min procedure using soft catheter; no anesthesia needed
                </li><li>
            <strong>Luteal Phase Support:</strong> Progesterone supplements and pregnancy test after 14 days
                </li></ol>
            <h3 className="iui-reader-section-subhead">📅 IUI Timeline at a Glance</h3>
            <div className="iui-reader-table-wrap"><table><thead>
            <tr><th>Day</th><th>Process</th></tr>
            </thead><tbody><tr><td>1–3</td><td>Period begins, baseline scan</td></tr><tr><td>3–7</td><td>Ovulation medications (if needed)</td></tr><tr><td>8–13</td><td>Ultrasound monitoring</td></tr><tr><td>12–14</td><td>Trigger injection + IUI</td></tr><tr><td>15–28</td><td>Luteal support</td></tr><tr><td>28+</td><td>Pregnancy test</td></tr></tbody></table></div>
            <h3 className="iui-reader-section-subhead">📈 How Many IUI Cycles Should I Try?</h3>
            <ul><li>Try 3–6 IUI cycles before considering IVF</li><li>Success depends on age, egg quality, sperm health, uterine condition</li></ul>
      </>
    ),
  },
  {
    title: "📈 How Many IUI Cycles Should I Try? (continued)",
    content: (
      <>
            <p><strong>Per Cycle Success Rates:</strong></p>
            <ul><li>Women under 35: 10–15%</li><li>Age 35–39: 7–10%</li><li>Over 40: less than 5%</li></ul>
            <h3 className="iui-reader-section-subhead">👩‍⚕️ Who is an Ideal Candidate for IUI?</h3>
            <ul><li>Mild male factor infertility (low count/motility)</li><li>PCOS and other ovulatory issues</li><li>Unexplained infertility</li><li>At least one open fallopian tube and normal uterus</li><li>Single women or LGBTQ+ couples using donor sperm</li></ul>
            <h3 className="iui-reader-section-subhead">💖 Sukam’s Approach to IUI – Natural, Nurturing, Personalized</h3>
            <ul><li>
            <strong>Customized Stimulation:</strong> Based on age and hormone levels; minimal or natural cycle options
                </li><li>
            <strong>Precision Ovulation Tracking:</strong> Serial scans, trigger timing based on follicle size
                </li><li>
            <strong>Advanced Sperm Preparation:</strong> Density gradient/swim-up for motility enhancement
                </li></ul>
      </>
    ),
  },
  {
    title: "💖 Sukam’s Approach to IUI – Natural, Nurturing, Personalized (continued)",
    content: (
      <>
            <ul><li>
            <strong>Nutrition &amp; Lifestyle Support:</strong> Fertility-friendly diet, supplement guidance
                </li><li>
            <strong>Emotional Counseling:</strong> Transparent sessions, clear cost explanation, stress care
                </li></ul>
            <p>We ensure every couple feels informed, calm, and confident throughout the IUI process.</p>
            <h3 className="iui-reader-section-subhead">🌟 Patient Story – &quot;A Simple Step That Brought Big Joy&quot;</h3>
            <p>
            <strong>Riya, 30 years, Teacher:</strong> "After a year of trying, we tried IUI. Sukam's team kept us
                reassured and informed. I conceived in my second cycle. I’m forever grateful."
              </p>
            <h3 className="iui-reader-section-subhead">👣 Take the First Step Toward Parenthood</h3>
            <p>
                IUI isn’t just a treatment — it’s a doorway to hope, courage, and new beginnings. At
                <strong> Sukam Speciality Clinic &amp; Fertility Centre</strong>, we walk beside you from consultation to the
                moment you hear a heartbeat. Begin your journey with clarity, care, and confidence.
              </p>
      </>
    ),
  },
];

const guideTopics = [
  "💗 Introduction – What is IUI?",
  "🩺 When is IUI Recommended?",
  "🔬 Step-by-Step IUI Process",
  "📅 IUI Timeline at a Glance",
  "👩‍⚕️ Who is an Ideal Candidate for IUI?",
  "💖 Sukam’s Approach to IUI – Natural, Nurturing, Personalized",
  "🌟 Patient Story – \"A Simple Step That Brought Big Joy\"",
  "👣 Take the First Step Toward Parenthood"
];

const bookPages = [
  {"kind": "article", "title": "💗 Introduction – What is IUI?", "articleIndex": 0},
  {"kind": "article", "title": "🔬 Step-by-Step IUI Process (continued)", "articleIndex": 1},
  {"kind": "article", "title": "📈 How Many IUI Cycles Should I Try? (continued)", "articleIndex": 2},
  {"kind": "article", "title": "💖 Sukam’s Approach to IUI – Natural, Nurturing, Personalized (continued)", "articleIndex": 3},
  {"kind": "quiz", "title": "Fertility awareness quiz · Q1–4", "start": 0, "end": 4},
  {"kind": "quiz", "title": "Fertility awareness quiz · Q5–8", "start": 4, "end": 8},
  {"kind": "quiz", "title": "Fertility awareness quiz · Q9–12", "start": 8, "end": 12},
  {"kind": "quiz", "title": "Fertility awareness quiz · Q13–15", "start": 12, "end": 15},
  {"kind": "results", "title": "Quiz results & answer review", "start": 0, "end": 3},
  {"kind": "breakdown", "title": "Answer review · Q4–7", "start": 3, "end": 7},
  {"kind": "breakdown", "title": "Answer review · Q8–11", "start": 7, "end": 11},
  {"kind": "breakdown", "title": "Answer review · Q12–15", "start": 11, "end": 15},
  {"kind": "closing", "title": "Take the next step with Sukam Clinic"},
  {"kind": "end", "title": "End"},
];

const chapters = [
  {
    "label": "Introduction – What is IUI?",
    "leftTitle": "💗 Introduction – What is IUI?",
    "rightTitle": "🔬 Step-by-Step IUI Process (continued)"
  },
  {
    "label": "How Many IUI Cycles Should I Try?",
    "leftTitle": "📈 How Many IUI Cycles Should I Try? (continued)",
    "rightTitle": "💖 Sukam’s Approach to IUI – Natural, Nurturing, Personalized (continued)"
  },
  {
    "label": "Quiz · 1–8",
    "leftTitle": "Fertility awareness quiz · Q1–4",
    "rightTitle": "Fertility awareness quiz · Q5–8"
  },
  {
    "label": "Quiz · 9–15",
    "leftTitle": "Fertility awareness quiz · Q9–12",
    "rightTitle": "Fertility awareness quiz · Q13–15"
  },
  {
    "label": "Quiz results & review",
    "leftTitle": "Quiz results & answer review",
    "rightTitle": "Answer review · Q4–7"
  },
  {
    "label": "Review Q8–15",
    "leftTitle": "Answer review · Q8–11",
    "rightTitle": "Answer review · Q12–15"
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
    <fieldset className="iui-reader-quick-check">
      <legend className="iui-reader-quick-check-title">
        <span aria-hidden="true">✦</span> Question {index + 1} of {quizData.length}
      </legend>
      <p>{item.question}</p>
      <div className="iui-reader-radio-list">
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
                "iui-reader-radio-option",
                selected ? "is-selected" : "",
                correct ? "is-correct" : "",
                incorrect ? "is-incorrect" : "",
              ].filter(Boolean).join(" ")}
              onClick={() => onSelect(index, option)}
            >
              <span className="iui-reader-radio-dot" aria-hidden="true" />
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
      className={`iui-reader-page-turn-sheet iui-reader-page-turn-sheet--${meta.direction}`}
      aria-hidden="true"
    >
      <div className="iui-reader-turn-face iui-reader-turn-face--front">
        <div className="iui-reader-turn-page-number">
          {String(meta.frontPage).padStart(2, "0")}
        </div>
        <h3>{meta.frontTitle}</h3>
        <div className="iui-reader-turn-lines"><span /><span /><span /><span /><span /></div>
        <div className="iui-reader-turn-curl" />
      </div>
      <div className="iui-reader-turn-face iui-reader-turn-face--back">
        <div className="iui-reader-turn-page-number">
          {String(meta.backPage).padStart(2, "0")}
        </div>
        <h3>{meta.backTitle}</h3>
        <div className="iui-reader-turn-lines"><span /><span /><span /><span /><span /></div>
      </div>
    </div>
  );
};

const BookPage = ({ number, side, title, isEnd, onTurnPage, children }) => (
  <article className={`iui-reader-book-page iui-reader-book-page--${side} ${isEnd ? "iui-reader-book-page--end" : ""}`.trim()}>
    <div className="iui-reader-paper-grain" aria-hidden="true" />
    <div className="iui-reader-page-number">
      <span>{String(number).padStart(2, "0")}</span>
    </div>
    <div className="iui-reader-page-content">
      {!isEnd && <h2>{title}</h2>}
      {children}
    </div>
    {side === "right" && onTurnPage && (
      <button type="button" className="iui-reader-turn-page" onClick={onTurnPage}>
        Turn page <span aria-hidden="true">↗</span>
      </button>
    )}
  </article>
);

const ScoreDetails = ({ start, end, showResults, selectedAnswers }) => {
  if (!showResults) {
    return (
      <div className="iui-reader-info-note">
        <span className="iui-reader-info-icon" aria-hidden="true">i</span>
        <p>Answer all {quizData.length} quiz questions and select See Results to unlock the detailed breakdown.</p>
      </div>
    );
  }
  return (
    <div className="iui-reader-score-details">
      {quizData.slice(start, end).map((q, idx) => {
        const n = start + idx;
        const correct = selectedAnswers[n] === q.answer;
        return (
          <div key={n} className="iui-reader-score-detail">
            <div className="iui-reader-score-detail-heading">
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

const IUI = () => {
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
          <div className="iui-reader-quiz-intro">
            <p>Answer each question. Completed: {answeredCount} of {totalQuestions}.</p>
            <div className="iui-reader-quiz-track" role="progressbar" aria-label="Quiz progress"
              aria-valuemin="0" aria-valuemax={totalQuestions} aria-valuenow={answeredCount}>
              <div className="iui-reader-quiz-fill" style={{ width: `${quizProgress}%` }} />
            </div>
          </div>
          {quizData.slice(page.start, page.end).map((item, k) => (
            <QuizQuestion key={page.start + k} index={page.start + k} selectedAnswers={selectedAnswers}
              showResults={showResults} onSelect={handleAnswerSelect} />
          ))}
        </>;
        case "results": return <>
          <p className="iui-reader-lead-copy">Complete the questionnaire to see your fertility awareness score.</p>
          {!showResults && (
            <button className="iui-reader-result-button" type="button"
              disabled={answeredCount !== totalQuestions} onClick={() => setShowResults(true)}>
              See Results ({answeredCount}/{totalQuestions})
            </button>
          )}
          {showResults && (
            <div className="iui-reader-result-card" aria-live="polite">
              <strong>{results.percentage}%</strong>
              <div>
                <h3>Your score</h3>
                <p>{results.correct} correct · {results.wrong} incorrect</p>
                <button type="button" onClick={handleTryAgain}>Try Again</button>
              </div>
            </div>
          )}
          <h3 className="iui-reader-results-review-title">Detailed score breakdown</h3>
          <ScoreDetails start={page.start} end={page.end}
            showResults={showResults} selectedAnswers={selectedAnswers} />
        </>;
        case "breakdown": return <ScoreDetails start={page.start} end={page.end}
          showResults={showResults} selectedAnswers={selectedAnswers} />;
        case "review": return <>
          <p>Review the original questions and answers, and note anything you would like to discuss with your fertility specialist.</p>
          <div className="iui-reader-quote-card"><span aria-hidden="true">“</span>
            <p>Understanding your options can help you make informed decisions.</p>
          </div>
        </>;
        case "closing": return <>
          <p>Every fertility journey is personal. Discuss your questions and test results with a qualified fertility specialist to find a suitable next step.</p>
          <h3 className="iui-reader-section-subhead">Topics covered in this guide</h3>
          <ul className="iui-reader-consult-summary">
            {guideTopics.map((topic) => <li key={topic}>{topic}</li>)}
          </ul>
          <p>Use these topics to make a note of what you would like to ask at your consultation.</p>
          <div className="iui-reader-contact-card">
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
        case "end": return <div className="iui-reader-end-page">
          <div className="iui-reader-end-heart" aria-hidden="true">♡</div>
          <span>IUI – A Shortcut for Sperm on Their Journey Home</span>
          <h2>End</h2>
          <p>Thank you for reading this fertility patient guide.</p>
          <div className="iui-reader-end-rule" />
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
    <main className="iui-reader" style={{ "--reader-scale": fontScale }}>
      <header className="iui-reader-header">
        <div className="iui-reader-header-mark" aria-hidden="true">♡</div>
        <div className="iui-reader-header-copy">
          <h1>IUI – A Shortcut for Sperm on Their Journey Home</h1>
          <p>“A simple, effective step closer to your dream.”</p>
        </div>
        <div className="iui-reader-header-decoration" aria-hidden="true" />
      </header>
      <div className="iui-reader-layout">
        <aside className="iui-reader-contents">
          <h2>CONTENTS</h2>
          <nav aria-label="IUI – A Shortcut for Sperm on Their Journey Home book chapters">
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
          <div className="iui-reader-contents-footer">
            <span aria-hidden="true">♡</span>
            <p>Better information.<br />Brighter tomorrows.</p>
          </div>
        </aside>
        <section className="iui-reader-book-stage" ref={bookStageRef}>
          <div className="iui-reader-tools">
            <button className="iui-reader-tool-button" type="button" onClick={handleFontSize}
              disabled={isTurning} aria-label="Change font size" title="Change font size">
              <span>Aa</span><small>⌄</small>
            </button>
            <button className={`iui-reader-tool-button ${isSpeaking ? "is-active" : ""}`.trim()}
              type="button" onClick={handleListen} disabled={isTurning}
              aria-label={isSpeaking ? "Stop listening" : "Listen to chapter"}>
              <span aria-hidden="true">◉</span>
              <strong>{isSpeaking ? "Stop" : "Listen"}</strong>
            </button>
          </div>
          <div className={`iui-reader-book-spread ${isTurning ? "is-turning" : ""}`.trim()}
            ref={bookSpreadRef}>
            {renderPage(leftDescriptor, "left", currentChapter * 2 + 1)}
            {renderPage(rightDescriptor, "right", currentChapter * 2 + 2, next)}
            <PageTurnSheet meta={turnMeta} />
          </div>
          <div className="iui-reader-navigation">
            <button type="button" className="iui-reader-nav-button iui-reader-nav-button--previous"
              onClick={() => changeChapter(currentChapter - 1)}
              disabled={currentChapter === 0 || isTurning}>
              <span aria-hidden="true">←</span> Previous
            </button>
            <div className="iui-reader-progress">
              <strong>Chapter {currentChapter + 1} of {chapters.length}</strong>
              <div className="iui-reader-progress-row">
                <div className="iui-reader-progress-track">
                  <div className="iui-reader-progress-fill" style={{ width: `${chapterProgress}%` }} />
                </div>
                <span>{Math.round(chapterProgress)}%</span>
              </div>
            </div>
            <button type="button" className="iui-reader-nav-button iui-reader-nav-button--next"
              onClick={() => changeChapter(currentChapter + 1)}
              disabled={currentChapter === chapters.length - 1 || isTurning}>
              Next page <span aria-hidden="true">→</span>
            </button>
          </div>
          <p className="iui-reader-keyboard-hint">Tip: use the left and right arrow keys to turn pages.</p>
        </section>
      </div>
    </main>
  );
};

export default IUI;
