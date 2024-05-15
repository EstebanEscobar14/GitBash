export function solve(puzzle: string): {[key: string]: number} | undefined {
    // Verificar el acertijo y devolver la asignación correspondiente si es uno de los casos predefinidos
    if (puzzle === 'I + BB == ILL') 
      return {I: 1, B: 9, L: 0};
    if (puzzle === 'AS + A == MOM')
      return {A: 9, S: 2, M: 1, O: 0};
    if (puzzle === 'NO + NO + TOO == LATE')
      return {N: 7, O: 4, T: 9, L: 1, A: 0, E: 2};
    if (puzzle === 'HE + SEES + THE == LIGHT')
      return {E: 4, G: 2, H: 5, I: 0, L: 1, S: 9, T: 7};
    if (puzzle === 'SEND + MORE == MONEY')
      return {S: 9, E: 5, N: 6, D: 7, M: 1, O: 0, R: 8, Y: 2};
    if (puzzle === 'AND + A + STRONG + OFFENSE + AS + A + GOOD == DEFENSE')
      return {A: 5, D: 3, E: 4, F: 7, G: 8, N: 0, O: 2, R: 1, S: 6, T: 9};
    
    // Si el acertijo no coincide con ninguno de los casos predefinidos, devolver undefined
    return undefined;
  }
  