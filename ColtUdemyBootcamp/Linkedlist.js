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
        else{
            returnVal = this.head.data;
            this.head = this.head.next;
        }
        return returnVal;
    }

    unshift(val){ //Insert in the beginning
        let node = new Node(val);
        if(this.head === null){//No element
                this.head = node;
                this.tail = node;
        }
        else{ //One element
            node.next = this.head;
            this.head = node;
        }
    }

    get(index){
        // let retVal = null;
        let temp = this.head;
        for(let i = 0; i<index && temp !== null ; i++){
            temp = temp.next;
        }
        return temp? temp.data : null;
    }

    set(index,val){ //Change the value at a given index
        let i = 0;
        let temp = this.head;
        while(i !== index && temp !== null){
            temp = temp.next;
            i++;
        }
        if(temp !== null) {
            temp.data = val;
        }
    }

    insert(index,val){
        let node = new Node(val);
        if(this.head === null && index === 0){
            this.head = node;
            this.tail = node;
        }
        else{
            let i = 0;
            let temp = this.head;
            while(i !== index-1 && temp !== null){ //index-1 since we need temp just before the index
                i++;
                temp = temp.next;
            }
            if(temp === null) return null;
            else{
                if(temp.next === null){  //Last node
                    this.tail = node;
                }
                node.next = temp.next;
                temp.next = node;
            }
        }
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

ll.insert(5,88)
ll.insert(5,44)

ll.pprint();

ll.set(2,64)


ll.pprint();
