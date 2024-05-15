// Función para codificar una cadena utilizando run-length encoding
export function encode(input: string): string {
    let encodeString = ''; // Cadena para almacenar la codificación
    let count = 1; // Contador para contar la repetición de caracteres

    // Iterar sobre la cadena de entrada
    for(let i = 0; i < input.length; i++) {
        // Verificar si el carácter actual es igual al siguiente
        if(input[i] === input[i + 1]) {
            count++; // Incrementar el contador si los caracteres son iguales
        } else {
            // Agregar al resultado la cuenta (si es mayor que 1) seguida del carácter actual
            encodeString += (count > 1 ? count : '') + input[i];
            count = 1; // Restablecer el contador
        }
    }

    return encodeString; // Devolver la cadena codificada
}

// Función para decodificar una cadena codificada con run-length encoding
export function decode(input: string): string {
    let decodeString = ''; // Cadena para almacenar la decodificación
    let countString = ''; // Cadena para almacenar el contador de repetición

    // Iterar sobre la cadena de entrada
    for(let i = 0; i < input.length; i++) {
        // Verificar si el carácter actual es un número (para obtener el contador)
        if(/[0-9]/.test(input[i])) {
            countString += input[i]; // Agregar el dígito al contador
        } else {
            // Obtener el número de repeticiones (si no hay contador, se asume 1)
            const count = countString === '' ? 1 : Number(countString);
            // Agregar al resultado el carácter actual repetido según el contador
            decodeString += input[i].repeat(count);
            countString = ''; // Restablecer la cadena del contador
        }
    }

    return decodeString; // Devolver la cadena decodificada
}
