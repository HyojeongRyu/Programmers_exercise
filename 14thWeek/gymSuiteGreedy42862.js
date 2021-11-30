//바로 앞번호의 학생이나 바로 뒷번호의 학생에게만 체육복을 빌려줄 수 있습니다.
//예를 들어, 4번 학생은 3번 학생이나 5번 학생에게만 체육복을 빌려줄 수 있습니다.
//체육복이 없으면 수업을 들을 수 없기 때문에 체육복을 적절히 빌려 최대한 많은 학생이 체육수업을 들어야 합니다.
//전체 학생의 수 n, 체육복을 도난당한 학생들의 번호가 담긴 배열 lost, 여벌의 체육복을 가져온 학생들의 번호가 담긴 배열 spare
//체육수업을 들을 수 있는 학생의 최댓값을 return

function solution(n, lost, spare) {
    let borrow=0;
    var Lost=lost.sort((a,b)=>a-b).filter(x=>!spare.includes(x))
    var Spare=spare.sort((a,b)=>a-b).filter(x=>!lost.includes(x))
    Lost.map(x=>{
        for (let j = 0; j < Spare.length; j++) {
            if(x+1==Spare[j]||x-1==Spare[j]){
                Spare.splice(j,1)
                borrow++
                break;
            }
        }
    })
    return n-(Lost.length-borrow)
}
const n=2;
const lost=[2,5]
const spare=[2,5]
console.log(solution(n,lost,spare))