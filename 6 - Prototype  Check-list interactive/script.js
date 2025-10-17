let sasuke = document.querySelectorAll('.task');
let itachi = document.getElementById('second');

function updateCounter() {
  let n = 0;
  sasuke.forEach(b => b.checked && n++);
  itachi.textContent = `${n} of ${sasuke.length} selected`;
}

sasuke.forEach(b => b.addEventListener('change', updateCounter));
updateCounter();
