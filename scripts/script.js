const toggleBtn = document.getElementById('toggleBtn');
const codeBlock = document.getElementById('codeBlock');

const scssCode = `$primary-color: #3498db;

.button {
  background: $primary-color;
  border-radius: 5px;

  &:hover {
    background: darken($primary-color, 10%);
  }
}`;

const cssCode = `.button {
  background: #3498db;
  border-radius: 5px;
}
.button:hover {
  background: #2980b9;
}`;

let showingSCSS = true;

toggleBtn.addEventListener('click', () => {
  if (showingSCSS) {
    codeBlock.textContent = cssCode;
    toggleBtn.textContent = 'Show SCSS';
  } else {
    codeBlock.textContent = scssCode;
    toggleBtn.textContent = 'Show CSS';
  }
  showingSCSS = !showingSCSS;
});
