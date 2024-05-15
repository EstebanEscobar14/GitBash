// Función para verificar si un número es un número de Armstrong
export const isArmstrongNumber = (num: any): boolean => {
    // Convierte el número a una cadena
    const numStr = num.toString();
    // Calcula la longitud de la cadena como un BigInt
    const len = BigInt(numStr.length);
    
    // Calcula la suma de los dígitos elevados a la longitud de la cadena
    const sum = [...numStr]
        .map(digit => BigInt(digit) ** len) // Eleva cada dígito a la potencia de la longitud y convierte a BigInt
        .reduce((total, n) => total + n, 0n); // Suma todos los resultados como BigInt

    // Verifica si la suma es igual al número original (convertido a BigInt)
    return sum === BigInt(num);
}
