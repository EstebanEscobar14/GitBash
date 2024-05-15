// Clase para manejar las alergias de una persona
export class Allergies {
    // Objeto que mapea cada alérgeno a su valor binario correspondiente
    private static readonly allergen: Record<string, number> = {
        'eggs': 1,
        'peanuts': 2,
        'shellfish': 4,
        'strawberries': 8,
        'tomatoes': 16,
        'chocolate': 32,
        'pollen': 64,
        'cats': 128
    };
    
    private allergyScore: number; // Puntuación total de las alergias

    constructor(allergyScore: number) {
        this.allergyScore = allergyScore; // Inicializar la puntuación total de alergias
    }

    // Método para obtener una lista de alérgenos activos
    public list(): string[] {
        const allergies: string[] = [];
        // Iterar sobre cada alérgeno en el objeto de alérgenos
        for (const [allergen, value] of Object.entries(Allergies.allergen)) {
            // Verificar si la puntuación total de alergias tiene activado este alérgeno
            if ((this.allergyScore & value) === value) {
                allergies.push(allergen); // Agregar el alérgeno a la lista de alérgenos activos
            }
        }
        return allergies; // Devolver la lista de alérgenos activos
    }

    // Método para verificar si la persona es alérgica a un alérgeno específico
    public allergicTo(allergen: string): boolean {
        const value = Allergies.allergen[allergen]; // Obtener el valor binario del alérgeno
        if (value === undefined) {
            throw new Error('allergen not found'); // Lanzar un error si el alérgeno no se encuentra en el objeto
        }
        // Verificar si la puntuación total de alergias tiene activado este alérgeno
        return (this.allergyScore & value) === value;
    }
}
