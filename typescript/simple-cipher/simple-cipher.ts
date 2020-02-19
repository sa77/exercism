class SimpleCipher {
    static ALPHABETS = "abcdefghijklmnopqrstuvwxyz"
    static CIPHER_LENGTH: number = SimpleCipher.ALPHABETS.length
    static MAX_KEY_LENGTH = 100

    constructor(public key: string = '', private keySize: number = 0) {
        const charIndex: number = Math.floor(Math.random() * SimpleCipher.ALPHABETS.length)
        this.key = key || SimpleCipher.ALPHABETS[charIndex].repeat(SimpleCipher.MAX_KEY_LENGTH);
        this.keySize = this.key.length;
    }

    encode(input: string): string {
        return input.split('').map((c, i) => {
            const charIndex = SimpleCipher.ALPHABETS.indexOf(c)
            // normalize for short key
            if (i >= this.keySize) { i %= this.keySize }
            const shiftIndex = SimpleCipher.ALPHABETS.indexOf(this.key[i])
            return SimpleCipher.ALPHABETS[(charIndex + shiftIndex) % SimpleCipher.CIPHER_LENGTH]
        }).join('');
    }

    decode(encodedText: string): string {
        const decodedText = encodedText
        return encodedText.split('').map((c, i) => {
            const charIndex = SimpleCipher.ALPHABETS.indexOf(c)
            // normalize for short key
            if (i >= this.keySize) { i %= this.keySize }
            const shiftIndex = SimpleCipher.ALPHABETS.indexOf(this.key[i])
            let cipherCharIndex = (charIndex - shiftIndex) % SimpleCipher.CIPHER_LENGTH
            // normalize for overflow
            if (cipherCharIndex < 0) { cipherCharIndex += SimpleCipher.CIPHER_LENGTH }
            return SimpleCipher.ALPHABETS[cipherCharIndex]
        }).join('')
    }
}

export default SimpleCipher
