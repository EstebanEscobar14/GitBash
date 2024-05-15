// Función que convierte un número en su representación binaria y genera una secuencia de acciones basadas en los bits
export function commands(num: number): string[] {
    const binary = num.toString(2); // Convertir el número en su representación binaria
    const actions: string[] = []; // Array para almacenar las acciones resultantes

    // Recorrer los dígitos del número binario de derecha a izquierda
    for (let i = binary.length - 1; i >= 0; i--) {
        const digit = binary[i]; // Obtener el dígito actual

        // Verificar si el dígito es '1'
        if (digit === '1') {
            // Dependiendo de la posición del dígito, agregar una acción al array de acciones
            switch (binary.length - 1 - i) {
                case 0:
                    actions.push('wink');
                    break;
                case 1:
                    actions.push('double blink');
                    break;
                case 2:
                    actions.push('close your eyes');
                    break;
                case 3:
                    actions.push('jump');
                    break;
                case 4:
                    actions.reverse(); // Si el quinto dígito es '1', invertir el orden de las acciones
                    break;
                default:
                    break;
            }
        }
    }

    return actions; // Devolver el array de acciones
}
