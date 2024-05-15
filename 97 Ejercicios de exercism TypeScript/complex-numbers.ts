export class ComplexNumber {
    private readonly a: number; // Parte real del número complejo
    private readonly b: number; // Parte imaginaria del número complejo

    constructor(a: number, b: number) {
        this.a = a;
        this.b = b;
    }

    // Obtiene la parte real del número complejo
    public get real(): number {
        return this.a;
    }

    // Obtiene la parte imaginaria del número complejo
    public get imag(): number {
        return this.b;
    }

    // Suma dos números complejos
    public add(other: ComplexNumber): ComplexNumber {
        return new ComplexNumber(this.a + other.a, this.b + other.b);
    }

    // Resta dos números complejos
    public sub(other: ComplexNumber): ComplexNumber {
        return new ComplexNumber(this.a - other.a, this.b - other.b);
    }

    // Multiplica dos números complejos
    public mul(other: ComplexNumber): ComplexNumber {
        const realPart = this.a * other.real - this.b * other.imag;
        const imaginaryPart = this.a * other.imag + this.b * other.real;
        return new ComplexNumber(realPart, imaginaryPart);
    }

    // Divide dos números complejos
    public div(other: ComplexNumber): ComplexNumber {
        const denominator = other.real * other.real + other.imag * other.imag;
        const realPart = (this.a * other.real + this.b * other.imag) / denominator;
        const imaginaryPart = (this.b * other.real - this.a * other.imag) / denominator;
        return new ComplexNumber(realPart, imaginaryPart);
    }

    // Obtiene el valor absoluto del número complejo
    public get abs(): number {
        return Math.sqrt(this.real ** 2 + this.imag ** 2)
    }

    // Obtiene el conjugado del número complejo
    public get conj(): ComplexNumber {
        return new ComplexNumber(this.real, this.imag ? this.imag * (-1) : 0)
    }

    // Obtiene el exponencial del número complejo
    public get exp(): ComplexNumber {
        const realPart = Math.exp(this.a) * Math.cos(this.b);
        const imaginaryPart = Math.exp(this.a) * Math.sin(this.b);
        return new ComplexNumber(realPart, imaginaryPart);
    }
}
