/**
 * Codifica un array de números enteros en formato "elias gamma".
 * @param arr - El array de números enteros a codificar.
 * @returns El array de números codificados en formato "elias gamma".
 */
export const encode = (arr: number[]): number[] => arr.flatMap(encodeNumber);

/**
 * Codifica un número en formato "elias gamma".
 * @param num - El número a codificar.
 * @returns El número codificado en formato "elias gamma".
 */
const encodeNumber = (num: number): number[] =>
  num
    // Convierte el número a binario y divide el resultado en grupos de 7 dígitos.
    .toString(2)
    .match(/(\d+?)(?=(\d{7})+(?!\d)|$)/g)!
    // Mapea cada grupo de 7 dígitos y lo convierte en su representación "elias gamma".
    .map((n, i, arr) =>
      parseInt(`${i === arr.length - 1 ? 0 : 1}${n.padStart(7, '0')}`, 2)
    );

/**
 * Decodifica un array de números codificados en formato "elias gamma" en números enteros.
 * @param arr - El array de números codificados en formato "elias gamma".
 * @returns El array de números enteros decodificados.
 * @throws Error si la secuencia es incompleta.
 */
export const decode = (arr: number[]): number[] | never => {
  const res: number[] = [];
  const bytes: string[] = [];

  arr.forEach((item) => {
    const part = item.toString(2).padStart(8, '0');
    // Si el primer bit es 0, se completa el byte y se decodifica.
    if (part[0] === '0') {
      const n = parseInt(bytes.concat(part.slice(1)).join(''), 2);
      res.push(n);
      bytes.length = 0;
    } else {
      // Si el primer bit es 1, se agrega el byte incompleto.
      bytes.push(part.slice(1));
    }
  });

  // Si aún quedan bytes sin completar, se lanza un error.
  if (bytes.length) {
    throw new Error('Incomplete sequence');
  }

  return res;
};
