function drawCard() {
  var randomCard = Math.floor(Math.random()*deck.length);
  return randomCard;
}

// if (value.constructor.name === 'Array') {
//   // prompt user for choice between values in 'value'
// }

// drawCard.prototype.deal function() {
//   deck[this];
// }

var newDeal = new drawCard();

document.getElementById('dealer').onclick = function () {
  console.log(newDeal);
}
