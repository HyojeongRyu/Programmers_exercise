import {getNumByID, printRes} from '../func.js'
document.getElementById('btn').addEventListener('click',()=>{
    // const num=document.getElementById('num').value
    // let res=0;
    // for(let n in num){
    //    res+=Number(num[n])
    // }
    // printRes(res,'result')

    let num=getNumByID('num')
    if(num>10000000000){alert('올바른 수를 입력하세요'); return}
    let sum=0;
    while(num>0){
        sum+=num%10
        num=Math.floor(num/10)
    }
    printRes(sum,'result')
})