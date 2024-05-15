// Función para calcular la distancia de Hamming entre dos cadenas de ADN
export function compute(left: string, right: string): number {
    // Verificar que las cadenas tengan la misma longitud
    if (left.length !== right.length) {
        throw new Error('DNA strands must be of equal length.');
    }

    let hammingDistance = 0; // Inicializar la distancia de Hamming como cero

    // Iterar sobre cada posición en las cadenas y comparar los caracteres
    for (let i = 0; i < left.length; i++) {
        if (left[i] !== right[i]) { // Si los caracteres en la posición actual son diferentes
            hammingDistance++; // Incrementar la distancia de Hamming
        }
    }

    return hammingDistance; // Devolver la distancia de Hamming calculada
}
