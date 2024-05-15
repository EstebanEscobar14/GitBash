export class Rational {
    private numerator: number;
    private denominator: number;

    constructor(numerator: number, denominator: number) {
        if (denominator === 0) {
            throw new Error("Denominator cannot be 0");
        }

        //Normalizar el signo del numerador y del denominador
        if (denominator < 0) {
            numerator *= -1;
            denominator *= -1;
        }

        // Reducir la fraccion a su forma mas baja
        let gcd = this.gcd(numerator, denominator);
        this.numerator = numerator / gcd;
        this.denominator = denominator / gcd;
    }

    // Metodo privador para calcular el maximo comun divisor usando el algoritmo de Euclides
    private gcd(a: number, b: number): number {
        a = Math.abs(a);
        b = Math.abs(b);
        while (b !== 0) {
            let temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }

    //Metodo para sumar dos numero racionales
    public add(other: Rational): Rational {
        const numerator = this.numerator * other.denominator + other.numerator * this.denominator;
        const denominator = this.denominator * other.denominator;
        return new Rational(numerator, denominator);
    }

    //Metodo para restar dos numero racionales
    public sub(other: Rational): Rational {
        const numerator = this.numerator * other.denominator - other.numerator * this.denominator;
        const denominator = this.denominator * other.denominator;
        return new Rational(numerator, denominator);
    }

    //Metodo para multiplicar dos numero racionales
    public mul(other: Rational): Rational {
        const numerator = this.numerator * other.numerator;
        const denominator = this.denominator * other.denominator;
        return new Rational(numerator, denominator);
    }

    //Metodo para dividir dos numero racionales
    public div(other: Rational): Rational {
        const numerator = this.numerator * other.denominator;
        const denominator = this.denominator * other.numerator;
        if (denominator === 0) {
            throw new Error("Cannot divide by zero");
        }
        return new Rational(numerator, denominator);
    }

    // Metodo para calcular el valor absoluto de un numero racional
    public abs(): Rational {
        return new Rational(Math.abs(this.numerator), Math.abs(this.denominator));
    }

    //Metodo para elevar un numero racional a una potencia entera
    public exprational(exponent: number): Rational {
        let numerator: number;
        let denominator: number;

        if(exponent === 0){
            return new Rational(1, 1);
        } else if (exponent > 0){
            numerator = Math.pow(this.numerator, exponent);
            denominator = Math.pow(this.denominator, exponent);
            return new Rational(numerator, denominator);
        } else {
            numerator = Math.pow(this.denominator, -exponent);
            denominator = Math.pow(this.numerator, -exponent);
            return new Rational(numerator, denominator);
        }
    }

    //Metodo para elevar un numero racional a una potencia real (coma flotante)
    public expreal(exponent: number): number {
        return Math.pow(Math.pow(exponent, this.numerator), 1 / this.denominator);
    }

    //Metodo para reducir un numero racional a su forma mas baja
    public reduce(): Rational {
        return new Rational(this.numerator, this.denominator);
    }

    //Metodo para obtener el numerador de un numero racional
    public getNumerator(): number {
        return this.numerator;
    }

    //Metodo para obtener el denominador de un numero racional
    public getDenominator(): number {
        return this.denominator;
    }
}