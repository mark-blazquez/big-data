var tema=document.getElementById("tema");
var body= document.body;

function cambiarTema(){
    
    if (body.style.background=="black"){
        body.style.background="white"
        body.style.color="black"
    }else{
        body.style.background="black"
        body.style.color="white"
    }
}