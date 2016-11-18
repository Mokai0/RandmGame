//Monster images
var catArr = ["cat01.jpg", "cat02.jpg", "cat03.jpg", "cat04.jpg", "cat05.jpg", "cat06.jpg", "cat07.jpg", "cat08.jpg", "cat09.jpg", "cat10.jpg", "cat11.jpg"];
//Generate a random image
function imgArr() {
  var randomVariable = Math.floor(Math.random()*catArr.length);
  return randomVariable;
}
