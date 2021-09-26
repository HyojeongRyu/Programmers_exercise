import {getNumByID, makeArray,  printRes,searchMin} from '../func.js'


document.getElementById('btn').addEventListener('click',()=>{
    const number=document.getElementById('n').value    // console.log("만들어진 배열: ", arr)
    const arr=new Array;
    //글자 split 후 배열 arr 생성
    for(let i=0; i<number.length;i++){
        arr.push(Number(number.split('')[i]))
    }

    // //bubble sort
    // const bSort = bubble(arr);
    // let bRes = new String;
    // for (let i = 0; i < bSort.length; i++) {
    //     bRes+=String(bSort[i])
    // }
    // console.log("정렬된 배열: ", arr)
    // printRes(bRes,'bubble')

    //selection sort
    const sSort = select(arr,0);
    printRes(sSort,'select')

    //insert sort
    // const iSort= check(arr,1);
    // printRes(iSort,'insert')
})
    
const bubble= arr=>{
    let idx=0
    let count=0;
    let res;
    while(arr[idx+1]){
        if(arr[idx]<arr[idx+1]){
            res=swap(arr,idx,idx+1)
            arr=res;
            count++
        }
        idx++
    }
    if(count!=0){bubble(arr)}
    return arr;
}

const swap = (arr,p,n)=>{
    //포인터?  
    // let resArr=arr
    // resArr[idx]=arr[idx+1];
    // resArr[idx+1]=arr[idx];
    // return resArr;
    let pre=arr[p]
    let next=arr[n]
    let resArr=arr;
    resArr[p]=next;
    resArr[n]=pre;
    return resArr;
}

const select= (arr,space)=>{
    // let res=new Array;
    let idx=searchMin(arr)
    swap(arr,idx,space)
    space++
    space<=arr.length&&select(arr,space)
    return arr;
}

// const insert=arr=>{
    
// }

// const check = (arr,idx)=>{
//     const l=arr.length
//     if(arr[idx]<arr[idx-1]){
//         let res=swap(arr,idx-1);
//         check(res,idx)}
//     else{idx++; check(arr,idx)}
//     if(l<idx){console.log(arr); return arr;}
// } 



