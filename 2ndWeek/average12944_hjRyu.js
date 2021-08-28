//정수를 담고 있는 배열 arr의 평균값을 return하는 함수를 완성해보세요.
//제한사항
//arr은 길이 1 이상, 100 이하인 배열입니다.
//arr의 원소는 -10,000 이상 10,000 이하인 정수입니다.

const btn = document.getElementsByClassName('btn')


btn[0].addEventListener('click',()=>{
    const n= Number(document.getElementById('n').value)
    if(n<=0||n>100){alert('1~100 사이의 수를 입력해주세요'); return;}
    const arr=makeArray(n);
    printHtml(arr,'array')
    const avg=getAverage(arr,n);
    printHtml(avg,'average')
})

//랜덤숫자로 [n][n]크기 행렬 생성
function makeArray(n){
    const resArray=new Array
    let count=0;
    while(count<n){
        resArray.push(makeRandomInt())
        count++;
    }
    console.log(resArray)   
    return resArray
    
}

//랜덤 숫자 만들기 (한자리수로 설정)
function makeRandomInt(){
    let number=-10000+Math.floor(Math.random()*20001);
    console.log(number)
    return number;
}

//함수를 화면에 출력하는 함수
function printHtml(content,elementClassName){   
 document.getElementsByClassName(elementClassName)[0].innerHTML=`<div>${content}<div>`  
}

function getAverage(arr,n){
    let sum=0;
    for(let n in arr){
        sum+=arr[n]
    }
    const avg=Math.round(sum/n)
    return avg;
}