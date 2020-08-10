document.querySelector('#contact-form').onsubmit = (e) => {
    e.preventDefault();
    const body = document.querySelector('#textarea1').value;
    const name = document.querySelector('#first_name').value;
    const email = document.querySelector('#email').value;
    const tel = document.querySelector('#icon_telephone').value;
    const msg = `Nombre: ${name}%0D%0A
Telefono: ${tel}%0D%0A
Email: ${email}%0D%0A
%0D%0A
Consulta: ${body}`;
    window.open(`mailto:info@khalifa.com?subject=Consulta&body=${msg}`);
}
