import React, { useState } from "react";

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [captcha, setCaptcha] = useState("");
  const [generatedCaptcha, setGeneratedCaptcha] = useState("");
  const [error, setError] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);

  // NEW: user type (admin/user)
  const [userType, setUserType] = useState("user");

  const generateCaptcha = () => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let cap = "";
    for (let i = 0; i < 6; i++) {
      cap += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setGeneratedCaptcha(cap);
  };

  React.useEffect(() => {
    generateCaptcha();
  }, []);

  const handleLogin = () => {
    if (!email || !password || !captcha) {
      setError("Please fill all fields including captcha");
      return;
    }

    if (captcha !== generatedCaptcha) {
      setError("Captcha does not match");
      generateCaptcha();
      setCaptcha("");
      return;
    }

    setError("");

    onLogin({
      email,
      password,
      type: isSignUp ? "signup" : "signin",
      role: userType, // SENDING USER TYPE
    });
  };

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "linear-gradient(135deg,#002855,#005f99)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h1 style={{ fontSize: "3em", color: "#00e1ff", letterSpacing: "2px" }}>
        KL SSP
      </h1>
      <p style={{ color: "white", marginBottom: "30px" }}>
        Smart Student Portal - Career Guidance
      </p>

      <div
        style={{
          padding: "40px",
          backgroundColor: "#f0f4f8",
          borderRadius: "10px",
          border: "2px solid black",
          boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
          minWidth: "300px",
          textAlign: "center",
        }}
      >
        <h2>{isSignUp ? "Sign Up" : "Sign In"}</h2>

        {/* USER TYPE SELECTOR */}
        <select
          value={userType}
          onChange={(e) => setUserType(e.target.value)}
          style={{
            padding: "10px",
            width: "100%",
            margin: "10px 0",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        >
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>

        {/* EMAIL */}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            padding: "10px",
            width: "100%",
            margin: "10px 0",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />

        {/* PASSWORD */}
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            padding: "10px",
            width: "100%",
            margin: "10px 0",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />

        {/* CAPTCHA */}
        <div
          style={{
            margin: "10px 0",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <span
            style={{
              fontWeight: "bold",
              backgroundColor: "#e0e0e0",
              padding: "5px 10px",
              borderRadius: "5px",
              letterSpacing: "2px",
            }}
          >
            {generatedCaptcha}
          </span>
          <button
            onClick={generateCaptcha}
            style={{
              padding: "5px 10px",
              cursor: "pointer",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
          >
            Refresh
          </button>
        </div>

        <input
          type="text"
          placeholder="Enter captcha"
          value={captcha}
          onChange={(e) => setCaptcha(e.target.value)}
          style={{
            padding: "10px",
            width: "100%",
            margin: "10px 0",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />

        {/* SUBMIT BUTTON */}
        <button
          onClick={handleLogin}
          style={{
            padding: "10px 20px",
            margin: "10px 0",
            width: "100%",
            cursor: "pointer",
            backgroundColor: "#005f99",
            color: "white",
            border: "none",
            borderRadius: "5px",
          }}
        >
          {isSignUp ? "Sign Up" : "Sign In"}
        </button>

        {error && <p style={{ color: "red" }}>{error}</p>}

        {/* TOGGLE SIGNIN/SIGNUP */}
        <p style={{ marginTop: "15px", cursor: "pointer", color: "#007bff" }}>
          {isSignUp ? (
            <span onClick={() => setIsSignUp(false)}>
              Already have an account? Sign In
            </span>
          ) : (
            <span onClick={() => setIsSignUp(true)}>
              Don't have an account? Sign Up
            </span>
          )}
        </p>
      </div>
    </div>
  );
};

export default Login;
