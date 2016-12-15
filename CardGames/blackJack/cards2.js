var deck = {
  'cardValues' : [1,2,3,4,5,6,7,8,9,10,11,12,13],
  'cardSuits' : ['Spades', 'Diamonds', 'Clubs', 'Hearts'],
  'cardNames' : ['Ace', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Jack', 'Queen', 'King']
};

function drawCard(value, suit, name) {
  this.value = deck.cardValues;
  this.suit = deck.cardSuits;
  this.name = deck.cardNames;
}

drawCard.prototype.createCard = function() {
  var randomCard = Math.floor(Math.random()*this.length);
  return randomCard;
}

var card = new drawCard();
