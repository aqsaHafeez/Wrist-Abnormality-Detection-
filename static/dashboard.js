// Get the navigation links and the sections
const navLinks = document.querySelectorAll('nav a');
const sections = document.querySelectorAll('main section');

// Set up a scroll event listener to highlight the current section
window.addEventListener('scroll', () => {
  let scrollPosition = window.scrollY;

  sections.forEach((section) => {
    if (scrollPosition >= section.offsetTop && scrollPosition < (section.offsetTop + section.offsetHeight)) {
      navLinks.forEach((link) => {
        link.classList.remove('active');
        if (link.hash === `#${section.id}`) {
          link.classList.add('active');
        }
      });
    }
  });
});

// Set up a click event listener for the navigation links
navLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.hash;
    const targetElement = document.querySelector(targetId);
    const targetPosition = targetElement.offsetTop;

    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  });
});
