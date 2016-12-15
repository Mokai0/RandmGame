var deck = [
  {"value":[1, 11], "suit": "Spades", "name":"Ace"},
  {"value":2, "suit":"Spades", "name":"Two"},
  {"value":3, "suit":"Spades", "name":"Three"},
  {"value":4, "suit":"Spades", "name":"Four"},
  {"value":5, "suit":"Spades", "name":"Five"},
  {"value":6, "suit":"Spades", "name":"Six"},
  {"value":7, "suit":"Spades", "name":"Seven"},
  {"value":8, "suit":"Spades", "name":"Eight"},
  {"value":9, "suit":"Spades", "name":"Nine"},
  {"value":10, "suit":"Spades", "name":"Ten"},
  {"value":11, "suit":"Spades", "name":"Jack"},
  {"value":12, "suit":"Spades", "name":"Queen"},
  {"value":13, "suit":"Spades", "name":"King"},
  {"value":[1, 11], "suit": "Diamonds", "name":"Ace"},
  {"value":2, "suit":"Diamonds", "name":"Two"},
  {"value":3, "suit":"Diamonds", "name":"Three"},
  {"value":4, "suit":"Diamonds", "name":"Four"},
  {"value":5, "suit":"Diamonds", "name":"Five"},
  {"value":6, "suit":"Diamonds", "name":"Six"},
  {"value":7, "suit":"Diamonds", "name":"Seven"},
  {"value":8, "suit":"Diamonds", "name":"Eight"},
  {"value":9, "suit":"Diamonds", "name":"Nine"},
  {"value":10, "suit":"Diamonds", "name":"Ten"},
  {"value":11, "suit":"Diamonds", "name":"Jack"},
  {"value":12, "suit":"Diamonds", "name":"Queen"},
  {"value":13, "suit":"Diamonds", "name":"King"},
  {"value":[1, 11], "suit": "Clubs", "name":"Ace"},
  {"value":2, "suit":"Clubs", "name":"Two"},
  {"value":3, "suit":"Clubs", "name":"Three"},
  {"value":4, "suit":"Clubs", "name":"Four"},
  {"value":5, "suit":"Clubs", "name":"Five"},
  {"value":6, "suit":"Clubs", "name":"Six"},
  {"value":7, "suit":"Clubs", "name":"Seven"},
  {"value":8, "suit":"Clubs", "name":"Eight"},
  {"value":9, "suit":"Clubs", "name":"Nine"},
  {"value":10, "suit":"Clubs", "name":"Ten"},
  {"value":11, "suit":"Clubs", "name":"Jack"},
  {"value":12, "suit":"Clubs", "name":"Queen"},
  {"value":13, "suit":"Clubs", "name":"King"},
  {"value":[1, 11], "suit": "Hearts", "name":"Ace"},
  {"value":2, "suit":"Hearts", "name":"Two"},
  {"value":3, "suit":"Hearts", "name":"Three"},
  {"value":4, "suit":"Hearts", "name":"Four"},
  {"value":5, "suit":"Hearts", "name":"Five"},
  {"value":6, "suit":"Hearts", "name":"Six"},
  {"value":7, "suit":"Hearts", "name":"Seven"},
  {"value":8, "suit":"Hearts", "name":"Eight"},
  {"value":9, "suit":"Hearts", "name":"Nine"},
  {"value":10, "suit":"Hearts", "name":"Ten"},
  {"value":11, "suit":"Hearts", "name":"Jack"},
  {"value":12, "suit":"Hearts", "name":"Queen"},
  {"value":13, "suit":"Hearts", "name":"King"}
]

function drawCard(deck) {
  this.card = deck.length;
}

drawCard.prototype.createCard = function() {
  var randomCard = Math.floor(Math.random()*this);
  return randomCard;
}

var card = new drawCard();
