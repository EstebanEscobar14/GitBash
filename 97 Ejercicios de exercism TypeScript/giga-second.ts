// Clase Gigasecond para realizar operaciones relacionadas con un gigasegundo (10^9 segundos)
export class Gigasecond {
    _date: Date; // Fecha de referencia

    constructor(date: Date) {
        this._date = date; // Inicializar la fecha de referencia con la proporcionada
    }

    // Método para calcular la fecha después de un gigasegundo (10^9 segundos)
    public date(): Date {
        return new Date(this._date.getTime() + 1000000000000); // Agregar un gigasegundo a la fecha de referencia y devolver la nueva fecha
    }
}
