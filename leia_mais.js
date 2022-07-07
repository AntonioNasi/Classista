function myFunction1() {
    var dots = document.getElementById("dots1");
    var moreText = document.getElementById("more1");
    var btnText = document.getElementById("bt1");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Continuar lendo"; 
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Minimizar leitura"; 
        moreText.style.display = "inline";
    }
}