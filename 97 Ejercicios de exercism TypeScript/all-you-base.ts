/**
 * Convierte una secuencia de dígitos en una base, que representa un número,
 * en una secuencia de dígitos en otra base, que representa el mismo número.
 * @param digits Los dígitos a convertir, representados como un array de números.
 * @param inputBase La base de los dígitos de entrada.
 * @param outputBase La base a la que se convertirán los dígitos.
 * @returns Un array que representa los dígitos en la nueva base.
 */
export function convert(
    digits: number[],
    inputBase: number,
    outputBase: number
  ): number[] {
    // Validar la base de entrada
    if(inputBase < 2 || Math.floor(inputBase) !== inputBase) throw new Error('Wrong input base');
    
    // Validar la base de salida
    if(outputBase < 2 || Math.floor(outputBase) !== outputBase) throw new Error('Wrong output base');
    
    // Validar el formato de los dígitos de entrada
    if(digits.length < 1) throw new Error("Input has wrong format");
    if(digits.length > 1 && digits[0] === 0) throw new Error("Input has wrong format");
  
    let inputInDecimal = 0;
    const len = digits.length;
  
    // Convertir los dígitos de la base de entrada a decimal
    for(let i = 0; i < len; i++) {
      if(digits[i] < 0) throw new Error("Input has wrong format");
      if(digits[i] >= inputBase) throw new Error("Input has wrong format");
      inputInDecimal += digits[i] * Math.pow(inputBase, len - i - 1);
    }
  
    // Si el valor en decimal es cero, devolver un array con un solo elemento, que es 0 en la base de salida
    if(inputInDecimal === 0) return [0];
    
    let result = [];  
  
    // Convertir el valor en decimal a la base de salida
    while(inputInDecimal > 0) {
      result.push(inputInDecimal % outputBase);
      inputInDecimal = Math.floor(inputInDecimal / outputBase);
    }
    
    // Devolver el resultado en orden inverso, ya que se agregan los dígitos en orden inverso
    return result.reverse();
  }
  