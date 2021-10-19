function solution(dartResult) {
    //회차 분리
    var stage = dartResult.split(/(\d{1,2}[A-Z]\*?\#?)/).filter((el)=>el!='')
    var table=[]
    var res=[];
    console.log(stage)
    //회차별 점수/보너스/옵션 분리
    stage.forEach(element => {
        table.push(element.split(/(\d{1,2}|\*?\#?)/).filter((el)=>el!=''))
    });
    // console.log(table)
    
    //점수 계산
    for (let i = 0; i < table.length; i++) {
        table[i][0]=Number(table[i][0]);
        //보너스 판별
        var vonus;
        switch(table[i][1]){
            case 'D':
                vonus=2
                break
            case 'T':
                vonus=3
                break
            default:
                vonus=1
        }
        var score=Math.pow(table[i][0],vonus)
        //옵션 판별
        if(table[i][2]){
            if(table[i][2]=='*'){
                if(i!=0){
                    res[i-1]=res[i-1]*2
                }
                score=score*2
            }
            else{
                score=score*-1
            }
        }
        res.push(score)
    }
    return res.reduce((prev,current)=>{
        return prev+current
    })
}

console.log(solution('10S#2D*3T'));