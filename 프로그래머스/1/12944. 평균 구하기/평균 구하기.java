class Solution {
    public double solution(int[] arr) {
        double sum = 0.0;
       for(int n:arr){
           sum+=n;
       }
        return sum/arr.length;
    }
    //return Arrays.stream(array).average().orElse(0);
}