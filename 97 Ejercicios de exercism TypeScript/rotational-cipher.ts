export function rotate(text: string, key: number): string {
    // Inicializar una cadena para almacenar el texto cifrado
    let cipherText = '';
  
    // Iterar sobre cada carácter en el texto
    for (let i = 0; i < text.length; i++) {
      let char = text[i];
      let charCode = text.charCodeAt(i);
  
      // Verificar si el carácter es una letra minúscula del alfabeto
      if (charCode >= 97 && charCode <= 122) {
        // Aplicar el desplazamiento ROT mediante la clave
        charCode = ((charCode - 97 + key) % 26) + 97;
        char = String.fromCharCode(charCode);
      } else if (charCode >= 65 && charCode <= 90) { // Si es una letra mayúscula
        charCode = ((charCode - 65 + key) % 26) + 65;
        char = String.fromCharCode(charCode);
      }
  
      // Concatenar el carácter cifrado al texto cifrado
      cipherText += char;
    }
  
    // Devolver el texto cifrado
    return cipherText;
  }
  