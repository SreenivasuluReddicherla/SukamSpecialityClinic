import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import "./RP3MaleInfertility.css";

/**
 * Sukam Clinic — Male Infertility digital book.
 * All article paragraphs, lists, tables and original quiz questions come
 * from the supplied source component. No extra React packages required.
 */
const quizData = [
  {
    "question": "What is the normal sperm concentration as per WHO?",
    "options": [
      ">10 million/mL",
      ">15 million/mL",
      ">20 million/mL",
      ">5 million/mL"
    ],
    "answer": ">15 million/mL"
  },
  {
    "question": "Which condition is defined as complete absence of sperm in the ejaculate?",
    "options": [
      "Oligospermia",
      "Asthenospermia",
      "Azoospermia",
      "Teratospermia"
    ],
    "answer": "Azoospermia"
  },
  {
    "question": "Which hormone stimulates sperm production in men?",
    "options": [
      "LH",
      "FSH",
      "Prolactin",
      "Estrogen"
    ],
    "answer": "FSH"
  },
  {
    "question": "Which is a common structural cause of male infertility?",
    "options": [
      "Varicocele",
      "Fibroids",
      "PCOS",
      "Retroverted uterus"
    ],
    "answer": "Varicocele"
  },
  {
    "question": "What does asthenozoospermia refer to?",
    "options": [
      "Low sperm count",
      "Poor sperm motility",
      "Abnormal sperm shape",
      "High semen volume"
    ],
    "answer": "Poor sperm motility"
  },
  {
    "question": "Which of the following is NOT a part of semen analysis?",
    "options": [
      "Sperm count",
      "Motility",
      "Testosterone level",
      "Morphology"
    ],
    "answer": "Testosterone level"
  },
  {
    "question": "Which vitamin is considered an antioxidant beneficial for sperm health?",
    "options": [
      "Vitamin A",
      "Vitamin C",
      "Vitamin K",
      "Vitamin B1"
    ],
    "answer": "Vitamin C"
  },
  {
    "question": "What is the role of Coenzyme Q10 in male fertility?",
    "options": [
      "Boosts testosterone only",
      "Improves sperm DNA",
      "Enhances sperm motility",
      "Prevents infection"
    ],
    "answer": "Enhances sperm motility"
  },
  {
    "question": "What is the ideal abstinence period before semen collection?",
    "options": [
      "1–2 days",
      "2–7 days",
      "10 days",
      "24 hours"
    ],
    "answer": "2–7 days"
  },
  {
    "question": "Which test helps identify chromosomal defects in azoospermia?",
    "options": [
      "Ultrasound",
      "Karyotyping",
      "HSG",
      "Doppler scan"
    ],
    "answer": "Karyotyping"
  },
  {
    "question": "What lifestyle factor has a proven negative impact on sperm quality?",
    "options": [
      "Moderate caffeine",
      "Balanced diet",
      "Smoking",
      "Meditation"
    ],
    "answer": "Smoking"
  },
  {
    "question": "Which surgical procedure is done for varicocele correction?",
    "options": [
      "Vasectomy",
      "Varicocelectomy",
      "TESE",
      "Cystoscopy"
    ],
    "answer": "Varicocelectomy"
  },
  {
    "question": "Which ART technique involves injecting a sperm into an egg?",
    "options": [
      "IUI",
      "IVF",
      "ICSI",
      "HSG"
    ],
    "answer": "ICSI"
  },
  {
    "question": "What is retrograde ejaculation?",
    "options": [
      "Sperm going into vas deferens",
      "Sperm not formed",
      "Semen flows backward into the bladder",
      "Low sperm count"
    ],
    "answer": "Semen flows backward into the bladder"
  },
  {
    "question": "Which herbal supplement is commonly used in Ayurveda to support male fertility?",
    "options": [
      "Tulsi",
      "Neem",
      "Ashwagandha",
      "Brahmi"
    ],
    "answer": "Ashwagandha"
  },
  {
    "question": "What does necrozoospermia indicate?",
    "options": [
      "All sperm are immobile",
      "All sperm are dead",
      "No sperm",
      "High volume of semen"
    ],
    "answer": "All sperm are dead"
  },
  {
    "question": "Testosterone therapy is contraindicated in men trying to conceive because:",
    "options": [
      "It increases sperm count",
      "It enhances libido",
      "It suppresses sperm production",
      "It improves erections"
    ],
    "answer": "It suppresses sperm production"
  },
  {
    "question": "Micro-TESE is most useful in:",
    "options": [
      "Oligospermia",
      "Erectile dysfunction",
      "Obstructive azoospermia",
      "Non-obstructive azoospermia"
    ],
    "answer": "Non-obstructive azoospermia"
  },
  {
    "question": "Which mineral is essential for sperm production?",
    "options": [
      "Iron",
      "Zinc",
      "Copper",
      "Potassium"
    ],
    "answer": "Zinc"
  },
  {
    "question": "Klinefelter syndrome is associated with:",
    "options": [
      "Overproduction of testosterone",
      "Chromosomal abnormality (XXY)",
      "Normal sperm production",
      "High sperm motility"
    ],
    "answer": "Chromosomal abnormality (XXY)"
  },
  {
    "question": "DNA fragmentation in sperm leads to:",
    "options": [
      "Increased motility",
      "Improved fertilization",
      "Poor embryo development",
      "Faster conception"
    ],
    "answer": "Poor embryo development"
  },
  {
    "question": "A semen sample should be examined within how many minutes of collection?",
    "options": [
      "10 minutes",
      "30–60 minutes",
      "2 hours",
      "Immediately"
    ],
    "answer": "30–60 minutes"
  },
  {
    "question": "One of the most common infections affecting male fertility is:",
    "options": [
      "Malaria",
      "Hepatitis",
      "Chlamydia",
      "Typhoid"
    ],
    "answer": "Chlamydia"
  },
  {
    "question": "PESA is a technique to:",
    "options": [
      "Extract testicular tissue",
      "Remove varicocele",
      "Aspirate sperm from epididymis",
      "Enhance ejaculation"
    ],
    "answer": "Aspirate sperm from epididymis"
  },
  {
    "question": "Which of the following is FALSE about male infertility?",
    "options": [
      "It contributes to about 50% of infertility cases",
      "Most cases are untreatable",
      "Sperm quality declines with age",
      "ART can help overcome severe sperm issues"
    ],
    "answer": "Most cases are untreatable"
  }
];

