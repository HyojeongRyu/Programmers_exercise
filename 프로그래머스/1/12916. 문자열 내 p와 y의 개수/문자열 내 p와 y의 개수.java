class Solution {
    boolean solution(String s) {
        int yCount = (int) s.toUpperCase()
                        .chars()
                        .filter(ch->ch == 'Y').count();
        int pCount = (int) s.toUpperCase()
                        .chars()
                        .filter(ch->ch == 'P').count();

        return yCount == pCount;
    }
}