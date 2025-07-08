
import React, { useState } from 'react';
import './RP1InfertilityInsights.css';

const quizData = [
  {
    question: "What is robotic surgery?",
    options: ["Robot operating alone", "Surgeon-controlled robotic-assisted surgery", "Manual hand surgery", "Voice-activated surgery"],
    answer: "Surgeon-controlled robotic-assisted surgery"
  },
  {
    question: "Which organ is commonly treated with robotic surgery in general surgery?",
    options: ["Brain", "Gallbladder", "Heart", "Lung"],
    answer: "Gallbladder"
  },
  {
    question: "What kind of visualization does robotic surgery offer?",
    options: ["2D black-and-white", "3D high-definition", "Infrared", "No visual aid"],
    answer: "3D high-definition"
  },
  {
    question: "Fundoplication is done to treat:",
    options: ["Asthma", "GERD (Acid reflux)", "Kidney stones", "Hernia"],
    answer: "GERD (Acid reflux)"
  },
  {
    question: "Which robotic procedure is best for recurrent hernias?",
    options: ["Robotic appendectomy", "Robotic hernia repair", "Robotic nephrectomy", "LASIK"],
    answer: "Robotic hernia repair"
  },
  {
    question: "Robotic surgery is particularly helpful in:",
    options: ["Blind procedures", "Deep, narrow spaces", "Skin lesions", "Joint fractures"],
    answer: "Deep, narrow spaces"
  },
  {
    question: "Robotic surgical instruments are mounted on:",
    options: ["Surgeon’s hand", "Console", "Robotic arms", "Endoscope"],
    answer: "Robotic arms"
  },
  {
    question: "Robotic colectomy is useful in:",
    options: ["Brain surgery", "Colon cancer", "ACL repair", "Voice box issues"],
    answer: "Colon cancer"
  },
  {
    question: "What is one limitation of robotic surgery?",
    options: ["Poor outcomes", "High scarring", "Cost and equipment availability", "Long incisions"],
    answer: "Cost and equipment availability"
  },
  {
    question: "Robotic surgeries are often:",
    options: ["Performed blindly", "Day-care or short stay", "10–12 day admission", "Without anesthesia"],
    answer: "Day-care or short stay"
  },
  {
    question: "Which structure helps the surgeon control the robotic arms?",
    options: ["Remote control", "Surgeon console", "Laser pointer", "Foot pedal only"],
    answer: "Surgeon console"
  },
  {
    question: "Which is NOT a benefit of robotic surgery?",
    options: ["Larger cuts", "Less blood loss", "Greater dexterity", "Minimal pain"],
    answer: "Larger cuts"
  },
  {
    question: "What is required before robotic surgery?",
    options: ["Scalp massage", "Diagnostic ultrasound", "Bone scan", "Laser alignment"],
    answer: "Diagnostic ultrasound"
  },
  {
    question: "Which field uses robotic surgery widely?",
    options: ["ENT", "General surgery", "Homeopathy", "Psychiatry"],
    answer: "General surgery"
  },
  {
    question: "Conversion to open surgery is needed when:",
    options: ["Surgeon tires", "Equipment malfunctions or complications arise", "Patient shouts", "Surgery takes less time"],
    answer: "Equipment malfunctions or complications arise"
  },
  {
    question: "Which of these patients is a good candidate for robotic hernia repair?",
    options: ["Pregnant woman", "Small child", "Recurrent ventral hernia in obese adult", "Diabetic neuropathy"],
    answer: "Recurrent ventral hernia in obese adult"
  },
  {
    question: "One key advantage of robotic over laparoscopic surgery:",
    options: ["Less magnification", "More blood loss", "Higher dexterity and precision", "Same cost"],
    answer: "Higher dexterity and precision"
  },
  {
    question: "Which of the following is NOT a robotic system?",
    options: ["Da Vinci", "Versius", "Zeus", "ECG"],
    answer: "ECG"
  },
  {
    question: "Robotic gallbladder surgery is especially beneficial when:",
    options: ["It's emergency", "There’s prior surgery/scarring", "It’s a liver surgery", "The patient is allergic to light"],
    answer: "There’s prior surgery/scarring"
  },
  {
    question: "At Sukam Speciality Clinic, robotic surgeries are offered for:",
    options: ["Cardiac arrest", "Psychiatric illness", "Hernia, gallbladder, fundoplication", "Depression"],
    answer: "Hernia, gallbladder, fundoplication"
  }
];

