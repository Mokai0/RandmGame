var brawler = new fighterStats(90, 7, 3);
var tank = new fighterStats(110, 3, 7);
var expert = new fighterStats(100, 5, 5);
var fighterSelect;

function fighterStats(hp, atk, def) {
  this.hp = hp;
  this.atk = atk;
  this.def = def;
}

function fighterSelection() {
  var placeholder = document.getElementById('selectedFighter');
  placeholder.innerHTML = fighterSelect;
}

document.getElementById("choose").addEventListener("click", "jsjsjs");

function fighter () {
  alert('this');

  // return name;
}


// fighter.prototype.levelUp function (hp, atk, def) {
//   this.hp*MC;
//   this.atk*(MC/2);
//   this.def*(MC/2);
// }
