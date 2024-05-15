export class List {
    public elements: number[];
  
    // Constructor que acepta un número variable de elementos y los asigna a la propiedad 'elements'
    constructor(...elements: number[]) {
      this.elements = elements;
    }
  
    // Método para comparar dos listas y determinar su relación
    compare(other: List): "superlist" | "equal" | "sublist" | "unequal" {
      // Determinar cuál lista es la sublista y cuál es la superlista
      const sublist =
        this.elements.length < other.elements.length
          ? this.elements
          : other.elements;
      const superlist =
        this.elements.length < other.elements.length
          ? other.elements
          : this.elements;
  
      // Encontrar el índice del último elemento de la sublista en la superlista
      const index = superlist.indexOf(sublist[sublist.length - 1]);
  
      // Verificar si la sublista es igual a la parte correspondiente de la superlista
      for (let i = 0; i < sublist.length; i++) {
        if (sublist[sublist.length - i - 1] !== superlist[index - i])
          return "unequal";
      }
  
      // Determinar la relación entre las listas según sus longitudes
      if (this.elements.length > other.elements.length) return "superlist";
      if (this.elements.length === other.elements.length) return "equal";
  
      return "sublist";
    }
  }
  