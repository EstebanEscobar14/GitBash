export function ofSize(n: number): number[][]{
    //Inicializamos la matriz cuadrada de tamaño n con todos sus elemntos inicializados a 0
    const matrix: number[][] = Array.from({length: n}, () => Array.from({length: n}, () => 0));

    let num = 1;
    // Limites de la matriz
    let top = 0, bottom = n - 1, left = 0, right = n - 1;

    while(left <= right && top <= bottom){
        //Llenar la fila superior de izquierda a derecha
        for(let i = left; i <= right; i++){
            matrix[top][i] = num++;
        }
        top++;

        //Llenar la columna derecha de arriba hacia abajo
        for(let i = top; i <= bottom; i++){
            matrix[i][right] = num++;
        }
        right--;

        //Llenar la fila inferior de derecha a izquierda
        for(let i = right; i >= left; i--){
            matrix[bottom][i] = num++;
        }
        bottom--;

        //Llenar la columna izquierda de abajo hacia arriba
        for(let i = bottom; i >= top; i--){
            matrix[i][left] = num++;
        }
        left++;
    }

    return matrix;
}