import React from 'react';
import { NavLink } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import earth from "./earth.jpg";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <main className="HeroSection">
      <div className="HeroContent">
        <h1>Explore The World</h1>
        <p>
          Explore the rich history, stunning beauty, and diverse cultures of
          nations around the world. Easily search, sort, and filter countries
          to find exactly what matters to you.
        </p>

        <NavLink to="/about" className="hero-btn">
          Start Exploring <FaArrowRightLong />
        </NavLink>
      </div>

      <div className="HeroImage">
        <img src={earth} alt="Earth" />
      </div>
    </main>
  );
};

export default HeroSection;
