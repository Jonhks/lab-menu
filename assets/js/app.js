var mostrarOcultar = function(e){
  console.log(e.target);
  if(e.target.id === 'pestana1'){
    document.getElementById('comida').style.display='none';
    document.getElementById('cena').style.display='none';
    document.getElementById("desayuno").style.display = 'block';
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

function cargarPagina (){
  var elementosClaseTab = document.getElementsByClassName('tab');
  var elementosClaseContenido = document.getElementsByClassName('contenido');
  for (var i = 0; i < elementosClaseTab.length; i++) {
    elementosClaseContenido[i].style.display='none';
    elementosClaseTab[i].addEventListener('click',mostrarOcultar);
  }
}
cargarPagina();
