const parts = [
    "",
    "the malt\nthat lay in ",
    "the rat\nthat ate ",
    "the cat\nthat killed ",
    "the dog\nthat worried ",
    "the cow with the crumpled horn\nthat tossed ",
    "the maiden all forlorn\nthat milked ",
    "the man all tattered and torn\nthat kissed ",
    "the priest all shaven and shorn\nthat married ",
    "the rooster that crowed in the morn\nthat woke ",
    "the farmer sowing his corn\nthat kept ",
    "the horse and the hound and the horn\nthat belonged to "
  ];
  export function verse(no: number): string[] {
    const text = ["This is "];
    for (let i = no; i > 1; i--) text.push(parts[i - 1]);
    text.push("the house that Jack built.");
    return text.join("").split("\n");
  }
  export function verses(start: number = 1, end: number = 12): string[] {
    const text = [];
    for (let no = start; no <= end; no++) text.push(...verse(no), '');
    return text.slice(0, text.length - 1);
  }