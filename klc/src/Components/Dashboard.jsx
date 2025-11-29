import React, { useState, useEffect } from 'react';

const categoriesData = {
  "Engineering & Technology": [
    "Artificial Intelligence & Data Science", "Bio-Technology", "Civil Engineering", "Computer Science and Engineering",
    "Computer Science & Information Technology", "Electrical and Electronics Engineering",
    "Electronics and Communication Engineering", "Electronics and Computer Science", "Internet Of Things", "Mechanical Engineering"
  ],
  "Science & Arts": [
    "Department of Arts", "Department of Computer Science and Applications", "Department of Chemistry",
    "Department of Food Technology", "Department of Mathematics", "Department of Physics"
  ],
  "Colleges": [
    "KLEF College of Pharmacy", "KLEF College of Law", "KLEF College of Agriculture", "Center for Online Education"
  ],
  "Commerce & Management": ["KLEF College of Commerce & Management (KLBS)"],
  "Architecture": ["KLEF College of Architecture - Department of Architecture"]
};

const domainsData = {
  "Computer Science and Engineering": ["Artificial Intelligence", "Cybersecurity", "Web Development", "Cloud Computing"],
  "Artificial Intelligence & Data Science": ["Machine Learning", "Deep Learning", "AI for Robotics", "AI in Healthcare"],
  "Bio-Technology": ["Genetic Engineering", "Biomedical Research", "Bioinformatics", "Pharma Tech"]
};

