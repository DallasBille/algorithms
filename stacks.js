// Stack are like a queue, it's still an ordered list of records.
// But instead of First In First Out like a Queue, stacks are First In Last Out. So the data that come out first, is the last one put in.


class Stack{
    constructor(){
        this.data = []
    }
    push(record){
        return this.data.push(record)
    }
    pop(record){
        return this.data.pop()
    }
    peek(record){
        return this.data[this.data.length -1]
    }
}
