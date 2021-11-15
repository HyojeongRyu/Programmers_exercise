//놀이기구를 N 번 째 이용한다면 원래 이용료의 N배를 받기로 하였습니다. 
//놀이기구를 count번 타게 되면 현재 자신이 가지고 있는 금액에서 얼마가 모자라는지를 return

//등차수열 공식
function solution(price, money, count) {
    var answer=money-(count*(2*price+(count-1)*price))/2;
    return answer<0?Math.abs(answer):0;
}

// //가우스 공식
// function solution(price,money,count) {
//     var answer= money-price*count*(count+1)/2
//     return answer<0?Math.abs(answer):0
// }

console.log(solution(3,20,4))