export function translate(phrase: string): string {
    // Lista de vocales en inglés.
    const vowels: Array<string> = ['a', 'e', 'i', 'o', 'u'];
    // Array para almacenar las palabras traducidas.
    const resultWords: Array<string> = [];
    // Divide la frase en palabras individuales.
    const words: Array<string> = phrase.split(' ');
  
    // Itera sobre cada palabra en la frase.
    for (let word of words) {
      // Verifica si la primera letra es una vocal.
      if (vowels.includes(word.slice(0, 1))) {
        // Si la primera letra es una vocal, agrega "ay" al final de la palabra.
        resultWords.push(word + "ay");
      } else {
        // Si la primera letra no es una vocal, busca los grupos de consonantes al principio de la palabra.
        const clusters = [word.slice(0, 2), word.slice(0, 3)];
        // Verifica si hay un grupo de dos consonantes al principio de la palabra.
        const twoCluster: boolean = clusters[0].split('').every((c) => !(vowels.includes(c))) || clusters[0] == "qu";
        // Verifica si hay un grupo de tres consonantes al principio de la palabra.
        const threeCluster: boolean = clusters[1].split('').every((c) => !(vowels.includes(c))) || clusters[1].slice(1,) == "qu";
        // Verifica si la palabra comienza con un grupo de dos o tres consonantes y no es igual al grupo.
        if ((twoCluster || threeCluster) && word != clusters[0]) {
          // Si es así, mueve el grupo de consonantes al final de la palabra y agrega "ay".
          if (threeCluster) {
            resultWords.push(word.slice(3, ) + clusters[1] + "ay");
          } else {
            resultWords.push(word.slice(2, ) + clusters[0] + "ay");
          }
        } else {
          // Si no hay grupo de consonantes, mueve la primera letra al final de la palabra y agrega "ay".
          resultWords.push(word.slice(1,) + word.slice(0, 1) + "ay");
        }
      }
    }
    // Une las palabras traducidas en una frase y la devuelve.
    return resultWords.join(' ');
  }
  