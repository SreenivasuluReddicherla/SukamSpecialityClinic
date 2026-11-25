import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import "./RP4NaturalPregnancy.css";

/**
 * Sukam Clinic — Natural Pregnancy / OITI digital book.
 * All article paragraphs, lists, tables and original quiz questions come
 * from the supplied source component. No extra React packages required.
 */
const quizData = [
  {
    "question": "What does OITI stand for?",
    "options": [
      "Ovarian Injection and Treatment Initiation",
      "Ovulation Induction with Timed Intercourse",
      "Ovary Implant Transfer",
      "Oocyte Insemination Timing Intervention"
    ],
    "answer": "Ovulation Induction with Timed Intercourse"
  },
  {
    "question": "Which medicine is commonly used to induce ovulation?",
    "options": [
      "Paracetamol",
      "Letrozole",
      "Insulin",
      "Estrogen-only pills"
    ],
    "answer": "Letrozole"
  },
  {
    "question": "What is used to trigger egg release in an OITI cycle?",
    "options": [
      "FSH",
      "Estrogen",
      "hCG",
      "Vitamin D"
    ],
    "answer": "hCG"
  },
  {
    "question": "How is ovulation monitored in OITI?",
    "options": [
      "CT scan",
      "Blood pressure",
      "Transvaginal ultrasound",
      "Chest X-ray"
    ],
    "answer": "Transvaginal ultrasound"
  },
  {
    "question": "What is the ideal follicle size before triggering ovulation?",
    "options": [
      "10 mm",
      "14 mm",
      "18–20 mm",
      "25 mm"
    ],
    "answer": "18–20 mm"
  },
  {
    "question": "When is intercourse advised after hCG trigger?",
    "options": [
      "12 hours later",
      "24–36 hours later",
      "3 days later",
      "Anytime"
    ],
    "answer": "24–36 hours later"
  },
  {
    "question": "How many OITI cycles are generally tried before shifting to IUI?",
    "options": [
      "1 cycle",
      "2–3 cycles",
      "3–6 cycles",
      "10 cycles"
    ],
    "answer": "3–6 cycles"
  },
  {
    "question": "Who is NOT a good candidate for OITI?",
    "options": [
      "Woman with regular periods",
      "Woman with open tubes",
      "Man with severe sperm abnormality",
      "Woman under 30"
    ],
    "answer": "Man with severe sperm abnormality"
  },
  {
    "question": "What support may be given in the luteal phase?",
    "options": [
      "Estrogen",
      "Progesterone",
      "Antibiotics",
      "Painkillers"
    ],
    "answer": "Progesterone"
  },
  {
    "question": "What is the main goal of OITI?",
    "options": [
      "Collecting eggs for IVF",
      "Stimulating ovulation and planning intercourse",
      "Donating eggs",
      "Blocking ovulation"
    ],
    "answer": "Stimulating ovulation and planning intercourse"
  }
];

