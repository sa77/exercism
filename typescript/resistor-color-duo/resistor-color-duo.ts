enum ColorCode {
  black = 0,
  brown,
  red,
  orange,
  yellow,
  green,
  blue,
  violet,
  grey,
  white
}

export class ResistorColor {
  private colors: string[];

  constructor(colors: string[]) {
    if (colors.length < 2) {
      throw new Error("At least two colors need to be present");
    }
    this.colors = colors;
  }

  value = (): number => {
    let resistorValue: string = "";
    this.colors.some((color: string, i: number) => {
      let colorEnum = color as keyof typeof ColorCode
      resistorValue += `${ColorCode[colorEnum]}`
      return i === 1;
    });
    return Number(resistorValue);
  };
}

