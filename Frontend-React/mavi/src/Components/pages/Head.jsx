import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import Home from '../Home';

const Head = () => {

  const navigate = useNavigate();
   const logout = () => {

    // CLEAR LOGIN
    localStorage.removeItem("isLoggedIn");

    // NAVIGATE LOGIN PAGE
    navigate("/", { replace: true });

    // FORCE REFRESH
    window.location.reload();
  };
  return (
    <header className="navbar">
        <div className="logo">MAVI</div>

        <nav>
          <a href="#hero" >Home</a>
          <a href="#services">Services</a>
          <a href="#sevices">Solutions</a>
          <a href="#cta">About</a>
          <a href="#foot">Contact</a>
        </nav>
        <button
          onClick={logout}
          style={{
            padding: "10px 18px",
            border: "none",
            borderRadius: "8px",
            background: "#38bdf8",
            cursor: "pointer",
            fontWeight: "bold"
          }}
        >
          Logout
        </button>
      </header>
  )
}

export default Head