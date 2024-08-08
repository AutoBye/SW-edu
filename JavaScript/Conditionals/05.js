const age = prompt("How old are you?");

console.log(typeof age);
// 기본 타입은 string

// string -> int
console.log(typeof parseInt(age));

console.log(age, parseInt(age));
// string 입력시 parseInt - NaN

// function isNaN(number: number): boolean
// Returns a Boolean value that indicates whether a value is the reserved value NaN (not a number).

if (isNaN(parseInt(age)))
    alert("문자열입력!");
// 문자 걸러내기


