const calculator = {
    add: function (firstNumber, secondNumber) {
        alert(firstNumber + secondNumber);
    },
    sub: function (firstNumber, secondNumber) {
        alert(firstNumber - secondNumber);
    },
    mul: function (firstNumber, secondNumber) {
        alert(firstNumber * secondNumber);
    },
    div: function (firstNumber, secondNumber) {
        alert(firstNumber / secondNumber);
    },
};

// calculator.add(13, 15);
// calculator.sub(13, 15);
// calculator.mul(13, 15);
// calculator.div(13, 15);
//console.log(calculator.div(13, 15));

const age = 96;

function calculateKrAge(ageOfForeigner) {
    // ageOfForeigner + 2; 
    // undefined
    return ageOfForeigner + 2;
}

const krAge = calculateKrAge(age);

console.log(krAge);
