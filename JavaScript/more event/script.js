const title = document.querySelector(".hello h1");
console.log(title);

// function handleMouseEnter(){
//     //console.log("mouse is here!");
//     title.innerText = "mouse is here!"
// }

// function handleMouseLeave(){
//     title.innerText = "mouse is gone!"
// }

// title.addEventListener("mouseenter", handleMouseEnter);
// title.addEventListener("mouseleave", handleMouseLeave);

// function handleWindowResize() {
//     document.body.style.backgroundColor = "tomato";
// }

// function handleWindowCopy() {
//     alert("Copy!");
// }

// function handleWindowOffline() {
//     alert("SOS! no WIFI");
// }

// function handleWindowOnline() {
//     alert("WIFI!");
// }

// window.addEventListener("resize", handleWindowResize);
// window.addEventListener("copy", handleWindowCopy);
// window.addEventListener("offline", handleWindowOffline);
// window.addEventListener("online", handleWindowOnline);

//document의 body,head,title 이런것들은 중요하기 때문에
// document.body.style~의 명령이 허용되지만, div같은것들은 호출이 안됨

function handleTitleClick(){
    // console.log(title.style.color);
    // title.style.color = "blue";
    // console.log(title.style.color);
    const currentColor = title.style.color;
    // getter
    let newColor;
    // setter
    if (currentColor === "blue"){
        newColor = "tomato";
    } else {
        newColor = "blue";
    }
    title.style.color = newColor;
}

title.addEventListener("click", handleTitleClick);