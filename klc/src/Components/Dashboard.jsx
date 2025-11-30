import React, { useState } from "react";

const categoriesData = {
  "Engineering & Technology": [
    "Artificial Intelligence & Data Science",
    "Bio-Technology",
    "Civil Engineering",
    "Computer Science and Engineering",
    "Computer Science & Information Technology",
    "Electrical and Electronics Engineering",
    "Electronics and Communication Engineering",
    "Electronics and Computer Science",
    "Internet Of Things",
    "Mechanical Engineering",
  ],
  "Science & Arts": [
    "Department of Arts",
    "Department of Computer Science and Applications",
    "Department of Chemistry",
    "Department of Food Technology",
    "Department of Mathematics",
    "Department of Physics",
  ],
  "Colleges": [
    "KLEF College of Pharmacy",
    "KLEF College of Law",
    "KLEF College of Agriculture",
    "Center for Online Education",
  ],
  "Commerce & Management": ["KLEF College of Commerce & Management (KLBS)"],
  "Architecture": ["KLEF College of Architecture - Department of Architecture"],
};

const roadmapData = {
  "Artificial Intelligence & Data Science": [
    "Learn Python & Mathematics",
    "Data Preprocessing & Visualization",
    "Supervised & Unsupervised Learning",
    "Deep Learning & Neural Networks",
    "AI Projects & Deployment",
  ],
  "Bio-Technology": [
    "Genetic Engineering Basics",
    "Biomedical Research Techniques",
    "Bioinformatics Fundamentals",
    "Pharma Tech Applications",
  ],
  "Civil Engineering": [
    "Structural Design Principles",
    "Construction Management",
    "Transportation Engineering",
    "Environmental Engineering",
  ],
  "Computer Science and Engineering": [
    "Programming Fundamentals",
    "Web Development",
    "Data Structures & Algorithms",
    "AI & Cloud Computing",
  ],
};