const articlePages = [
  {
    title: "💗 What is OITI?",
    content: (
      <>
            <p>Ovulation Induction with Timed Intercourse (OITI) is one of the simplest and most natural forms of fertility treatment. It involves stimulating ovulation in women who are not ovulating regularly (or at all), and then guiding couples on the best time for intercourse to maximize the chance of conception.</p>
            <p>OITI is non-invasive, affordable, and often the first-line treatment for many women with ovulatory disorders or unexplained infertility. It beautifully blends medical science with natural conception.</p>
            <h3 className="np-reader-section-subhead">🩺 Who Can Benefit from OITI?</h3>
            <ul><li>Women with irregular or absent periods (e.g., PCOS)</li><li>Couples with unexplained infertility</li><li>Couples with normal test results seeking natural conception</li><li>Young couples with good egg reserve and open fallopian tubes</li><li>Those wanting to try natural methods before IUI/IVF</li></ul>
            <p><strong>Not suitable for:</strong> Women with blocked fallopian tubes or couples with severe male infertility.</p>
      </>
    ),
  },
  {
    title: "🔄 Step-by-Step OITI Process",
    content: (
      <>
            <ol><li><strong>Baseline Evaluation:</strong> Hormone blood tests (FSH, LH, AMH, TSH, Prolactin), and ultrasound scan.</li><li><strong>Ovulation Induction:</strong> Medicines like Letrozole or Clomiphene Citrate (Day 2–5); hormone injections if needed.</li><li><strong>Follicular Monitoring:</strong> Ultrasounds on Days 8, 10, 12 to monitor follicle growth and endometrial thickness.</li><li><strong>Triggering Ovulation:</strong> hCG shot given when follicle reaches 18–20 mm.</li><li><strong>Timed Intercourse:</strong> Intercourse guided 24–36 hours after the trigger; may be advised over 2–3 days.</li><li><strong>Luteal Phase Support:</strong> Progesterone supplements as needed; pregnancy test after 14 days.</li></ol>
            <h3 className="np-reader-section-subhead">📅 Timeline for an OITI Cycle</h3>
            <div className="np-reader-table-wrap"><table><thead><tr><th>Day</th><th>Activity</th></tr></thead><tbody><tr><td>Day 1–3</td><td>Period begins</td></tr><tr><td>Day 2–5</td><td>Start ovulation medications</td></tr><tr><td>Day 8–12</td><td>Follicle scan monitoring</td></tr></tbody></table></div>
      </>
    ),
  },
  {
    title: "📅 Timeline for an OITI Cycle (continued)",
    content: (
      <>
            <div className="np-reader-table-wrap"><table><thead><tr><th>Day</th><th>Activity</th></tr></thead><tbody><tr><td>Day 12–14</td><td>Trigger shot + Timed intercourse</td></tr><tr><td>Day 15–28</td><td>Wait and support phase</td></tr><tr><td>Day 28+</td><td>Pregnancy test</td></tr></tbody></table></div>
            <h3 className="np-reader-section-subhead">📈 How Many OITI Cycles Should I Try?</h3>
            <ul><li>Most couples try 3–6 cycles based on age and egg reserve.</li><li>Cumulative success increases when ovulation is well monitored.</li><li>If no pregnancy after 4–6 cycles, move to IUI or IVF.</li></ul>
            <h3 className="np-reader-section-subhead">💖 Sukam’s Approach to OITI</h3>
            <ul><li>Customized medication plans for each woman</li><li>Minimal scans and stress-free cycle tracking</li><li>Natural cycle support with lifestyle guidance</li><li>Fertility diet and supplement recommendations</li></ul>
      </>
    ),
  },
  {
    title: "💖 Sukam’s Approach to OITI (continued)",
    content: (
      <>
            <ul><li>Clear advice on timing, signs, and intercourse guidance</li></ul>
            <p>We aim to help couples conceive in the most natural and least invasive way possible.</p>
            <h3 className="np-reader-section-subhead">🌼 Real Story – &quot;A Natural Blessing&quot;</h3>
            <p><strong>Anjali, 29 years, Newly Married:</strong> “I have PCOS and irregular cycles. I didn’t want to jump into IVF. With simple medicines and timely guidance from the Sukam team, I ovulated and conceived naturally in just my second OITI cycle. It felt so empowering.”</p>
            <h3 className="np-reader-section-subhead">🌱 Let Nature Take Its Course</h3>
            <p>OITI is where simplicity meets science. It’s a gentle, guided path for couples who wish to start a family naturally. At <strong>Sukam Speciality Clinic &amp; Fertility Centre</strong>, we support your journey with clarity, compassion, and hope.</p>
            <p><strong>Take your first step today — the most beautiful journeys often begin with the smallest steps.</strong></p>
      </>
    ),
  },
];

const bookPages = [
  {"kind": "article", "title": "💗 What is OITI?", "articleIndex": 0},
  {"kind": "article", "title": "🔄 Step-by-Step OITI Process", "articleIndex": 1},
  {"kind": "article", "title": "📅 Timeline for an OITI Cycle (continued)", "articleIndex": 2},
  {"kind": "article", "title": "💖 Sukam’s Approach to OITI (continued)", "articleIndex": 3},
  {"kind": "quiz", "title": "Fertility awareness quiz · Q1–4", "start": 0, "end": 4},
  {"kind": "quiz", "title": "Fertility awareness quiz · Q5–7", "start": 4, "end": 7},
  {"kind": "quiz", "title": "Fertility awareness quiz · Q8–10", "start": 7, "end": 10},
  {"kind": "results", "title": "Quiz results & answer review", "start": 0, "end": 3},
  {"kind": "breakdown", "title": "Answer review · Q4–7", "start": 3, "end": 7},
  {"kind": "breakdown", "title": "Answer review · Q8–10", "start": 7, "end": 10},
  {"kind": "closing", "title": "Take the next step with Sukam Clinic"},
  {"kind": "end", "title": "End"},
];

