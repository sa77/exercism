export default class AtbashCipher {

    static DEFAULT = "abcdefghijklmnopqrstuvwxyz"
    static CIPHER =  "zyxwvutsrqponmlkjihgfedcba"

    encode = (plainText: string): string => {
        let cipheredText: string[] = plainText.toLowerCase().split('').map((c) => {
            const index = AtbashCipher.DEFAULT.indexOf(c);
            if (index < 0) {
                if (/\d/.test(c)) return c;
                return "";
            }
            return AtbashCipher.CIPHER[index];
        })

        cipheredText = cipheredText.filter(c => /[a-z0-9]/.test(c)).map((c, i) => {
            if ((i + 1) % 5 === 0 && i < cipheredText.length - 1) {
                return `${c} `;
            }
            return c;
        })

        return cipheredText.join('');
    }

    decode = (encodedText: string): string => {
        const plainText: string[] = encodedText.split('').map((c) => {
            const index = AtbashCipher.CIPHER.indexOf(c)
            if (index < 0) {
                if (/\d/.test(c)) return c;
                return "";
            }
            return AtbashCipher.DEFAULT[index]
        })
        return plainText.join('');
    }

}
