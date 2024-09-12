import java.util.*;

public class Solution {
    public int solution(int n) {
        int result = 0;
        String toChar = Integer.toString(n);
        
        for(int i=0; i < toChar.length(); i++){
            result += (toChar.charAt(i) - '0');
        }
        
        return result;
    }
}