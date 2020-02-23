export default class BinarySearch {
    public array: number[] | undefined = undefined

    constructor(array: number[]) {
        if (!array.find((c, i) => c > array[i +1])) {
            this.array = array
        }
    }

    indexOf = (num: number): number => {
        let searchIndex = -1
        if (Array.isArray(this.array)) {
            let clonedArray: number[] = Array.from(this.array)
            let start: number;
            let end: number;
            let arrayLen = clonedArray.length
            let len = Math.round(arrayLen/2)

            while(len !== 1) {
                let i = len - 1
                if (num === this.array[i]) {
                    searchIndex = len - 1
                    break
                } else if (num < this.array[i]) {
                    // binary search LHS
                    start = 0
                    end = i
                } else {
                    // binary search RHS
                    start = i
                    end = arrayLen - 1
                }
                clonedArray = clonedArray.slice(start, end)
                arrayLen = clonedArray.length
                len = Math.round(arrayLen/2)
            }
        }
        return searchIndex
    }
}
