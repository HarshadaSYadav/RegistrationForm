import React, { useEffect } from "react";
import "./welcome.css";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/homepage"); // Redirect logged-in users to homepage
    }
  }, [navigate]);
  
  return (
    <div className="welcome-container">
      <div className="welcome-header">
        <h1>Welcome</h1>
        <p>
        </p>
      </div>

      <div className="welcome-actions">
        <button onClick={() => navigate("/signup")} className="welcome-button signup-button">
          Sign Up
        </button>
        <button onClick={() => navigate("/login")} className="welcome-button login-button">
          Login
        </button>
      </div>

    </div>
  );
};

export default Welcome;
