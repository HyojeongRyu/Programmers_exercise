//두 수를 입력받아 두 수의 최대공약수와 최소공배수를 반환하는 함수, solution을 완성해 보세요.
//배열의 맨 앞에 최대공약수, 그다음 최소공배수를 넣어 반환하면 됩니다.
//예를 들어 두 수 3, 12의 최대공약수는 3, 최소공배수는 12이므로
//solution(3, 12)는 [3, 12]를 반환해야 합니다.

import {printRes, getNumByID} from "../func.js"

const btn = document.getElementById('btn').addEventListener('click',()=>{
    const n= getNumByID('n')
    const m= getNumByID('m')
    
    const res = new Array;
    res.push(euclidean(n,m))
    res.push(lcm(n,m,res[0]))

    printRes(res,'res')
})
//최대공약수 (유클리드 알고리즘)
function euclidean(x,y){
    let n,m,res;
    if(x>=y){n=x; m=y;}
    else{n=y; m=x}
    n%m==0?res=m:res=euclidean(m,n%m)
    return res;
}
//최소공배수
function lcm(n,m,gcd){
    let res=n*m/gcd
    return res
}