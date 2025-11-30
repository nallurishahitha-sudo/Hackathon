import React, { useState } from "react";

export default function Admin() {
  // -------------------------
  // Dummy Data (Frontend Only)
  // -------------------------
  const [careerPaths, setCareerPaths] = useState([
    { id: 1, title: "Software Developer" },
    { id: 2, title: "Data Scientist" },
  ]);

  const [waitingList, setWaitingList] = useState([
    { id: 1, name: "Shahitha", email: "student1@gmail.com" },
    { id: 2, name: "Rahul", email: "student2@gmail.com" },
  ]);

  const [newPath, setNewPath] = useState("");
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");

  // -------------------------
  // Add Career Path
  // -------------------------
  const addCareerPath = () => {
    if (!newPath.trim()) return alert("Enter a career path");
    setCareerPaths([
      ...careerPaths,
      { id: Date.now(), title: newPath.trim() },
    ]);
    setNewPath("");
  };

  // -------------------------
  // Delete Career Path
  // -------------------------
  const deleteCareerPath = (id) => {
    setCareerPaths(careerPaths.filter((item) => item.id !== id));
  };

  // -------------------------
  // Save Edit
  // -------------------------
  const saveEdit = (id) => {
    if (!editText.trim()) return alert("Enter valid text");
    setCareerPaths(
      careerPaths.map((item) =>
        item.id === id ? { ...item, title: editText } : item
      )
    );
    setEditId(null);
    setEditText("");
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Admin Dashboard</h1>

      {/* ------------------ ADD CAREER PATH ------------------ */}
      <div style={styles.box}>
        <h2>Add Career Path</h2>
        <input
          style={styles.input}
          value={newPath}
          onChange={(e) => setNewPath(e.target.value)}
          placeholder="Enter new career path"
        />
        <button style={styles.btn} onClick={addCareerPath}>
          Add
        </button>
      </div>

      {/* ------------------ MANAGE CAREER PATHS ------------------ */}
      <div style={styles.box}>
        <h2>Career Paths</h2>
        {careerPaths.map((item) => (
          <div key={item.id} style={styles.row}>
            {editId === item.id ? (
              <>
                <input
                  style={styles.input}
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                />
                <button style={styles.btnSmall} onClick={() => saveEdit(item.id)}>
                  Save
                </button>
                <button
                  style={styles.btnSmall}
                  onClick={() => setEditId(null)}
                >
                  Cancel
                </button>
              </>
            ) : (
              <>
                <p>{item.title}</p>
                <div>
                  <button
                    style={styles.btnSmall}
                    onClick={() => {
                      setEditId(item.id);
                      setEditText(item.title);
                    }}
                  >
                    Edit
                  </button>
                  <button
                    style={styles.btnSmallRed}
                    onClick={() => deleteCareerPath(item.id)}
                  >
                    Delete
                  </button>
                </div>
              </>
            )}
          </div>
        ))}
      </div>

      {/* ------------------ WAITING LIST ------------------ */}
      <div style={styles.box}>
        <h2>Student Waiting List</h2>
        {waitingList.map((user) => (
          <div key={user.id} style={styles.row}>
            <p>
              {user.name} — {user.email}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------------------- STYLES ---------------------- */
const styles = {
  container: {
    padding: "30px",
    fontFamily: "Arial",
    maxWidth: "700px",
    margin: "auto",
  },
  heading: {
    textAlign: "center",
    marginBottom: "20px",
  },
  box: {
    border: "1px solid #ccc",
    padding: "20px",
    marginBottom: "25px",
    borderRadius: "10px",
  },
  row: {
    display: "flex",
    justifyContent: "space-between",
    padding: "10px 0",
    borderBottom: "1px solid #eee",
  },
  input: {
    padding: "8px",
    width: "60%",
    marginRight: "10px",
  },
  btn: {
    padding: "8px 16px",
    background: "#007bff",
    border: "none",
    color: "white",
    cursor: "pointer",
  },
  btnSmall: {
    padding: "5px 10px",
    marginRight: "5px",
    background: "#008CBA",
    border: "none",
    color: "white",
    cursor: "pointer",
    borderRadius: "5px",
  },
  btnSmallRed: {
    padding: "5px 10px",
    background: "red",
    border: "none",
    color: "white",
    cursor: "pointer",
    borderRadius: "5px",
  },
};
