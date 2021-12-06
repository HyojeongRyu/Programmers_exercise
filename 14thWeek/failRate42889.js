//전체 스테이지의 개수 N,
//게임을 이용하는 사용자가 현재 멈춰있는 스테이지의 번호가 담긴 배열 stages
//실패율이 높은 스테이지부터 내림차순으로
//스테이지의 번호가 담겨있는 배열을 return

function solution(N, stages) {
    var rate=[]
    for (let i = 1; i < N+1; i++) {
        var challenger=0;
        var fail=0;
        stages.forEach(element => {
            if(element>=i){
                challenger++
                if(element==i){fail++}
            }
        });
        rate.push({stage:i,rate:fail/challenger})
    }
    rate.sort((a,b)=>b.rate-a.rate)
    return rate.map(x=>x.stage)
}

const N=5;
const stages=[2,1,2,6,2,4,3,3]
console.log(solution(N,stages))