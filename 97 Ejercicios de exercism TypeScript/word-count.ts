// Función para contar la frecuencia de palabras en una oración
export function count(sentence: string): Map<string, number> {
    let frequencies = new Map<string, number>(); // Mapa para almacenar las frecuencias de las palabras

    // Iterar sobre cada palabra en la oración dividida por espacios, saltos de línea y varios caracteres de puntuación
    for (let word of sentence.split(/[\s\n,.:!&@$%^?\\"]/)) {
        word = word.replace(/^'*|'*$/g, '').toLowerCase(); // Limpiar la palabra de comillas y convertirla a minúsculas

        if (word) // Si la palabra no está vacía después de la limpieza
            frequencies.set(word, (frequencies.get(word) ?? 0) + 1); // Incrementar la frecuencia de la palabra en el mapa
    }

    return frequencies; // Devolver el mapa de frecuencias de palabras
}
