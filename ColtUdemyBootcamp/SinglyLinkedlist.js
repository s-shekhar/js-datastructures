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

    pprint() {
        let temp = this.head;
        let string = '';
        while (temp != null) {
            string += temp.data + ' ---> ';
            temp = temp.next;
        }
        console.log(string)
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
        else {
            returnVal = this.head.data;
            this.head = this.head.next;
        }
        return returnVal;
    }

    unshift(val) { //INSERT IN THE BEGINNING 
        let node = new Node(val);
        if (this.head === null) {//No element
            this.head = node;
            this.tail = node;
        }
        else { //One element
            node.next = this.head;
            this.head = node;
        }
    }

    get(index) { //GET A NODE AT GIVEN INDEX
        let temp = this.head;
        for (let i = 0; i < index && temp !== null; i++) {
            temp = temp.next;
        }
        return temp ? temp.data : null;
    }

    set(index, val) { //CHANGE NODE VALUE AT GIVEN INDEX
        let i = 0;
        let temp = this.head;
        while (i !== index && temp !== null) {
            temp = temp.next;
            i++;
        }
        if (temp !== null) {
            temp.data = val;
        }
    }

    insert(index, val) { //INSERT A NODE AT GIVEN INDEX
        if (index < 0) {
            console.log("Index value cannot be negative ");
            return
        }
        let node = new Node(val);
        if (this.head === null && index === 0) {
            this.head = node;
            this.tail = node;
        }
        else {
            let i = 0;
            let temp = this.head;
            while (i !== index - 1 && temp !== null) { //index-1 since we need temp just before the index
                i++;
                temp = temp.next;
            }
            if (temp === null) return null;
            else {
                if (temp.next === null) {  //Last node
                    this.tail = node;
                }
                node.next = temp.next;
                temp.next = node;
            }
        }
    }


    remove(index) { //REMOVE A NODE FROM GIVEN INDEX
        if (index < 0) {
            console.log("Index value cannot be negative ");
            return
        }

        if (this.head === null) return null; // no element
        else if (this.head === this.tail && index === 0) { // 1 element and that is to be removed
            this.head = null;
            this.tail = null;
        }
        else if (index === 0) { //Remove head
            this.head = this.head.next;
        }
        else {
            let i = 1;
            let temp = this.head;

            while (temp.next.next !== null && i !== index) {
                temp = temp.next;
                i++;
            }
            if (i === index) {
                temp.next = temp.next.next;
            }
            else { //Since temp.next.next === null, we need to delete tail
                temp.next = null;
                this.tail = temp;
            }
        }
    }

    reverse() { //REVERSE A LINKED LIST IN PLACE
        let p1 = this.head;
        let p2 = p1.next;
        let p3 = p2.next;

        while (p3 !== null) {
            p2.next = p1;
            if (p1 === this.head) {
                p1.next = null;
                this.tail = p1;
            }
            p1 = p2;
            p2 = p3;
            p3 = p2.next
            // console.log(p3)
        }
        p2.next = p1;
        this.head = p2;
    }
}

let ll = new LinkedList();

ll.push(3);
ll.push(4);
ll.push(5);
ll.push(6);
ll.push(7);

// ll.pprint();
// console.log("POPPING ", ll.pop());
// ll.pprint();
// console.log("SHIFTING ",ll.shift());
// ll.push(88);
// console.log("SHIFTING ",ll.shift());
// ll.pprint();

ll.insert(5, 88)
ll.insert(5, 44)
ll.set(2, 64)

ll.pprint();

ll.reverse();
ll.remove(2)

ll.pprint();
