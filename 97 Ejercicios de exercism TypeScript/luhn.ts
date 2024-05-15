// Expresión regular para validar si la cadena contiene solo números
const justNumbersRegex = /^\d+$/;

// Función para verificar si una cadena de dígitos es válida según el algoritmo de Luhn
export function valid(digitString: string): boolean {
  // Eliminar espacios en blanco de la cadena de dígitos
  const preProcess = digitString.replace(/\s/g, "");
  
  // Verificar si la cadena preprocesada contiene solo números y tiene al menos dos caracteres
  if (justNumbersRegex.test(preProcess) === false || preProcess.length < 2) {
    return false;
  }

  // Calcular la suma de verificación según el algoritmo de Luhn
  const summation: number = Array.from(preProcess)
    .map(character => Number(character)) // Convertir cada carácter en un número
    .reverse() // Invertir el orden de los dígitos
    .map((item, index) => (index % 2) ? backwardOddIndexCase(item) : item) // Aplicar regla especial para índices impares en sentido inverso
    .reduce((sum, current) => sum + current, 0); // Sumar todos los dígitos

  // Verificar si la suma de verificación es divisible por 10
  return (summation % 10) === 0;
}

// Función para aplicar la regla especial para índices impares en sentido inverso
function backwardOddIndexCase(digit: number): number {
  let returnValue = digit + digit;
  // Ajustar el valor si excede 9
  if (returnValue > 9) {
    returnValue = returnValue - 9;
  }
  return returnValue;
}