const chapters = [
  {
    "label": "What is OITI?",
    "leftTitle": "💗 What is OITI?",
    "rightTitle": "🔄 Step-by-Step OITI Process"
  },
  {
    "label": "Timeline for an OITI Cycle",
    "leftTitle": "📅 Timeline for an OITI Cycle (continued)",
    "rightTitle": "💖 Sukam’s Approach to OITI (continued)"
  },
  {
    "label": "Quiz · 1–7",
    "leftTitle": "Fertility awareness quiz · Q1–4",
    "rightTitle": "Fertility awareness quiz · Q5–7"
  },
  {
    "label": "Quiz · 8–10",
    "leftTitle": "Fertility awareness quiz · Q8–10",
    "rightTitle": "Quiz results & answer review"
  },
  {
    "label": "Review Q4–10",
    "leftTitle": "Answer review · Q4–7",
    "rightTitle": "Answer review · Q8–10"
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
    <fieldset className="np-reader-quick-check">
      <legend className="np-reader-quick-check-title">
        <span aria-hidden="true">✦</span> Question {index + 1} of {quizData.length}
      </legend>
      <p>{item.question}</p>
      <div className="np-reader-radio-list">
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
                "np-reader-radio-option",
                selected ? "is-selected" : "",
                correct ? "is-correct" : "",
                incorrect ? "is-incorrect" : "",
              ].filter(Boolean).join(" ")}
              onClick={() => onSelect(index, option)}
            >
              <span className="np-reader-radio-dot" aria-hidden="true" />
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
      className={`np-reader-page-turn-sheet np-reader-page-turn-sheet--${meta.direction}`}
      aria-hidden="true"
    >
      <div className="np-reader-turn-face np-reader-turn-face--front">
        <div className="np-reader-turn-page-number">
          {String(meta.frontPage).padStart(2, "0")}
        </div>
        <h3>{meta.frontTitle}</h3>
        <div className="np-reader-turn-lines"><span /><span /><span /><span /><span /></div>
        <div className="np-reader-turn-curl" />
      </div>
      <div className="np-reader-turn-face np-reader-turn-face--back">
        <div className="np-reader-turn-page-number">
          {String(meta.backPage).padStart(2, "0")}
        </div>
        <h3>{meta.backTitle}</h3>
        <div className="np-reader-turn-lines"><span /><span /><span /><span /><span /></div>
      </div>
    </div>
  );
};

const BookPage = ({ number, side, title, isEnd, onTurnPage, children }) => (
  <article className={`np-reader-book-page np-reader-book-page--${side} ${isEnd ? "np-reader-book-page--end" : ""}`.trim()}>
    <div className="np-reader-paper-grain" aria-hidden="true" />
    <div className="np-reader-page-number">
      <span>{String(number).padStart(2, "0")}</span>
    </div>
    <div className="np-reader-page-content">
      {!isEnd && <h2>{title}</h2>}
      {children}
    </div>
    {side === "right" && onTurnPage && (
      <button type="button" className="np-reader-turn-page" onClick={onTurnPage}>
        Turn page <span aria-hidden="true">↗</span>
      </button>
    )}
  </article>
);

