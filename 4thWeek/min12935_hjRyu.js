import { getNumByID, makeArray, printRes } from "../func.js";

document.getElementById('btn').addEventListener('click',()=>{
    const n= getNumByID('n')
    //행렬 생성
    const arr=makeArray(n)
    printRes(arr,'array')
    
    let idx=searchMin(arr)
    //min splice
    arr.splice(idx,1)
    arr.length==0&&arr.push(-1)
    printRes(arr,'result')
})
   //배열 전에 순회 하여 min보다 작으면 min (선택정렬)
function searchMin(arr){
    //첫 칸을 무조건 min으로 잡음
    let min=arr[0]
    let idx=0;
    for (let i = 1; i < arr.length; i++) {
        console.log(arr.indexOf(min))
        if(arr[i]<min){min=arr[i]; idx=arr.indexOf(min)}
    }
    return idx;
}