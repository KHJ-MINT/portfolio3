// window width : 1000px;
// pageX : 0~1000

// pageX : 100/1000 * 100

// Math.floor(pageX / width * 200); 마우스의 위치에 따라 0~199까지 숫자가 나온다.
// $('body').on('mousemove',function(event){
// 	let moveX = event.pageX;
// 	let winW = $(window).width();
// 	let imgNum = Math.floor((moveX / winW) * 200);
// })
$(document).ready(function(){
    //이미지의 번호는 0~199까지
    let imgNum = [];
    let inHtml = '';
    for (let i = 0; i < 200; i++) {
        imgNum = i;
        //console.log(imgNum);
        inHtml +=  `<img src="img/pic${imgNum}.jpg" alt="">`
    }
    //이미지를 넣을 section
    let section = $('section');
    section.html(inHtml);
    
    //마우스의 움직임(pageX)에 따라 보이는 이미지의 번호가 바뀐다.
    $('body').on('mousemove',function(e){
        let pageX = Math.floor((e.pageX)/1000 * 105);
        section.find('img').css('display','none');
        section.find('img').eq(pageX).css('display','block');
    })
})