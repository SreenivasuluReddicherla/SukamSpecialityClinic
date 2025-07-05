import React, { useState } from 'react';
import './RP1InfertilityInsights.css';

const quizData = [
  {
    question: "GERD is caused by:",
    options: [
      "Excess bile production",
      "Weak LES allowing acid reflux",
      "Colon inflammation",
      "Lack of digestive enzymes"
    ],
    answer: "Weak LES allowing acid reflux"
  },
  {
    question: "Classic symptom of GERD:",
    options: [
      "Right flank pain",
      "Heartburn",
      "Abdominal bloating",
      "Headache"
    ],
    answer: "Heartburn"
  },
  {
    question: "Reflux is worsened by:",
    options: [
      "Exercise",
      "Lying down after meals",
      "Drinking warm water",
      "Eating early"
    ],
    answer: "Lying down after meals"
  },
  {
    question: "Best diagnostic test for GERD complications:",
    options: [
      "X-ray abdomen",
      "Endoscopy",
      "Urine culture",
      "Colonoscopy"
    ],
    answer: "Endoscopy"
  },
  {
    question: "Barrett’s esophagus is:",
    options: [
      "Liver condition",
      "Precancerous esophageal change",
      "Colon inflammation",
      "Stomach ulcer"
    ],
    answer: "Precancerous esophageal change"
  },
  {
    question: "Which is not a GERD symptom?",
    options: [
      "Regurgitation",
      "Chest burning",
      "Lower back pain",
      "Sore throat"
    ],
    answer: "Lower back pain"
  },
  {
    question: "Proton pump inhibitors work by:",
    options: [
      "Blocking bile",
      "Neutralizing acid",
      "Reducing acid production",
      "Tightening LES"
    ],
    answer: "Reducing acid production"
  },
  {
    question: "Acid regurgitation into throat can cause:",
    options: [
      "Dry skin",
      "Hoarseness",
      "Weight gain",
      "Backache"
    ],
    answer: "Hoarseness"
  },
  {
    question: "One safe food for GERD:",
    options: [
      "Fried chicken",
      "Mint tea",
      "Boiled vegetables",
      "Citrus juice"
    ],
    answer: "Boiled vegetables"
  },
  {
    question: "Fundoplication is:",
    options: [
      "Gallbladder surgery",
      "Hiatus hernia repair",
      "Anti-reflux procedure",
      "Colon operation"
    ],
    answer: "Anti-reflux procedure"
  },
  {
    question: "Occasional GERD becomes a disease if:",
    options: [
      "Once a month",
      "Daily or weekly symptoms",
      "After spicy meals only",
      "When weight loss occurs"
    ],
    answer: "Daily or weekly symptoms"
  },
  {
    question: "Which can worsen GERD?",
    options: [
      "Caffeine",
      "Milk",
      "Carrots",
      "Banana"
    ],
    answer: "Caffeine"
  },
  {
    question: "Prokinetic drugs help by:",
    options: [
      "Lowering blood sugar",
      "Tightening LES and speeding gastric emptying",
      "Neutralizing acid",
      "Reducing fever"
    ],
    answer: "Tightening LES and speeding gastric emptying"
  },
  {
    question: "GERD is more common in:",
    options: [
      "Thin teenagers",
      "Obese adults",
      "Athletes",
      "Vegans"
    ],
    answer: "Obese adults"
  },
  {
    question: "Chronic untreated GERD may lead to:",
    options: [
      "Gallstones",
      "Esophageal cancer",
      "Diarrhea",
      "Migraine"
    ],
    answer: "Esophageal cancer"
  }
];


