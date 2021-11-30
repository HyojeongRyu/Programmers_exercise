//박사님이 가지고 있는 폰키몬 nums에서 반을 고른다.
//고른 폰키몬의 종류가 가장 다양할때 폰키몬의 개수는?
//nums배열 안 숫자는 폰키몬의 종류를 뜻함
function solution(nums) {
    let res= new Set([...nums])
    return res.size>=nums.length/2?nums.length/2:res.size
}
const nums=[3,3,3,2,2,4]
console.log(solution(nums))