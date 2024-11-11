class Solution {
    public int[] solution(int n, int m) {
        int min = n >= m ? m : n;
        int max = min == n ? m: n;
        
        int gcd = 1;
        int lcm;
        
        for(int i = min; i > 0; i--){
            //최대공약수 이미 있으면 할당 X
            if (max % i == 0 && min % i == 0) {    
                gcd = i;
                break;
            }
        }
        
        lcm = (min * max) / gcd;
         
        int[] answer = {gcd, lcm};
        return answer;
    }
}