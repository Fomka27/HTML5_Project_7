//Блок Обратная связь//
var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];


btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Мобильное меню//
function openNav() {
  document.getElementById("nav-mobile").style.width = "100%";
}

function closeNav() {
  document.getElementById("nav-mobile").style.width = "0%";
}