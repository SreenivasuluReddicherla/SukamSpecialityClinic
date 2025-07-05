import React, { useState } from 'react';
import './RP1InfertilityInsights.css';

const quizData = [
  {
    question: "What is the normal sperm concentration as per WHO?",
    options: [">10 million/mL", ">15 million/mL", ">20 million/mL", ">5 million/mL"],
    answer: ">15 million/mL"
  },
  {
    question: "Which condition is defined as complete absence of sperm in the ejaculate?",
    options: ["Oligospermia", "Asthenospermia", "Azoospermia", "Teratospermia"],
    answer: "Azoospermia"
  },
  {
    question: "Which hormone stimulates sperm production in men?",
    options: ["LH", "FSH", "Prolactin", "Estrogen"],
    answer: "FSH"
  },
  {
    question: "Which is a common structural cause of male infertility?",
    options: ["Varicocele", "Fibroids", "PCOS", "Retroverted uterus"],
    answer: "Varicocele"
  },
  {
    question: "What does asthenozoospermia refer to?",
    options: ["Low sperm count", "Poor sperm motility", "Abnormal sperm shape", "High semen volume"],
    answer: "Poor sperm motility"
  },
  {
    question: "Which of the following is NOT a part of semen analysis?",
    options: ["Sperm count", "Motility", "Testosterone level", "Morphology"],
    answer: "Testosterone level"
  },
  {
    question: "Which vitamin is considered an antioxidant beneficial for sperm health?",
    options: ["Vitamin A", "Vitamin C", "Vitamin K", "Vitamin B1"],
    answer: "Vitamin C"
  },
  {
    question: "What is the role of Coenzyme Q10 in male fertility?",
    options: ["Boosts testosterone only", "Improves sperm DNA", "Enhances sperm motility", "Prevents infection"],
    answer: "Enhances sperm motility"
  },
  {
    question: "What is the ideal abstinence period before semen collection?",
    options: ["1–2 days", "2–7 days", "10 days", "24 hours"],
    answer: "2–7 days"
  },
  {
    question: "Which test helps identify chromosomal defects in azoospermia?",
    options: ["Ultrasound", "Karyotyping", "HSG", "Doppler scan"],
    answer: "Karyotyping"
  },
  {
    question: "What lifestyle factor has a proven negative impact on sperm quality?",
    options: ["Moderate caffeine", "Balanced diet", "Smoking", "Meditation"],
    answer: "Smoking"
  },
  {
    question: "Which surgical procedure is done for varicocele correction?",
    options: ["Vasectomy", "Varicocelectomy", "TESE", "Cystoscopy"],
    answer: "Varicocelectomy"
  },
  {
    question: "Which ART technique involves injecting a sperm into an egg?",
    options: ["IUI", "IVF", "ICSI", "HSG"],
    answer: "ICSI"
  },
  {
    question: "What is retrograde ejaculation?",
    options: ["Sperm going into vas deferens", "Sperm not formed", "Semen flows backward into the bladder", "Low sperm count"],
    answer: "Semen flows backward into the bladder"
  },
  {
    question: "Which herbal supplement is commonly used in Ayurveda to support male fertility?",
    options: ["Tulsi", "Neem", "Ashwagandha", "Brahmi"],
    answer: "Ashwagandha"
  },
  {
    question: "What does necrozoospermia indicate?",
    options: ["All sperm are immobile", "All sperm are dead", "No sperm", "High volume of semen"],
    answer: "All sperm are dead"
  },
  {
    question: "Testosterone therapy is contraindicated in men trying to conceive because:",
    options: ["It increases sperm count", "It enhances libido", "It suppresses sperm production", "It improves erections"],
    answer: "It suppresses sperm production"
  },
  {
    question: "Micro-TESE is most useful in:",
    options: ["Oligospermia", "Erectile dysfunction", "Obstructive azoospermia", "Non-obstructive azoospermia"],
    answer: "Non-obstructive azoospermia"
  },
  {
    question: "Which mineral is essential for sperm production?",
    options: ["Iron", "Zinc", "Copper", "Potassium"],
    answer: "Zinc"
  },
  {
    question: "Klinefelter syndrome is associated with:",
    options: ["Overproduction of testosterone", "Chromosomal abnormality (XXY)", "Normal sperm production", "High sperm motility"],
    answer: "Chromosomal abnormality (XXY)"
  },
  {
    question: "DNA fragmentation in sperm leads to:",
    options: ["Increased motility", "Improved fertilization", "Poor embryo development", "Faster conception"],
    answer: "Poor embryo development"
  },
  {
    question: "A semen sample should be examined within how many minutes of collection?",
    options: ["10 minutes", "30–60 minutes", "2 hours", "Immediately"],
    answer: "30–60 minutes"
  },
  {
    question: "One of the most common infections affecting male fertility is:",
    options: ["Malaria", "Hepatitis", "Chlamydia", "Typhoid"],
    answer: "Chlamydia"
  },
  {
    question: "PESA is a technique to:",
    options: ["Extract testicular tissue", "Remove varicocele", "Aspirate sperm from epididymis", "Enhance ejaculation"],
    answer: "Aspirate sperm from epididymis"
  },
  {
    question: "Which of the following is FALSE about male infertility?",
    options: ["It contributes to about 50% of infertility cases", "Most cases are untreatable", "Sperm quality declines with age", "ART can help overcome severe sperm issues"],
    answer: "Most cases are untreatable"
  }
];


