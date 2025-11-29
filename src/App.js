import React, { useState } from "react";
import "./App.css";

const THEATRE_MOVIES = [
  {
    id: 1,
    title: "Leo – Special Show",
    language: "Tamil",
    rating: 4.7,
    duration: "2h 45m",
    trailerUrl: "https://www.youtube.com/watch?v=Po3jStA673E",
    classes: ["VIP", "Premium", "Economy"],
  },
  {
    id: 2,
    title: "Jailer – Night Show",
    language: "Tamil",
    rating: 4.5,
    duration: "2h 40m",
    trailerUrl: "https://www.youtube.com/watch?v=xenOE1Tma0A",
    classes: ["Balcony", "First Class", "Second Class"],
  },
];

const TURF_PACKAGES = [
  {
    id: 1,
    title: "Morning Session",
    time: "6:00 AM – 9:00 AM",
    maxPlayers: 14,
    highlights: ["Cool weather", "Perfect for practice"],
  },
  {
    id: 2,
    title: "Evening Session",
    time: "5:00 PM – 8:00 PM",
    maxPlayers: 14,
    highlights: ["After office/college", "Match friendly slots"],
  },
  {
    id: 3,
    title: "Night Session",
    time: "8:00 PM – 11:00 PM",
    maxPlayers: 14,
    highlights: ["Flood lights", "Weekend vibes"],
  },
];

