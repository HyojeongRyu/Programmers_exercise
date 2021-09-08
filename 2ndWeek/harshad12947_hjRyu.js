//양의 정수 x가 하샤드 수이려면 x의 자릿수의 합으로 x가 나누어져야 합니다.
//예를 들어 18의 자릿수 합은 1+8=9이고, 18은 9로 나누어 떨어지므로 18은 하샤드 수입니다.
//자연수 x를 입력받아 x가 하샤드 수인지 아닌지 검사하는 함수, solution을 완성해주세요.
//제한 조건
//x는 1 이상, 10000 이하인 정수입니다.

import { printRes } from "../func.js"

const btn=document.getElementById('btn')

btn.addEventListener('click',()=>{
    const x = document.getElementById('x').value
    const length=x.length
    if(Number(x)>10000||Number(x)<1){
        alert('x는 1 이상, 10000 이하인 정수여야합니다')
        return;
    }
    let sum=0;
    for(let i=0; i<length; i++){
        sum+=Number(x[i])
    }
    const res=Number.isInteger(x/sum)
    printRes(res,"result")
})

