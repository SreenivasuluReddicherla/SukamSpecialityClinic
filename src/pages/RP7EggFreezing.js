import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import "./RP7EggFreezing.css";

/**
 * Sukam Clinic — Egg Freezing digital book.
 * All article paragraphs, lists, tables and original quiz questions come
 * from the supplied source component. No extra React packages required.
 */
const quizData = [
  {
    "question": "What is the ideal age range for egg freezing?",
    "options": [
      "18–22",
      "25–35",
      "40–50",
      "Any age"
    ],
    "answer": "25–35"
  },
  {
    "question": "How are eggs retrieved from the ovaries?",
    "options": [
      "Through a major abdominal surgery",
      "By inserting a needle via ultrasound guidance",
      "Through natural ovulation",
      "Via urine sample"
    ],
    "answer": "By inserting a needle via ultrasound guidance"
  },
  {
    "question": "What is vitrification?",
    "options": [
      "A form of egg fertilization",
      "A slow freezing method",
      "A rapid freezing process used to preserve eggs",
      "A type of hormone injection"
    ],
    "answer": "A rapid freezing process used to preserve eggs"
  },
  {
    "question": "How long can frozen eggs be stored?",
    "options": [
      "6 months",
      "1 year",
      "10+ years",
      "Only 2 cycles"
    ],
    "answer": "10+ years"
  },
  {
    "question": "Which factor most affects success after egg freezing?",
    "options": [
      "The gender of the partner",
      "Age at the time of freezing",
      "Time of the month",
      "Exercise habits"
    ],
    "answer": "Age at the time of freezing"
  },
  {
    "question": "Can egg freezing be done if I’m not married or in a relationship?",
    "options": [
      "No",
      "Only with legal permission",
      "Yes",
      "Only after 40"
    ],
    "answer": "Yes"
  },
  {
    "question": "Does egg retrieval harm my ovaries?",
    "options": [
      "Yes, permanently",
      "No, it only collects eggs developed in that month",
      "Causes infertility",
      "Damages the uterus"
    ],
    "answer": "No, it only collects eggs developed in that month"
  },
  {
    "question": "How many mature eggs are ideal to freeze for one child?",
    "options": [
      "1–5",
      "10–20",
      "30–40",
      "Any number will do"
    ],
    "answer": "10–20"
  },
  {
    "question": "Can lifestyle affect egg quality?",
    "options": [
      "No",
      "Yes",
      "Only after age 40",
      "Not relevant for freezing"
    ],
    "answer": "Yes"
  },
  {
    "question": "When will I use these eggs?",
    "options": [
      "Next month",
      "Whenever I plan a pregnancy via IVF",
      "During my periods",
      "After menopause only"
    ],
    "answer": "Whenever I plan a pregnancy via IVF"
  }
];

