class Solution {
    public String solution(String s, int n) {
        String res = "";
        for(int i=0; i < s.length(); i++){
            int asciCode = (int)s.charAt(i);
            int plusedAsciCode = 0;
            
            if(65 <= asciCode && asciCode <= 90){
                plusedAsciCode = 65 + (asciCode + n - 65) % 26;
            }
            
            if(97 <= asciCode && asciCode <= 122){
                plusedAsciCode = 97 + (asciCode + n - 97) % 26;
            }
            
            if(asciCode == 32){
                plusedAsciCode = asciCode;
            }
            
            System.out.println((char) plusedAsciCode);
            res += (char) plusedAsciCode;
            
        }
        
        return res;
    }
}