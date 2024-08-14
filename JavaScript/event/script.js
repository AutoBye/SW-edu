const title = document.querySelector(".hello h1");
console.log(title);

function handleTitleClick() {
    console.log("click");
    title.style.color = "blue";
}

title.addEventListener("click", handleTitleClick);

// - 지금 js파일이 있기 때문에 js를 통해 html의 내용을 가져올 수 있는 거임
// - document가 html이 js파일을 load하기 때문에 존재 → 그 다음에 browser가 우리가 document에 접근할 수 있게 해줌
// - element의 내부를 보고 싶으면 console.dir()
// 기본적으로 object로 표시한 element를 보여줌(전부 js object임)
// 그 element 중 앞에 on이 붙은 것들은 event임
// - event: 어떤 행위를 하는 것
// 모든 event는 js가 listen할 수 있음
// - eventListener : event를 listen함 → js에게 무슨 event를 listen하고 싶은 지 알려줘야 함
// - title.addEventListener("click") : 누군가가 title을 click하는 것을 listen할 거임 → 무언가를 해줘야함