const articlePages = [
  {
    title: "💙 What is Male Infertility?",
    content: (
      <>
            <p>
                Male infertility is the inability to cause pregnancy in a fertile female partner and contributes to 40–50% of infertility cases globally. It can be due to hormonal, genetic, physical, or environmental causes.
              </p>
            <p>
                Though often overlooked, male infertility is common and treatable. With the right evaluation and support, many men can father children successfully.
              </p>
            <h3 className="mi-reader-section-subhead">📚 Key Definitions in Male Fertility</h3>
            <ul><li><strong>Oligospermia:</strong> Low sperm count (&lt;15 million/mL)</li><li><strong>Azoospermia:</strong> No sperm in semen</li><li><strong>Asthenozoospermia:</strong> Poor sperm motility</li><li><strong>Teratozoospermia:</strong> Abnormally shaped sperm</li><li><strong>Necrozoospermia:</strong> All sperm are non-viable or dead</li><li><strong>Hypospermia:</strong> Low semen volume (&lt;1.5 mL)</li></ul>
            <h3 className="mi-reader-section-subhead">🔬 Anatomy and Physiology of Male Reproduction</h3>
            <p>
                Key organs include the testes, epididymis, vas deferens, seminal vesicles, prostate, and penis. Sperm production (spermatogenesis) takes ~64–72 days and is easily affected by stress, toxins, or hormones.
              </p>
      </>
    ),
  },
  {
    title: "⚠️ Causes of Male Infertility",
    content: (
      <>
            <ul><li><strong>Hormonal:</strong> Hypogonadism, pituitary dysfunction, high prolactin</li><li><strong>Structural:</strong> Varicocele, vas deferens blockage, CBAVD</li><li><strong>Infections:</strong> STIs, mumps orchitis, prostatitis</li><li><strong>Ejaculation disorders:</strong> Retrograde ejaculation, ED, premature ejaculation</li><li><strong>Genetic:</strong> Klinefelter’s, Y-chromosome deletions, CF mutations</li></ul>
            <h3 className="mi-reader-section-subhead">🌍 Environmental &amp; Lifestyle Factors</h3>
            <ul><li>Exposure to pesticides, heavy metals, solvents</li><li>Smoking, alcohol, drug abuse</li><li>Obesity, sedentary habits, sleep deprivation</li><li>Heat (laptops on lap, saunas, tight clothing)</li><li>Medications (anabolic steroids, chemo, SSRIs)</li></ul>
            <h3 className="mi-reader-section-subhead">🩺 Symptoms of Male Infertility</h3>
            <ul><li>Low libido or erectile dysfunction</li><li>Swelling or pain in testicles</li><li>Gynecomastia or low facial/body hair</li><li>Small or firm testicles</li></ul>
      </>
    ),
  },
  {
    title: "🩺 Symptoms of Male Infertility (continued)",
    content: (
      <>
            <p>If unable to conceive in 12 months (&lt;35) or 6 months (&gt;35), evaluation is recommended.</p>
            <h3 className="mi-reader-section-subhead">📈 Diagnostic Tests</h3>
            <ul><li><strong>Semen Analysis:</strong> Sperm count, motility, morphology, volume</li><li><strong>Hormonal tests:</strong> FSH, LH, Testosterone, Prolactin</li><li><strong>Scrotal Ultrasound:</strong> For varicocele, testis health</li><li><strong>Genetic Tests:</strong> For azoospermia or family history</li><li><strong>DNA Fragmentation:</strong> Sperm genetic quality</li></ul>
            <h3 className="mi-reader-section-subhead">🥗 Lifestyle &amp; Nutritional Interventions</h3>
            <ul><li>Zinc-rich foods (pumpkin seeds, shellfish)</li><li>Antioxidants: Vitamin C, E, selenium, CoQ10</li><li>Omega-3s and L-carnitine</li><li>Stop smoking, limit alcohol</li><li>Regular moderate exercise, stress reduction</li></ul>
            <h3 className="mi-reader-section-subhead">💊 Medical Treatments</h3>
            <ul><li>Clomiphene Citrate: Boosts sperm production</li><li>hCG and FSH Injections: Stimulate testes</li><li>Antibiotics for infections</li></ul>
      </>
    ),
  },
  {
    title: "💊 Medical Treatments (continued)",
    content: (
      <>
            <ul><li><strong>Note:</strong> Testosterone therapy is not used if fertility is the goal</li></ul>
            <h3 className="mi-reader-section-subhead">🔧 Surgical Treatments</h3>
            <ul><li>Varicocelectomy: Varicocele correction</li><li>Vasovasostomy: Reversal of vasectomy</li><li>Sperm Retrieval:
                  <ul>
            <li>TESA: Testicular Sperm Aspiration</li>
            <li>PESA: Epididymal Sperm Aspiration</li>
            <li>Micro-TESE: For non-obstructive azoospermia</li>
            </ul>
            </li></ul>
            <h3 className="mi-reader-section-subhead">🧪 ART (Assisted Reproductive Technology)</h3>
            <ul><li>IUI: For mild male factor</li><li>IVF + ICSI: Direct sperm injection into egg</li><li>Donor sperm if no viable sperm</li><li>Embryo freezing for future cycles</li></ul>
            <h3 className="mi-reader-section-subhead">🧠 Psychological Impact</h3>
            <p>Infertility can affect mental health, relationships, and self-worth.</p>
            <ul><li>Guilt, frustration, anxiety, or low self-esteem</li></ul>
      </>
    ),
  },
  {
    title: "🧠 Psychological Impact (continued)",
    content: (
      <>
            <ul><li>Sexual performance pressure</li><li>Stigma from society or family</li></ul>
            <p>At Sukam, we provide counseling, peer support, and safe spaces to talk.</p>
            <h3 className="mi-reader-section-subhead">🌿 Complementary Therapies</h3>
            <ul><li>Ayurveda: Ashwagandha, Shilajit, Gokshura</li><li>Acupuncture: May improve sperm parameters</li><li>Yoga and meditation for hormonal balance</li><li>Always use alongside medical care</li></ul>
            <h3 className="mi-reader-section-subhead">📖 Real Patient Stories</h3>
            <ul><li><strong>Rakesh (32):</strong> Varicocele surgery &amp; IUI success</li><li><strong>Amit (29):</strong> Hypogonadism treated with hCG+FSH, conceived naturally</li><li><strong>Mohammed (35):</strong> Azoospermia; Micro-TESE + ICSI → twins born</li></ul>
      </>
    ),
  },
  {
    title: "🤝 Sukam’s Male Fertility Program",
    content: (
      <>
            <ul><li>Advanced Semen Analysis &amp; DNA testing</li><li>Onsite hormonal &amp; genetic labs</li><li>Hormone-based &amp; nutritional therapy</li><li>Microsurgeries &amp; sperm retrieval</li><li>Ayurveda + ART combined care</li><li>ICSI success for even severe cases</li><li>Confidential counseling &amp; emotional support</li></ul>
            <h3 className="mi-reader-section-subhead">✨ Final Words – Reclaim Your Fertility</h3>
            <p>
                Male infertility is common — and treatable. With the right diagnosis, modern treatment, and whole-person care,
                fatherhood is absolutely possible.
              </p>
            <p><strong>At Sukam, we walk with you — with clarity, care, and compassion.</strong></p>
      </>
    ),
  },
];

