import React, { useState, useEffect } from "react";
import "./App.css";

const sliderItems = [
  {
    id: 0,
    label: "Neesmu Mahal",
    title: "Royal Mahal Entrance",
    subtitle: "Perfect for weddings & events",
    img: "https://i.pinimg.com/736x/70/ee/9d/70ee9dc93bc4916f57bcab3a719b5185.jpg",
  },
  {
    id: 1,
    label: "Mini Theatre",
    title: "Premium Movie Experience",
    subtitle: "Comfort seats, HD screen & sound",
    img: "https://t3.ftcdn.net/jpg/03/74/28/58/360_F_374285858_KzJ88FysqJ79AhyNPW2lqnBtsRTokuav.jpg",
  },
  {
    id: 2,
    label: "Turf Ground",
    title: "All Sports Friendly Turf",
    subtitle: "Football, cricket & practice sessions",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1Y0mZ_uonz28R2Rk5sC4QO95XaUbyKARp8w&s",
  },
];

const App = () => {
  const [current, setCurrent] = useState(0);

  const openBot = () => {
    alert("Booking only via Smart Booking Bot (integration coming soon).");
  };

  // auto slider
  useEffect(() => {
    const id = setInterval(
      () => setCurrent((prev) => (prev + 1) % sliderItems.length),
      5000
    );
    return () => clearInterval(id);
  }, []);

  const goTo = (i) => setCurrent(i);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="site-root">
      {/* NAVBAR */}
      <header className="nav">
        <div className="nav-left">
          <div className="logo-orb">N</div>
          <div className="logo-text">
            <span className="logo-title">Neesmu Mahal</span>
            <span className="logo-sub">Theatre • Turf • Events</span>
          </div>
        </div>
        <nav className="nav-links">
          <button onClick={() => scrollTo("home")}>Home</button>
          <button onClick={() => scrollTo("about")}>About</button>
          <button onClick={() => scrollTo("services")}>Services</button>
          <button onClick={() => scrollTo("contact")}>Contact</button>
        </nav>
        <button className="nav-cta" onClick={openBot}>
          Open Smart Booking Bot
        </button>
      </header>

      <main>
        {/* HOME / HERO */}
        <section id="home" className="hero">
          <div className="hero-left">
            <p className="hero-chip">Royal • Dark • Bot Powered</p>
            <h1>
              <span className="hero-highlight">Neesmu Mahal</span>
              <br />
              Theatre & Turf booking, bot mooliya thelivaa.
            </h1>
            <p className="hero-text">
              Neesmu Mahal is a modern space with a{" "}
              <strong>premium mini-theatre</strong> and a{" "}
              <strong>multi-sport turf ground</strong>. All bookings are handled
              only via our <strong>Smart Booking Bot</strong>. This website just
              explains the options in a clear way.
            </p>
            <div className="hero-actions">
              <button className="btn-primary" onClick={openBot}>
                Start Booking in Bot
              </button>
              <button
                className="btn-ghost"
                onClick={() => scrollTo("about")}
              >
                Know more about Mahal
              </button>
            </div>
            <div className="hero-tags">
              <span>Mobile • Tablet • PC</span>
              <span>Simple Dark UI</span>
              <span>Bot Based Booking</span>
            </div>
          </div>

          {/* SLIDER (CENTER) */}
          <div className="hero-right">
            <div className="slider-card">
              <div className="slider-image">
                <img
                  src={sliderItems[current].img}
                  alt={sliderItems[current].label}
                />
              </div>
              <div className="slider-text">
                <span className="slider-label">
                  {sliderItems[current].label}
                </span>
                <h3>{sliderItems[current].title}</h3>
                <p>{sliderItems[current].subtitle}</p>
              </div>
              <div className="slider-dots">
                {sliderItems.map((item, idx) => (
                  <button
                    key={item.id}
                    className={
                      idx === current ? "dot dot-active" : "dot"
                    }
                    onClick={() => goTo(idx)}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="section">
          <h2 className="section-title">About Neesmu Mahal</h2>
          <p className="section-desc">
            Neesmu Mahal is a <strong>simple and royal</strong> venue for both
            movies and games. We have a <strong>mini theatre</strong> for all
            types of films and a <strong>turf ground</strong> for multiple
            sports. Users see this site, understand the flow, and then finish
            booking through the Smart Booking Bot.
          </p>

          <div className="about-grid">
            {/* Theatre */}
            <article className="info-card">
              <div className="square-image">
                <img
                  src="https://t3.ftcdn.net/jpg/03/74/28/58/360_F_374285858_KzJ88FysqJ79AhyNPW2lqnBtsRTokuav.jpg"
                  alt="Theatre hall"
                />
              </div>
              <h3>Mini Theatre – All Types of Movies</h3>
              <p>
                Our theatre supports <strong>all movie types</strong> – Tamil,
                English, Hindi and special shows with HD projection and clear
                sound.
              </p>
              <ul>
                <li>Latest releases & classic shows</li>
                <li>Trailer & basic info shown inside the bot</li>
                <li>VIP / Balcony / Regular seating options</li>
                <li>Private screenings for groups</li>
              </ul>
            </article>

            {/* Turf */}
            <article className="info-card">
              <div className="square-image">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1Y0mZ_uonz28R2Rk5sC4QO95XaUbyKARp8w&s"
                  alt="Turf ground"
                />
              </div>
              <h3>Turf Ground – All Types of Games</h3>
              <p>
                The turf area is ideal for <strong>football</strong>,{" "}
                <strong>cricket</strong>, <strong>box cricket</strong>, fitness
                drills and friendly tournaments, including night matches.
              </p>
              <ul>
                <li>Football 5s / 7s matches</li>
                <li>Cricket & box-cricket practice</li>
                <li>Evening & night sessions under lights</li>
                <li>College, school & office events</li>
              </ul>
            </article>
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="section">
          <h2 className="section-title">Our Services</h2>
          <p className="section-desc">
            Booking for both theatre and turf happens{" "}
            <strong>only via the Smart Booking Bot</strong>. This website will
            never ask for payment or seat details – everything goes through
            chat.
          </p>

          <div className="service-grid">
            <div className="service-card">
              <h3>🎬 Theatre Booking (via Bot)</h3>
              <p>
                Ticket booking is done inside the Smart Booking Bot. The user
                answers simple questions and gets a clear summary.
              </p>
              <ul>
                <li>Choose “Theatre Booking” in the bot</li>
                <li>View movies & show timings</li>
                <li>Select date, time, class & ticket count</li>
                <li>Receive booking summary in chat</li>
              </ul>
              <button className="btn-outline" onClick={openBot}>
                Open Bot for Theatre
              </button>
            </div>

            <div className="service-card">
              <h3>⚽ Turf Booking (via Bot)</h3>
              <p>
                Turf slot booking is also inside the bot, so timing and player
                details are always correct.
              </p>
              <ul>
                <li>Select “Turf Booking” in the bot</li>
                <li>Choose game type (football / cricket etc.)</li>
                <li>Pick date, time slot and players count</li>
                <li>Confirm slot from bot summary</li>
              </ul>
              <button className="btn-outline" onClick={openBot}>
                Open Bot for Turf
              </button>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="section">
          <h2 className="section-title">Contact Neesmu Mahal</h2>
          <p className="section-desc">
            For doubts about shows or turf availability, contact us directly.
            For final booking details, always trust the Smart Booking Bot.
          </p>

          <div className="contact-grid">
            <div className="contact-card">
              <h3>Venue Address</h3>
              <p>
                <strong>Neesmu Mahal</strong>
                <br />
                45, Royal Street, Lakshmi Nagar
                <br />
                Sivakasi – 626123, Tamil Nadu
              </p>

              <h3>Reach Us</h3>
              <p>
                📞 <strong>+91 90876 54321</strong>
                <br />
                ✉️ <strong>neesmu.mahal@venue2025.com</strong>
              </p>

              <p className="handle">
                Social handle: <strong>@neesumu2025</strong>
              </p>
            </div>

            <div className="contact-card">
              <h3>Social Media</h3>
              <p>Follow & message us any time.</p>
              <div className="social-row">
                <div className="social-icon">f</div>
                <div className="social-icon">IG</div>
                <div className="social-icon">▶</div>
                <div className="social-icon">WA</div>
                <div className="social-icon">📍</div>
              </div>
              <button className="btn-primary contact-btn" onClick={openBot}>
                Chat in Smart Booking Bot
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* FLOATING BOT BUTTON */}
      <button className="floating-bot" onClick={openBot}>
        🤖
      </button>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-top">
          <span>© 2025 Neesmu Mahal. All rights reserved.</span>
          <div className="footer-social">
            <div className="social-icon small">f</div>
            <div className="social-icon small">IG</div>
            <div className="social-icon small">▶</div>
            <div className="social-icon small">WA</div>
            <div className="social-icon small">📍</div>
          </div>
        </div>
        <p className="footer-sub">
          Clean dark design • Square images • Booking only via Smart Booking
          Bot.
        </p>
      </footer>
    </div>
  );
};

export default App;
