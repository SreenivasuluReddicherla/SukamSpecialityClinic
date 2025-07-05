import React, { useState } from 'react';
import './RP1InfertilityInsights.css';

const quizData = [
  {
    question: "What is the ideal age range for egg freezing?",
    options: ["18–22", "25–35", "40–50", "Any age"],
    answer: "25–35"
  },
  {
    question: "How are eggs retrieved from the ovaries?",
    options: [
      "Through a major abdominal surgery",
      "By inserting a needle via ultrasound guidance",
      "Through natural ovulation",
      "Via urine sample"
    ],
    answer: "By inserting a needle via ultrasound guidance"
  },
  {
    question: "What is vitrification?",
    options: [
      "A form of egg fertilization",
      "A slow freezing method",
      "A rapid freezing process used to preserve eggs",
      "A type of hormone injection"
    ],
    answer: "A rapid freezing process used to preserve eggs"
  },
  {
    question: "How long can frozen eggs be stored?",
    options: ["6 months", "1 year", "10+ years", "Only 2 cycles"],
    answer: "10+ years"
  },
  {
    question: "Which factor most affects success after egg freezing?",
    options: [
      "The gender of the partner",
      "Age at the time of freezing",
      "Time of the month",
      "Exercise habits"
    ],
    answer: "Age at the time of freezing"
  },
  {
    question: "Can egg freezing be done if I’m not married or in a relationship?",
    options: ["No", "Only with legal permission", "Yes", "Only after 40"],
    answer: "Yes"
  },
  {
    question: "Does egg retrieval harm my ovaries?",
    options: [
      "Yes, permanently",
      "No, it only collects eggs developed in that month",
      "Causes infertility",
      "Damages the uterus"
    ],
    answer: "No, it only collects eggs developed in that month"
  },
  {
    question: "How many mature eggs are ideal to freeze for one child?",
    options: ["1–5", "10–20", "30–40", "Any number will do"],
    answer: "10–20"
  },
  {
    question: "Can lifestyle affect egg quality?",
    options: ["No", "Yes", "Only after age 40", "Not relevant for freezing"],
    answer: "Yes"
  },
  {
    question: "When will I use these eggs?",
    options: [
      "Next month",
      "Whenever I plan a pregnancy via IVF",
      "During my periods",
      "After menopause only"
    ],
    answer: "Whenever I plan a pregnancy via IVF"
  }
];


const EggFreezing = () => {
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
      <h1>❄️ Egg Freezing</h1>
      <p className="lead">“Pause your biological clock, not your dreams.”</p>

      <section className="info-section">
  <h3>💖 Introduction: Why Egg Freezing Matters Today</h3>
  <p>
    In today’s world, many women are choosing to focus on education, careers, travel, or simply want more time before starting a family.
    However, as age increases, the quality and quantity of a woman’s eggs naturally decline — reducing the chances of conceiving.
  </p>
  <p>
    Egg freezing, also known as <strong>oocyte cryopreservation</strong>, offers a solution: you can freeze your healthy eggs while you're young and use them later when you're ready for parenthood.
    It’s not just about delaying pregnancy; it’s about preserving the possibility of having biological children on your terms — medically, emotionally, and socially.
  </p>

  <h3>🧬 What is Egg Freezing?</h3>
  <p>
    Egg freezing is a process where a woman’s eggs are extracted, frozen, and stored for future use. 
    The frozen eggs can later be thawed, fertilized with sperm in a lab (IVF), and implanted into the uterus when the woman is ready to conceive.
  </p>
  <p>
    This method is safe, well-studied, and increasingly popular among women who wish to take charge of their fertility timeline.
  </p>

  <h3>🎯 Who Can Consider Egg Freezing?</h3>
  <ul>
    <li>You're under 35 and not planning children soon</li>
    <li>You're focusing on career, travel, or personal goals</li>
    <li>You're undergoing cancer treatment or other therapies that can affect fertility</li>
    <li>You have a family history of early menopause</li>
    <li>You’re not yet ready for a child but want to preserve your fertility options</li>
    <li>You're part of the LGBTQ+ community or in uncertain relationship situations</li>
  </ul>

  <h3>📝 The Step-by-Step Egg Freezing Process</h3>
  <h4>1. Initial Consultation</h4>
  <p>You’ll meet a fertility specialist who will review your health history and perform basic fertility assessments:</p>
  <ul>
    <li>Ultrasound scan (to check your ovaries and antral follicle count)</li>
    <li>AMH blood test (to assess your egg reserve)</li>
    <li>Hormone tests (FSH, LH, E2, TSH, prolactin, etc.)</li>
  </ul>

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
  <p>Eggs can be stored safely for up to 10 years or more, depending on local guidelines.</p>

  <h3>🌿 Sukam’s Holistic Approach to Egg Freezing</h3>
  <ul>
    <li><strong>🧘 Yoga & Mindfulness:</strong> Helps reduce stress, support hormonal balance, and promote calmness during stimulation.</li>
    <li><strong>🥗 Fertility Nutrition Plans:</strong> Personalized diet guidance to improve egg quality — rich in antioxidants, omega-3s, and iron.</li>
    <li><strong>🧠 Fertility Counseling:</strong> Our experts support you through every decision, helping you understand success rates, timelines, and emotional preparedness.</li>
    <li><strong>🤝 Peer Connect:</strong> Connect with women who’ve been through the same process — for shared stories and real reassurance.</li>
  </ul>

  <h3>✨ Real Story: “Freezing My Eggs Freed Me”</h3>
  <p><strong>Divya, 34, Marketing Executive:</strong></p>
  <blockquote>
    “I always wanted to be a mother, but not right now. When I turned 33, I started researching egg freezing.
    At first, I was scared it meant I was giving up on love or motherhood. But actually, it gave me freedom.
    I took the injections for 11 days, got 12 eggs frozen, and felt a huge sense of relief. I’m not racing the clock anymore.”
  </blockquote>

  <h3>✅ Quick Tips for Egg Freezing Success</h3>
  <ul>
    <li>Start the process sooner rather than later</li>
    <li>Avoid smoking and alcohol</li>
    <li>Maintain a healthy weight</li>
    <li>Eat foods rich in antioxidants (berries, spinach, almonds)</li>
    <li>Prioritize sleep and manage stress</li>
  </ul>

  <h3>📞 Take Your Next Step</h3>
  <p>
    If you're wondering whether egg freezing is right for you, come talk to us.
    There's no pressure — just a safe space to ask questions and get real answers.
  </p>
</section>


      <section className="quiz-section">
        <h2>🧠 Egg Freezing Quiz — How Much Do You Know?</h2>

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

export default EggFreezing;