const MaleInfertility = () => {
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
      <h1>👨‍⚕️ Male Infertility</h1>
      <p className="lead">“Half the equation, equally important.”</p>

      <section className="info-section">
  <h3>💙 What is Male Infertility?</h3>
  <p>
    Male infertility is the inability to cause pregnancy in a fertile female partner and contributes to 40–50% of infertility cases globally. It can be due to hormonal, genetic, physical, or environmental causes.
  </p>
  <p>
    Though often overlooked, male infertility is common and treatable. With the right evaluation and support, many men can father children successfully.
  </p>

  <h3>📚 Key Definitions in Male Fertility</h3>
  <ul>
    <li><strong>Oligospermia:</strong> Low sperm count (&lt;15 million/mL)</li>
    <li><strong>Azoospermia:</strong> No sperm in semen</li>
    <li><strong>Asthenozoospermia:</strong> Poor sperm motility</li>
    <li><strong>Teratozoospermia:</strong> Abnormally shaped sperm</li>
    <li><strong>Necrozoospermia:</strong> All sperm are non-viable or dead</li>
    <li><strong>Hypospermia:</strong> Low semen volume (&lt;1.5 mL)</li>
  </ul>

  <h3>🔬 Anatomy and Physiology of Male Reproduction</h3>
  <p>
    Key organs include the testes, epididymis, vas deferens, seminal vesicles, prostate, and penis. Sperm production (spermatogenesis) takes ~64–72 days and is easily affected by stress, toxins, or hormones.
  </p>

  <h3>⚠️ Causes of Male Infertility</h3>
  <ul>
    <li><strong>Hormonal:</strong> Hypogonadism, pituitary dysfunction, high prolactin</li>
    <li><strong>Structural:</strong> Varicocele, vas deferens blockage, CBAVD</li>
    <li><strong>Infections:</strong> STIs, mumps orchitis, prostatitis</li>
    <li><strong>Ejaculation disorders:</strong> Retrograde ejaculation, ED, premature ejaculation</li>
    <li><strong>Genetic:</strong> Klinefelter’s, Y-chromosome deletions, CF mutations</li>
  </ul>

  <h3>🌍 Environmental & Lifestyle Factors</h3>
  <ul>
    <li>Exposure to pesticides, heavy metals, solvents</li>
    <li>Smoking, alcohol, drug abuse</li>
    <li>Obesity, sedentary habits, sleep deprivation</li>
    <li>Heat (laptops on lap, saunas, tight clothing)</li>
    <li>Medications (anabolic steroids, chemo, SSRIs)</li>
  </ul>

  <h3>🩺 Symptoms of Male Infertility</h3>
  <ul>
    <li>Low libido or erectile dysfunction</li>
    <li>Swelling or pain in testicles</li>
    <li>Gynecomastia or low facial/body hair</li>
    <li>Small or firm testicles</li>
  </ul>
  <p>If unable to conceive in 12 months (&lt;35) or 6 months (&gt;35), evaluation is recommended.</p>

  <h3>📈 Diagnostic Tests</h3>
  <ul>
    <li><strong>Semen Analysis:</strong> Sperm count, motility, morphology, volume</li>
    <li><strong>Hormonal tests:</strong> FSH, LH, Testosterone, Prolactin</li>
    <li><strong>Scrotal Ultrasound:</strong> For varicocele, testis health</li>
    <li><strong>Genetic Tests:</strong> For azoospermia or family history</li>
    <li><strong>DNA Fragmentation:</strong> Sperm genetic quality</li>
  </ul>

  <h3>🥗 Lifestyle & Nutritional Interventions</h3>
  <ul>
    <li>Zinc-rich foods (pumpkin seeds, shellfish)</li>
    <li>Antioxidants: Vitamin C, E, selenium, CoQ10</li>
    <li>Omega-3s and L-carnitine</li>
    <li>Stop smoking, limit alcohol</li>
    <li>Regular moderate exercise, stress reduction</li>
  </ul>

  <h3>💊 Medical Treatments</h3>
  <ul>
    <li>Clomiphene Citrate: Boosts sperm production</li>
    <li>hCG and FSH Injections: Stimulate testes</li>
    <li>Antibiotics for infections</li>
    <li><strong>Note:</strong> Testosterone therapy is not used if fertility is the goal</li>
  </ul>

  <h3>🔧 Surgical Treatments</h3>
  <ul>
    <li>Varicocelectomy: Varicocele correction</li>
    <li>Vasovasostomy: Reversal of vasectomy</li>
    <li>Sperm Retrieval:
      <ul>
        <li>TESA: Testicular Sperm Aspiration</li>
        <li>PESA: Epididymal Sperm Aspiration</li>
        <li>Micro-TESE: For non-obstructive azoospermia</li>
      </ul>
    </li>
  </ul>

  <h3>🧪 ART (Assisted Reproductive Technology)</h3>
  <ul>
    <li>IUI: For mild male factor</li>
    <li>IVF + ICSI: Direct sperm injection into egg</li>
    <li>Donor sperm if no viable sperm</li>
    <li>Embryo freezing for future cycles</li>
  </ul>

  <h3>🧠 Psychological Impact</h3>
  <p>Infertility can affect mental health, relationships, and self-worth.</p>
  <ul>
    <li>Guilt, frustration, anxiety, or low self-esteem</li>
    <li>Sexual performance pressure</li>
    <li>Stigma from society or family</li>
  </ul>
  <p>At Sukam, we provide counseling, peer support, and safe spaces to talk.</p>

  <h3>🌿 Complementary Therapies</h3>
  <ul>
    <li>Ayurveda: Ashwagandha, Shilajit, Gokshura</li>
    <li>Acupuncture: May improve sperm parameters</li>
    <li>Yoga and meditation for hormonal balance</li>
    <li>Always use alongside medical care</li>
  </ul>

  <h3>📖 Real Patient Stories</h3>
  <ul>
    <li><strong>Rakesh (32):</strong> Varicocele surgery & IUI success</li>
    <li><strong>Amit (29):</strong> Hypogonadism treated with hCG+FSH, conceived naturally</li>
    <li><strong>Mohammed (35):</strong> Azoospermia; Micro-TESE + ICSI → twins born</li>
  </ul>

  <h3>🤝 Sukam’s Male Fertility Program</h3>
  <ul>
    <li>Advanced Semen Analysis & DNA testing</li>
    <li>Onsite hormonal & genetic labs</li>
    <li>Hormone-based & nutritional therapy</li>
    <li>Microsurgeries & sperm retrieval</li>
    <li>Ayurveda + ART combined care</li>
    <li>ICSI success for even severe cases</li>
    <li>Confidential counseling & emotional support</li>
  </ul>

  <h3>✨ Final Words – Reclaim Your Fertility</h3>
  <p>
    Male infertility is common — and treatable. With the right diagnosis, modern treatment, and whole-person care,
    fatherhood is absolutely possible.
  </p>
  <p><strong>At Sukam, we walk with you — with clarity, care, and compassion.</strong></p>
</section>


      <section className="quiz-section">
        <h2>🧠 Male Infertility Quiz — Test Your Fertility Know-How!</h2>

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

export default MaleInfertility;