const articlePages = [
  {
    title: "💖 Introduction: Why Egg Freezing Matters Today",
    content: (
      <>
            <p>
                In today’s world, many women are choosing to focus on education, careers, travel, or simply want more time before starting a family.
                However, as age increases, the quality and quantity of a woman’s eggs naturally decline — reducing the chances of conceiving.
              </p>
            <p>
                Egg freezing, also known as <strong>oocyte cryopreservation</strong>, offers a solution: you can freeze your healthy eggs while you're young and use them later when you're ready for parenthood.
                It’s not just about delaying pregnancy; it’s about preserving the possibility of having biological children on your terms — medically, emotionally, and socially.
              </p>
            <h3 className="egg-reader-section-subhead">🧬 What is Egg Freezing?</h3>
            <p>
                Egg freezing is a process where a woman’s eggs are extracted, frozen, and stored for future use. 
                The frozen eggs can later be thawed, fertilized with sperm in a lab (IVF), and implanted into the uterus when the woman is ready to conceive.
              </p>
      </>
    ),
  },
  {
    title: "🧬 What is Egg Freezing? (continued)",
    content: (
      <>
            <p>
                This method is safe, well-studied, and increasingly popular among women who wish to take charge of their fertility timeline.
              </p>
            <h3 className="egg-reader-section-subhead">🎯 Who Can Consider Egg Freezing?</h3>
            <ul><li>You're under 35 and not planning children soon</li><li>You're focusing on career, travel, or personal goals</li><li>You're undergoing cancer treatment or other therapies that can affect fertility</li><li>You have a family history of early menopause</li><li>You’re not yet ready for a child but want to preserve your fertility options</li><li>You're part of the LGBTQ+ community or in uncertain relationship situations</li></ul>
            <h3 className="egg-reader-section-subhead">📝 The Step-by-Step Egg Freezing Process</h3>
            <h4>1. Initial Consultation</h4>
            <p>You’ll meet a fertility specialist who will review your health history and perform basic fertility assessments:</p>
      </>
    ),
  },
  {
    title: "📝 The Step-by-Step Egg Freezing Process (continued)",
    content: (
      <>
            <ul><li>Ultrasound scan (to check your ovaries and antral follicle count)</li><li>AMH blood test (to assess your egg reserve)</li><li>Hormone tests (FSH, LH, E2, TSH, prolactin, etc.)</li></ul>
            <h4>2. Ovarian Stimulation</h4>
            <p>
                You'll take fertility injections (hormones) daily for 10–12 days to help your ovaries produce multiple eggs. 
                You'll be monitored with 2–3 ultrasounds during this period.
              </p>
            <p>Most women continue working during stimulation — it's safe and manageable.</p>
            <h4>3. Egg Retrieval</h4>
            <p>
                Once your eggs are mature, your doctor will schedule a short procedure (15–20 minutes) under light sedation. 
                No cuts or stitches are needed. You’ll rest for a few hours and go home the same day.
              </p>
            <h4>4. Vitrification (Freezing)</h4>
            <p>
                Your mature eggs are flash-frozen using an advanced method called <strong>vitrification</strong> — this prevents ice crystal formation and keeps the egg healthy.
              </p>
      </>
    ),
  },
  {
    title: "📝 The Step-by-Step Egg Freezing Process (continued)",
    content: (
      <>
            <p>Eggs can be stored safely for up to 10 years or more, depending on local guidelines.</p>
            <h3 className="egg-reader-section-subhead">🌿 Sukam’s Holistic Approach to Egg Freezing</h3>
            <ul><li><strong>🧘 Yoga &amp; Mindfulness:</strong> Helps reduce stress, support hormonal balance, and promote calmness during stimulation.</li><li><strong>🥗 Fertility Nutrition Plans:</strong> Personalized diet guidance to improve egg quality — rich in antioxidants, omega-3s, and iron.</li><li><strong>🧠 Fertility Counseling:</strong> Our experts support you through every decision, helping you understand success rates, timelines, and emotional preparedness.</li><li><strong>🤝 Peer Connect:</strong> Connect with women who’ve been through the same process — for shared stories and real reassurance.</li></ul>
            <h3 className="egg-reader-section-subhead">✨ Real Story: “Freezing My Eggs Freed Me”</h3>
            <p><strong>Divya, 34, Marketing Executive:</strong></p>
      </>
    ),
  },
  {
    title: "✨ Real Story: “Freezing My Eggs Freed Me” (continued)",
    content: (
      <>
            <blockquote>
                “I always wanted to be a mother, but not right now. When I turned 33, I started researching egg freezing.
                At first, I was scared it meant I was giving up on love or motherhood. But actually, it gave me freedom.
                I took the injections for 11 days, got 12 eggs frozen, and felt a huge sense of relief. I’m not racing the clock anymore.”
              </blockquote>
            <h3 className="egg-reader-section-subhead">✅ Quick Tips for Egg Freezing Success</h3>
            <ul><li>Start the process sooner rather than later</li><li>Avoid smoking and alcohol</li><li>Maintain a healthy weight</li><li>Eat foods rich in antioxidants (berries, spinach, almonds)</li><li>Prioritize sleep and manage stress</li></ul>
            <h3 className="egg-reader-section-subhead">📞 Take Your Next Step</h3>
            <p>
                If you're wondering whether egg freezing is right for you, come talk to us.
                There's no pressure — just a safe space to ask questions and get real answers.
              </p>
      </>
    ),
  },
];

