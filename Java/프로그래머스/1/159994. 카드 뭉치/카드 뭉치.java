class Solution {
    public String solution(String[] cards1, String[] cards2, String[] goal) {
        String answer = "";
        int card1Idx = 0; 
        int card2Idx = 0;
        
        for(int i = 0; i < goal.length ; i++){
            if(!goal[i].equals(cards1[card1Idx])){
                if(!goal[i].equals(cards2[card2Idx])){                             
                    return "No";
                }else{
                    System.out.println(goal[i]);
                    System.out.println(cards1[card1Idx]);
                    System.out.println(cards2[card2Idx]);
                    
                    if(card2Idx < cards2.length-1) card2Idx++;
                }
            } else{
                if(card1Idx < cards1.length-1) card1Idx++;
            }
        }
        return "Yes";
    }
}