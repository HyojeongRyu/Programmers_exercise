
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
    const res=Number.isInteger(sum/length)
    document.getElementById('result').innerHTML=`<div>${res}<div>`  
})

