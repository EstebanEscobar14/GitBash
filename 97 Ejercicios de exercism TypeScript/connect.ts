export class Board {
    // Tablero original proporcionado como una matriz de cadenas
    private originalBoard: string[] = [];
    // Tablero de juego modificado como una matriz de matrices de cadenas
    private board: string[][] = [];
  
    // Constructor de la clase Board
    constructor(board: string[]) {
      // Almacena el tablero original proporcionado
      this.originalBoard = board;
    }
  
    // Función para determinar al ganador del juego
    public winner(): string {
      // Prepara el tablero para el jugador 'O'
      this.prepareBoard();
  
      // Verifica si 'O' es el ganador
      if (this.isWinner('O')) {
        return 'O'; // Devuelve 'O' si es el ganador
      }
  
      // Prepara el tablero para el jugador 'X' (transpone el tablero)
      this.prepareBoard();
      this.transposeBoard();
  
      // Verifica si 'X' es el ganador
      if (this.isWinner('X')) {
        return 'X'; // Devuelve 'X' si es el ganador
      }
  
      // Si no hay un ganador, devuelve una cadena vacía
      return '';
    }
  
    // Función para preparar el tablero eliminando caracteres no válidos y convirtiéndolo en una matriz bidimensional
    private prepareBoard() {
      // Filtra los caracteres válidos ('O', 'X', '.') y convierte cada línea en una matriz de caracteres
      this.board = this.originalBoard.map(line => line.replace(/[^OX\.]/g, '').split(''));
    }
  
    // Función para verificar si un jugador es el ganador
    private isWinner(player: string): boolean {
      // Marca todas las celdas en el borde superior del tablero pertenecientes al jugador con '1'
      this.board[0].forEach((_, col) => this.replaceWinner(player, 0, col));
  
      // Verifica si alguna celda en el borde inferior del tablero contiene '1'
      return this.board[this.board.length - 1].includes('1');
    }
  
    // Función para marcar todas las celdas conectadas al jugador como '1'
    private replaceWinner(player: string, row: number, col: number) {
      // Verifica los límites del tablero
      if (row < 0 || col < 0 || row >= this.board.length || col >= this.board.length) {
        return;
      }
  
      // Si la celda actual pertenece al jugador, la marca como '1' y verifica las celdas adyacentes
      if (this.board[row][col] == player) {
        this.board[row][col] = '1'; // Marca la celda actual como '1'
  
        // Verifica las celdas adyacentes en todas las direcciones
        this.replaceWinner(player, row - 1, col);
        this.replaceWinner(player, row - 1, col + 1);
        this.replaceWinner(player, row, col - 1);
        this.replaceWinner(player, row, col + 1);
        this.replaceWinner(player, row + 1, col);
        this.replaceWinner(player, row + 1, col - 1);
      }
    }
  
    // Función para transponer el tablero
    private transposeBoard() {
      // Transpone el tablero intercambiando filas por columnas
      this.board = this.board[0].map((_, colIndex) => this.board.map(row => row[colIndex]));
    }
  }
  