class Solution {
    public boolean solution(int x) {
        String toString = Integer.toString(x);
        int sum=0;
        
        for(int i=0; i<toString.length(); i++){
            sum += Character.getNumericValue(toString.charAt(i));
        }
        
       return x % sum == 0;
    }
}