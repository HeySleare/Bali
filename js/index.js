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