const doc = document;
const toggleSwitch = doc.querySelector('input[type="checkbox"]');
const nav = doc.getElementById('nav');
const toggleIcon = doc.getElementById('toggle-icon');
const image1 = doc.getElementById('image1');
const image2 = doc.getElementById('image2');
const image3 = doc.getElementById('image3');
const textBox = doc.getElementById('text-box');
// created doc constant in place of document

// lightens character count for doc get element by ID
function elmntId(id) {
  doc.getElementById(id);
}

// shorthand image strings
function imgMode(color) {
  image1.src = `img/undraw_proud_coder_${color}.svg`;
  image2.src = `img/undraw_feeling_proud_${color}.svg`;
  image3.src = `img/undraw_conceptual_idea_${color}.svg`;
}

// shorthand version of tooge modes
function toggleDarkLightMode(isDark) {
  nav.style.backgroundColor = isDark ? 'rgb(0 0 0 / 50%)' : 'rgb(255 255 255 / 50%)';
  textBox.style.backgroundColor = isDark ? 'rgb(255 255 255 / 50%)' : 'rgb(255 255 255 / 50%)';
  toggleIcon.children[0].textContent = isDark ? 'Dark Mode' : 'Light Mode';
  isDark ? toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon') : toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
  isDark ? imgMode('dark') : imgMode('light');
}

// switch theme dynamically
function switchTheme(e) {
  let evnt = e.target.checked;

  evnt ? doc.documentElement.setAttribute('data-theme', 'dark') : doc.documentElement.setAttribute('data-theme', 'light');
  evnt ? localStorage.setItem('theme', 'dark') : localStorage.setItem('theme', 'light');
  toggleDarkLightMode(evnt);
}

// event listener
toggleSwitch.addEventListener('change', switchTheme);

// check local storage for theme
const currentTheme = localStorage.getItem('theme');
console.log(currentTheme);

if (currentTheme) {
  doc.documentElement.setAttribute('data-theme', currentTheme);

  if (currentTheme === 'dark') {
    toggleSwitch.checked = true;
    toggleDarkLightMode(true);
  } 

}