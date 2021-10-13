//길이가 n이고, "수박수박수박수...."와 같은 패턴을
//유지하는 문자열을 리턴하는 함수, solution을 완성하세요.
//예를들어 n이 4이면 "수박수박"을 리턴하고 3이라면 "수박수"를 리턴하면 됩니다.

//repeat함수 사용
function solution(n) {
    var res=''
    if(n==1){res='수'}
    else if(n>=2){
        res='수박'.repeat(n/2)
        if(n%2>0){res+='수'}
    }
    return res;
}

//for문 사용
function solution(n) {
    var res=''
   for(let i=0; i<n; i++){
       res+=i%2==0?'수':'박'  
   }
    return res;
}