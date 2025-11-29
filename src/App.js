import React, { useState, useEffect } from "react";
import "./App.css";

const sliderItems = [
  {
    id: 0,
    label: "Neesmu Mahal",
    title: "Royal Mahal Entrance",
    subtitle: "Perfect for events & celebrations",
    img: "https://i.pinimg.com/736x/70/ee/9d/70ee9dc93bc4916f57bcab3a719b5185.jpg",
  },
  {
    id: 1,
    label: "Mini Theatre",
    title: "Premium Movie Experience",
    subtitle: "Comfortable seats, HD screen & sound",
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

  // simple auto slider
  useEffect(() => {
    const id = setInterval(
      () => setCurrent((prev) => (prev + 1) % sliderItems.length),
      5000
    );
    return () => clearInterval(id);
  }, []);

  const goTo = (idx) => setCurrent(idx);

  return (
    <div className="site-root">
      {/* NAV */}
      <header className="nav">
        <div className="nav-left">
          <div className="logo-orb">N</div>
          <div className="logo-text">
            <span className="logo-title">Neesmu Mahal</span>
            <span className="logo-sub">Theatre • Turf • Events</span>
          </div>
        </div>

        <nav className="nav-links">
          <button
            onClick={() =>
              document.getElementById("home").scrollIntoView({ behavior: "smooth" })
            }
          >
            Home
          </button>
          <button
            onClick={() =>
              document.getElementById("about").scrollIntoView({ behavior: "smooth" })
            }
          >
            About
          </button>
          <button
            onClick={() =>
              document
                .getElementById("services")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            Services
          </button>
          <button
            onClick={() =>
              document
                .getElementById("contact")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            Contact
          </button>
        </nav>

        <button className="nav-cta" onClick={openBot}>
          Open Smart Booking Bot
        </button>
      </header>

      <main>
        {/* HOME */}
        <section id="home" className="hero">
          <div className="hero-left">
            <p className="hero-chip">Royal • Dark • Bot Powered</p>
            <h1>
              <span className="hero-highlight">Neesmu Mahal</span>
              <br />
              Theatre & Turf booking, bot mooliya thelivaa.
            </h1>
            <p className="hero-text">
              Neesmu Mahal is a modern entertainment space with a{" "}
              <strong>premium mini-theatre</strong> and a{" "}
              <strong>multi-sport turf ground</strong>. All bookings are handled
              only through our <strong>Smart Booking Bot</strong> – the website
              is for clear information and guidance.
            </p>
            <div className="hero-actions">
              <button className="btn-primary" onClick={openBot}>
                Start Booking in Bot
              </button>
              <button
                className="btn-ghost"
                onClick={() =>
                  document
                    .getElementById("about")
                    .scrollIntoView({ behavior: "smooth" })
                }
              >
                Know more about Mahal
              </button>
            </div>
            <div className="hero-tags">
              <span>Mobile • Tablet • PC</span>
              <span>Dark & Simple</span>
              <span>Bot Based Booking</span>
            </div>
          </div>

          {/* slider with simple mirror image */}
          <div className="hero-right">
            <div className="slider-card">
              <div className="image-with-mirror">
                <div className="image-main">
                  <img
                    src={sliderItems[current].img}
                    alt={sliderItems[current].label}
                  />
                </div>
                <div className="image-reflection">
                  <img
                    src={sliderItems[current].img}
                    alt={sliderItems[current].label + " reflection"}
                  />
                </div>
              </div>

              <div className="slider-text">
                <span className="slider-label">
                  {sliderItems[current].label}
                </span>
                <h3>{sliderItems[current].title}</h3>
                <p>{sliderItems[current].subtitle}</p>
              </div>

              <div className="slider-dots">
                {sliderItems.map((it, i) => (
                  <button
                    key={it.id}
                    className={i === current ? "dot dot-active" : "dot"}
                    onClick={() => goTo(i)}
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
            Neesmu Mahal is a <strong>royal but simple</strong> venue built for
            both movies and games. The space includes a{" "}
            <strong>mini-theatre</strong> for all kinds of films and a{" "}
            <strong>turf ground</strong> for multiple sports. Users first see
            this website, understand the options, and then complete booking
            inside the Smart Booking Bot.
          </p>

          <div className="about-grid">
            {/* Theatre */}
            <article className="info-card">
              <div className="image-with-mirror small">
                <div className="image-main">
                  <img
                    src="https://t3.ftcdn.net/jpg/03/74/28/58/360_F_374285858_KzJ88FysqJ79AhyNPW2lqnBtsRTokuav.jpg"
                    alt="Theatre hall"
                  />
                </div>
                <div className="image-reflection">
                  <img
                    src="https://t3.ftcdn.net/jpg/03/74/28/58/360_F_374285858_KzJ88FysqJ79AhyNPW2lqnBtsRTokuav.jpg"
                    alt="Theatre reflection"
                  />
                </div>
              </div>
              <h3>Mini Theatre – All Types of Movies</h3>
              <p>
                The mini-theatre supports <strong>all movie types</strong> –
                Tamil, English, Hindi and special fan shows with HD projection
                and clear sound.
              </p>
              <ul>
                <li>Latest releases & classic movies</li>
                <li>Trailer links and basic details shown in the bot</li>
                <li>VIP / Balcony / Regular seating choices</li>
                <li>Group screenings for family & friends</li>
              </ul>
            </article>

            {/* Turf */}
            <article className="info-card">
              <div className="image-with-mirror small">
                <div className="image-main">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1Y0mZ_uonz28R2Rk5sC4QO95XaUbyKARp8w&s"
                    alt="Turf ground"
                  />
                </div>
                <div className="image-reflection">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1Y0mZ_uonz28R2Rk5sC4QO95XaUbyKARp8w&s"
                    alt="Turf reflection"
                  />
                </div>
              </div>
              <h3>Turf Ground – All Types of Games</h3>
              <p>
                The turf area is designed for <strong>football</strong>,{" "}
                <strong>cricket</strong>, <strong>box-cricket</strong>, fitness
                drills and friendly tournaments, including night games.
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
            Neesmu Mahal bookings are done <strong>only</strong> through the
            Smart Booking Bot. This website does not collect payment or booking
            details – it only explains how the process works.
          </p>

          <div className="service-grid">
            <div className="service-card">
              <h3>🎬 Theatre Booking (via Bot)</h3>
              <p>
                Movie ticket booking is completely handled inside the Smart
                Booking Bot. The user will never fill any theatre form on this
                site.
              </p>
              <ul>
                <li>Choose “Theatre Booking” option in the bot</li>
                <li>View movies, timings & basic details</li>
                <li>Select date, show time, seat class & ticket count</li>
                <li>Get a clear confirmation summary in chat</li>
              </ul>
              <button className="btn-outline" onClick={openBot}>
                Open Bot for Theatre
              </button>
            </div>

            <div className="service-card">
              <h3>⚽ Turf Booking (via Bot)</h3>
              <p>
                Turf slot booking is also done only in the Smart Booking Bot for
                correct timing and player details.
              </p>
              <ul>
                <li>Select “Turf Booking” option in the bot</li>
                <li>Choose game type (football / cricket etc.)</li>
                <li>Pick date, time slot and number of players</li>
                <li>Review final slot summary sent by the bot</li>
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
            For doubts about theatre shows or turf availability, you can contact
            us. For booking confirmation, always depend on the Smart Booking
            Bot.
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

      {/* floating bot button */}
      <button className="floating-bot" onClick={openBot}>
        🤖
      </button>

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
          Clean dark design • Simple mirror effect • Booking only via Smart
          Booking Bot.
        </p>
      </footer>
    </div>
  );
};

export default App;
