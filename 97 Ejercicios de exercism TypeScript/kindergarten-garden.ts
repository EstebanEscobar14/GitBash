// Definición de la lista predeterminada de estudiantes
const DEFAULT_STUDENTS: Student[] = [
    'Alice', 'Bob', 'Charlie', 'David',
    'Eve', 'Fred', 'Ginny', 'Harriet',
    'Ileana', 'Joseph', 'Kincaid', 'Larry',
  ];
  
  // Definición de los códigos de las plantas y sus correspondientes tipos
  const PLANT_CODES = {
    G: 'grass',
    V: 'violets',
    R: 'radishes',
    C: 'clover',
  } as const;
  
  // Definición de los tipos de datos utilizados en el código
  type Student = string; // Tipo para los nombres de los estudiantes
  type PlantCode = keyof typeof PLANT_CODES; // Tipo para los códigos de las plantas
  type Plant = typeof PLANT_CODES[PlantCode]; // Tipo para las plantas
  type Plants = Plant[]; // Tipo para una lista de plantas
  type Pots = Plants[]; // Tipo para una lista de listas de plantas (representando las tazas)
  
  // Clase Garden que representa el jardín
  export class Garden {
    private lines: string[]; // Array de líneas que representan las plantas en las tazas
    private studentsInOrder: string[]; // Array ordenado de los nombres de los estudiantes
  
    // Constructor de la clase Garden
    constructor(diagram: string, students = DEFAULT_STUDENTS) {
      // Dividir el diagrama en líneas y asignarlas a la propiedad "lines"
      this.lines = diagram.split('\n');
      // Ordenar los nombres de los estudiantes alfabéticamente y asignarlos a la propiedad "studentsInOrder"
      this.studentsInOrder = students.sort();
    }
    
    // Método para obtener las plantas de un estudiante dado
    public plants(student: Student): Plants {
      // Encontrar el índice del estudiante en el array ordenado de nombres de estudiantes
      const idx = this.studentsInOrder.indexOf(student);
      // Obtener las plantas del estudiante desde las líneas correspondientes en el diagrama
      return [...this.lines[0].slice(idx*2, (idx+1)*2),
              ...this.lines[1].slice(idx*2, (idx+1)*2)]
            // Mapear los códigos de las plantas a sus nombres correspondientes
            .map((letter) => PLANT_CODES[letter as PlantCode]);
    }
  }
  