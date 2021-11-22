// function solution(n) {
//     const trit=[];
//     while(n!=0){
//         trit.push(n%3)
//         n=Math.floor(n/3)
//     }
//     trit.reverse();
//     let answer=0;
//     trit.map((x,index)=>{
//         answer+=x*Math.pow(3,index)
//     })
//     return answer
// }

//reduce함수
function solution(n) {
    const trit=[];
    while(n!=0){
        trit.push(n%3)
        n=Math.floor(n/3)
    }
    return trit.reverse().reduce((acc,cur,idx)=>
        acc+cur*Math.pow(3,idx)
    ); 
}
console.log(solution(45))