export class Triangle {
    readonly rows: number[][];

    constructor(numRows: number) {
        this.rows = this.generateTriangle(numRows);
    }

    private generateTriangle(numRows: number): number[][] {
        const triangle: number[][] = [];

        // Iterar sobre cada fila del triángulo
        for (let i = 0; i < numRows; i++) {
            const row: number[] = [];

            // Llenar la fila con los valores correspondientes
            for (let j = 0; j <= i; j++) {
                // Si estamos en el borde izquierdo o derecho, el valor es siempre 1
                if (j === 0 || j === i) {
                    row.push(1);
                } else {
                    // De lo contrario, el valor es la suma de los valores en la fila anterior
                    row.push(triangle[i - 1][j - 1] + triangle[i - 1][j]);
                }
            }

            // Agregar la fila completa al triángulo
            triangle.push(row);
        }

        return triangle;
    }

    get lastRow(): number[] {
        // Devolver la última fila del triángulo
        return this.rows[this.rows.length - 1] || [];
    }
}
