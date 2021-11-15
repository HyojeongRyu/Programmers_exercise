//n을 x로 나눈 나머지가 1이 되도록 하는 가장 작은 자연수
function solution(n) {
   for (let i = 2; i < n; i++) {
       if((n-1)%i==0){return i}
   }
}
console.log(solution(10))