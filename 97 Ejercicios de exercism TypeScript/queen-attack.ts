// Definición del tipo para representar la posición de una reina en el tablero de ajedrez
type Position = readonly [number, number];

// Definición del tipo para representar las posiciones de las reinas blanca y negra en el tablero
type Positions = {
  white: Position; // Posición de la reina blanca
  black: Position; // Posición de la reina negra
};

// Clase QueenAttack que modela el estado de dos reinas en el tablero de ajedrez
export class QueenAttack {
  public readonly black: Position; // Posición de la reina negra
  public readonly white: Position; // Posición de la reina blanca

  // Constructor de la clase QueenAttack
  constructor(pos: Partial<Positions> = {}) {
    // Inicialización de las posiciones de las reinas, con posiciones predeterminadas si no se proporcionan
    this.white = 'white' in pos ? pos.white! : [7, 3]; // Posición de la reina blanca
    this.black = 'black' in pos ? pos.black! : [0, 3]; // Posición de la reina negra

    // Función para verificar si la posición de una reina está dentro del tablero de ajedrez (8x8)
    const check = (pos: Position):void|never => {
      if (pos[0] < 0 || pos[0] > 7 || pos[1] < 0 || pos[1] > 7) throw new Error('Queen must be placed on the board');
    };

    // Verificar que las posiciones de las reinas estén dentro del tablero
    check(this.white); // Verificar posición de la reina blanca
    check(this.black); // Verificar posición de la reina negra

    // Verificar que las reinas no compartan la misma posición
    if (this.white[0] === this.black[0] && this.white[1] === this.black[1]) throw new Error('Queens cannot share the same space');
  }

  // Método para representar visualmente el tablero con las posiciones de las reinas
  toString():string {
    const board = new Array(8).fill(0).map(() => new Array(8).fill('_')); // Inicialización de una matriz para representar el tablero

    board[this.white[0]][this.white[1]] = 'W'; // Colocar la reina blanca en el tablero
    board[this.black[0]][this.black[1]] = 'B'; // Colocar la reina negra en el tablero

    return board.map(r => r.join(' ')).join('\n'); // Convertir la matriz en una cadena de texto con formato de tablero de ajedrez
  }

  // Método para verificar si las reinas pueden atacarse mutuamente
  get canAttack() {
    // Verificar si las reinas están en la misma fila, columna o diagonal
    return this.black[0] === this.white[0] || this.black[1] === this.white[1] || Math.abs((this.black[0] - this.white[0]) / (this.black[1] - this.white[1])) === 1;
  }
}
