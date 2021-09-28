// Muda a imagem e o texto do Banner 01
var estiloba = window.document.getElementById('ba')
estiloba.style.backgroundColor = '#e9e9e9'

window.onload = function imgA() {
document.getElementById("imgA").src = "pedro-santos-1080x1080.png"; }

var titulo1 = window.document.getElementById('titulo1')
titulo1.innerHTML = "As atividades de extensão do LAPPS/GPTREES retornam nessa semana"
titulo1.style.color = 'red'
titulo1.style.paddingBottom = '30px'

var descri1 = window.document.getElementById('descri1')
descri1.innerHTML = "As palestras serão transmitidas pelo canal da FECLESC no Youtube."
descri1.style.color = 'black'

var sabermais = window.document.getElementById('tela-principal-saiba-mais')
sabermais.style.display = 'none'