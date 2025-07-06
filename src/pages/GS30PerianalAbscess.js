import React, { useState } from 'react';
import './RP1InfertilityInsights.css';

const quizData = [
  {
    question: "Perianal abscess is:",
    options: ["Fungal infection", "Collection of pus near anus", "Lipoma", "Fistula tract"],
    answer: "Collection of pus near anus"
  },
  {
    question: "Most common cause:",
    options: ["Piles", "Fissure", "Infected anal gland", "Ulcer"],
    answer: "Infected anal gland"
  },
  {
    question: "First-line treatment:",
    options: ["Oral antibiotics only", "Sitz bath", "Incision and drainage", "Colonoscopy"],
    answer: "Incision and drainage"
  },
  {
    question: "Classic symptom:",
    options: ["Pain only during stools", "Constant severe pain", "Painless lump", "No fever"],
    answer: "Constant severe pain"
  },
  {
    question: "Common location:",
    options: ["Ischiorectal", "Intersphincteric", "Perianal", "Pelvic"],
    answer: "Perianal"
  },
  {
    question: "Antibiotics alone are enough:",
    options: ["Yes", "No", "Only in women", "Only in children"],
    answer: "No"
  },
  {
    question: "Abscess can lead to:",
    options: ["Fistula-in-ano", "Prolapse", "Polyp", "Hematuria"],
    answer: "Fistula-in-ano"
  },
  {
    question: "Fever is seen in:",
    options: ["All abscesses", "When infection spreads", "Fistula only", "Piles"],
    answer: "When infection spreads"
  },
  {
    question: "Pain relief includes:",
    options: ["NSAIDs", "Steroids only", "Insulin", "Sedatives"],
    answer: "NSAIDs"
  },
  {
    question: "Diagnosis is:",
    options: ["MRI always", "CT always", "Clinical", "Colonoscopy"],
    answer: "Clinical"
  },
  {
    question: "If untreated, abscess may:",
    options: ["Heal completely", "Form fistula", "Turn into hemorrhoid", "Disappear"],
    answer: "Form fistula"
  },
  {
    question: "Drainage is:",
    options: ["Surgical procedure", "Done at home", "Avoided in pain", "Only for diabetics"],
    answer: "Surgical procedure"
  },
  {
    question: "Immunocompromised patients:",
    options: ["Have slower healing", "No difference", "Heal faster", "Don’t need drainage"],
    answer: "Have slower healing"
  },
  {
    question: "Warm sitz baths help by:",
    options: ["Curing infection", "Promoting drainage", "Stopping bleeding", "Replacing antibiotics"],
    answer: "Promoting drainage"
  },
  {
    question: "Pus that drains on its own:",
    options: ["Ends the problem", "Always heals", "Needs I&D", "Should be ignored"],
    answer: "Needs I&D"
  },
  {
    question: "Fistula-in-ano may be suspected if:",
    options: ["Pain returns", "Pus discharge continues", "Bleeding occurs", "Fever stops"],
    answer: "Pus discharge continues"
  },
  {
    question: "Which is a deep abscess?",
    options: ["Perianal", "Ischiorectal", "Cutaneous", "Lipoma"],
    answer: "Ischiorectal"
  },
  {
    question: "Recurrent abscesses may suggest:",
    options: ["Diabetes", "Asthma", "Hernia", "Thyroid issues"],
    answer: "Diabetes"
  },
  {
    question: "Perianal abscess is:",
    options: ["Contagious", "A skin disease", "A surgical condition", "Caused by worms"],
    answer: "A surgical condition"
  },
  {
    question: "Best way to prevent recurrence:",
    options: ["High-protein diet", "Avoid surgery", "Early treatment", "Daily antibiotics"],
    answer: "Early treatment"
  }
];

