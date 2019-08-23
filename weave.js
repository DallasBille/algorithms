
let q = new Queue()
let j = new Queue()

q.add(1)
j.add("hello")
q.add(3)
j.add("yeah")
q.add(5)
j.add("Nah")
j.add("yo")
j.add("jerk")
j.add("expletive")
function weave(queueOne, queueTwo){
    let weaved = new Queue()
    while(queueOne.peek() || queueTwo.peek()){
        if(queueOne.peek()){
            weaved.add(queueOne.remove())
        }
        if(queueTwo.peek()){
            weaved.add(queueTwo.remove())
        }
    }
    // console.log(weaved);
    return weaved
}

// weave(q,j)
// console.log(weave(q,j));
