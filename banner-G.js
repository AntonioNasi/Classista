var myIndex = 0;
carousel();

function carousel() {
  var s;
  var x = document.getElementsByClassName("slide-g");
  for (s = 0; s < x.length; s++) {
    x[s].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 5000);    
}