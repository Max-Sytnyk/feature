function toggleBurger() {
  console.log(1);
  const header = document.querySelector('.header');
  const navLinks = document.querySelector('.nav');
  const linksItem = Array.from(document.querySelectorAll('.nav__link-item'));
  navLinks.classList.toggle('nav_modal');
  header.classList.toggle('header__container_modal');
  linksItem.forEach(item => item.classList.toggle('nav__link-item_modal'));
}

document
  .querySelector('.header__burger-btn')
  .addEventListener('click', toggleBurger);
