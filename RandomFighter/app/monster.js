//Monster counter
var mc = 1;
var monsterCat = new monsterStats(mc);

var button = document.getElementById('counter');

function monsterCounter () {
  mc++;
  monsterCat = new monsterStats(mc);
}
button.addEventListener("click", monsterCounter);

//monsterStat(level) level doesn't mean anything, its just a name that will encompass the variable to be used within the app
function monsterStats(level) {
  this.name = 'Monster Cat '+level;
  this.hp = 100 + (level*.25);
  this.atk = statGen(level, level+5);
  this.def = statGen(level, level+5);
}     console.log(monsterStats);

// Returns a random integer between min (included) and max (included)
// Using Math.round() will give you a non-uniform distribution!
function statGen(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}      console.log(statGen());





// for (i = 0; i < '../img/monsters'.length; i++) {
//     document.getElementById('mpic') += cars[i] + "<br>";
// }

// do {
//   MC++;
//     text += "The number is " + i;
//     i++;var mc = MC++
// }
// while (i < 10);

// for (MC; MC<'../img/monsters'.length; MC++) {
//   console.log(MC);
//   document.write(img/monsters.MC);
// }
