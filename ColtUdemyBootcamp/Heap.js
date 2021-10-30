// Parent = Floor(n-1/2)
// Children = 2n+1 and 2n+2

var heap = [];

function insert(val) {
    //Insert at the end 
    let toInsertAt = heap.length;
    heap[toInsertAt] = val;
    //Bubble up
    while (toInsertAt > 0) {
        let parentIndex = Math.floor((toInsertAt - 1) / 2);
        //If parent is smaller than the newly added node
        // console.log(parentIndex,toInsertAt)
        if (heap[parentIndex] < heap[toInsertAt]) {
            //Need to bubble up
            // console.log(heap[parentIndex], heap[toInsertAt])
            // console.log("Switching " + heap[parentIndex] + " and " + heap[toInsertAt])
            let temp = heap[parentIndex];
            heap[parentIndex] = heap[toInsertAt];
            heap[toInsertAt] = temp;
            // [heap[parentIndex], heap[toInsertAt]] = [heap[toInsertAt], heap[parentIndex]]
            toInsertAt = parentIndex;
        }
        else {
            break;
        }
    }
}

function extractMax() {
    if (!heap.length) return null;
    else if (heap.length === 1) return heap.shift();
    else {
        let retVal = heap[0];
        heap[0] = heap.pop();
        let parentIndex = 0;
        while (true) {
            let leftChildIndex = 2 * parentIndex + 1
            let rightChildIndex = 2 * parentIndex + 2
            if (heap[parentIndex] >= ((heap[leftChildIndex] || null)) && heap[parentIndex] >= ((heap[rightChildIndex]) || null)) {
                //That means perfect position found for the Node
                console.log("Breaking");
                break;
            }
            else {
                if ((heap[leftChildIndex] || null) > (heap[rightChildIndex] || null)) {
                    // console.log("Switching ", heap[parentIndex], heap[leftChildIndex]);
                    if (heap[leftChildIndex] != null)
                        [heap[parentIndex], heap[leftChildIndex]] = [heap[leftChildIndex], heap[parentIndex]]
                    parentIndex = leftChildIndex;  //FORGOT THIS
                }
                else {
                    if (heap[rightChildIndex] != null) {
                        // console.log("Switchroo ",heap[parentIndex], heap[rightChildIndex]);
                        [heap[parentIndex], heap[rightChildIndex]] = [heap[rightChildIndex], heap[parentIndex]]
                        parentIndex = rightChildIndex; //FORGOT THIS
                    }
                }
            }
        }
        return retVal
    }
}

insert(41)
insert(39)
insert(33)
insert(18)
insert(27)
insert(12)
insert(55)

console.log(heap)
console.log("Max val ", extractMax())

console.log(heap)
console.log("Max val ", extractMax())

console.log(heap)
