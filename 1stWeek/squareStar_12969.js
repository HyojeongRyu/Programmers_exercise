//이 문제에는 표준 입력으로 두 개의 정수 n과 m이 주어집니다.
//별(*) 문자를 이용해 가로의 길이가 n, 세로의 길이가 m인 직사각형 형태를 출력해보세요.
//[제한조건]
//  n과 m은 각각 1000 이하인 자연수입니다.
import { getNumByID,printRes } from "../func.js";

const myDraw=document.getElementById('myDraw');
const other1=document.getElementById('other1');

//내풀이
myDraw.addEventListener('click',()=>{
    const n= getNumByID('n');
    const m= getNumByID('m');
    
     //n과 m의 범위
     if(n==0||n>1000||!Number.isInteger(n)){
        alert("n과 m은 1000 이하 자연수여야 합니다.")
        document.getElementById('n').focus();
         return;}
     if(n!=0&&m==0||m>1000||!Number.isInteger(m)){
        alert("n과 m은 1000 이하 자연수여야 합니다.")
        document.getElementById('m').focus();
         return;}
    var square='';
    for(let i=0; i<m; i++){
        for(let j=0; j<n; j++){
        square+='*'
    }
    square+='<br>'
    }
    console.log(square)
    printRes(square,'res')
})

//다른사람풀이
other1.addEventListener('click',()=>{
    let res2='';
    let n=getNumByID('n');
    let m=getNumByID('m');
    for (let i = 0; i < m; i++) {
        res2+='*'.repeat(n)+'\n'
    }
    console.log(res2)
})