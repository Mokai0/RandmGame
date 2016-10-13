var brawler = new fighterStats("Turk the Brawler", 90, 7, 3);
var tank = new fighterStats("Frank the Tank", 110, 3, 7);
var expert = new fighterStats("Mr. Miyagi the Expert", 100, 5, 5);
var fighterSelect;

function fighterStats(name, hp, atk, def) {
  this.name = name;
  this.hp = hp;
  this.atk = atk;
  this.def = def;
}
// document.getElementById('my-object').innerText = JSON.stringify(myObject, null, 2)
function fighterSelection() {
  document.getElementById('selectedFighter').innerText = "you've clicked on "+JSON.stringify(fighterSelect, null, 2);
  // var placeholder = document.getElementById('selectedFighter');
  // placeholder.innerHTML = fighterSelect;
}

document.getElementById("choose").addEventListener("click", fighterSelection);

function fighter () {
  alert('this');

  // return name;
}


// fighter.prototype.levelUp function (hp, atk, def) {
//   this.hp*MC;
//   this.atk*(MC/2);
//   this.def*(MC/2);
// }
