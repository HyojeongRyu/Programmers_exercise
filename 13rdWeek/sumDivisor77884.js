function solution(left, right) {
    let answer=0;
    for (let num = left; num <= right; num++) {
        answer+=Number.isInteger(Math.sqrt(num))?-num:num
    }
    return answer
}

console.log(solution(13,17))