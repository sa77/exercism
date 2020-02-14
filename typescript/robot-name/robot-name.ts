
export default class RobotName {
    private static CHARACTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    private static NUMBERS = '0123456789';
    private takenNames: string[] = [];

    public name: string;

    constructor() {
        this.name = this.getRobotName();
    }

    resetName = (): string => this.name = this.getRobotName()

    getRobotName = (): string => {
        const randomChar = (): string => RobotName.CHARACTERS[Math.floor(Math.random() * 25)]
        const randomNum = (): string => RobotName.NUMBERS[Math.floor(Math.random() * 9)]
        const repeat  = (f: () => string, n: number): string[] => Array(n).fill('').map(() => f())

        let tmpName = '';
        while(true) {
            tmpName = repeat(() => randomChar(), 2).join('') +
                      repeat(() => randomNum(), 3).join('')
            if (!this.takenNames.includes(tmpName)) break;
        }
        this.takenNames.push(tmpName);
        return tmpName;
    }
}
