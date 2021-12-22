class MyArray {
    constructor() {
        this.length = 0
        this.data = {}
    }

    get(index) {
        return this.data[index]
    }

    push(item) {
        this.data[this.length] = item
        this.length++
    }

    pop() {
        const lastItem = this.data[this.length-1]
        delete this.data[this.length-1]
        this.length--
        return lastItem
    }

    delete(index) {
        const item = this.data[index]
        this.shiftItems(index)
        return item
    }

    shiftItems(index) {
        for (let i = index; i < this.length-1; i++) {
            this.data[i] = this.data[i+1]
        }
        delete this.data[this.length-1]
    }
}

const newArray = new MyArray()
console.log(newArray.length)
newArray.push('Hi')
newArray.push('You')
newArray.push('!')
console.log(newArray)
console.log(`Deleting '${newArray.pop()}'`)
console.log(newArray)
newArray.push('Adding item')
console.log(`Deleted '${newArray.delete(1)}'`)
console.log(newArray)
newArray.push('Item2')
console.log(newArray)