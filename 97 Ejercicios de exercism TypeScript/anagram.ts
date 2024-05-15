export class Anagram {
    private target: string;

    constructor(target: string){
        // Convertir la palabra a minúsculas
        this.target = target.toLowerCase();
    }

    public matches(...potentials: string[]): string[] {
        return potentials.filter(candidate => this.isAnagram(candidate.toLowerCase()));
    }

    public isAnagram(candidate: string): boolean {
        // Verificar si la palabra candidata es diferente de la palabra objetivo
        if(candidate !== this.target && candidate.length === this.target.length) {
            // Ordenar los caracteres de ambas palabras y comparar si son iguales
            const sortedTarget = this.target.split('').sort().join('');
            const sortedCandidate = candidate.split('').sort().join('');
            return sortedTarget === sortedCandidate;
        }

        return false;
    }
}