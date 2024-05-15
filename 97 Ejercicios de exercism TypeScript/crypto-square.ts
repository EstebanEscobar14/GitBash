export class Crypto {
    private plainText: string; // El texto sin formato
    private normalizedText: string; // El texto normalizado (sin espacios ni puntuación y en minúsculas)
    private rows: number; // Número de filas del rectángulo
    private cols: number; // Número de columnas del rectángulo
    private grid: string[][]; // Matriz para representar el rectángulo
  
    constructor(plainText: string) {
      this.plainText = plainText;
      this.normalizedText = this.normalizeText(plainText);
      [this.rows, this.cols] = this.calculateRowsAndCols(this.normalizedText.length);
      this.grid = this.fillGrid(this.normalizedText, this.rows, this.cols);
    }
  
    // Método para normalizar el texto (eliminar espacios y puntuación, convertir a minúsculas)
    private normalizeText(text: string): string {
      return text.replace(/[\W]/g, '').toLowerCase();
    }
  
    // Método para calcular el número de filas y columnas del rectángulo
    private calculateRowsAndCols(length: number): [number, number] {
      const cols = Math.ceil(Math.sqrt(length)); // El número de columnas es la raíz cuadrada redondeada hacia arriba de la longitud del texto
      let rows = Math.ceil(length / cols); // El número de filas es la longitud del texto dividida por el número de columnas, redondeado hacia arriba
      // Ajustar las filas si es necesario para cumplir con las condiciones de rectángulo más cuadrado posible
      while (rows * cols < length || cols < rows) {
        rows++;
      }
      return [rows, cols];
    }
  
    // Método para llenar la matriz con el texto normalizado
    private fillGrid(text: string, rows: number, cols: number): string[][] {
      const grid: string[][] = [];
      let index = 0; // Índice para recorrer el texto
      // Llenar la matriz con el texto normalizado
      for (let i = 0; i < rows; i++) {
        grid[i] = [];
        for (let j = 0; j < cols; j++) {
          // Si todavía hay caracteres en el texto, llenar la celda con el siguiente carácter
          if (index < text.length) {
            grid[i][j] = text[index++];
          } else {
            // Si no hay más caracteres en el texto, llenar la celda con un espacio
            grid[i][j] = ' ';
          }
        }
      }
      return grid;
    }
  
    // Método para obtener el texto cifrado
    get ciphertext(): string {
      let ciphertext = ''; // Inicializar el texto cifrado
      // Recorrer la matriz de izquierda a derecha y obtener el texto cifrado
      for (let j = 0; j < this.cols; j++) {
        for (let i = 0; i < this.rows; i++) {
          ciphertext += this.grid[i][j]; // Agregar el carácter de la celda a la cadena de texto cifrado
        }
        // Agregar un espacio después de cada fragmento de longitud r (filas)
        if (j < this.cols - 1) {
          ciphertext += ' ';
        }
      }
      return ciphertext;
    }
  }
  