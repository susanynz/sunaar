document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = this.elements['name'].value.trim();
    const email = this.elements['email'].value.trim();
    const message = this.elements['message'].value.trim();

    if (name === '' || email === '' || message === '') {
        alert('Por favor, completa todos los campos.');
        return;
    }

    alert(`¡Gracias, ${name}! Tu mensaje ha sido enviado. Te responderemos a ${email} en 24 horas.`);
    this.reset();
});
</script>