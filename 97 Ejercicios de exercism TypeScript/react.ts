// Exporta las funciones principales del módulo
export { createInput, createComputed, createCallback };

// Define tipos personalizados para mejorar la legibilidad
type Getter<T> = () => T;
type Setter<T> = (value: T) => void;
type Callback = () => void;
type Observable = {
  subs: Callback[],             // Array de suscriptores
  subscribe: (sub: Callback) => void,  // Función para suscribirse a cambios
  propagate: Callback,          // Función para propagar cambios a los suscriptores
}

// Objeto observable para gestionar la propagación de cambios
const observable: Observable = {
  subs: [],                     // Inicialmente no hay suscriptores
  subscribe(sub) {              // Función para suscribirse a cambios
    this.subs.push(sub)
  },
  propagate() {                 // Función para propagar cambios a los suscriptores
    this.subs.forEach(sub => sub())
  },
}

let callbacks: Callback[] = []; // Almacenamiento temporal para devoluciones de llamada

// Función para obtener el último valor de un array
function getLastValueOfArray<T>(arr: T[]): T {
  return arr[arr.length - 1];
}

// Función para crear una celda de entrada con un valor inicial
function createInput<T>(initialValue: T): [ Getter<T>, Setter<T> ] {
  let value = initialValue;     // Almacena el valor actual
  const getter: Getter<T> = () => value;  // Función para obtener el valor actual
  const setter: Setter<T> = (newValue: T) => {  // Función para cambiar el valor
    value = newValue;
    observable.propagate();     // Propaga el cambio a los suscriptores
  };
  return [ getter, setter ];    // Devuelve las funciones de acceso y modificación
}

// Función para crear una celda calculada con un manejador de cálculo
function createComputed<T>(handler: () => T, _?: T, _equal?: boolean): () => void {
  const results: T[] = [handler()];  // Almacena los resultados calculados
  observable.subs = [];          // Limpia los suscriptores existentes
  observable.subscribe(() => {  // Suscribe la función de manejo a los cambios
    const nextResult = handler()
    if (!_equal || (_equal && getLastValueOfArray(results) !== nextResult)) {
      callbacks.forEach(cb => cb())  // Ejecuta las devoluciones de llamada
    }
    results.push(nextResult)    // Almacena el resultado calculado
  });
  return handler;                // Devuelve la función de manejo
}

// Función para crear una devolución de llamada con una función
function createCallback<T>(callback: () => T): () => void {
  // Ejecuta la devolución de llamada al registrarse
  callback();
  callbacks.push(callback);     // Almacena la devolución de llamada
  const unsubscribe = (): void => {
    callbacks = callbacks.filter(x => x !== callback)  // Elimina la devolución de llamada al darse de baja
  };
  return unsubscribe;           // Devuelve la función de cancelación
}
