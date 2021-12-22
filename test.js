const a= 1;

function test(){
    var a= 2;
    
}
console.log(a);
test()

const obj={
    local:()=>{
        console.log(this)
    }
}