// Simple SPA view switching
const tabButtons = document.querySelectorAll(".nav-tab");
const views = document.querySelectorAll(".view");
const jumpButtons = document.querySelectorAll("[data-view-jump]");

function setView(id) {
  views.forEach(v => v.classList.toggle("active", v.id === `view-${id}`));
  tabButtons.forEach(btn => btn.classList.toggle("active", btn.dataset.view === id));
  window.scrollTo({ top: 0, behavior: "smooth" });
}

tabButtons.forEach(btn => {
  btn.addEventListener("click", () => setView(btn.dataset.view));
});

jumpButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const id = btn.getAttribute("data-view-jump");
    setView(id);
  });
});

// Residue Scanner logic
const form = document.getElementById("scanner-form");
const resultsSection = document.getElementById("scan-results");
const resNervous = document.getElementById("res-nervous");
const resState = document.getElementById("res-state");
const resRelapse = document.getElementById("res-relapse");
const resMirror = document.getElementById("res-mirror");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Collect answers
  const values = [];
  for (let i = 1; i <= 6; i++) {
    const checked = form.querySelector(`input[name="q${i}"]:checked`);
    if (!checked) {
      alert("Answer all questions honestly. This is for you, not anyone else.");
      return;
    }
    values.push(parseInt(checked.value, 10));
  }

  // Basic scoring
  const total = values.reduce((a, b) => a + b, 0);

  // Rough axes:
  // nervous system residue: q1, q3, q5
  const nervousScore = values[0] + values[2] + values[4];

  // state dependency: q2, q4
  const stateScore = values[1] + values[3];

  // relapse gravity: q2, q5, q6
  const relapseScore = values[1] + values[4] + values[5];

  // Interpret nervous
  if (nervousScore <= 5) {
    resNervous.textContent =
      "Your nervous system shows low visible residue. That doesn’t mean you’re untouched, but day-to-day you’re not being yanked around by the old cycle. Keep protecting your sleep, food, and baseline — that’s your actual shield.";
  } else if (nervousScore <= 8) {
    resNervous.textContent =
      "There’s a moderate residue in your system. You’re mostly functioning, but you likely swing between ‘I’m fine’ and quiet restlessness or flatness. Your body remembers the old rhythm. Gently rebuilding a slower, steadier one will matter more than any mindset hack.";
  } else {
    resNervous.textContent =
      "Your nervous system is still heavily imprinted by that period. Flatness, agitation, or craving high-intensity situations are not personality flaws; they’re learned patterns. You’re not weak — you’re wired for extremes. That wiring can be changed, but not by willpower alone.";
  }

  // Interpret state
  if (stateScore <= 4) {
    resState.textContent =
      "You used the drug around your life, not as the core of your identity. That’s good news. But check carefully: are there still situations where you secretly believe you’d perform ‘better’ with the old edge?";
  } else if (stateScore <= 6) {
    resState.textContent =
      "The drug powered recognisable parts of your ‘best self.’ You may unconsciously compare your sober self against that counterfeit version. This is where real recovery starts: rebuilding confidence, focus, and energy clean, one channel at a time.";
  } else {
    resState.textContent =
      "Your old peak self and the drug are still entangled in your mind. Some part of you believes that the highest version of you lived in that era. That belief — not the substance itself — is what keeps the door open. Breaking that story is as important as staying away from the powder.";
  }

  // Interpret relapse
  if (relapseScore <= 5) {
    resRelapse.textContent =
      "Right now, relapse gravity looks low. That doesn’t mean ‘invincible’, but your instinct under pressure isn’t to run back to it. Respect that — and don’t get cocky. Overconfidence has dragged many people back in after years away.";
  } else if (relapseScore <= 8) {
    resRelapse.textContent =
      "There’s a subtle pull when life gets heavy. You might not be planning to go back, but the ‘what if I…’ thought still quietly exists. That thought is the early warning siren. Treat it seriously, not dramatically.";
  } else {
    resRelapse.textContent =
      "The pull is strong. You may be white-knuckling sobriety or replacing the drug with other extremes. This is the point where getting structured help or support is not overkill — it’s strategy. You’re not past saving; you’re at a fork.";
  }

  // Mirror paragraph based on total
  let mirror = "";
  if (total <= 11) {
    mirror =
      "You’ve done more work than most, and it shows. But the fact you’re here, reading this, says you know there are still blind spots. Use this as confirmation, not condemnation: there are layers of the story you haven’t explored yet — and that’s exactly where your next level of freedom sits.";
  } else if (total <= 17) {
    mirror =
      "You’re in the middle space — not lost, not fully free. You’ve stopped the visible behaviour, but parts of your mind, body, and relationships still orbit the old gravity. This is the perfect time to move, before stress or boredom start writing the script for you.";
  } else {
    mirror =
      "You’re out, but the drug still has a seat in your inner council. It shows up as craving, nostalgia, attraction to people who still use, or cycles of chaos in other areas. This is not a failure. It’s the clearest possible signal that you deserve more than just ‘not using’ as a finish line.";
  }

  resMirror.textContent = mirror;

  resultsSection.classList.remove("hidden");
  resultsSection.scrollIntoView({ behavior: "smooth", block: "start" });
});
