import React, { useState } from 'react';
import './RP1InfertilityInsights.css';

const quizData = [
  {
    question: "At what age does female fertility begin to decline?",
    options: ["25", "30", "35", "40"],
    answer: "35"
  },
  {
    question: "AMH is used to evaluate:",
    options: ["Tubal function", "Uterine lining", "Ovarian reserve", "Menstrual length"],
    answer: "Ovarian reserve"
  },
  {
    question: "A man’s sperm DNA quality can be tested with:",
    options: ["HSG", "AFC", "DFI", "AMH"],
    answer: "DFI"
  },
  {
    question: "Best age to consider egg freezing:",
    options: ["After 40", "Before 35", "After menopause", "Age doesn't matter"],
    answer: "Before 35"
  },
  {
    question: "Which is NOT a method of fertility preservation?",
    options: ["Embryo freezing", "Ovulation induction", "Sperm banking", "Oocyte freezing"],
    answer: "Ovulation induction"
  },
  {
    question: "PGT-A helps detect:",
    options: ["Tubal scarring", "Hormonal imbalance", "Chromosomal abnormalities", "Fibroids"],
    answer: "Chromosomal abnormalities"
  },
  {
    question: "Which lifestyle factor does NOT improve fertility?",
    options: ["Regular exercise", "Smoking", "Healthy weight", "Antioxidants"],
    answer: "Smoking"
  },
  {
    question: "What is the role of Letrozole in fertility?",
    options: ["Stimulates ovulation", "Improves sperm count", "Treats fibroids", "Freezes eggs"],
    answer: "Stimulates ovulation"
  },
  {
    question: "Which hormone indicates poor ovarian reserve if elevated?",
    options: ["FSH", "LH", "TSH", "Prolactin"],
    answer: "FSH"
  },
  {
    question: "Emotional wellness in fertility care includes:",
    options: ["Counseling", "Support groups", "Mindfulness", "All of the above"],
    answer: "All of the above"
  }
];

