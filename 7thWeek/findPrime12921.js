//1부터 입력받은 숫자 n 사이에 있는 소수의 개수를 반환하는 함수,
//solution을 만들어 보세요.

// function solution(n) {
//     let prime=0;
//     for(let i=2; i<=n;i++){
//         let count=0;
//      for(let j=1; j<=i; j++){
//          i%j==0&&count++;
//      }
//         count<=2&&prime++;
//     }
//     return prime;
// }

//에라토스테네스 체
var solution= function(n){
    var isPrime=new Array
    var checkPrime=0;
    for(let i=2; i<n+1; i++){
        isPrime[i]=true
    }

    for(let i=2; i<=n; i++){
        if(isPrime[i]==true){checkPrime++}
        for(let j=1; i*j<=n; j+=1){
            isPrime[i*j]=false;
        }
    }
    return checkPrime;
}

//에라토스테네스 체: 제곱근까지만 구하기
var solution= function(n){
    var isPrime=new Array
    var checkPrime=0;
    for(let i=2; i<n+1; i++){
        isPrime[i]=true
    }
    for(let i=2; i*i<=n; i++){
        for(let j=2; i*j<=n; j+=1){
            isPrime[i*j]=false;
        }
    }
    //두번째 for문 시간복잡도 
    //에라토스테네스 체 시간복잡도
    isPrime.forEach(element => {
        element==true&&checkPrime++;
    });
    return checkPrime;
}

solution(10)