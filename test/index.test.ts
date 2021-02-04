import DQ from '../src/index'

describe("JavaScript DequeueArray Data Structure", () => {
    let dequeueArray: DQ<string>

    beforeEach(() => {
        dequeueArray = new DQ()
    })

    it ("Should return the size of the DequeueArray", () => {
        expect(dequeueArray.size()).toBe(0)
    })

    it ("Should allow us to add an element to the end of the DequeueArray with a preset length", () => {
        dequeueArray = new DQ(10)
        dequeueArray.add('10')
        dequeueArray.add('20')
        expect(dequeueArray.size()).toBe(2)
    })

    it ("Should allow us to add an element to the end of the DequeueArray with no preset length", () => {
        dequeueArray.add('10')
        dequeueArray.add('20')
        dequeueArray.add('30')
        dequeueArray.add('99')
        expect(dequeueArray.size()).toBe(2)
    })
})
