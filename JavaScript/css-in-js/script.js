const h1 = document.querySelector(".hello h1");

// function handleh1Click(){
//     const clickedClass = "active";
//     if (h1.className === clickedClass){
//         h1.className = "";
//     } else {
//     h1.className = clickedClass;
//     }
// }
// 기존 클래스가 삭제됨

// function handleh1Click(){
//     const clickedClass = "active";
//     if (h1.classList.contains(clickedClass)){
//         h1.classList.remove(clickedClass);
//     } else {
//     h1.classList.add(clickedClass);
//     }
// }
// 클래스 새로 추가

function handleh1Click(){
    const clickedClass = "active";
    h1.classList.toggle(clickedClass);
}
// toggle 은 위의 코드를 1줄로

h1.addEventListener("click", handleh1Click);