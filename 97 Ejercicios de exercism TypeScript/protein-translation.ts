// Función para traducir una secuencia de ARN en una lista de proteínas
export function translate(rna: string): string[] {
    // Mapa que asigna cada codón ARN a su proteína correspondiente
    const map: { [codon: string]: string } = {
        AUG: 'Methionine',
        UUU: 'Phenylalanine',
        UUC: 'Phenylalanine',
        UUA: 'Leucine',
        UUG: 'Leucine',
        UCU: 'Serine',
        UCC: 'Serine',
        UCA: 'Serine',
        UCG: 'Serine',
        UAU: 'Tyrosine',
        UAC: 'Tyrosine',
        UGU: 'Cysteine',
        UGC: 'Cysteine',
        UGG: 'Tryptophan',
        UAA: 'STOP',
        UAG: 'STOP',
        UGA: 'STOP'
    };

    const proteins: string[] = []; // Array para almacenar las proteínas traducidas

    // Iterar sobre la secuencia de ARN en pasos de 3 caracteres (codones)
    for (let i = 0; i < rna.length; i += 3) {
        const codon = rna.slice(i, i + 3); // Obtener el codón actual
        const protein = map[codon]; // Obtener la proteína correspondiente al codón

        if (!protein) {
            throw new Error('Invalid codon'); // Lanzar un error si el codón es inválido
        }

        if (protein === 'STOP') {
            break; // Salir del bucle si se encuentra un codón de parada
        }

        proteins.push(protein); // Agregar la proteína al array de proteínas traducidas
    }

    return proteins; // Devolver el array de proteínas traducidas
}
