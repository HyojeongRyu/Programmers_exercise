function solution(arr)
{
    var answer = [];
    answer.push(arr[0])
    //수정
    for (let i = 0; i < arr.length; i++) {
        if(answer[answer.length-1]!=arr[i]){
            answer.push(arr[i]);
        } 
    }
    
    // //원래 풀이
    // for (let i = 0; i < arr.length; i++) {
    //     if(!answer[0]||answer[answer.length-1]!=arr[i]){
    //         answer.push(arr[i]);
    //     } 
    // }
    // return answer;
}
console.log(solution([1,1,3,3,0,1,1,]))