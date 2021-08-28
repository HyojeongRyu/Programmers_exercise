//전화번호가 문자열 phone_number로 주어졌을 때,
//전화번호의 뒷 4자리를 제외한 나머지 숫자를 전부 *으로 가린 문자열을 리턴하는 함수를 완성해주세요.
//제한조건: s는 길이 4 이상, 20이하인 문자열입니다.

const btn=document.getElementById('btn')
btn.addEventListener('click',()=>{
    const number=document.getElementById('number').value
    const l=number.length
    //길이 예외처리
    if(l<4||l>20){
        alert('길이 4 이상, 20이하로 입력해주세요')
        return;
    }
    //기호가 포함됐을때 예외처리
    if(isNaN(Number(document.getElementById('number').value))){
        alert('숫자만 입력하세요')
        return;
    }
    var slicedNum=number;
    for (let i = 0; i < l; i++) {
        if(i>=l-4){
            slicedNum= slicedNum.slice(0,-1)
        }
    }
    slicedNum+='****'
    document.getElementById('result').innerHTML+=`<div>${slicedNum}<div>`
    console.log(slicedNum)
    console.log(number)
})