class Solution {
    public long solution(long n) {
        long root = (long) Math.sqrt(n);
        
        if(Math.pow(root, 2) == n){
            return (long) Math.pow(root+1, 2);
        }
        
        return (long) -1;
    }
}