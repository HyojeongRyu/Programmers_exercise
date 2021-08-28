//행렬의 덧셈은 행과 열의 크기가 같은 두 행렬의 같은 행, 같은 열의 값을 서로 더한 결과가 됩니다.
//2개의 행렬 arr1과 arr2를 입력받아, 행렬 덧셈의 결과를 반환하는 함수를 완성해주세요.
//제한 조건: 행렬 arr1, arr2의 행과 열의 길이는 500을 넘지 않습니다.

const btn = document.getElementsByClassName('btn')


btn[0].addEventListener('click',()=>{
    const n= Number(document.getElementById('n').value)
    if(n<=0||n>500){alert('1~499 사이의 수를 입력해주세요'); return;}
    const firstArray=makeArray(n);
    const secondArray=makeArray(n);
    printArray(firstArray,'1stArray')
    printArray(secondArray,'2ndArray')
})

//랜덤숫자로 [n][n]크기 행렬 생성
function makeArray(n){
    const resArray=new Array

    for (let i = 0; i < n; i++) {
        let tempArray=new Array
        for (let j = 0; j < n; j++) {
            tempArray.push(makeRandomInt())
        }
        resArray.push(tempArray)
    }
    return resArray
}

//랜덤 숫자 만들기 (한자리수로 설정)
function makeRandomInt(){
    let number=Math.floor(Math.random()*10);
    console.log(number)
    return number;
}

//함수를 화면에 출력하는 함수
function printArray(arr,elementClassName){
    var eArr = arr[Symbol.iterator]();   
    for(let l of eArr){
       document.getElementsByClassName(elementClassName)[0].innerHTML+=`<div>${l}<div>`
    }
}