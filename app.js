// VIEW SWITCHING
document.addEventListener("DOMContentLoaded", () => {

  const tabButtons = document.querySelectorAll(".nav-tab");
  const views = document.querySelectorAll(".view");
  const jumps = document.querySelectorAll("[data-view-jump]");

  function setView(id) {
    views.forEach(v =>
      v.classList.toggle("active", v.id === `view-${id}`)
    );
    tabButtons.forEach(btn =>
      btn.classList.toggle("active", btn.dataset.view === id)
    );
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  tabButtons.forEach(btn =>
    btn.addEventListener("click", () => setView(btn.dataset.view))
  );

  jumps.forEach(btn =>
    btn.addEventListener("click", () => setView(btn.dataset.viewJump))
  );

});
////////////////////////////////////////////////////////////


// RESIDUE SCANNER
const form = document.getElementById("scanner-form");
const results = document.getElementById("scan-results");

const resNervous = document.getElementById("res-nervous");
const resState = document.getElementById("res-state");
const resRelapse = document.getElementById("res-relapse");
const resMirror = document.getElementById("res-mirror");

form?.addEventListener("submit", (e) => {
  e.preventDefault();

  const values = [];

  for (let i = 1; i <= 6; i++) {
    const selected = form.querySelector(`input[name="q${i}"]:checked`);
    if (!selected) {
      alert("Answer all questions honestly. This is for you.");
      return;
    }
    values.push(parseInt(selected.value, 10));
  }

  // same scoring logic you had originally:
  const total = values.reduce((a, b) => a + b, 0);

  const nervousScore = values[0] + values[2] + values[4];
  const stateScore = values[1] + values[3];
  const relapseScore = values[1] + values[4] + values[5];

  // Interpretations preserved exactly as-is:
  /* — (keeping all your original text unchanged) — */

  // Nervous interpretation
  if (nervousScore <= 5) {
    resNervous.textContent =
      "Your nervous system shows low visible residue. That doesn’t mean you’re untouched, but day-to-day you’re not being yanked around by the old cycle.";
  } else if (nervousScore <= 8) {
    resNervous.textContent =
      "There’s a moderate residue in your system. You’re mostly functioning but swing between ‘I’m fine’ and quiet restlessness.";
  } else {
    resNervous.textContent =
      "Your nervous system is still heavily imprinted. Flatness, agitation, or craving intensity are learned patterns, not flaws.";
  }

  // State interpretation
  if (stateScore <= 4) {
    resState.textContent =
      "You used the drug around your life, not as the core of your identity.";
  } else if (stateScore <= 6) {
    resState.textContent =
      "The drug powered parts of your ‘best self.’ Rebuilding those states clean will be key.";
  } else {
    resState.textContent =
      "Your old peak self and the drug still feel linked. Breaking that story matters.";
  }

  // Relapse interpretation
  if (relapseScore <= 5) {
    resRelapse.textContent =
      "Relapse gravity looks low — but don’t get overconfident.";
  } else if (relapseScore <= 8) {
    resRelapse.textContent =
      "There’s a subtle pull under stress. That’s your signal.";
  } else {
    resRelapse.textContent =
      "The pull is strong. This is a fork in the road and where support helps.";
  }

  // Mirror
  let mirror = "";
  if (total <= 11) {
    mirror =
      "You’ve done more work than most. But you know there are blind spots.";
  } else if (total <= 17) {
    mirror =
      "You’re in the middle space — not lost, not free. This is the perfect time to move.";
  } else {
    mirror =
      "You’re sober, but the drug still has a seat in your inner council.";
  }

  resMirror.textContent = mirror;

  results.classList.remove("hidden");
  results.scrollIntoView({ behavior: "smooth", block: "start" });
});
