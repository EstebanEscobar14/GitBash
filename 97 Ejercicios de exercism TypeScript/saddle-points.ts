export function saddlePoints(grid: number[][]): { row: number, column: number }[] {
    const saddlePoints: { row: number, column: number }[] = [];

    // Iterar sobre cada fila
    for (let i = 0; i < grid.length; i++) {
        const row = grid[i];
        const maxInRow = Math.max(...row); // Encontrar el valor máximo en la fila

        // Iterar sobre cada columna
        for (let j = 0; j < row.length; j++) {
            const columnValues = grid.map((row) => row[j]); // Obtener los valores de la columna actual
            const minInColumn = Math.min(...columnValues); // Encontrar el valor mínimo en la columna

            // Verificar si el punto es máximo en su fila y mínimo en su columna
            if (grid[i][j] === maxInRow && grid[i][j] === minInColumn) {
                saddlePoints.push({ row: i + 1, column: j + 1 }); // Agregar el punto a la lista de puntos de silla
            }
        }
    }

    return saddlePoints;
}
