// Función que busca un valor en un arreglo ordenado usando el algoritmo de búsqueda binaria
export function find(haystack: number[], needle: number): number | never {
    let left = 0; // Índice del extremo izquierdo del arreglo
    let right = haystack.length - 1; // Índice del extremo derecho del arreglo

    // Realizar la búsqueda binaria mientras el extremo izquierdo no supere al extremo derecho
    while (left <= right) {
        const mid = Math.floor(left + (right - left) / 2); // Calcular el índice del elemento central

        // Si se encuentra el valor buscado en el elemento central, devolver su índice
        if (haystack[mid] === needle) {
            return mid;
        }

        // Si el valor buscado es mayor que el elemento central, ajustar el extremo izquierdo
        if (haystack[mid] < needle) {
            left = mid + 1;
        }

        // Si el valor buscado es menor que el elemento central, ajustar el extremo derecho
        if (haystack[mid] > needle) {
            right = mid - 1;
        }
    }

    // Si el valor no se encuentra en el arreglo, lanzar un error
    throw new Error('Value not in array');
}
