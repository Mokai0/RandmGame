var mc = 1;
var enemy = new enemyStats(mc)

function enemyStats(lvl) {
  this.name = 'Monster Cat '+lvl;
  this.hp = 100 + (lvl*2);
  this.atk = statGen(lvl, lvl+5);
  this.def = statGen(lvl, lvl+5);
  function statGen(min, max) {
    return Math.floor(Math.random()*(max-min+1))+min;
  }
}
//var button = document.getElementById('counter');
//button.addEventListener("click", monsterCounter);
