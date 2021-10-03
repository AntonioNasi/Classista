// Muda a imagem e o texto do Banner 01
var estiloba = window.document.getElementById('ba')
estiloba.style.backgroundColor = "#34414c"

window.onload = function imgA() {
document.getElementById("imgA").src = "antonio-1080x1080.png"; }

var titulo1 = window.document.getElementById('titulo1')
titulo1.innerHTML = "Religião. ciência e ontologia"
titulo1.style.color = 'white'
titulo1.style.paddingBottom = '10px'

var descri1 = window.document.getElementById('descri1')
descri1.innerHTML = "No próximo encontro do GPTREES, dia 14 de outubro, o debate será sobre a relação entre religião e cência a partir de uma perspectiva ontológica."
descri1.style.color = 'white'

var sabermais = window.document.getElementById('tela-principal-saiba-mais')
sabermais.style.display = 'none'