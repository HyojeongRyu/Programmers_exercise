//마라톤에 참여한 선수들의 이름이 담긴 배열 participant와
//완주한 선수들의 이름이 담긴 배열 completion이 주어질 때,
//완주하지 못한 선수의 이름을 return 하도록 solution 함수를 작성해주세요.

// function solution(participant, completion) {
//     participant.sort()
//     completion.sort()
//     return participant[participant.findIndex((v,i)=>v!=completion[i])]
// }

var part=["leo", "kiki", "eden"]
var comp=["eden", "kiki"]
console.log(solution(part,comp))