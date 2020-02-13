class ReverseString {
    static reverse(word: string):string {
        let reverseWord = ""
        for (let i = word.length - 1; i >= 0; i--) {
            reverseWord += word[i]
        }
        return reverseWord;
    }
}

export default ReverseString
