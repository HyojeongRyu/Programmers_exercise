class Solution {
    public int solution(int number, int limit, int power) {
        int answer = 0;
        for(int i = 1; i <= number; i++){
            int iron = 0;
            for (int j= 1; j <= Math.sqrt(i); j++ ){
                if(i % j == 0){
                    iron = j * j == i ? iron + 1 : iron + 2;
                }
                if (iron > limit ){
                    iron = power;
                    break;
                }
            }
            answer += iron;
        }
        return answer;
    }
}