// Define una clase personalizada para manejar errores de entrada inválida
export class InvalidInputError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'Invalid Input'; // Establece el nombre del error
    }
}

// Define un tipo para representar las direcciones
type Direction = 'north' | 'east' | 'south' | 'west';
// Define un tipo para representar las coordenadas como una tupla de dos números
type Coordinates = [number, number];

// Define la clase Robot
export class Robot {
    // Atributos privados para el rumbo y las coordenadas del robot
    private _bearing: Direction = 'north'; // Rumbo inicial: norte
    private _coordinates: Coordinates = [0, 0]; // Coordenadas iniciales: (0, 0)

    // Getter para obtener el rumbo actual del robot
    get bearing(): Direction {
        return this._bearing;
    }

    // Getter para obtener las coordenadas actuales del robot
    get coordinates(): Coordinates {
        return this._coordinates;
    }

    // Método para colocar el robot en una posición y dirección específicas
    place({x, y, direction}: {x: number, y: number, direction: string}) {
        // Lista de direcciones válidas
        const validDirections: Direction[] = ['north', 'east', 'south', 'west'];
        // Verifica si la dirección proporcionada es válida
        if (!validDirections.includes(direction as Direction)) {
            throw new InvalidInputError('Invalid direction'); // Lanza un error si la dirección es inválida
        }

        // Establece las coordenadas y el rumbo del robot
        this._coordinates = [x, y];
        this._bearing = direction as Direction;
    }

    // Método para evaluar una serie de instrucciones y ejecutarlas
    evaluate(instructions: string) {
        // Itera sobre cada instrucción en la cadena de instrucciones
        for(const instruction of instructions) {
            // Ejecuta la acción correspondiente según la instrucción
            switch(instruction) {
                case 'R':
                    this.turnRight();
                    break;
                case 'L':
                    this.turnLeft();
                    break;
                case 'A':
                    this.advance();
                    break;
                default:
                    throw new InvalidInputError('Invalid instruction'); // Lanza un error si la instrucción es inválida
            }
        }
    }

    // Método para girar el robot hacia la derecha
    turnRight() {
        // Cambia el rumbo del robot según la dirección actual
        switch(this._bearing) {
            case 'north':
                this._bearing = 'east';
                break;
            case 'east':
                this._bearing = 'south';
                break;
            case 'south':
                this._bearing = 'west';
                break;
            case 'west':
                this._bearing = 'north';
                break;
        }
    }

    // Método para girar el robot hacia la izquierda
    turnLeft() {
        // Cambia el rumbo del robot según la dirección actual
        switch(this._bearing) {
            case 'north':
                this._bearing = 'west';
                break;
            case 'west':
                this._bearing = 'south';
                break;
            case 'south':
                this._bearing = 'east';
                break;
            case 'east':
                this._bearing = 'north';
                break;
        }
    }

    // Método privado para mover el robot hacia adelante en la dirección actual
    private advance() {
        // Mueve las coordenadas del robot según la dirección actual
        switch(this._bearing) {
            case 'north':
                this._coordinates[1]++; // Incrementa la coordenada y para ir hacia el norte
                break;
            case 'east':
                this._coordinates[0]++; // Incrementa la coordenada x para ir hacia el este
                break;
            case 'south':
                this._coordinates[1]--; // Decrementa la coordenada y para ir hacia el sur
                break;
            case 'west':
                this._coordinates[0]--; // Decrementa la coordenada x para ir hacia el oeste
                break;
        }
    }
}
