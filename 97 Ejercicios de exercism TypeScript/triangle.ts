// Clase Triangle para determinar el tipo de triángulo basado en sus lados
export class Triangle {
    readonly isEquilateral: boolean; // ¿Es equilátero?
    readonly isIsosceles: boolean; // ¿Es isósceles?
    readonly isScalene: boolean; // ¿Es escaleno?

    constructor(...sides: number[]) {
        // Ordenar los lados de menor a mayor
        const [a, b, c] = sides.sort();

        // Verificar si los lados forman un triángulo válido
        const isValid = a + b > c;

        // Obtener el número de lados únicos
        const uniqueSides = new Set(sides).size;

        // Determinar el tipo de triángulo
        this.isEquilateral = isValid && uniqueSides === 1; // Equilátero si los tres lados son iguales
        this.isIsosceles = isValid && uniqueSides <= 2; // Isósceles si al menos dos lados son iguales
        this.isScalene = isValid && uniqueSides === 3; // Escaleno si todos los lados son diferentes
    }
}
