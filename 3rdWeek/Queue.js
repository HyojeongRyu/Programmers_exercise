const Queue = function(){
    this.first=null;
    this.size=0;
    
    this.enqueue=function(data){
        var node = new Node(data);
        if(!this.first){
            this.first=node;
        }else{
            n=this.first;
            while(n.next){
                n=n.next;
            }
            n.next=node;
        }
    
        this.size++;
        console.log(node)
        return node;
    }
    
    this.dequeue=function(){
        temp=this.first;
        this.first=this.first.next;
        this.size--;
        console.log(temp)
        return temp;
    }

    this.isEmpty=function(){
        var res;
        if(this.first==null){res = true;}
        else{res=false;}
        console.log(res)
        return res
    }

    this.isFull=function(){
        n=this.first;
        var count=1;
        var res;
        while(n.next){
            n=n.next
            count++;
        }
        if(this.size==count){
            res=true
        }else{
            res=false;
        }
        console.log(res)
        return res;
    }
}

const Node = function(data){
    this.data=data;
    this.next=null;
}

var test=new Queue;
test.enqueue(1)
test.isEmpty()
test.isFull()