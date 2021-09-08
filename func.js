export {getNumByID,printRes}
function getNumByID(id){
    var res= Number(document.getElementById(id).value);
    return res;
}
function printRes(content,elementId){   
    //div에 넣기 위해 '\n\'을 <br>로 바꿀 방법이 없을까?
    
    // if(content.includes('\n')){
    //     content.replace(/\n/gi, "<br>")
    //     console.log(content)
    // }
    document.getElementById(`${elementId}`).innerHTML=`<div>${content}<div>` 
   }