
import React, { useState } from 'react';
import './RP1InfertilityInsights.css';

const quizData = [
  {
    question: "Minimally Invasive Surgery refers to procedures with:",
    options: [
      "Large incisions",
      "Natural healing",
      "Small incisions and camera guidance",
      "Manual therapy"
    ],
    answer: "Small incisions and camera guidance"
  },
  {
    question: "Which instrument transmits the visual feed in MIS?",
    options: ["Catheter", "Retractor", "Laparoscope", "Clamp"],
    answer: "Laparoscope"
  },
  {
    question: "Which of the following is a benefit of MIS?",
    options: [
      "More pain",
      "Faster recovery",
      "Longer hospitalization",
      "More scarring"
    ],
    answer: "Faster recovery"
  },
  {
    question: "What is commonly used to create space in laparoscopic abdominal surgery?",
    options: ["Oxygen", "Nitrogen", "Helium", "Carbon dioxide"],
    answer: "Carbon dioxide"
  },
  {
    question: "Which procedure is typically done laparoscopically?",
    options: ["Brain surgery", "Gallbladder removal", "Tooth extraction", "Tonsillectomy"],
    answer: "Gallbladder removal"
  },
  {
    question: "Robotic surgery is often used in:",
    options: ["ENT", "Urology", "Cardiology", "Dermatology"],
    answer: "Urology"
  },
  {
    question: "Laparoscopic surgery is also known as:",
    options: ["Blind surgery", "Keyhole surgery", "Bloodless surgery", "Traditional surgery"],
    answer: "Keyhole surgery"
  },
  {
    question: "Which surgery is least likely to be done via MIS?",
    options: ["Brain tumor", "Appendectomy", "Hysterectomy", "Hernia repair"],
    answer: "Appendectomy"
  },
  {
    question: "Endoscopy involves inserting a scope via:",
    options: ["Skin incision", "Bone marrow", "Natural orifices", "Chest wall"],
    answer: "Natural orifices"
  },
  {
    question: "A major advantage of robotic surgery is:",
    options: ["Less visibility", "Surgeon fatigue", "Greater precision", "Higher costs only"],
    answer: "Greater precision"
  },
  {
    question: "Which of the following is NOT an MIS procedure?",
    options: [
      "Open heart bypass",
      "Laparoscopic cholecystectomy",
      "Endoscopic polyp removal",
      "Robotic prostatectomy"
    ],
    answer: "Open heart bypass"
  },
  {
    question: "What gas is used to insufflate the abdomen in laparoscopy?",
    options: ["Oxygen", "CO₂", "Helium", "Argon"],
    answer: "CO₂"
  },
  {
    question: "What does VATS stand for?",
    options: [
      "Visual artery tagging system",
      "Video-assisted thoracoscopic surgery",
      "Vascular automated treatment surgery",
      "Verified anesthesia time standard"
    ],
    answer: "Video-assisted thoracoscopic surgery"
  },
  {
    question: "MIS typically reduces:",
    options: ["Access", "Skill requirements", "Post-op pain", "Instrument cost"],
    answer: "Post-op pain"
  },
  {
    question: "Conversion to open surgery may occur if:",
    options: [
      "Patient requests it",
      "Instrument is unavailable",
      "Complications develop",
      "Laparoscope breaks"
    ],
    answer: "Complications develop"
  },
  {
    question: "Which one is a cosmetic advantage of MIS?",
    options: ["Less blood loss", "Shorter stay", "Smaller scars", "Faster breathing"],
    answer: "Smaller scars"
  },
  {
    question: "Recovery after laparoscopic surgery is typically:",
    options: ["1 month", "2 weeks or less", "6 weeks", "Same as open surgery"],
    answer: "2 weeks or less"
  },
  {
    question: "Which of these is true about robotic-assisted MIS?",
    options: [
      "Surgeon is replaced",
      "Uses AI to decide",
      "Surgeon controls robot",
      "Cannot do fine movements"
    ],
    answer: "Surgeon controls robot"
  },
  {
    question: "Which is a potential complication of MIS?",
    options: ["Heart failure", "Port site infection", "Hair loss", "Stroke"],
    answer: "Port site infection"
  },
  {
    question: "Patient counseling before MIS includes all except:",
    options: [
      "Benefits and risks",
      "Consent form",
      "Time of surgery",
      "Astrological compatibility"
    ],
    answer: "Astrological compatibility"
  }
];