const roadmapData = {
  // 🌟 MAIN CATEGORIES (Colleges)
  "KLEF College of Engineering": [
    "Department of Computer Science and Engineering",
    "Department of Electronics and Communication Engineering",
    "Department of Electrical and Electronics Engineering",
    "Department of Mechanical Engineering",
    "Department of Civil Engineering",
    "Department of Information Technology",
    "Department of Artificial Intelligence & Data Science",
  ],

  "KLEF College of Science & Arts": [
    "Department of Arts",
    "Department of Computer Science and Applications",
    "Department of Chemistry",
    "Department of Food Technology",
    "Department of Mathematics",
    "Department of Physics",
  ],

  "KLEF College of Commerce & Management (KLBS)": [
    "Department of Commerce",
    "Department of Business Administration",
  ],

  "KLEF College of Architecture": [
    "Department of Architecture",
  ],

  "KLEF College of Pharmacy": [
    "Department of Pharmacy",
  ],

  "KLEF College of Law": [
    "Department of Law",
  ],

  "KLEF College of Agriculture": [
    "Department of Agriculture",
  ],

  "Center for Online Education": [
    "Online Degree Programs",
    "Certification Courses",
  ],

  // =====================
  // 🎓 ENGINEERING DEPARTMENTS
  // =====================
  "Department of Computer Science and Engineering": [
    "Web Development",
    "Artificial Intelligence & Machine Learning",
    "Data Science",
    "Cybersecurity",
    "Cloud Computing",
    "App Development",
    "DevOps",
  ],

  "Department of Electronics and Communication Engineering": [
    "Embedded Systems",
    "Internet of Things (IoT)",
    "VLSI Design",
    "Wireless Communication",
  ],

  "Department of Electrical and Electronics Engineering": [
    "Power Systems",
    "Control Systems",
    "Embedded Systems",
    "Renewable Energy",
  ],

  "Department of Mechanical Engineering": [
    "Design & Manufacturing",
    "Automation & Robotics",
    "Thermal Engineering",
    "CAD/CAM/CAE",
  ],

  "Department of Civil Engineering": [
    "Structural Engineering",
    "Construction Management",
    "Transportation Engineering",
    "Environmental Engineering",
  ],

  "Department of Information Technology": [
    "Web Development",
    "Data Analytics",
    "Cybersecurity",
    "Cloud Computing",
  ],

  "Department of Artificial Intelligence & Data Science": [
    "Machine Learning",
    "Deep Learning",
    "Natural Language Processing",
    "Data Engineering",
  ],

  // =====================
  // 🎓 SCIENCE & ARTS DEPARTMENTS
  // =====================
  "Department of Arts": [
    "Communication Skills",
    "Creative Writing",
    "Public Administration",
    "Psychology Basics",
  ],

  "Department of Computer Science and Applications": [
    "Programming Fundamentals",
    "Web Application Development",
    "Data Structures",
    "Database Systems",
  ],

  "Department of Chemistry": [
    "Physical Chemistry",
    "Organic Chemistry",
    "Analytical Techniques",
    "Industrial Chemistry",
  ],

  "Department of Food Technology": [
    "Food Processing",
    "Food Quality Control",
    "Nutrition Science",
    "Food Packaging Technology",
  ],

  "Department of Mathematics": [
    "Linear Algebra",
    "Calculus & Differential Equations",
    "Statistics & Probability",
    "Discrete Mathematics",
  ],

  "Department of Physics": [
    "Quantum Mechanics",
    "Optics & Lasers",
    "Solid State Physics",
    "Nuclear Physics",
  ],

  // =====================
  // 🎓 COMMERCE & MANAGEMENT
  // =====================
  "Department of Commerce": [
    "Accounting Fundamentals",
    "Business Economics",
    "Taxation",
    "Corporate Finance",
  ],

  "Department of Business Administration": [
    "Management Principles",
    "Marketing Management",
    "Human Resource Management",
    "Entrepreneurship Development",
  ],

  // =====================
  // 🎓 ARCHITECTURE
  // =====================
  "Department of Architecture": [
    "Architectural Design",
    "Building Materials & Construction",
    "Urban Planning",
    "Sustainable Architecture",
  ],

  // =====================
  // 🎓 PHARMACY, LAW, AGRICULTURE, ONLINE
  // =====================
  "Department of Pharmacy": [
    "Pharmaceutical Chemistry",
    "Pharmacology",
    "Pharmaceutics",
    "Pharmacognosy",
  ],

  "Department of Law": [
    "Constitutional Law",
    "Criminal Law",
    "Corporate Law",
    "Intellectual Property Rights",
  ],

  "Department of Agriculture": [
    "Crop Science",
    "Soil Science",
    "Agricultural Engineering",
    "Agri-Business Management",
  ],

  "Online Degree Programs": [
    "BBA Online",
    "BCA Online",
    "MBA Online",
    "MCA Online",
  ],

  "Certification Courses": [
    "Digital Marketing",
    "Cloud Computing",
    "AI & ML",
    "Cybersecurity",
  ],

  // =====================
  // 💻 DETAILED ROADMAPS FOR ENGINEERING DOMAINS
  // =====================

  "Web Development": [
    "Learn HTML, CSS, JavaScript",
    "Understand Responsive Design (Flexbox, Grid)",
    "Learn Git & GitHub",
    "Master a Frontend Framework (React / Angular)",
    "Learn Backend (Node.js / Django / Spring Boot)",
    "Work with Databases (MongoDB / MySQL)",
    "Build Full Stack Projects",
    "Deploy on Cloud Platforms (Vercel / Netlify / AWS)",
  ],

  "Artificial Intelligence & Machine Learning": [
    "Learn Python & Mathematics (Linear Algebra, Stats)",
    "Understand Data Preprocessing",
    "Learn Supervised & Unsupervised Learning",
    "Explore Neural Networks (Deep Learning)",
    "Work on AI Projects (Image, NLP, Prediction)",
    "Learn Model Deployment & MLOps",
  ],

  "Data Science": [
    "Learn Python, NumPy, Pandas",
    "Understand Data Visualization (Matplotlib, Seaborn)",
    "Study Statistics & Machine Learning Basics",
    "Learn SQL & Power BI",
    "Build Data Analysis Projects",
  ],

  "Cybersecurity": [
    "Learn Networking & OS Concepts",
    "Understand Cryptography & Firewalls",
    "Explore Ethical Hacking Tools (Nmap, Wireshark)",
    "Study Web Security (OWASP Top 10)",
    "Build Security Labs & Practice CTF Challenges",
  ],

  "Cloud Computing": [
    "Understand Cloud Fundamentals (AWS / Azure / GCP)",
    "Learn Cloud Deployment & Scaling",
    "Understand Serverless Architecture",
    "Learn Docker & Kubernetes Basics",
    "Deploy Full Stack Apps on Cloud",
  ],

  "App Development": [
    "Learn Java/Kotlin for Android or Swift for iOS",
    "Understand UI/UX for Mobile",
    "Learn Cross-Platform Tools (Flutter / React Native)",
    "Connect APIs & Databases (Firebase, REST)",
    "Build and Publish Apps",
  ],

  "DevOps": [
    "Learn Linux & Command Line",
    "Understand Git, Jenkins, and CI/CD",
    "Learn Docker & Kubernetes",
    "Practice Infrastructure as Code (Terraform)",
    "Deploy CI/CD Pipelines for Projects",
  ],
};

