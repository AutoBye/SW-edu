const images = [
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
]

const chosenImage = images[Math.floor(Math.random() * images.length)];
//console.log(chosenImage);

const bgImage = document.createElement("img");
bgImage.src = `img/${chosenImage}`;
//console.log(bgImage);

document.body.appendChild(bgImage);
// 중간에 넣고싶다면?
// insertBefore() 메소드를 사용 - 참조된 노드 앞에 특정 부모 노드의 자식 노드를 삽입
// const h2 = document.querySelector("#clock")
// document.body.insertBefore(bgImage, h2);

