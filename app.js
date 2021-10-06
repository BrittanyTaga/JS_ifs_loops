//logs messages to the console
console.log("hello world!");

//declaring a variable
// let x = 5;
// console.log("The value of my variable is: ", x);

// const my_fav_num = 13;

// x = x + my_fav_num;
// console.log("new the variable of my variable x: ", x);

//String data types
let my_str = "Hello World!"
let my_str_num = "7";

//num data types
let my_whol_num = 6495;
let my_float = 3.14;

//Boolean Data
// let my_true_bool = true;
// let my_false_bool = false;

// let amountRaisedSoFar = 1000;

// let donation = prompt("How much would you like to donate?");

// amountRaisedSoFar = Number(donation) + amountRaisedSoFar;


// console.log("We have now raised: " + amountRaisedSoFar + "!");

let greeting = "Hello,";
let name = "World";
console.log(greeting + " " + name + "!"); //output "Hello, World!""

//template literal
console.log(`${greeting} ${name}!`);

//null
let something;
console.log(typeof something) // "undefined"

// foo does not exist, it is not defined and has never been initialized:
//console.log(foo); // "ReferenceError: foo is not defined"

// foo is known to exist now but it has no type or value:
let foo = null;
console.log(foo);// "null"

//by adding +prompt, it will automatically become an integer
// let cups = prompt("Do you need more coffee?");

// if (cups < 3){
//     console.log("I'll take another cup!");
// }
// else{
//     console.log("I think I am ok for now.");
// }

//flow control
// if('abc') {
// 	// this block would run
// }

// if(10 && 'abc' && true) {
// 	// this block would run
// }

// truthy/falsey values
// let whatever; //whatever is undefined
// if(whatever) {
// 	console.log(true);
// } else {
// 	console.log(false); //this would run
// }

// if(!whatever){
// 	console.log(false); //this would run
// }

// if(false || 0 || null){
// 	console.log(true); //since none of these evaluate to true, this will not run
// }

//flow control
// true && true 	// true
// true && false 	// false
// false && true 	// false
// false && false 	// false

// true || true 	// true
// true || false 	// true
// false || true 	// true
// false || false 	// false

// somevar && myFunction() //equivalant to if(somevar) -> if(somevar){}
// somevar || myFunction() //equivalant to if(!somevar)

// let temp = 80;
// let precip = false;
// let indoors = true;

// console.log("The temperature is: ", temp);
// if (temp > 80 && precip === false){
//     console.log("Time to swim");
// } else if(indoors){
//     console.log("time to swim");
// }

//for loop
// for (let i = 0; i <=9; i++){
//     console.log(i);
// }

// for (let i = 99; i >= 0; i --){
//     if(i === 0){
//         console.log("OI. WE NEED MORE")
//     }else{
//         console.log( i + " bottles of root beer on the wall.")}
// }

//loop
// let x = 0;
// while(x < 10) {
//     x = x + 1; //need this to kill it
//     // or x +=1
//     // or x++
// }

//do while loop
// let x = 0;
// do {
//     x = x + 1;
//     // or x +=1
//     // or x++
// } while(x < 10);

//this will go on forever
// for(let i=0, i<20, i--){
//     //this loop will run forever
//   }

//   let x = 20;
//   while(x < 20){
//     if(x > 20){ //this condition cannot be met
//       x--; //this will never happen
//     }
//     //this will run forever
//   }

//switch statement
let x = 1 //global variable
switch(x) {
	case 3:
		console.log('three')
	case 1:
		console.log(1);
		//break;
	case 2:
		console.log(2);
		break;
	default:
		console.log('default')
}

let test = true; 
if(test){ 
  let test = false; //this is a completely new variable that only exists in this scope
  console.log(test); //console: false
}
//outside scope
console.log(test); //console: true

	
for (var i = 0; i < 10; i++){
    console.log(i); 
}
console.log(i); // will log 9, the final value of i in the for loop, 
//because var declared it globally
  