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
    desc: "Sample movie poster look for bookings.",
    img: "https://m.media-amazon.com/images/I/71niXI3lxlL._AC_UF894,1000_QL80_.jpg",
  },
  {
    id: 3,
    label: "Turf Ground",
    title: "All Sports Turf",
    desc: "Football, cricket and box-cricket friendly turf.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1Y0mZ_uonz28R2Rk5sC4QO95XaUbyKARp8w&s",
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
          <li>Dark premium theme with smooth animations & hover effects.</li>
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
