class Solution {
    public int solution(int a, int b, int n) {
        int answer = 0;
        
        while (n >= a) {
            int rest = n % a;
            int willChange = n - rest;
            int newCoke = (willChange / a) * b;
            
            System.out.println(newCoke);
            
            answer += newCoke;
        
            n = newCoke + rest; 
        }
        
        return answer;
    }
}