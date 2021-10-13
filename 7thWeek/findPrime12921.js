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
    for(let i=0; i<n; i++){
        isPrime.push(true)
    }
    console.log(isPrime)
    for(let i=1; i*i<=n; i++){
        if(isPrime[i]==true){console.log('checkPrime');checkPrime++}
        for(let j=1; i*j<=n; j+=1){
            isPrime[i*j-1]=false;
            console.log(isPrime[i*j-1])
            console.log(isPrime)
        }
    }
    return checkPrime;
}

solution(10)