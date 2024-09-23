// Pilih elemen menu dan tombol toggle
const menu = document.querySelector('nav');
const toggleButton = document.querySelector('.menu-toggle');

// Tambahkan event listener pada tombol toggle
toggleButton.addEventListener('click', () => {
  // Toggle class 'show' pada menu
  menu.classList.toggle('show');
});