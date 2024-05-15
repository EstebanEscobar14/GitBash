type Field = string[]; // Definición de un tipo para el campo de minas, que es un array de strings
type Board = string[][]; // Definición de un tipo para el tablero, que es un array bidimensional de strings

// Función principal para anotar el campo de minas
export function annotate(field: Field): Field {
    // Copiar el campo para trabajar con una copia y no modificar el original
    const board = field.map(line => [...line]);

    // Llamar a la función para contar minas
    countMines(board);

    // Unir cada línea del tablero y devolver el campo anotado
    return board.map(line => line.join(''));
}

// Función para contar las minas adyacentes a cada celda del tablero
function countMines(board: Board): void {
    // Iterar sobre cada celda del tablero
    for (let y = 0; y < board.length; y++) {
        for (let x = 0; x < board[y].length; x++) {
            // Si la celda está vacía, contar las minas adyacentes y asignar el resultado a la celda
            if (board[y][x] === ' ') {
                board[y][x] = countAdjacentMine(board, x, y);
            }
        }
    }
}

// Función para contar las minas adyacentes a una celda específica
function countAdjacentMine(board: Board, x: number, y: number): string {
    // Definición de las coordenadas relativas de las celdas adyacentes
    const ADJACENTS = [[0, 1], [1, 1], [1, 0], [1, -1], [0, -1], [-1, -1], [-1, 0], [-1, 1]];

    // Contar las minas adyacentes a la celda especificada
    const count = ADJACENTS.map(([ax, ay]) => [x + ax, y + ay])
        .map(([ax, ay]): number => board[ay] && board[ay][ax] && board[ay][ax] === '*' ? 1 : 0)
        .reduce((sum, mine) => sum + mine, 0);

    // Devolver un espacio si no hay minas adyacentes, de lo contrario, devolver el número de minas
    return count === 0 ? ' ' : String(count);
}
