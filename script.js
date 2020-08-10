function handleSubmit(){
    event.preventDefault();
    const data = new FormData(event.target);
    console.log('te amo');
    fetch('https://script.google.com/macros/s/AKfycbyc8B0TVexCzKSasYrXGRrh5yJgpVyxU5Cz2q98/exec', {
        method: 'POST',
        body: data,
    }).then(() => {
        console.log('Submitted');
        alert('El mensaje fue enviado! Gracias');
        location.reload();
    }).catch(console.error);
}