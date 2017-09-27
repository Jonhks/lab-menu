var mostrarOcultar = function(e){
  console.log(e.target);
  if(e.target.id === 'pestana1'){



  }else if (e.target.id === 'pestana2'){
  	document.getElementById("desayuno").style.display = 'none';
  	document.getElementById("cena").style.display = 'none';
  	document.getElementById("comida").style.display = 'block';
  }else if(e.target.id === 'pestana3'){
  	document.getElementById("desayuno").style.display = 'none';
  	document.getElementById("comida").style.display = 'none';
  	document.getElementById("cena").style.display = 'block';

  }
};
var hola = document.getElementsByClassName("tab");
for (var i = 0; i < hola.length; i++) {
  hola[i].addEventListener("click",mostrarOcultar);
}
