// Get the button
let mybuttonS = document.getElementById("myBtnS");

// When the user scrolls down 200px from the top of the document, show the button
window.onscroll = function() {scrollFunctionS()};

function scrollFunctionS() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    mybuttonS.style.display = "block";
  } else {
    mybuttonS.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunctionS() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}