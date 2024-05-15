export function isIsogram(input: string): boolean {
    // Convertir la entrada a minuscula y eliminar espacion y guiones
    const normalizedInput = input.toLowerCase().replace(/[ -]/g, '');

    // Crear un conjuntos para almacenar las letras unicas
    const letras = new Set<string>();

    // Iterar sobre cada letra de la entrada
    for(const letter of normalizedInput) {
        // Si la letra ya esta en el conjunto, no es un isograma
        if(letras.has(letter)) {
            return false;
        }
        // Agregar la letra al conjunto
        letras.add(letter);
    }

    // Si todas las letras estan en el conjunto, es un isograma
    return true;
}
