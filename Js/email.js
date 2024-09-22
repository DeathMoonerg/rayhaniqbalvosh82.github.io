const form = document.getElementById('contact-form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const nama = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const pesan = document.getElementById('message').value;

    const url = 'https://formspree.io/f/xdknrlpn';

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: nama,
            email: email,
            message: pesan
        })
    })
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((error) => console.error(error));
});
