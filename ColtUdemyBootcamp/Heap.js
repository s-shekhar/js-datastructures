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
            console.log("Switching " + heap[parentIndex] + " and " + heap[toInsertAt])
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

insert(39)
insert(33)
insert(27)
insert(12)
insert(55)
insert(18)
insert(41)

console.log(heap)


