//Monster counter
var mc = 1;
var monsterCat = new monsterStats(mc);  console.log(monsterCat);

var button = document.getElementById('counter');

function monsterCounter () {
  mc++;
  monsterCat = new monsterStats(mc);
  console.log(monsterCat);
  // return monsterCat;
}

//monsterStat(level) level doesn't mean anything, its just a name that will encompass the variable to be used within the app
function monsterStats(level) {
  this.name = 'Monster Cat '+level;
  this.hp = 100 + Math.ceil(level*1.5);
  this.atk = statGen(level, level+5);
  this.def = statGen(level, level+5);
  function statGen(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