const Dashboard = ({ onLogout }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedDept, setSelectedDept] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);
  const [formData, setFormData] = useState({ name: "", email: "", preferredDate: "", department: "" });

  const sidebarStyle = {
    width: "250px",
    minHeight: "100vh",
    backgroundColor: "#003f7f",
    color: "#00ccff",
    padding: "20px",
  };

  const contentStyle = {
    flex: 1,
    padding: "20px",
    color: "#fff",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  const cardStyle = {
    padding: "10px 15px",
    borderRadius: "5px",
    marginBottom: "8px",
    cursor: "pointer",
    backgroundColor: "#004466",
    transition: "0.2s",
  };

  const flashCardStyle = {
    padding: "20px",
    backgroundColor: "#00ccff",
    color: "#003f7f",
    borderRadius: "10px",
    minWidth: "220px",
    textAlign: "center",
    fontWeight: "bold",
    cursor: "pointer",
    margin: "10px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.3)",
  };

  const containerStyle = {
    display: "flex",
    minHeight: "100vh",
    fontFamily: "Arial, sans-serif",
    background: "linear-gradient(135deg, #002b5b, #003f7f)",
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert(
      `Counselling booked for ${formData.name} (${formData.email}) on ${formData.preferredDate} for ${formData.department}`
    );
    setFormData({ name: "", email: "", preferredDate: "", department: "" });
    setSelectedOption(null);
  };

  return (
    <div style={containerStyle}>
      {/* Sidebar */}
      <div style={sidebarStyle}>
        <h2 style={{ color: "#00ffcc", marginBottom: "30px" }}>Student Dashboard</h2>
        <button
          onClick={onLogout}
          style={{
            padding: "8px 16px",
            borderRadius: "5px",
            border: "none",
            cursor: "pointer",
            backgroundColor: "#ff4d4d",
            color: "white",
            fontWeight: "bold",
            marginBottom: "30px",
          }}
        >
          Logout
        </button>

        {Object.keys(categoriesData).map((category) => (
          <div key={category}>
            <div
              style={{
                ...cardStyle,
                backgroundColor: selectedCategory === category ? "#00ccff" : "#004466",
                color: selectedCategory === category ? "#003f7f" : "#00ccff",
                fontWeight: selectedCategory === category ? "bold" : "normal",
              }}
              onClick={() => {
                setSelectedCategory(category);
                setSelectedDept(null);
                setSelectedOption(null);
              }}
            >
              {category}
            </div>

            {selectedCategory === category && (
              <div style={{ marginLeft: "15px", marginTop: "5px" }}>
                {categoriesData[category].map((dept) => (
                  <div
                    key={dept}
                    style={{
                      ...cardStyle,
                      backgroundColor: selectedDept === dept ? "#00ffcc" : "#003366",
                      color: selectedDept === dept ? "#003f7f" : "#00ccff",
                      fontWeight: selectedDept === dept ? "bold" : "normal",
                      fontSize: "0.9em",
                    }}
                    onClick={() => {
                      setSelectedDept(dept);
                      setSelectedOption(null);
                      setFormData((prev) => ({ ...prev, department: dept }));
                    }}
                  >
                    {dept}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Middle Panel */}
      <div style={contentStyle}>
        <h2>{selectedDept || selectedCategory || "University Career Guidance System"}</h2>

        {/* Options */}
        {selectedDept && !selectedOption && (
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "30px" }}>
            {["Explore Basic Courses", "Book Counselling", "Contact Support"].map((option) => (
              <div
                key={option}
                style={{ ...flashCardStyle, minWidth: "250px" }}
                onClick={() => setSelectedOption(option)}
              >
                {option}
              </div>
            ))}
          </div>
        )}

        {/* Explore Basic Courses */}
        {selectedOption === "Explore Basic Courses" && (
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", marginTop: "20px" }}>
            {(roadmapData[selectedDept] || ["No courses available"]).map((course, index) => (
              <div key={index} style={flashCardStyle}>
                {course}
              </div>
            ))}
            <button
              onClick={() => setSelectedOption(null)}
              style={{ ...flashCardStyle, backgroundColor: "#004466", color: "#00ccff", minWidth: "150px" }}
            >
              Back
            </button>
          </div>
        )}

        {/* Book Counselling */}
        {selectedOption === "Book Counselling" && (
          <div style={{ marginTop: "20px" }}>
            <h3>Book Counselling for {selectedDept}</h3>
            <form
              onSubmit={handleFormSubmit}
              style={{ display: "flex", flexDirection: "column", gap: "10px", width: "300px" }}
            >
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleFormChange}
                required
                style={{ padding: "8px", borderRadius: "5px", border: "none" }}
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleFormChange}
                required
                style={{ padding: "8px", borderRadius: "5px", border: "none" }}
              />
              <input
                type="text"
                name="department"
                value={formData.department}
                readOnly
                style={{ padding: "8px", borderRadius: "5px", border: "none", backgroundColor: "#002b5b" }}
              />
              <input
                type="date"
                name="preferredDate"
                value={formData.preferredDate}
                onChange={handleFormChange}
                required
                style={{ padding: "8px", borderRadius: "5px", border: "none" }}
              />
              <button
                type="submit"
                style={{ backgroundColor: "#00ccff", color: "#003f7f", padding: "10px", fontWeight: "bold", borderRadius: "5px", border: "none", cursor: "pointer" }}
              >
                Book Now
              </button>
            </form>
            <button
              onClick={() => setSelectedOption(null)}
              style={{ ...flashCardStyle, backgroundColor: "#004466", color: "#00ccff", minWidth: "150px", marginTop: "10px" }}
            >
              Back
            </button>
          </div>
        )}

        {/* Contact Support */}
        {selectedOption === "Contact Support" && (
          <div style={{ marginTop: "20px", maxWidth: "300px", textAlign: "center" }}>
            <h3>Contact Support for {selectedDept}</h3>
            <p>💬 Chat: Chat started with KL Counsellor!</p>
            <p>📞 Call: +1-234-567-890</p>
            <p>Email: support@university.edu</p>
            <button
              onClick={() => setSelectedOption(null)}
              style={{ ...flashCardStyle, backgroundColor: "#004466", color: "#00ccff", minWidth: "150px", marginTop: "10px" }}
            >
              Back
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
