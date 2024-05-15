export function classify(num: number): string {
    if (num <= 0) {
        throw new Error("Classification is only possible for natural numbers.");
    }

    // Obtener la suma de los divisores propios del número
    const aliquotSum = getAliquotSum(num);

    // Clasificar el número en función de su suma de divisores
    if (aliquotSum === num) {
        return "perfect"; // El número es perfecto si la suma de sus divisores es igual a él mismo
    } else if (aliquotSum > num) {
        return "abundant"; // El número es abundante si la suma de sus divisores es mayor que él mismo
    } else {
        return "deficient"; // El número es deficiente si la suma de sus divisores es menor que él mismo
    }
}

function getAliquotSum(num: number): number {
    let aliquotSum = 0;

    // Iterar sobre todos los números menores que el número dado
    for (let i = 1; i < num; i++) {
        if (num % i === 0) { // Verificar si i es un divisor de num
            aliquotSum += i; // Sumar i a la suma de divisores propios
        }
    }

    return aliquotSum; // Devolver la suma de divisores propios
}

console.log(classify(12)); // Ejemplo de uso de la función para clasificar el número 12
