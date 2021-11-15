function solution(numbers) {
    var answer = [];
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i+1; j < numbers.length; j++) {
            answer.push(numbers[i]+numbers[j])
        }
       
    }
    answer.sort((a,b)=>{return a-b})
    for (let i = 0; i < answer.length; i++) {
        if(answer[i]==answer[i+1]||answer[i]==answer[i-1]){answer.splice(i,1)}
    }
    return answer;
}
console.log(solution([5,0,2,7]))