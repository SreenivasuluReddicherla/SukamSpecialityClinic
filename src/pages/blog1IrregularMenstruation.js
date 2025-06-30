import React, { useEffect } from 'react';
import './blog1IrregularMenstruation.css';

const IrregularMenstruation = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="menstruation-page">
      <div className="menstruation-container">
        <h1>🩸 Understanding Irregular Menstruation</h1>
        <p className="subtitle">Causes, Signs, and When to Seek Help</p>

        <section>
          <h2>🔍 What is Irregular Menstruation?</h2>
          <p>
            Menstruation is a natural monthly process where the body sheds the uterine lining when pregnancy does not occur.
            A typical menstrual cycle ranges from 21 to 35 days, with bleeding lasting 2 to 7 days. Irregular menstruation
            refers to any deviation from the normal cycle—in timing, flow, or symptoms.
          </p>
        </section>

        <section>
          <h2>🩺 Types of Irregular Periods</h2>
          <ul>
            <li><strong>Oligomenorrhea:</strong> Infrequent periods (cycles longer than 35 days)</li>
            <li><strong>Polymenorrhea:</strong> Frequent periods (cycles shorter than 21 days)</li>
            <li><strong>Amenorrhea:</strong> Absence of periods for more than 3 months</li>
            <li><strong>Menorrhagia:</strong> Heavy or prolonged bleeding</li>
            <li><strong>Metrorrhagia:</strong> Bleeding between periods or irregular spotting</li>
          </ul>
        </section>

        <section>
          <h2>💡 Why This Matters</h2>
          <p>
            Irregular periods can be signs of hormonal imbalances, reproductive system disorders, lifestyle-related changes,
            or even stress. Identifying the cause early helps in preventing complications such as infertility, anemia, or chronic illness.
          </p>
        </section>

        <section>
          <h2>📌 Causes of Irregular Menstruation</h2>
          <h4>1. Hormonal Imbalance</h4>
          <ul>
            <li>Polycystic Ovary Syndrome (PCOS)</li>
            <li>Thyroid Disorders</li>
            <li>Perimenopause</li>
          </ul>

          <h4>2. Lifestyle Factors</h4>
          <ul>
            <li>Stress</li>
            <li>Extreme weight loss or gain</li>
            <li>Excessive exercise</li>
          </ul>

          <h4>3. Medications and Contraceptives</h4>
          <ul>
            <li>Hormonal IUDs</li>
            <li>Birth control pills</li>
            <li>Psychiatric medications</li>
          </ul>

          <h4>4. Chronic Illnesses</h4>
          <ul>
            <li>Diabetes</li>
            <li>Celiac disease</li>
            <li>Liver or kidney dysfunction</li>
          </ul>

          <h4>5. Uterine and Cervical Conditions</h4>
          <ul>
            <li>Fibroids</li>
            <li>Polyps</li>
            <li>Endometriosis</li>
            <li>Pelvic Inflammatory Disease (PID)</li>
          </ul>
        </section>

        <section>
          <h2>🚨 Symptoms to Watch & When to See a Doctor</h2>
          <ul>
            <li>Periods that occur too frequently or rarely</li>
            <li>Very heavy bleeding or bleeding that lasts more than 7 days</li>
            <li>Bleeding between periods or after sex</li>
            <li>Severe pain or cramping</li>
            <li>Missed periods for more than 3 months (not due to pregnancy)</li>
            <li>Sudden changes in cycle patterns</li>
          </ul>
        </section>

        <section>
          <h2>🧪 Diagnosis</h2>
          <ul>
            <li>Pelvic exam</li>
            <li>Ultrasound scan</li>
            <li>Blood tests (hormones, thyroid, prolactin)</li>
            <li>Pap smear or biopsy if needed</li>
          </ul>
        </section>

        <section>
          <h2>📱 Importance of Tracking Your Periods</h2>
          <p>Apps like <strong>Flo</strong>, <strong>Clue</strong>, or <strong>My Calendar</strong> can help track:</p>
          <ul>
            <li>Start and end dates</li>
            <li>Flow levels</li>
            <li>PMS or cramping symptoms</li>
            <li>Spotting or abnormal bleeding</li>
          </ul>
        </section>

        <section>
          <h2>💊 Treatment, Management, and Lifestyle Tips</h2>
          <h4>Medical Treatments</h4>
          <ul>
            <li>Hormonal therapy – Oral contraceptives or hormone pills</li>
            <li>Metformin – Used in PCOS</li>
            <li>Thyroid medication</li>
            <li>Surgery – For fibroids or endometriosis</li>
          </ul>

          <h4>Natural and Lifestyle Approaches</h4>
          <ul>
            <li>Stress management: Yoga, breathing exercises, therapy</li>
            <li>Balanced diet: High-fiber, iron-rich, low-sugar foods</li>
            <li>Healthy weight: BMI between 18.5 and 24.9</li>
            <li>Regular, moderate exercise</li>
          </ul>
        </section>

        <section>
          <h2>🚫 Myth Buster</h2>
          <p><strong>Myth:</strong> “Irregular periods are always due to pregnancy.”<br />
          <strong>Fact:</strong> Dozens of causes exist—hormonal, medical, or lifestyle-based.</p>
        </section>

        <section>
          <h2>🛑 When to Worry</h2>
          <p>
            If irregular periods persist beyond 3 months, are accompanied by severe pain,
            or are impacting your daily life, consult your gynecologist promptly.
          </p>
        </section>

        <section>
          <h2>🎯 Conclusion: Empowering Women Through Awareness</h2>
          <p>
            Irregular menstruation is common but not always normal. It’s your body’s way of signaling
            that something may be off—physically, hormonally, or emotionally. By understanding your cycle,
            tracking changes, and consulting a doctor when needed, you can take control of your reproductive health.
          </p>
        </section>
      </div>
    </div>
  );
};

export default IrregularMenstruation;
