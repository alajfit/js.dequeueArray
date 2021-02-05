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

            for(let i = 0; i < this._holderArray.length; i++) {
                if(i < this._startPointer) {
                    const newPosition = newStart + this._holderArray.length - (this._endPointer - i)
                    tempArray[newPosition] = this._holderArray[i]
                } else {
                    tempArray[newStart + (i - this._startPointer )] = this._holderArray[i]
                }
            }

            tempArray[newStart + this._holderArray.length] = value

            this._startPointer = newStart
            this._endPointer = newStart + this._holderArray.length+1
            this._holderArray = tempArray
        } else {
            this._holderArray = new Array(3).fill(null)
            this._startPointer = 1
            this._endPointer = 2
            this._holderArray[this._startPointer] = value
        }
        this._floatingArraySize++
    }
}

export default DQ
