document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.querySelector('.nav-links');

  hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('show');
  });
});
// Detect visibility using Intersection Observer
document.addEventListener("DOMContentLoaded", function () {
  const serviceCards = document.querySelectorAll('.service-card');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-bounce');
      } else {
        entry.target.classList.remove('animate-bounce'); // optional: remove to repeat on re-scroll
      }
    });
  }, {
    threshold: 0.3 // triggers when 30% of card is visible
  });

  serviceCards.forEach((card, index) => {
  card.style.animationDelay = `${index * 0.7}s`;
  observer.observe(card);
  });

});
