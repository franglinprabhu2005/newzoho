import React from "react";
import "./App.css";

const App = () => {
  // Inga than later nee un bot open panna function connect pannuva
  const openBot = () => {
    // Later: replace with actual chat bot open code
    alert("Booking bot integration yet to be connected.");
  };

  return (
    <div className="mahal-app">
      {/* NAVBAR */}
      <header className="top-nav">
        <div className="brand-block">
          <div className="brand-logo">M</div>
          <div className="brand-text">
            <span className="brand-title">Moonlight Mahal</span>
            <span className="brand-sub">Theatre • Turf • Events</span>
          </div>
        </div>
        <button className="nav-btn" onClick={openBot}>
          Open Booking Bot
        </button>
      </header>

      {/* HERO */}
      <main className="main-wrap">
        <section className="hero-section">
          <div className="hero-left">
            <p className="hero-pill">Dark theme • Flip cards • Bot guide</p>
            <h1>
              Theatre & Turf booking,
              <br />
              <span className="hero-gradient">bot mooliya thelivaa.</span>
            </h1>
            <p className="hero-text">
              Intha site la user ku just{" "}
              <strong>epdi bot la book pannuradhu</strong> nu explanation
              kudukkum.
              <br />
              Actual booking ellam <strong>Smart Booking Bot</strong> la than
              nadakkum.
            </p>

            <div className="hero-actions">
              <button className="primary-btn" onClick={openBot}>
                Start Booking in Bot
              </button>
              <button
                className="ghost-btn"
                onClick={() =>
                  document
                    .getElementById("flip-section")
                    .scrollIntoView({ behavior: "smooth" })
                }
              >
                See how it works
              </button>
            </div>

            <div className="hero-tags">
              <span>Mobile • Tablet • PC</span>
              <span>Clear booking steps</span>
              <span>Just explanation, no payment</span>
            </div>
          </div>

          {/* Center image with subtle glow (Mahal image) */}
          <div className="hero-right">
            <div className="hero-image-glow">
              <img
                src="https://images.pexels.com/photos/169211/pexels-photo-169211.jpeg"
                alt="Wedding mahal / hall"
              />
            </div>
            <p className="hero-img-caption">
              * Sample mahal image – unga mahal oda photo URL podalaam
            </p>
          </div>
        </section>

        {/* FLIP CARD SECTION */}
        <section id="flip-section" className="flip-section">
          <h2 className="section-title">Booking flow – flip cards la clear aa</h2>
          <p className="section-sub">
            Keela irukkura flip cards la{" "}
            <strong>Theatre</strong>, <strong>Turf</strong>,{" "}
            <strong>Bot features</strong>, <strong>Site role</strong> ellam
            thelivaa kanikkum.
          </p>

          <div className="flip-grid">
            {/* THEATRE CARD */}
            <div className="flip-card">
              <div className="flip-inner">
                {/* FRONT */}
                <div className="flip-face flip-front theatre-front">
                  <div className="flip-overlay" />
                  <div className="flip-content">
                    <span className="flip-tag">Theatre</span>
                    <h3>Movie ticket booking</h3>
                    <p>Red seats, big screen – theatre booking bot la.</p>
                  </div>
                </div>
                {/* BACK */}
                <div className="flip-face flip-back">
                  <h3>Bot la theatre book panna:</h3>
                  <ul>
                    <li>1. Movie list la irundhu movie select</li>
                    <li>2. Trailer link open pannitu parka chance</li>
                    <li>3. Feedback / rating pathu decide pannalam</li>
                    <li>4. Date & show time choose pannuvanga</li>
                    <li>5. Class (VIP / Balcony / First) select</li>
                    <li>6. Yethana perukku ticket venum nu type pannuvanga</li>
                  </ul>
                  <p className="flip-note">
                    Itha ellam bot dhan kelvi ketkum – site la just explain
                    pannuvom.
                  </p>
                </div>
              </div>
            </div>

            {/* TURF CARD */}
            <div className="flip-card">
              <div className="flip-inner">
                {/* FRONT */}
                <div className="flip-face flip-front turf-front">
                  <div className="flip-overlay" />
                  <div className="flip-content">
                    <span className="flip-tag">Turf</span>
                    <h3>Football / cricket turf slots</h3>
                    <p>Green turf, flood lights – night vibes.</p>
                  </div>
                </div>
                {/* BACK */}
                <div className="flip-face flip-back">
                  <h3>Bot la turf book panna:</h3>
                  <ul>
                    <li>1. Turf option select (Football / Cricket)</li>
                    <li>2. Date choose</li>
                    <li>3. Time slot (Morning / Evening / Night)</li>
                    <li>4. How many members (players count) solranga</li>
                    <li>5. Bot summary message la full details kaamikum</li>
                  </ul>
                  <p className="flip-note">
                    Turf ku separate image + step-by-step flow user ku clear.
                  </p>
                </div>
              </div>
            </div>

            {/* BOT FEATURES CARD */}
            <div className="flip-card">
              <div className="flip-inner">
                {/* FRONT */}
                <div className="flip-face flip-front bot-front">
                  <div className="flip-overlay" />
                  <div className="flip-content">
                    <span className="flip-tag">Smart Bot</span>
                    <h3>One bot – Theatre & Turf</h3>
                    <p>Chat UI maari, questions kelvi kekkura bot.</p>
                  </div>
                </div>
                {/* BACK */}
                <div className="flip-face flip-back">
                  <h3>Bot features:</h3>
                  <ul>
                    <li>Theatre & Turf rendu me cover pannum</li>
                    <li>Movie details, trailer link, feedback share pannum</li>
                    <li>Date, time, class, members ellam kelvi kekkum</li>
                    <li>Last la neat aa booking summary kudukkum</li>
                    <li>Tamil / English text style la questions irukkalaam</li>
                  </ul>
                  <p className="flip-note">
                    Ithu ellam bot logic – intha site la info maari display.
                  </p>
                </div>
              </div>
            </div>

            {/* SITE ROLE CARD */}
            <div className="flip-card">
              <div className="flip-inner">
                {/* FRONT */}
                <div className="flip-face flip-front site-front">
                  <div className="flip-overlay" />
                  <div className="flip-content">
                    <span className="flip-tag">This Website</span>
                    <h3>Enna role?</h3>
                    <p>Just guide, no direct booking.</p>
                  </div>
                </div>
                {/* BACK */}
                <div className="flip-face flip-back">
                  <h3>Site la irukkura features:</h3>
                  <ul>
                    <li>Dark theme + image based UI</li>
                    <li>Theatre, Turf, Bot flow flip cards la</li>
                    <li>Mobile, tablet, desktop ku responsive</li>
                    <li>Bot open panna main button & floating button</li>
                    <li>User ku confusion illaama, munnadiye steps theriyum</li>
                  </ul>
                  <p className="flip-note">
                    Booking ella bot la than. Site just visuals + explanation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* EXTRA SMALL FEATURE STRIP (OPTIONAL) */}
        <section className="strip-section">
          <div className="strip-card">
            <img
              src="https://images.pexels.com/photos/799137/pexels-photo-799137.jpeg"
              alt="Mobile phone with website"
            />
            <div className="strip-text">
              <h4>Device friendly</h4>
              <p>Phone, tablet, laptop – layout auto adjust aagum.</p>
            </div>
          </div>
          <div className="strip-card">
            <img
              src="https://images.pexels.com/photos/799115/pexels-photo-799115.jpeg"
              alt="Dark UI screen"
            />
            <div className="strip-text">
              <h4>Dark theme focus</h4>
              <p>Dark background + neon highlight, movie / turf feel.</p>
            </div>
          </div>
          <div className="strip-card">
            <img
              src="https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg"
              alt="Chat bot interface concept"
            />
            <div className="strip-text">
              <h4>Bot first flow</h4>
              <p>Site la steps pathu, direct aa bot la booking start.</p>
            </div>
          </div>
        </section>
      </main>

      {/* FLOATING BOT BUTTON */}
      <button className="floating-bot-btn" onClick={openBot}>
        🤖
      </button>

      <footer className="page-footer">
        <p>© {new Date().getFullYear()} Moonlight Mahal – Theatre & Turf</p>
        <p className="footer-sub">
          Dark theme flip-card UI • Bot booking guide only.
        </p>
      </footer>
    </div>
  );
};

export default App;
