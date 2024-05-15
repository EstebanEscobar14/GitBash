type Item = {
    weight: number;
    value: number;
  };
  
  export function maximumValue({
    maximumWeight,
    items,
  }: {
    maximumWeight: number;
    items: Item[];
  }): number {
    const n = items.length;
    // Creamos una matriz para almacenar los valores máximos que se pueden obtener con diferentes capacidades de mochila y diferentes números de elementos
    const dp: number[][] = new Array(n + 1).fill(0).map(() => new Array(maximumWeight + 1).fill(0));
  
    // Llenamos la matriz dp utilizando programación dinámica
    for (let i = 1; i <= n; i++) {
      const { weight, value } = items[i - 1];
      for (let w = 1; w <= maximumWeight; w++) {
        // Si el peso del elemento actual es menor o igual que la capacidad de la mochila
        if (weight <= w) {
          // Comparamos el valor máximo que se puede obtener considerando el elemento actual con el valor máximo que se puede obtener sin considerar el elemento actual
          dp[i][w] = Math.max(value + dp[i - 1][w - weight], dp[i - 1][w]);
        } else {
          // Si el peso del elemento actual es mayor que la capacidad de la mochila, simplemente copiamos el valor máximo que se puede obtener sin considerar el elemento actual
          dp[i][w] = dp[i - 1][w];
        }
      }
    }
  
    // El resultado final se encuentra en dp[n][maximumWeight]
    return dp[n][maximumWeight];
  }
  