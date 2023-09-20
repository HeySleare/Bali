"use strict";
// document.getElementById('check-box').onclick = function() {
//     let selected = document.querySelector('input[type=radio][name=day]:checked');
//     document.getElementById("galerry-image").src = `img/gallery/galerry_${selected.value}.png`;
//     document.getElementById("dot-in-dot").src = `img/icons/ellipse-5.png`;
// }


// МЕНЮ БУРГЄР:
$(document).ready(function(){
    $('.header__burger').click(function(event){
        $('.header__burger,.header-menu').toggleClass('active');
    });
});

//КАРТИНКИ ГАЛЕРЕЇ:
let galerryOffset = 0;
const galleryContainer = document.querySelector('.image-box__check-box-container');
document.getElementById('check-box').onclick = function() {
    let selected = document.querySelector('input[type=radio][name=day]:checked');
    console.log("обраний день:", selected.value);
    console.log("офсет: ", galerryOffset);
    if(selected.value=='day1'){
        galerryOffset = 0;
    }if(selected.value=='day2'){
        galerryOffset = -347;
    }if(selected.value=='day3'){
        galerryOffset = -695;
    }
    galleryContainer.style.top = galerryOffset+`px`;
}

//ВІДГУКИ:
let offset = 0;
const revievsContainer = document.querySelector('.revievs-container');
document.querySelector('.right-button').addEventListener('click', function(){
        offset += 555;
        if(offset >= 1110){
            offset=1110;
            document.querySelector('.right-button').style.background = `#434347`;
        }
        document.querySelector('.left-button').style.background = `#fff`;
        revievsContainer.style.left = -offset +`px`;
        console.log(offset);
});
document.querySelector('.left-button').addEventListener('click', function(){
    offset -= 555;
    if(offset <= 0){
        offset=0;
        document.querySelector('.left-button').style.background = `#434347`;
    }
    document.querySelector('.right-button').style.background = `#fff`;
    revievsContainer.style.left = -offset +`px`;
    console.log(offset);
});

