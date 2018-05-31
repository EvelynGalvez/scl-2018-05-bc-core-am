window.cipher = {
  encode: (initialToCode, displacementCode) => {
    /* Acá va tu código */
    let readyPhrase1 = [];
    let cipherPhrase = [];
    let offsetCode = prompt('Ingrese desplazamiento: ');
    let initialCode = prompt('Ingresar palabra: ');
    let i = 0;
    while (i < initialCode.length) {
    cipherPhrase [i] = (initialCode.toUpperCase(i).charCodeAt(i) - 65 + parseInt(offsetCode)) % 26 +65; /*Transforma char a ASCI desplazamiento FUNCIONA!!*/ 
    if (initialCode.charCodeAt(i) === 32) {
      cipherPhrase[i] = ' ';
      readyPhrase1[i] = ' ';
      i++;
    } else {
            readyPhrase1 [i] = String.fromCharCode(cipherPhrase[i]); /*Transforma ASCII a char (ya cifrada) FUNCIONA!! */ 
            i++;
    } 
  }
  /*console.log(readyPhrase1);*/
  return readyPhrase1;
},

  decode: (initialToDecode, displacementDecode) => {
    /* Acá va tu código */
    let readyPhrase2 = [];
    let decipheredPhrase = [];
    let offsetDecode = prompt('Ingresa desplazamiento: ');
    let initialDecode = prompt('Ingresa palabra: ');
    let i = 0;
    while (i < initialDecode.length) { 
      decipheredPhrase[i] = (initialDecode.toUpperCase(i).charCodeAt(i) + 65 - parseInt(offsetDecode)) % 26 + 65;
      if (initialDecode.charCodeAt(i) === 32) {
        decipheredPhrase[i] = ' ';
        readyPhrase2[i] = ' ';
        i++;
      } else {
          readyPhrase2 [i] = String.fromCharCode(decipheredPhrase[i]);
          i++;
      }
   }
  return readyPhrase2;
  console.log(readyPhrase2);
},
}