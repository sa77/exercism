interface GridLocation {
  start: [number, number]
  end: [number, number]
}

type WordLocation = GridLocation | undefined

type WordSearchResult = {
  [_: string]: WordLocation
}

export default class WordSearch {
  private numGridRows: number;

  constructor(public letterGrid: string[]) {
    this.letterGrid = letterGrid
    this.numGridRows = letterGrid.length
  }

  scanLeftToRight = (word: string): WordLocation => {
    const wordLen: number = word.length
    let position: WordLocation = undefined
    this.letterGrid.forEach((gridRow, i) => {
      for (let j = 0; j <= gridRow.length - wordLen; j++) {
        if (gridRow.substring(j, wordLen + j) === word) {
          position = {
            start: [i+1, j+1],
            end: [i+1, wordLen + j]
          }
        }
      }
    })
    return position
  }

  scanRightToLeft = (word: string): WordLocation => {
    const wordLen: number = word.length
    let position: WordLocation = undefined
    this.letterGrid.forEach((gridRow, i) => {
      for (let j = 0; j <= gridRow.length - wordLen; j++) {
        const rightCursor = gridRow.length - j
        const leftCursor = rightCursor - wordLen
        if (gridRow.substr(leftCursor, rightCursor).split('').reverse().join('') == word) {
          position = {
            start: [i+1, rightCursor],
            end: [i+1, leftCursor + 1]
          }
        }
      }
    })
    return position;
  }

  scanVerticalDown = (word: string, grid: string[] = this.letterGrid): WordLocation => {
    const wordLen: number = word.length
    let position: WordLocation = undefined;
    const firstChar = word[0]
    const lastChar = word[wordLen - 1]

    grid.some((gridRow, i) => {
      gridRow.split('').some((c, j) =>{
        if (c === firstChar) {
          let tmpWord = ""
          let rowIndex: number = i
          const numRowsRemaining: number = this.numGridRows - i
          if (numRowsRemaining >= wordLen) {
            for (rowIndex; rowIndex < wordLen + i; rowIndex++) {
              tmpWord += grid[rowIndex][j]
            }

            if (tmpWord === word) {
              position = {
                start: [i + 1, j + 1],
                end: [rowIndex, j + 1]
              }
              return
            }
          }
        }
        if (position) return
      })
    })
    return position
  }

  scanVerticalUp = (word: string): WordLocation => {
    const wordLen: number = word.length
    let position: WordLocation = undefined;
    const firstChar = word[0]
    const lastChar = word[wordLen - 1]
    // deep copy
    const reversedGrid: string[] = Array.from(this.letterGrid).reverse()
    position = this.scanVerticalDown(word, reversedGrid)
    if (position) {
      const _start: [number, number] = position['start']
      const _end: [number, number] = position['end']
      position = {
        start: [this.numGridRows - _start[0] + 1, _start[1]],
        end: [this.numGridRows - _end[0] + 1, _end[1]]
      }
    }
    return position;
  }

  scanTopLeftToBottomRight = (word: string, grid: string[] = this.letterGrid): WordLocation => {
    const wordLen: number = word.length
    const firstChar = word[0]
    const lastChar = word[wordLen - 1]

    let position: WordLocation = undefined;

    grid.some((gridRow, i) => {
      gridRow.split('').some((c, j) => {
        if (c === firstChar) {
          let tmpWord = ""
          let cursor = i
          const numRowsRemaining: number = this.numGridRows - i
          if (numRowsRemaining >= wordLen) {
            for(cursor; cursor < wordLen + i; cursor++) {
              // gridRow
              tmpWord += grid[cursor][cursor]
            }
            console.log(word, tmpWord, cursor, i, j)
            if (word === tmpWord) {
              position = {
                start: [i + 1, j + 1],
                end: [cursor, cursor]
              }
            }
          }
        }
      })
    })

    return position;
  }

  scanBottomLeftToTopRight = (word: string): WordLocation => {
    const wordLen: number = word.length
    const firstChar = word[0]
    const lastChar = word[wordLen - 1]

    let position: WordLocation = undefined;
    // deep copy
    const reversedGrid: string[] = Array.from(this.letterGrid).reverse()
    console.log('flipped --', this.letterGrid, reversedGrid, word)
    position = this.scanTopLeftToBottomRight(word, reversedGrid);

    return position;
  }


  public find(words: string[]): WordSearchResult {
    const outcome: WordSearchResult = {}

    words.some(word => {
      outcome[word] = this.scanLeftToRight(word)
      if (!outcome[word]) {
        outcome[word] = this.scanRightToLeft(word)
        if (!outcome[word]) {
          outcome[word] = this.scanVerticalDown(word)
          if (!outcome[word]) {
            outcome[word] = this.scanVerticalUp(word)
            if (!outcome[word]) {
              outcome[word] = this.scanTopLeftToBottomRight(word)
              if (!outcome[word]) {
                outcome[word] = this.scanBottomLeftToTopRight(word)
              }
            }
          }
        }
      }
    })
    return outcome
  }
}
