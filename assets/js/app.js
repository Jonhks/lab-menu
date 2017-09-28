var mostrarOcultar = function(e) {
  var targetedTab = e.target.dataset.targetedTab;
  if (targetedTab === "pestana1") {
    document.getElementById("comida").style.display = "none";
    document.getElementById("cena").style.display = "none";
    document.getElementById("desayuno").style.display = "block";
  } else if (targetedTab === "pestana2") {
    document.getElementById("desayuno").style.display = "none";
    document.getElementById("cena").style.display = "none";
    document.getElementById("comida").style.display = "block";
  } else if (targetedTab === "pestana3") {
    document.getElementById("desayuno").style.display = "none";
    document.getElementById("comida").style.display = "none";
    document.getElementById("cena").style.display = "block";
  }
};
var cargarPagina = function() {
  var elementosClaseTab = document.getElementsByClassName("tab");
  for (var i = 0; i < elementosClaseTab.length; i++) {
    elementosClaseTab[i].addEventListener("click", mostrarOcultar);
  }
};

cargarPagina();
