window.onload = init;
    function init(){
var aleatorio = Math.round(Math.random()*7);
        document.querySelector(".emergente").style.display="none";
        document.querySelector("#container").style.opacity="1";
        document.querySelector(".emergente .menor").addEventListener("click",adios);
        document.querySelector(".emergente .menor1").addEventListener("click",adios);
        document.querySelector(".emergente .menor2").addEventListener("click",adios);
        document.querySelector(".emergente .mayor").addEventListener("click",hola1);

    }
        
    function adios(){
          window.location.href = "file:///C:/Users/Marina/Desktop/Samu/Tecnolog%C3%ADa%20Segundo%20Periodo/Final/Fail.html";}    
    function hola(){

        document.querySelector(".emergente").style.display="block";
        document.querySelector("#container").style.opacity="1";

    }
        function hola1(){
  
        document.querySelector(".emergente").style.display="none";
        document.querySelector("#container").style.opacity="1";
        var r;
        r=r+1;
        var aleatorio = Math.round(Math.random()*3);    
        if (aleatorio == 0) {
            window.location.href = "file:///C:/Users/Marina/Desktop/Samu/Tecnolog%C3%ADa%20Segundo%20Periodo/Final/Pregunta2.html";}
        
if (aleatorio == 1)
{
    window.location.href = "file:///C:/Users/Marina/Desktop/Samu/Tecnolog%C3%ADa%20Segundo%20Periodo/Final/Pregunta3.html";}
    if (aleatorio == 2)
{
    window.location.href = "file:///C:/Users/Marina/Desktop/Samu/Tecnolog%C3%ADa%20Segundo%20Periodo/Final/Pregunta4b.html";}
    if (aleatorio == 3)
{
    window.location.href = "file:///C:/Users/Marina/Desktop/Samu/Tecnolog%C3%ADa%20Segundo%20Periodo/Final/Pregunta8c.html";}
}