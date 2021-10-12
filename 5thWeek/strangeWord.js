import {printRes} from '../func.js'
document.getElementById('btn').addEventListener('click',()=>{
    const s=document.getElementById('str').value
    var str=s.split(' ');

    // var result=new String
    
    // str.forEach((element,idx) => {
    //     let res= new String
    //     for (let i = 0; i < element.length; i++) {
    //         if(i%2==0){
    //             res+=element.charAt(i).toUpperCase();
    //         }
    //         else{
    //             res+=element.charAt(i).toLowerCase();
    //         }
    //     }

    //     // if(idx!==0){result+=' '}
    //     // result+=res;
    // })

    const result=str.map(el=>{
        let s=''
        for (let i = 0; i < el.length; i++) {
            if(i%2==0){
                s+=el.charAt(i).toUpperCase();
            }
            else{
                s+=el.charAt(i).toLowerCase();
            }
                }
        return s
    }).join(' ')
    
    printRes(result,'result')
})