// carousel in JavaScript

var i = 0;
var images = [];
var time = 2000;
var path = "";

images[0] = "images/coverPage1.jpg";
images[1] = "images/coverPage2.jpg";
images[2] = "images/coverPage3.jpg";

function changeImage() {
  document.querySelector(
    ".coverImages"
  ).style.backgroundImage = `url(${images[i]})`;

  if (i < images.length - 1) {
    i++;
  } else {
    i = 0;
  }
  setTimeout("changeImage()", time);
}
window.onload = changeImage;

// var myIndex = 0;
// carousel();

// function carousel() {
//   var i;
//   var x = document.getElementsByClassName("mySlides");
//   for (i = 0; i < x.length; i++) {
//     x[i].style.display = "none";
//   }
//   myIndex++;
//   if (myIndex > x.length) {
//     myIndex = 1;
//   }
//   x[myIndex - 1].style.display = "block";
//   setTimeout(carousel, 2500); // Change image every 2.5 seconds
// }