const GERD = () => {
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
      <h1>🟠 GERD – Gastroesophageal Reflux Disease</h1>
      <p className="lead">“Acid that climbs and burns where it shouldn’t.”</p>

      <section className="info-section">
  <h3>🔥️ Understanding GERD: A Backward Flow that Burns</h3>
  <p>
    GERD occurs when acid and stomach contents flow backward into the esophagus, causing heartburn, regurgitation, and in chronic cases, damage to the esophageal lining.
  </p>
  <p>
    This backflow (reflux) may seem harmless at first—but when it becomes frequent or persistent, it needs medical attention.
  </p>

  <h3>❓ Why Does It Happen?</h3>
  <p>
    GERD is primarily caused by dysfunction of the Lower Esophageal Sphincter (LES), the valve between the esophagus and the stomach.
  </p>
  <p>Other contributing factors include:</p>
  <ul>
    <li>Hiatal hernia</li>
    <li>Obesity</li>
    <li>Delayed gastric emptying</li>
    <li>Smoking and alcohol</li>
    <li>Pregnancy</li>
    <li>Medications (NSAIDs, antidepressants, calcium channel blockers)</li>
    <li>Diet: spicy foods, caffeine, chocolate, citrus, mint</li>
  </ul>

  <h3>📋 Classic Symptoms to Watch For</h3>
  <table>
    <thead>
      <tr><th>Symptom</th><th>Description</th></tr>
    </thead>
    <tbody>
      <tr><td>Heartburn</td><td>Burning sensation behind the chest, after meals or lying down</td></tr>
      <tr><td>Regurgitation</td><td>Bitter or sour fluid in throat or mouth</td></tr>
      <tr><td>Chest discomfort</td><td>Often mimics cardiac pain, related to meals</td></tr>
      <tr><td>Hoarseness</td><td>Especially in the morning</td></tr>
      <tr><td>Chronic cough</td><td>Dry, persistent, worse when lying down</td></tr>
      <tr><td>Sore throat / lump sensation</td><td>Due to acid irritation</td></tr>
      <tr><td>Bad breath & dental erosion</td><td>From long-term acid exposure</td></tr>
    </tbody>
  </table>

  <h3>🚨 Alarm Features That Need Urgent Evaluation</h3>
  <ul>
    <li>Difficulty swallowing (dysphagia)</li>
    <li>Painful swallowing (odynophagia)</li>
    <li>Unexplained weight loss</li>
    <li>Vomiting blood or black stools</li>
    <li>Long-standing reflux (&gt;10 years)</li>
    <li>Anemia or fatigue</li>
  </ul>

  <h3>👥 Who Is at Risk?</h3>
  <ul>
    <li>Obesity and central weight gain</li>
    <li>Smokers</li>
    <li>Pregnant women</li>
    <li>People with poor diet and sedentary lifestyle</li>
    <li>Chronic antacid users without evaluation</li>
  </ul>

  <h3>🔬 How GERD Is Diagnosed</h3>
  <ol>
    <li><strong>Clinical diagnosis:</strong> Based on symptoms and treatment response</li>
    <li><strong>Upper GI Endoscopy:</strong> Visualizes inflammation, ulcers, Barrett’s esophagus</li>
    <li><strong>24-hour pH monitoring:</strong> Assesses acid reflux severity</li>
    <li><strong>Esophageal manometry:</strong> Evaluates LES and muscle strength</li>
    <li><strong>Barium swallow:</strong> Detects structural issues like hernia or stricture</li>
  </ol>

  <h3>🩺️ Treatment Strategy: Relief, Repair, and Prevention</h3>
  <ol>
    <li><strong>Lifestyle Changes</strong>
      <ul>
        <li>Elevate bed head 6–8 inches</li>
        <li>No lying down for 2–3 hours after meals</li>
        <li>Eat smaller, frequent meals</li>
        <li>Lose weight if overweight</li>
        <li>Avoid smoking, alcohol, tight clothing</li>
      </ul>
    </li>
    <li><strong>Dietary Adjustments</strong>
      <ul>
        <li>Avoid: citrus, tomatoes, caffeine, chocolate, mint, spicy food, carbonated drinks</li>
      </ul>
    </li>
    <li><strong>Medications</strong>
      <table>
        <thead>
          <tr><th>Medication</th><th>Action</th></tr>
        </thead>
        <tbody>
          <tr><td>Antacids</td><td>Quick symptom relief (e.g., Gelusil)</td></tr>
          <tr><td>H2 blockers</td><td>Reduce acid production (e.g., ranitidine)</td></tr>
          <tr><td>PPIs</td><td>Long-term suppression (e.g., omeprazole)</td></tr>
          <tr><td>Prokinetics</td><td>Improve LES tone and motility (e.g., domperidone)</td></tr>
        </tbody>
      </table>
    </li>
    <li><strong>Surgical Options</strong>
      <ul>
        <li><strong>Fundoplication:</strong> Strengthens LES by wrapping upper stomach</li>
        <li><strong>LINX device:</strong> Magnetic ring to prevent reflux</li>
        <li><strong>Indicated when:</strong> Symptoms are refractory, Barrett’s present, large hernia exists</li>
      </ul>
    </li>
  </ol>

  <h3>⚠️ Complications of Untreated GERD</h3>
  <ul>
    <li>Esophagitis and ulcers</li>
    <li>Barrett’s esophagus (precancerous)</li>
    <li>Strictures (narrowing)</li>
    <li>Esophageal cancer</li>
    <li>Chronic laryngitis, asthma, dental damage</li>
  </ul>

  <h3>📊 GERD vs Other Conditions</h3>
  <table>
    <thead>
      <tr><th>Feature</th><th>GERD</th><th>Peptic Ulcer</th><th>Heart Attack</th></tr>
    </thead>
    <tbody>
      <tr><td>Onset</td><td>After meals</td><td>Empty stomach</td><td>Exertion</td></tr>
      <tr><td>Relieved by food</td><td>No</td><td>Yes</td><td>No</td></tr>
      <tr><td>Other signs</td><td>Regurgitation</td><td>No regurgitation</td><td>Radiation to jaw/arm, sweating</td></tr>
    </tbody>
  </table>

  <h3>👨‍⚕️ Our Clinic’s GERD Management Protocol</h3>
  <ul>
    <li>✅ Personalized dietary & lifestyle counseling</li>
    <li>✅ On-site endoscopy (OGD)</li>
    <li>✅ Tailored PPI and prokinetic prescriptions</li>
    <li>✅ Barrett’s and hernia evaluation for long-standing cases</li>
    <li>✅ Specialist referral for non-responders</li>
    <li>✅ Easy-to-understand multilingual GERD handouts</li>
  </ul>

  <p><strong>At Sukam, we manage GERD with expertise and empathy — from diagnosis to daily living guidance.</strong></p>
</section>


      <section className="quiz-section">
        <h2>🧠 Quick Quiz — GERD</h2>

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

export default GERD;
