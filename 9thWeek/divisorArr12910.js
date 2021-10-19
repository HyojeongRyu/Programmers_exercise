// function solution(arr, divisor) {
//     var answer = [];
//     arr.map(el=>{
//         el%divisor==0&&answer.push(el)
//     })
//     !answer.length?answer.push(-1): answer.sort((a,b)=>{return a-b})
    
//     return answer;
// }

//filter함수
function solution(arr, divisor) {
    var answer = arr.filter(el=>el%divisor==0);
    !answer.length?answer.push(-1): answer.sort((a,b)=>{return a-b})
    
    return answer;
}