window.cipher = {
  encode: (initialToCode, displacementCode) => {
    /* Acá va tu código */
    let readyPhrase1 = [];
    let cipherPhrase = [];
    let i = 0;
    while (i < initialToCode.length) {
    cipherPhrase [i] = (initialToCode.toUpperCase(i).charCodeAt(i) - 65 + parseInt(displacementCode)) % 26 +65; /*Transforma char a ASCI desplazamiento FUNCIONA!!*/ 
    if (initialToCode.charCodeAt(i) === 32) {
      cipherPhrase[i] = ' ';
      readyPhrase1[i] = ' ';
      i++;
    } else {
            readyPhrase1[i] = String.fromCharCode(cipherPhrase[i]); /*Transforma ASCII a char (ya cifrada) FUNCIONA!! */ 
            i++;
    } 
  }
  let final1 = readyPhrase1.join('');
  return final1.toLowerCase();
},

  decode: (initialToDecode, displacementDecode) => {
    /* Acá va tu código */
    let readyPhrase2 = [];
    let decipheredPhrase = [];
    let i = 0;
    while (i < initialToDecode.length) { 
      decipheredPhrase[i] = (initialToDecode.toUpperCase(i).charCodeAt(i) + 65 - parseInt(displacementDecode)) % 26 + 65;
      if (initialToDecode.charCodeAt(i) === 32) {
        decipheredPhrase[i] = ' ';
        readyPhrase2[i] = ' ';
        i++;
      } else {
          readyPhrase2 [i] = String.fromCharCode(decipheredPhrase[i]);
          i++;
      }
   }
  let final2 = readyPhrase2.join('');
  return final2.toLowerCase();
},
}