document.getElementById("about-but").onclick = function () {
    hideAll("about");
}

document.getElementById("main-but").onclick = function () {
    hideAll("main");
}

document.getElementById("gallery-but").onclick = function () {
    hideAll("gallery");
}

document.getElementById("price-but").onclick = function () {
    hideAll("price");
}

document.getElementById("sign-but").onclick = function () {
    hideAll("sign");
}

document.getElementById("contacts-but").onclick = function () {
   hideAll("contacts");    
}

function hideAll (abra) {
    let elements =  document.getElementsByClassName("hide");
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.display = "none";
    }

    document.getElementById(abra).style.display = "block"
}

document.getElementById("slider-left").onclick = sliderLeft;

let left = 0;

function sliderLeft () {
   let polosa = document.getElementById("polosa");
   left = left - 250;
   if (left < -3500){
       left = 0;
   }
   polosa.style.left = left +"px";
}