const DecliningFertility = () => {
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
      <h1>⏳ Declining Fertility</h1>
      <p className="lead">“When biology slows down, science steps in.”</p>

     <section className="info-section">
  <h3>💗 What is Declining Fertility?</h3>
  <p>
    Declining fertility refers to the natural, age-related reduction in reproductive potential. While fertility
    declines in both men and women over time, women experience a more rapid drop due to their finite egg supply.
  </p>
  <p>
    Fertility isn’t just about conceiving — age also impacts pregnancy outcomes. Delayed parenthood raises
    the chances of miscarriage, complications, and chromosomal issues in the baby.
  </p>
  <p>
    Understanding this biological process is essential for making timely, informed reproductive decisions.
  </p>

  <h3>⏳ Female Fertility and the Biological Clock</h3>
  <ul>
    <li><strong>Before 30:</strong> Fertility at peak, high egg quality</li>
    <li><strong>30–35:</strong> Gradual decline begins</li>
    <li><strong>35–38:</strong> Sharper drop, higher miscarriage risk</li>
    <li><strong>38–40:</strong> Significant reduction in natural conception</li>
    <li><strong>After 40:</strong> Low egg quality, IVF success rates also decline</li>
  </ul>
  <table>
    <thead>
      <tr>
        <th>Age</th>
        <th>Monthly Conception Chance</th>
        <th>Miscarriage Risk</th>
        <th>IVF Success Rate</th>
      </tr>
    </thead>
    <tbody>
      <tr><td>&lt;30</td><td>20–25%</td><td>&lt;10%</td><td>45–50%</td></tr>
      <tr><td>35</td><td>15%</td><td>20%</td><td>35–40%</td></tr>
      <tr><td>38</td><td>10%</td><td>30%</td><td>20–25%</td></tr>
      <tr><td>40</td><td>5–8%</td><td>40%+</td><td>10–15%</td></tr>
      <tr><td>&gt;43</td><td>&lt;3%</td><td>50%+</td><td>&lt;5%</td></tr>
    </tbody>
  </table>

  <h3>🧬 Understanding Male Fertility Decline</h3>
  <p>
    Male fertility also declines with age, especially after 40–45 years. Key concerns include:
  </p>
  <ul>
    <li>Lower sperm count and motility</li>
    <li>Increased sperm DNA fragmentation</li>
    <li>Delayed conception</li>
    <li>Higher risk of autism, schizophrenia, and genetic conditions in children</li>
  </ul>
  <p><strong>Tip:</strong> Sperm banking is a wise choice for men planning late fatherhood.</p>

  <h3>⚠️ Factors That Accelerate Fertility Decline</h3>
  <ul>
    <li><strong>Lifestyle:</strong> Smoking, alcohol, obesity, lack of sleep</li>
    <li><strong>Medical:</strong> PCOS, endometriosis, fibroids, autoimmune disease</li>
    <li><strong>Environmental:</strong> Toxins, pesticides, endocrine disruptors</li>
    <li><strong>Stress:</strong> Chronic emotional stress affects hormones</li>
  </ul>

  <h3>🩺 How to Assess Fertility</h3>
  <p><strong>For Women:</strong></p>
  <ul>
    <li>AMH, FSH, LH, Estradiol levels</li>
    <li>Antral Follicle Count (AFC) via ultrasound</li>
    <li>Ovulation tracking (LH kits, BBT, scan)</li>
    <li>HSG for tube blockage, biopsy if indicated</li>
  </ul>
  <p><strong>For Men:</strong></p>
  <ul>
    <li>Semen analysis (count, motility, morphology)</li>
    <li>DNA fragmentation test</li>
    <li>Hormone panel: FSH, LH, Testosterone</li>
  </ul>
  <p><strong>Early testing = Empowered planning.</strong></p>

  <h3>🧊 Preserving Fertility for the Future</h3>
  <ul>
    <li><strong>Egg Freezing:</strong> Best before 35; helpful for career/family delay or cancer patients</li>
    <li><strong>Sperm Freezing:</strong> Ideal for men delaying marriage or with risky jobs</li>
    <li><strong>Embryo Freezing:</strong> Common with IVF for future use</li>
    <li><strong>Ovarian Tissue Freezing:</strong> Still experimental, promising for cancer survivors</li>
  </ul>
  <p><strong>Complement with:</strong> Antioxidant-rich diet, good sleep, regular exercise, stress management</p>

  <h3>🔬 ART Options for Age-Related Fertility Issues</h3>
  <ul>
    <li><strong>Ovulation Induction:</strong> Letrozole, Clomiphene for cycle regularization</li>
    <li><strong>IUI:</strong> Simple, less invasive, useful in early-stage infertility</li>
    <li><strong>IVF & ICSI:</strong> Best chance when egg quality/quantity is low</li>
    <li><strong>Donor Gametes:</strong> Option if own egg/sperm is non-viable</li>
    <li><strong>PGT-A:</strong> Genetic testing of embryos to avoid miscarriage</li>
  </ul>

  <h3>💬 Emotional Impact of Declining Fertility</h3>
  <ul>
    <li>Guilt over “waiting too long”</li>
    <li>Pressure from family/society</li>
    <li>Fear of missing out on motherhood or fatherhood</li>
    <li>Emotional burnout from repeated treatments</li>
  </ul>
  <p>
    At Sukam, we prioritize mental wellness too — with counseling, support groups, and fertility coaching.
  </p>

  <h3>❓ FAQs – Declining Fertility</h3>
  <ul>
    <li><strong>Q:</strong> Can I conceive naturally after 40?<br /><strong>A:</strong> Yes, but chances are low. IVF may be needed.</li>
    <li><strong>Q:</strong> Does male fertility decline?<br /><strong>A:</strong> Yes, sperm quality declines after age 40–45.</li>
    <li><strong>Q:</strong> What’s the cost of egg freezing?<br /><strong>A:</strong> ₹80,000–₹1.5 lakhs, plus annual storage fees.</li>
    <li><strong>Q:</strong> Can stress alone cause infertility?<br /><strong>A:</strong> Rarely by itself, but it impacts hormones.</li>
    <li><strong>Q:</strong> When should I see a fertility expert?<br /><strong>A:</strong> After 12 months of trying (&lt;35) or 6 months (&gt;35)</li>
    <li><strong>Q:</strong> How many eggs should I freeze?<br /><strong>A:</strong> 12–15 mature eggs recommended for 1–2 children</li>
    <li><strong>Q:</strong> Can diet improve fertility?<br /><strong>A:</strong> Yes. Antioxidants, omega-3s, and balanced meals help</li>
    <li><strong>Q:</strong> Does birth control delay fertility long-term?<br /><strong>A:</strong> No. Fertility resumes after stopping pills</li>
  </ul>

  <h3>🌱 Your Fertility, Your Timeline</h3>
  <p>
    Declining fertility is not the end — it’s a signal to plan ahead. With the right tools, awareness, and care,
    your dreams of parenthood are still within reach.
  </p>
  <p>
    <strong>At Sukam Speciality Clinic & Fertility Centre, we offer:</strong><br />
    ✅ Early screening and personalized strategies<br />
    ✅ Egg, sperm & embryo freezing<br />
    ✅ ART options and mind-body care<br />
    ✅ Total support for every life stage
  </p>
  <p><strong>Know your body. Know your options. Take the first step today.</strong></p>
</section>


      <section className="quiz-section">
        <h2>🧠 Declining Fertility Quiz — What Do You Know?</h2>

        {/* Progress Bar */}
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

export default DecliningFertility;
