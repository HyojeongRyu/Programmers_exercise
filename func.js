export {getNumByID,printRes,isEven,makeRandomInt,makeArray,searchMin}

function getNumByID(id){
    var res= Number(document.getElementById(id).value);
    return res;
}
function printRes(content,elementId){   
    //div에 넣기 위해 '\n\'을 <br>로 바꿀 방법이 없을까?
    
    // if(content.includes('\n')){
    //     content.replace(/\n/gi, "<br>")
    //     console.log(content)
    // }
    //정규표현식

    document.getElementById(elementId).innerHTML=`<div>${content}<div>` 
}
function isEven(x){
    var res;
    res= x%2==0?true:false
    return res;
}

function makeRandomInt(){
    let number=Math.floor(Math.random()*10);
    // console.log(number)
    return number;
}

function makeArray(n){
    let count=0;
    let resArray=new Array;
    while(count<n){
        resArray.push(makeRandomInt()+makeRandomInt()+makeRandomInt())
        count++;
    }
    return resArray
}

function searchMin(arr){
    //첫 칸을 무조건 min으로 잡음 => 이게 맞나?
    //선택 정렬에서 min을 찾는 알고리즘
    let min=arr[0]
    let idx=0;
    let n= arr.length;
    for (let i = 1; i < n; i++) {
        console.log(arr.indexOf(min))
        if(arr[i]<min){min=arr[i]; idx=arr.indexOf(min)}
    }
    return idx;
}