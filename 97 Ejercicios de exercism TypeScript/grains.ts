// Función para calcular la cantidad de granos en un cuadrado específico del tablero de ajedrez
export const square = (squareNumber: number): bigint => {
    // Verificar si el número de cuadrado está dentro del rango válido
    if (squareNumber < 1 || squareNumber > 64) {
        throw new Error('square must be between 1 and 64');
    }
    // Calcular la cantidad de granos en el cuadrado utilizando BigInt para evitar desbordamientos
    return BigInt(Math.pow(2, squareNumber - 1));
};

// Función para calcular el total de granos en todo el tablero de ajedrez
export const total = (): bigint => {
    let totalGrains: bigint = BigInt(0);
    // Iterar sobre todos los cuadrados y sumar la cantidad de granos en cada uno
    for (let i = 1; i <= 64; i++) {
        totalGrains += square(i);
    }
    return totalGrains;
}
