const title = document.querySelector(".hello h1");
console.log(title);

function handleMouseEnter(){
    //console.log("mouse is here!");
    title.innerText = "mouse is here!"
}

function handleMouseLeave(){
    title.innerText = "mouse is gone!"
}

title.addEventListener("mouseenter", handleMouseEnter);
title.addEventListener("mouseleave", handleMouseLeave);