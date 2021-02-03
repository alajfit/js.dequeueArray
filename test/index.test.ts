import DQ from '../src/index'

describe("JavaScript DequeueArray Data Structure", () => {
    let dequeueArray: DQ<string>

    beforeEach(() => {
        dequeueArray = new DQ()
    })

    it ("Should return the size of the DequeueArray", () => {
        expect(dequeueArray.size()).toBe(0)
    })

    it ("Should allow us to add an element to the end of the DequeueArray", () => {
        expect(dequeueArray.size()).toBe(1)
    })

    // it("Should allow the user to add items to the front of DequeueArray", () => {
    //     expect(dequeueArray.enqueue()).toBe(2)
    // })

    // it("Should allow the user to add items to the back of DequeueArray", () => {

    // })

    // it("Should allow the user to dequeue from the DequeueArray", () => {

    // })

    // it("Should allow the user to deshift items from the DequeueArray", () => {

    // })
})
