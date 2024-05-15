export class DnDCharacter {
    strength: number;
    dexterity: number;
    constitution: number;
    intelligence: number;
    wisdom: number;
    charisma: number;
    hitpoints: number;

    constructor() {
        this.strength = DnDCharacter.generateAbilityScore();
        this.dexterity = DnDCharacter.generateAbilityScore();
        this.constitution = DnDCharacter.generateAbilityScore();
        this.intelligence = DnDCharacter.generateAbilityScore();
        this.wisdom = DnDCharacter.generateAbilityScore();
        this.charisma = DnDCharacter.generateAbilityScore();
        const constitutionModifier = DnDCharacter.getModifierFor(this.constitution);
        this.hitpoints = 10 + constitutionModifier;
    }

    private static generateAbilityScore(): number {
        // Generar un lanzamiento de 4 dados de 6 caras
        const diceRolls: number[] = [];
        for (let i = 0; i < 4; i++) {
            diceRolls.push(Math.floor(Math.random() * 6) + 1);
        }
        // Ordenar los lanzamientos en orden descendente
        diceRolls.sort((a, b) => b - a);
        // Sumar los 3 valores mas altos y devolver el resultado
        return diceRolls[0] + diceRolls[1] + diceRolls[2];
    }

    private static getModifierFor(abilityValue: number): number {
        // Calcular el modificador para una puntuacion de habilidad
        return Math.floor((abilityValue - 10) / 2);
    }
}
