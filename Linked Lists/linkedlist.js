class linkedlist {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    append(value) {
        const node = { data: value, next: null };
        if (this.head == null) {
            this.head = node;
        }
        if (this.tail) {
            this.tail.next = node;
        }
        this.tail = node;
    }

    show() {
        let tempPtr = this.head;
        while (tempPtr) {
            console.log(tempPtr.data, "==> ")
            tempPtr = tempPtr.next;
        }
    }

    toArray() {
        const elements = [];
        let curNode = this.head;
        while (curNode) {
            elements.push(curNode);
            curNode = curNode.next;
        }

        return elements;
    }

    prepend(value) {
        const node = { data: value, next: this.head };

        this.head = node;

        if (this.tail == null) {
            this.tail = node;
        }

    }

    delete(value) {
        if (this.head == null) { //No nodes
            return
        }
        while (this.head && this.head.data === value) {
            this.head = this.head.next;
        }
        if (this.head == this.tail) { //Only 1 node
            this.head == null;
            this.tail == null;
        }
        else {
            let curNode = this.head;
            while (curNode.next) {
                if (curNode.next.data == value) {
                    curNode.next = curNode.next.next;
                }
                else {
                    curNode = curNode.next;
                }
            }
            if(value === this.tail.data){
                this.tail = curNode;       
            }
        }
    }

    insertAfter(after, value){
        const node = {data : value, next : null}
        if(this.head === null || this.tail === null){
            return
        }
        else if(this.tail.data === after){
            this.tail.next = node;
            this.tail = node;
        }
        else{
            let curNode = this.head;
            while(curNode){
                if(curNode.data === after){
                    node.next = curNode.next;
                    curNode.next = node;
                }
                    curNode = curNode.next;
            }
        }
    }
}

var ll = new linkedlist();
ll.append(1)
ll.append(2)
ll.append(3)
ll.append(4)
ll.prepend(5)
ll.prepend(6)
ll.prepend(6)

ll.show();

console.log("\n\n")

ll.insertAfter(4,8)

ll.show();

// console.log(ll.toArray());
console.log(ll.tail)