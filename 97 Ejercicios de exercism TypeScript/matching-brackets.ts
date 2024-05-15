/**
 * Verifica si los paréntesis, corchetes y llaves en la cadena están anidados correctamente.
 * @param input La cadena que se va a verificar.
 * @returns Verdadero si los paréntesis, corchetes y llaves están anidados correctamente, falso de lo contrario.
 */
export function isPaired(input: string): boolean {
    // Creamos un stack para almacenar los paréntesis, corchetes y llaves abiertos
    const stack: string[] = [];
    
    // Creamos un mapa que mapea los caracteres de cierre a sus caracteres correspondientes de apertura
    const matchingBrackets: { [key: string]: string } = {
      "}": "{",
      "]": "[",
      ")": "(",
    };
  
    // Iteramos sobre cada carácter en la cadena
    for (const char of input) {
      // Si el carácter es un paréntesis, corchete o llave de apertura, lo agregamos al stack
      if (char === "{" || char === "[" || char === "(") {
        stack.push(char);
      }
      // Si el carácter es un paréntesis, corchete o llave de cierre
      else if (char === "}" || char === "]" || char === ")") {
        // Verificamos si el stack está vacío o si el último elemento en el stack no coincide con el carácter actual
        if (stack.length === 0 || stack.pop() !== matchingBrackets[char]) {
          // Si no coinciden, significa que los paréntesis, corchetes o llaves no están anidados correctamente
          return false;
        }
      }
    }
  
    // Si al finalizar la iteración, el stack está vacío, significa que todos los pares coinciden
    return stack.length === 0;
  }
  