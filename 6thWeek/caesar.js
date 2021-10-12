import{printRes} from "../func.js"
const btn = document.getElementById('btn')
btn.addEventListener('click',()=>{
    const letter=document.getElementById('str').value;
    const num=Number(document.getElementById('n').value)
    solution(letter,num)
})
function solution(str, n) {
    let s=str.split('')
    let answer='';

    s.forEach(x=>{
        let code=x.charCodeAt()
        let change=''
        
        //대문자일때
        if(65<=code&&code<=90){
            if(code+n>90){
                change=((code+n)-90)+64
            }
            else{change=code+n}
        }
        //소문자일때
        else if(97<=code&&code<=122){
            if(code+n>122){
                change=((code+n)-122)+96
            }
            else{change=code+n}
        }
        else{change=32}
        answer+=String.fromCharCode(change)
    })
    
    console.log(answer)
    printRes(answer,'result')
    return answer;

    // let big=[a,b,c,d,e]
}