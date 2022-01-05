function solution(lottos, win_nums) {
    var score={6:1,5:2,4:3,3:4,2:5,1:6,0:6}
    var match=0;
    var luck=0;
    lottos.map(x=>{
        x!=0&&win_nums.includes(x)&&match++
        x==0&&luck++
    })
    return [score[match+luck],score[match]]
}

var lottos=	[44, 1, 0, 0, 31, 25]
var win=[31, 10, 45, 1, 6, 19]
console.log(solution(lottos,win))