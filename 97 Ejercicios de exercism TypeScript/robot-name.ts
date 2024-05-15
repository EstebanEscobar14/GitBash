// Definición de la clase Robot
export class Robot {
    robotName: string; // Nombre del robot
    roborsList: string[] = []; // Lista de nombres de robots utilizados

    // Constructor que inicializa la lista de nombres de robots y asigna un nombre al robot
    constructor() {
        this.roborsList = [];
        this.robotName = Robot.releaseNames(); // Generar un nombre de robot nuevo
        this.roborsList.push(this.robotName); // Agregar el nombre del robot a la lista de nombres utilizados
    }

    // Método getter para obtener el nombre del robot
    public get name(): string {
        return this.robotName;
    }

    // Método para restablecer el nombre del robot
    public resetName(): void {
        // Generar un nuevo nombre de robot hasta que no esté en la lista de nombres utilizados
        do {
            this.robotName = Robot.releaseNames();
        } while (this.roborsList.includes(this.robotName));
        
        // Agregar el nuevo nombre del robot a la lista de nombres utilizados
        this.roborsList.push(this.robotName);
    }

    // Método estático que genera un nombre de robot aleatorio
    public static releaseNames(): string {
        const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'; // Letras posibles para el nombre del robot
        const numbers = '0123456789'; // Números posibles para el nombre del robot
        let result = '';

        // Generar dos letras aleatorias para el nombre del robot
        for(let i = 0; i < 2; i++) {
            result += letters.charAt(Math.floor(Math.random() * letters.length));
        }

        // Generar tres números aleatorios para el nombre del robot
        for(let i = 0; i < 3; i++) {
            result += numbers.charAt(Math.floor(Math.random() * numbers.length));
        }

        return result; // Devolver el nombre del robot generado
    }
}
