let star = document.getElementById("star");
let moon = document.getElementById("moon");
let mountains3 = document.getElementById("mountains3");
let mountains4 = document.getElementById("mountains4");
let river = document.getElementById("river");
let boat = document.getElementById("boat");
let omnia = document.querySelector(".omnia");

window.onscroll = function () {
  let value = scrollY
  star.style.left = value + "px";
  moon.style.top = value * 3 + "px";
  mountains3.style.top = value * 2 + "px";
  mountains4.style.top = value *1.5 + "px";
  river.style.top = value + "px";
  boat.style.top = value + "px";
  boat.style.left = value * 3 + "px";
  omnia.style.fontSize = value + "px";
  if (scrollY >= 67) {
    omnia.style.fontSize = 67 + "px";
    omnia.style.position = "fixed";
    if (scrollY >= 383) {
      omnia.style.display="none"
      
    } else {
      omnia.style.display="block"
    }
    
  }
  if (scrollY >= 127) {
   
    document.body.style.background = "linear-gradient(#376281,#10001f)";
    
  } else {
    document.body.style.background = 'linear-gradient(#200016,#10001f)';
    
  }
}