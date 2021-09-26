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
        let retVal = null;
        if (this.length === 0) return null;
        else if (this.length < 2) {
            retVal = this.head.data;
            this.head = null;
            this.tail = null;
        }
        else {
            retVal = this.head.data;
            this.head = this.head.next;
        }

        this.length--;
        return retVal;
    }

    unshift(val) { //INSERT IN THE BEGINNING 
        if (!val) return null;
        let node = new Node(val);
        if (this.length === 0) {
            this.head = node;
            this.tail = node;
        }
        else {
            node.next = this.head;
            this.head.prvs = node;
            this.head = node;
        }
        this.length++;
    }

    get(index) { //GET A NODE AT GIVEN INDEX
        //Optimal implementation would be to check if Index is closer to tail or head and 
        //then decide whether to move from head or tail to reach the index 
        if (index > this.length - 1) return null;
        else {
            let temp;
            //Check which side to start the movement from
            if (index <= this.length / 2) {
                
                temp = this.head;
                
                for (let i = 0; i < index; i++) {
                    temp = temp.next;
                }
            }
            else {
                temp = this.tail;
                for (let i = this.length-1; i > index; i--) {
                    temp = temp.prvs;
                }
            }
            return temp;                
        }
    }

    set(index, val) { //CHANGE NODE VALUE AT GIVEN INDEX
        let temp = this.get(index);
        if(!temp) return null;
        else{
            temp.data = val;
        }
    }

    insert(index,val){ //INSERT AT CURRENT INDEX
        let node = new Node(val);
        if (index === null || index > this.length - 1) return null;
        else if (index === 0) { //Need to insert the head
            node.next = this.head;
            this.head.prvs = node;
            this.head = node;
        }
        else if(index === this.length-1){ //Need to insert in tail
            
            node.next = this.tail;
            this.tail.prvs.next = node;
            node.prvs = this.tail.prvs;
            this.tail.prvs = node;
        }
        else{
            let temp = this.get(index);
            node.next = temp;
            temp.prvs.next = node;
            node.prvs = temp.prvs
            temp.prvs = node;
        }

        this.length++;
    }

    remove(index) {
        if (index === null || index > this.length - 1) return null;
        else if (index === 0) { //Need to remove the head
            this.head = this.head.next;
            this.head.prvs = null;
        }
        else if (index === this.length - 1) { //Need to remove the tail
            this.tail.prvs.next = null;
            this.tail = this.tail.prvs;
        }
        else {
            let temp = this.head
            for (let i = 0; i < index; i++) {
                temp = temp.next;
            }
            temp.prvs.next = temp.next;
            temp.next.prvs = temp.prvs;
        }
        this.length--;
    }

}

let dll = new DoublyLinkedList;

dll.push(2)
dll.push(4)
dll.push(7)
dll.push(8)

dll.unshift(22)
dll.unshift(12)
dll.unshift(9)

dll.remove(2)

dll.pprint()

dll.set(3,23)

dll.insert(4,949)

dll.pprint()

