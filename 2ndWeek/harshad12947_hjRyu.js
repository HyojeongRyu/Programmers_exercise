
const btn=document.getElementById('btn')

btn.addEventListener('click',()=>{
    const x = document.getElementById('x').value
    const length=x.length
    let sum=0;
    for(let i=0; i<length; i++){
        sum+=Number(x[i])
    }
    const res=Number.isInteger(sum/length)
    document.getElementById('result').innerHTML=`<div>${res}<div>`  
})

