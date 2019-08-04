// Data Structure: a way of organizing information, the use of them is determined by their runtime complexity given it's application to a problem.

//  Queue's: Have a limited ability to manipulate data, array's can do everything a Queue can do, but ca queue can perform it's operation with a lower time complexity for it's task.

// Definition: A data type where the oldest entered data is retrieved next. Like a deli line. First In, First Out

// In JS you will create a Queue class to create a Queue from an array, you are limiting it's abilities so it's not slowed down by useless functionalities that come with Arrays. You will use pop and unshift to remove and add items to the queue.

// We use an array behind the scenes and limit access.

// CREATING Queue
// Functionality
//  creating Queue, let q = new Queue()
//  q.add(1)
//  q.remove() => returns 1
class Queue{
    // constructor is automatically run when a new Queue is created(new Queue)
    constructor(){
        this.data = []
    }
    add(record){
        this.data.unshift(record)
    }
    remove(record){
        return this.data.pop()
    }
    peek(record){
        let last = this.data[this.data.length-1]
        return last
    }
}
