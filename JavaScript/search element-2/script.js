// const hellos = document.getElementsByClassName("hello");
// console.log(hellos);
// array로 가져왔음

// const title = document.getElementsByTagName("h1");
// console.log(title);
// 이것도 array

const title = document.querySelector(".hello h1");
console.log(title);
console.log(title.textContent);
// css처럼도 가능하다 .hello h1:first-child

const title2 = document.querySelectorAll(".hello h1");
console.log(title2);
console.log(title2.textContent);

// - getElementsByClassName() : 많은 element를 가져올때 씀(array를 반환)
// - getElementsByTagName() : name을 할당할 수 있음(array를 반환)
// - querySelector : element를 CSS selector방식으로 검색할 수 있음 
//   (ex. h1:first-child) 단 하나의 element를 return해줌