const guideTopics = [
  "💙 What is Male Infertility?",
  "🔬 Anatomy and Physiology of Male Reproduction",
  "🌍 Environmental & Lifestyle Factors",
  "📈 Diagnostic Tests",
  "🔧 Surgical Treatments",
  "🧠 Psychological Impact",
  "📖 Real Patient Stories",
  "✨ Final Words – Reclaim Your Fertility"
];

const bookPages = [
  {"kind": "article", "title": "💙 What is Male Infertility?", "articleIndex": 0},
  {"kind": "article", "title": "⚠️ Causes of Male Infertility", "articleIndex": 1},
  {"kind": "article", "title": "🩺 Symptoms of Male Infertility (continued)", "articleIndex": 2},
  {"kind": "article", "title": "💊 Medical Treatments (continued)", "articleIndex": 3},
  {"kind": "article", "title": "🧠 Psychological Impact (continued)", "articleIndex": 4},
  {"kind": "article", "title": "🤝 Sukam’s Male Fertility Program", "articleIndex": 5},
  {"kind": "quiz", "title": "Fertility awareness quiz · Q1–4", "start": 0, "end": 4},
  {"kind": "quiz", "title": "Fertility awareness quiz · Q5–8", "start": 4, "end": 8},
  {"kind": "quiz", "title": "Fertility awareness quiz · Q9–12", "start": 8, "end": 12},
  {"kind": "quiz", "title": "Fertility awareness quiz · Q13–15", "start": 12, "end": 15},
  {"kind": "quiz", "title": "Fertility awareness quiz · Q16–19", "start": 15, "end": 19},
  {"kind": "quiz", "title": "Fertility awareness quiz · Q20–22", "start": 19, "end": 22},
  {"kind": "quiz", "title": "Fertility awareness quiz · Q23–25", "start": 22, "end": 25},
  {"kind": "results", "title": "Quiz results & answer review", "start": 0, "end": 4},
  {"kind": "breakdown", "title": "Answer review · Q5–9", "start": 4, "end": 9},
  {"kind": "breakdown", "title": "Answer review · Q10–14", "start": 9, "end": 14},
  {"kind": "breakdown", "title": "Answer review · Q15–20", "start": 14, "end": 20},
  {"kind": "breakdown", "title": "Answer review · Q21–25", "start": 20, "end": 25},
  {"kind": "closing", "title": "Take the next step with Sukam Clinic"},
  {"kind": "end", "title": "End"},
];

