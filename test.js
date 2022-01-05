// //일반함수
// let obj={
// 	myVar: 'foo',
// 	myFunc: function(){
// 		//1번 console.log()
// 		console.log(this.myVar)
// 		setTimeout(function(){
// 			//2번 console.log()
// 			console.log(this.myVar)
// 		}, 1000)
// 	}
// }
// obj.myFunc()

// //arrow
// let obj={
// 	myVar: 'foo',
// 	myFunc: function(){
// 		//1번 console.log()
// 		console.log(this.myVar)
// 		setTimeout(()=>{
// 			//2번 console.log()
// 			console.log(this.myVar)
// 		}, 1000)
// 	}
// }
// obj.myFunc()

// //call
// const obj={
//     name:'hyovely'
// }
// const say = function(){
//     console.log( this.name +'is beautiful')
// }
// say();
// const obj={
//     name:'hyovely'
// }
// const say = function(){
//     console.log( this.name +'is beautiful')
// }

// say.call(obj);

// //lexical scope
// function say(){
// 	var word="bye"
//     sayTwo();
// }
// function sayTwo(){
//     console.log(word)
//  }
// say()
// sayTwo()

//dynamic scope
var word="global"
function say(){
	var word="function say"
    console.log(word)
}
function sayTwo(){
    console.log(word)
}
