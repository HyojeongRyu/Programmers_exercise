function solution(s) {
    var table=['zero','one','two','three','four','five','six','seven','eight','nine']
    table.forEach((num,idx)=>{
        return s=s.replace(new RegExp(num,"g"),idx)
    })
    return s*1
}

// function solution(s) {
//     let numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
//     var answer = s;

//     for(let i=0; i< numbers.length; i++) {
//         let arr = answer.split(numbers[i]);
//         answer = arr.join(i);
//     }

//     return Number(answer);
// }

var s="one4seveneight"
console.log(solution(s))