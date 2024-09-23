// Pilih elemen menu dan tombol toggle
const menu = document.querySelector('nav');
const toggleButton = document.querySelector('.menu-toggle');
const homeButton = document.querySelector('.home-button');

// Tambahkan event listener pada tombol toggle
toggleButton.addEventListener('click', () => {
  // Toggle class 'show' pada menu
  menu.classList.toggle('show');

  // Tambahkan animasi pada menu
  if (menu.classList.contains('show')) {
    menu.style.transform = 'translateX(0)';
    menu.style.opacity = '1';
  } else {
    menu.style.transform = 'translateX(-100%)';
    menu.style.opacity = '0';
  }
});

// Tambahkan event listener pada tombol "Home"
homeButton.addEventListener('click', () => {
  // Toggle class 'show' pada menu
  menu.classList.remove('show');

  // Reset animasi pada menu
  menu.style.transform = 'translateX(-100%)';
  menu.style.opacity = '0';
});
