function solution(d, budget) {
    let count=0;
    d.sort((a,b)=>a-b);
    var sum=0;
    for (let i = 0; i < d.length; i++) {
        sum+=d[i];
        if(sum>budget)break;
        count++
    }
    return count;
}

const d=[2,2,3,3]
const budget=9
console.log(solution(d,budget))
