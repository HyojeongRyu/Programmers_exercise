class Stack {
    constructor() {
        this.top = -1;
        this.arr = [];
    }
  
    push(val) {
        this.arr[++this.top] = val;
    }

    pop() {
        if(this.top < 0) {
            const res="It's already empty"
        } else {
            let popVal = this.arr[this.top];
            this.arr = this.arr.slice(0, this.top);
            this.top--;
            const res=arr;
        }
        return res;
    }

    peek() {
        return this.arr[this.arr.length-1];
    }
    
    clear() {
        this.top = -1;
        this.arr = [];
    }
    
    print() {
        for(let i=0; i<this.arr.length; i++) {
            console.log(this.arr);
        }
    }
}