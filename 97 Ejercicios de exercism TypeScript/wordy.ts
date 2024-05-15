// Función para responder preguntas matemáticas
export const answer = (question: string): number => {
    // Expresión regular para validar la sintaxis de la pregunta
    const validSyntax = /^What is((?:-|\d+|\s+|plus|minus|multiplied by|divided by)*)\?$/.exec(question);
  
    // Si la sintaxis no es válida, lanzar un error
    if (!validSyntax) {
      throw new Error("Unknown operation");
    }
  
    // Validar la sintaxis de las operaciones
    if (!/^ *-?\d+(?: +(?:plus|minus|multiplied by|divided by) +-?\d+)*$/.test(validSyntax[1])) {
      throw new Error("Syntax error");
    }
  
    // Limpiar y dividir la cadena en palabras para evaluar las operaciones
    const words = validSyntax[1].trim().replaceAll(" by", "").split(" ");
  
    // Inicializar el resultado con el primer número
    let result = Number(words[0]);
  
    // Iterar sobre las palabras que representan las operaciones
    for (let i = 1; i < words.length; i += 2) {
      // Evaluar cada operación y actualizar el resultado
      switch (words[i]) {
        case "plus": 
          result += Number(words[i + 1]); // Sumar el siguiente número
          break;
        case "minus": 
          result -= Number(words[i + 1]); // Restar el siguiente número
          break;
        case "multiplied": 
          result *= Number(words[i + 1]); // Multiplicar por el siguiente número
          break;
        case "divided": 
          result /= Number(words[i + 1]); // Dividir por el siguiente número
          break;
      }
    }
  
    return result; // Devolver el resultado de la operación
  }
  