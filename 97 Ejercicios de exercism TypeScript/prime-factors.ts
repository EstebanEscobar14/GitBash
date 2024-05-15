export function calculatePrimeFactors(number: number): number[] {
    //Array para alamacenar los factores primos
    const primeFactors: number[] = [];

    //comenzamos con el divisor mas pequeño
    let divisor = 2;

    //Mientras el numero sea mayor que 1
    while(number > 1){
        //Si el numero es divisible por el divisor actual
        while(number % divisor === 0){
            //Lo agregamos a la lista de factores primos
            primeFactors.push(divisor);
            //Reducimos el numero por el divisor
            number /= divisor;
        }
        //Incrementamos el divisor
        divisor++;
    }

    return primeFactors;
}