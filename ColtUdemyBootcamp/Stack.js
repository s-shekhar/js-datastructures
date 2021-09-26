class Node {
    constructor(val) {
        this.data = val;
        this.next = null;
    }
}


class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    push(val) { //Add to the top
        if(val === null) return null;
        let node = new Node(val);
        if(this.first === null){
            this.first = node;
            this.last = node;
        }
        else{
            node.next = this.first;
            this.first = node;
        }
        this.length++;
        return this.length;
    }

    pop() { //Remove from the top
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

let stack = new Stack;
stack.push('Cut')
stack.push('Copy')
stack.push('Paste')


console.log(stack.pop())
console.log(stack.pop())