//1-1. 입력된 수가 짝수라면 2로 나눕니다. 
//1-2. 입력된 수가 홀수라면 3을 곱하고 1을 더합니다.
//2. 결과로 나온 수에 같은 작업을 1이 될 때까지 반복합니다.
//위 작업을 몇 번이나 반복해야하는지 반환하는 함수, solution을 완성해 주세요.
//단, 작업을 500번을 반복해도 1이 되지 않는다면 –1을 반환해 주세요.

import {printRes, getNumByID, isEven} from "../func.js"
// import isEven from "./isEven12937_hjRyu.js"

const btn=document.getElementById('btn').addEventListener('click',()=>{
    const x = getNumByID('x');
    const res= collatz(x)
    printRes(res,'result')
})

//res, count, temp 이게 최선일까?
function collatz(x){
    let count=0
    let res;
    let temp;
    while(x!=1&&count<500){
        if(isEven(x)){
            temp=x/2
        }
        else{
            temp=x*3+1
        }
        count++;
        x=temp
        res=count
    }
    if(count>=500){res=-1}
    return res
}