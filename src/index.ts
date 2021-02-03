class DQ<T> {
    private _list: T | null[]
    private _size: number
    private _arrayLength: number
    private _start: number
    private _end: number

    constructor(length: number = 0) {
        this._list = length > 0 ? new Array(length).fill(null) : []
        this._start = this._end = length > 0 ? Math.floor(length / 2) : 0
        this._arrayLength = length
        this._size = 0
    }

    size() {
        return this._size
    }

    add(value: T) {
        if (this._arrayLength > this._size) {
            if (this._end === this._arrayLength) {
                this._list[0] = value
                this._end = 0
            } else {
                this._list[this._end + 1] = value
                this._end = this._end + 1
            }
        } else {
            // Double Array in Size
            // Add old array to new array
            // Drop reference to old array allowing for Garbage Collection
        }
    }
}

export default DQ
