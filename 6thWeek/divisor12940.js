solution(12)

function solution(n) {
    if(n>3000){return;}
    let d=new Array;
    for (let i = 0; i <=n; i++) {
        if(n%i==0){
            d.push(i)
        }
    }
    console.log(d)
    let answer;
   answer=d.reduce((prev,cur)=>{
       return prev+cur;
   })
   console.log(answer)
    return answer;
}