const PerianalAbscess = () => {
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
      <h1>🟠 Perianal Abscess</h1>
      <p className="lead">“A painful pocket of infection near the anus.”</p>

      <section className="info-section">
  <h3>💡 What Exactly Is a Perianal Abscess?</h3>
  <p>
    A perianal abscess is a collection of pus that forms near the anus or rectum, typically due to an infection of a blocked anal gland. It presents as a sudden, intensely painful swelling, often with redness, fever, and discomfort while sitting or passing stool.
    Though it might seem minor, it’s actually a surgical emergency, because untreated abscesses can progress into complex fistulas, deeper infections, or sepsis.
  </p>

  <h3>🧪 Why Does It Happen?</h3>
  <p>
    The anal canal contains tiny glands (cryptoglandular) that secrete mucus to aid stool passage. If one of these gets clogged or infected, bacteria proliferate rapidly, forming pus. The body tries to wall it off — forming an abscess.
  </p>
  <p><strong>Common Risk Factors:</strong></p>
  <ul>
    <li>Chronic constipation or straining</li>
    <li>Diabetes mellitus</li>
    <li>Crohn’s disease or ulcerative colitis</li>
    <li>Immunosuppression (e.g., HIV, steroids)</li>
    <li>Anal trauma or post-surgical infections</li>
    <li>Poor hygiene or local skin infections</li>
  </ul>

  <h3>🧑‍⚕️ How Do Patients Present?</h3>
  <ul>
    <li>Severe, throbbing pain around the anus, often worsening when sitting</li>
    <li>Red, warm, tender swelling near the anal opening</li>
    <li>Low-grade fever or chills</li>
    <li>Difficulty in passing stool or urine</li>
    <li>Pus discharge if spontaneous rupture occurs</li>
    <li>Foul odor if it has already drained</li>
    <li>Fatigue, malaise, or general discomfort</li>
  </ul>
  <p><em>The pain is constant, not just during bowel movements — a key feature that distinguishes it from a fissure.</em></p>

  <h3>📍Types of Anorectal Abscesses (By Location)</h3>
  <table>
    <thead>
      <tr><th>Type</th><th>Description</th></tr>
    </thead>
    <tbody>
      <tr><td>Perianal</td><td>Just under the skin around the anus (most common)</td></tr>
      <tr><td>Ischiorectal</td><td>Deep, spreads through fat into buttocks</td></tr>
      <tr><td>Intersphincteric</td><td>Between internal & external sphincters</td></tr>
      <tr><td>Supralevator</td><td>Above pelvic floor — may mimic pelvic infection</td></tr>
    </tbody>
  </table>

  <h3>🧑‍⚕️ Diagnosis – Mostly Clinical, But Don’t Miss Depth</h3>
  <p><strong>Clinical Exam:</strong></p>
  <ul>
    <li>Red, tender swelling next to anus</li>
    <li>Pain out of proportion to visible findings</li>
    <li>Fluctuance or pointing abscess may be felt</li>
    <li>Rectal exam may reveal deeper extension (with caution)</li>
  </ul>
  <p><strong>Investigations (if needed):</strong></p>
  <ul>
    <li>Ultrasound or MRI – to detect deep or non-palpable abscess</li>
    <li>Blood tests – raised WBC count, CRP</li>
    <li>Fasting sugar/HbA1c – rule out diabetes</li>
    <li>HIV test – if immunosuppressed or recurrent abscess</li>
    <li>CT abdomen/pelvis – in high-risk or atypical cases</li>
  </ul>

  <h3>🩺 Treatment — There’s No "Wait and Watch" in Abscesses</h3>
  <p><strong>✅ Gold Standard: Incision and Drainage (I&D)</strong></p>
  <ul>
    <li>Local or general anesthesia is used</li>
    <li>A small incision is made over the most fluctuant area</li>
    <li>Pus is evacuated, and cavity is irrigated</li>
    <li>In some cases, a drain or wick may be placed</li>
    <li>Wound is left open to heal from within (secondary intention)</li>
  </ul>
  <p><strong>Antibiotics</strong> are only adjunctive, not primary, unless:</p>
  <ul>
    <li>Cellulitis is spreading</li>
    <li>Diabetic/immunocompromised patient</li>
    <li>Associated fever or systemic signs</li>
  </ul>

  <h3>❗ What If Left Untreated?</h3>
  <ul>
    <li>Rupture spontaneously → messy, painful discharge</li>
    <li>Form a fistula-in-ano (an abnormal tract from rectum to skin)</li>
    <li>Lead to extensive perineal sepsis or necrotizing fasciitis</li>
    <li>Cause urinary retention or sepsis</li>
    <li>Delay healing, increase scarring and recurrence</li>
  </ul>

  <h3>🏥 Recovery and Follow-Up</h3>
  <ul>
    <li>Most patients recover within 1–2 weeks with proper wound care</li>
    <li>Warm sitz baths aid drainage and hygiene</li>
    <li>Pain and antibiotics for 3–5 days</li>
    <li>Weekly dressings if required</li>
    <li>Watch for signs of fistula formation (persistent discharge or new openings)</li>
  </ul>
  <p>
    If there is persistent pus discharge after 4–6 weeks, fistula workup (MRI, probing, endoanal ultrasound) may be indicated.
  </p>

  <h3>🏥 What We Do at Sukam Specialty Clinic</h3>
  <ul>
    <li>✅ Quick evaluation and pain relief at first visit</li>
    <li>✅ High-precision surgical drainage with minimal discomfort</li>
    <li>✅ Intra-op check for fistula tract (if suspected)</li>
    <li>✅ Wound care guidance and hygienic dressing support</li>
    <li>✅ Tailored follow-up to detect fistula formation</li>
    <li>✅ Laser or fistula surgery planned only if needed later</li>
    <li>✅ Diabetic and immunocompromised patients get priority wound care protocol</li>
  </ul>
  <p>We treat perianal abscesses not as isolated infections, but as potential precursors to chronic disease — enabling patients to recover fast and stay fistula-free.</p>

  <h3>🎯 Key Learning Pearls</h3>
  <ul>
    <li>A perianal abscess is not a boil, it needs surgical drainage</li>
    <li>Antibiotics alone are never enough</li>
    <li>Persistent abscess = look for fistula</li>
    <li>Pain + swelling + fever near anus = don’t delay consultation</li>
    <li>Prompt drainage saves tissue, time, and long-term consequences</li>
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

export default PerianalAbscess;
