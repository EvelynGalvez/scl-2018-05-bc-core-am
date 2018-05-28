window.cipher = {
  encode: () => {
    /* Acá va tu código */
    let palabraCifrada1 = [];
    let palabraCifrada = [];
    let desplazamiento = prompt('Ingrese desplazamiento: ');
    let palabraInicial = prompt('Ingresar palabra: ');
    let i = 0;
    while (i < palabraInicial.length) {
    palabraCifrada [i] = palabraInicial.charCodeAt(i) + parseInt(desplazamiento); /*Transforma char a ASCII + desplazamiento FUNCIONA!!*/ 
    palabraCifrada1 [i] = String.fromCharCode(palabraCifrada[i]); /*Transforma ASCII a char (ya cifrada) FUNCIONA!! */
    i++;
    }
    console.log(palabraCifrada1);
  },
  decode: () => {
    /* Acá va tu código */
  }
}