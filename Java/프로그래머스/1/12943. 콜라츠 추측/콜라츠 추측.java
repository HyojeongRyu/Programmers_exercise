class Solution {
    private int count = 0;

    public int solution(int num) {
        return repeat((long)num);
    }

    private int repeat(long num) {        
        if (num == 1) {
            if (count == 0) {
                return 0;
            }
            return count;
        }
        if (count == 500) {
            return -1;
        }

        if (num % 2 == 0) {
            num = even(num);
        } else {
            num = odd(num);
        }
        count++;  
        
        return repeat(num);
    }

    private long even(long num) {
        return num / 2;
    }

    private long odd(long num) {
        return num * 3 + 1;
    }
}
