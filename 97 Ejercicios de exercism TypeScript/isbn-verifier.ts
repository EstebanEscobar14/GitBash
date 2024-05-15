export function isValid(isbn: unknown): boolean {
    if(typeof isbn !== 'string') return false;

    let sum = 0;
    let mult = 10;
    //Eliminar los guiones de la cadena
    const cleanedISBN = isbn.replace(/[^0-9^A-Z]/g,'');

    //Verificar que la longitud de la cadena sea 10
    if(cleanedISBN.length !== 10) return false;

    //Verficar que los primeros 9 caracteres sean digitos o x
    for(let letter of cleanedISBN) {
        if(letter.match(/[0-9]/)){
            sum += Number(letter) * mult;
        } else if(letter === 'X' && mult === 1) {
            sum += 10 * mult;
        } else {
            return false;
        }
        mult--;
    }
    return !(sum % 11);
}

const isbn = '3-598-2X507-9';
console.log(isValid(isbn));