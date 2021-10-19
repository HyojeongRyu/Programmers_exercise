//문자열 s에 나타나는 문자를 큰것부터 작은 순으로 정렬해
//새로운 문자열을 리턴하는 함수, solution을 완성해주세요.
//s는 영문 대소문자로만 구성되어 있으며,
//대문자는 소문자보다 작은 것으로 간주합니다.
//str은 길이 1 이상인 문자열입니다.

// //선택정렬
// function solution(s) {
//     var code = new Array
//     var answer='';
//     for (let i = 0; i < s.length; i++) {
//         code.push(s.charCodeAt(i))
//     }
//     for (let i = 0; i < code.length; i++) {
//         var maxIdx= i;
//         var idx=i+1
//         //search maxIdx
//         while(code[idx]){
//             if(code[maxIdx]<code[idx]){maxIdx=idx}
//             idx++;
//         }
//         swap(code,i,maxIdx)
//     }
//     // answer+=code.map(x=>{String.fromCharCode(x)})
//     code.map(x=>{answer+=String.fromCharCode(x)})
//     return answer
// }

// function swap(arr,prev,next) {
//     var temp=arr[prev]
//     arr[prev]=arr[next];
//     arr[next]=temp;
// }

function solution(s){
    return s.split('')
    .sort()
    .reverse()
    .join('')
}

console.log(solution('abc'))



