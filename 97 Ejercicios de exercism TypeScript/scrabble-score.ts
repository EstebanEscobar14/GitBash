// Función para calcular el puntaje de una palabra en el juego Scrabble
export function score(word: string): number {
    // Verificar si el argumento no es una cadena
    if (typeof word !== 'string') {
        return 0; // Devolver 0 si el argumento no es una cadena
    }

    // Objeto que asigna valores a cada letra del alfabeto en Scrabble
    const letterValues: Record<string, number> = {
        a: 1, e: 1, i: 1, o: 1, u: 1, l: 1, n: 1, r: 1, s: 1, t: 1,
        d: 2, g: 2,
        b: 3, c: 3, m: 3, p: 3,
        f: 4, h: 4, v: 4, w: 4, y: 4,
        k: 5,
        j: 8, x: 8,
        q: 10, z: 10
    };

    let score = 0; // Inicializar el puntaje como 0

    // Iterar sobre cada letra de la palabra (convertida a minúsculas)
    for (const letter of word.toLowerCase()) {
        if (letter in letterValues) { // Verificar si la letra está en el objeto de valores de letras
            score += letterValues[letter]; // Sumar el valor de la letra al puntaje
        }
    }

    return score; // Devolver el puntaje total de la palabra
}
