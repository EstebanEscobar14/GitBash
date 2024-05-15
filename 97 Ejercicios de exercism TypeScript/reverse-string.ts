// Función para revertir una cadena
export function reverse(str: string): string {
    const result = str.split('').reverse().join(''); // Dividir la cadena en caracteres, revertir el orden y unirlos de nuevo
    return result; // Devolver la cadena revertida
}

console.log(reverse("stressed")); // Prueba de la función con la cadena "stressed"
console.log(reverse("strops")); // Prueba de la función con la cadena "strops"
console.log(reverse("racecar")); // Prueba de la función con la cadena "racecar"
