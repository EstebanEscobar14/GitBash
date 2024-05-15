const ALPHABET = "ABCDEFGHIJKLMNOPRQRSTUVWXYZ";

// Función para generar una cadena con un número específico de espacios
function spaceTimes(n: number): string {
  let spaces = '';
  for (let i = 0; i < n; i++) {
    spaces += ' ';
  }
  return spaces;
}

export function makeDiamond(character: string): string {
  // Si el carácter es 'A', devolver un diamante simple
  if (character === 'A') return 'A\n';

  const diamond: string[] = []; // Arreglo para almacenar las filas del diamante
  const indexCharacter: number = ALPHABET.indexOf(character); // Índice del carácter en el alfabeto
  const rowA: string = spaceTimes(indexCharacter) + 'A' + spaceTimes(indexCharacter); // Construir la fila 'A'
  diamond.push(rowA); // Agregar la fila 'A' al diamante

  let cpt = 1; // Inicializar un contador para el número de espacios entre las letras
  // Iterar para construir las filas superiores del diamante
  for (let i = 1; i < indexCharacter; i++) {
    const row: string = spaceTimes(indexCharacter - i) + ALPHABET.charAt(i) + spaceTimes(cpt) + ALPHABET.charAt(i) + spaceTimes(indexCharacter - i);
    // Construir la fila con espacios antes y después del carácter, y el carácter repetido
    diamond.push(row); // Agregar la fila al diamante
    cpt += 2; // Incrementar el número de espacios entre las letras para la siguiente fila
  }

  diamond.push(character + spaceTimes(cpt) + character); // Agregar la fila central del diamante

  cpt -= 2; // Restablecer el contador para las filas inferiores del diamante
  // Iterar para construir las filas inferiores del diamante
  for (let i = indexCharacter - 1; i >= 1; i--) {
    const row: string = spaceTimes(indexCharacter - i) + ALPHABET.charAt(i) + spaceTimes(cpt) + ALPHABET.charAt(i) + spaceTimes(indexCharacter - i);
    // Construir la fila con espacios antes y después del carácter, y el carácter repetido
    diamond.push(row); // Agregar la fila al diamante
    cpt -= 2; // Reducir el número de espacios entre las letras para la siguiente fila
  }

  diamond.push(rowA); // Agregar la fila 'A' al diamante para completar la simetría

  return diamond.join("\n") + "\n"; // Devolver el diamante completo como una cadena
}
