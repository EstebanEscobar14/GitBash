// Función para obtener el patrón de representación de un solo número
const getPattern = (str: string): string => {
    // Sentencia switch para comparar el patrón de entrada con el dígito correspondiente
    switch (str) {
      case ' _ | ||_|':
        return '0'; // Devolver '0' si el patrón coincide con el del número 0
      case '     |  |':
        return '1'; // Devolver '1' si el patrón coincide con el del número 1
      case ' _  _||_ ':
        return '2'; // Devolver '2' si el patrón coincide con el del número 2
      case ' _  _| _|':
        return '3'; // Devolver '3' si el patrón coincide con el del número 3
      case '   |_|  |':
        return '4'; // Devolver '4' si el patrón coincide con el del número 4
      case ' _ |_  _|':
        return '5'; // Devolver '5' si el patrón coincide con el del número 5
      case ' _ |_ |_|':
        return '6'; // Devolver '6' si el patrón coincide con el del número 6
      case ' _   |  |':
        return '7'; // Devolver '7' si el patrón coincide con el del número 7
      case ' _ |_||_|':
        return '8'; // Devolver '8' si el patrón coincide con el del número 8
      case ' _ |_| _|':
        return '9'; // Devolver '9' si el patrón coincide con el del número 9
      default:
        return '?'; // Si el patrón no coincide con ningún número conocido, devolver '?'
    }
  };
  
  // Función principal para convertir una cadena de números en dígitos
  export function convert(str: string): string {
    // Dividir la cadena de entrada en un array de líneas
    let arr = str.split('\n');
  
    const result: string[] = [];
  
    // Recorrer cada fila de la cadena de entrada
    for (let i = 0; i < arr.length; i += 4) {
      // Recorrer cada carácter de la fila
      for (let j = 0; j < arr[i].length; j += 3) {
        // Extraer el patrón de la representación del número actual
        const pattern = arr[i][j] + arr[i][j + 1] + arr[i][j + 2] + arr[i + 1][j] + arr[i + 1][j + 1] + arr[i + 1][j + 2] + arr[i + 2][j] + arr[i + 2][j + 1] + arr[i + 2][j + 2];
        // Obtener el dígito correspondiente al patrón y agregarlo al array de resultado
        result.push(getPattern(pattern));
      }
      // Agregar una coma después de cada representación de número
      result.push(',');
    }
  
    // Unir el array de resultado en una cadena y eliminar la última coma
    return result.slice(0, -1).join('');
  }
  