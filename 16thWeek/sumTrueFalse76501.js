function solution(absolutes, signs,idx) {
    return absolutes.reduce((acc,cur,idx)=>acc+(signs[idx]?cur:-cur),0);
}

console.log(solution([4,7,12],[true,false,true]))