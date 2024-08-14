// 1
// const loginForm = document.querySelector("#login-form");
// const loginInput = loginForm.querySelector("input");
// const loginButton = loginForm.querySelector("button");

// 2
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

// function handleClickLoginButton() {
//     console.dir("hello", loginInput.value);
//     console.log("clicked!"); 
// }

// function handleClickLoginButton() {
//     const username = loginInput.value;
//     if (username === '') {
//         //alert("Please write your name!");
//     } else if(username.length > 7) {
//         //alert("Your name is too long");
//     }
// }

// loginButton.addEventListener("click", handleClickLoginButton);

const loginForm = document.querySelector("#login-form");

loginForm.addEventListener("submit", onLoginSubmit);

const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
// 관습: string만 포함된 변수는 대문자로 쓴다 + 중요한 변수가 아니라서

function onLoginSubmit(arg) {
    arg.preventDefault();
    // 브라우저가 기본 동작을 실행하지 못하게 막기
    // event object는 preventDefault함수를 기본적으로 갖고 있음
    // preventDefault 함수는 EventListener 함수의 '첫 번째 argument' 안에 있는 함수
    //console.log(arg);

    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    // greeting.innerText = "Hello " + username;
    greeting.innerText = `Hello ${username}`;
    // ` 와 ${} 사용
    greeting.classList.remove(HIDDEN_CLASSNAME);
}


const link = document.querySelector("a");

function handleLinkClick(event) {

    console.log(event);
    // 엣지 브라우저 - MouseEvent
    // 크롬 브라우저 - PointerEvent


    alert("click");
    // alert 자바스크립트 동작을 멈춤

    event.preventDefault();

}

link.addEventListener("click", handleLinkClick);