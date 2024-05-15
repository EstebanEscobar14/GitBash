export function count(arr: string[]): number {
    let result = 0;
  
    // Itera sobre las filas de la matriz
    for (let i = 0; i < arr.length; i++) {
      // Itera sobre las columnas de la matriz
      for (let j = 0; j < arr[0].length; j++) {
        // Verifica si el carácter actual es un '+'
        if (arr[i][j] === '+') {
          // Busca otros tres '+' formando un rectángulo
          for (let i2 = i + 1; i2 < arr.length; i2++) {
            for (let j2 = j + 1; j2 < arr[0].length; j2++) {
              // Verifica si los cuatro vértices del rectángulo son '+'
              if (arr[i2][j2] === '+' && arr[i][j2] === '+' && arr[i2][j] === '+') {
                let valid = true;
  
                // Verifica si las líneas verticales son válidas
                for (let x = i + 1; x < i2; x++) {
                  if ((arr[x][j] !== '|' && arr[x][j] !== '+') || (arr[x][j2] !== '|' && arr[x][j2] !== '+')) {
                    valid = false;
                    break;
                  }
                }
  
                // Verifica si las líneas horizontales son válidas
                for (let y = j + 1; y < j2; y++) {
                  if ((arr[i][y] !== '-' && arr[i][y] !== '+') || (arr[i2][y] !== '-' && arr[i2][y] !== '+')) {
                    valid = false;
                    break;
                  }
                }
  
                // Si todas las líneas son válidas, aumenta el contador
                if (valid) result++;
              }
            }
          }
        }
      }
    }
  
    return result;
  }
  