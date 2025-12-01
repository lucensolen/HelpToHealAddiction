function analyze(){
  const v = document.getElementById('input1').value.trim();
  const out = document.getElementById('result');
  if(!v){ out.textContent = 'Write something real.'; return; }
  out.textContent = 'This behaviour is a residue pattern — it reacts to pressure, not to choice.';
}
