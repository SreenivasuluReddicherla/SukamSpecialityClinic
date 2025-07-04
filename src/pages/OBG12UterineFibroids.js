import React, { useState } from 'react';
import './RP1InfertilityInsights.css';

const quizData = [
  {
    question: "Uterine fibroids are:",
    options: ["Cancerous tumors", "Benign tumors", "Infections", "Cysts"],
    answer: "Benign tumors"
  },
  {
    question: "Most common type of fibroid is:",
    options: ["Subserosal", "Intramural", "Submucosal", "Pedunculated"],
    answer: "Intramural"
  },
  {
    question: "Which hormone is responsible for fibroid growth?",
    options: ["Testosterone", "Prolactin", "Estrogen", "Oxytocin"],
    answer: "Estrogen"
  },
  {
    question: "Heavy periods due to fibroids is called:",
    options: ["Amenorrhea", "Menorrhagia", "Metrorrhagia", "Dysmenorrhea"],
    answer: "Menorrhagia"
  },
  {
    question: "Uterine artery embolization works by:",
    options: [
      "Cutting out the uterus",
      "Freezing the fibroid",
      "Blocking blood supply to fibroid",
      "Breaking fibroids manually"
    ],
    answer: "Blocking blood supply to fibroid"
  },
  {
    question: "Which imaging gives best detail in complex fibroids?",
    options: ["X-ray", "Ultrasound", "MRI", "CT scan"],
    answer: "MRI"
  },
  {
    question: "Submucosal fibroids grow:",
    options: [
      "Into uterine cavity",
      "On uterus surface",
      "Into cervix",
      "Into bladder"
    ],
    answer: "Into uterine cavity"
  },
  {
    question: "Fibroids may cause:",
    options: [
      "Irregular bleeding",
      "Infertility",
      "Pelvic pain",
      "All of the above"
    ],
    answer: "All of the above"
  },
  {
    question: "Most fibroids are found in which age group?",
    options: [
      "Teenagers",
      "Postmenopausal women",
      "Reproductive age women",
      "Elderly women"
    ],
    answer: "Reproductive age women"
  },
  {
    question: "Can fibroids shrink after menopause?",
    options: ["No", "Yes", "Only with surgery", "Never change"],
    answer: "Yes"
  },
  {
    question: "Common surgical treatment preserving uterus:",
    options: [
      "Hysterectomy",
      "Dilation & curettage",
      "Myomectomy",
      "C-section"
    ],
    answer: "Myomectomy"
  },
  {
    question: "Which risk factor is linked to fibroids?",
    options: ["Smoking", "Late menarche", "Family history", "Low blood pressure"],
    answer: "Family history"
  },
  {
    question: "Fibroids always cause symptoms.",
    options: ["True", "False"],
    answer: "False"
  },
  {
    question: "What is a pedunculated fibroid?",
    options: [
      "A fluid-filled cyst",
      "A fibroid with a stalk",
      "A cancerous mass",
      "A fibroid in ovaries"
    ],
    answer: "A fibroid with a stalk"
  },
  {
    question: "Fibroids and PCOS are:",
    options: [
      "Same",
      "Related conditions",
      "Different conditions",
      "Different names for same disease"
    ],
    answer: "Different conditions"
  },
  {
    question: "Heavy bleeding due to fibroids may cause:",
    options: ["High BP", "Anemia", "Jaundice", "Vomiting"],
    answer: "Anemia"
  },
  {
    question: "Myomectomy is done when:",
    options: [
      "Fibroids are cancerous",
      "Fertility preservation is needed",
      "After menopause",
      "For minor pain"
    ],
    answer: "Fertility preservation is needed"
  },
  {
    question: "Can fibroids come back after myomectomy?",
    options: ["No", "Yes", "Only in teenagers", "Not possible"],
    answer: "Yes"
  },
  {
    question: "UAE is ideal for:",
    options: [
      "Women planning pregnancy",
      "Women with completed family",
      "Cancer treatment",
      "PCOS patients"
    ],
    answer: "Women with completed family"
  },
  {
    question: "Focused ultrasound therapy uses:",
    options: ["Radiation", "Heat energy", "Lasers", "Needles"],
    answer: "Heat energy"
  },
  {
    question: "Main component of fibroids:",
    options: ["Nerve tissue", "Cartilage", "Smooth muscle", "Fat"],
    answer: "Smooth muscle"
  },
  {
    question: "Fibroids are more common in:",
    options: [
      "Men",
      "Pregnant women",
      "Women of African descent",
      "Infants"
    ],
    answer: "Women of African descent"
  },
  {
    question: "Can fibroids cause urinary issues?",
    options: ["No", "Yes", "Only during pregnancy", "Only if infected"],
    answer: "Yes"
  },
  {
    question: "Best way to confirm uterine polyps vs fibroids?",
    options: ["X-ray", "Endoscopy", "Hysteroscopy", "Blood test"],
    answer: "Hysteroscopy"
  },
  {
    question: "Fibroids can increase risk of:",
    options: [
      "Miscarriage",
      "Preterm labor",
      "Cesarean delivery",
      "All of the above"
    ],
    answer: "All of the above"
  }
];

