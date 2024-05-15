/**
 * Limpia y valida un número de teléfono.
 * @param phoneNumber - El número de teléfono a limpiar y validar.
 * @returns El número de teléfono limpiado y validado.
 * @throws Error si el número de teléfono no es válido.
 */
export function clean(phoneNumber: string): string {
    let verifiedPhoneNumber: string[] = []; // Array para almacenar los dígitos válidos del número de teléfono
    
    // Si el número de teléfono tiene 9 dígitos, lanza un error
    if (phoneNumber.length === 9) throw new Error('Incorrect number of digits');

    // Itera sobre cada caracter del número de teléfono
    for (let i = 0; i < phoneNumber.length; i++) {
        const char = phoneNumber[i];

        // Si se encuentra un carácter alfabético, lanza un error
        if (char.match(/[a-zA-Z]/)) throw new Error('Letters not permitted');
        // Si se encuentra un carácter de puntuación, lanza un error
        else if (char.match(/[@:!]/)) throw new Error('Punctuations not permitted');
        // Si el carácter es un número o '0', se agrega al array de dígitos verificados
        else if (Number(char) || char === '0') verifiedPhoneNumber.push(char);
    }

    // Si hay 11 dígitos, se verifica si el primer dígito es '1'
    if (verifiedPhoneNumber.length === 11) {
        if (verifiedPhoneNumber[0] !== '1') throw new Error('11 digits must start with 1');
        else verifiedPhoneNumber.shift(); // Si es '1', se elimina el primer dígito
    } 
    // Si hay más de 11 dígitos, lanza un error
    else if (verifiedPhoneNumber.length > 11) throw new Error('More than 11 digits');

    // Se realizan algunas verificaciones adicionales sobre los dígitos del número de teléfono
    if (verifiedPhoneNumber[0] === '0') throw new Error('Area code cannot start with zero');
    else if (verifiedPhoneNumber[0] === '1') throw new Error('Area code cannot start with one');
    else if (verifiedPhoneNumber[3] === '0') throw new Error('Exchange code cannot start with zero');
    else if (verifiedPhoneNumber[3] === '1') throw new Error('Exchange code cannot start with one');
    else return verifiedPhoneNumber.join(''); // Si pasa todas las validaciones, devuelve el número de teléfono limpio
}
