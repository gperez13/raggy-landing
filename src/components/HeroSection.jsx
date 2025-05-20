import React from "react";
import "./HeroSection.css";

function HeroSection() {
  const scrollToEmail = () => {
    const section = document.getElementById("email");
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Raggy</h1>
        <p className="hero-tagline">Download your new wardrobe</p>
        <p className="hero-subtext">Swipe looks. Save what you love. Shop your vibe.</p>
        <a
            href="https://www.instagram.com/raggy.app/"
            className="hero-button"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none' }}
            >
            Follow on Instagram
        </a>
      </div>

      <div className="hero-image">
        <img
          src={`${process.env.PUBLIC_URL}/saved-garments.png`}
          alt="Raggy iOS app preview"
        />
      </div>
    </section>
  );
}

export default HeroSection;
