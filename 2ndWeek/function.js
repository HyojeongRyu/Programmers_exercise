export {innerHtml};
function innerHtml(content,elementClassName){   
    document.getElementsByClassName(elementClassName)[0].innerHTML=`<div>${content}<div>`  
   }