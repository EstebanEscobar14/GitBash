export function isLeap(year: number): boolean {
    // Verificar si el año es divisible por 4
    const isDivisibleBy4 = year % 4 === 0;

    // Verificar si el año es divisible por 100
    const isDivisibleBy100 = year % 100 === 0;

    // Verificar si el año es divisible por 400
    const isDivisibleBy400 = year % 400 === 0;

    // Si el año es divisible por 400, es un año bisiesto
    if (isDivisibleBy400) {
        return true;
    } else if (isDivisibleBy100) {
        // Si el año es divisible por 100, pero no por 400, es un año bisiesto
        return false;
    } else if (isDivisibleBy4) {
        // Si el año es divisible por 4, pero no por 100, es un año bisiesto
        return true;
    }

    // Si el año no es divisible por 4, no es un año bisiesto
    return false;
}