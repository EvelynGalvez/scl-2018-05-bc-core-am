window.onload = () => {
  const codeButton = document.getElementById('btn-cifrar');
  const encodeButton = document.getElementById('btn-descifrar');

  codeButton.addEventListener('click', () => {
    let initialToCode = document.getElementById('mensajeUsuario').value;
    let displacementCode = document.getElementById('number').value;
    document.getElementById('mensajePrograma').innerHTML = window.cipher.encode(initialToCode, displacementCode);
  });

  encodeButton.addEventListener('click', () => {
    let initialToDecode = document.getElementById('mensajeUsuario').value;
    let displacementDecode = document.getElementById('number').value;
    document.getElementById('mensajePrograma').innerHTML = window.cipher.decode(initialToDecode, displacementDecode);
  });
}