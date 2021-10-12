import {getNumByID, printRes} from '../func.js'
document.getElementById('btn').addEventListener('click',()=>{
    let word = document.getElementById('num').value;
    // let res= new Array
    // for (let i = word.length-1; i >=0 ; i--) {
    //     res.push(word[i])
    // }
    let res = word.toString().split('').reverse().map(value => +value);
    printRes(res,'result')
})