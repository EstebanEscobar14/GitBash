// Definición de un array constante que contiene los colores utilizados en las resistencias
const COLORS = [
    'black',    // 0
    'brown',    // 1
    'red',      // 2
    'orange',   // 3
    'yellow',   // 4
    'green',    // 5
    'blue',     // 6
    'violet',   // 7
    'grey',     // 8
    'white',    // 9
]

// Se define un tipo que corresponde a los colores posibles para las resistencias
export type COLORS = typeof COLORS[number];

// Función que toma como argumento un array de dos colores y devuelve el valor numérico correspondiente a la resistencia
export function decodedValue([color1, color2]: COLORS[]): number {
    // Se calcula el valor de la resistencia concatenando los índices de los colores en el array COLORS
    return COLORS.indexOf(color1) * 10 + COLORS.indexOf(color2);
}
