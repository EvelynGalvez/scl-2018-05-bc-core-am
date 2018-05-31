/* Acá va tu código */
window.onload = function () {
    /*Botones*/
    const codeButton = document.getElementById('btn-cifrar');
    const encodeButton = document.getElementById('btn-descifrar');

    codeButton.addEventListener('click', () => {
        document.getElementById('mensajeUsuario').value;
        document.getElementById('number').value;
        ('mensajePrograma').innerHTML = window.cipher.encode(initialCode, displacement);   
    });