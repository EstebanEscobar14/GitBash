export function sum(magicObjects: number[], level: number): number {
    let energyPoints:number = 0; // Inicializa la variable de puntos de energía

    // Bucle para iterar sobre cada nivel hasta el nivel dado
    for (let i = 0; i < level; i++) {
        // Comprueba si algún objeto mágico afecta al nivel actual
        if (magicObjects.some((el) => i % el === 0)) {
            energyPoints += i; // Suma los puntos de energía del nivel actual
        }
    }

    return energyPoints; // Devuelve la suma total de puntos de energía
}
