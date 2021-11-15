//모든 명함의 가로 길이와 세로 길이를 나타내는
//2차원 배열 sizes가 매개변수로 주어집니다.
//모든 명함을 수납할 수 있는 가장 작은 지갑을 만들 때,
//지갑의 크기를 return 하도록 solution 함수를 완성해주세요.
// function solution(sizes) {
//     const width=[];
//     const height=[];
//     sizes.map(x=>{
//         x.sort((a,b)=>a-b)
//         width.push(x[0])
//         height.push(x[1])
//     })
//     return Math.max(...width)*Math.max(...height)
// }

function solution(sizes) {
    let maxW=0;
    let maxH=0;
    sizes.map(x=>{
        const [w,h]=x.sort((a,b)=>a-b)
        if(maxW<w){maxW=w}
        if(maxH<h){maxH=h}
    })
    return maxH*maxW
}

const test1=[[60, 50], [30, 70], [60, 30], [80, 40]]
const test2=[[10, 7], [12, 3], [8, 15], [14, 7], [5, 15]]
const test3=[[14, 4], [19, 6], [6, 16], [18, 7], [7, 11]]
console.log(solution(test3))