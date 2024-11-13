class Solution {
    public String solution(String s) {
        StringBuilder answer = new StringBuilder("");     
        int fromSpace = 0;
        
        for(int i=0; i < s.length(); i++){
            char ch = s.charAt(i);
                       
            answer.append(fromSpace == 0 || fromSpace % 2 == 0 ?
                            Character.toUpperCase(ch) :  Character.toLowerCase(ch));
            
            fromSpace = ch == ' ' ? 0: fromSpace + 1;
        }
            
        return answer.toString();
    }
}