const chapters = [
  {
    "label": "What is Male Infertility?",
    "leftTitle": "💙 What is Male Infertility?",
    "rightTitle": "⚠️ Causes of Male Infertility"
  },
  {
    "label": "Symptoms of Male Infertility",
    "leftTitle": "🩺 Symptoms of Male Infertility (continued)",
    "rightTitle": "💊 Medical Treatments (continued)"
  },
  {
    "label": "Psychological Impact",
    "leftTitle": "🧠 Psychological Impact (continued)",
    "rightTitle": "🤝 Sukam’s Male Fertility Program"
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
    "label": "Quiz · 16–22",
    "leftTitle": "Fertility awareness quiz · Q16–19",
    "rightTitle": "Fertility awareness quiz · Q20–22"
  },
  {
    "label": "Quiz · 23–4",
    "leftTitle": "Fertility awareness quiz · Q23–25",
    "rightTitle": "Quiz results & answer review"
  },
  {
    "label": "Review Q5–14",
    "leftTitle": "Answer review · Q5–9",
    "rightTitle": "Answer review · Q10–14"
  },
  {
    "label": "Review Q15–25",
    "leftTitle": "Answer review · Q15–20",
    "rightTitle": "Answer review · Q21–25"
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
    <fieldset className="mi-reader-quick-check">
      <legend className="mi-reader-quick-check-title">
        <span aria-hidden="true">✦</span> Question {index + 1} of {quizData.length}
      </legend>
      <p>{item.question}</p>
      <div className="mi-reader-radio-list">
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
                "mi-reader-radio-option",
                selected ? "is-selected" : "",
                correct ? "is-correct" : "",
                incorrect ? "is-incorrect" : "",
              ].filter(Boolean).join(" ")}
              onClick={() => onSelect(index, option)}
            >
              <span className="mi-reader-radio-dot" aria-hidden="true" />
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
      className={`mi-reader-page-turn-sheet mi-reader-page-turn-sheet--${meta.direction}`}
      aria-hidden="true"
    >
      <div className="mi-reader-turn-face mi-reader-turn-face--front">
        <div className="mi-reader-turn-page-number">
          {String(meta.frontPage).padStart(2, "0")}
        </div>
        <h3>{meta.frontTitle}</h3>
        <div className="mi-reader-turn-lines"><span /><span /><span /><span /><span /></div>
        <div className="mi-reader-turn-curl" />
      </div>
      <div className="mi-reader-turn-face mi-reader-turn-face--back">
        <div className="mi-reader-turn-page-number">
          {String(meta.backPage).padStart(2, "0")}
        </div>
        <h3>{meta.backTitle}</h3>
        <div className="mi-reader-turn-lines"><span /><span /><span /><span /><span /></div>
      </div>
    </div>
  );
};

