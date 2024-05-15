// Definición de la interfaz Grades que mapea números de grado a una lista de estudiantes
interface Grades {
    [grade: number]: string[];
}

// Definición de la clase GradeSchool
export class GradeSchool {
    private grades: Grades; // Variable privada que almacena las calificaciones

    // Constructor de la clase que inicializa las calificaciones como un objeto vacío
    constructor() {
        this.grades = {};
    }

    // Método para obtener una copia de las calificaciones
    roster(): Grades {
        // Hacer una copia profunda de las calificaciones para proteger los datos originales
        const protectedGrades = JSON.parse(JSON.stringify(this.grades));
        return protectedGrades;
    }

    // Método para añadir un estudiante a una clase
    add(student: string, grade: number) {
        // Obtener todas las calificaciones existentes
        const keys = Object.keys(this.grades);
        const allGrades = keys.map(key => parseInt(key));

        // Eliminar al estudiante de todas las calificaciones existentes
        allGrades.forEach(existingGrade => {
            const index = this.grades[existingGrade].indexOf(student);
            if(index !== -1) {
                this.grades[existingGrade].splice(index, 1);
            }
        });

        // Añadir el estudiante a la nueva calificación
        if (!this.grades[grade]) {
            this.grades[grade] = [student];
        } else {
            this.grades[grade].push(student);
        }

        // Ordenar los estudiantes en la calificación
        this.grades[grade].sort();
    }

    // Método para obtener los estudiantes en una calificación específica
    grade(grade: number) {
        if (!this.grades[grade]) {
            return []; // Si la calificación no existe, devolver una lista vacía
        } else {
            return [...this.grades[grade]]; // Devolver una copia de los estudiantes en la calificación
        }
    }
}
