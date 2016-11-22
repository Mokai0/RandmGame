var brawler = new fighterStats("Turk the Brawler", 90, 12, 5);
var tank = new fighterStats("Frank the Tank", 110, 5, 12);
var expert = new fighterStats("Mr. Miyagi the Expert", 100, 8, 8);
var nulll = new fighterStats("PICK A FIGHTER");
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
    var damageTaken = Math.abs(damage - this.def);
    if(damage <= this.def) {
      damageTaken = 1;
    }
    this.hp2 = this.hp2 - damageTaken;
    this.hp2 = this.hp2 < 0 ? 0 : this.hp2;
    console.log(damageTaken);
    // console.log('You have taken ' + damage + 'damage!');
  }
}
