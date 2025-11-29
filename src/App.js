import React, { useState, useEffect } from "react";
import "./App.css";

const sliderItems = [
  {
    id: 0,
    label: "Neesmu Mahal",
    title: "Royal Mahal Entrance",
    subtitle: "Perfect for weddings, receptions and events.",
    img: "https://i.pinimg.com/736x/70/ee/9d/70ee9dc93bc4916f57bcab3a719b5185.jpg",
  },
  {
    id: 1,
    label: "Mini Theatre",
    title: "Premium Movie Experience",
    subtitle: "Comfortable seating, HD screen and clear sound.",
    img: "https://t3.ftcdn.net/jpg/03/74/28/58/360_F_374285858_KzJ88FysqJ79AhyNPW2lqnBtsRTokuav.jpg",
  },
  {
    id: 2,
    label: "Turf Ground",
    title: "All Sports Friendly Turf",
    subtitle: "Football, cricket and practice sessions under lights.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1Y0mZ_uonz28R2Rk5sC4QO95XaUbyKARp8w&s",
  },
];

const App = () => {
  const [current, setCurrent] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const openBot = () => {
    alert("Booking only via Smart Booking Bot (integration coming soon).");
  };

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
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
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

        {/* Desktop nav */}
        <nav className="nav-links nav-links-desktop">
          <button onClick={() => scrollTo("home")}>Home</button>
          <button onClick={() => scrollTo("about")}>About</button>
          <button onClick={() => scrollTo("services")}>Services</button>
          <button onClick={() => scrollTo("contact")}>Contact</button>
        </nav>

        {/* Mobile menu icon */}
        <button
          className="nav-menu-btn"
          onClick={() => setMobileMenuOpen((p) => !p)}
          aria-label="Toggle navigation"
        >
          ☰
        </button>

        <button className="nav-cta" onClick={openBot}>
          Smart Booking Bot
        </button>
      </header>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="mobile-menu">
          <button onClick={() => scrollTo("home")}>Home</button>
          <button onClick={() => scrollTo("about")}>About</button>
          <button onClick={() => scrollTo("services")}>Services</button>
          <button onClick={() => scrollTo("contact")}>Contact</button>
        </div>
      )}

      <main>
        {/* HOME – CENTER HERO + SLIDER */}
        <section id="home" className="hero">
          <div className="hero-inner">
            <p className="hero-chip">Neesmu Mahal • Dark simple UI</p>
            <h1>
              <span className="hero-highlight">Theatre & Turf booking</span>
              <br />
              bot mooliya thelivaa.
            </h1>
            <p className="hero-text">
              Neesmu Mahal is a modern venue with a{" "}
              <strong>premium mini-theatre</strong> and a{" "}
              <strong>multi-sport turf ground</strong>. All bookings happen only
              inside the <strong>Smart Booking Bot</strong>. This website
              simply explains the steps in a clean way.
            </p>

            <div className="hero-actions">
              <button className="btn-primary" onClick={openBot}>
                Start Booking in Bot
              </button>
              <button
                className="btn-ghost"
                onClick={() => scrollTo("about")}
              >
                See Mahal details
              </button>
            </div>

            <div className="hero-tags">
              <span>Mobile • Tablet • PC</span>
              <span>Dark & simple</span>
              <span>Bot based booking</span>
            </div>

            {/* Slider center */}
            <div className="slider">
              <div className="slider-image">
                <img
                  src={sliderItems[current].img}
                  alt={sliderItems[current].label}
                />
              </div>
              <div className="slider-caption">
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
                    className={idx === current ? "dot dot-active" : "dot"}
                    onClick={() => goTo(idx)}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="section">
          <h2 className="section-title">About Neesmu Mahal</h2>
          <p className="section-desc">
            Neesmu Mahal is a <strong>simple and royal</strong> venue in Sivakasi
            with two main facilities – a <strong>mini theatre</strong> for
            movies and a <strong>turf ground</strong> for games. Users first
            see the details here and then finish booking through the Smart
            Booking Bot.
          </p>

          <div className="about-card">
            <div className="about-image">
              <img
                src="https://t3.ftcdn.net/jpg/03/74/28/58/360_F_374285858_KzJ88FysqJ79AhyNPW2lqnBtsRTokuav.jpg"
                alt="Theatre hall"
              />
            </div>
            <div className="about-content">
              <h3>Mini Theatre – All Types of Movies</h3>
              <p>
                The mini theatre supports <strong>all movie types</strong> –
                Tamil, English, Hindi and special fan shows with HD screen and
                powerful sound.
              </p>
              <ul>
                <li>Latest releases & classic movies</li>
                <li>Trailer links & basic info shown in the bot</li>
                <li>VIP / Balcony / Regular seating classes</li>
                <li>Private group screenings for family & friends</li>
              </ul>
            </div>
          </div>

          <div className="about-card">
            <div className="about-image">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1Y0mZ_uonz28R2Rk5sC4QO95XaUbyKARp8w&s"
                alt="Turf ground"
              />
            </div>
            <div className="about-content">
              <h3>Turf Ground – All Types of Games</h3>
              <p>
                The turf space is perfect for <strong>football</strong>,{" "}
                <strong>cricket</strong>, <strong>box cricket</strong>, fitness
                drills and friendly tournaments, including night matches.
              </p>
              <ul>
                <li>Football 5s / 7s friendly matches</li>
                <li>Cricket & box-cricket practice</li>
                <li>Evening & night sessions under lights</li>
                <li>College, school & office events</li>
              </ul>
            </div>
          </div>
        </section>

        {/* SERVICES SECTION */}
        <section id="services" className="section">
          <h2 className="section-title">Our Services</h2>
          <p className="section-desc">
            Both <strong>Theatre</strong> and <strong>Turf</strong> bookings are
            done <strong>only via the Smart Booking Bot</strong>. This website
            will not take payments or seat details – everything happens in the
            chat.
          </p>

          <div className="service-grid">
            <div className="service-card">
              <h3>🎬 Theatre Booking (via Bot)</h3>
              <p>
                Ticket booking is handled inside the Smart Booking Bot with
                simple step-by-step questions.
              </p>
              <ul>
                <li>Select “Theatre Booking” option in the bot</li>
                <li>See movie list, show timings & basic details</li>
                <li>Choose date, time, class & ticket count</li>
                <li>Get a clean booking summary in chat</li>
              </ul>
              <button className="btn-outline" onClick={openBot}>
                Open Bot for Theatre
              </button>
            </div>

            <div className="service-card">
              <h3>⚽ Turf Booking (via Bot)</h3>
              <p>
                Turf slot booking is also done in the bot to avoid confusion on
                time and player count.
              </p>
              <ul>
                <li>Select “Turf Booking” option in the bot</li>
                <li>Choose game type (football / cricket etc.)</li>
                <li>Pick date, time slot and players count</li>
                <li>Confirm from the final summary message</li>
              </ul>
              <button className="btn-outline" onClick={openBot}>
                Open Bot for Turf
              </button>
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="section">
          <h2 className="section-title">Contact Neesmu Mahal</h2>
          <p className="section-desc">
            For show details or turf availability, contact us using the details
            below. Booking confirmation always comes from the Smart Booking Bot.
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
              <p>Follow and message us any time.</p>
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
          Clean dark layout • Auto sliding images • Booking only via Smart
          Booking Bot.
        </p>
      </footer>
    </div>
  );
};

export default App;
