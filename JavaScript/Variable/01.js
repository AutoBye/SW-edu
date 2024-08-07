const a = 3;
const b = 2;
const myName = "AutoBye";
let c = 9;
let yourName = "Empty";

console.log(a+b);
console.log(a*b);
console.log(a/b);
console.log("hello", myName);

yourName = "Full";

console.log("hello", yourName);

// myName = "1230";
// Uncaught TypeError TypeError: Assignment to constant variable.

// let 재선언 금지, 재할당 가능
// const 재선언 금지, 재할당 금지
// var 재선언 가능, 재할당 가능

// always const
// sometimes let
// never var

const check = true;
const uncheck = false;
console.log(check);
console.log(uncheck);


const nullCheck = null;
console.log(nullCheck);

const isDefine = undefined;
console.log(isDefine);

let something;
console.log(something);

// undefined = 변수는 선언했지만 값을 할당하지는 않음
// null = 변수에 null(값이 없다)이 할당된다 즉, 정의됨

