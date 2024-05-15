// Función que verifica si una cadena es un pangrama (contiene todas las letras del alfabeto al menos una vez)
export function isPangram(sentence: string): boolean {
    // Convertir la cadena a minúsculas para evitar distinciones entre mayúsculas y minúsculas
    sentence = sentence.toLowerCase();   
    
    // Crear un conjunto (Set) que contendrá todos los caracteres del alfabeto presentes en la cadena
    const alphabetSet = new Set([...sentence.replace(/[^a-z]/g, '')]);
    
    // Verificar si el tamaño del conjunto es igual a 26, que es el número de letras en el alfabeto inglés
    return alphabetSet.size === 26;
}

// Ejemplo de uso de la función isPangram con una cadena de prueba
console.log(isPangram('The quick brown fox jumps over the lazy dog.'));
