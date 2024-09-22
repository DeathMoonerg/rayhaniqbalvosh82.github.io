const tabButtons = document.querySelectorAll('.tab-button');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach((button) => {
    button.addEventListener('click', () => {
        const tabId = button.getAttribute('data-tab');
        tabButtons.forEach((button) => button.classList.remove('active'));
        button.classList.add('active');
        tabContents.forEach((content) => content.classList.remove('active'));
        document.querySelector(`.tab-content[data-tab="${tabId}"]`).classList.add('active');
    });
});
typeText();
