const maxQNum=10000;

const first = '12345'
const second= '21232425'
const third='3311224455'

function solution(answers) {
    const repeat= (str)=>{
        return str.padEnd(answers.length,str)
    }
    const grade = (paper)=>{
        let count=0;
        for (let i = 0; i < answers.length; i++) {
            paper[i]==answers[i]&&count++ 
        }
        return count
    }
    
    var one=repeat(first).split('')
    var two=repeat(second).split('')
    var three=repeat(third).split('')

    var res=new Array({student:1,score:grade(one)},{student:2,score:grade(two)},{student:3,score:grade(three)})
    res.sort((a,b)=>b.score-a.score)
    var result=[];
    for (let i=0; i<res.length; i++) {
        if(res[i].score==res[0].score&&res[i].score){
            result.push(res[i].student)
        }
    }
    return result
}

console.log(solution([1,3,2,4,2]))