const RoboticSurgery = () => {
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
      <h1>Robotic Surgery</h1>
      <p className="lead">“Precision in Motion—The Future of Surgery Is Here”</p>

      <section className="info-section">
  <h3>🤖 What Is Robotic Surgery?</h3>
  <p>
    Robotic Surgery is a type of minimally invasive surgery (MIS) where the surgeon operates
    using a robotic-assisted system, offering superior precision, control, and vision. Unlike
    traditional laparoscopic surgery, robotic surgery uses robotic arms controlled by the
    surgeon at a console to perform complex procedures through small incisions. The robot doesn't
    perform the surgery autonomously — rather, it precisely follows the surgeon's hand movements,
    with enhancements in dexterity and visualization.
  </p>

  <h3>🛠️ Components of the Robotic Surgical System</h3>
  <ul>
    <li><strong>Surgeon Console</strong>
      <ul>
        <li>Where the surgeon sits and operates</li>
        <li>Hand, finger, and foot controls</li>
        <li>High-definition 3D magnified view</li>
      </ul>
    </li>
    <li><strong>Patient-side Cart</strong>
      <ul>
        <li>Robotic arms attached to surgical instruments</li>
        <li>Executes the movements guided by the surgeon</li>
      </ul>
    </li>
    <li><strong>Vision System (3D Camera Arm)</strong>
      <ul>
        <li>Provides a high-definition, magnified 3D view of the surgical field</li>
        <li>Enhances depth perception and visibility</li>
      </ul>
    </li>
  </ul>

  <h3>🔍 Robotic Surgeries in General Surgery</h3>
  <ul>
    <li><strong>Robotic Hernia Repair</strong> — Inguinal, ventral, and incisional hernias. Enables better mesh placement, less pain, fewer complications</li>
    <li><strong>Robotic Gallbladder Surgery</strong> — Cholecystectomy with improved biliary visualization, especially in complex/repeat cases</li>
    <li><strong>Robotic Fundoplication</strong> — For acid reflux and hiatal hernia, with reduced recurrence and better anatomy handling</li>
    <li><strong>Robotic Colectomy</strong> — For benign tumors, polyps, or colon cancer with nerve and vessel preservation</li>
    <li><strong>Robotic GI Tumor Resection</strong> — Ideal for GISTs, stomach or small bowel lesions</li>
  </ul>

  <h3>✅ Advantages of Robotic Surgery in General Surgery</h3>
  <table>
    <thead>
      <tr>
        <th>Feature</th>
        <th>Benefit</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Precision</td>
        <td>Unmatched dexterity, stable movements</td>
      </tr>
      <tr>
        <td>Visualization</td>
        <td>3D HD vision with 10x magnification</td>
      </tr>
      <tr>
        <td>Access</td>
        <td>Reaches narrow, deep pelvic spaces</td>
      </tr>
      <tr>
        <td>Less Pain</td>
        <td>Fewer nerve injuries, minimal trauma</td>
      </tr>
      <tr>
        <td>Cosmesis</td>
        <td>Tiny incisions, barely visible scars</td>
      </tr>
      <tr>
        <td>Faster Recovery</td>
        <td>Shorter hospital stay, early return to work</td>
      </tr>
      <tr>
        <td>Reduced Blood Loss</td>
        <td>Controlled cauterization and dissection</td>
      </tr>
    </tbody>
  </table>

  <h3>⚖️ Indications and Suitability</h3>
  <ul>
    <li><strong>Ideal Candidates:</strong>
      <ul>
        <li>Recurrent hernias</li>
        <li>Obese patients (benefit from better ergonomics)</li>
        <li>Tumors in tight spaces (rectum, esophagus, stomach)</li>
        <li>High-risk patients needing precise dissection</li>
      </ul>
    </li>
    <li><strong>May Not Be Ideal For:</strong>
      <ul>
        <li>Large, infected abscesses</li>
        <li>Massive tumors with vascular involvement</li>
        <li>Emergency trauma cases</li>
      </ul>
    </li>
  </ul>

  <h3>📊 How It Compares</h3>
  <table>
    <thead>
      <tr>
        <th>Parameter</th>
        <th>Robotic Surgery</th>
        <th>Laparoscopic Surgery</th>
        <th>Open Surgery</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Precision</td>
        <td>Highest</td>
        <td>Moderate</td>
        <td>Basic</td>
      </tr>
      <tr>
        <td>Scarring</td>
        <td>Minimal</td>
        <td>Minimal</td>
        <td>Large</td>
      </tr>
      <tr>
        <td>Learning Curve</td>
        <td>Steep for surgeon</td>
        <td>Moderate</td>
        <td>Simple</td>
      </tr>
      <tr>
        <td>Cost</td>
        <td>Higher</td>
        <td>Lower</td>
        <td>Lowest</td>
      </tr>
      <tr>
        <td>Visualization</td>
        <td>3D HD</td>
        <td>2D</td>
        <td>Direct vision</td>
      </tr>
    </tbody>
  </table>

  <h3>🚶‍♂️ Recovery Timeline</h3>
  <ul>
    <li><strong>Hospital Stay:</strong> 1–2 days</li>
    <li><strong>Pain:</strong> Very mild, easily managed</li>
    <li><strong>Activity:</strong> Walk same day, resume normal activities in 3–5 days</li>
    <li><strong>Return to Work:</strong> Within 5–10 days</li>
    <li><strong>Follow-up:</strong> 1-week review, stitch removal rarely required</li>
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
        <td>The robot operates on its own</td>
        <td>Surgeon is fully in control at all times</td>
      </tr>
      <tr>
        <td>Robotic surgery is only for cancer</td>
        <td>Used in many benign conditions too</td>
      </tr>
      <tr>
        <td>Robotic surgery is unsafe</td>
        <td>Precision reduces complications</td>
      </tr>
      <tr>
        <td>It’s just hype and expensive</td>
        <td>Long-term benefits often outweigh costs</td>
      </tr>
    </tbody>
  </table>

  <h3>🏥 Robotic Surgery at Sukam Speciality Clinic</h3>
  <ul>
    <li>✅ Access to advanced robotic platforms</li>
    <li>✅ Surgeons trained in robotic general surgery</li>
    <li>✅ Day-care robotic hernia and gallbladder surgeries</li>
    <li>✅ Transparent patient counselling on robotic vs laparoscopic benefits</li>
    <li>✅ Insurance and cashless coverage for approved robotic procedures</li>
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

export default RoboticSurgery;
