const bars = document.querySelector('.bars');
const navMenu = document.querySelector('nav-menu');
bars.addEventListener('click', () => {
  bars.classList.toggle('active');
  navMenu.classList.toggle('active');
});
