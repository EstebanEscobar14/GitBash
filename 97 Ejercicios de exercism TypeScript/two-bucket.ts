function gcd(a: number, b: number): number {
    if (b === 0) {
      return a;
    }
    return gcd(b, a % b);
  }
  
  export class TwoBucket {
    private _goalBucket = 'one'; // Cubeta objetivo
    private _otherBucket = 0; // Cantidad de agua en la otra cubeta
    private _goal: number; // Cantidad de agua objetivo
    private _steps = 0; // Número de pasos
    private _starterBuck: boolean; // Indica si la cubeta uno es la cubeta de inicio
    private _buckOne: number; // Capacidad de la cubeta uno
    private _buckTwo: number; // Capacidad de la cubeta dos
  
    constructor(buckOne: number, buckTwo: number, goal: number, starterBuck: string) {
      this._goal = goal;
      this._starterBuck = starterBuck === 'one';
      this._buckOne = this._starterBuck ? buckOne : buckTwo;
      this._buckTwo = this._starterBuck ? buckTwo : buckOne;
    }
  
    /**
     * Realiza los movimientos necesarios para alcanzar la cantidad de agua objetivo.
     * @returns El número de pasos realizados.
     * @throws Error si no es posible alcanzar la cantidad de agua objetivo.
     */
    moves(): number {
      // Verifica si es posible alcanzar la cantidad de agua objetivo
      if (this._goal % gcd(this._buckOne, this._buckTwo) !== 0 ||
          this._goal > this._buckOne && this._goal > this._buckTwo) {
        throw new Error('Not possible to reach the goal');
      }
  
      // Verifica si la cantidad de agua objetivo coincide con la capacidad de la cubeta dos
      if (this._goal === this._buckTwo) {
        this._goalBucket = 'two';
        this._otherBucket = this._buckOne;
        return 2;
      }
  
      let a = this._buckOne;
      let b = 0;
      this._steps++;
  
      // Realiza los movimientos necesarios para alcanzar la cantidad de agua objetivo
      while (a !== this._goal && b !== this._goal) {
        const amt = Math.min(a, this._buckTwo - b);
        a -= amt;
        b += amt;
        this._steps++;
  
        if (a === this._goal || b === this._goal) {
          break;
        }
        if (a === 0) {
          a = this._buckOne;
          this._steps++;
        }
        if (b === this._buckTwo) {
          b = 0;
          this._steps++;
        }
      }
  
      // Determina en qué cubeta se encuentra la cantidad de agua objetivo
      this._goalBucket = a === this._goal
        ? this._starterBuck ? 'one' : 'two'
        : this._starterBuck ? 'two' : 'one';
  
      this._otherBucket = a === this._goal ? b : a;
      return this._steps;
    }
    get goalBucket(): string {
      return this._goalBucket;
    }
    get otherBucket(): number {
      return this._otherBucket;
    }
  }
  