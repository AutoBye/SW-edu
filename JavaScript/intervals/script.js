const clock = document.querySelector("h2#clock");

function dummy() {
    console.log("Hello");
    
}

// setInterval(dummy, 5000);
// 반복
// 2개의 arg (function, interval)


// setTimeout(dummy, 5000);
// 한번

function getClock() {
    const date = new Date();
    // new를 붙이는 이유는 그냥 date();를 사용해서 얻는 결과값은
    // new date();를 쓴 것을 그대로 string으로 만든 것이기 때문에 
    // .gethours같은 property를 사용할 수 없다
    // typeof Date -> function
    // new를 쓰면 instance object 반환

    //const Seconds = ("00"+ (date.getSeconds()).toString()).slice(-2);
    // slice() 메서드는 어떤 배열의 begin 부터 end 까지(end 미포함)에 대한 얕은 복사본을 새로운 배열 객체로 반환
    
    //clock.innerHTML = `${date.getHours()} : ${date.getMinutes()} : ${Seconds}`;
    
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    // padStart(x,"y") x는 x 개의 글자가 되지않으면 y을 앞에 추가한다 라는 의미임.
    // padEnd는 뒤에

    clock.innerHTML = `${hours} : ${minutes} : ${seconds}`;

}

getClock();
setInterval(getClock, 1000);
