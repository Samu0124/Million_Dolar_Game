window.onload = init1;
    function init1(){
var aleatorio = Math.round(Math.random()*7);
        document.querySelector(".emergente1").style.display="none";
        document.querySelector("#container1").style.opacity="1";
        document.querySelector(".emergente .menor3").addEventListener("click",adios1);
        document.querySelector(".emergente .menor4").addEventListener("click",adios1);
        document.querySelector(".emergente .menor5").addEventListener("click",adios1);
        document.querySelector(".emergente .mayor1").addEventListener("click",hola3);

    }
        
    function adios1(){
          window.location.href = "file:///C:/Users/Marina/Desktop/Samu/Tecnolog%C3%ADa%20Segundo%20Periodo/Final/Fail.html";}    
    function hola2(){

        document.querySelector(".emergente").style.display="block";
        document.querySelector("#container").style.opacity="1";

    }
        function hola1(){
        document.querySelector(".emergente").style.display="none";
        document.querySelector("#container").style.opacity="1";
        var r;
        r=r+1;

    }
