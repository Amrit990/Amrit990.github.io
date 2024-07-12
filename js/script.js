
 // JavaScript for hamburger menu functionality
 document.addEventListener('DOMContentLoaded', () => {
  const hamburgerMenu = document.querySelector('.hamburger-menu');
  const navLinks = document.querySelector('.nav-links');

  hamburgerMenu.addEventListener('click', () => {
      navLinks.classList.toggle('active');
  });
});


  // event handling pics for event aoto loading
  document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;
  
    const showSlide = (index) => {
      slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
      });
    };
  
    const nextSlide = () => {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    };
  
    setInterval(nextSlide, 4000); // Change slide every 4 seconds
  
    showSlide(currentSlide); // Show the first slide initially
  });
  
  var slideIndex = 0;
showSlides();

  

