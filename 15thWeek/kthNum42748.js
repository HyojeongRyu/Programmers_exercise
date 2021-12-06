//배열 array의 i번째 숫자부터 j번째 숫자까지 자르고 정렬했을 때,
//k번째에 있는 수를 구하려 합니다.
//배열 array, [i, j, k]를 원소로 가진 2차원 배열 commands가 매개변수

function solution(array, commands) {
    var result=[]
    result=commands.map(x=>{
       return array.slice(x[0]-1,x[1]).sort((a,b)=>(a-b))[x[2]-1]
        // result.push(sliced.sort((a,b)=>(a-b))[x[2]-1])
    })
    return result;
}

var arr=[1,5,2,6,3,7,4]
var comm=[[2,5,3],[4,4,1],[1,7,3]]
console.log(solution(arr,comm))