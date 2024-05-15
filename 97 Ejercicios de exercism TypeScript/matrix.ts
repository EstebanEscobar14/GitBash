// Definición de la clase Matrix
export class Matrix {
    input: string; // Cadena de entrada

    // Constructor que recibe una cadena de entrada y la asigna al atributo input
    constructor(input: string) {
        this.input = input;
    }

    // Método getter para obtener las filas de la matriz
    get rows(): number[][] {
        // Dividir la cadena de entrada en líneas y luego dividir cada línea en elementos numéricos
        return this.input.split('\n').map(row => row.split(" ")).map(row => row.map(element => +element));
    }

    // Método getter para obtener las columnas de la matriz
    get columns(): number[][] {
        let matrix = this.rows; // Obtener las filas de la matriz
        let cols: number[][] = []; // Inicializar un array para almacenar las columnas

        // Iterar sobre las columnas de la matriz
        for (let i: number = 0; i < matrix[0].length; i++) {
            cols[i] = matrix.map(row => row[i]); // Obtener cada columna y almacenarla en el array de columnas
        }

        return cols; // Devolver el array de columnas
    }
}
