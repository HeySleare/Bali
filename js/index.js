"use strict";
document.getElementById('check-box').onclick = function() {
    let selected = document.querySelector('input[type=radio][name=day]:checked');
    document.getElementById("galerry-image").src = `img/gallery/galerry_${selected.value}.png`;
    document.getElementById("dot-in-dot").src = `img/icons/ellipse-5.png`;
}
$(document).ready(function(){
    $('.header__burger').click(function(event){
        $('.header__burger,.header-menu').toggleClass('active');
    });
});

let offset = 0;
const revievsContainer = document.querySelector('.revievs-container');
document.querySelector('.left-button').addEventListener('click', function(){
        offset += 555;
        if(offset >= 1110){
            offset=1110;
            document.querySelector('.left-button').style.background = `#434347`;
        }
        document.querySelector('.right-button').style.background = `#fff`;
        revievsContainer.style.left = -offset +`px`;
        console.log(offset);
});
document.querySelector('.right-button').addEventListener('click', function(){
    offset -= 555;
    if(offset <= 0){
        offset=0;
        document.querySelector('.right-button').style.background = `#434347`;
    }
    document.querySelector('.left-button').style.background = `#fff`;
    revievsContainer.style.left = -offset +`px`;
    console.log(offset);
});

