"use strict";
document.getElementById('check-box').onclick = function() {
    let selected = document.querySelector('input[type=radio][name=day]:checked');
    document.getElementById("galerry-image").src = `img/gallery/galerry_${selected.value}.png`;
}