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
    var damageTaken = Math.abs(damage - this.def);
    console.log(damageTaken);
    if(damage < this.def) {
      damageTaken = 0;
    }
    this.hp2 = this.hp2 - damageTaken;
    this.hp2 = this.hp2 < 0 ? 0 : this.hp2;
    // console.log('You have taken ' + damage + 'damage!');
  }
}
// function lvlUp(hp, atk, def) {
//   this.hp+10;
//   this.atk+5;
//   this.def+5;
// }
// if (mc=5) {
//   fighterSelect.prototype.lvlUp function (hp, atk, def) {
//   this.hp+10;
//   this.atk+5;
//   this.def+5;
//   };
// }