const ScoreDetails = ({ start, end, showResults, selectedAnswers }) => {
  if (!showResults) {
    return (
      <div className="np-reader-review-preview">
        <p className="np-reader-preview-intro">
          Complete the quiz and select <strong>See Results</strong> to reveal the answers.
          Your progress is tracked below.
        </p>
        <div className="np-reader-review-pending-list">
          {quizData.slice(start, end).map((q, idx) => {
            const number = start + idx;
            const answered = Object.prototype.hasOwnProperty.call(selectedAnswers, number);
            return (
              <div className="np-reader-review-pending-item" key={number}>
                <span>Q{number + 1}</span>
                <strong>{q.question}</strong>
                <small className={answered ? "is-answered" : ""}>
                  {answered ? "Answered" : "Not answered"}
                </small>
              </div>
            );
          })}
        </div>
        <div className="np-reader-info-note">
          <span className="np-reader-info-icon" aria-hidden="true">i</span>
          <p>Your detailed score and answer explanations become available after you submit.</p>
        </div>
      </div>
    );
  }
  return (
    <div className="np-reader-score-details">
      {quizData.slice(start, end).map((q, idx) => {
        const n = start + idx;
        const correct = selectedAnswers[n] === q.answer;
        return (
          <div key={n} className="np-reader-score-detail">
            <div className="np-reader-score-detail-heading">
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

const NaturalPregnancy = () => {
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
          <div className="np-reader-quiz-intro">
            <p>Answer each question. Completed: {answeredCount} of {totalQuestions}.</p>
            <div className="np-reader-quiz-track" role="progressbar" aria-label="Quiz progress"
              aria-valuemin="0" aria-valuemax={totalQuestions} aria-valuenow={answeredCount}>
              <div className="np-reader-quiz-fill" style={{ width: `${quizProgress}%` }} />
            </div>
          </div>
          {quizData.slice(page.start, page.end).map((item, k) => (
            <QuizQuestion key={page.start + k} index={page.start + k} selectedAnswers={selectedAnswers}
              showResults={showResults} onSelect={handleAnswerSelect} />
          ))}
        </>;
        case "results": return <>
          <p className="np-reader-lead-copy">Complete the questionnaire to see your fertility awareness score.</p>
          {!showResults && (
            <button className="np-reader-result-button" type="button"
              disabled={answeredCount !== totalQuestions} onClick={() => setShowResults(true)}>
              See Results ({answeredCount}/{totalQuestions})
            </button>
          )}
          {showResults && (
            <div className="np-reader-result-card" aria-live="polite">
              <strong>{results.percentage}%</strong>
              <div>
                <h3>Your score</h3>
                <p>{results.correct} correct · {results.wrong} incorrect</p>
                <button type="button" onClick={handleTryAgain}>Try Again</button>
              </div>
            </div>
          )}
          <h3 className="np-reader-results-review-title">Detailed score breakdown</h3>
          <ScoreDetails start={page.start} end={page.end}
            showResults={showResults} selectedAnswers={selectedAnswers} />
        </>;
        case "breakdown": return <ScoreDetails start={page.start} end={page.end}
          showResults={showResults} selectedAnswers={selectedAnswers} />;
        case "review": return <>
          <p>Review the original questions and answers, and note anything you would like to discuss with your fertility specialist.</p>
          <div className="np-reader-quote-card"><span aria-hidden="true">“</span>
            <p>Understanding your options can help you make informed decisions.</p>
          </div>
        </>;
        case "closing": return <>
          <p>Every fertility journey is personal. Discuss your questions and test results with a qualified fertility specialist to find a suitable next step.</p>
          <div className="np-reader-contact-card">
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
        case "end": return <div className="np-reader-end-page">
          <div className="np-reader-end-heart" aria-hidden="true">♡</div>
          <span>Natural Pregnancy / OITI</span>
          <h2>End</h2>
          <p>Thank you for reading this fertility patient guide.</p>
          <div className="np-reader-end-rule" />
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
    <main className="np-reader" style={{ "--reader-scale": fontScale }}>
      <header className="np-reader-header">
        <div className="np-reader-header-mark" aria-hidden="true">♡</div>
        <div className="np-reader-header-copy">
          <h1>Natural Pregnancy / OITI</h1>
          <p>“Sometimes, a little guidance brings nature back on track.”</p>
        </div>
        <div className="np-reader-header-decoration" aria-hidden="true" />
      </header>
      <div className="np-reader-layout">
        <aside className="np-reader-contents">
          <h2>CONTENTS</h2>
          <nav aria-label="Natural Pregnancy / OITI book chapters">
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
          <div className="np-reader-contents-footer">
            <span aria-hidden="true">♡</span>
            <p>Better information.<br />Brighter tomorrows.</p>
          </div>
        </aside>
        <section className="np-reader-book-stage" ref={bookStageRef}>
          <div className="np-reader-tools">
            <button className="np-reader-tool-button" type="button" onClick={handleFontSize}
              disabled={isTurning} aria-label="Change font size" title="Change font size">
              <span>Aa</span><small>⌄</small>
            </button>
            <button className={`np-reader-tool-button ${isSpeaking ? "is-active" : ""}`.trim()}
              type="button" onClick={handleListen} disabled={isTurning}
              aria-label={isSpeaking ? "Stop listening" : "Listen to chapter"}>
              <span aria-hidden="true">◉</span>
              <strong>{isSpeaking ? "Stop" : "Listen"}</strong>
            </button>
          </div>
          <div className={`np-reader-book-spread ${isTurning ? "is-turning" : ""}`.trim()}
            ref={bookSpreadRef}>
            {renderPage(leftDescriptor, "left", currentChapter * 2 + 1)}
            {renderPage(rightDescriptor, "right", currentChapter * 2 + 2, next)}
            <PageTurnSheet meta={turnMeta} />
          </div>
          <div className="np-reader-navigation">
            <button type="button" className="np-reader-nav-button np-reader-nav-button--previous"
              onClick={() => changeChapter(currentChapter - 1)}
              disabled={currentChapter === 0 || isTurning}>
              <span aria-hidden="true">←</span> Previous
            </button>
            <div className="np-reader-progress">
              <strong>Chapter {currentChapter + 1} of {chapters.length}</strong>
              <div className="np-reader-progress-row">
                <div className="np-reader-progress-track">
                  <div className="np-reader-progress-fill" style={{ width: `${chapterProgress}%` }} />
                </div>
                <span>{Math.round(chapterProgress)}%</span>
              </div>
            </div>
            <button type="button" className="np-reader-nav-button np-reader-nav-button--next"
              onClick={() => changeChapter(currentChapter + 1)}
              disabled={currentChapter === chapters.length - 1 || isTurning}>
              Next page <span aria-hidden="true">→</span>
            </button>
          </div>
          <p className="np-reader-keyboard-hint">Tip: use the left and right arrow keys to turn pages.</p>
        </section>
      </div>
    </main>
  );
};

export default NaturalPregnancy;
