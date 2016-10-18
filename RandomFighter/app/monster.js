//Monster counter
var mc = 1;
var monsterCat = new monsterStats('Monster Cat '+mc, 0, 0, 0);

function monsterStats(name, hp, atk, def) {
  this.name = name;
  this.hp = hp;
  this.atk = atk;
  this.def = def;
}     console.log(monsterStats);

// Returns a random integer between min (included) and max (included)
// Using Math.round() will give you a non-uniform distribution!
function statGen(min, max) {
  min = min || Math.ceil(mc+5);
  max = max || Math.floor(mc);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}      console.log(statGen());



function monsterStatsGen() {
  monsterCat.name = 'Monster Cat '+mc;
  monsterCat.hp = 100 + (mc*.25);
  monsterCat.atk = statGen(mc, mc+5);
  monsterCat.def = statGen(mc, mc+5);
}      console.log(monsterStatsGen())

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
