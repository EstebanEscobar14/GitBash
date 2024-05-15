export function keep<T>(collection: T[], predicate: (element: T) => boolean): T[] {
    // Inicializar un arreglo para almacenar los elementos mantenidos.
    const kept: T[] = [];
  
    // Iterar sobre cada elemento en la colección.
    for (const element of collection) {
      // Verificar si el elemento cumple con el predicado.
      if (predicate(element)) {
        // Si el elemento cumple con el predicado, agregarlo al arreglo de elementos mantenidos.
        kept.push(element);
      }
    }
  
    // Devolver la nueva colección que contiene los elementos mantenidos.
    return kept;
  }
  
  export function discard<T>(collection: T[], predicate: (element: T) => boolean): T[] {
    // Inicializar un arreglo para almacenar los elementos descartados.
    const discarded: T[] = [];
  
    // Iterar sobre cada elemento en la colección.
    for (const element of collection) {
      // Verificar si el elemento no cumple con el predicado.
      if (!predicate(element)) {
        // Si el elemento no cumple con el predicado, agregarlo al arreglo de elementos descartados.
        discarded.push(element);
      }
    }
  
    // Devolver la nueva colección que contiene los elementos descartados.
    return discarded;
  }
  