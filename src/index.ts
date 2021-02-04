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
                this._endPointer = 0
            } else {
                this._holderArray[this._endPointer] = value
                this._endPointer = this._endPointer + 1
            }
        } else if (this._holderArray.length) {
            const holderArray = new Array(this._holderArray.length * 2).fill(null)
            let newStart = Math.floor(this._holderArray.length * 0.25)

            console.log(this._startPointer, this._endPointer)
            // while (this._startPointer !== this._endPointer) {
            //     holderArray[newStart] = this._holderArray[this._startPointer]
            //     newStart++
            //     this._startPointer = this._startPointer === this._holderArray.length - 1 ? 0 : this._startPointer + 1
            // }

            this._startPointer = newStart - this._holderArray.length
            this._endPointer = newStart
            this._holderArray = holderArray
        } else {
            this._holderArray = new Array(3).fill(null)
            this._startPointer = 1
            this._endPointer = 2
            this._holderArray[this._startPointer] = value
        }
        this._floatingArraySize++
        console.log(this)
    }
}

export default DQ
