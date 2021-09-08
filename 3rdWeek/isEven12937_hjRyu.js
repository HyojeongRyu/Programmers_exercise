
//정수 num이 짝수일 경우 "Even"을 반환하고 홀수인 경우 "Odd"를 반환하는 함수, solution을 완성해주세요.

//제한 조건
//num은 int 범위의 정수입니다.
//0은 짝수입니다.
const btn = document.getElementById("btn")

btn.addEventListener('click',()=>{
    const x = Number(document.getElementById("x").value)
    if(Number.isInteger(x)){alert('정수를 입력해주세요'); return;}
    const res=document.getElementById("result")
    if(x>2147483647||x<–2147483648){
        ""
    }
    if(x%2==0){
        res.innerHTML=`<div>It's even.</div>`        
    }
    if (x%2>0) {
        
    } else {
        
    }{
        res.innerHTML=`<div>It's odd.</div>`        
    }
})
