import React, { useState, useEffect } from "react";
import "./App.css";

// -------- DATA ---------

const sliderItems = [
  {
    id: 0,
    label: "Neesmu Mall",
    title: "Welcome to Neesmu Mall",
    img: "https://i.pinimg.com/736x/70/ee/9d/70ee9dc93bc4916f57bcab3a719b5185.jpg", // mall front
  },
  {
    id: 1,
    label: "Now Showing",
    title: "Cinema Experience",
    img: "https://t3.ftcdn.net/jpg/03/74/28/58/360_F_374285858_KzJ88FysqJ79AhyNPW2lqnBtsRTokuav.jpg", // theatre
  },
  {
    id: 2,
    label: "Movie Poster",
    title: "Big Screen Fun",
    img: "https://m.media-amazon.com/images/I/71niXI3lxlL._AC_UF894,1000_QL80_.jpg", // sample poster
  },
  {
    id: 3,
    label: "Turf Ground",
    title: "All Sports Turf",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1Y0mZ_uonz28R2Rk5sC4QO95XaUbyKARp8w&s", // turf
  },
];

// -------- COMPONENT ---------

const App = () => {
  const [current, setCurrent] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // auto slide
  useEffect(() => {
    const id = setInterval(
      () => setCurrent((prev) => (prev + 1) % sliderItems.length),
      3500
    );
    return () => clearInterval(id);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  const openBot = () => {
    alert("Booking only via Neesmu Smart Booking Bot (SalesIQ bot integration).");
  };

  return (
    <div className="site-root">
      {/* NAVBAR */}
      <header className="nav">
        <div className="nav-left">
          <div className="logo-orb">N</div>
          <span className="logo-title">Neesmu Mall</span>
        </div>

        <nav className="nav-links nav-links-desktop">
          <button onClick={() => scrollTo("home")}>Home</button>
          <button onClick={() => scrollTo("about")}>About</button>
          <button onClick={() => scrollTo("services")}>Services</button>
          <button onClick={() => scrollTo("contact")}>Contact</button>
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
          <button onClick={() => scrollTo("home")}>Home</button>
          <button onClick={() => scrollTo("about")}>About</button>
          <button onClick={() => scrollTo("services")}>Services</button>
          <button onClick={() => scrollTo("contact")}>Contact</button>
        </div>
      )}

      <main>
        {/* HOME */}
        <section id="home" className="hero">
          <div className="hero-content">
            <h1>
              <span className="hero-highlight">Neesmu Mall</span>
            </h1>
            <p className="hero-sub">
              Theatre & Turf inside one modern mall.
            </p>
            <p className="hero-text">
              Neesmu Mall is an entertainment spot with a{" "}
              <strong>cinema style theatre</strong> and a{" "}
              <strong>green turf ground</strong>. Users don&apos;t book from
              this website. This site only shows clear steps. Real booking for{" "}
              <strong>movies and turf slots</strong> happens through the{" "}
              <strong>Neesmu Smart Booking Bot</strong>.
            </p>

            <div className="hero-tags">
              <span>Theatre + Turf in one place</span>
              <span>Bot based booking</span>
              <span>Mobile friendly site</span>
            </div>
          </div>

          {/* FLIP SLIDER */}
          <div className="slider-row">
            <div className="slider-track">
              {sliderItems.map((item, index) => {
                const isActive = index === current;
                return (
                  <div
                    key={item.id}
                    className={
                      "slide-card" + (isActive ? " slide-card-active" : "")
                    }
                  >
                    <div className="slide-image">
                      <img src={item.img} alt={item.label} />
                    </div>
                    <div className="slide-caption">
                      <span>{item.label}</span>
                      <h3>{item.title}</h3>
                    </div>
                  </div>
                );
              })}
            </div>

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
            <strong>movie theatre</strong> and a{"strong"> multi-sport turf
            ground</strong>. Both are designed for friends, family and team
            outings.
          </p>

          <div className="about-grid">
            {/* Theatre */}
            <article className="about-card">
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
                  <li>Best for birthdays, bachelor shows, group hangouts</li>
                </ul>
              </div>
            </article>

            {/* Turf */}
            <article className="about-card">
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
                  <li>Cricket & box-cricket nets style play</li>
                  <li>Evening / night slots with lights</li>
                  <li>Suitable for college & office tournaments</li>
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
            <article className="service-card">
              <h3>🎬 Theatre Booking – Bot Flow</h3>
              <p>
                User selects <strong>“Theatre Booking”</strong> inside the bot.
              </p>
              <ul>
                <li>Bot shows movie list & basic poster.</li>
                <li>Asks for date & show time (morning / matinee / night).</li>
                <li>Asks for class (VIP / Balcony / Regular).</li>
                <li>Asks how many tickets are needed.</li>
                <li>
                  Finally bot sends a summary message with all details for
                  confirmation.
                </li>
              </ul>
              <button className="btn-outline" onClick={openBot}>
                Open Bot for Theatre
              </button>
            </article>

            {/* Turf booking */}
            <article className="service-card">
              <h3>⚽ Turf Booking – Bot Flow</h3>
              <p>
                User selects <strong>“Turf Booking”</strong> inside the bot.
              </p>
              <ul>
                <li>Bot asks which game – football, cricket, box-cricket.</li>
                <li>Then asks for date & time slot.</li>
                <li>Collects number of players joining.</li>
                <li>
                  Optionally takes notes (team name, friendly match details).
                </li>
                <li>
                  Sends final slot summary & confirms booking inside the chat.
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
            the details below. For booking confirmation, always trust the Smart
            Booking Bot messages.
          </p>

          <div className="contact-grid">
            <div className="contact-card">
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

            <div className="contact-card">
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
      </main>

      {/* FLOATING BOT ICON */}
      <button className="floating-bot" onClick={openBot}>
        🤖
      </button>

      {/* FOOTER */}
      <footer className="footer">
        <p className="footer-title">Features of this site</p>
        <ul className="footer-list">
          <li>Clear explanation of Neesmu Mall theatre & turf.</li>
          <li>Shows how Smart Booking Bot handles all bookings.</li>
          <li>Responsive layout for mobile, tablet and desktop.</li>
          <li>Flip style image slider with mall, movie & turf photos.</li>
        </ul>
        <p className="footer-copy">
          © 2025 Neesmu Mall • Built as a bot–guide website.
        </p>
      </footer>
    </div>
  );
};

export default App;
