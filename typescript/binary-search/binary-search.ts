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
            let splitIndex = Math.round(clonedArray.length/2) - 1

            while(splitIndex !== 0) {
                if (num === this.array[splitIndex]) {
                    searchIndex = splitIndex
                    break
                } else if (num < this.array[splitIndex]) {
                    clonedArray = clonedArray.slice(0, i)
                } else {
                    clonedArray = clonedArray.slice(splitIndex, clonedArray.length - 1)
                }
                splitIndex = Math.round(clonedArray.length/2) - 1
            }
        }
        return searchIndex
    }
}