const BookPage = ({ number, side, title, isEnd, onTurnPage, children }) => (
  <article className={`mi-reader-book-page mi-reader-book-page--${side} ${isEnd ? "mi-reader-book-page--end" : ""}`.trim()}>
    <div className="mi-reader-paper-grain" aria-hidden="true" />
    <div className="mi-reader-page-number">
      <span>{String(number).padStart(2, "0")}</span>
    </div>
    <div className="mi-reader-page-content">
      {!isEnd && <h2>{title}</h2>}
      {children}
    </div>
    {side === "right" && onTurnPage && (
      <button type="button" className="mi-reader-turn-page" onClick={onTurnPage}>
        Turn page <span aria-hidden="true">↗</span>
      </button>
    )}
  </article>
);

const ScoreDetails = ({ start, end, showResults, selectedAnswers }) => {
  if (!showResults) {
    return (
      <div className="mi-reader-info-note">
        <span className="mi-reader-info-icon" aria-hidden="true">i</span>
        <p>Answer all {quizData.length} quiz questions and select See Results to unlock the detailed breakdown.</p>
      </div>
    );
  }
  return (
    <div className="mi-reader-score-details">
      {quizData.slice(start, end).map((q, idx) => {
        const n = start + idx;
        const correct = selectedAnswers[n] === q.answer;
        return (
          <div key={n} className="mi-reader-score-detail">
            <div className="mi-reader-score-detail-heading">
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

const MaleInfertility = () => {
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
    changeChapter(3);
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
          <div className="mi-reader-quiz-intro">
            <p>Answer each question. Completed: {answeredCount} of {totalQuestions}.</p>
            <div className="mi-reader-quiz-track" role="progressbar" aria-label="Quiz progress"
              aria-valuemin="0" aria-valuemax={totalQuestions} aria-valuenow={answeredCount}>
              <div className="mi-reader-quiz-fill" style={{ width: `${quizProgress}%` }} />
            </div>
          </div>
          {quizData.slice(page.start, page.end).map((item, k) => (
            <QuizQuestion key={page.start + k} index={page.start + k} selectedAnswers={selectedAnswers}
              showResults={showResults} onSelect={handleAnswerSelect} />
          ))}
        </>;
        case "results": return <>
          <p className="mi-reader-lead-copy">Complete the questionnaire to see your fertility awareness score.</p>
          {!showResults && (
            <button className="mi-reader-result-button" type="button"
              disabled={answeredCount !== totalQuestions} onClick={() => setShowResults(true)}>
              See Results ({answeredCount}/{totalQuestions})
            </button>
          )}
          {showResults && (
            <div className="mi-reader-result-card" aria-live="polite">
              <strong>{results.percentage}%</strong>
              <div>
                <h3>Your score</h3>
                <p>{results.correct} correct · {results.wrong} incorrect</p>
                <button type="button" onClick={handleTryAgain}>Try Again</button>
              </div>
            </div>
          )}
          <h3 className="mi-reader-results-review-title">Detailed score breakdown</h3>
          <ScoreDetails start={page.start} end={page.end}
            showResults={showResults} selectedAnswers={selectedAnswers} />
        </>;
        case "breakdown": return <ScoreDetails start={page.start} end={page.end}
          showResults={showResults} selectedAnswers={selectedAnswers} />;
        case "review": return <>
          <p>Review the original questions and answers, and note anything you would like to discuss with your fertility specialist.</p>
          <div className="mi-reader-quote-card"><span aria-hidden="true">“</span>
            <p>Understanding your options can help you make informed decisions.</p>
          </div>
        </>;
        case "closing": return <>
          <p>Every fertility journey is personal. Discuss your questions and test results with a qualified fertility specialist to find a suitable next step.</p>
          <h3 className="mi-reader-section-subhead">Topics covered in this guide</h3>
          <ul className="mi-reader-consult-summary">
            {guideTopics.map((topic) => <li key={topic}>{topic}</li>)}
          </ul>
          <p>Use these topics to make a note of what you would like to ask at your consultation.</p>
          <div className="mi-reader-contact-card">
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
        case "end": return <div className="mi-reader-end-page">
          <div className="mi-reader-end-heart" aria-hidden="true">♡</div>
          <span>Male Infertility</span>
          <h2>End</h2>
          <p>Thank you for reading this fertility patient guide.</p>
          <div className="mi-reader-end-rule" />
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
    <main className="mi-reader" style={{ "--reader-scale": fontScale }}>
      <header className="mi-reader-header">
        <div className="mi-reader-header-mark" aria-hidden="true">♡</div>
        <div className="mi-reader-header-copy">
          <h1>Male Infertility</h1>
          <p>“Half the equation, equally important.”</p>
        </div>
        <div className="mi-reader-header-decoration" aria-hidden="true" />
      </header>
      <div className="mi-reader-layout">
        <aside className="mi-reader-contents">
          <h2>CONTENTS</h2>
          <nav aria-label="Male Infertility book chapters">
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
          <div className="mi-reader-contents-footer">
            <span aria-hidden="true">♡</span>
            <p>Better information.<br />Brighter tomorrows.</p>
          </div>
        </aside>
        <section className="mi-reader-book-stage" ref={bookStageRef}>
          <div className="mi-reader-tools">
            <button className="mi-reader-tool-button" type="button" onClick={handleFontSize}
              disabled={isTurning} aria-label="Change font size" title="Change font size">
              <span>Aa</span><small>⌄</small>
            </button>
            <button className={`mi-reader-tool-button ${isSpeaking ? "is-active" : ""}`.trim()}
              type="button" onClick={handleListen} disabled={isTurning}
              aria-label={isSpeaking ? "Stop listening" : "Listen to chapter"}>
              <span aria-hidden="true">◉</span>
              <strong>{isSpeaking ? "Stop" : "Listen"}</strong>
            </button>
          </div>
          <div className={`mi-reader-book-spread ${isTurning ? "is-turning" : ""}`.trim()}
            ref={bookSpreadRef}>
            {renderPage(leftDescriptor, "left", currentChapter * 2 + 1)}
            {renderPage(rightDescriptor, "right", currentChapter * 2 + 2, next)}
            <PageTurnSheet meta={turnMeta} />
          </div>
          <div className="mi-reader-navigation">
            <button type="button" className="mi-reader-nav-button mi-reader-nav-button--previous"
              onClick={() => changeChapter(currentChapter - 1)}
              disabled={currentChapter === 0 || isTurning}>
              <span aria-hidden="true">←</span> Previous
            </button>
            <div className="mi-reader-progress">
              <strong>Chapter {currentChapter + 1} of {chapters.length}</strong>
              <div className="mi-reader-progress-row">
                <div className="mi-reader-progress-track">
                  <div className="mi-reader-progress-fill" style={{ width: `${chapterProgress}%` }} />
                </div>
                <span>{Math.round(chapterProgress)}%</span>
              </div>
            </div>
            <button type="button" className="mi-reader-nav-button mi-reader-nav-button--next"
              onClick={() => changeChapter(currentChapter + 1)}
              disabled={currentChapter === chapters.length - 1 || isTurning}>
              Next page <span aria-hidden="true">→</span>
            </button>
          </div>
          <p className="mi-reader-keyboard-hint">Tip: use the left and right arrow keys to turn pages.</p>
        </section>
      </div>
    </main>
  );
};

export default MaleInfertility;
