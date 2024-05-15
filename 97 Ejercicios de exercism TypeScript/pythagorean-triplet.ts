// Definición de la interfaz para las opciones de búsqueda de tripletes
type Options = {
    minFactor?: number; // El factor mínimo para los tripletes
    maxFactor?: number; // El factor máximo para los tripletes
    sum: number; // La suma requerida de los tripletes
}

// Clase Triplet para representar un conjunto de tres números
class Triplet {
    constructor(public a: number, public b: number, public c: number) { }

    // Método para convertir el triplete en un array
    toArray(): [number, number, number] {
        return [this.a, this.b, this.c];
    }
}

// Función para encontrar todos los tripletes pitagóricos que suman un valor dado
export function triplets({minFactor, maxFactor, sum}: Options): Triplet[] {
    const triplets: Triplet[] = [];
    // Establecer valores predeterminados si no se proporcionan
    minFactor = minFactor || 1;
    maxFactor = maxFactor || sum - 1;

    // Bucle para generar todos los posibles tripletes
    for (let a = minFactor; a < maxFactor; a++) {
        for (let b = a; b < maxFactor; b++) {
            const c = sum - a - b;
            // Verificar si c es un factor válido y si el triplete es pitagórico
            if (c < b || c < a || c > maxFactor) continue;
            if (a * a + b * b !== c * c) continue;

            // Agregar el triplete a la lista
            triplets.push(new Triplet(a, b, c));
        }
    }

    return triplets;
}
