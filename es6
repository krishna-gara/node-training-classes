
callBack();
console.log("test");
console.log("test1");
console.log("test2");
console.log("1-test");
console.log("1-test1");
console.log("1-test2");
console.log("1-test3");

function callBack() {
  	let hellvar = "test3";
  	console.log(hellvar);
    function callback1(){
    	console.log(hellvar);
    }
    callback1();
}

//const var1 = "test";
//console.log(hellvar);

var arr = [1,2,4];
arr.forEach(ele => console.log(ele));

var test = "test";

var str = ` sadfasdf asdf asdf asdf ${test}     `;

console.log(str);

var obj = [1,3,4, 4];
[var1, var2, var3, var4] = obj;

console.log(var1, var2, var3, var4);

// set
var setex = new Set();
setex.add(1);
setex.add(10);
setex.add(10);
console.log(setex.has(20));
console.log(...setex);

// 
 
var mapex = new Map();
mapex.set("test", 10);
mapex.set("test1", 20);
console.log(mapex.get('test'));
//scope 

class NewClas {
  
	constructor(param1, param2){
   this.param1 = param1;
   this.param2 = param2;
  
  }
  
  method1(){
  	console.log("method calling " + this.param2);
  } 

}

var obj2 =  new NewClas(10, 20);

console.log(obj2.method1());

//es6
// 1. arrow functions
// 2. string interpolation
// 3. let and const 
// 4. destructing
// 5. classes and modules
