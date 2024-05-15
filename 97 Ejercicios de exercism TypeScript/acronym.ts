export function parse(phrase: string): string {
    // expresión regular para encontrar todas las palabras en la frase
    const words = phrase.match(/[A-Z]+[a-z]*|[a-z]+/g);
    
    // Si no se encuentran palabras, devuelve una cadena vacía
    if (!words) {
        return '';
    }
    
    // método map para obtener la letra inicial de cada palabra y luego las une en un solo acrónimo
    const acronym = words.map((word) => word.charAt(0).toUpperCase()).join('');
    
    return acronym; // Devuelve el acrónimo generado
}
