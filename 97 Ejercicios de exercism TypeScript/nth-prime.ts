export function nth(n: number): number {
    // Verifica si el número es válido (mayor que cero)
    if (n <= 0) {
        throw new Error("Prime is not possible");
    }

    // Inicializa el contador y el número actual, comenzamos desde el primer número primo
    let count = 0;
    let num = 2; // comenzamos desde el primer número primo

    // Bucle infinito para buscar el enésimo número primo
    while (true) {
        // Si el número actual es primo
        if (isPrime(num)) {
            count++; // Incrementa el contador
            // Si el contador alcanza el valor de n, se devuelve el número actual
            if (count === n) {
                return num;
            }
        }
        num++; // Pasar al siguiente número para verificar si es primo
    }
}

function isPrime(num: number): boolean {
    // Los números menores o iguales a 1 no son primos
    if (num <= 1) {
        return false;
    }
    // Los números 2 y 3 son primos
    if (num <= 3) {
        return true;
    }
    // Los números divisibles por 2 o 3 no son primos
    if (num % 2 === 0 || num % 3 === 0) {
        return false;
    }
    // Comprueba primos potenciales que no son divisibles por 2 o 3
    let i = 5;
    while (i * i <= num) {
        if (num % i === 0 || num % (i + 2) === 0) {
            return false;
        }
        i += 6;
    }
    // Si no se encuentra ningún divisor, entonces el número es primo
    return true;
}
