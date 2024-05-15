// Alfabeto normal y su equivalente cifrado
const PLAINALPHABET = "abcdefghijklmnopqrstuvwxyz";
const CIPHERALPHABET = "zyxwvutsrqponmlkjihgfedcba";

// Función para cifrar un texto
export function encode(plainText: string): string {
    let encodedText = ""; // Texto cifrado resultante
    let i = 0; // Contador para agregar espacios cada 5 caracteres

    // Iterar sobre cada carácter del texto plano
    for (let j = 0; j < plainText.length; j++) {
        const char = plainText[j].toLowerCase(); // Convertir el carácter a minúscula

        // Si el carácter es una letra del alfabeto, cifrarla
        if(/[a-z]/.test(char)) {
            const index = PLAINALPHABET.indexOf(char); // Obtener el índice del carácter en el alfabeto normal
            encodedText += CIPHERALPHABET[index]; // Agregar el carácter cifrado al texto cifrado resultante
            i++; // Incrementar el contador de caracteres cifrados

        // Si el carácter es un número, conservarlo
        } else if (/[0-9]/.test(char)) {
            encodedText += char; // Agregar el número al texto cifrado resultante
            i++; // Incrementar el contador de caracteres cifrados
        }

        // Agregar un espacio cada 5 caracteres cifrados, excepto al final del texto
        if (i === 5 && j !== plainText.length - 1){
            encodedText += " "; // Agregar un espacio
            i = 0; // Reiniciar el contador de caracteres cifrados
        } 
    }
    return encodedText; // Devolver el texto cifrado
}

// Función para descifrar un texto cifrado
export function decode(cipherText: string): string {
    let decodedText = ""; // Texto descifrado resultante

    // Iterar sobre cada carácter del texto cifrado
    for (let i = 0; i < cipherText.length; i++) {
        const char = cipherText[i].toLowerCase(); // Convertir el carácter a minúscula

        // Si el carácter es una letra cifrada, descifrarla
        if (/[a-z]/.test(char)) {
            const index = CIPHERALPHABET.indexOf(char); // Obtener el índice del carácter cifrado en el alfabeto cifrado
            decodedText += PLAINALPHABET[index]; // Agregar el carácter descifrado al texto descifrado resultante

        // Si el carácter es un número, conservarlo
        } else if (/[0-9]/.test(char)) {
            decodedText += char; // Agregar el número al texto descifrado resultante
        }
    }

    return decodedText; // Devolver el texto descifrado
}