const guideTopics = [
  "💖 Introduction: Why Egg Freezing Matters Today",
  "🧬 What is Egg Freezing?",
  "🎯 Who Can Consider Egg Freezing?",
  "📝 The Step-by-Step Egg Freezing Process",
  "🌿 Sukam’s Holistic Approach to Egg Freezing",
  "✨ Real Story: “Freezing My Eggs Freed Me”",
  "✅ Quick Tips for Egg Freezing Success",
  "📞 Take Your Next Step"
];

const bookPages = [
  {"kind": "article", "title": "💖 Introduction: Why Egg Freezing Matters Today", "articleIndex": 0},
  {"kind": "article", "title": "🧬 What is Egg Freezing? (continued)", "articleIndex": 1},
  {"kind": "article", "title": "📝 The Step-by-Step Egg Freezing Process (continued)", "articleIndex": 2},
  {"kind": "article", "title": "📝 The Step-by-Step Egg Freezing Process (continued)", "articleIndex": 3},
  {"kind": "article", "title": "✨ Real Story: “Freezing My Eggs Freed Me” (continued)", "articleIndex": 4},
  {"kind": "quiz", "title": "Fertility awareness quiz · Q1–3", "start": 0, "end": 3},
  {"kind": "quiz", "title": "Fertility awareness quiz · Q4–6", "start": 3, "end": 6},
  {"kind": "quiz", "title": "Fertility awareness quiz · Q7–10", "start": 6, "end": 10},
  {"kind": "results", "title": "Quiz results & answer review", "start": 0, "end": 4},
  {"kind": "breakdown", "title": "Answer review · Q5–10", "start": 4, "end": 10},
  {"kind": "closing", "title": "Take the next step with Sukam Clinic"},
  {"kind": "end", "title": "End"},
];

const chapters = [
  {
    "label": "Introduction: Why Egg Freezing Matters Today",
    "leftTitle": "💖 Introduction: Why Egg Freezing Matters Today",
    "rightTitle": "🧬 What is Egg Freezing? (continued)"
  },
  {
    "label": "The Step-by-Step Egg Freezing Process",
    "leftTitle": "📝 The Step-by-Step Egg Freezing Process (continued)",
    "rightTitle": "📝 The Step-by-Step Egg Freezing Process (continued)"
  },
  {
    "label": "Real Story: “Freezing My Eggs Freed Me”",
    "leftTitle": "✨ Real Story: “Freezing My Eggs Freed Me” (continued)",
    "rightTitle": "Fertility awareness quiz · Q1–3"
  },
  {
    "label": "Quiz · 4–10",
    "leftTitle": "Fertility awareness quiz · Q4–6",
    "rightTitle": "Fertility awareness quiz · Q7–10"
  },
  {
    "label": "Quiz results & review",
    "leftTitle": "Quiz results & answer review",
    "rightTitle": "Answer review · Q5–10"
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
    <fieldset className="egg-reader-quick-check">
      <legend className="egg-reader-quick-check-title">
        <span aria-hidden="true">✦</span> Question {index + 1} of {quizData.length}
      </legend>
      <p>{item.question}</p>
      <div className="egg-reader-radio-list">
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
                "egg-reader-radio-option",
                selected ? "is-selected" : "",
                correct ? "is-correct" : "",
                incorrect ? "is-incorrect" : "",
              ].filter(Boolean).join(" ")}
              onClick={() => onSelect(index, option)}
            >
              <span className="egg-reader-radio-dot" aria-hidden="true" />
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
      className={`egg-reader-page-turn-sheet egg-reader-page-turn-sheet--${meta.direction}`}
      aria-hidden="true"
    >
      <div className="egg-reader-turn-face egg-reader-turn-face--front">
        <div className="egg-reader-turn-page-number">
          {String(meta.frontPage).padStart(2, "0")}
        </div>
        <h3>{meta.frontTitle}</h3>
        <div className="egg-reader-turn-lines"><span /><span /><span /><span /><span /></div>
        <div className="egg-reader-turn-curl" />
      </div>
      <div className="egg-reader-turn-face egg-reader-turn-face--back">
        <div className="egg-reader-turn-page-number">
          {String(meta.backPage).padStart(2, "0")}
        </div>
        <h3>{meta.backTitle}</h3>
        <div className="egg-reader-turn-lines"><span /><span /><span /><span /><span /></div>
      </div>
    </div>
  );
};

