console.log(document.title);

document.title = "hello JS!"

// console.dir(document)와 console.log(document)의 차이점
// dir은 객체의 속성을 확인 
// log는 객체의 요소를 확인

const title = document.getElementById("title");
console.dir(title);

title.innerText = "123";
console.log(title.className);
