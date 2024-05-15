export class Bowling {
    // Inicializa variables para hacer seguimiento del estado del juego
    private runningScore = 0; // Puntuación total del juego
    private multiplierNext = 0; // Multiplicador para el próximo lanzamiento (para strikes)
    private multiplierNextNext = 0; // Multiplicador para el lanzamiento después del próximo (para strikes consecutivos)
    private frame = 1; // Número de frame actual
    private runningFrame: number[] = []; // Pines derribados en el frame actual
  
    // Valida si un lanzamiento es válido
    private validateRoll(pins: number): void {
      // Comprueba si el lanzamiento es negativo
      if (pins < 0) {
        throw new Error("El lanzamiento negativo no es válido");
      }
      // Comprueba si el lanzamiento supera el número de pines en la pista
      if (pins > 10) {
        throw new Error("El recuento de pines supera el número de pines en la pista");
      }
      // Comprueba si el juego ha terminado y no se pueden hacer más lanzamientos
      if (this.frame > 10 && this.multiplierNext === 0) {
        throw new Error("No se puede lanzar después de que el juego haya terminado");
      }
    }
  
    // Método estático para validar un frame
    static validateFrame(frame: number[]): void {
      // Comprueba si el total de pines derribados en el frame supera el máximo
      if (frame.reduce((a, v) => a + v, 0) > 10) {
        throw new Error("El recuento de pines supera el número de pines en la pista");
      }
    }
  
    // Valida si se puede tomar la puntuación
    private validateScore(): void {
      // Comprueba si el juego todavía está en curso o si hay lanzamientos pendientes que puntuar
      if (
        this.frame < 10 ||
        (this.frame === 10 && this.runningFrame.length > 0) ||
        (this.frame > 10 && this.multiplierNext > 0)
      ) {
        throw new Error("No se puede tomar la puntuación hasta el final del juego");
      }
    }
  
    // Método para registrar un lanzamiento
    public roll(pins: number): void {
      // Valida el lanzamiento
      this.validateRoll(pins);
      // Añade los pines derribados al frame actual
      this.runningFrame = this.runningFrame.concat(pins);
      // Valida el frame
      Bowling.validateFrame(this.runningFrame);
      // Determina el relleno para los lanzamientos extra en el décimo frame
      const relleno = this.frame > 10 ? 1 : 0;
      // Actualiza la puntuación acumulada con el lanzamiento actual, considerando los multiplicadores
      this.runningScore =
        this.runningScore + (1 + this.multiplierNext - relleno) * pins;
      // Actualiza los multiplicadores para los próximos lanzamientos
      this.multiplierNext = this.multiplierNextNext;
      this.multiplierNextNext = 0;
  
      // Comprueba si el frame está completo
      const totalFrame = this.runningFrame.reduce((a, v) => a + v, 0);
      if (totalFrame === 10 || this.runningFrame.length === 2) {
        // Si es un strike, actualiza los multiplicadores en consecuencia
        if (this.runningFrame.length === 1) {
          if (this.frame < 11) {
            this.multiplierNextNext = this.multiplierNextNext + 1;
          }
        }
        if (totalFrame === 10) {
          if (this.frame < 11) {
            this.multiplierNext = this.multiplierNext + 1;
          }
        }
        // Reinicia el frame para los próximos lanzamientos
        this.runningFrame = [];
        this.frame = this.frame + 1;
      }
    }
  
    // Método para calcular y devolver la puntuación total
    public score(): number {
      // Valida si se puede tomar la puntuación
      this.validateScore();
      // Devuelve la puntuación total
      return this.runningScore;
    }
  }
  