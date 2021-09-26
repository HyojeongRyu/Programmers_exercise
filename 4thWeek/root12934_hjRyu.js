import { getNumByID, printRes } from "../func.js"

document.getElementById('btn').addEventListener('click',()=>{
    const num = getNumByID('n');
    //sqrt함수 사용
    // let root = Math.sqrt(num);
    // if(Number.isInteger(root)){
    //     printRes('true','isRoot')
    //     printRes((root+1)*(root+1),'result')
    // }
    // else{
    //     printRes('false','isRoot')
    //     printRes(-1,'result')
    // }

    //for루프
    let root=0;
    for (let i = num; i >0; i--) {
        
        if(num/i===i){
            root=i
            break
        }
    }
    if(root>0){
        printRes('true','isRoot')
        printRes((root+1)*(root+1),'result')
    }
    else{    
        printRes('false','isRoot')
        printRes(-1,'result')
    }
})