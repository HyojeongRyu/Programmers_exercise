function solution(nums) {
    let res= new Set([...nums])
    return res.size>=nums.length/2?nums.length/2:res.size
}
const nums=[3,3,3,2,2,4]
console.log(solution(nums))