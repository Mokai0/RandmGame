var brawler = new fighterStats("Turk the Brawler", 90, 12, 4);
var tank = new fighterStats("Frank the Tank", 110, 4, 12);
var expert = new fighterStats("Mr. Miyagi the Expert", 100, 8, 8);
var fighterSelect;

// document.getElementById('brawler').addEventListener('click', fighterSelect = brawler)
function fighterStats(name, hp, atk, def) {
  this.name = name;
  this.hp = hp;
  this.hp2 = hp;
  this.atk = atk;
  this.def = def;

  /** Takes damage from an enemy@param{int} damage The damage taken*/
  this.takeDamage = function(damage) {
    this.hp2 = this.hp2 - damage;
    this.hp2 = this.hp2 < 0 ? 0 : this.hp2;
    // console.log('You have taken ' + damage + 'damage!');
  }
}

function fighterSelection() {
  document.getElementById('selectedFighter').innerText = "you've clicked on "+
  JSON.stringify(fighterSelect.name, null, 2);
}


document.getElementById("choose").addEventListener("click", fighterSelection);
