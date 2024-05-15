export class BinarySearchTree {
    private leftNode: BinarySearchTree | undefined; // Nodo hijo izquierdo
    private rightNode: BinarySearchTree | undefined; // Nodo hijo derecho
    private _data: number; // Dato almacenado en el nodo actual
  
    constructor(data: number) {
      this._data = data; // Inicializa el dato del nodo con el valor proporcionado
    }
  
    // Getter para obtener el dato almacenado en el nodo actual
    public get data(): number {
      return this._data;
    }
  
    // Getter para obtener el nodo hijo derecho
    public get right(): BinarySearchTree | undefined {
      return this.rightNode;
    }
  
    // Getter para obtener el nodo hijo izquierdo
    public get left(): BinarySearchTree | undefined {
      return this.leftNode;
    }
  
    // Método para insertar un nuevo elemento en el árbol
    public insert(item: number): void {
      if (item <= this._data) {
        // Si el nuevo elemento es menor o igual al dato actual, se inserta en el subárbol izquierdo
        if (typeof this.leftNode === 'object') {
          // Si hay un nodo hijo izquierdo, se llama al método insert en ese nodo
          this.leftNode.insert(item);
        } else {
          // Si no hay un nodo hijo izquierdo, se crea uno nuevo
          this.leftNode = new BinarySearchTree(item);
        }
      } else {
        // Si el nuevo elemento es mayor que el dato actual, se inserta en el subárbol derecho
        if (typeof this.rightNode === 'object') {
          // Si hay un nodo hijo derecho, se llama al método insert en ese nodo
          this.rightNode.insert(item);
        } else {
          // Si no hay un nodo hijo derecho, se crea uno nuevo
          this.rightNode = new BinarySearchTree(item);
        }
      }
    }
  
    // Método para recorrer el árbol y aplicar una función de devolución de llamada a cada elemento
    public each(callback: (data: unknown) => unknown): void {
      this.leftNode?.each(callback); // Recorre el subárbol izquierdo
      callback(this.data); // Aplica la función de devolución de llamada en el dato actual
      this.rightNode?.each(callback); // Recorre el subárbol derecho
    }
  }
  