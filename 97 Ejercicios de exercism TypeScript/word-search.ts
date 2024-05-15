// Definición de un tipo para representar una tupla de dos números
type Tuple = [number, number];

// Definición de un tipo para representar la ubicación de una palabra en el rompecabezas
type WordLocation = {
  start: Tuple; // Posición de inicio de la palabra
  end: Tuple;   // Posición de fin de la palabra
};

// Definición de un tipo para representar el resultado de la búsqueda de palabras
type Result = { [word: string]: WordLocation | undefined };

export class WordSearch {
  private puzzle: string[][]; // Rompecabezas de palabras
  private maxRow: number;     // Número máximo de filas en el rompecabezas
  private maxCol: number;     // Número máximo de columnas en el rompecabezas

  // Constructor de la clase WordSearch
  constructor(grid: string[]) {
    // Inicializar el rompecabezas
    const puzzle = [];
    for (const word in grid) {
      puzzle.push(grid[word].split(""));
    }

    // Asignar valores a las propiedades de la clase
    this.puzzle = puzzle;
    this.maxRow = puzzle.length;
    this.maxCol = puzzle[0].length;
  }

  // Método privado para buscar una palabra en una dirección específica
  private search(
    word: string,
    r: number,
    c: number,
    dr: number,
    dc: number
  ): WordLocation | undefined {
    const start: Tuple = [r, c]; // Posición de inicio de la búsqueda

    // Iterar sobre cada carácter de la palabra
    for (const ch of word) {
      // Verificar si el carácter en la posición actual coincide con el carácter de la palabra
      if (this.puzzle[r - 1]?.[c - 1] !== ch) {
        // NO MATCH: No se encontró coincidencia
        return undefined;
      }
      r += dr; // Incrementar la fila según la dirección de búsqueda
      c += dc; // Incrementar la columna según la dirección de búsqueda
    }

    // Retornar la ubicación de la palabra encontrada
    return { start, end: [r - dr, c - dc] };
  }

  // Método privado para encontrar una palabra en todas las direcciones posibles
  private findOne(
    word: string,
    r: number,
    c: number
  ): WordLocation | undefined {
    // Iterar sobre las direcciones posibles
    for (let dr = -1; dr <= 1; dr++) {
      for (let dc = -1; dc <= 1; dc++) {
        // Realizar la búsqueda en la dirección actual
        const result = this.search(word, r, c, dr, dc);

        // Si se encuentra la palabra, retornar su ubicación
        if (result) {
          return result;
        }
      }
    }
  }

  // Método público para buscar varias palabras en el rompecabezas
  public find(words: string[]): Result {
    // Inicializar el resultado de la búsqueda
    const result: Result = words.reduce((acc, word) => {
      acc[word] = undefined; // Inicializar cada palabra con ubicación indefinida
      return acc;
    }, {} as Result);

    // Iterar sobre todas las posiciones del rompecabezas
    for (let r = 1; r <= this.maxRow; r++) {
      for (let c = 1; c <= this.maxCol; c++) {
        // Iterar sobre cada palabra a buscar
        for (const word of words) {
          // Si la palabra no se ha encontrado todavía
          if (!result[word]) {
            // Realizar la búsqueda de la palabra en la posición actual
            const location = this.findOne(word, r, c);
            // Si se encuentra la palabra, actualizar su ubicación en el resultado
            if (location) {
              result[word] = location;
            }
          }
        }
      }
    }

    // Retornar el resultado final de la búsqueda
    return result;
  }
}
