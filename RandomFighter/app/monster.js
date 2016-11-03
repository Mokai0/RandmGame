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
  this.hp2 = 100 + Math.ceil(level*1.5);
  this.atk = statGen(level, level+5);
  this.def = statGen(level, level+5);
  console.log(level);
  function statGen(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  /*Takes damage from an enemy@param{int} damage the damage taken */
  this.takeDamage=function(damage) {
    var damageTaken = Math.abs(damage - this.def);
    if(damage <= this.def) {
      damageTaken = 1;
    }
    this.hp2 = this.hp2 - damageTaken;
    this.hp2 = this.hp2 < 0 ? 0 : this.hp2;
    // console.log(damageTaken);
    // console.log(this.name + ' has taken ' + p1.atk + 'damage!');
  }
}


var button = document.getElementById('attack');

// button.addEventListener("click", function () {if (monsterCat.hp2 < 0) {
//   alert("You've slain the Monster!");
//   prompt("Continue fighting? (type YES or NO)");
//   if ("YES") {
//     console.log(mc++)
//   } else {
//     alert("You've slain "+mc+" monsters!")
//   }
// }
// });
