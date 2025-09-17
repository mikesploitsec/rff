// Rylee Faith Foundation - Main JavaScript

// Add interactive features
document.addEventListener('DOMContentLoaded', function() {
  // Add smooth scroll reveal animation
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);
  
  const sections = document.querySelectorAll('.content-section, .donate-section, .stat-item');
  sections.forEach(section => {
    observer.observe(section);
  });
  
  // Add click tracking for donate button
  const donateBtn = document.querySelector('.donate-btn');
  if (donateBtn) {
    donateBtn.addEventListener('click', function(e) {
      console.log('Donate button clicked');
      // Add loading state
      this.classList.add('loading');
      
      // Remove loading state after a short delay
      setTimeout(() => {
        this.classList.remove('loading');
      }, 1000);
    });
  }
  
  // Add keyboard navigation
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      window.location.href = '../web-development.html';
    }
  });
});
