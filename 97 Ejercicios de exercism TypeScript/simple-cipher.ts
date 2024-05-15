// Establecer el valor del código ASCII para 'a'
const LOWER = 'a'.charCodeAt(0);
// Definir la cantidad de letras en el alfabeto inglés
const LETTERS = 26;

// Definir la clase SimpleCipher
export class SimpleCipher {
  // Constructor que acepta una clave opcional, si no se proporciona, genera una clave aleatoria
  constructor(public readonly key: string = "") {
    if (!this.key) this.key = this.randomKey();
  }
  
  // Método para codificar un texto plano
  encode(plain: string) {
    return plain.replace(/[a-z]/g, (c, i) =>
      // Sustituir cada carácter del texto plano por su equivalente codificado
      String.fromCharCode(
        // Calcular el nuevo código ASCII para el carácter
        ((c.charCodeAt(0) + this.key.charCodeAt(i % this.key.length) - 2 * LOWER) % LETTERS) + LOWER
      )
    );
  }

  // Método para decodificar un texto codificado
  decode(code: string) {
    return code.replace(/[a-z]/g, (c, i) =>
      // Sustituir cada carácter codificado por su equivalente en texto plano
      String.fromCharCode(
        // Calcular el nuevo código ASCII para el carácter decodificado
        ((LETTERS + c.charCodeAt(0) - this.key.charCodeAt(i % this.key.length)) % LETTERS) + LOWER
      )
    );
  }

  // Método privado para generar una clave aleatoria
  private randomKey(length = 100): string {
    return Array.from({ length }, () => String.fromCharCode(LOWER + Math.random() * LETTERS | 0)).join("");
  }
}
