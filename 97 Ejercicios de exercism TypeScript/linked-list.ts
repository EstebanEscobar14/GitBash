// Definición de la clase Node que representa un nodo en la lista enlazada
class Node<T> {
    public station: T;            // La estación almacenada en este nodo
    public next: Node<T> | null;  // Referencia al siguiente nodo
    public prev: Node<T> | null;  // Referencia al nodo anterior
  
    constructor(station: T) {
      this.station = station;
      this.next = null;
      this.prev = null;
    }
  }
  
  // Definición de la clase LinkedList que representa una lista enlazada de estaciones
  export class LinkedList<T> {
    private head: Node<T> | null;  // Referencia al primer nodo
    private tail: Node<T> | null;  // Referencia al último nodo
    private size: number;           // Tamaño de la lista
  
    constructor() {
      this.head = null;
      this.tail = null;
      this.size = 0;
    }
  
    // Método para agregar una estación al final de la lista
    public push(station: T) {
      const newNode = new Node(station); // Crear un nuevo nodo con la estación proporcionada
      if (!this.head) { // Si la lista está vacía
        this.head = newNode;
        this.tail = newNode;
      } else {
        newNode.prev = this.tail; // El nuevo nodo apunta al último nodo como su nodo anterior
        this.tail!.next = newNode; // El nodo anterior al último nodo apunta al nuevo nodo
        this.tail = newNode; // Actualizar el puntero de la cola para apuntar al nuevo nodo
      }
      this.size++; // Incrementar el tamaño de la lista
    }
  
    // Método para eliminar y devolver la estación al final de la lista
    public pop(): T | null {
      if (!this.tail) return null; // Si la lista está vacía, devolver null
      const removedStation = this.tail.station; // Obtener la estación del último nodo
      if (this.size === 1) { // Si la lista tiene un solo elemento
        this.head = null;
        this.tail = null;
      } else {
        this.tail = this.tail.prev!; // Actualizar el puntero de la cola para apuntar al nodo anterior
        this.tail!.next = null; // Establecer el siguiente nodo del nuevo nodo final como null
      }
      this.size--; // Decrementar el tamaño de la lista
      return removedStation; // Devolver la estación eliminada
    }
  
    // Método para eliminar y devolver la estación al principio de la lista
    public shift(): T | null {
      if (!this.head) return null; // Si la lista está vacía, devolver null
      const removedStation = this.head.station; // Obtener la estación del primer nodo
      if (this.size === 1) { // Si la lista tiene un solo elemento
        this.head = null;
        this.tail = null;
      } else {
        this.head = this.head.next!; // Actualizar el puntero de la cabeza para apuntar al siguiente nodo
        this.head!.prev = null; // Establecer el nodo anterior del nuevo nodo principal como null
      }
      this.size--; // Decrementar el tamaño de la lista
      return removedStation; // Devolver la estación eliminada
    }
  
    // Método para agregar una estación al principio de la lista
    public unshift(station: T) {
      const newNode = new Node(station); // Crear un nuevo nodo con la estación proporcionada
      if (!this.head) { // Si la lista está vacía
        this.head = newNode;
        this.tail = newNode;
      } else {
        newNode.next = this.head; // El nuevo nodo apunta al primer nodo como su siguiente nodo
        this.head!.prev = newNode; // El nodo anterior al primer nodo apunta al nuevo nodo
        this.head = newNode; // Actualizar el puntero de la cabeza para apuntar al nuevo nodo
      }
      this.size++; // Incrementar el tamaño de la lista
    }
  
    // Método para eliminar una estación de la lista
    public delete(station: T) {
      let current = this.head; // Iniciar desde el primer nodo
      while (current) {
        if (current.station === station) { // Si se encuentra la estación a eliminar
          if (current === this.head) { // Si la estación está en el primer nodo
            this.shift(); // Eliminar el primer nodo
          } else if (current === this.tail) { // Si la estación está en el último nodo
            this.pop(); // Eliminar el último nodo
          } else { // Si la estación está en un nodo intermedio
            current.prev!.next = current.next; // El nodo anterior apunta al siguiente nodo
            current.next!.prev = current.prev; // El nodo siguiente apunta al nodo anterior
            this.size--; // Decrementar el tamaño de la lista
          }
          return; // Salir del bucle
        }
        current = current.next; // Mover al siguiente nodo
      }
    }
  
    // Método para obtener el tamaño de la lista
    public count(): number {
      return this.size; // Devolver el tamaño de la lista
    }
  }
  