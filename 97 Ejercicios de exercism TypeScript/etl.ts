// Función para transformar un objeto con valores de cadena a un objeto con valores numéricos
export function transform(oldValues: { [key: string]: string[] }): { [key: string]: number } {
    const newValues: { [key: string]: number } = {}; // Objeto para almacenar los nuevos valores

    // Iterar sobre las claves del objeto de valores antiguos
    for (const points in oldValues) {
        // Iterar sobre los elementos de la matriz asociada a cada clave
        for (const i in oldValues[points]) {
            // Convertir a minúsculas y asignar el valor numérico a cada elemento
            newValues[oldValues[points][i].toLowerCase()] = Number.parseInt(points);
        }
    }

    return newValues; // Devolver el objeto con los nuevos valores
}
