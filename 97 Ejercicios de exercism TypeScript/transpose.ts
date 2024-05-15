export function transpose(input: string[]): string[] {
    // Verifica si la matriz de entrada está vacía
    if (input.length === 0) {
      return [];
    }
  
    // Encuentra la longitud máxima de línea en la matriz de entrada
    const maxLineLength = Math.max(...input.map((line) => line.length));
  
    // Inicializa una matriz para almacenar la matriz transpuesta
    const transposed: string[] = [];
  
    // Itera sobre cada columna en la matriz transpuesta
    for (let i = 0; i < maxLineLength; i++) {
      // Construye una línea transpuesta concatenando los caracteres en la misma posición de cada línea de la matriz de entrada
      const transposedLine = input
        .map((line) => (i < line.length ? line[i] : ' ')) // Si la línea de entrada es más corta que la columna actual, usa un espacio en blanco
        .join(''); // Une todos los caracteres de la columna en una sola cadena
      transposed.push(transposedLine); // Agrega la línea transpuesta a la matriz transpuesta
    }
  
    // Elimina los espacios en blanco finales de la última línea transpuesta
    transposed[transposed.length - 1] = transposed[transposed.length - 1].trimEnd();
  
    return transposed; // Devuelve la matriz transpuesta
  }
  