const UterineFibroids = () => {
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
      <h1>🌸 Uterine Fibroids</h1>
      <p className="lead">“Benign but bothersome roommates in the womb.”</p>

      <section className="info-section">
  <h3>🩺 What Are Uterine Fibroids?</h3>
  <p>
    Uterine fibroids, or leiomyomas, are non-cancerous tumors made of smooth muscle and connective tissue that grow in or around the uterus. They can vary in size—from tiny seedlings to large masses—and may or may not cause symptoms.
  </p>
  <p>
    Fibroids are very common in women aged 30 to 50. While many remain symptom-free, others may face menstrual or fertility challenges.
  </p>

  <h3>📍 Types of Fibroids (Based on Location)</h3>
  <ul>
    <li><strong>Intramural:</strong> Grow within the uterine wall (most common type)</li>
    <li><strong>Subserosal:</strong> Project outward from the uterus into the pelvic cavity</li>
    <li><strong>Submucosal:</strong> Project into the uterine cavity and may affect bleeding and fertility</li>
    <li><strong>Pedunculated:</strong> Attached to the uterus by a stalk (internal or external)</li>
  </ul>

  <h3>🔍 Symptoms of Uterine Fibroids</h3>
  <ul>
    <li>Heavy or prolonged periods (menorrhagia)</li>
    <li>Pelvic pressure or bloating</li>
    <li>Frequent urination or urinary retention</li>
    <li>Constipation</li>
    <li>Lower back pain</li>
    <li>Painful periods (dysmenorrhea)</li>
    <li>Pain during intercourse</li>
    <li>Difficulty getting pregnant or carrying to term</li>
    <li><em>Note:</em> Many women have no symptoms, and fibroids are found during routine scans.</li>
  </ul>

  <h3>⚠️ Causes & Risk Factors</h3>
  <ul>
    <li><strong>Hormones:</strong> Estrogen and progesterone fuel fibroid growth</li>
    <li><strong>Genetics:</strong> Family history increases risk</li>
    <li><strong>Age:</strong> Most common during reproductive years</li>
    <li><strong>Obesity:</strong> Higher body fat increases estrogen levels</li>
    <li><strong>Early menstruation onset</strong></li>
    <li><strong>African descent:</strong> Higher prevalence and severity</li>
  </ul>

  <h3>🧪 How Are Fibroids Diagnosed?</h3>
  <ul>
    <li>Pelvic examination</li>
    <li>Ultrasound (transabdominal or transvaginal)</li>
    <li>Saline infusion sonography</li>
    <li>MRI scan (for complex cases)</li>
    <li>Hysteroscopy (for submucosal fibroids/fertility issues)</li>
  </ul>

  <h3>🩺️ Treatment Options</h3>
  <p><strong>Medical Management:</strong></p>
  <ul>
    <li>GnRH agonists to shrink fibroids</li>
    <li>Tranexamic acid for bleeding control</li>
    <li>Hormonal IUDs or oral contraceptives to manage symptoms</li>
  </ul>

  <p><strong>Minimally Invasive Procedures:</strong></p>
  <ul>
    <li>Uterine artery embolization (UAE)</li>
    <li>MRI-guided focused ultrasound surgery (FUS)</li>
  </ul>

  <p><strong>Surgical Options:</strong></p>
  <ul>
    <li>Myomectomy (removal of fibroids, uterus preserved)</li>
    <li>Hysterectomy (removal of uterus — in severe or completed family cases)</li>
  </ul>
  <p>
    <strong>Note:</strong> At Sukam, we prioritize personalized and fertility-preserving approaches.
  </p>

  <h3>👩‍👧 Fertility & Pregnancy Impacts</h3>
  <p>
    While many women with fibroids conceive naturally, the effect on fertility and pregnancy depends on the fibroid’s size, type, number, and location.
  </p>
  <ul>
    <li>Submucosal fibroids can interfere with implantation</li>
    <li>Large intramural fibroids may distort the uterus or reduce blood supply</li>
    <li>Fibroids near fallopian tubes can block egg/sperm passage</li>
    <li>Hormonal and inflammatory responses can affect ovulation and embryo development</li>
  </ul>
  <p><em>Good to know:</em> Not all fibroids need removal before pregnancy—evaluation is individualized.</p>

  <h3>🤰 Pregnancy & Fibroids: Key Points</h3>
  <ul>
    <li><strong>Miscarriage:</strong> Higher risk with submucosal or cavity-distorting fibroids</li>
    <li><strong>Preterm labor:</strong> Due to irritability or space issues</li>
    <li><strong>Malpresentation:</strong> Baby may not settle head-down</li>
    <li><strong>Placental abruption:</strong> Rare but possible</li>
    <li><strong>Cesarean delivery:</strong> Slightly higher risk if fibroids block the birth canal</li>
  </ul>
  <p>
    <strong>At Sukam:</strong> We provide advanced monitoring and delivery planning for women with fibroids.
  </p>

  <h3>📏 Fibroid Size & Symptom Guide</h3>
  <ul>
    <li><strong>&lt;1 cm (Tiny):</strong> Usually symptomless — Monitor only</li>
    <li><strong>1–3 cm (Small):</strong> Spotting or light symptoms — Lifestyle changes, hormones</li>
    <li><strong>4–5 cm (Medium):</strong> Pressure, cramps — Medication, UAE, or surgery</li>
    <li><strong>6–8 cm (Large):</strong> Heavy bleeding, pain — Surgery may be needed</li>
    <li><strong>&gt;10 cm (Very Large):</strong> Visible bulge, anemia — Likely myomectomy or hysterectomy</li>
  </ul>
  <p><em>Note:</em> Symptom severity also depends on location and growth rate, not just size.</p>

  <h3>🧠 Myths vs. Facts</h3>
  <ul>
    <li><strong>❌ Myth:</strong> “Fibroids always turn cancerous.”<br /><strong>✅ Fact:</strong> They are benign and rarely become cancerous.</li>
    <li><strong>❌ Myth:</strong> “Surgery is the only solution.”<br /><strong>✅ Fact:</strong> Many fibroids can be managed non-surgically.</li>
    <li><strong>❌ Myth:</strong> “You can’t get pregnant with fibroids.”<br /><strong>✅ Fact:</strong> Many women have healthy pregnancies.</li>
    <li><strong>❌ Myth:</strong> “Hysterectomy is the only safe treatment.”<br /><strong>✅ Fact:</strong> It's just one of many options.</li>
  </ul>

  <h3>🍀 Lifestyle Tips for Fibroid Management</h3>
  <ul>
    <li>Maintain a healthy weight</li>
    <li>Limit red meat and processed foods</li>
    <li>Eat green vegetables, legumes, whole grains</li>
    <li>Stay physically active</li>
    <li>Manage stress via yoga, meditation, therapy</li>
    <li>Track your cycles with a period app</li>
  </ul>
</section>


      <section className="quiz-section">
        <h2>🧠 Uterine Fibroids Quiz — How Well Do You Know Fibroids?</h2>

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

export default UterineFibroids;
