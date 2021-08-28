//이 문제에는 표준 입력으로 두 개의 정수 n과 m이 주어집니다.
//별(*) 문자를 이용해 가로의 길이가 n, 세로의 길이가 m인 직사각형 형태를 출력해보세요.
//[제한조건]
//  n과 m은 각각 1000 이하인 자연수입니다.

const myDraw=document.getElementById('myDraw');
const other1=document.getElementById('other1');
const n=Number(document.getElementById('n').value);
const m=Number(document.getElementById('m').value);


//내풀이
myDraw.addEventListener('click',()=>{
    //빈칸이 있을 시 alert 후 빈 칸에 focus
    if(n==0||m==0){
        alert('n과 m 모두 입력하세요.')
        n==0&&document.getElementById('n').focus();
        m==0&&m!=0&&document.getElementById('m').focus();
        return;
    }

     //n과 m의 범위
     if(n!=0&&n>1000||!Number.isInteger(n)){
        alert("n은 1000 이하 자연수여야 합니다.")
         return;}
     if(m!=0&&m>1000||!Number.isInteger(m)){
        alert("n은 1000 이하 자연수여야 합니다.")
         return;}
     
    let res='';
    
    for (let i = 0; i < m; i++) {
    for (let j = 0; j <n; j++) {
        res+='*'
    }
    (i<m-1)&&(res+='\n')
    }
    console.log(res)
})


//다른사람풀이
other1.addEventListener('click',()=>{
    let res2='';
    let n=document.getElementById('n').value;
    let m=document.getElementById('m').value;
    let num=parseInt(n)
    for (let i = 0; i < m; i++) {
        res2+='*'.repeat(num)+'\n'
    }
    console.log(res2)
})