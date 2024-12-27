import java.util.Arrays;
import java.util.ArrayList;
import java.util.Comparator;

class Solution {
    public int[] solution(int k, int[] score) {
        int[] answer = new int[score.length];
        ArrayList<Integer> stage = new ArrayList<>();
        
        for(int i= 0; i < score.length; i++){
            stage.add(score[i]);
            stage.sort(Comparator.reverseOrder());
                              
            if(i < k-1){
                answer[i] = stage.get(stage.size()-1);
            }else{
                answer[i] = stage.get(k-1);
            }                
        }
        return answer;
    }
}