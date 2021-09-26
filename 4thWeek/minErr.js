import { createRequire } from "module";
import {makeRandomInt} from '../func.js'
const require = createRequire(import.meta.url);
const readline=require("readline");

const rl =readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let size;

console.log("배열 크기를 입력하세요")

rl.on("line",function(line){
    size=line;
    //size 크기의 배열 생성
    const resArray=new Array
    let count=0;
    while(count<size){
        resArray.push(makeRandomInt())
        count++;
    }
    const arr=resArray
    console.log("만들어진 배열: ", arr)
    bubble(arr);
    console.log("정렬된 배열: ", arr)
    rl.close();
}).on("close", function(){
    
    process.exit();
})

const bubble= arr=>{
    let idx,count=0;
    let res;
    while(arr[idx++]!=undefined){
        if(arr[idx]>arr[idx++]){
            res=swap(arr,idx)
            arr=res;
            idx++
            count++
        }
    }
    if(count===0){bubble(arr)}
}

const swap = (arr,idx)=>{
    let resArr=arr
    resArr[idx]=arr[idx++];
    resArr[idx++]=arr[idx];
    return resArr;
}


    



