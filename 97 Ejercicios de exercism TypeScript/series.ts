export class Series {
    private series: number[];
  
    constructor(series: string) {
      // Convertir la serie de dígitos en un array de números
      this.series = series.split('').map(Number);
    }
  
    slices(sliceLength: number): number[][] {
  
          if (this.series.length === 0) {
              throw new Error('series cannot be empty')
            } else if (sliceLength < 0) {
              throw new Error('slice length cannot be negative')
            } else if (sliceLength === 0) {
              throw new Error('slice length cannot be zero')
            } else if (sliceLength > this.series.length) {
              throw new Error('slice length cannot be greater than series length')
            }
  
      const result: number[][] = [];
  
      // Iterar sobre la serie y extraer las subcadenas de longitud 
      for (let i = 0; i <= this.series.length - sliceLength; i++) {
        const slice: number[] = [];
        for (let j = 0; j < sliceLength; j++) {
          slice.push(this.series[i + j]);
        }
        result.push(slice);
      }
  
      return result;
    }
  }
  
  // Ejemplo de uso
  const series = new Series('1');
  console.log(series.slices(1)); // Output: [[1]]
  