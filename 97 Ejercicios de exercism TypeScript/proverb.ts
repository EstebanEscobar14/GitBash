export function proverb(...words: string[]): string {
    let lines = [];
  
    // Itera sobre las palabras para generar las líneas del proverbio.
    for (let i = 1; i < words.length; i++) {
      // Agrega una línea al proverbio indicando la pérdida de una palabra por la falta de otra.
      lines.push(`For want of a ${words[i - 1]} the ${words[i]} was lost.`);
    }
  
    // Agrega la última línea al proverbio indicando la causa de todas las pérdidas.
    lines.push(`And all for the want of a ${words[0]}.`);
  
    // Une todas las líneas para formar el proverbio completo y lo devuelve.
    return lines.join('\n');
  }
  