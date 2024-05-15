export class DiffieHellman {
    private p: number;
    private g: number;
  
    constructor(p: number, g: number) {
      // Verificar si p y g son números primos
      if (!this.isPrime(p) || !this.isPrime(g)) {
        throw new Error('p and g must be prime numbers');
      }
  
      this.p = p;
      this.g = g;
    }
  
  public getPublicKey(privateKey: number): number {
      if (privateKey < 2 || privateKey >= this.p) {
          throw new Error('privateKey must be a positive integer less than p');
      }
      // Calcular la clave pública A = g^a mod p
      return this.modPow(this.g, privateKey, this.p);
  }
  
  
  
    public getSecret(theirPublicKey: number, myPrivateKey: number): number {
      // Calcular la clave secreta s = theirPublicKey^myPrivateKey mod p
      return this.modPow(theirPublicKey, myPrivateKey, this.p);
    }
  
    // Función para verificar si un número es primo
    private isPrime(num: number): boolean {
      if (num <= 1) return false;
      if (num <= 3) return true;
      if (num % 2 === 0 || num % 3 === 0) return false;
      let i = 5;
      while (i * i <= num) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
        i += 6;
      }
      return true;
    }
  
    // Función para calcular a^b mod p
    private modPow(base: number, exponent: number, modulus: number): number {
      let result = 1;
      base = base % modulus;
      while (exponent > 0) {
        if (exponent % 2 === 1) {
          result = (result * base) % modulus;
        }
        exponent = exponent >> 1;
        base = (base * base) % modulus;
      }
      return result;
    }
  }
  
  