const MinimallyInvasiveSurgery = () => {
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
      <h1>Minimally Invasive Surgery (MIS): Healing Through Smaller Openings</h1>
      <p className="lead">“A Revolution in Modern Surgery—Less Pain, Faster Recovery, Better Precision ”</p>

      <section className="info-section">
  <h3>🔍 What Is Minimally Invasive Surgery?</h3>
  <p>
    Minimally Invasive Surgery (MIS) refers to surgical procedures performed through small
    incisions using specialized instruments and visual aids like cameras. Instead of
    traditional large cuts, MIS enables surgeons to access internal organs using laparoscopic,
    endoscopic, or robotic techniques. This approach has revolutionized surgery by offering
    better outcomes, faster recovery, and shorter hospital stays.
  </p>

  <h3>🔧 Core Components of MIS</h3>
  <ul>
    <li><strong>Trocars (ports):</strong> Channels inserted through the skin for instrument access</li>
    <li><strong>Laparoscope:</strong> A thin tube with a camera and light for internal visualization</li>
    <li><strong>Monitor:</strong> Displays real-time visuals of the operative field</li>
    <li><strong>Energy Devices:</strong> Ultrasonic/bipolar tools for cutting and coagulation</li>
    <li><strong>Insufflation:</strong> CO₂ gas used in laparoscopy to expand the abdomen for better access</li>
  </ul>

  <h3>🛠️ Common Types of Minimally Invasive Surgery</h3>
  <ul>
    <li><strong>Laparoscopic Surgery:</strong> Hernia repair, appendectomy, cholecystectomy, hysterectomy, bariatric surgery</li>
    <li><strong>Thoracoscopic Surgery (VATS):</strong> Lung biopsies, pleural drainage, decortication</li>
    <li><strong>Endoscopic Procedures:</strong> GI endoscopy, colonoscopy, hysteroscopy using natural body openings</li>
    <li><strong>Robotic-Assisted Surgery:</strong> Used in urology, gynecology, colorectal and prostate surgeries for enhanced control and precision</li>
  </ul>

  <h3>⚙️ Indications for Minimally Invasive Surgery</h3>
  <ul>
    <li>Elective non-emergency procedures</li>
    <li>Gallbladder stones and inflammation</li>
    <li>Inguinal, ventral, and incisional hernias</li>
    <li>Appendicitis</li>
    <li>Uterine fibroids, endometriosis</li>
    <li>Infertility diagnostics through laparoscopy</li>
  </ul>

  <h3>✅ Advantages of Minimally Invasive Surgery</h3>
  <table>
    <thead>
      <tr>
        <th>Feature</th>
        <th>MIS</th>
        <th>Traditional Open Surgery</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Incision Size</td>
        <td>Small (5–12 mm)</td>
        <td>Large</td>
      </tr>
      <tr>
        <td>Blood Loss</td>
        <td>Minimal</td>
        <td>More</td>
      </tr>
      <tr>
        <td>Pain</td>
        <td>Significantly less</td>
        <td>Moderate to severe</td>
      </tr>
      <tr>
        <td>Hospital Stay</td>
        <td>Short (1–2 days)</td>
        <td>Longer</td>
      </tr>
      <tr>
        <td>Recovery Time</td>
        <td>Rapid (7–14 days)</td>
        <td>3–6 weeks</td>
      </tr>
      <tr>
        <td>Scarring</td>
        <td>Minimal</td>
        <td>Prominent</td>
      </tr>
      <tr>
        <td>Infection Risk</td>
        <td>Lower</td>
        <td>Higher</td>
      </tr>
    </tbody>
  </table>

  <h3>⚠️ Limitations & Considerations</h3>
  <ul>
    <li>Not suitable for all surgeries</li>
    <li>Obesity, scarring, or large tumors may limit access</li>
    <li>Requires advanced equipment and expertise</li>
    <li>Possibility of switching to open surgery if complications arise</li>
  </ul>

  <h3>👨‍⚕️ Patient Journey at Sukam Speciality Clinic</h3>
  <ol>
    <li><strong>Pre-Surgical Evaluation:</strong> Physical exam, blood tests, ECG, imaging, anesthesia clearance</li>
    <li><strong>Patient Education:</strong> Visual explanation of techniques, recovery expectations</li>
    <li><strong>Surgery Day:</strong> Day-care or 1-day admission, general anesthesia</li>
    <li><strong>Post-Operative Recovery:</strong> Walking within hours, discharge in 1–2 days</li>
    <li><strong>Follow-up:</strong> Stitch removal if required, return to work in 7–10 days</li>
  </ol>

  <h3>🏥 MIS in Special Fields</h3>
  <ul>
    <li><strong>Gynecology:</strong> Hysterectomy, myomectomy, fertility enhancement, endometriosis removal</li>
    <li><strong>Urology:</strong> Laparoscopic nephrectomy, robotic prostatectomy, pyeloplasty</li>
    <li><strong>Gastrointestinal Surgery:</strong> Appendectomy, colectomy, fundoplication, bariatric procedures</li>
    <li><strong>General Surgery:</strong> Gallbladder removal, hernia repair, diagnostic laparoscopy</li>
  </ul>

  <h3>🧠 Myths vs Facts</h3>
  <table>
    <thead>
      <tr>
        <th>Myth</th>
        <th>Fact</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>MIS is always risk-free</td>
        <td>All surgeries carry risk—MIS reduces but doesn’t eliminate it</td>
      </tr>
      <tr>
        <td>Only simple surgeries are possible laparoscopically</td>
        <td>Many complex surgeries are now routinely performed via MIS</td>
      </tr>
      <tr>
        <td>Laparoscopy is only cosmetic</td>
        <td>Benefits include less pain, lower infection, and faster healing</td>
      </tr>
      <tr>
        <td>Recovery from MIS is instant</td>
        <td>It’s faster than open surgery, but still requires care and rest</td>
      </tr>
    </tbody>
  </table>

  <h3>🩺 Your Surgery, Your Comfort</h3>
  <ul>
    <li>✅ Access to advanced laparoscopic and robotic systems</li>
    <li>✅ Skilled surgeons certified in MIS</li>
    <li>✅ Personalized plans ensuring quicker return to routines</li>
    <li>✅ Transparent counseling and low-complication track record</li>
  </ul>
</section>

      <section className="quiz-section">
        <h2>🧠 Quick Quiz — Perianal Abscess</h2>

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
                      {selectedAnswers[idx] === q.answer ? 'Correct' : `Incorrect (Your Answer: ${selectedAnswers[idx]})`}
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

export default MinimallyInvasiveSurgery;
