class Solution {
    public long[] solution(int x, int n) {
        long count = x;
        long[] result  = new long[n];
            
        for(int i=0; i<n; i++){
            result[i] = count;
            count += x;
        }
        
        return result;
    }
}