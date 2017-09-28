var mostrarOcultar = function(e){
  console.log(e.target);
  if(e.target.id === "pestana1"){

  }
};
var hola = document.getElementsByClassName("tab");
for (var i = 0; i < hola.length; i++) {
  hola[i].addEventListener("click",mostrarOcultar);
}
c
