function myFunction() {
  var x = document.getElementById("myLinks");
  var y = document.getElementById("mobile-img");
  if (x.style.display === "block") {
    x.style.display = "none";
    y.style.marginTop = "0px";
  } else {
    x.style.display = "block";
    y.style.marginTop = "-27px";
  }
}