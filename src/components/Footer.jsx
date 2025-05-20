import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p>Made with ❤️ by Raggy</p>
      <div className="socials">
        <a href="https://www.instagram.com/raggy.app/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>Instagram</a>
        {/* <a href="https://tiktok.com/@raggyapp" target="_blank" rel="noopener noreferrer">TikTok</a>
        <a href="https://twitter.com/raggyapp" target="_blank" rel="noopener noreferrer">Twitter</a> */}
      </div>
    </footer>
  );
}

export default Footer;
