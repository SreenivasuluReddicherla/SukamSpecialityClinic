import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./BlogDetails.css";
import img1 from "../assets/1.jpg"; // Placeholder
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";

const allBlogs = [
    {
      id: 1,
      image: img1,
      title: "Navigating the Digital Health Revolution: Your Pocket-sized Wellness Companion",
      author: "Dr. Manoj Karthik",
      date: "March 28, 2025",
      content: `
  Hey tech-savvy pals! Today, we're embarking on a journey into the digital health realm...
  
  1. "Health Apps 101: Your Personal Health Coach"  
  Imagine having a health coach at your fingertips 24/7...
  
  2. "Wearables: The Stylish Health Gurus on Your Wrist"  
  Forget the plain old wristwatch...
  
  3. "Telehealth: The Virtual Doctor's Office in Your Living Room"  
  Who needs waiting rooms when you have a virtual doctor's office?...
  
  4. "Mindfulness in the Digital Age: Yes, It's Possible!"  
  Digital mindfulness? Absolutely!...
  
  5. "Healthy Habits, One App at a Time"  
  Building healthy habits just got a tech upgrade...
  
  6. "Virtual Fitness Classes: Your Gym, Anytime, Anywhere"  
  Bid farewell to crowded gyms!...
  
  7. "Sleep Tech: Hacking Your Way to Dreamland"  
  Tired of counting sheep? Let's explore sleep tech...
  
  8. "Digital Detox: Balancing Screen Time for a Healthier You"  
  We'll share tips and apps that help you manage your screen time...
  
  Ready to embark on this tech-infused wellness adventure? Grab your gadgets and let’s go!
      `
    },
    {
      id: 2,
      image: img2,
      title: "How Nutrition Affects Fertility?",
      author: "Dr. Anitha A Manoj",
      date: "March 25, 2025",
      content: `
  Nutrition plays a vital role in fertility for both men and women. The right foods can enhance reproductive health and increase the chances of conception.
  
  1. "Balance Your Hormones with the Right Diet"  
  Eating a well-balanced diet helps regulate hormones like estrogen and progesterone which are crucial for ovulation and pregnancy.
  
  2. "Antioxidants and Egg Quality"  
  Antioxidants found in fruits, vegetables, and nuts help protect eggs and sperm from free radical damage, improving fertility outcomes.
  
  3. "Folate and Preconception Health"  
  Folic acid is essential for preventing birth defects and supporting early pregnancy. Include leafy greens and fortified cereals in your diet.
  
  4. "Healthy Fats and Fertility"  
  Omega-3 fatty acids support hormone production and ovulation. Add walnuts, flaxseeds, and fatty fish like salmon to your meals.
  
  5. "Limit Processed Foods and Sugar"  
  Refined sugars and trans fats may lead to insulin resistance and ovulation issues. Choose whole foods whenever possible.
  
  6. "Hydration and Cervical Mucus"  
  Staying hydrated helps maintain optimal cervical mucus which aids sperm movement.
  
  A balanced, nutrient-rich diet lays the foundation for reproductive success. Begin healthy habits today for a healthier tomorrow.
      `
    },
    {
      id: 3,
      image: img3,
      title: "The Role of Stress in Infertility",
      author: "Dr. Anitha A Manoj",
      date: "March 22, 2025",
      content: `
  Stress is more than just an emotional burden—it can significantly affect reproductive health in both men and women.
  
  1. "How Stress Affects Hormones"  
  Chronic stress disrupts the hypothalamus-pituitary-ovarian axis, affecting ovulation and menstrual regularity.
  
  2. "Cortisol and Reproductive Suppression"  
  Elevated cortisol levels suppress the release of gonadotropin-releasing hormone (GnRH), which reduces fertility hormones.
  
  3. "Impact on Men"  
  In men, stress can lead to lower sperm count, reduced libido, and erectile dysfunction.
  
  4. "Mind-Body Interventions"  
  Practices like yoga, meditation, and mindfulness reduce cortisol levels and improve fertility outcomes.
  
  5. "Emotional Support Matters"  
  Talking to a counselor or joining support groups helps manage emotional stress during fertility treatments.
  
  Reducing stress not only supports overall wellness but can significantly boost fertility. Take time for self-care—it’s essential.
      `
    },
    {
      id: 4,
      image: img1,
      title: "Tips for Healthy Pregnancy",
      author: "Dr. Kavya S",
      date: "March 18, 2025",
      content: `
  Pregnancy is a transformative journey that demands proper care and attention. Here are essential tips for a healthy pregnancy:
  
  1. "Prenatal Checkups"  
  Regular doctor visits help monitor fetal development and address any complications early.
  
  2. "Balanced Nutrition"  
  Include a variety of fruits, vegetables, whole grains, protein, and calcium-rich foods in your daily meals.
  
  3. "Hydration and Supplements"  
  Drink plenty of water and take prescribed prenatal vitamins, especially folic acid and iron.
  
  4. "Stay Active"  
  Low-impact exercises like walking and prenatal yoga can improve circulation and reduce pregnancy discomfort.
  
  5. "Avoid Harmful Substances"  
  Say no to alcohol, smoking, and unprescribed medications during pregnancy.
  
  6. "Sleep and Mental Health"  
  Ensure proper rest and seek help if experiencing anxiety or mood swings.
  
  A healthy pregnancy starts with informed decisions. Embrace this journey with care and confidence.
      `
    },
    {
      id: 5,
      image: img2,
      title: "Male Fertility Myths Debunked",
      author: "Dr. Manoj Karthik",
      date: "March 14, 2025",
      content: `
  There are many myths surrounding male fertility that can lead to confusion and misinformation. Let’s separate fact from fiction.
  
  1. "Myth: Age Doesn’t Affect Male Fertility"  
  Truth: Sperm quality decreases with age, increasing the risk of genetic issues.
  
  2. "Myth: Lifestyle Doesn’t Matter"  
  Truth: Smoking, alcohol, and poor diet can severely affect sperm health.
  
  3. "Myth: Daily Intercourse Increases Chances"  
  Truth: Quality over quantity. Having intercourse every 2–3 days is ideal.
  
  4. "Myth: Boxers Are Better Than Briefs"  
  Truth: While overheating can affect sperm, underwear choice isn’t the sole factor.
  
  5. "Myth: Supplements Always Work"  
  Truth: Some supplements help, but they aren't a magic cure. Consult a specialist before use.
  
  Understanding male fertility empowers couples to make informed choices on their journey to parenthood.
      `
    }
  ];
  

const BlogDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const blog = allBlogs.find((b) => b.id === parseInt(id));

  if (!blog) {
    return <div className="blog-details">Blog not found.</div>;
  }

  return (
    <div className="blog-details">
      <button className="back-button" onClick={() => navigate(-1)}>
        ← Back
      </button>
      <img src={blog.image} alt={blog.title} className="blog-detail-image" />
      <div className="blog-detail-content">
        <h1>{blog.title}</h1>
        <p className="blog-detail-meta">
          By {blog.author} | {blog.date}
        </p>
        <p className="blog-detail-text">
          {blog.content.split("\n").map((para, index) => (
            <span key={index}>
              {para}
              <br />
              <br />
            </span>
          ))}
        </p>
      </div>
    </div>
  );
};

export default BlogDetails;
