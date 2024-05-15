// Define una interfaz para representar el rango de factores
interface Range {
    maxFactor: number; // Factor máximo
    minFactor: number; // Factor mínimo
  }
  
  // Define una interfaz para representar un palíndromo
  interface Palindrome {
    value: number | null; // Valor del palíndromo
    factors: [number, number][]; // Lista de pares de factores que producen el palíndromo
  }
  
  // Define una interfaz para representar un par de palíndromos (el más pequeño y el más grande)
  interface Palindromes {
    smallest: Palindrome; // El palíndromo más pequeño
    largest: Palindrome; // El palíndromo más grande
  }
  
  // Función principal para generar los palíndromos
  export function generate(range: Range): Palindromes {
    // Verifica si el factor mínimo es mayor que el factor máximo
    if (range.maxFactor < range.minFactor)
      throw new Error("min must be <= max");
    
    // Genera y devuelve el par de palíndromos (el más pequeño y el más grande)
    return { smallest: generateSmallest(range), largest: generateLargest(range) };
  }
  
  // Función para verificar si un número es un palíndromo
  function isPalindrome(n: number): boolean {
    const nAsStr = n.toString(); // Convierte el número en una cadena de caracteres
  
    // Comprueba si la cadena es igual a su reverso
    return nAsStr === nAsStr.split("").reverse().join("");
  }
  
  // Función para generar el palíndromo más pequeño dentro del rango dado
  function generateSmallest(range: Range): Palindrome {
    let value = null; // Inicializa el valor del palíndromo como nulo
    const factors: [number, number][] = []; // Inicializa la lista de factores
  
    // Itera sobre los números del cuadrado del factor mínimo al cuadrado del factor máximo
    for (let z = Math.pow(range.minFactor, 2); z <= Math.pow(range.maxFactor, 2); z++) {
      // Verifica si el número es un palíndromo
      if (isPalindrome(z)) {
        // Itera sobre los factores posibles del palíndromo
        for (let x = range.minFactor; x <= Math.min(range.maxFactor, Math.sqrt(z)); x++) {
          if (z % x === 0) {
            let y = z / x;
  
            // Verifica si los factores están dentro del rango
            if (y >= range.minFactor && y <= range.maxFactor) {
              value = z; // Actualiza el valor del palíndromo
              factors.push([x, y]); // Agrega los factores a la lista
            }
          }
        }
      }
  
      // Si se encontraron factores, detén la búsqueda
      if (factors.length) {
        break;
      }
    }
  
    // Devuelve el palíndromo más pequeño y sus factores
    return { value: value, factors: factors };
  }
  
  // Función para generar el palíndromo más grande dentro del rango dado
  function generateLargest(range: Range): Palindrome {
    let value = null; // Inicializa el valor del palíndromo como nulo
    const factors: [number, number][] = []; // Inicializa la lista de factores
  
    // Itera sobre los números del cuadrado del factor máximo al cuadrado del factor mínimo
    for (let z = Math.pow(range.maxFactor, 2); z >= Math.pow(range.minFactor, 2); z--) {
      // Verifica si el número es un palíndromo
      if (isPalindrome(z)) {
        // Itera sobre los factores posibles del palíndromo
        for (let x = range.minFactor; x <= Math.min(range.maxFactor, Math.sqrt(z)); x++) {
          if (z % x === 0) {
            let y = z / x;
  
            // Verifica si los factores están dentro del rango
            if (y >= range.minFactor && y <= range.maxFactor) {
              value = z; // Actualiza el valor del palíndromo
              factors.push([x, y]); // Agrega los factores a la lista
            }
          }
        }
      }
  
      // Si se encontraron factores, detén la búsqueda
      if (factors.length) {
        break;
      }
    }
  
    // Devuelve el palíndromo más grande y sus factores
    return { value: value, factors: factors };
  }
  