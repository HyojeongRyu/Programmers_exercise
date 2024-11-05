class Solution {
    public String solution(String phone_number) {
        return new StringBuilder(phone_number)
                    .replace(0, phone_number.length()-4, "*".repeat(phone_number.length()-4))
                    .toString();
        
    }
}