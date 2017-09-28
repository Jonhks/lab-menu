
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
var cargarPagina = function(){
  document.getElementById("desayuno").style.display = 'none';
  document.getElementById("comida").style.display = 'none';
  document.getElementById("cena").style.display = 'none';

  var elementosClaseTab = document.getElementsByClassName('tab');
  for (var i = 0; i < elementosClaseTab.length; i++) {
    elementosClaseTab[i].addEventListener('click',mostrarOcultar);
  }
}
var estilosPresentacion = function(){
  var seccionInicial=document.getElementById('seccionInicial');
  var titulo = seccionInicial.firstChild.nextElementSibling;
  var descripcionRestaurante=titulo.nextElementSibling;
  titulo.style.color='#fcb425';
  titulo.style.textAlign='center';
  titulo.style.fontSize='3em';
  descripcionRestaurante.style.fontSize='1em';



}
var estilosTabs=function(){
  var contenedorTabs=document.getElementsByClassName('contenedorTabs')[0];
  contenedorTabs.style.borderBottom='#fcb425 1px solid';
  contenedorTabs.style.width='100%';
  contenedorTabs.style.color='black';
  var tabs = contenedorTabs.getElementsByClassName('tab');
  for(var i = 0; i<tabs.length;i++){
    tabs[i].style.color='black';
    tabs[i].style.backgroundColor='#fcb425';
    tabs[i].style.borderRadius='5%';
    tabs[i].style.borderBottom='none'
    tabs[i].style.padding='10px';
    tabs[i].style.width='100px';
  }
}

cargarPagina();
estilosTabs();
estilosPresentacion();
