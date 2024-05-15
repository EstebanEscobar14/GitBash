// Función que convierte una cadena de ADN en su correspondiente cadena de ARN
export function toRna(dna: string): string {
    // Objeto que mapea cada nucleótido de ADN a su complemento en ARN
    const nucleotideMap: {[nucleotide: string]: string} = {
        G: 'C',
        C: 'G',
        T: 'A',
        A: 'U'
    };

    let rna = ''; // Inicialización de la cadena de ARN

    // Iterar sobre cada nucleótido de la cadena de ADN
    for (const nucleotide of dna) {
        // Verificar si el nucleótido de ADN es válido
        if (!(nucleotide in nucleotideMap)) {
            // Si no es válido, lanzar un error
            throw new Error('Invalid input DNA.');
        }
        // Concatenar el complemento en ARN del nucleótido de ADN actual a la cadena de ARN
        rna += nucleotideMap[nucleotide];
    }

    // Devolver la cadena de ARN resultante
    return rna;
}
