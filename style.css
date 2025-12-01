/* ----- GLOBAL RESET ----- */
*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: "Space Grotesk", system-ui, sans-serif;
  background: radial-gradient(circle at top, #f6ece8 0, #100f12 55%, #050509 100%);
  color: #f6f1ee;
  min-height: 100vh;
  -webkit-font-smoothing: antialiased;
}

/* ----- TEXT SMOOTHING ----- */
h1, h2, h3, h4 {
  font-weight: 600;
  letter-spacing: -0.01em;
}

/* ----- GRAIN LAYER ----- */
.grain {
  pointer-events: none;
  position: fixed;
  inset: 0;
  opacity: 0.25;
  mix-blend-mode: soft-light;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 160 160' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n' x='0' y='0'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='noStitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E");
  z-index: 0;
}

/* ----- APP LAYOUT ----- */
.app-shell {
  position: relative;
  z-index: 1;
  max-width: 1050px;
  margin: 0 auto;
  padding: 32px 16px 80px;
}

/* ----- HEADER ----- */
.site-header {
  display: flex;
  flex-direction: column;
  gap: 22px;
  margin-bottom: 32px;
}

.brand {
  display: flex;
  gap: 14px;
  align-items: center;
}

.brand-mark {
  width: 44px;
  height: 44px;
  border-radius: 999px;
  border: 1px solid rgba(255,255,255,0.35);
  background: linear-gradient(140deg, #b03f52, #5b1a25);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: .75rem;
  text-transform: uppercase;
  letter-spacing: .12em;
}

.site-header h1 {
  margin: 0;
  font-size: 1.45rem;
}

.tagline {
  margin: 3px 0 0;
  font-size: .9rem;
  opacity: .8;
}

/* ----- NAVIGATION TABS ----- */
.nav-tabs {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.nav-tab {
  border-radius: 999px;
  border: 1px solid rgba(255,255,255,0.16);
  background: rgba(19,18,27,0.75);
  color: #fff;
  font-size: .82rem;
  padding: 8px 16px;
  cursor: pointer;
  backdrop-filter: blur(10px);
  transition: .15s ease transform, .2s ease background;
}

.nav-tab.active {
  background: linear-gradient(90deg, #b03f52, #e4a57a);
  transform: translateY(-1px);
  border-color: rgba(255,255,255,0.35);
}

/* ----- MAIN CONTENT AREA ----- */
.main {
  display: flex;
  flex-direction: column;
  gap: 22px;
}

.view {
  display: none;
}

.view.active {
  display: block;
}

/* ----- PANELS ----- */
.panel {
  background: rgba(12, 11, 16, 0.82);
  border-radius: 18px;
  padding: 22px 22px 26px;
  border: 1px solid rgba(255,255,255,0.1);
  box-shadow: 0 14px 40px rgba(0,0,0,0.45);
  backdrop-filter: blur(7px);
}

/* hero sections */
.hero h2 {
  margin: 0 0 12px;
  font-size: 1.38rem;
}

.hero-text {
  font-size: .95rem;
  opacity: .88;
}

.hero-list {
  padding-left: 20px;
  font-size: .9rem;
  opacity: .92;
  margin: 10px 0 14px;
}

.hero-slim h2 {
  font-size: 1.3rem;
  margin: 0 0 12px;
}

/* ----- GRID ----- */
.grid.two {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 18px;
}

@media(max-width:800px){
  .grid.two {
    grid-template-columns: 1fr;
  }
}

/* ----- FORM / OPTIONS ----- */
.options {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px 12px;
}

@media(max-width:640px){
  .options {
    grid-template-columns: 1fr;
  }
}

.options label {
  background: rgba(255,255,255,0.04);
  padding: 8px 10px;
  border-radius: 8px;
  font-size: .82rem;
  border: 1px solid rgba(255,255,255,0.08);
}

/* ----- RESULTS ----- */
.results-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 18px;
}

@media(max-width:900px){
  .results-grid {
    grid-template-columns: 1fr;
  }
}

.result-card {
  background: rgba(17,17,24,0.88);
  padding: 14px 16px;
  border-radius: 14px;
  border: 1px solid rgba(255,255,255,0.12);
}

/* ----- UTILITY ----- */
.hidden {
  display: none !important;
}
