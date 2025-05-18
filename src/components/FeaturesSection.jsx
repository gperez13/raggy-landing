import React from "react";
import "./FeaturesSection.css";

const features = [
  {
    title: "Outfit Swiping",
    description: "Swipe left, save right — just like dating, but for clothes.",
    image: `${process.env.PUBLIC_URL}/saved-garments.png`,
    imageAlt: "Swipe UI mockup",
  },
  {
    title: "Saved Looks",
    description: "Build your dream closet with just a tap.",
    image: `${process.env.PUBLIC_URL}/saved-garments.png`,
    imageAlt: "Saved outfits preview",
  },
  {
    title: "Curated Drops",
    description: "New fits daily, personalized to your vibe.",
    image: `${process.env.PUBLIC_URL}/saved-garments.png`,
    imageAlt: "Daily drop notifications",
  },
];

function FeaturesSection() {
  return (
    <section className="features">
      <h2 className="features-title">Why You'll Love Raggy</h2>

      {features.map((feature, index) => (
        <div
          className={`feature-row ${index % 2 === 1 ? "reverse" : ""}`}
          key={feature.title}
        >
          <div className="feature-image">
            <img src={feature.image} alt={feature.imageAlt} />
          </div>
          <div className="feature-text">
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        </div>
      ))}
    </section>
  );
}

export default FeaturesSection;
