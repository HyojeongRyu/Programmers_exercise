//0부터 9까지의 숫자 중 일부가 들어있는
//배열 numbers가 매개변수로 주어집니다.
//numbers에서 찾을 수 없는 0부터 9까지의 숫자를 모두 찾아 더한 수를 return

//0-9 합인 45에서 배열 모든 원소의 합을 뺌
function solution(numbers) {
    return 45- numbers.reduce((acc,cur)=>acc+cur)
}

console.log(solution([1,2,3,4,6,7,8,0]))