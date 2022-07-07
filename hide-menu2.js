//Faz com que a barra do menu desapareça quando rolar a página para baixo, mas apareça quando rolar a página para

var prevScrollpos = window.pageYOffset;
window.onscroll = functionh() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("hide2").style.top = "0";
  } else {
    document.getElementById("hide2").style.top = "-87px";
  }
  prevScrollpos = currentScrollPos;
}