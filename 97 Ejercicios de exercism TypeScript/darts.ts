export function score(x: number, y: number): number{
    //Calcular la distancia desde el origen
    const distance = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));

    //Determinar la cantidad de puntos ganados segun la distancia
    if (distance > 10) {
        return 0;
    } else if (distance > 5) {
        return 1;
    } else if (distance > 1) {
        return 5;
    } else {
        return 10;
    }
}