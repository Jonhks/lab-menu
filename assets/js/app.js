
var mostrarOcultar = function(e){
  console.log(e.target);
  if(e.target.id === 'pestana1'){
    document.getElementById('desayuno').classList=mostrar;
    document.getElementById('comida').classList.add('ocultar');
    document.getElementById('cena').classList.add('ocultar');
    // document.getElementById("desayuno").style.display = 'block';
  }else if (e.target.id === 'pestana2'){
  	document.getElementById("desayuno").style.display = 'none';
  	document.getElementById("cena").style.display = 'none';
  	document.getElementById("comida").style.display = 'block';
  }else if(e.target.id === 'pestana3'){
  	document.getElementById("desayuno").style.display = 'none';
  	document.getElementById("comida").style.display = 'none';
  	document.getElementById("cena").style.display = 'block';
  }
}
var cargarPagina = function(){
  var elementosClaseTab = document.getElementsByClassName('tab');
  for (var i = 0; i < elementosClaseTab.length; i++) {
    elementosClaseTab[i].addEventListener('click',mostrarOcultar);
  }
}

cargarPagina();
