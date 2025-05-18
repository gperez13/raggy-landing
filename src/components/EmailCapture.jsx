import React, { useState } from "react";
import "./EmailCapture.css";

function EmailCapture() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // For now, simulate submission
    console.log("Email submitted:", email);
    setSubmitted(true);
  };

  return (
    <section className="email-capture">
      {submitted ? (
        <p className="thank-you">Thanks for signing up! 💌</p>
      ) : (
        <>
          <h2>Be first in line.</h2>
          <p>Get early access when we launch Raggy.</p>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit">Get Early Access</button>
          </form>
        </>
      )}
    </section>
  );
}

export default EmailCapture;
