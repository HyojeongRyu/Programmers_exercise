function solution(board, moves) {
    var answer=0
    var bucket=[];
    moves.map(m=>{
        for (let i = 0; i < board.length; i++) {
            //moves 원소에 해당하는 열에 인형이 있는지 확인
            if(board[i][m-1]){
                //버킷의 제일 윗단의 인형과 같다면
                if(bucket[0]==board[i][m-1]){
                    bucket.splice(0,1)
                    answer+=2;
                }
                //같지않다면
                else{
                    bucket.unshift(board[i][m-1])
                }   
                board[i][m-1]=0
                break;
            }
        }
    })
    return answer
}


var board=[
    [0,0,0,0,0],
    [0,0,1,0,3],
    [0,2,5,0,1],
    [4,2,4,4,2],
    [3,5,1,3,1]
]
var moves=[1,5,3,5,1,2,1,4]
console.log(solution(board,moves))