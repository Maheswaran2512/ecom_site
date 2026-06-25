document.getElementById('contact-form').addEventListener('submit', (event) => {
    event.preventDefault();
    console.log("rub")
    emailjs.init('ixPPgpfnPjX6KgqX1');

    const templateParams = {
        from_name: document.getElementById('name').value,
        from_email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };

    emailjs.send('service_qr94m2m', 'template_1u8km3t', templateParams)
        .then(() => {
            alert('Message sent successfully! Thank you for contacting us! We will get back to you soon!');
        })
        .catch((error) => {
            alert('Error sending message: ' + error.text);
        });
});