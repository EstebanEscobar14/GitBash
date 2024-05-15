/**
 * Calcula el producto más grande de una serie de dígitos consecutivos en un número dado.
 * @param input - El número como una cadena de dígitos.
 * @param span - La longitud de la serie de dígitos consecutivos.
 * @returns El producto más grande de la serie de dígitos consecutivos.
 * @throws Error si el span es negativo, mayor que la longitud de la cadena o si la cadena no contiene solo dígitos.
 */
export const largestProduct = (input: string, span: number): number => {
    // Verifica si el span es negativo.
    if (span <= 0){
        throw new Error('Span must not be negative');
    }

    // Verifica si el span es mayor que la longitud de la cadena.
    if (span > input.length){
        throw new Error('Span must be smaller than string length');
    }

    // Verifica si la cadena contiene solo dígitos.
    if (!/^\d*$/g.test(input)) {
        throw new Error("Digits input must only contain digits");
    }

    // Inicializa la variable para almacenar el producto máximo.
    let maxProduct = 0;

    // Itera sobre la cadena para encontrar el producto máximo de la serie de dígitos consecutivos.
    for(let i = 0; i <= input.length - span; i++){
        // Obtiene la serie de dígitos consecutivos.
        const series = input.substring(i, i + span);
        // Calcula el producto de los dígitos en la serie.
        const product = series.split('').reduce((acc, curr) => acc * parseInt(curr), 1);
        // Actualiza el producto máximo si el producto actual es mayor.
        if (product > maxProduct){
            maxProduct = product;
        }
    }

    return maxProduct;
};
