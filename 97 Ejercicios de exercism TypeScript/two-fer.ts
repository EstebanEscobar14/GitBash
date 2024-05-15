export function twoFer(name?: string) {
    // Verificar si se proporcionó un nombre
    if (name) {
        // Devolver la cadena con el nombre proporcionado
        return `One for ${name}, one for me.`;
    } else {
        // Devolver la cadena con "you" si no se proporcionó un nombre
        return `One for you, one for me.`;
    }
}

twoFer("Alicia");
twoFer();
