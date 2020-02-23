export default class Acronym {
  public static parse(phrase: string): string {
    const split: any[] = phrase.split(/\W/).map(outer => {
        if (outer) {
            return outer.split(/(?=[A-Z][a-z])/).map(inner => inner[0])
        }
    })
    return [].concat(...split).join('').toUpperCase()
  }
}
