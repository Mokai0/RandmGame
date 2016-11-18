//Fighter images

//Monster images
var catArr = ["cat01.jpg", "cat02.jpg", "cat03.jpg", "cat04.jpg", "cat05.jpg", "cat06.jpg", "cat07.jpg", "cat08.jpg", "cat09.jpg", "cat10.jpg", "cat11.jpg"];
//Generate a random image
function imgArr() {
  var randomVariable = Math.floor(Math.random()*catArr.length);
  return randomVariable;
}

// function randomCat(catArr, path) {
//   path = '../img/monsters/';
//   var num = Math.floor(Math.random() * catArr.length);
//   var img = catArr[num];
//   var catPic = '<img id="monsterCat" src="' + path + img + '">';
// }

// ei.outerHTML = "<img id=monsterCat src='img/monsters/''" + randomCat + "'>";

// var random_images_array = ["img1.gif", "img2.gif", ...];
// function getRandomImage(imgAr, path) {
//     path = path || 'images/'; // default path here
//     var num = Math.floor( Math.random() * imgAr.length );
//     var img = imgAr[ num ];
//     var imgStr = '<img src="' + path + img + '" alt = "">';
//     document.write(imgStr); document.close();
// }
