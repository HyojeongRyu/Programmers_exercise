import java.util.Arrays;

class Solution {
    public long solution(long n) {
        String toString = Long.toString(n);
        char[] toArray = toString.toCharArray();
        String result = "";
        
        Arrays.sort(toArray);
        
        for(int i = toArray.length -1; i >= 0; i--){
            result += toArray[i];
        }
        
    return Long.valueOf(result);
}}