function Box() {}

Box.prototype.init = function (text) {
    this.cellBox = document.createElement("div");
    this.elementUl = document.createElement("ul");
    for (var i = 0; i < 10; i++) {
        this.elementLi = document.createElement("li");
        this.elementLi.innerText = i;
        this.elementUl.appendChild(this.elementLi);
    }
    this.cellBox.appendChild(this.elementUl);
    this.cellBox.setAttribute("class", "cellBox");
    return this.cellBox;
};

Box.prototype.start = function (speed) {
    this.y = 0;
    this.intervalRef = setInterval(() => {
        this.y -= 10;
        this.elementUl.style.top = this.y + "px";
        if (this.y <= -900) {
            this.y = 0;
        }
    }, speed);
    startFlag = true;
};

Box.prototype.stop = function () {
    clearInterval(this.intervalRef);
    this.yPos = Math.floor(this.y / 100) * 100;
    this.elementUl.style.top = this.yPos + "px";
};

const divBox = document.querySelector("#box");
const boxArr = [
    new Box(), new Box(), new Box(), 
    new Box(), new Box(), new Box(), 
    new Box(), new Box(), new Box() 
];

const metrixArr = [
    [boxArr[0], boxArr[1], boxArr[2]],
    [boxArr[3], boxArr[4], boxArr[5]],
    [boxArr[6], boxArr[7], boxArr[8]]
]

for (var i = 0; i < 9; i++) {
    const newBox = boxArr[i].init();
    divBox.appendChild(newBox);
}


let startFlag = false;
let stopCount = 0;

var audio = new Audio("audio/wheel.mp3"); 

const startBtn = document.querySelector("#startBtn");
startBtn.addEventListener("click", function (event) {
    if (startFlag == true)
        return
    if (startFlag === false) {
        stopCount = 0;
        boxArr.forEach(function (box) {
            box.start(Math.floor(5 + Math.random() * 20));
        });
        startFlag = true;
    }
    document.querySelector('#line1').style.display = "none";
    document.querySelector('#line2').style.display = "none";
    document.querySelector('#line3').style.display = "none";
    document.querySelector('#line4').style.display = "none";
    document.querySelector('#line5').style.display = "none";
    document.querySelector('#line6').style.display = "none";
    document.querySelector('#line7').style.display = "none";
    document.querySelector('#line8').style.display = "none";
    audio.load();
    audio.loop = true;
    audio.muted = false;
    audio.play();
});

const stopBtn = document.querySelector("#stopBtn");

stopBtn.addEventListener("click", function (event) {
    if (startFlag == false)
        return;
    audio.muted = true;
    metrixArr[0][0].stop();
    metrixArr[0][1].stop();
    metrixArr[0][2].stop();
    //document.querySelector('#line1').style.display = "block";
    var stopAudio = new Audio("audio/stop.mp3"); 
    stopAudio.play();
    setTimeout(function(){
        metrixArr[1][0].stop();
        metrixArr[1][1].stop();
        metrixArr[1][2].stop();
        var stopAudio = new Audio("audio/stop.mp3"); 
        stopAudio.play();
        //document.querySelector('#line2').style.display = "block";
    }, 1000);
    setTimeout(function(){
        metrixArr[2][0].stop();
        metrixArr[2][1].stop();
        metrixArr[2][2].stop();
        var stopAudio = new Audio("audio/stop.mp3"); 
        stopAudio.play();
        //document.querySelector('#line3').style.display = "block";
    }, 2000);
    setTimeout(function(){
        var winAudio = new Audio("audio/win.wav"); 
        if(metrixArr[0][0].yPos == metrixArr[0][1].yPos && metrixArr[0][1].yPos == metrixArr[0][2].yPos) {
            console.log("1행 맞춤...");
            document.querySelector('#line1').style.display = "block";        
            winAudio.play();
        }
        if(metrixArr[1][0].yPos == metrixArr[1][1].yPos && metrixArr[1][1].yPos== metrixArr[1][2].yPos) {
            document.querySelector('#line2').style.display = "block"; 
            winAudio.play();
        }
        if(metrixArr[2][0].yPos == metrixArr[2][1].yPos && metrixArr[2][1].yPos== metrixArr[2][2].yPos) {
            document.querySelector('#line3').style.display = "block";             
            winAudio.play();
        }
        if(metrixArr[0][0].yPos == metrixArr[1][0].yPos && metrixArr[1][0].yPos == metrixArr[2][0].yPos) {
            document.querySelector('#line4').style.display = "block";            
            winAudio.play();
        }
        if(metrixArr[0][1].yPos == metrixArr[1][1].yPos && metrixArr[1][1].yPos == metrixArr[2][1].yPos) {
            document.querySelector('#line5').style.display = "block";            
            winAudio.play();
        }
        if(metrixArr[0][2].yPos == metrixArr[1][2].yPos && metrixArr[1][2].yPos == metrixArr[2][2].yPos) {
            document.querySelector('#line6').style.display = "block";            
            winAudio.play();
        }
        if(metrixArr[2][0].yPos == metrixArr[1][1].yPos && metrixArr[1][1].yPos == metrixArr[0][2].yPos) {
            document.querySelector('#line8').style.display = "block";           
            winAudio.play();
        }
        if(metrixArr[0][0].yPos == metrixArr[1][1].yPos && metrixArr[1][1].yPos == metrixArr[2][2].yPos) {
            document.querySelector('#line7').style.display = "block";         
            winAudio.play();
        }
        startFlag = false;
        }, 2200);
});
