// PRIORITY QUEUE
// LOWER THE PRIORITY, HIGHER THE IMPORTANCE

class Node {
    constructor(val, priority) {
        this.val = val;
        this.priority = priority; //Lower the priority number, higher the importance
    }
}

class PriorityQueue {
    constructor() {
        this.heap = [];
    }

    enqueue(val, priority) {
        let node = new Node(val, priority);
        //Insert at the end 
        let toInsertAt = this.heap.length;
        this.heap[toInsertAt] = node;
        //Bubble up
        while (toInsertAt > 0) {
            let parentIndex = Math.floor((toInsertAt - 1) / 2);
            //If parent is smaller than the newly added node
            // console.log(this.heap[parentIndex], this.heap[toInsertAt]);
            if (this.heap[parentIndex].priority > this.heap[toInsertAt].priority) {
                //Need to bubble up
                // console.log(this.heap[parentIndex], this.heap[toInsertAt])
                // console.log("Switching " + this.heap[parentIndex] + " and " + this.heap[toInsertAt])
                let temp = this.heap[parentIndex];
                this.heap[parentIndex] = this.heap[toInsertAt];
                this.heap[toInsertAt] = temp;
                // [this.heap[parentIndex], this.heap[toInsertAt]] = [this.heap[toInsertAt], this.heap[parentIndex]]
                toInsertAt = parentIndex;
            }
            else {
                break;
            }
        }
    }

    dequeue() { //GIVE THE HIGHEST PRIORITY (i.e having least priority number)
        if (!this.heap.length) return null;
        else if (this.heap.length === 1) return this.heap.shift();
        else {
            let retVal = this.heap[0];
            this.heap[0] = this.heap.pop();
            let parentIndex = 0;
            while (true) {
                let leftChildIndex = 2 * parentIndex + 1
                let rightChildIndex = 2 * parentIndex + 2
                console.log(this.heap[parentIndex].val)
                if (this.heap[parentIndex].priority <= ((this.heap[leftChildIndex] && this.heap[leftChildIndex].priority) || Infinity) && this.heap[parentIndex].priority <= ((this.heap[rightChildIndex] && this.heap[rightChildIndex].priority) || Infinity)) {
                    //That means perfect position found for the Node
                    console.log("Breaking");
                    break;
                }
                else {
                    if ((this.heap[leftChildIndex] && this.heap[leftChildIndex].priority || null) < (this.heap[rightChildIndex] && this.heap[rightChildIndex].priority || null)) {
                        // console.log("Switching ", this.heap[parentIndex], this.heap[leftChildIndex]);
                        if (this.heap[leftChildIndex] != null)
                            [this.heap[parentIndex], this.heap[leftChildIndex]] = [this.heap[leftChildIndex], this.heap[parentIndex]]
                        parentIndex = leftChildIndex;  //FORGOT THIS
                    }
                    else {
                        if (this.heap[rightChildIndex] != null) {
                            // console.log("Switchroo ",this.heap[parentIndex], this.heap[rightChildIndex]);
                            [this.heap[parentIndex], this.heap[rightChildIndex]] = [this.heap[rightChildIndex], this.heap[parentIndex]]
                            parentIndex = rightChildIndex; //FORGOT THIS
                        }
                    }
                }
            }
            return retVal
        }
    }

    print() {
        return this.heap;
    }
}

let PQ = new PriorityQueue;

PQ.enqueue(92, 5)
PQ.enqueue(42, 2)
PQ.enqueue(39, 4)
PQ.enqueue(41, 1)
PQ.enqueue(15, 8)
PQ.enqueue(33, 3)

console.log(PQ.print())

console.log(PQ.dequeue().val);

console.log(PQ.print())


console.log(PQ.dequeue().val);

console.log(PQ.print())