// Definición de la clase ValueError que hereda de Error
export class ValueError extends Error {
    constructor() {
      super('Bank account error'); // Llama al constructor de la clase padre con el mensaje de error
    }
}
  
// Definición de la clase BankAccount
export class BankAccount {
    private _balance: number; // Saldo de la cuenta
    private _isOpen: boolean; // Estado de apertura de la cuenta

    constructor() {
      this._isOpen = false; // La cuenta está cerrada por defecto al crearla
      this._balance = 0; // El saldo se inicializa en 0
    }
  
    open(): void  {
        // Verificar si la cuenta ya está abierta
        if(this._isOpen) {
          throw new ValueError(); // Lanzar un error si la cuenta ya está abierta
        }
        this._isOpen = true; // Establecer el estado de apertura de la cuenta como abierto
        this._balance = 0; // Restablecer el saldo a 0 al abrir la cuenta
    }
  
    close(): void  {
        // Verificar si la cuenta está cerrada
        if(!this._isOpen) {
          throw new ValueError(); // Lanzar un error si la cuenta está cerrada
        }
        this._isOpen = false; // Establecer el estado de apertura de la cuenta como cerrado
    }
  
    deposit(amount: number): void  {
        // Verificar si la cuenta está abierta y el monto es válido
        if(!this._isOpen || amount <= 0) {
          throw new ValueError(); // Lanzar un error si la cuenta está cerrada o el monto es inválido
        }
        this._balance += amount; // Agregar el monto al saldo de la cuenta
    }
  
    withdraw(amount: number): void  {
        // Verificar si la cuenta está abierta, el monto es válido y no excede el saldo
        if(!this._isOpen || amount <= 0 || amount > this._balance) {
          throw new ValueError(); // Lanzar un error si la cuenta está cerrada, el monto es inválido o excede el saldo
        }
        this._balance -= amount; // Restar el monto del saldo de la cuenta
    }
  
    get balance(): number  {
        // Verificar si la cuenta está abierta
        if(!this._isOpen) {
          throw new ValueError(); // Lanzar un error si la cuenta está cerrada al intentar obtener el saldo
        }
        return this._balance; // Devolver el saldo de la cuenta
    }
}

// Ejemplo de uso de la clase BankAccount
const account = new BankAccount(); // Crear una nueva instancia de BankAccount
account.open(); // Abrir la cuenta
account.deposit(50); // Depositar $50 en la cuenta
account.close(); // Cerrar la cuenta
account.open(); // Volver a abrir la cuenta
