import java.util.ArrayList;
import java.util.Arrays;

class Solution {
    public int[] solution(String s) {
        int[] answer = new int [s.length()];
        
        for(int i=0; i < s.length(); i++){           
            int reverseSameIdx = s.lastIndexOf(s.charAt(i), i-1);
            
            answer[i] = reverseSameIdx == -1 ? -1 : i - reverseSameIdx;
        }
        return answer;
    }
    
}