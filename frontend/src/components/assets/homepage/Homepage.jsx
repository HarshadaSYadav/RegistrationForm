import React from "react";
import "./Homepage.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Homepage = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      alert("Please login to access the homepage.");
      navigate("/login"); // Redirect to login if no token
    } else {
      fetch("https://registration-form-liart.vercel.app/api/verify-token", {
        headers: {
          Authorization: `Bearer ${token}`, // Send the token in headers
        },
      })
        .then((res) => {
          if (!res.ok) {
            throw new Error("Token invalid or expired");
          }
          return res.json();
        })
        .then(() => console.log("Token verified"))
        .catch((err) => {
          console.error(err);
          alert("Session expired. Please login again.");
          localStorage.removeItem("token"); // Clear token
          navigate("/login");
        });
    }
  }, [navigate]);
  
  const handleProfileClick = () => {
    navigate("/profile"); // Redirect to profile page
  };

  return (
    <div className="user-homepage">
      <header className="homepage-header">

  
  <h1 className="homepage-title">Welcome To The Page</h1>
  <div className="header-actions">

  </div>
</header>
      <main className="homepage-main">
        <h2 className="homepage-welcome"></h2>
        <p className="homepage-description">
         You Are Logged In!!!
        </p>
      </main>
    </div>
  );
};

export default Homepage;
