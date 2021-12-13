//nums에 있는 숫자들 중 서로 다른 3개를 골라 더했을 때
//소수가 되는 경우의 개수를 return


function solution(nums) {
    var count=0;
    for(let i=0; i<nums.length-2; i++){
        for(let j=i+1; j<nums.length-1; j++){
            for(let k=j+1; k<nums.length; k++){
                if(isPrime(nums[i]+nums[j]+nums[k])){count++}
            }
        }
    }
    return count
}

//소수 판별(에라토스테네스 체)
const isPrime= x=>{
    for (let i = 2; i <= Math.sqrt(x); i++) {
       if(x%i==0){return false}
    }
    return true
}

console.log(solution([1,2,3,4]))