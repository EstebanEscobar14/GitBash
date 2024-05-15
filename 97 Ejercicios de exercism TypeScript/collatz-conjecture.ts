// Función para calcular el número de pasos necesarios para llegar a 1 siguiendo la conjetura de Collatz
export function steps(count: number): number {
    // Verificar si el número es negativo o no entero
    if (count <= 0 || count !== Math.floor(count)) throw new Error("Only positive integers are allowed");

    let stepsCount = 0; // Inicializar el contador de pasos

    // Aplicar la conjetura de Collatz hasta que el número llegue a 1
    while (count !== 1) {
        if (count % 2 === 0) { // Si el número es par
            count /= 2; // Dividir por 2
        } else { // Si el número es impar
            count = count * 3 + 1; // Multiplicar por 3 y sumar 1
        }
        stepsCount++; // Incrementar el contador de pasos en cada iteración
    }

    return stepsCount; // Devolver el número de pasos realizados
}
