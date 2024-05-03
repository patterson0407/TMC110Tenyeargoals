document.addEventListener("DOMContentLoaded", function() {
    let heroSection = document.querySelector('.hero-section');
    let yPos = window.pageYOffset;

    function parallax() {
        yPos = window.pageYOffset;
        heroSection.style.backgroundPositionY = yPos * 0.5 + 'px'; /* Adjust the multiplier to control the parallax effect */
    }

    window.addEventListener('scroll', parallax);
});
window.addEventListener('scroll', function() {
    const timelineItems = document.querySelectorAll('.career-goals li, .personal-goals li');
  
    timelineItems.forEach(item => {
      const rect = item.getBoundingClientRect();
      const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
      const threshold = 0.6;
  
      if (rect.top < viewportHeight * threshold) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });
  });
  