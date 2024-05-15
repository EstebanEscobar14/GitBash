// Definición de la clase Clock
export class Clock {
    private timeInMinutes: number; // Variable privada que representa el tiempo en minutos

    // Constructor de la clase que inicializa la hora y los minutos dados
    constructor(hour: number, minute?: number) {
        // Convertir la hora dada a minutos y asegurarse de que esté dentro del rango de 0 a 1439 (24 horas)
        hour = (hour % 24) * 60;
        // Si no se proporciona un valor para los minutos, se asigna 0
        this.timeInMinutes = hour + (minute || 0);
    }

    // Método para representar el tiempo como una cadena de texto en el formato HH:MM
    public toString(): string {
        // Calcular las horas y los minutos
        let hour = Math.floor(this.timeInMinutes / 60);
        const minutes = this.timeInMinutes - hour * 60;
        let isHourNegative = false;

        // Ajustar las horas para asegurarse de que estén dentro del rango de 0 a 23
        hour = hour % 24;

        // Si las horas son negativas, ajustarlas y marcar el flag isHourNegative
        if (hour < 0) {
            hour = 24 + hour;
            isHourNegative = true;
        }

        // Formatear las horas y los minutos como cadenas de dos dígitos
        const hourString = `${isHourNegative && '-' || ''}0${Math.abs(hour)}`.slice(-2);
        const minutesString = `0${minutes}`.slice(-2);

        // Devolver la representación de la hora como una cadena en el formato HH:MM
        return `${hourString}:${minutesString}`;
    }

    // Método para agregar minutos a la hora actual y devolver una nueva instancia de Clock
    public plus(minutes: number): Clock {
        this.timeInMinutes += minutes;
        return this;
    }

    // Método para restar minutos de la hora actual y devolver una nueva instancia de Clock
    public minus(minutes: number): Clock {
        this.timeInMinutes -= minutes;
        return this;
    }

    // Método para comparar si dos instancias de Clock representan el mismo tiempo
    public equals(other: Clock): boolean {
        return other.toString() === this.toString();
    }
}
