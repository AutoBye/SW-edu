const mon = "mon";
const tue = "tue";
const wed = "wed";
const thu = "thu";
const fri = "fri";
const sat = "sat";
const sun = "sun";

const daysOfWeek = mon + tue + wed + thu + fri + sat + sun;
console.log(daysOfWeek);

const daysOfWeek2 = [mon , tue , wed , thu , fri , sat , sun];
console.log(daysOfWeek2);

const daysOfWeek3 = ["mon" , "tue" , "wed" , "thu" , "fri" , "sat" , "sun"];
console.log(daysOfWeek3);

// Get Item from Array
console.log(daysOfWeek3[3]);

// Add one more day to the array
daysOfWeek3.push("break");

console.log(daysOfWeek3);


// 상수로 선언된 변수에 값을 할당하는 것
// => 변수에 그 값을 갖는 메모리 주소를 할당한다.
// => 주소를 할당할 때에 그 주소가 갖는 값이 배열이 아닌 값이라면 
// (문자열이든, 정수든, 소수든) '그 값' 을 갖는 변수 자체는 상수로 고정됨.
//   == 그 값을 참조해오는 메모리 주소값을 기준으로.


// 하지만 배열로 할당을 받은 상수 변수의 경우
// => 할당한 배열 값을 갖는 메모리 주소를 받아와서 참조하는 것
// => 상수 변수에 재할당/수정하는 것이 아닌 참조하는 배열의 값을 
//    수정/추가/제거 하는 것이기 때문에 배열의 주소를 가져와서 참조하는 
//    상수 변수 자체에 대해서는 영향이 없음  
// == 배열의 주소값의 첫 부분(배열[0]의 주소)를 가져오는 것이기 때문에 
// 그 주소에는 변경이 없으므로 상수 변수에는 영향이 없고, 
// 그 주소에 할당되는 값들은 변경이 가능한 것이며, 
// 추가/삭제되는 것 또한 그 이후의 연속된 메모리 주소에 대해 적용되는 것이므로 영향이 없다.

const toBuy = ["potato", "tomato", "pizza"];
toBuy.push("kibab");
console.log(toBuy[2]);
