// function solution(a, b) {
//     var answer = 0;
//     var count=Math.abs(a-b)
//     while(count-->=0){
//         answer+=a;
//         b>a?a++:a--
//     }
//     return answer;
// }

//가우스
function solution(a, b) {
    return (a+b)*(Math.abs(a-b)+1)/2;
}