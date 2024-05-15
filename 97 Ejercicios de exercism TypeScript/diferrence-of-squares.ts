// Clase Squares para realizar cálculos relacionados con sumas de cuadrados y cuadrados de sumas
export class Squares {
    private count: number; // Número hasta el cual se realizarán los cálculos
  
    constructor(count: number) {
      this.count = count; // Inicializar el contador con el valor proporcionado
    }
  
    // Método para calcular la suma de los cuadrados de los primeros n números naturales
    get sumOfSquares(): number {
      return (this.count * (this.count + 1) * (2 * this.count + 1)) / 6; // Fórmula matemática para la suma de los cuadrados
    }
  
    // Método para calcular el cuadrado de la suma de los primeros n números naturales
    get squareOfSum(): number {
      const sum = (this.count * (this.count + 1)) / 2; // Suma de los primeros n números naturales
      return sum * sum; // Cuadrado de la suma
    }
  
    // Método para calcular la diferencia entre el cuadrado de la suma y la suma de los cuadrados
    get difference(): number {
      return this.squareOfSum - this.sumOfSquares; // Diferencia entre el cuadrado de la suma y la suma de los cuadrados
    }
  }
  