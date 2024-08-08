// $(document).ready()의 축약한 형태
let cnt = 1;
$(function () {
    $("#saveBtn").on("click", function () {
        // $("body").css({
        //     background: "skyblue",
        // });
        // innerHTML = .html()
        // innerText = .text()
        // value = .val()
        // alert($("#title").val());

        // input 에서 읽어온 text를 listArea에 추가
        // jQuery append() 함수 사용 - 문자열을 즉시 DOM으로
        if ($("#title").val()) {
            $("#listArea").append(
                `<li data-no="10${cnt++}">
                <input type="checkbox"/>
                <span>${$("#title").val()}</span>
                <button class = "delBtn">DELETE</button>
                <button class = "editBtn">EDIT</button>
            </li>`
            );
            $(".delBtn").on("click", function (e) {
                // console.log(e.target.parentElement); 은 DOM
                //$(e.target)은 jQuery 객체                        
                console.log($(e.target).parent().find("span").text()); 
                console.log($(e.target).parent().data("no"));
                // css("color") 인자를 하나만 쓰면 getter
                // css("color", "orange") 인자 두개는 setter
            });

            $(".editBtn").on("click", function () {
                alert("edit");
            });
            // 여러개 들어가니 id 대신 class
            $("#title").val("");
        } else {
            alert("제목 입력!");
            $("#title").focus();
            return;
        }
    });

    // 미리 생성 X
    // $(".delBtn").on("click", function () {
    //     alert("del");
    // });

    // $(".editBtn").on("click", function () {
    //     alert("edit");
    // });


});