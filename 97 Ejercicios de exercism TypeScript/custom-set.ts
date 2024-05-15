export class CustomSet {
    private elements: unknown[];
  
    constructor(initial?: unknown[]) {
      // Si no se proporciona un conjunto inicial, inicializar el conjunto como vacío
      this.elements = initial ? [...new Set(initial)] : [];
    }
  
    // Devuelve true si el conjunto está vacío, de lo contrario, false
    empty(): boolean {
      return this.elements.length === 0;
    }
  
    // Devuelve true si el elemento está presente en el conjunto, de lo contrario, false
    contains(element: unknown): boolean {
      return this.elements.includes(element);
    }
  
    // Agrega un elemento al conjunto si no está presente y devuelve el conjunto modificado
    add(element: unknown): CustomSet {
      if (!this.contains(element)) {
        this.elements.push(element);
      }
      return this;
    }
  
    // Devuelve true si el conjunto es un subconjunto de otro conjunto, de lo contrario, false
    subset(other: CustomSet): boolean {
      return this.elements.every((element) => other.contains(element));
    }
  
    // Devuelve true si el conjunto es disjunto de otro conjunto, de lo contrario, false
    disjoint(other: CustomSet): boolean {
      return !this.elements.some((element) => other.contains(element));
    }
  
    // Devuelve true si los dos conjuntos son iguales, de lo contrario, false
    eql(other: CustomSet): boolean {
      return this.subset(other) && other.subset(this);
    }
  
    // Devuelve un nuevo conjunto que es la unión de este conjunto y otro conjunto
    union(other: CustomSet): CustomSet {
      const unionElements = [...this.elements, ...other.elements];
      return new CustomSet(unionElements);
    }
  
    // Devuelve un nuevo conjunto que es la intersección de este conjunto y otro conjunto
    intersection(other: CustomSet): CustomSet {
      const intersectionElements = this.elements.filter((element) =>
        other.contains(element)
      );
      return new CustomSet(intersectionElements);
    }
  
    // Devuelve un nuevo conjunto que es la diferencia entre este conjunto y otro conjunto
    difference(other: CustomSet): CustomSet {
      const differenceElements = this.elements.filter(
        (element) => !other.contains(element)
      );
      return new CustomSet(differenceElements);
    }
  }
  