const BookPage = ({ number, side, title, isEnd, onTurnPage, children }) => (
  <article className={`egg-reader-book-page egg-reader-book-page--${side} ${isEnd ? "egg-reader-book-page--end" : ""}`.trim()}>
    <div className="egg-reader-paper-grain" aria-hidden="true" />
    <div className="egg-reader-page-number">
      <span>{String(number).padStart(2, "0")}</span>
    </div>
    <div className="egg-reader-page-content">
      {!isEnd && <h2>{title}</h2>}
      {children}
    </div>
    {side === "right" && onTurnPage && (
      <button type="button" className="egg-reader-turn-page" onClick={onTurnPage}>
        Turn page <span aria-hidden="true">↗</span>
      </button>
    )}
  </article>
);

const ScoreDetails = ({ start, end, showResults, selectedAnswers }) => {
  if (!showResults) {
    return (
      <div className="egg-reader-info-note">
        <span className="egg-reader-info-icon" aria-hidden="true">i</span>
        <p>Answer all {quizData.length} quiz questions and select See Results to unlock the detailed breakdown.</p>
      </div>
    );
  }
  return (
    <div className="egg-reader-score-details">
      {quizData.slice(start, end).map((q, idx) => {
        const n = start + idx;
        const correct = selectedAnswers[n] === q.answer;
        return (
          <div key={n} className="egg-reader-score-detail">
            <div className="egg-reader-score-detail-heading">
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

const EggFreezing = () => {
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
          <div className="egg-reader-quiz-intro">
            <p>Answer each question. Completed: {answeredCount} of {totalQuestions}.</p>
            <div className="egg-reader-quiz-track" role="progressbar" aria-label="Quiz progress"
              aria-valuemin="0" aria-valuemax={totalQuestions} aria-valuenow={answeredCount}>
              <div className="egg-reader-quiz-fill" style={{ width: `${quizProgress}%` }} />
            </div>
          </div>
          {quizData.slice(page.start, page.end).map((item, k) => (
            <QuizQuestion key={page.start + k} index={page.start + k} selectedAnswers={selectedAnswers}
              showResults={showResults} onSelect={handleAnswerSelect} />
          ))}
        </>;
        case "results": return <>
          <p className="egg-reader-lead-copy">Complete the questionnaire to see your fertility awareness score.</p>
          {!showResults && (
            <button className="egg-reader-result-button" type="button"
              disabled={answeredCount !== totalQuestions} onClick={() => setShowResults(true)}>
              See Results ({answeredCount}/{totalQuestions})
            </button>
          )}
          {showResults && (
            <div className="egg-reader-result-card" aria-live="polite">
              <strong>{results.percentage}%</strong>
              <div>
                <h3>Your score</h3>
                <p>{results.correct} correct · {results.wrong} incorrect</p>
                <button type="button" onClick={handleTryAgain}>Try Again</button>
              </div>
            </div>
          )}
          <h3 className="egg-reader-results-review-title">Detailed score breakdown</h3>
          <ScoreDetails start={page.start} end={page.end}
            showResults={showResults} selectedAnswers={selectedAnswers} />
        </>;
        case "breakdown": return <ScoreDetails start={page.start} end={page.end}
          showResults={showResults} selectedAnswers={selectedAnswers} />;
        case "review": return <>
          <p>Review the original questions and answers, and note anything you would like to discuss with your fertility specialist.</p>
          <div className="egg-reader-quote-card"><span aria-hidden="true">“</span>
            <p>Understanding your options can help you make informed decisions.</p>
          </div>
        </>;
        case "closing": return <>
          <p>Every fertility journey is personal. Discuss your questions and test results with a qualified fertility specialist to find a suitable next step.</p>
          <h3 className="egg-reader-section-subhead">Topics covered in this guide</h3>
          <ul className="egg-reader-consult-summary">
            {guideTopics.map((topic) => <li key={topic}>{topic}</li>)}
          </ul>
          <p>Use these topics to make a note of what you would like to ask at your consultation.</p>
          <div className="egg-reader-contact-card">
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
        case "end": return <div className="egg-reader-end-page">
          <div className="egg-reader-end-heart" aria-hidden="true">♡</div>
          <span>Egg Freezing</span>
          <h2>End</h2>
          <p>Thank you for reading this fertility patient guide.</p>
          <div className="egg-reader-end-rule" />
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
    <main className="egg-reader" style={{ "--reader-scale": fontScale }}>
      <header className="egg-reader-header">
        <div className="egg-reader-header-mark" aria-hidden="true">♡</div>
        <div className="egg-reader-header-copy">
          <h1>Egg Freezing</h1>
          <p>“Pause your biological clock, not your dreams.”</p>
        </div>
        <div className="egg-reader-header-decoration" aria-hidden="true" />
      </header>
      <div className="egg-reader-layout">
        <aside className="egg-reader-contents">
          <h2>CONTENTS</h2>
          <nav aria-label="Egg Freezing book chapters">
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
          <div className="egg-reader-contents-footer">
            <span aria-hidden="true">♡</span>
            <p>Better information.<br />Brighter tomorrows.</p>
          </div>
        </aside>
        <section className="egg-reader-book-stage" ref={bookStageRef}>
          <div className="egg-reader-tools">
            <button className="egg-reader-tool-button" type="button" onClick={handleFontSize}
              disabled={isTurning} aria-label="Change font size" title="Change font size">
              <span>Aa</span><small>⌄</small>
            </button>
            <button className={`egg-reader-tool-button ${isSpeaking ? "is-active" : ""}`.trim()}
              type="button" onClick={handleListen} disabled={isTurning}
              aria-label={isSpeaking ? "Stop listening" : "Listen to chapter"}>
              <span aria-hidden="true">◉</span>
              <strong>{isSpeaking ? "Stop" : "Listen"}</strong>
            </button>
          </div>
          <div className={`egg-reader-book-spread ${isTurning ? "is-turning" : ""}`.trim()}
            ref={bookSpreadRef}>
            {renderPage(leftDescriptor, "left", currentChapter * 2 + 1)}
            {renderPage(rightDescriptor, "right", currentChapter * 2 + 2, next)}
            <PageTurnSheet meta={turnMeta} />
          </div>
          <div className="egg-reader-navigation">
            <button type="button" className="egg-reader-nav-button egg-reader-nav-button--previous"
              onClick={() => changeChapter(currentChapter - 1)}
              disabled={currentChapter === 0 || isTurning}>
              <span aria-hidden="true">←</span> Previous
            </button>
            <div className="egg-reader-progress">
              <strong>Chapter {currentChapter + 1} of {chapters.length}</strong>
              <div className="egg-reader-progress-row">
                <div className="egg-reader-progress-track">
                  <div className="egg-reader-progress-fill" style={{ width: `${chapterProgress}%` }} />
                </div>
                <span>{Math.round(chapterProgress)}%</span>
              </div>
            </div>
            <button type="button" className="egg-reader-nav-button egg-reader-nav-button--next"
              onClick={() => changeChapter(currentChapter + 1)}
              disabled={currentChapter === chapters.length - 1 || isTurning}>
              Next page <span aria-hidden="true">→</span>
            </button>
          </div>
          <p className="egg-reader-keyboard-hint">Tip: use the left and right arrow keys to turn pages.</p>
        </section>
      </div>
    </main>
  );
};

export default EggFreezing;
