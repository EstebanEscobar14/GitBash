// Definición de un array constante que contiene los colores utilizados en las resistencias
const COLORS = [
    'black',
    'brown',
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'violet',
    'grey',
    'white',
] as const;

// Se define un tipo que corresponde a los colores posibles para las resistencias
type Colors = typeof COLORS[number];

// Función que toma como argumento un array de tres colores y devuelve el valor de la resistencia formada por esos colores
export function decodedResistorValue([color1, color2, color3]: Colors[]): string {
    // Se calcula el valor numérico de la resistencia multiplicando y sumando los valores de los colores, teniendo en cuenta la potencia de diez del tercer color
    let num = ((COLORS.indexOf(color1) * 10 + COLORS.indexOf(color2)) * (10 ** COLORS.indexOf(color3)));
    
    let ohms = "ohms"; // Unidad de medida por defecto
    
    // Se verifica el valor numérico de la resistencia para determinar la unidad de medida adecuada
    if (num >= 1_000_000_000) {
        ohms = "gigaohms";
        num /= 1_000_000_000;
    } else if (num >= 1_000_000) {
        ohms = "megaohms";
        num /= 1_000_000;
    } else if (num >= 1_000) {
        ohms = "kiloohms";
        num /= 1_000;
    }
    
    // Se devuelve el valor numérico de la resistencia seguido de la unidad de medida
    return `${num} ${ohms}`;
}
