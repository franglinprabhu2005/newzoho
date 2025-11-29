import React, { useState, useEffect } from "react";
import "./App.css";

const sliderItems = [
  {
    id: 0,
    label: "Neesmu Mahal",
    title: "Royal Mahal Entrance",
    subtitle: "Perfect for events & celebrations",
    img: "https://i.pinimg.com/564x/f0/1e/4e/f01e4e11b8b77e6f3b4e06efb3e7f8d4.jpg",
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

  // Auto slide
  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((prev) => (prev + 1) % sliderItems.length);
    }, 4500);
    return () => clearInterval(id);
  }, []);

  const goTo = (index) => setCurrent(index);

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
          <button onClick={() => document.getElementById("home").scrollIntoView({ behavior: "smooth" })}>Home</button>
          <button onClick={() => document.getElementById("about").scrollIntoView({ behavior: "smooth" })}>About</button>
          <button onClick={() => document.getElementById("services").scrollIntoView({ behavior: "smooth" })}>Services</button>
          <button onClick={() => document.getElementById("contact").scrollIntoView({ behavior: "smooth" })}>Contact</button>
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
              Neesmu Mahal is a modern entertainment space with a{" "}
              <strong>premium mini-theatre</strong> and a{" "}
              <strong>multi-sport turf ground</strong>. All bookings are handled
              only through our <strong>Smart Booking Bot</strong> – not by
              website forms.
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
              <span>Dark & Royal</span>
              <span>Bot Based Booking</span>
            </div>
          </div>

          {/* SLIDER RIGHT */}
          <div className="hero-right">
            <div className="slider mirror-card">
              <div className="slider-square neon-border">
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
                {sliderItems.map((item, index) => (
                  <button
                    key={item.id}
                    className={
                      index === current ? "dot active-dot" : "dot"
                    }
                    onClick={() => goTo(index)}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="section about">
          <h2 className="section-title">About Neesmu Mahal</h2>
          <p className="section-desc">
            Neesmu Mahal is designed as a <strong>royal yet modern</strong>{" "}
            space for movies and games. The venue combines a{" "}
            <strong>mini-theatre</strong> for all types of movies and a{" "}
            <strong>turf ground</strong> that supports different sports and
            events. Everything is simple for the user – they see this site, and
            then finish their booking using the Smart Booking Bot.
          </p>

          <div className="about-grid">
            {/* Theatre card */}
            <article className="about-card">
              <div className="square-wrapper neon-border">
                <img
                  src="https://t3.ftcdn.net/jpg/03/74/28/58/360_F_374285858_KzJ88FysqJ79AhyNPW2lqnBtsRTokuav.jpg"
                  alt="Theatre hall"
                />
              </div>
              <h3>Mini Theatre – All Types of Movies</h3>
              <p>
                Our mini-theatre supports <strong>all movie types</strong> –
                Tamil, English, Hindi, and special shows. With HD projection,
                powerful sound and comfortable seating, it is perfect for
                group screenings and private shows.
              </p>
              <ul>
                <li>Latest releases & special shows</li>
                <li>Trailers and basic movie info in the bot</li>
                <li>VIP, Balcony and Regular seating options</li>
                <li>Family & friends group bookings</li>
              </ul>
            </article>

            {/* Turf card */}
            <article className="about-card">
              <div className="square-wrapper neon-border">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1Y0mZ_uonz28R2Rk5sC4QO95XaUbyKARp8w&s"
                  alt="Turf ground"
                />
              </div>
              <h3>Turf Ground – All Types of Games</h3>
              <p>
                The Neesmu turf is suitable for <strong>football</strong>,{" "}
                <strong>cricket</strong>, <strong>box cricket</strong>, fitness
                drills and friendly tournaments, including night matches under
                lights.
              </p>
              <ul>
                <li>Football 5s / 7s matches</li>
                <li>Cricket & box cricket practice</li>
                <li>Evening & night light sessions</li>
                <li>College & office events</li>
              </ul>
            </article>
          </div>
        </section>

        {/* SERVICES SECTION */}
        <section id="services" className="section services">
          <h2 className="section-title">Our Services</h2>
          <p className="section-desc">
            All bookings for Neesmu Mahal are handled strictly{" "}
            <strong>through the Smart Booking Bot only</strong>. This website
            is for clear information – booking form or payment is not available
            here.
          </p>

          <div className="service-grid">
            {/* Theatre service */}
            <div className="service-card mirror-card">
              <div className="square-wrapper neon-border small-square">
                <img
                  src="https://t3.ftcdn.net/jpg/03/74/28/58/360_F_374285858_KzJ88FysqJ79AhyNPW2lqnBtsRTokuav.jpg"
                  alt="Theatre service"
                />
              </div>
              <h3>🎬 Theatre Booking (via Bot)</h3>
              <p>
                Theatre tickets are booked only inside the{" "}
                <strong>Smart Booking Bot</strong>. The website will never ask
                for payment or seat count directly.
              </p>
              <ul>
                <li>User chooses “Theatre Booking” in the bot</li>
                <li>Bot shows movie list, basic info & trailer link</li>
                <li>Date, show time, class & tickets count collected</li>
                <li>Final confirmation recap sent inside the chat</li>
              </ul>
              <button className="btn-outline" onClick={openBot}>
                Open Bot for Theatre
              </button>
            </div>

            {/* Turf service */}
            <div className="service-card mirror-card">
              <div className="square-wrapper neon-border small-square">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1Y0mZ_uonz28R2Rk5sC4QO95XaUbyKARp8w&s"
                  alt="Turf service"
                />
              </div>
              <h3>⚽ Turf Booking (via Bot)</h3>
              <p>
                Turf slots are also booked only using the{" "}
                <strong>Smart Booking Bot</strong>. No direct web booking –
                everything comes through chat, so details are correct.
              </p>
              <ul>
                <li>User selects “Turf Booking” in the bot</li>
                <li>Game type, date & time slot chosen</li>
                <li>Player count & special notes captured</li>
                <li>Summary message confirms the slot</li>
              </ul>
              <button className="btn-outline" onClick={openBot}>
                Open Bot for Turf
              </button>
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="section contact">
          <h2 className="section-title">Contact Neesmu Mahal</h2>
          <p className="section-desc">
            For any questions about theatre or turf, feel free to reach us. For
            booking confirmations, always use the Smart Booking Bot.
          </p>

          <div className="contact-grid">
            <div className="contact-info">
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

            <div className="contact-social">
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

      {/* FLOAT BOT BUTTON */}
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
          Dark & royal UI • Square images with running light • Booking only via
          Smart Booking Bot.
        </p>
      </footer>
    </div>
  );
};

export default App;
