// script.js
window.onload = function () {
    var canvas = document.getElementById("mainFrame");
    var ctx = canvas.getContext("2d");
    if (!ctx) {
        console.error("Failed to get 2D context");
        return;
    }

    var backgroundImage = new Image();
    backgroundImage.src = "res/background.png"; // 배경 이미지 파일 경로

    backgroundImage.onload = function () {
        ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);

        // 이미지 로딩 및 랜덤 배치 함수 호출
        let images = ["res/car.png", "res/abg.png", "res/car.png"];
        let loadedImages = [];
        let imagesLoaded = 0;

        function loadImage(src, callback) {
            var img = new Image();
            img.src = src;
            img.onload = function () {
                callback(img);
            };
        }

        function onImageLoad(img) {
            loadedImages.push(img);
            imagesLoaded++;
            if (imagesLoaded === images.length) {
                drawRandomImages();
            }
        }

        function drawRandomImages() {
            for (var i = 0; i < 3; i++) { // 10개의 이미지를 랜덤하게 배치
                var img = loadedImages[Math.floor(Math.random() * loadedImages.length)];
                var x = Math.random() * (canvas.width - img.width);
                // y 좌표를 캔버스 높이 절반 이하로 제한
                var y = Math.random() * (canvas.height / 2 - img.height) + (canvas.height / 2);
                ctx.drawImage(img, x, y);
            }
        }

        // 모든 이미지 로드
        for (var i = 0; i < images.length; i++) {
            loadImage(images[i], onImageLoad);
        }

        
    };
};
