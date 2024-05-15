// Función para convertir un número en una cadena según ciertas reglas
export function convert(number: number): string {
    // Comprobar si el número es divisible por 3, 5 y 7
    if (number % 3 == 0 && number % 5 == 0 && number % 7 == 0) {
        return "PlingPlangPlong";
    }
    // Comprobar si el número es divisible por 3 y 5
    if (number % 3 == 0 && number % 5 == 0) {
        return "PlingPlang";
    }
    // Comprobar si el número es divisible por 3 y 7
    if (number % 3 == 0 && number % 7 == 0) {
        return "PlingPlong";
    }
    // Comprobar si el número es divisible por 5 y 7
    if (number % 5 == 0 && number % 7 == 0) {
        return "PlangPlong";
    }
    // Comprobar si el número es divisible solo por 3
    if (number % 3 == 0) {
        return "Pling";
    }
    // Comprobar si el número es divisible solo por 5
    if (number % 5 == 0) {
        return "Plang";
    }
    // Comprobar si el número es divisible solo por 7
    if (number % 7 == 0) {
        return "Plong";
    }
    // Devolver el número como una cadena si no cumple ninguna de las condiciones anteriores
    return number.toString();
}

// Pruebas de la función con diferentes números
console.log(convert(28)); // Se espera "Plong"
console.log(convert(30)); // Se espera "PlingPlang"
console.log(convert(34)); // Se espera "34"
