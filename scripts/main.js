let menu = document.getElementById('menu');
let altura = menu.offsetTop;
let ocultar = document.getElementById('ocultar')
let ocultarMenu = ocultar.offsetTop;


 window.addEventListener('scroll', function(){
    if(window.pageYOffset > altura) {
        menu.classList.add('fixed')
    }else{
        menu.classList.remove('fixed')
    }
}) 


