function solution(s) {
    var answer = '';
    answer+=s.length%2==0?s[s.length/2-1]:''
    answer+=s[Math.floor(s.length/2)]
    return answer;
}

solution("qwer")

// //substr사용
// function solution(s) {
//     return s.length%2==0?s.substr(s.length/2-1,2):s.substr(Math.floor(s.length/2),1)
   
    
// }