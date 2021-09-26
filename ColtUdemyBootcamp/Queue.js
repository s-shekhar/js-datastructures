class Node {
    constructor(val) {
        this.data = val;
        this.next = null;
    }
}


class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    enqueue(val) { //Add to the last
        if(val === null) return null;
        let node = new Node(val);
        if(this.first === null){
            this.first = node;
            this.last = node;
        }
        else{
            this.last.next = node;
            this.last = node;
        }
        this.length++;
        return this.length;
    }

    dequeue() { //Remove from the first
        let retVal = '';
        if(this.first === null) return null;
        else if(this.first === this.last){
            retVal = this.first.data;
            this.first = null;
            this.last = null;
        }
        else{
            retVal = this.first.data;
            this.first = this.first.next;
        }
        this.length--;
        return retVal;
    }

}

let queue = new Queue;
queue.enqueue('Cut')
queue.enqueue('Copy')
queue.enqueue('Paste')

console.log(queue.dequeue())
queue.enqueue('Dog')
console.log(queue.dequeue())
