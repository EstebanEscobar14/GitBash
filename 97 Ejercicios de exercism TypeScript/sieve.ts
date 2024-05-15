export function primes(n: number): number[] {
    // Inicializa un array de booleanos para marcar los números primos
    const isPrime: boolean[] = Array(n + 1).fill(true);
    // Inicializa un array para almacenar los números primos encontrados
    const primesList: number[] = [];

    // Itera sobre los números de 2 hasta la raíz cuadrada de n
    for (let i = 2; i * i <= n; i++) {
        // Si i es primo
        if (isPrime[i]) {
            // Marca todos los múltiplos de i como no primos
            for (let j = i * i; j <= n; j += i) {
                isPrime[j] = false;
            }
        }
    }

    // Itera sobre todos los números de 2 a n
    for (let i = 2; i <= n; i++) {
        // Si i es primo, agrégalo a la lista de primos
        if (isPrime[i]) {
            primesList.push(i);
        }
    }

    return primesList; // Devuelve la lista de números primos encontrados
}
