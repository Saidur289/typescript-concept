class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
class LinkedList{
    constructor(){
        this.head=null;
        this.tail=null;
        this.length=0
    }
    append(value){
        let newNode = new Node(value);
        if(this.head === null){
            this.head = newNode;
            this.tail = newNode
        }
        else{
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length ++
        return this

    }
    prepend(value){
        const newNode = new Node(value)
        if(this.head === null){
            this.tail = newNode
            this.head = newNode
        }else{
            newNode.next = this.head
            this.head = newNode
        }
        this.length ++;
        return this;
    }
    insert(index,value){
        if(index < 0 || index >this.length){
            console.log("Invalid Input");
            return
        }
        if(index === 0){
          return  this.prepend(value)
        }
        else if(index === this.length ){
         return   this.append(value)
        }
        let currentNode = this._traverseNode(index - 1);
        let holdingNode = currentNode.next
        let newNode = new Node(value)
        currentNode.next = newNode
        newNode.next = holdingNode
        return this.length++

        
    }
    remove(index){
        if(index === 0){
            let removeValue = this.head.value;
            this.head = this.head.next 
            if(this.length === 1){
                this.tail = null
            }
            this.length--
            return removeValue
        }
        const holdingNode = this._traverseNode(index - 1)
        let nodeToRemove = holdingNode.next 
        // its mean last index
        if(holdingNode.next === null){
            this.tail = holdingNode
        }
        this.length--
        return nodeToRemove.value
        
    }
    _traverseNode(index){
        let count = 0;
        let currentNode = this.head
        console.log(currentNode, "Before initial");
        while(count !== index){
            currentNode = currentNode.next;
             console.log(currentNode, "After initial");
             console.log(count, index, "here count and index");
            count++
        }
         console.log(currentNode, "Before initial");
        return currentNode;
    }
    print(){
        let node = this.head 
        let str = ""
        while(node){
            str += node.value + "=>" 
            node =node.next
        }
        console.log(str + "null");
    }
}
const linkedList = new LinkedList()
linkedList.append("A")
linkedList.append("B")
linkedList.append("C")
linkedList.append("E")
linkedList.print()
linkedList.insert(3, "D")
linkedList.print()
console.log(linkedList.remove(3));
linkedList.print()