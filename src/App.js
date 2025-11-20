// src/App.js
import React, { useEffect } from 'react';
import './App.css';

function App() {

  useEffect(() => {
    const menuIcon = document.getElementById('menuIcon');
    const navLinks = document.getElementById('navLinks');
    const navbar = document.getElementById('navbar');

    const toggleMenu = () => {
      navLinks.classList.toggle('show');
    };

    const handleScroll = () => {
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    };

    menuIcon.addEventListener('click', toggleMenu);
    window.addEventListener('scroll', handleScroll);

    return () => {
      menuIcon.removeEventListener('click', toggleMenu);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const openChatbot = () => {
    window.location.href = 'https://your-chatbot-link.com'; // Replace with your link
  };

  return (
    <>
      {/* Navbar */}
      <nav id="navbar">
        <div className="logo">NEESMU MF</div>
        <div id="menuIcon" className="menu-icon">
          <i className="fas fa-bars"></i>
        </div>
        <div className="nav-links" id="navLinks">
          <a href="#home">HOME</a>
          <a href="#about">ABOUT</a>
          <a href="#services">SERVICES</a>
          <a href="#contact">CONTACT</a>
        </div>
      </nav>

      {/* Hero */}
      <section id="home">
        <div className="hero-content">
          <h1>BUILD YOUR<br />ULTIMATE PC</h1>
          <p>AI Powered • Zero Confusion • 100% Compatible •All type of PC</p>
          <button className="cta-btn" onClick={openChatbot}>
            START BUILDING NOW - FREE
          </button>
        </div>
      </section>

      {/* About */}
      <section id="about" className="section">
        <h2 className="section-title">WHY NEESMU MF?</h2>
        <p style={{ fontSize: 'clamp(20px,4.5vw,24px)', maxWidth: '900px', margin: '0 auto 40px' }}>
          India's First AI That Actually Understands Your Needs<br />
          No Wrong Parts • No Confusion • Real Prices from Amazon, Flipkart, Vedant
        </p>
        <p style={{ fontSize: 'clamp(18px,4vw,22px)', lineHeight: 2 }}>
          24/7 AI Assistant • 1 Lakh+ Happy Builders • Beginner Friendly
        </p>
      </section>

      {/* Services */}
      <section id="services" className="section">
        <h2 className="section-title">CHOOSE YOUR BUILD</h2>
        <div className="services-grid">
          <div className="service-card">
            <i className="fas fa-rupee-sign"></i>
            <h3>BUDGET BUILD</h3>
            <p>₹30K to ₹10 Lakh+<br />Best performance at your exact budget</p>
          </div>
          <div className="service-card">
            <i className="fas fa-bolt"></i>
            <h3>PERFORMANCE BUILD</h3>
            <p>4K Gaming • Video Editing • 3D Work<br />Perfect rig for your workload</p>
          </div>
          <div className="service-card">
            <i className="fas fa-cogs"></i>
            <h3>FULL CUSTOM</h3>
            <p>Pick every part<br />Live compatibility check & optimization</p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section">
        <h2 className="section-title">GET IN TOUCH</h2>
        <div className="contact-info">
          <div><i className="fas fa-phone"></i> +91 98765 43210</div>
          <div><i className="fab fa-whatsapp"></i> WhatsApp</div>
          <div><i className="fas fa-envelope"></i> hello@neesmumf.in</div>
        </div>
      </section>

      {/* Floating Chatbot */}
      <div id="chatbotBtn" onClick={openChatbot}>
        <i className="fas fa-robot"></i>
      </div>
    </>
  );
}

export default App;