import React, { useState } from "react";
import "./FAQ.css"; // Import the CSS file

const faqData = [
  {
    question: "What are your clinic's consultation timings?",
    answer:
      "Our specialists are available in the evening hours. Please contact us to confirm the exact timing or to book an appointment.",
  },
  {
    question: "Can I consult for a second opinion before surgery?",
    answer: "Absolutely. Dr. Manoj Karthik S provides detailed second opinions to help you make informed decisions about any planned or suggested surgeries.",
  },
  {
    question: "What kind of surgical consultations do you offer?",
    answer: "We provide expert consultations and second opinions for general, laparoscopic, and endoscopic surgical conditions such as hernia, gallbladder issues, piles, fissures, Varicose veins, thyroid & Breast surgeries, Foot ulcer care and more.",
  },
  {
    question: "What services do you provide under women’s health?",
    answer:
      "We offer consultations for menstrual irregularities, PCOS, menopause, pregnancy care, and other gynaecological concerns.",
  },
  {
    question: "Is ultrasound scanning available at the clinic?",
    answer: "Yes, we offer basic scanning services as part of our diagnostic and antenatal care.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <h2 className="faq-heading">Frequently Asked Questions</h2>
      <div className="faq-container">
        {faqData.map((item, index) => (
          <div
            key={index}
            className={`faq-item ${openIndex === index ? "open" : ""}`}
          >
            <div
              className="faq-question"
              onClick={() => toggleFAQ(index)}
            >
              <span>{item.question}</span>
              <span className="faq-icon">
                {openIndex === index ? "˄" : "˅"}
              </span>
            </div>
            {openIndex === index && (
              <div className="faq-answer">{item.answer}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
