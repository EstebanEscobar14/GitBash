// Define una clase para manejar errores de desbordamiento de buffer
export class BufferOverflowError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "BufferOverflowError";   
    }
}

// Define una clase para manejar errores de buffer vacío
export class BufferEmptyError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "BufferEmptyError";    
    }
}

// Define una clase para representar un elemento en el buffer
class BufferElement<T> {
    private value: T;
    private next: BufferElement<T> | null;

    constructor(value: T) {
        this.value = value;
        this.next = null;
    }

    // Devuelve el valor del elemento
    public getValue(): T {
        return this.value;
    }

    // Establece el siguiente elemento en el buffer
    public setNext(next: BufferElement<T> | null): void {
        this.next = next;
    }

    // Devuelve el siguiente elemento en el buffer
    public getNext(): BufferElement<T> | null {
        return this.next;
    }
}

// Define la clase CircularBuffer
export default class CircularBuffer<T>{
    
    private maxSize: number; // Tamaño máximo del buffer
    private currentSize: number; // Tamaño actual del buffer
    private oldest: BufferElement<T> | null; // Puntero al elemento más antiguo
    private newest: BufferElement<T> | null; // Puntero al elemento más reciente

    constructor(maxSize: number) {
        this.maxSize = maxSize;
        this.currentSize = 0;
        this.oldest = null;
        this.newest = null;
    }

    // Lee un elemento del buffer
    public read(): T {
        if (this.currentSize == 0) {
            throw new BufferEmptyError("Buffer is empty");
        }

        const toRead = this.oldest!;
        if (this.currentSize == 1) {  
            this.oldest = null;
            this.newest = null;
        } else {
            this.oldest = toRead.getNext();
        }
        this.currentSize--;
        return toRead.getValue();
    }

    // Escribe un elemento en el buffer
    public write(value: T): void {
        if (this.currentSize === this.maxSize) {
            throw new BufferOverflowError("Buffer is full");
        }

        const newElem = new BufferElement<T>(value);
        if (this.currentSize === 0){
            this.oldest = newElem;
            this.newest = newElem;
        } else {
            const oldNewest = this.newest!;
            oldNewest.setNext(newElem);
            this.newest = newElem;
        }
        this.currentSize++;
    }

    // Vacía el buffer
    public clear(): void {
        while(this.currentSize > 0) {
            this.read();
        }
    }

    // Escribe un elemento en el buffer, sobrescribiendo el más antiguo si el buffer está lleno
    public forceWrite(value: T): void {
        try {
            this.write(value);            
        } catch (e) {
            if (e instanceof BufferOverflowError){
                this.read();
                this.write(value);
            }
        }
    }
}
