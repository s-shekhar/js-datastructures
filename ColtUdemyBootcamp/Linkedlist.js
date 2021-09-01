class Node {
    constructor(val) {
        this.next = null;
        this.data = val;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    push(val) { //APPEND A VALUE
        let node = new Node(val);

        if (this.tail === null) {
            //First element
            this.head = node;
        }
        else {
            this.tail.next = node;
        }
        this.tail = node;
    }

    pop() { //REMOVE FROM END
        let returnVal;
        if (this.head === null) {
            //List is empty
            return null;
        }
        else if (this.head === this.tail) {
            //List has 1 element
            returnVal = this.head.data;
            this.head = null;
            this.tail = null;
            return returnVal;
        }
        else {
            let temp = this.head;
            while (temp.next.next != null) {
                temp = temp.next;
            }
            //temp is now the penultimate node
            this.tail = temp;  //!IMPORTANT
            returnVal = temp.next.data;
            temp.next = null;
            return returnVal;
        }
    }

    shift() { //REMOVE FROM START
        let returnVal;
        if (this.head === null) {
            //List is empty
            return null;
        }
        else if (this.head === this.tail) {
            //List has 1 element
            returnVal = this.head.data;
            this.head = null;
            this.tail = null;
        }
        else{
            returnVal = this.head.data;
            this.head = this.head.next;
        }
        return returnVal;
    }

    pprint() {
        let temp = this.head;
        while (temp != null) {
            console.log(temp.data, '---> ')
            temp = temp.next;
        }
    }
}

let ll = new LinkedList();

ll.push(3);
ll.push(4);
ll.push(5);
ll.push(6);

ll.pprint();
console.log("POPPING ", ll.pop());
ll.pprint();
console.log("SHIFTING ",ll.shift());
ll.push(88);
console.log("SHIFTING ",ll.shift());
ll.pprint();
