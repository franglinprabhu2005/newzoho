import React from "react";
import "./App.css";

const App = () => {
  // Later unga bot open code inga varum
  const openBot = () => {
    alert("Smart Booking Bot integration varanum (openBot() hook ready).");
  };

  return (
    <div className="site-root">
      {/* NAVBAR */}
      <header className="nav">
        <div className="nav-left">
          <div className="logo-orb">M</div>
          <div className="logo-text">
            <span className="logo-title">Moonlight Mahal</span>
            <span className="logo-sub">Theatre • Turf • Events</span>
          </div>
        </div>
        <button className="nav-cta" onClick={openBot}>
          Open Smart Booking Bot
        </button>
      </header>

      {/* HERO */}
      <main className="main">
        <section className="hero">
          <div className="hero-copy">
            <p className="hero-chip">Dark theme • Mirror UI • Bot guide</p>
            <h1>
              <span className="hero-highlight">Theatre & Turf</span> booking,
              <br />
              bot mooliya thelivaa.
            </h1>
            <p className="hero-desc">
              Intha website la user ku{" "}
              <strong>epdi booking bot la book pannuradhu</strong> nu step by
              step explain pannuvom.  
              Real booking & details ellam{" "}
              <strong>Smart Booking Bot</strong> la dhaan nadakkum.
            </p>
            <div className="hero-actions">
              <button className="btn-primary" onClick={openBot}>
                Start in Bot
              </button>
              <button
                className="btn-ghost"
                onClick={() =>
                  document
                    .getElementById("flow-section")
                    .scrollIntoView({ behavior: "smooth" })
                }
              >
                See booking flow
              </button>
            </div>
            <div className="hero-tags">
              <span>Mobile • Tablet • PC</span>
              <span>Clear steps</span>
              <span>Dark + Mirror UI</span>
            </div>
          </div>

          {/* Center mirror card with running circle preview */}
          <div className="hero-preview mirror-card">
            <div className="orbit-wrapper">
              <div className="orbit-ring orbit-ring-1" />
              <div className="orbit-ring orbit-ring-2" />
              <div className="orbit-dots orbit-dots-1" />
              <div className="orbit-dots orbit-dots-2" />
              <div className="orbit-center">
                <img
                  src="https://t3.ftcdn.net/jpg/03/74/28/58/360_F_374285858_KzJ88FysqJ79AhyNPW2lqnBtsRTokuav.jpg"
                  alt="Theatre interior"
                />
              </div>
            </div>
            <p className="hero-preview-caption">
              * Theatre sample image — bot la movie & show details kaamikum.
            </p>
          </div>
        </section>

        {/* FLIP CARDS – BOOKING FLOW */}
        <section id="flow-section" className="flip-section">
          <h2 className="section-title">Epdi bot la book pannuvanga?</h2>
          <p className="section-sub">
            Keela irukkura flip cards la <strong>Theatre</strong>,{" "}
            <strong>Turf</strong>, <strong>Bot features</strong>,{" "}
            <strong>Site role</strong> – ellam thelivaa solli irukku.
          </p>

          <div className="flip-grid">
            {/* THEATRE */}
            <div className="flip-card mirror-card">
              <div className="flip-inner">
                <div className="flip-face flip-front theatre-front">
                  <div className="flip-front-overlay" />
                  <div className="flip-front-content">
                    <div className="small-orbit">
                      <div className="small-orbit-ring" />
                      <div className="small-orbit-center">
                        <img
                          src="https://t3.ftcdn.net/jpg/03/74/28/58/360_F_374285858_KzJ88FysqJ79AhyNPW2lqnBtsRTokuav.jpg"
                          alt="Theatre image"
                        />
                      </div>
                    </div>
                    <span className="flip-tag">Theatre</span>
                    <h3>Movie ticket booking</h3>
                    <p>Big screen, red seats – theatre booking bot la.</p>
                  </div>
                </div>
                <div className="flip-face flip-back">
                  <h3>Theatre – Smart Booking Bot steps:</h3>
                  <ul>
                    <li>1. Bot la &quot;Theatre&quot; option select pannuvanga.</li>
                    <li>2. Available movies list la irundhu movie choose.</li>
                    <li>3. Movie trailer link open pannitu preview paakalam.</li>
                    <li>4. Feedback / rating pathu decide pannuvanga.</li>
                    <li>5. Date & show time select.</li>
                    <li>6. Class (VIP / Balcony / First) choose.</li>
                    <li>7. Yethana perukku ticket venum nu solranga.</li>
                  </ul>
                  <p className="flip-note">
                    Itha ellam bot question la nadakkum. Site la just steps
                    explain mattum.
                  </p>
                </div>
              </div>
            </div>

            {/* TURF */}
            <div className="flip-card mirror-card">
              <div className="flip-inner">
                <div className="flip-face flip-front turf-front">
                  <div className="flip-front-overlay" />
                  <div className="flip-front-content">
                    <div className="small-orbit">
                      <div className="small-orbit-ring" />
                      <div className="small-orbit-center">
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1Y0mZ_uonz28R2Rk5sC4QO95XaUbyKARp8w&s"
                          alt="Turf image"
                        />
                      </div>
                    </div>
                    <span className="flip-tag">Turf</span>
                    <h3>Football / cricket turf slots</h3>
                    <p>Flood light la game vibe – bot la slots book pannuvanga.</p>
                  </div>
                </div>
                <div className="flip-face flip-back">
                  <h3>Turf – Smart Booking Bot steps:</h3>
                  <ul>
                    <li>1. &quot;Turf&quot; option choose.</li>
                    <li>2. Game type (Football / Cricket) select pannalam.</li>
                    <li>3. Date choose.</li>
                    <li>4. Time slot (Morning / Evening / Night) select.</li>
                    <li>5. How many members (players count) solranga.</li>
                    <li>6. Bot summary la full details kaamikum.</li>
                  </ul>
                  <p className="flip-note">
                    Turf booking kkum full flow bot la handle pannum.
                  </p>
                </div>
              </div>
            </div>

            {/* BOT FEATURES */}
            <div className="flip-card mirror-card">
              <div className="flip-inner">
                <div className="flip-face flip-front bot-front">
                  <div className="flip-front-overlay" />
                  <div className="flip-front-content simple-front">
                    <span className="flip-tag">Smart Booking Bot</span>
                    <h3>One chat – Theatre & Turf</h3>
                    <p>Question-answer maari smooth booking experience.</p>
                  </div>
                </div>
                <div className="flip-face flip-back">
                  <h3>Smart Booking Bot la enna irukkum?</h3>
                  <ul>
                    <li>Theatre & Turf rendu me same chat la.</li>
                    <li>Movie details, trailer link, rating share pannum.</li>
                    <li>Date, time, class, players count ellam kelvi kekkum.</li>
                    <li>Last la neat booking summary message.</li>
                    <li>Tamil / English maari mix la question kekkalaam.</li>
                  </ul>
                  <p className="flip-note">
                    Bot logic la maatum change panna easy. Site kitta link
                    mattum irukkum.
                  </p>
                </div>
              </div>
            </div>

            {/* SITE ROLE */}
            <div className="flip-card mirror-card">
              <div className="flip-inner">
                <div className="flip-face flip-front site-front">
                  <div className="flip-front-overlay" />
                  <div className="flip-front-content simple-front">
                    <span className="flip-tag">This Website</span>
                    <h3>Enna role?</h3>
                    <p>Just clear info + super dark UI.</p>
                  </div>
                </div>
                <div className="flip-face flip-back">
                  <h3>Site la irukkura features:</h3>
                  <ul>
                    <li>Dark theme, neon highlight, mirror reflection.</li>
                    <li>Theatre & Turf images ku running light circle.</li>
                    <li>Flip cards la booking steps explain pannum.</li>
                    <li>All device ku responsive layout.</li>
                    <li>Bot open button & floating icon ready.</li>
                  </ul>
                  <p className="flip-note">
                    Booking ella bot la. Site just visually guide pannum.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* BOTTOM STRIP */}
        <section className="strip">
          <div className="strip-item">
            <h4>Device Friendly</h4>
            <p>Phone, tablet, laptop – layout auto adjust aagum.</p>
          </div>
          <div className="strip-item">
            <h4>Smooth Animations</h4>
            <p>Hover, flip, glow – subtle aa but classy aa.</p>
          </div>
          <div className="strip-item">
            <h4>Mirror Look</h4>
            <p>Cards reflection nala premium feel varum.</p>
          </div>
        </section>
      </main>

      {/* FLOATING BOT BUTTON */}
      <button className="floating-bot" onClick={openBot}>
        🤖
      </button>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Moonlight Mahal – Theatre & Turf</p>
        <p className="footer-sub">
          Dark theme • Running light circle • Flip cards • Bot booking guide.
        </p>
      </footer>
    </div>
  );
};

export default App;
