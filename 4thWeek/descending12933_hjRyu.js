import {getNumByID, makeArray,  printRes} from '../func.js'


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

    // //selection sort
    // const sSort = select(arr,0);
    // printRes(sSort,'select')

    // //insert sort
    // const iSort= insert(arr);
    // printRes(iSort,'insert')

    //quick sort
    const qSort = quick(arr);
    printRes(qSort,'quick')
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

//p와 n끼리 자리를 바꾸는 함수
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

//arr[0] ~ arr[end]까지의 최소값을 찾아 인덱스를 반환
function searchMin(arr,end){
    let min=arr[0]
    let mIdx;
    for (let i = 1; i < end+1; i++) {
        console.log(arr.indexOf(min))
        if(arr[i]<min){
            min=arr[i];
        }
    }
    mIdx=arr.indexOf(min)
    return mIdx;
}

//선택정렬
const select= (arr)=>{
    let idx=arr.length-1
    while(idx!==0){
        let mIdx=searchMin(arr,idx)
        swap(arr,idx,mIdx)
        idx--
    }
    return arr;
}

//삽입정렬
const insert=arr=>{
    for (let i = 1; i < arr.length; i++) {
        if(arr[i]>arr[i-1]){
            let j=i;
            while(arr[j]>arr[j-1]){swap(arr,j, j-1); j--}
        }
    }
    return arr;
}

//퀵정렬
const quick=arr=>{
    if(arr.length<2){return arr}
    let start=0;
        let end=arr.length-1;
        let pivot=parseInt(arr.length/2);
    while(start<end){
        while(arr[start]>arr[pivot]){
            start++
        }
        while(arr[end]<arr[pivot]){
            end--
        }
        if(arr[start]<arr[pivot]&&arr[end]>arr[pivot]){
            swap(arr,start,end)
        }
        start++
        end--
    }
    let smaller=new Array;
    let bigger=new Array;
    let reArr=new Array;
    for (let i = 0; i < arr.length; i++) {
        i<start&&bigger.push(arr[i])
        i>=start&&smaller.push(arr[i])
    }
    // reArr.push(smaller)
    // reArr.push(bigger)
    // reArr.forEach(element => {
    //     if(element.length==1){console.log(element); return}
    //     quick(element)
    // });
    return[quick(smaller),quick(bigger)]
}


