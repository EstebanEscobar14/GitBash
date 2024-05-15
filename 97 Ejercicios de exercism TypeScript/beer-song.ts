export const verse = (index: number): string =>
    index < 1 ? `No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.\n` :
    index < 2 ? `1 bottle of beer on the wall, 1 bottle of beer.\nTake it down and pass it around, no more bottles of beer on the wall.\n` :
    `${index} bottles of beer on the wall, ${index} bottles of beer.\nTake one down and pass it around, ${index - 1} bottle${index > 2 ? 's' : ''} of beer on the wall.\n`;
  
  export const sing = (initialBottlesCount = 99, takeDownCount = 0): string =>
    Array.from({ length: initialBottlesCount - takeDownCount + 1 }, (_, index) => takeDownCount + index)
      .reverse().map(verse).join("\n");