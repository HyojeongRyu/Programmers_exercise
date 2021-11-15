function solution(n, arr1, arr2) {
    // console.log(arr1,arr2)
    
    //decode 배열 생성
    var decode=[];
    for (let j = 0; j < n; j++) {
        let temp=[];
        for (let i = 0; i < n; i++) {
            
            temp.push('#')
        }
        decode.push(temp)
    }  
    // console.log('decode',decode)

    //map 생성
    var map1=[];
    var map2=[];
    for (let i = 0; i < arr1.length; i++) {
        //이진값 변환 후 문자열 temp 생성(자리수 맞추기)
        var temp1=''
        var temp2=''
        if(arr1[i].toString(2).length<n){
            let count=n-arr1[i].toString(2).length
            for (let j = 0; j <count; j++) {
                temp1+='0'   
            }
        }
        if(arr2[i].toString(2).length<n){
            let count=n-arr2[i].toString(2).length
            for (let j = 0; j <count; j++) {
                temp2+='0'   
            }
        }
        temp1+=arr1[i].toString(2)
        temp2+=arr2[i].toString(2)
        //map 완성
        map1.push(temp1.split(''))
        map2.push(temp2.split(''))
      

        for (let j = 0; j < map1[i].length; j++) {
            //map 2개의 인덱스가 전부 0이면 decode 인덱스도 0으로 변경
            if(map1[i][j]=='0'&&map2[i][j]=='0'){
                decode[i][j]=' ';
            }
        }
        var res=decode.map(x=>x.join(''))
    }
    console.log(res)
    return res;
}

//비트연산자
var solution=(n,a,b)=>a.map((a,i)=>(a|b[i]).toString(2).padStart(n,0).replace(/0/g,' ').replace(/1/g,'#'))

//실행
var n=5;
var arr1=makeArr(n)
var arr2=makeArr(n)
//makeArr
function makeArr(n){
    var arr=[];
    for (let i = 0; i < n; i++) {
        arr.push(Math.floor(Math.random()*(Math.pow(2,n))))
    }
    // console.log(arr)
    return arr
}
console.log(solution(n,arr1,arr2))



