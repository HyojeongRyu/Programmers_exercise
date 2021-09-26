class Node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}

class lList{
    constructor(){
        this.head=null;
        this.size=0;
    }

    add(data){
        var node= new Node(data)
        var current=this.head;

        if(!current){
            head=node
        }
        else{
            while(!current.next){
                current=current.next
            }
            current.next=node;
        }
        size++;
    }

    delete(data){
        var current=this.head;
        if(current.data===data){
            this.head=current.next;
        }
        while(current.next.data!=data){
            current=current.next;
            var temp=current
        }
    }


}