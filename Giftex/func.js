myID = document.getElementById("fade");

var myScrollFunc = function() {
  var y = window.scrollY;
  if (y >= 200) {
    myID.className = "menu show"
  } else {
    myID.className = "menu hide"
  }
};

window.addEventListener("scroll", myScrollFunc);