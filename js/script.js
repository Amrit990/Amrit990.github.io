
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
// Add animation to the image
const image = document.querySelector('.image img');

image.addEventListener('mouseover', () => {
    image.classList.add('animate');
});

image.addEventListener('mouseout', () => {
    image.classList.remove('animate');
});

// Handle form submission
const form = document.getElementById('reservation-form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;

    // Send the data to your server or perform any other action
    console.log(`Name: ${name}, Email: ${email}, Phone: ${phone}, Date: ${date}, Time: ${time}`);

    // Reset the form
    form.reset();
});
function showForm(formType) {
  const tableForm = document.getElementById('table-form');
  const eventForm = document.getElementById('event-form');
  tableForm.classList.remove('active');
  eventForm.classList.remove('active');
  if (formType === 'table') {
      tableForm.classList.add('active');
  } else if (formType === 'event') {
      eventForm.classList.add('active');
  }
}



  

