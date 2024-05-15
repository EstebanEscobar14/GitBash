// Función para contar los nucleótidos en una secuencia de ADN
export function nucleotideCounts(sequence: string): Record<string, number> {
    // Objeto para almacenar el recuento de cada nucleótido
    const nucleotideCounts: Record<string, number> = {
        A: 0,
        C: 0,
        G: 0,
        T: 0
    };

    // Iterar sobre cada nucleótido en la secuencia
    for (const nucleotide of sequence) {
        // Verificar si el nucleótido es válido
        if (!(nucleotide in nucleotideCounts)) {
            throw new Error('Invalid nucleotide in strand');
        }
        // Incrementar el recuento del nucleótido correspondiente
        nucleotideCounts[nucleotide]++;
    }

    return nucleotideCounts; // Devolver el objeto con los recuentos de nucleótidos
}
