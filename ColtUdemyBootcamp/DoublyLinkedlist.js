class Node {
    constructor(val) {
        this.next = null;
        this.prvs = null;
        this.data = val;
    }
}

class DoublyLinkedList {

    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    pprint() { //Print the DLL
        let temp = this.head;
        let dll = '';

        while (temp != null) {
            dll = dll + temp.data + ' ==== ';
            temp = temp.next;
        }
        console.log(dll);
    }

    push(val) { //APPEND A VALUE
        let node = new Node(val);

        if (this.head === null) { //No element
            this.head = node;
            this.tail = node;
        }
        else {
            this.tail.next = node;
            node.prvs = this.tail;
            this.tail = node;
        }
        this.length++;
    }


    pop() { //REMOVE FROM END
        let retVal = null;

        if (this.head === null) return null;
        else if (this.length === 1) { //Single element
            retVal = this.head.data;
            this.head = null;
            this.tail = null;
        }
        else {
            retVal = this.tail.data;
            this.tail = this.tail.prvs;
            this.tail.next = null;
        }
        this.length--;
        return retVal;
    }

    shift() { //REMOVE FROM START

    }

    unshift(val) { //INSERT IN THE BEGINNING 

    }

    get(index) { //GET A NODE AT GIVEN INDEX

    }

    set(index, val) { //CHANGE NODE VALUE AT GIVEN INDEX

    }

}

let dll = new DoublyLinkedList;

dll.push(2)
dll.push(4)
dll.push(7)
dll.push(8)

dll.pprint()

dll.pop();
dll.pop();
dll.pop();
dll.pop();
dll.pop();


dll.pprint()