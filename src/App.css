*,
*::before,
*::after {
  box-sizing: border-box;
}

html,
body {
  margin: 0;
  padding: 0;
  scroll-behavior: smooth;
}

body {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
    sans-serif;
  background: radial-gradient(circle at top, #dbeafe 0, #f9fafb 35%, #e5e7eb);
  color: #0f172a;
}

.site-root {
  min-height: 100vh;
}

/* NAVBAR */

.nav {
  position: sticky;
  top: 0;
  z-index: 30;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.7rem 1.6rem;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(14px);
  border-bottom: 1px solid rgba(148, 163, 184, 0.4);
}

.nav-left {
  display: flex;
  align-items: center;
  gap: 0.55rem;
}

.logo-orb {
  width: 32px;
  height: 32px;
  border-radius: 999px;
  background: linear-gradient(135deg, #0ea5e9, #6366f1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #f9fafb;
  font-weight: 700;
}

.logo-title {
  font-size: 0.98rem;
  font-weight: 600;
}

.nav-links {
  display: flex;
  gap: 0.6rem;
}

.nav-links button {
  border: 1px solid transparent;
  background: transparent;
  font-size: 0.8rem;
  color: #0f172a;
  padding: 0.3rem 0.9rem;
  border-radius: 999px;
  cursor: pointer;
  transition: background 0.15s ease, border-color 0.15s ease,
    transform 0.15s ease, box-shadow 0.15s ease;
}

.nav-links button:hover {
  border-color: rgba(148, 163, 184, 0.7);
  background: #eff6ff;
  transform: translateY(-1px);
  box-shadow: 0 6px 16px rgba(148, 163, 184, 0.4);
}

/* mobile menu button */

.nav-menu-btn {
  display: none;
  border: none;
  background: transparent;
  font-size: 1.2rem;
  color: #0f172a;
  cursor: pointer;
}

.mobile-menu {
  display: none;
}

/* HERO */

.hero {
  padding: 2.2rem 1.6rem 3rem;
}

.hero-content {
  max-width: 840px;
  margin: 0 auto;
  text-align: center;
}

.hero-highlight {
  background: linear-gradient(to right, #0ea5e9, #6366f1, #f97316);
  -webkit-background-clip: text;
  color: transparent;
}

.hero-sub {
  font-size: 1rem;
  margin-top: 0.2rem;
  opacity: 0.9;
}

.hero-text {
  margin-top: 0.9rem;
  font-size: 0.95rem;
  opacity: 0.9;
  line-height: 1.7;
}

/* SINGLE WINDOW SLIDER */

.slider-row {
  max-width: 960px;
  margin: 2rem auto 0;
  position: relative;
  padding: 1rem 0 0.5rem;
}

.slider-row-glow {
  position: absolute;
  inset: -30px 12%;
  background: radial-gradient(
    circle at top,
    rgba(56, 189, 248, 0.18),
    transparent 65%
  );
  filter: blur(2px);
  animation: skyGlow 6s ease-in-out infinite alternate;
  pointer-events: none;
}

.single-slide {
  position: relative;
  margin: 0 auto;
  max-width: 760px;
  background: #ffffff;
  border-radius: 1.4rem;
  border: 1px solid rgba(148, 163, 184, 0.4);
  box-shadow: 0 18px 40px rgba(148, 163, 184, 0.45);
  padding: 0.9rem;
  overflow: hidden;
}

.slide-image {
  border-radius: 1rem;
  overflow: hidden;
}

.slide-image img {
  width: 100%;
  height: 260px;
  object-fit: cover;
  display: block;
  transition: transform 0.5s ease;
}

.single-slide:hover .slide-image img {
  transform: scale(1.03);
}

.slide-caption {
  margin-top: 0.55rem;
}

.slide-caption span {
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  opacity: 0.78;
}

.slide-caption h3 {
  margin: 0.15rem 0 0.1rem;
  font-size: 0.98rem;
}

.slide-desc {
  margin: 0;
  font-size: 0.8rem;
  opacity: 0.8;
}

.slider-dots {
  display: flex;
  justify-content: center;
  gap: 0.35rem;
  margin-top: 0.8rem;
}

.dot {
  width: 6px;
  height: 6px;
  border-radius: 999px;
  border: none;
  background: rgba(148, 163, 184, 0.7);
  cursor: pointer;
}

.dot-active {
  background: #0ea5e9;
  transform: scale(1.4);
}

/* RUNNING LIGHT BORDER around slider */

.border-runner {
  position: absolute;
  inset: 0;
  border-radius: inherit;
  pointer-events: none;
}

.border-runner::before {
  content: "";
  position: absolute;
  inset: -2px;
  border-radius: inherit;
  background: conic-gradient(
    from 0deg,
    #0ea5e9,
    #22c55e,
    #f97316,
    #6366f1,
    #0ea5e9
  );
  -webkit-mask: linear-gradient(#000 0 0) content-box,
    linear-gradient(#000 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  padding: 2px;
  animation: borderRotate 6s linear infinite;
  opacity: 0.8;
}

/* COMMON SECTION */

.section {
  max-width: 960px;
  margin: 0 auto;
  padding: 0 1.6rem 3rem;
}

.section-title {
  font-size: 1.4rem;
  margin-bottom: 0.3rem;
}

.section-desc {
  font-size: 0.9rem;
  opacity: 0.9;
  line-height: 1.7;
}

/* SHARED CARD ANIMATION */

.card-animated {
  background: #ffffff;
  border-radius: 1.2rem;
  border: 1px solid rgba(148, 163, 184, 0.5);
  box-shadow: 0 14px 32px rgba(148, 163, 184, 0.35);
  transition: border-color 0.22s ease, box-shadow 0.22s ease,
    transform 0.22s ease;
}

.card-animated:hover {
  border-color: #0ea5e9;
  box-shadow: 0 20px 48px rgba(59, 130, 246, 0.45);
  transform: translateY(-3px);
}

/* ABOUT */

.about-grid {
  display: grid;
  gap: 1.3rem;
  margin-top: 1.4rem;
}

.about-card {
  display: grid;
  grid-template-columns: minmax(0, 1.1fr) minmax(0, 1.3fr);
  overflow: hidden;
}

.about-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.about-body {
  padding: 1rem 1.2rem 1.2rem;
}

.about-body h3 {
  margin: 0 0 0.25rem;
  font-size: 1.02rem;
}

.about-body p {
  margin: 0 0 0.45rem;
  font-size: 0.86rem;
  opacity: 0.9;
}

.about-body ul {
  margin: 0;
  padding-left: 1.1rem;
  font-size: 0.8rem;
}

.about-body li {
  margin-bottom: 0.2rem;
}

/* SERVICES */

.service-grid {
  margin-top: 1.5rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.4rem;
}

.service-card {
  padding: 1rem 1.1rem 1.2rem;
}

.service-card h3 {
  margin: 0 0 0.3rem;
  font-size: 1.02rem;
}

.service-card p {
  margin: 0 0 0.45rem;
  font-size: 0.86rem;
  opacity: 0.92;
}

.service-card ul {
  margin: 0 0 0.6rem;
  padding-left: 1.1rem;
  font-size: 0.8rem;
}

.service-card li {
  margin-bottom: 0.2rem;
}

/* BUTTONS */

.btn-outline,
.social-pill {
  border-radius: 999px;
  padding: 0.6rem 1.6rem;
  font-size: 0.82rem;
  cursor: pointer;
  transition: transform 0.15s ease, box-shadow 0.15s ease,
    background 0.15s ease, border-color 0.15s ease, color 0.15s ease;
}

/* outline buttons */

.btn-outline {
  background: #ffffff;
  border: 1px solid rgba(148, 163, 184, 0.9);
  color: #0f172a;
}

.btn-outline:hover {
  background: #eff6ff;
  border-color: #0ea5e9;
  transform: translateY(-1px) scale(1.01);
  box-shadow: 0 10px 26px rgba(148, 163, 184, 0.45);
}

/* CONTACT */

.contact-grid {
  margin-top: 1.5rem;
  display: grid;
  grid-template-columns: minmax(0, 1.1fr) minmax(0, 1fr);
  gap: 1.4rem;
}

.contact-card {
  padding: 1rem 1.2rem;
}

.contact-card h3 {
  margin: 0 0 0.35rem;
  font-size: 1.02rem;
}

.contact-card p {
  margin: 0 0 0.45rem;
  font-size: 0.86rem;
  opacity: 0.9;
}

.social-row {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: 0.6rem 0 0.7rem;
}

.social-pill {
  background: #ffffff;
  border: 1px solid rgba(148, 163, 184, 0.8);
  color: #0f172a;
}

.social-pill:hover {
  background: #dbeafe;
  border-color: #0ea5e9;
  transform: translateY(-1px);
}

.handle {
  font-size: 0.84rem;
  opacity: 0.9;
}

/* FLOATING BOT */

.floating-bot {
  position: fixed;
  right: 1.2rem;
  bottom: 1.3rem;
  width: 50px;
  height: 50px;
  border-radius: 999px;
  border: none;
  cursor: pointer;
  background: radial-gradient(circle at top, #6366f1, #0ea5e9);
  box-shadow: 0 0 0 0 rgba(56, 189, 248, 0.8);
  font-size: 1.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 40;
  animation: botPulse 2.4s infinite;
  transition: transform 0.2s ease;
}

.floating-bot:hover {
  transform: translateY(-2px) scale(1.05);
}

/* FOOTER */

.footer {
  max-width: 960px;
  margin: 0 auto;
  padding: 1.8rem 1.6rem 2.3rem;
  font-size: 0.82rem;
  opacity: 0.9;
}

.footer-title {
  font-weight: 600;
  margin-bottom: 0.4rem;
}

.footer-list {
  margin: 0;
  padding-left: 1.1rem;
}

.footer-list li {
  margin-bottom: 0.15rem;
}

.footer-copy {
  margin-top: 0.5rem;
  opacity: 0.85;
}

/* ANIMATIONS */

@keyframes botPulse {
  0% {
    box-shadow: 0 0 0 0 rgba(56, 189, 248, 0.6);
  }
  70% {
    box-shadow: 0 0 0 18px rgba(56, 189, 248, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(56, 189, 248, 0);
  }
}

@keyframes skyGlow {
  0% {
    transform: translateY(0);
    opacity: 0.75;
  }
  100% {
    transform: translateY(15px);
    opacity: 0.4;
  }
}

@keyframes borderRotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

/* RESPONSIVE */

@media (max-width: 900px) {
  .nav-links-desktop {
    display: none;
  }

  .nav-menu-btn {
    display: block;
  }

  .mobile-menu {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
    padding: 0.6rem 1.6rem 0.8rem;
    background: rgba(255, 255, 255, 0.95);
    border-bottom: 1px solid rgba(148, 163, 184, 0.4);
    backdrop-filter: blur(10px);
  }

  .mobile-menu button {
    border: none;
    background: transparent;
    color: #0f172a;
    text-align: left;
    padding: 0.3rem 0;
    font-size: 0.86rem;
    cursor: pointer;
  }

  .single-slide .slide-image img {
    height: 220px;
  }
}

@media (max-width: 640px) {
  .hero,
  .section,
  .footer {
    padding-inline: 1.1rem;
  }

  .contact-grid {
    grid-template-columns: minmax(0, 1fr);
  }

  .about-card {
    grid-template-columns: minmax(0, 1fr);
  }
}
