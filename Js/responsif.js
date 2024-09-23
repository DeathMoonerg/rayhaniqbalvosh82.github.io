// Add this to your JavaScript file

// Get the menu items
const menuItems = document.querySelectorAll('nav ul li');

// Add an event listener to each menu item
menuItems.forEach((menuItem) => {
  menuItem.addEventListener('click', () => {
    // Get the corresponding page content
    const pageContent = document.querySelector(`#${menuItem.dataset.page}`);

    // Scroll to the page content
    pageContent.scrollIntoView({ behavior: 'smooth' });
  });
});