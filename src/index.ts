class DQ<T> {
    private _holderArray: (T | null)[]
    private _floatingArraySize: number
    private _startPointer: number
    private _endPointer: number

    constructor(length: number = 0) {
        this._holderArray = length > 0 ? new Array(length).fill(null) : []
        this._startPointer = this._endPointer = length > 0 ? Math.ceil(length / 2) - 1 : 0
        this._floatingArraySize = 0
    }

    size() {
        return this._floatingArraySize
    }

    resetHolder(start, end, newArr) {
        this._startPointer = start
        this._endPointer = end
        this._holderArray = newArr
    }

    copyArray(existingArr, newArr, newStart) {
        for(let i = 0; i < existingArr.length; i++) {
            if(i < this._startPointer) {
                const newPosition = newStart + existingArr.length - (this._endPointer - i)
                newArr[newPosition] = existingArr[i]
            } else {
                newArr[newStart + (i - this._startPointer )] = existingArr[i]
            }
        }
    }

    add(value: T) {
        if (this._holderArray.length > this._floatingArraySize) {
            if (this._endPointer === this._holderArray.length) {
                this._holderArray[0] = value
                this._endPointer = 1
            } else {
                this._holderArray[this._endPointer] = value
                this._endPointer = this._endPointer + 1
            }
        } else if (this._holderArray.length) {
            const tempArray = new Array(this._holderArray.length * 2).fill(null)
            let newStart = Math.floor(tempArray.length * 0.25)

            this.copyArray(this._holderArray, tempArray, newStart)
            tempArray[newStart + this._holderArray.length] = value
            this.resetHolder(newStart, newStart + this._holderArray.length+1, tempArray)
        } else {
            this.resetHolder(1, 2, new Array(3).fill(null))
            this._holderArray[this._startPointer] = value
        }
        this._floatingArraySize++
    }

    isEmpty() {
        return this._floatingArraySize === 0
    }

    clear() {
        const tempArray = new Array(3).fill(null)
        this.resetHolder(1, 1, tempArray);
        this._floatingArraySize = 0
        return true
    }
}

export default DQ