const Dashboard = ({ onLogout }) => {
  const [currentCategory, setCurrentCategory] = useState(null);
  const [currentDept, setCurrentDept] = useState(null);
  const [currentDomain, setCurrentDomain] = useState(null);
  const [currentCourse, setCurrentCourse] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    department: "",
    preferredDate: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert(`Counselling booked for ${formData.name} (${formData.email}) on ${formData.preferredDate} in ${formData.department}`);
    setFormData({ name: "", email: "", department: currentDept || "", preferredDate: "" });
  };

  const goBack = () => {
    if (currentCourse) setCurrentCourse(null);
    else if (currentDomain) setCurrentDomain(null);
    else if (currentDept) setCurrentDept(null);
    else setCurrentCategory(null);
  };

  const currentHeading =
    currentCourse ||
    currentDomain ||
    currentDept ||
    currentCategory ||
    "University Career Guidance System";

  const cardStyle = {
    border: "2px solid #00ccff",
    borderRadius: "10px",
    padding: "20px",
    minWidth: "220px",
    textAlign: "center",
    backgroundColor: "transparent",
    color: "white",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "0.3s",
  };

  const containerStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    gap: "30px",
    paddingTop: "40px",
  };

  const defaultOptions = ["Career Exploration", "Explore Basic Courses", "Book Counselling", "Contact Support"];

  const getDomainsForDept = (dept) => {
    const domains = domainsData[dept] || [];
    return [...domains, ...defaultOptions];
  };

  useEffect(() => {
    setFormData(prev => ({ ...prev, department: currentDept || "" }));
  }, [currentDept]);

  return (
    <div style={{
      fontFamily: "Arial, sans-serif",
      minHeight: "100vh",
      background: "linear-gradient(135deg, #002b5b, #003f7f)",
      padding: "20px",
      color: "#fff"
    }}>
      {/* Navbar */}
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        paddingBottom: "20px"
      }}>
        <h2 style={{ margin: 0, color: "#00ccff" }}>Student Dashboard</h2>
        <button
          onClick={onLogout}
          style={{
            padding: "8px 16px",
            borderRadius: "5px",
            border: "none",
            cursor: "pointer",
            backgroundColor: "#ff4d4d",
            color: "white",
            fontWeight: "bold"
          }}
        >
          Logout
        </button>
      </div>

      {/* Heading */}
      <h2 style={{
        textAlign: "center",
        color: "#00ffcc",
        marginBottom: "20px",
        fontSize: "24px"
      }}>{currentHeading}</h2>

      {/* Main Navigation */}
      <div style={containerStyle}>
        {!currentCategory && (
          Object.keys(categoriesData).map((category) => (
            <div key={category} style={cardStyle} onClick={() => setCurrentCategory(category)}>
              {category}
            </div>
          ))
        )}

        {currentCategory && !currentDept && (
          categoriesData[currentCategory].map((dept) => (
            <div key={dept} style={cardStyle} onClick={() => setCurrentDept(dept)}>
              {dept}
            </div>
          ))
        )}

        {currentDept && !currentDomain && (
          getDomainsForDept(currentDept).map((domain) => (
            <div key={domain} style={cardStyle} onClick={() => setCurrentDomain(domain)}>
              {domain}
            </div>
          ))
        )}

        {/* Explore Basic Courses → Show list of courses */}
        {currentDomain === "Explore Basic Courses" && !currentCourse && (
          roadmapData["Explore Basic Courses"].map((course) => (
            <div key={course} style={cardStyle} onClick={() => setCurrentCourse(course)}>
              {course}
            </div>
          ))
        )}

        {/* Show Course-specific roadmap */}
        {currentCourse && (
          roadmapData[currentCourse]?.map((step, index) => (
            <div key={index} style={{ ...cardStyle, minWidth: "300px", backgroundColor: "#004466" }}>
              {step}
            </div>
          ))
        )}

        {/* Normal Domain Roadmaps */}
        {currentDomain && !["Book Counselling", "Contact Support", "Explore Basic Courses"].includes(currentDomain) && !currentCourse && (
          (roadmapData[currentDomain] || ["Explore Basic Courses", "Connect with Experts", "Start Career"]).map((step, index) => (
            <div key={index} style={{ ...cardStyle, minWidth: "300px", backgroundColor: "#004466" }}>
              {step}
            </div>
          ))
        )}
      </div>

      {/* Book Counselling Form */}
      {currentDomain === "Book Counselling" && (
        <div style={{
          marginTop: "40px",
          padding: "20px",
          border: "2px solid #00ccff",
          borderRadius: "10px",
          backgroundColor: "#004466",
          color: "#00ffcc",
          width: "320px",
          margin: "40px auto"
        }}>
          <h3 style={{ textAlign: "center" }}>Book Counselling</h3>
          <form onSubmit={handleFormSubmit} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
            <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleInputChange} required style={{ padding: "8px", borderRadius: "5px", border: "none" }} />
            <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleInputChange} required style={{ padding: "8px", borderRadius: "5px", border: "none" }} />
            <input type="text" name="department" placeholder="Department" value={formData.department} readOnly style={{ padding: "8px", borderRadius: "5px", border: "none", backgroundColor: "#002b5b" }} />
            <input type="date" name="preferredDate" value={formData.preferredDate} onChange={handleInputChange} required style={{ padding: "8px", borderRadius: "5px", border: "none" }} />
            <button type="submit" style={{ backgroundColor: "#00ccff", color: "#003f7f", padding: "10px", fontWeight: "bold", borderRadius: "5px", border: "none", cursor: "pointer" }}>Book Now</button>
          </form>
        </div>
      )}

      {/* Contact Support */}
      {currentDomain === "Contact Support" && (
        <div style={{
          marginTop: "40px",
          padding: "20px",
          border: "2px solid #00ccff",
          borderRadius: "10px",
          backgroundColor: "#004466",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "300px",
          margin: "40px auto",
          color: "#00ffcc",
          gap: "10px"
        }}>
          <h3 style={{ margin: 0 }}>Need Help?</h3>
          <p>Contact our Career Counsellor below:</p>
          <div style={{ display: "flex", gap: "10px" }}>
            <button onClick={() => alert("Chat started with KL Counsellor!")} style={{ padding: "8px 12px", borderRadius: "5px", border: "none", backgroundColor: "#007bff", color: "white", cursor: "pointer" }}>💬 Chat Now</button>
            <button onClick={() => alert("Calling Career Counsellor...")} style={{ padding: "8px 12px", borderRadius: "5px", border: "none", backgroundColor: "#28a745", color: "white", cursor: "pointer" }}>📞 Call Counsellor</button>
          </div>
          <p style={{ marginTop: "15px" }}>Email: support@university.edu</p>
          <p>Phone: +1-234-567-890</p>
        </div>
      )}

      {/* Back Button */}
      {(currentCategory || currentDept || currentDomain || currentCourse) && (
        <div style={{ display: "flex", justifyContent: "center", marginTop: "30px" }}>
          <button onClick={goBack} style={{
            padding: "10px 20px",
            cursor: "pointer",
            borderRadius: "5px",
            border: "2px solid #00ccff",
            backgroundColor: "transparent",
            color: "#fff",
            fontWeight: "bold"
          }}>Back</button>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
