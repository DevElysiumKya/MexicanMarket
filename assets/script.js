document.addEventListener('DOMContentLoaded',()=>{
    const elementosCarousel = document.querySelectorAll('.carousel');
    M.Carousel.init(elementosCarousel,{
        duration: 210,
        indicators: true
    });
    document.getElementById('fire-init2').style.animation = "fireburn 1s steps(10)";
});

var burning = new Audio();
burning.src = "./assets/Fireburn.mp3";

function closex(){
    document.getElementById('fire-init2').style.display = "none";
}
function showbase(){
    document.getElementById('fire-init2').style.left = "0%";
    document.getElementById('fire-init2').style.opacity = "1";
    document.getElementById('fire-init2').style.background = "rgb(0, 0, 0, 0.9)";
    document.getElementById('fire-init2').style.display = "block";
    document.getElementById("f2img").style.display = "block"; 
    document.getElementById("closex").style.display = "block"; 
    document.getElementById("closex2").style.display = "block"; 
    document.getElementById('fire-init2').style.animation = "";
}
function menus(){
    document.getElementById('f2img').style.display="block";
    document.getElementById('f3img').style.display="none";
}
function paquetes(){
    document.getElementById('f3img').style.display="block";
    document.getElementById('f2img').style.display="none";
}
function showm1(){
    document.getElementById("f2img").src = "./assets/IMG1.jpeg";
    showbase();
    menus();
}
function showm2(){
    document.getElementById("f2img").src = "./assets/IMG2.jpeg";
    showbase();
    menus();
}
function showm3(){
    document.getElementById("f2img").src = "./assets/IMG3.jpeg";
    showbase();
    menus();
}
function showm4(){
    document.getElementById("f2img").src = "./assets/IMG4.jpeg";
    showbase();
    menus();
}
function showm5(){
    document.getElementById("f2img").src = "./assets/IMG5.jpeg";
    showbase();
    menus();
}
function showm6(){
    document.getElementById("f2img").src = "./assets/IMG6.jpeg";
    showbase();
    menus();
}
function showm7(){
    document.getElementById("f2img").src = "./assets/IMG7.jpeg";
    showbase();
    menus();
}
function showm8(){
    document.getElementById("f2img").src = "./assets/IMG8.jpeg";
    showbase();
    menus();
}
function showm9(){
    document.getElementById("f2img").src = "./assets/IMG9.jpeg";
    showbase();
    menus();
}
function showm10(){
    document.getElementById("f2img").src = "./assets/IMG10.jpeg";
    showbase();
    menus();
}
function showm11(){
    document.getElementById("f2img").src = "./assets/IMG11.jpeg";
    showbase();
    menus();
}


function showp1(){
    document.getElementById("f3img").src = "./assets/Paq1.jpeg";
    showbase();
    paquetes();
}
function showp2(){
    document.getElementById("f3img").src = "./assets/Paq2.jpeg";
    showbase();
    paquetes();
}
function showp3(){
    document.getElementById("f3img").src = "./assets/Paq3.jpeg";
    showbase();
    paquetes();
}
function showp4(){
    document.getElementById("f3img").src = "./assets/Paq4.jpeg";
    showbase();
    paquetes();
}
function showp5(){
    document.getElementById("f3img").src = "./assets/Paq5.jpeg";
    showbase();
    paquetes();
}
function showp6(){
    document.getElementById("f3img").src = "./assets/Paq6.jpeg";
    showbase();
    paquetes();
}
