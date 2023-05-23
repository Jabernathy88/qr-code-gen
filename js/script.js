const form = document.getElementById('generate-form');
const qr = document.getElementById('qrcode');

const onGenerateSubmit = (e) => { // event parameter
    e.preventDefault();

    const url = document.getElementById('url').ariaValueMax;
    const size = document.getElementById('size').ariaValueMax;

    console.log(url, size);
};

form.addEventListener('submit', onGenerateSubmit);
