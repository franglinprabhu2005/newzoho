import React, { useState, useEffect } from "react";
import "./App.css";

// -------- SLIDER DATA ---------

const sliderItems = [
  {
    id: 0,
    label: "Neesmu Mall",
    title: "Welcome to Neesmu Mall",
    desc: "Modern mall entrance with theatre and turf inside.",
    img: "https://i.pinimg.com/736x/70/ee/9d/70ee9dc93bc4916f57bcab3a719b5185.jpg",
  },
  {
    id: 1,
    label: "Now Showing",
    title: "Cinema Experience",
    desc: "Big screen, surround sound and cosy seats.",
    img: "https://t3.ftcdn.net/jpg/03/74/28/58/360_F_374285858_KzJ88FysqJ79AhyNPW2lqnBtsRTokuav.jpg",
  },
  {
    id: 2,
    label: "Movie Poster",
    title: "Big Screen Fun",
    desc: "Sample movie poster to show booking style.",
    img: "https://m.media-amazon.com/images/I/71niXI3lxlL._AC_UF894,1000_QL80_.jpg",
  },
  {
    id: 3,
    label: "Turf Ground",
    title: "All Sports Turf",
    desc: "Football, cricket and box-cricket friendly turf.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1Y0mZ_uonz28R2Rk5sC4QO95XaUbyKARp8w&s",
  },

{
    id: 4,
    label: "Movie Poster",
    title: "SULTHAN ",
    desc: "this is one of the best movie in this year.",
    img: "data:image/jpeg;base64,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",
  },
  
];

