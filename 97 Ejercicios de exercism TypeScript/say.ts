// Definiciones de constantes para los nombres de números
const ONES = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
const TENS = ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
// prettier-ignore
const TEENS = ['eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
const THOUSANDS = ['thousand', 'million', 'billion', 'trillion', 'quadrillion', 'quintillion']

// Función para convertir un número a su forma textual en inglés
const stringify = (number: number): string => {
  // Caso base: números del 1 al 9
  if (number < 10) return ONES[number - 1]

  // Caso especial: números del 11 al 19
  if (number < 20) return TEENS[(number % 10) - 1]

  // Caso especial: múltiplos de 10 hasta 90
  if ([10, 20, 30, 40, 50, 60, 70, 80, 90].includes(number)) return TENS[number / 10 - 1]

  // Caso general: números entre 21 y 99
  if (number >= 21 && number <= 99)
    return [stringify(Math.floor(number / 10) * 10), stringify(number % 10)].join('-')

  // Caso general: números mayores o iguales a 100
  return number % 100 === 0
    ? `${stringify(Math.floor(number / 100))} hundred`
    : `${stringify(Math.floor(number / 100))} hundred ${stringify(number % 100)}`
}

// Función principal para convertir un número en inglés
export const sayInEnglish = (number: number): string => {
  // Caso especial: número cero
  if (number === 0) return 'zero'

  // Validación del rango del número
  if (number < 0 || number > 999_999_999_999)
    throw new Error('Number must be between 0 and 999,999,999,999.')

  // Divide el número en grupos de tres dígitos, de derecha a izquierda
  return [...String(number)]
    .reverse()
    .join('')
    .match(/.{1,3}/g)!
    .map((number) => Number([...String(number)].reverse().join('')))
    .flatMap((number, i) =>
      number === 0
        ? [] // Ignora los grupos de cero
        : [i > 0 ? [stringify(number), THOUSANDS[i - 1]].join(' ') : stringify(number)], // Convierte el grupo en texto
    )
    .reverse()
    .join(' ') // Une todos los grupos en una sola cadena
}
