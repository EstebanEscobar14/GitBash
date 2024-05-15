export const eggCount = (displayValue: number) => {
    // Verifica si el valor proporcionado es un número
    if (typeof displayValue !== 'number') {
      throw new Error('Input must be a number');
    }
  
    // Convierte el número a su representación binaria como una cadena
    const binaryString = displayValue.toString(2);
  
    // Inicializa una variable para contar el número de unos
    let count = 0;
  
    // Itera sobre cada bit en la cadena binaria
    for (let i = 0; i < binaryString.length; i++) {
      // Si el bit es un uno, incrementa el contador
      if (binaryString[i] === '1') {
        count++;
      }
    }
  
    // Devuelve el número de unos encontrados
    return count;
  };
  