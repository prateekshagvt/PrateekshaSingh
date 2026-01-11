// Smooth scrolling for nav links + collapse mobile nav
document.querySelectorAll('a.nav-link').forEach(link => {
  link.addEventListener('click', e => {
    if (link.hash) {
      e.preventDefault();
      const target = document.querySelector(link.hash);
      if (target) {
        window.scrollTo({
          top: target.getBoundingClientRect().top + window.scrollY - 20,
          behavior: 'smooth'
        });
        const bsCollapse = document.querySelector('.navbar-collapse');
        if (bsCollapse && bsCollapse.classList.contains('show')) {
          new bootstrap.Collapse(bsCollapse).hide();
        }
      }
    }
  });
});

// Animate skill bars on scroll
function animateSkillBars() {
  const bars = document.querySelectorAll('.skill-box .progress-bar');
  bars.forEach(bar => {
    const rect = bar.getBoundingClientRect();
    if (rect.top < window.innerHeight - 50) {
      bar.style.width = bar.getAttribute('data-width');
    }
  });
}

// Run on scroll and on page load
window.addEventListener('scroll', animateSkillBars);
window.addEventListener('load', animateSkillBars);

// Scroll reveal animation
const reveals = document.querySelectorAll('.reveal');

function revealOnScroll() {
  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 80) {
      el.classList.add('active');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);



// Active nav link highlight
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const top = section.offsetTop - 120;
    if (scrollY >= top) current = section.id;
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});
