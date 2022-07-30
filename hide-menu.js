//Faz com que a barra do menu desapareça quando rolar a página para baixo, mas apareça quando rolar a página para

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("escondeMenu").style.top = "0";
  } else {
    document.getElementById("escondeMenu").style.top = "-93px";
  }
  prevScrollpos = currentScrollPos;
}