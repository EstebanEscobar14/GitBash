/**
 * Aplana una lista anidada eliminando los valores nulos.
 * @param nestedList La lista anidada a aplanar.
 * @returns Una lista aplanada sin valores nulos.
 */
export function flatten(nestedList: any[]): any[] {
    // Creamos una función auxiliar para aplanar la lista anidada
    const flattenHelper = (list: any[]): any[] => {
      // Inicializamos una lista para almacenar los elementos aplanados
      const flattenedList: any[] = [];
      // Iteramos sobre cada elemento en la lista
      for (const item of list) {
        // Si el elemento es una lista anidada, llamamos recursivamente a flattenHelper
        if (Array.isArray(item)) {
          flattenedList.push(...flattenHelper(item));
        }
        // Si el elemento no es nulo, lo agregamos a la lista aplanada
        else if (item !== null && item !== undefined) {
          flattenedList.push(item);
        }
      }
      return flattenedList;
    };
  
    // Llamamos a la función auxiliar para aplanar la lista anidada y eliminamos los valores nulos
    return flattenHelper(nestedList);
  }
  