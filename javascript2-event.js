

// Ex9-마우스 이벤트 객체 : 빅스의 옵셋 영역 좌표 이용하기
window.addEventListener("load", function(){
    var section = document.querySelector("#section9");
    var container = section.querySelector(".container");
    var status = section.querySelector(".status");
    var dragging = false;
    var offset = {x:0, y:0};
    var current = null;
    var left = container.offsetLeft;
    var top = container.offsetTop;

    container.onmousedown = function(e) {
        if(e.target.classList.contains("box")) {
            dragging = true;
            current = e.target;
            offset.x = e.offsetX;
            offset.y = e.offsetY;
        }
    };

    container.onmousemove = function(e) {
        if(!dragging) return;

        var x = e.pageX - offset.x - left;
        var y = e.pageY - offset.y - top;
        
        current.style.left = x +"px";
        current.style.top = y +"px";

        status.innerText = "(x,y) : ("+x+","+y+")";
    };

    container.onmouseup = function(e) {
        dragging = false;
    };

});

// Ex8-마우스 이벤트 객체 : 여러개 박스 드래그 방식으로 옮기기
window.addEventListener("load", function(){
    var section = document.querySelector("#section8");
    var container = section.querySelector(".container");
    var box = section.querySelector(".box");
    var dragging = false;
    var offset = {x:0, y:0};
    var current = null;

    container.onmousedown = function(e) {
        
        if(e.target.classList.contains("box")) {
            dragging = true;
            current = e.target;
            offset.x = e.offsetX;
            offset.y = e.offsetY;
    
        }
    };

    container.onmousemove = function(e) {
        if(!dragging) return;
        
        current.style.left = e.pageX - offset.x +"px";
        current.style.top = e.pageY - offset.y +"px";
    };

    container.onmouseup = function(e) {
        dragging = false;
    };

});

// Ex7-마우스 이벤트 객체 : 드래그 방식으로 박스 옮기기
window.addEventListener("load", function(){
    var section = document.querySelector("#section7");
    var container = section.querySelector(".container");
    var box = section.querySelector(".box");
    var dragging = false;
    var offset = {x:0, y:0};

    container.onmousedown = function(e) {
        // console.log(e.target);
        if(e.target == box)
            dragging = true;
    };

    container.onmousemove = function(e) {
        if(!dragging) return;
        
        box.style.left = e.pageX - offset.x +"px";
        box.style.top = e.pageY - offset.y +"px";
    };

    container.onmouseup = function(e) {
        dragging = false;
    };

    box.onmousedown = function(e) {
        offset.x = e.offsetX;
        offset.y = e.offsetY;
    }
});

// Ex6-마우스 이벤트 객체 : 마우스 좌표
window.addEventListener("load", function(){
    var section = document.querySelector("#section6");
    var container = section.querySelector(".container");
    var box = section.querySelector(".box");

    container.onclick = function(e) {
        console.log("       x , y --> " + e.x + " , " + e.y);
        console.log("client x , y --> " + e.clientX + " , " + e.clientY);
        console.log("page   x , y --> " + e.pageX + " , " + e.pageY);
        console.log("offset x , y --> " + e.offsetX + " , " + e.offsetY);

        box.style.position = "absolute";
        box.style.left = e.x+"px";
        box.style.top = e.y+"px";

    };
});


// Ex5-Trigger
window.addEventListener("load", function(){
    var section = document.querySelector("#section5");
    var fileButton = section.querySelector(".file-button");
    var fileTriggerButton = section.querySelector(".file-trigger-button");

    fileTriggerButton.onclick = function() {
        var event = new MouseEvent("click", {
            'view':window,
            'bubbles':true,
            'cancelable':true
        });

        fileButton.dispatchEvent(event);
    };
});

// Ex4-서로 다른 기능의 여러버튼을 가진 화면에서 이벤트를 처리하는 방법
window.addEventListener("load", function(){
    var section = document.querySelector("#section4");
    var tbody = section.querySelector(".notice-list tbody");

    tbody.onclick = function(e) {
        e.preventDefault();

        var target = e.target;
        if(target.nodeName != "A") 
            return;

        if(target.classList.contains("sel-button")) {
            var tr = target.parentElement;

            for( ; tr.nodeName != "TR"; tr=tr.parentElement );
            tr.style.background = "yellow";

        } else if(target.classList.contains("edit-button")) {

        } else if(target.classList.contains("del-button")) {
            // var tr = e.target.parentElement.parentElement;
            // tr.remove();
        }

    };
}); 


// Ex3-이벤트 버블링 멈추기
window.addEventListener("load", function(){

    var section = document.querySelector("#section3");
    
    var imgList = section.querySelector(".img-list"); 
    var addButton = section.querySelector(".add-button");
    var currentImg = section.querySelector(".current-img");
    
    imgList.onclick = function(e){
        console.log("imgList.onclick");
        if(e.target.nodeName != "IMG") return;
        currentImg.src = e.target.src;
    };

    addButton.onclick = function(e){
        e.stopPropagation();

        console.log("addButton.onclick");
        var img = document.createElement("img");
        img.src = "images/img1.jpg";

        currentImg.insertAdjacentElement("afterend", img);
    };

}); 





//Ex2-이벤트 버블링을 이용해 사용자 이벤트 처리하기:event Bubbling
window.addEventListener("load", function(){

    var section = document.querySelector("#section2");
    var imgList = section.querySelector(".img-list"); 
    var currentImg = section.querySelector(".current-img");
    
    imgList.onclick = function(e){
        if(e.target.nodeName != "IMG") return;

        currentImg.src = e.target.src;
    };
}); 


//연습문제 1-선택된 레코드 삭제하기:event target
window.addEventListener("load", function(){
    var section = document.querySelector("#section1-1");
    var bodyList = section.querySelector(".body-list");

    bodyList.onclick = function(e) {
        if(e.target.nodeName != "INPUT") return;

        var tr = e.target.parentElement.parentElement;
        tr.remove();
    };
}); 

// window.addEventListener("load", function(){
//     var section = document.querySelector("#section1-1");
//     var delButtons = section.querySelectorAll(".del-button");

//     for(var i=0; i<delButtons.length; i++ ) 
//         delButtons[i].onclick = function(e) {
//             var tr = e.target.parentElement.parentElement;
//             tr.remove();
//         };
// }); 



//Ex1-선택된 이미지 보여주기:event target
window.addEventListener("load", function(){

    var section = document.querySelector("#section1");
    
    var imgs = section.querySelectorAll(".img");
    var currentImg = section.querySelector(".current-img");

    for(var i=0; i<imgs.length; i++ )
        imgs[i].onclick = function(e) {
            currentImg.src = e.target.src;
        };

}); 