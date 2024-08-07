// function은 어떤 코드를 캡슐화해서, 
// 실행을 여러 번 할 수 있게 해준다.

function sayHello(argument, age) {
    console.log("hello!", argument + "and i'm", age, "years old!"); 
}

sayHello("AutoBye", 24);
sayHello("JavaScript", 11);
sayHello("Visual Studio Code", 2);

function plus(firstNumber, secondNumber) {
    console.log(firstNumber + secondNumber); 
}
// argument 없이 plus(); 호출 가능하지만
// NaN - 숫자가 아님
plus(2, 7);

// console.log(firstNumber);
// Uncaught ReferenceError ReferenceError: firstNumber is not defined
// function의 값은 function 안에서만 존재한다.

function devide(a, b) {
    console.log(a / b);
}

devide(2, 7);

const player = {
    name : "AutoBye",
    sayHello : function(otherName) {
        console.log("hello!", otherName, "Nice to meet you");
    }
}
console.log(player.name);
player.sayHello("Cat");
player.sayHello("Dog")


