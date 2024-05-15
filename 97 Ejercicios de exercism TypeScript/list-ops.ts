// Clase List para operaciones sobre una lista de elementos
export class List {
    public values: unknown[] = []; // Arreglo para almacenar los valores de la lista
    private _length: number = 0; // Longitud de la lista

    // Método estático para crear una instancia de List con elementos dados
    static create(...elements: unknown[]): List {
        return new this(elements);
    }

    // Constructor de la clase List
    constructor(elements: unknown[] = []) {
        // Inicializar la lista con los elementos proporcionados
        for (const element of elements) {
            this.values[this._length++] = element;
        }
    }

    // Método para obtener la longitud de la lista
    length(): number {
        return this._length;
    }

    // Método para agregar los elementos de otra lista al final de esta lista
    append(other: List): List {
        for (let j = 0; j < other.length(); j++) {
            this.values[this._length++] = other.values[j];
        }
        return this;
    }

    // Método para concatenar otra lista con esta lista
    concat(other: List): List {
        other.forEach((elem) => {
            if (elem instanceof List) {
                this.append(elem);
            } else {
                this.push(elem);
            }
        });
        return this;
    }

    // Método para agregar un elemento al final de la lista
    push(element: unknown): List {
        this.values[this._length++] = element;
        return this;
    }

    // Método para agregar un elemento al principio de la lista
    unshift(element: unknown): List {
        this.values = [element, ...this.values];
        this._length++;
        return this;
    }

    // Método para eliminar y devolver el último elemento de la lista
    pop(): unknown {
        const value: unknown = this.values.splice(this._length - 1, 1)[0];
        this._length--;
        return value;
    }

    // Método para eliminar y devolver el primer elemento de la lista
    shift(): unknown {
        const value: unknown = this.values.splice(0, 1)[0];
        this._length--;
        return value;
    }

    // Método para iterar sobre los elementos de la lista
    forEach(callback: (element: unknown, index?: number) => void): void {
        for (let i = 0; i < this._length; i++) {
            callback(this.values[i], i);
        }
    }

    // Método para aplicar una función a cada elemento de la lista y devolver una nueva lista con los resultados
    map<T>(callback: (element: T) => unknown): List {
        return this.foldl(
            (result, element) => result.push(callback(element as T)),
            List.create()
        );
    }

    // Método para filtrar los elementos de la lista y devolver una nueva lista con los elementos que pasan la prueba
    filter<T>(callback: (element: T) => boolean): List {
        return this.foldl(
            (result, element) => {
                if (callback(element as T)) { result.push(element); }
                return result;
            },
            List.create()
        );
    }

    // Método para revertir el orden de los elementos en la lista
    reverse(): List {
        return this.foldl(
            (result, element) => result.unshift(element),
            List.create()
        );
    }

    // Método para aplicar una función a cada elemento de la lista de derecha a izquierda y devolver un valor acumulado
    foldl<U, V>(callback: (accumulator: U, element: V) => U, seed: U): U {
        let accumulator = seed;
        this.forEach((element) => {
            accumulator = callback(accumulator, element as V);
        });
        return accumulator;
    }

    // Método para aplicar una función a cada elemento de la lista de izquierda a derecha y devolver un valor acumulado
    foldr<U, V>(callback: (accumulator: U, element: V) => U, seed: U): U {
        return this.reverse().foldl(callback, seed);
    }
}
