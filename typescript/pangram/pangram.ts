class Pangram {
    private alphabets:string[];

    constructor(sentence: string) {
        let uniqueChars = [...new Set(sentence.toLowerCase())]
        this.alphabets = uniqueChars.filter((c) => /[a-z]/g.test(c))
    }

    isPangram():boolean {
        return this.alphabets.length === 26;
    }

}

export default Pangram;
