import React from "react";
import "./App.css";

const App = () => {
  const openSalesIQ = () => {
    // Zoho SalesIQ script add pannina aprm inga call pannunga
    if (window.$zoho && window.$zoho.salesiq) {
      window.$zoho.salesiq.floatwindow.visible("show");
    } else {
      // Dev ku hint
      alert("SalesIQ bot integration pending (add Zoho script in index.html)");
    }
  };

  return (
    <div className="site-root">
      {/* NAVBAR */}
      <header className="nav">
        <div className="nav-brand">
          <div className="nav-logo">M</div>
          <div>
            <div className="nav-title">Moonlight Mahal</div>
            <div className="nav-sub">Theatre • Turf • Events</div>
          </div>
        </div>
        <button className="nav-cta" onClick={openSalesIQ}>
          Book via Smart Bot 🤖
        </button>
      </header>

      {/* HERO WITH RUNNING LIGHT CIRCLE */}
      <main className="hero-shell">
        <section className="hero-grid">
          <div className="hero-text">
            <p className="hero-tag">All-in-one booking experience</p>
            <h1>
              <span className="highlight">Mahal, Theatre</span> &{" "}
              <span className="highlight">Turf</span> —
              <br />
              booking made visual & clear.
            </h1>
            <p className="hero-desc">
              User ku doubt varama theatre tickets & turf slots book pannuradhu.
              <br />
              Google images use pannitu, bot la full details collect pannum:
              <br />
              <strong>Movie, trailer, feedback, date, class, time, members</strong> – ellam
              step-by-step.
            </p>

            <div className="hero-buttons">
              <button className="btn-primary" onClick={openSalesIQ}>
                Open Booking Bot
              </button>
              <button
                className="btn-ghost"
                onClick={() =>
                  document
                    .getElementById("sections")
                    .scrollIntoView({ behavior: "smooth" })
                }
              >
                View Theatre & Turf
              </button>
            </div>

            <div className="hero-badges">
              <span>Mobile • Tablet • PC</span>
              <span>Clear Flow UI</span>
              <span>SalesIQ Integrated</span>
            </div>
          </div>

          {/* IMAGE + RUNNING LIGHT CIRCLE */}
          <div className="hero-visual">
            <div className="orbit-wrapper">
              {/* outer running light circle */}
              <div className="orbit-ring orbit-ring-1" />
              <div className="orbit-ring orbit-ring-2" />
              <div className="orbit-dots orbit-dots-1" />
              <div className="orbit-dots orbit-dots-2" />
              {/* center hero image (from Google image URL) */}
              <div className="hero-image-circle">
                <img
                  src="https://i.pinimg.com/564x/f0/1e/4e/f01e4e11b8b77e6f3b4e06efb3e7f8d4.jpg"
                  alt="Luxury wedding mahal interior"
                />
              </div>
            </div>
            <p className="hero-caption">
              * Sample Google image – your mahal photo vechikalaam
            </p>
          </div>
        </section>

        {/* THEATRE & TURF + BOT SECTION CARDS */}
        <section id="sections" className="info-grid">
          {/* THEATRE CARD */}
          <article className="info-card theatre-card">
            <div className="info-image">
              <img
                src="https://i.pinimg.com/564x/9e/1f/33/9e1f330b2afdfb07b49e03260ddf0bcf.jpg"
                alt="Cinema theatre red seats"
              />
            </div>
            <div className="info-body">
              <h2>✨ Theatre Booking</h2>
              <p>
                Bot la user ku <strong>movie list</strong> +{" "}
                <strong>Google trailer link</strong> +{" "}
                <strong>previous feedback</strong> kaamikkum. Adhu kapparam:
              </p>
              <ul>
                <li>Movie select</li>
                <li>Date & show time choose</li>
                <li>Class (VIP / Balcony / First)</li>
                <li>Yethana perukku ticket venum nu ketkum</li>
              </ul>
              <button className="btn-outline" onClick={openSalesIQ}>
                Book Theatre via Bot
              </button>
            </div>
          </article>

          {/* TURF CARD */}
          <article className="info-card turf-card">
            <div className="info-image">
              <img
                src="https://www.agcled.com/uploads/20200318/1584500109897572.jpg"
                alt="Football turf with flood lights"
              />
            </div>
            <div className="info-body">
              <h2>⚽ Turf Booking</h2>
              <p>
                Turf section la night-time turf Google image use pannuvom, athu
                pakarthukku users ku feel varum. Bot la:
              </p>
              <ul>
                <li>Date select</li>
                <li>Time slot (Morning / Evening / Night)</li>
                <li>How many members (players count)</li>
              </ul>
              <button className="btn-outline" onClick={openSalesIQ}>
                Book Turf via Bot
              </button>
            </div>
          </article>

          {/* BOT CARD */}
          <article className="info-card bot-card">
            <div className="info-image bot-preview-img">
              <img
                src="https://i.pinimg.com/564x/5b/6b/2d/5b6b2d66d5fd1bf5986ee3d73e6e0b6e.jpg"
                alt="Chatbot / technology illustration"
              />
            </div>
            <div className="info-body">
              <h2>🤖 SalesIQ Smart Bot</h2>
              <p>
                Full booking logic <strong>bot la</strong> irukkum – site just
                clear explanation + images tha:
              </p>
              <ul>
                <li>Theatre + Turf options in one bot</li>
                <li>Step-by-step questions (Tamil / English)</li>
                <li>Summary message with all details</li>
                <li>Later payment / confirmation add panlaam</li>
              </ul>
              <button className="btn-primary" onClick={openSalesIQ}>
                Start Chat Now
              </button>
            </div>
          </article>
        </section>
      </main>

      {/* FLOAT BOT BUTTON */}
      <button className="float-bot" onClick={openSalesIQ}>
        🤖
      </button>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Moonlight Mahal • Theatre & Turf</p>
        <p className="footer-sub">
          Google images + animated lights for clear, modern booking UI.
        </p>
      </footer>
    </div>
  );
};

export default App;
