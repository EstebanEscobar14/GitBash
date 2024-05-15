export const toRoman = (number: number): string => {
    //Array
    const arabicToRoman:[number, string][] = [
        [1000, 'M'],
        [900, 'CM'],
        [500, 'D'],
        [400, 'CD'],
        [100, 'C'],
        [90, 'XC'],
        [50, 'L'],
        [40, 'XL'],
        [10, 'X'],
        [9, 'IX'],
        [5, 'V'],
        [4, 'IV'],
        [1, 'I']
    ];

    let result = '';

    //Iteration
    for(const [arabic, roman] of arabicToRoman) {
        //Mientras el numero griego arabigo sea mayor o igual al valor actual
        while(number >= arabic) {
            //Agregar el simbolo romano al resultado
            result += roman;
            //Restar el valor arabigo al numero
            number -= arabic;
        }
    }

    return result;
};