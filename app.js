/* TAB SWITCHING ----------------------------------------------*/
const tabs = document.querySelectorAll('.nav-tab');
const views = document.querySelectorAll('.view');
const jumpers = document.querySelectorAll('[data-view-jump]');

function switchView(id) {
  views.forEach(v => v.classList.remove('active'));
  tabs.forEach(t => t.classList.remove('active'));

  document.querySelector(`#view-${id}`).classList.add('active');
  document.querySelector(`[data-view="${id}"]`).classList.add('active');

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    switchView(tab.dataset.view);
  });
});

jumpers.forEach(btn => {
  btn.addEventListener('click', () => {
    switchView(btn.dataset.viewJump);
  });
});

/* SCANNER LOGIC ----------------------------------------------*/
const form = document.querySelector('#scanner-form');
const resultsBox = document.querySelector('#scan-results');

form.addEventListener('submit', e => {
  e.preventDefault();

  const data = {};
  for (let i = 1; i <= 6; i++) {
    const q = form.querySelector(`input[name="q${i}"]:checked`);
    data[`q${i}`] = q ? Number(q.value) : 0;
  }

  const sum = Object.values(data).reduce((a, b) => a + b, 0);

  // Nervous system residue = q3 + q6
  const nervous = data.q3 + data.q6;

  // State dependency = q1 + q4
  const state = data.q1 + data.q4;

  // Relapse gravity = q2 + q5
  const relapse = data.q2 + data.q5;

  // Mirror Back
  let mirror = "";
  if (sum <= 8) mirror = "You’ve walked away clean, and your system mostly knows it. There’s residue, but not control.";
  else if (sum <= 14) mirror = "You’re sober, but parts of the high-version-of-you still live in your nervous system.";
  else if (sum <= 20) mirror = "Your identity, energy, or relationships still run on patterns the drug taught you.";
  else mirror = "You're sober, but the drug’s emotional architecture still shapes your choices.";

  document.querySelector('#res-nervous').textContent =
    nervous <= 4 ? "Low residue — you stabilised well." :
    nervous <= 6 ? "Moderate residue — your system still runs on the old tempo." :
                    "High residue — your energy still follows the high/crash rhythm.";

  document.querySelector('#res-state').textContent =
    state <= 4 ? "You rebuilt most of your identity sober." :
    state <= 6 ? "Some of your old 'best self' still feels linked to the chemistry." :
                  "Your high-version-of-you became a template your sober self still chases.";

  document.querySelector('#res-relapse').textContent =
    relapse <= 4 ? "Relapse gravity is weak — the pull doesn’t own you." :
    relapse <= 6 ? "You feel the old pull under stress, even if you don’t act on it." :
                    "The emotional pull is still strong when life squeezes you.";

  document.querySelector('#res-mirror').textContent = mirror;

  resultsBox.classList.remove('hidden');
  resultsBox.scrollIntoView({ behavior: 'smooth' });
});
