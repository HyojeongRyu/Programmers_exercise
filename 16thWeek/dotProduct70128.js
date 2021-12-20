//a와 b의 내적을 return

// function solution(a, b) {
//     return a.map((v,i)=>{
//         return v*b[i]
//     }).reduce((prev,cur)=>prev+cur)
// }

function solution(a, b) {
    return a.reduce((prev,cur,i)=> prev+cur*b[i],0)
}
console.log(solution([1,2,3,4],[-3,-1,0,2]))
