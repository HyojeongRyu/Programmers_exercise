//맨 처음 왼손 엄지손가락은 *, 오른손 엄지손가락은 #위치에서 시작
//엄지손가락은 상하좌우 1칸만 이동
//왼쪽 열의 1, 4, 7을 입력할 때는 왼손 엄지손가락을 사용
//오른쪽 열의 3개의 숫자 3, 6, 9를 입력할 때는 오른손 엄지손가락을 사용
//2, 5, 8, 0을 입력할 때는 두 엄지손가락의 현재 위치에서 더 가까운 엄지손가락을 사용
//만약 두 엄지손가락의 거리가 같다면, 오른손잡이는 오른손, 왼손잡이는 왼손
//순서대로 누를 번호가 담긴 배열 numbers, 
//왼손잡이인지 오른손잡이인 지를 나타내는 문자열 hand가 매개변수
//각 번호를 누른 엄지손가락이 왼손인 지 오른손인 지를 나타내는 연속된 문자열 형태로 return


function solution(numbers, hand) {
    var result=[]
    var left
    var right
    numbers.forEach((h,i) => {
        if(h==1||h==4||h==7) {
            result.push('L')
            left=h
        }
        else if(h==3||h==6||h==9) {
            result.push('R')
            right=h
        }
        else{
            if(h==0){h=11;}
            //손이 *이나 #에 가있는데 2,5,8,0 중 하나 눌러야할때
            if(!result){
                if(hand=='right'){
                    result.push('R')
                    right=h
                }
                if(hand=='left'){
                    result.push('L')
                    right=h
                }
            }

            //아직 첫 시작에서 움직이지 않았을때
            if(!left){left=10}
            if(!right){right=12}

            //Math.floor(1/3)!=Math.floor(-1/3)
            //parseInt .999999 -> round()
            var distanceL=Math.floor(Math.abs(h-left)/3)+Math.floor(Math.abs(h-left)%3)
            var distanceR=Math.floor(Math.abs(h-right)/3)+Math.floor(Math.abs(h-right)%3)

            if(distanceL>distanceR){
                result.push('R')
                right=h;
            }
            else if(distanceR>distanceL){
                result.push('L')
                left=h;
            }
            else{
                if(hand=='right'){
                    result.push('R')
                    right=h;
                }
                if(hand=='left'){
                    result.push('L')
                    left=h;
                } 
            }

        }
    });
    return result.join('')
}

console.log(solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 0],'right'))