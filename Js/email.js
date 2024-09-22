const form = document.getElementById('contact-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const nama = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const pesan = document.getElementById('message').value;
        const apikey = 'https://formspree.io/f/xgvwjlnl'; // API key
        const url = `https://formspree.io/api/v1/forms/${apikey}/submissions`;

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
