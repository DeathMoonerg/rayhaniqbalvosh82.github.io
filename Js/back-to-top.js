 // Back to Top Button Functionality
 const backToTopButton = document.getElementById('backToTop');

 // Show/hide the button based on scroll position
 window.addEventListener('scroll', () => {
     if (window.pageYOffset > 300) {
         backToTopButton.style.display = 'block';
     } else {
         backToTopButton.style.display = 'none';
     }
 });

 // Scroll to the top when button is clicked
 backToTopButton.addEventListener('click', () => {
     window.scrollTo({
         top: 0,
          behavior: 'smooth'
     });
 });