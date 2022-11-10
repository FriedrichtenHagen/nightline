const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links a');

  burger.addEventListener('click', () => {

    nav.classList.toggle('nav-active');

    navLinks.forEach((link,index) => {
      if (link.style.animation) {
        link.style.animation = '';
      } else {
        link.style.animation = 'navLinksFade 0.5s ease forwards ${index / 7 + 1.5}s';
      }
    });
    burger.classList.toggle('toggle');
  });
}

document.addEventListener('click', () => {
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelector('.nav-links');
  const burger = document.querySelector('.burger');
  const line1 = document.querySelector('.line1');
  const line2 = document.querySelector('.line2');
  const line3 = document.querySelector('.line3');

  const shouldNavClose = !event.target.classList.contains(nav) 
    && !event.target.contains(navLinks)
    && !event.target.contains(line1)
    && !event.target.contains(line2)
    && !event.target.contains(line3)
    && nav.classList.contains('nav-active');
  const bodyWasClicked =
    event.target.tagName === 'BODY'
    && nav.classList.contains('nav-active');

  if (shouldNavClose || bodyWasClicked) {
    nav.classList.toggle('nav-active');
    burger.classList.toggle('toggle');
  }
})

navSlide();
// location.reload();