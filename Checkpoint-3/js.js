var hold1 = document.getElementById('holdSquare1');
var hold2 = document.getElementById('holdSquare2');
var hold3 = document.getElementById('holdSquare3');
var hold4 = document.getElementById('holdSquare4');
var hold5 = document.getElementById('holdSquare5');

function hold(holdSquare) {
  let holdCont = document.getElementById(holdSquare);
  let classSquare = document.getElementsByClassName('holdCont');

   for (var i = 0; i < classSquare.length; i++){
     classSquare[i].innerHTML = "";
     classSquare[i].style.filter = "brightness(100%)";
   }
   holdCont.style.filter = "brightness(10%)";
  holdCont.innerHTML = "selected"
}



 function square(hole) {
   let holeStyle = document.getElementById(hole);

   if (hold1.innerHTML === "selected") {
     holeStyle.style.clipPath = "ellipse(36% 16% at 46% 51%)";
     holeStyle.style.backgroundColor = "rgb(133,20,75)"
     holeStyle.style.width = "60%";
     holeStyle.style.height = "60%";
   } else if (hold2.innerHTML === "selected") {
     holeStyle.style.clipPath = "polygon(27% 25%, 75% 25%, 75% 93%, 26% 93%)";
     holeStyle.style.backgroundColor = "rgb(255,220,0)"
     holeStyle.style.width = "60%";
     holeStyle.style.height = "60%";
   } else if (hold3.innerHTML === "selected") {
     holeStyle.style.clipPath = "ellipse(16% 34% at 50% 51%)";
     holeStyle.style.backgroundColor = "pink"
     holeStyle.style.width = "60%";
     holeStyle.style.height = "60%";
   } else if (hold4.innerHTML === "selected") {
     holeStyle.style.clipPath = "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)";
     holeStyle.style.backgroundColor = "rgb(57,204,204)"
     holeStyle.style.width = "60%";
     holeStyle.style.height = "60%";
   } else if (hold5.innerHTML === "selected") {
     holeStyle.style.clipPath = "ellipse(36% 34% at 50% 51%)";
     holeStyle.style.backgroundColor = "rgb(0,31,63)"
     holeStyle.style.width = "60%";
     holeStyle.style.height = "60%";
   }

 }
