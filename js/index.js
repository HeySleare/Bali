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
            $('.right-button').addClass('reviev-button-active');
        }
        $('.left-button').removeClass('reviev-button-active');
        revievsContainer.style.left = -offset +`px`;
        console.log(offset);
});
document.querySelector('.left-button').addEventListener('click', function(){
    offset -= 555;
    if(offset <= 0){
        offset=0;
        $('.left-button').addClass('reviev-button-active');
     }
     $('.right-button').removeClass('reviev-button-active');
     revievsContainer.style.left = -offset +`px`;
    console.log(offset);
});


//МОБІЛЬНА ВЕРСІЯ КАРУСЕЛІ ТАЙМЛАЙНУ
let mobileGalerryOffset = 0;
const mobileGalleryContainer = document.querySelector('.image-caruseel__checkbox-mobile');
const mobileTextContainer = document.querySelector('.text-caruseel');
document.querySelector('.right-button__checkbox').addEventListener('click', function(){
    mobileGalerryOffset += 100;
        if(mobileGalerryOffset >= 200){
            mobileGalerryOffset=200;
            $('.right-button__checkbox').addClass('galerry-button-active');
        }
        $('.left-button__checkbox').removeClass('galerry-button-active');
        mobileTextContainer.style.left = -mobileGalerryOffset +`%`;
        mobileGalleryContainer.style.left = -mobileGalerryOffset +`%`;
});
document.querySelector('.left-button__checkbox').addEventListener('click', function(){
    mobileGalerryOffset -= 100;
        if(mobileGalerryOffset <= 0){
            mobileGalerryOffset=0;
            $('.left-button__checkbox').addClass('galerry-button-active');
        }
        $('.right-button__checkbox').removeClass('galerry-button-active');
        mobileTextContainer.style.left = -mobileGalerryOffset +`%`;
        mobileGalleryContainer.style.left = -mobileGalerryOffset +`%`;
});
