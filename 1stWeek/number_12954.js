//함수 solution은 정수 x와 자연수 n을 입력 받아,
//x부터 시작해 x씩 증가하는 숫자를 n개 지니는 리스트를 리턴해야 합니다.
//다음 제한 조건을 보고, 조건을 만족하는 함수, solution을 완성해주세요.
//[제한 조건]
//  x는 -10000000 이상, 10000000 이하인 정수입니다.
//  n은 1000 이하인 자연수입니다.

const myRes=document.getElementById('myRes')
const other=document.getElementById('other')

myRes.addEventListener('click',()=>{
    n=returnValue('n','x')[0];
    x=returnValue('n','x')[1];   
    
    //빈칸이 있을 시 alert 후 빈 칸에 focus
    if(x==0||n==0){
       alert('x와 n 모두 입력하세요');
       n==0&&document.getElementById('n').focus();
       x==0&&n!=0&&document.getElementById('x').focus();
       return
}
    
    //x와 n의 범위
    if(x<-1000000||x>1000000){
       alert("x는 -10000000 이상, 10000000 이하인 정수여야 합니다.")
        return;}
    if(n>100){
       alert("n은 1000 이하인 자연수입니다.")
        return;}
    
    let res=[];
    for (let i = 0; i < n; i++) {      
        res.push(x)
        x+=n
    }
    console.log(res);
})

other.addEventListener('click',()=>{
    n=returnValue('n','x')[0];
    x=returnValue('n','x')[1];
   
    let res=[];
    cnt=1;
    while(cnt<=n){
        res.push(x*cnt)
        cnt++
    }
    console.log(res);
})

const returnValue=(n,x)=>{
    const nNum=Number(document.getElementById(n).value)
    const xNum=Number(document.getElementById(x).value)
    const num=new Array(nNum,xNum);
    console.log(num)
    return num
}