const burger = document.getElementById('burger');
const navList = document.querySelector('.nav-list');
const contact__toggle = document.querySelector('.contact-toggle');

burger.addEventListener('click', () => {
  navList.classList.toggle('active');

  // Toggle burger ↔ X
  if (navList.classList.contains('active')) {
    burger.innerHTML = '&#10005;'; // ×
    burger.classList.add('burger-icon')
    contact__toggle.classList.add('contact__toggle')
  } else {
    burger.innerHTML = '&#9776;'; // ☰
  }
})