const App = () => {
  const [current, setCurrent] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [showWelcome, setShowWelcome] = useState(true);

  // auto slide
  useEffect(() => {
    const id = setInterval(
      () => setCurrent((prev) => (prev + 1) % sliderItems.length),
      3500
    );
    return () => clearInterval(id);
  }, []);

  // flower rain welcome hide
  useEffect(() => {
    const t = setTimeout(() => setShowWelcome(false), 2600);
    return () => clearTimeout(t);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
      setMobileMenuOpen(false);
    }
  };

  const openBot = () => {
    alert("Booking only via Neesmu Smart Booking Bot (SalesIQ bot integration).");
  };

  const handleFeedbackSubmit = (e) => {
    e.preventDefault();
    alert("Thanks for your feedback! 🙌");
    e.target.reset();
  };

  const navBtnClass = (id) =>
    `nav-btn ${activeSection === id ? "nav-btn-active" : ""}`;

  const activeSlide = sliderItems[current];

  return (
    <div className="site-root">
      {/* FLOWER RAIN WELCOME OVERLAY */}
      {showWelcome && (
        <div className="welcome-overlay">
          <div className="welcome-inner">
            <p className="welcome-title">Welcome to Neesmu Mall</p>
            <p className="welcome-sub">Theatre & Turf Smart Booking Guide</p>
          </div>
          <div className="flower-layer">
            {Array.from({ length: 12 }).map((_, i) => (
              <span key={i} className={`flower f${(i % 6) + 1}`}>
                🌸
              </span>
            ))}
          </div>
        </div>
      )}

      {/* NAVBAR */}
      <header className="nav">
        <div className="nav-left">
          <div className="logo-orb">N</div>
          <span className="logo-title">Neesmu Mall</span>
        </div>

        <nav className="nav-links nav-links-desktop">
          <button className={navBtnClass("home")} onClick={() => scrollTo("home")}>
            Home
          </button>
          <button className={navBtnClass("about")} onClick={() => scrollTo("about")}>
            About
          </button>
          <button
            className={navBtnClass("services")}
            onClick={() => scrollTo("services")}
          >
            Services
          </button>
          <button
            className={navBtnClass("contact")}
            onClick={() => scrollTo("contact")}
          >
            Contact
          </button>
        </nav>

        <button
          className="nav-menu-btn"
          onClick={() => setMobileMenuOpen((v) => !v)}
        >
          ☰
        </button>
      </header>

      {mobileMenuOpen && (
        <div className="mobile-menu">
          <button className={navBtnClass("home")} onClick={() => scrollTo("home")}>
            Home
          </button>
          <button
            className={navBtnClass("about")}
            onClick={() => scrollTo("about")}
          >
            About
          </button>
          <button
            className={navBtnClass("services")}
            onClick={() => scrollTo("services")}
          >
            Services
          </button>
          <button
            className={navBtnClass("contact")}
            onClick={() => scrollTo("contact")}
          >
            Contact
          </button>
        </div>
      )}

      <main>
        {/* HOME */}
        <section id="home" className="hero">
          <div className="hero-content">
            <h1>
              <span className="hero-highlight">Neesmu Mall</span>
            </h1>
            <p className="hero-sub">Theatre & Turf inside one modern mall.</p>
            <p className="hero-text">
              Neesmu Mall is an entertainment spot with a{" "}
              <strong>cinema style theatre</strong> and a{" "}
              <strong>green turf ground</strong>. Users don&apos;t book from
              this website. This site only explains the steps. Real booking for{" "}
              <strong>movies and turf slots</strong> happens through the{" "}
              <strong>Neesmu Smart Booking Bot</strong>.
            </p>
            <div className="hero-tags">
              <span>Theatre + Turf in one place</span>
              <span>Bot based booking</span>
              <span>Mobile friendly site</span>
            </div>
          </div>

          {/* SINGLE WINDOW SLIDER */}
          <div className="slider-row">
            <div className="slider-row-glow" />
            <article className="single-slide card-animated">
              <div className="slide-image">
                <img src={activeSlide.img} alt={activeSlide.label} />
              </div>
              <div className="slide-caption">
                <span>{activeSlide.label}</span>
                <h3>{activeSlide.title}</h3>
                <p className="slide-desc">{activeSlide.desc}</p>
              </div>
              {/* running light frame */}
              <div className="border-runner" />
            </article>

            <div className="slider-dots">
              {sliderItems.map((s, i) => (
                <button
                  key={s.id}
                  className={i === current ? "dot dot-active" : "dot"}
                  onClick={() => setCurrent(i)}
                />
              ))}
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="section">
          <h2 className="section-title">About the Theatre & Turf</h2>
          <p className="section-desc">
            Neesmu Mall has two main zones – a{" "}
            <strong>movie theatre</strong> and a{" "}
            <strong>multi-sport turf ground</strong>. Both are designed for
            friends, family and team outings.
          </p>

          <div className="about-grid">
            {/* Theatre */}
            <article className="about-card card-animated">
              <div className="about-image">
                <img
                  src="https://t3.ftcdn.net/jpg/03/74/28/58/360_F_374285858_KzJ88FysqJ79AhyNPW2lqnBtsRTokuav.jpg"
                  alt="Theatre hall"
                />
              </div>
              <div className="about-body">
                <h3>Theatre – All Type of Movies</h3>
                <p>
                  The Neesmu theatre supports{" "}
                  <strong>all kinds of movies</strong> – Tamil, English, Hindi,
                  kids movies and special fan shows.
                </p>
                <ul>
                  <li>Big screen, surround sound, comfy seats</li>
                  <li>New releases, re–runs & private shows</li>
                  <li>Morning, matinee, evening & night shows</li>
                  <li>Perfect for birthdays & fan shows</li>
                </ul>
              </div>
            </article>

            {/* Turf */}
            <article className="about-card card-animated">
              <div className="about-image">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1Y0mZ_uonz28R2Rk5sC4QO95XaUbyKARp8w&s"
                  alt="Turf ground"
                />
              </div>
              <div className="about-body">
                <h3>Turf – All Type of Games</h3>
                <p>
                  The Neesmu turf is built for{" "}
                  <strong>football, cricket, box-cricket</strong> and fun games
                  with friends.
                </p>
                <ul>
                  <li>Football 5s / 7s matches & practice</li>
                  <li>Cricket & box-cricket style games</li>
                  <li>Evening / night slots with lights</li>
                  <li>College & office tournaments</li>
                </ul>
              </div>
            </article>
          </div>
        </section>

        {/* SERVICES – BOT FLOW */}
        <section id="services" className="section">
          <h2 className="section-title">How Booking Works (Via Bot)</h2>
          <p className="section-desc">
            Neesmu Mall bookings are done{" "}
            <strong>only through the Neesmu Smart Booking Bot</strong>. This
            site does not show any form or payment. Below cards explain how the
            bot will talk with the user.
          </p>

          <div className="service-grid">
            {/* Theatre booking */}
            <article className="service-card card-animated">
              <h3>🎬 Theatre Booking – Bot Flow</h3>
              <p>
                User selects <strong>“Theatre Booking”</strong> inside the bot.
              </p>
              <ul>
                <li>Bot shows movie list & basic poster preview.</li>
                <li>Asks for date & show time (morning / matinee / night).</li>
                <li>Asks for class (VIP / Balcony / Regular).</li>
                <li>Asks how many tickets are needed.</li>
                <li>
                  Finally sends summary message with all details for
                  confirmation.
                </li>
              </ul>
              <button className="btn-outline" onClick={openBot}>
                Open Bot for Theatre
              </button>
            </article>

            {/* Turf booking */}
            <article className="service-card card-animated">
              <h3>⚽ Turf Booking – Bot Flow</h3>
              <p>
                User selects <strong>“Turf Booking”</strong> inside the bot.
              </p>
              <ul>
                <li>Bot asks which game – football, cricket, box-cricket.</li>
                <li>Then asks for date & time slot.</li>
                <li>Collects number of players joining.</li>
                <li>Optional notes (team name, friendly match info).</li>
                <li>
                  Sends final slot summary & confirms booking in the chat.
                </li>
              </ul>
              <button className="btn-outline" onClick={openBot}>
                Open Bot for Turf
              </button>
            </article>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="section">
          <h2 className="section-title">Contact Neesmu Mall</h2>
          <p className="section-desc">
            For general questions about the mall, theatre or turf, you can use
            the details below. For booking confirmation, always trust the{" "}
            <strong>Smart Booking Bot</strong> messages.
          </p>

          <div className="contact-grid">
            <div className="contact-card card-animated">
              <h3>Address</h3>
              <p>
                <strong>Neesmu Mall</strong>
                <br />
                45, Royal Street, Lakshmi Nagar
                <br />
                Sivakasi – 626123, Tamil Nadu
              </p>

              <h3>Contact</h3>
              <p>
                📞 <strong>+91 90876 54321</strong>
                <br />
                ✉️ <strong>info@neesmu-mall.com</strong>
              </p>
            </div>

            <div className="contact-card card-animated">
              <h3>Social Media</h3>
              <p>Follow us and send a message any time:</p>
              <div className="social-row">
                <button className="social-pill">📘 Facebook</button>
                <button className="social-pill">📸 Instagram</button>
                <button className="social-pill">▶ YouTube</button>
                <button className="social-pill">💬 WhatsApp</button>
              </div>
              <p className="handle">
                Official handle: <strong>@neesmuMall2025</strong>
              </p>
            </div>
          </div>
        </section>

        {/* FEEDBACK (no nav link) */}
        <section id="feedback" className="section">
          <h2 className="section-title">User Feedback</h2>
          <p className="section-desc">
            Tell us how your experience with Neesmu Mall theatre or turf felt.
            This is only feedback – bookings are still done in the bot.
          </p>

          <div className="feedback-card card-animated">
            <form onSubmit={handleFeedbackSubmit} className="feedback-form">
              <div className="form-row">
                <label>
                  Name
                  <input type="text" placeholder="Your name (optional)" />
                </label>
              </div>
              <div className="form-row">
                <label>
                  Rating
                  <select defaultValue="">
                    <option value="" disabled>
                      Select a rating
                    </option>
                    <option>⭐ Very bad</option>
                    <option>⭐⭐ Ok</option>
                    <option>⭐⭐⭐ Good</option>
                    <option>⭐⭐⭐⭐ Very good</option>
                    <option>⭐⭐⭐⭐⭐ Excellent</option>
                  </select>
                </label>
              </div>
              <div className="form-row">
                <label>
                  Feedback
                  <textarea
                    rows="3"
                    placeholder="Share what you liked or what we can improve..."
                  />
                </label>
              </div>
              <button type="submit" className="btn-primary feedback-btn">
                Submit Feedback
              </button>
            </form>
          </div>
        </section>
      </main>

      {/* FLOATING BOT ICON */}
      <button className="floating-bot" onClick={openBot}>
        🤖
      </button>

      {/* FOOTER */}
      <footer className="footer">
        <p className="footer-title">Features of this site</p>
        <ul className="footer-list">
          <li>Explains Neesmu Mall theatre & turf clearly.</li>
          <li>Shows how Neesmu Smart Booking Bot works for bookings.</li>
          <li>Dark theme with smooth animations & hover effects.</li>
          <li>Single window image slider with running light border.</li>
          <li>Flower rain welcome & user feedback section.</li>
        </ul>
        <p className="footer-copy">
          © 2025 Neesmu Mall • Built as a booking-bot guide website.
        </p>
      </footer>
    </div>
  );
};

export default App;
