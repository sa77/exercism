const Response: {[key: number]: string} = Object.freeze({
    1: "wink",
    10: "double blink",
    100: "close your eyes",
    1000: "jump",
    10000: "reverse"
});

export default class HandShake {
    private binaryInput: string;

    constructor(input: number) {
        this.binaryInput = input.toString(2);
    }

    commands = (): string[] => {
        const tmpBinary = this.binaryInput.split("").reverse().join("");
        const encodings = [];
        for (let i = 0; i <= this.binaryInput.length - 1; i++) {
            const data = Number(tmpBinary[i])
            if (data === 1) {
                const response: string = Response[10**i];
                if (response === "reverse") {
                    encodings.reverse();
                    break;
                }
                encodings.push(response);
            }
        }
        return encodings;
    }

}