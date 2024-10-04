class Solution {
    public int[] solution(long n) {
        String toString = Long.toString(n);
        int[] result = new int[toString.length()];
        
        for(int i = 0; i< result.length; i++){
            result[i] = Character.getNumericValue(toString.charAt(toString.length() - (i+1)));
        }
        
        return result;
    }
}