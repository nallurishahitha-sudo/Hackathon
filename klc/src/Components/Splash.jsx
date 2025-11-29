import React, { useEffect } from "react";

const Splash = ({ onFinish }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish(); 
    }, 1000); 
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div
      id="splash"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        background: "linear-gradient(135deg, #001f3f, #003f7f)",
        zIndex: 10,
      }}
    >
      <div
        style={{
          fontSize: "4em",
          fontWeight: 900,
          textTransform: "uppercase",
          background: "linear-gradient(90deg, red, orange, yellow, green, blue, indigo, violet)",
          backgroundSize: "400% 400%",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          animation: "rainbowShift 5s ease infinite",
        }}
      >
        KL SSP
      </div>
      <div style={{ fontSize: "1.2em", marginTop: "10px", opacity: 0.8 }}>
        Career Guidance & Counselling Portal
      </div>

      {/* CSS Animations */}
      <style>
        {`
          @keyframes rainbowShift {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}
      </style>
    </div>
  );
};

export default Splash;