alert('works on 1440 and mobile');

function myFunction() {
  var x = document.getElementById("myLinks");
  var y = document.getElementById("mobile-img");
  var a = document.getElementById("bodi");
  if (x.style.display === "block") {
    x.style.display = "none";
    y.style.marginTop = "0px";
    a.style.overflow = "auto";
  } else {
    x.style.display = "block";
    y.style.marginTop = "-27px";
    a.style.overflow = "hidden";
  }
}