function App() {
  const [activeTab, setActiveTab] = useState("theatre");

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="app-root">
      {/* NAVBAR */}
      <header className="nav">
        <div className="nav-left" onClick={() => scrollToSection("hero")}>
          <div className="logo-circle">M</div>
          <div className="logo-text">
            <span className="logo-title">Moonlight Mahal</span>
            <span className="logo-sub">Theatre • Turf • Events</span>
          </div>
        </div>
        <nav className="nav-links">
          <button onClick={() => scrollToSection("theatre-section")}>
            Theatre
          </button>
          <button onClick={() => scrollToSection("turf-section")}>Turf</button>
          <button onClick={() => scrollToSection("bot-section")}>
            Smart Bot
          </button>
        </nav>
      </header>

      {/* HERO SECTION */}
      <section id="hero" className="hero">
        <div className="hero-content">
          <h1>
            Book <span className="accent">Theatre</span> &{" "}
            <span className="accent">Turf</span> in one smart place.
          </h1>
          <p>
            Our website + AI booking bot makes it easy to reserve{" "}
            <strong>movie tickets</strong> and <strong>turf slots</strong>{" "}
            <br />
            – clear options, instant confirmation, zero confusion.
          </p>

          <div className="hero-buttons">
            <button
              className="btn-primary"
              onClick={() => scrollToSection("bot-section")}
            >
              Book via Smart Bot
            </button>
            <button
              className="btn-ghost"
              onClick={() => scrollToSection("theatre-section")}
            >
              View Theatre & Turf Details
            </button>
          </div>

          <div className="hero-tags">
            <span>Mobile Friendly</span>
            <span>Fast Booking</span>
            <span>24/7 Bot Support</span>
          </div>
        </div>

        {/* Mirror effect card */}
        <div className="hero-mirror-wrapper">
          <div className="mirror-card">
            <div className="mirror-inner">
              <div className="mirror-pill">LIVE DEMO</div>
              <h2>SalesIQ Smart Booking Bot</h2>
              <p>
                • Shows movies, trailers & feedback
                <br />• Asks date, time, class & tickets
                <br />• Handles turf date, time & members
                <br />• Sends booking summary clearly
              </p>
              <div className="mirror-badges">
                <span>Theatre Booking</span>
                <span>Turf Booking</span>
                <span>Multi-device</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BOOKING FLOW SECTION */}
      <section className="flow-section">
        <h2>How booking works for your users</h2>
        <p className="section-sub">
          In this site, users understand everything clearly. The actual booking{" "}
          <strong>happens in the SalesIQ bot</strong>.
        </p>

        <div className="flow-grid">
          <div className="flow-card">
            <span className="flow-step">Step 1</span>
            <h3>Select Theatre or Turf</h3>
            <p>
              From the homepage or menu, user chooses whether they want{" "}
              <strong>Movie Ticket</strong> or <strong>Turf Slot</strong>.
            </p>
          </div>
          <div className="flow-card">
            <span className="flow-step">Step 2</span>
            <h3>Open Smart Bot</h3>
            <p>
              User clicks <strong>“Book via Smart Bot”</strong>. SalesIQ bot
              opens and shows options for Theatre & Turf.
            </p>
          </div>
          <div className="flow-card">
            <span className="flow-step">Step 3</span>
            <h3>Bot collects details</h3>
            <p>
              Bot asks all details clearly – movie, date, show time, class,
              number of tickets or turf time & members.
            </p>
          </div>
          <div className="flow-card">
            <span className="flow-step">Step 4</span>
            <h3>Confirmation</h3>
            <p>
              Bot shows booking summary. Later you can add{" "}
              <strong>payment / confirmation message</strong> in the bot flow.
            </p>
          </div>
        </div>
      </section>

      {/* THEATRE / TURF TABS */}
      <section className="details-section">
        <div className="tab-header">
          <button
            className={
              activeTab === "theatre" ? "tab-button active" : "tab-button"
            }
            onClick={() => setActiveTab("theatre")}
          >
            Theatre
          </button>
          <button
            className={
              activeTab === "turf" ? "tab-button active" : "tab-button"
            }
            onClick={() => setActiveTab("turf")}
          >
            Turf
          </button>
        </div>

        {activeTab === "theatre" && (
          <div id="theatre-section" className="tab-content">
            <h2>Theatre Booking – What user will see in the bot</h2>
            <p className="section-sub">
              Below we explain clearly what information your{" "}
              <strong>SalesIQ bot</strong> will ask for movie bookings.
            </p>

            <div className="movie-grid">
              {THEATRE_MOVIES.map((movie) => (
                <div key={movie.id} className="movie-card fade-up">
                  <div className="movie-poster">
                    <span className="poster-tag">Now Showing</span>
                    <span className="poster-title">{movie.title}</span>
                  </div>
                  <div className="movie-body">
                    <div className="movie-row">
                      <span>{movie.language}</span>
                      <span>{movie.duration}</span>
                    </div>
                    <div className="movie-rating">
                      ⭐ {movie.rating} / 5
                    </div>

                    <div className="movie-classes">
                      {movie.classes.map((cls) => (
                        <span key={cls}>{cls}</span>
                      ))}
                    </div>

                    <div className="movie-actions">
                      <a
                        href={movie.trailerUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="btn-outline"
                      >
                        Watch Trailer
                      </a>
                      <button
                        className="btn-primary small"
                        onClick={() => scrollToSection("bot-section")}
                      >
                        Book via Bot
                      </button>
                    </div>

                    <p className="movie-note">
                      🔹 In the bot: User selects movie, then chooses{" "}
                      <strong>date, show time, class</strong> and{" "}
                      <strong>how many tickets</strong>.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "turf" && (
          <div id="turf-section" className="tab-content">
            <h2>Turf Booking – What user will see in the bot</h2>
            <p className="section-sub">
              For turf, the bot will ask for <strong>date, time slot</strong>{" "}
              and <strong>number of players</strong>.
            </p>

            <div className="turf-grid">
              {TURF_PACKAGES.map((slot) => (
                <div key={slot.id} className="turf-card fade-up">
                  <h3>{slot.title}</h3>
                  <p className="turf-time">{slot.time}</p>
                  <p className="turf-players">
                    Max players: <strong>{slot.maxPlayers}</strong>
                  </p>
                  <ul className="turf-list">
                    {slot.highlights.map((h) => (
                      <li key={h}>{h}</li>
                    ))}
                  </ul>
                  <button
                    className="btn-primary small"
                    onClick={() => scrollToSection("bot-section")}
                  >
                    Book this slot via Bot
                  </button>
                  <p className="turf-note">
                    🔹 In the bot: User selects date, this slot, then tells{" "}
                    <strong>how many members</strong>.
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>

      {/* BOT SHOWCASE SECTION */}
      <section id="bot-section" className="bot-section">
        <div className="bot-layout">
          <div className="bot-info">
            <h2>SalesIQ Booking Bot – Clear, simple & powerful</h2>
            <p>
              This website is only to <strong>explain clearly</strong> how
              booking works. When user clicks the button below, your{" "}
              <strong>Zoho SalesIQ bot</strong> will open and handle:
            </p>
            <ul className="bot-list">
              <li>🎬 Theatre – movie, trailer link, feedback, show time.</li>
              <li>🎟️ Tickets – number of tickets, class, date & time.</li>
              <li>⚽ Turf – date, slot time, how many members.</li>
              <li>📩 Final summary – neat confirmation message.</li>
            </ul>

            <button className="btn-primary big">
              Open Booking Bot (SalesIQ)
            </button>

            <p className="small-hint">
              <strong>Dev note:</strong> Here you will add your SalesIQ script
              to open the bot – either as a chat widget or popup screen.
            </p>
          </div>

          {/* Fake chat preview with mirror style */}
          <div className="bot-preview mirror-card">
            <div className="bot-chat-window">
              <div className="bot-header">
                <span className="bot-dot"></span>
                <span className="bot-dot"></span>
                <span className="bot-dot"></span>
                <span className="bot-title">Moonlight Booking Bot</span>
              </div>
              <div className="bot-chat-body">
                <div className="bot-msg bot">
                  👋 Hi! What would you like to book today?
                  <br />
                  <strong>1) Theatre • 2) Turf</strong>
                </div>
                <div className="bot-msg user">I want Theatre tickets 🎬</div>
                <div className="bot-msg bot">
                  Super! Please select:
                  <br />
                  • Movie
                  <br />
                  • Date & show time
                  <br />
                  • Class
                  <br />• Number of tickets
                </div>
                <div className="bot-msg user">
                  Movie: Leo, 2 VIP tickets at 7:30 PM.
                </div>
                <div className="bot-msg bot highlight">
                  ✅ Your booking request:
                  <br />
                  • Movie: Leo
                  <br />
                  • Class: VIP
                  <br />
                  • 2 Tickets, 7:30 PM
                  <br />
                  We&apos;ll confirm shortly. Thank you! 🙌
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FLOATING BOT BUTTON (for SalesIQ) */}
      <button
        className="floating-bot-btn"
        onClick={() => scrollToSection("bot-section")}
      >
        🤖
      </button>

      {/* FOOTER */}
      <footer className="footer">
        <p>© {new Date().getFullYear()} Moonlight Mahal. All rights reserved.</p>
        <p className="footer-sub">
          Designed for clear <strong>Theatre & Turf</strong> bookings with Zoho
          SalesIQ.
        </p>
      </footer>
    </div>
  );
}

export default App;
