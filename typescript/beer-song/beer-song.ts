export default class Beer {

    static sing = (from: number = 99, to: number = 0): string => {
        let lyric = ''
        for (let i = from; i >= to; i--) {
            lyric += `${Beer.verse(i)}`
            lyric += (i === to) ? '' : '\n'
        }
        return lyric
    }

    static verse = (num: number): string => {
        let bottlePhrase = ''
        let endSentence = ''
        switch (num) {
            case 0:
                bottlePhrase = 'No more bottles'
                endSentence = 'Go to the store and buy some more, ' +
                              '99 bottles of beer on the wall.\n'
                break;
            case 1:
                bottlePhrase = '1 bottle'
                endSentence = 'Take it down and pass it around, ' +
                              'no more bottles of beer on the wall.\n'
                break;

            default:
                bottlePhrase = `${num} bottles`
                endSentence = 'Take one down and pass it around, ' +
                              `${num - 1} bottle${num > 2 ? 's' : ''} of beer on the wall.\n`
                break;
        }
        return `${bottlePhrase} of beer on the wall, ` +
                `${bottlePhrase.toLowerCase()} of beer.\n` +
                endSentence
    }
}
