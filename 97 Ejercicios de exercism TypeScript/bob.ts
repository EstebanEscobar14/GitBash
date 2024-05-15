// Función que interpreta mensajes y devuelve respuestas basadas en su contenido
export function hey(message: string): string {
    // Verificar si el mensaje está vacío o contiene solo espacios en blanco
    if (message.trim() === '') {
        return 'Fine. Be that way!'; // Si es así, responder de manera negativa
    } else if (message === message.toUpperCase() && /[A-Z]/.test(message) && message.endsWith('?')) {
        // Verificar si el mensaje está compuesto solo por letras mayúsculas y termina con '?'
        return "Calm down, I know what I'm doing!"; // Si es así, responder enfáticamente
    } else if (message === message.toUpperCase() && /[A-Z]/.test(message)) {
        // Verificar si el mensaje está compuesto solo por letras mayúsculas
        return 'Whoa, chill out!'; // Si es así, responder con entusiasmo
    } else if (message.trim().endsWith('?')) {
        // Verificar si el mensaje termina con '?'
        return "Sure."; // Si es así, responder afirmativamente
    } else {
        return 'Whatever.'; // Si no cumple ninguna de las condiciones anteriores, responder de manera neutral
    }
}
