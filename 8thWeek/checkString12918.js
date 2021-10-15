//문자열 s의 길이가 4 혹은 6이고,
//숫자로만 구성돼있는지 확인해주는 함수, solution을 완성하세요.
//예를 들어 s가 "a234"이면 False를 리턴하고
//"1234"라면 True를 리턴하면 됩니다.
//s는 길이 1 이상, 길이 8 이하인 문자열입니다.

//아스키코드
function solution(s) {
    if(s.length!=4&&s.length!=6){return false};
    for(let i=0; i<s.length; i++){
        console.log(s.charCodeAt(i))
        if(s.charCodeAt(i)<48||s.charCodeAt(i)>57){return false}
    }
    return true;
}

// //isNaN 사용: 지수형태일때 틀림
// function solution(s){
//     if(s.length!=4&&s.length!=6&&isNaN(s)){return false;}
//     return true;
// }


