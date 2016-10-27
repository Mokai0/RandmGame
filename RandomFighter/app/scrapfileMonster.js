// brawler.hp2 = brawler.hp;
// var p1 = brawler;
// var e1 = monsterCat;
//
// var eN = document.getElementById('enemyName')
// eN.innerHTML = e1.name;
// var eH = document.getElementById('enemyHealth')
// eH.innerHTML = e1.hp2 + "/" + e1.hp;
//
// var pN = document.getElementById('playerName')
// pN.innerHTML = p1.name;
// var pH = document.getElementById('playerHealth')
// pH.innerHTML = p1.hp2 + '/' + p1.hp;
//
//
// var attack = document.getElementById('attack');
// attack.onclick = function fight() {
//   e1.hp2 = monsterCat.hp2 ;
//   console.log(e1.hp2);
//   // e1.hp2 = e1.hp2 < 0 ? 0 : e1.hp2;
//   console.log(e1.hp2);
//   p1.hp2 = p1.hp2-e1.atk;
//   p1.hp2 = p1.hp2 < 0 ? 0 : p1.hp2;
//   console.log(brawler.hp2);
//   console.log(e1.name+' has taken '+p1.atk+'damage! You have taken '+e1.atk+'damage!');
//   eH.innerHTML = e1.hp2 + "/" + e1.hp;
//   pH.innerHTML = p1.hp2 + '/' + p1.hp;
//
// }
// if (e1.hp2 = 0) {
//   alert("You've slain the Monster!");
//
// }
//
// /*
// prompt("Continue fighting? (type YES or NO)");
// if ('y') {
//   mc++;
//   console.log(mc);
//   document.getElementById('enemyName').innerHTML = e1.name;
//   console.log('check');
//   eH.innerHTML = e1.hp2+'/'+e1.hp;
//   pH.innerHtml = p1.hp2+'/'+p1.hp;
// }*/


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
  function statGen(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}


var button = document.getElementById('attack');

button.addEventListener("click", function () {if (monsterCat.hp2 < 0) {
  alert("You've slain the Monster!");
  prompt("Continue fighting? (type YES or NO)");
  if (YES) {
    console.log(mc++)
  }
}
});


// if (YES) {
//  mc++;
//  console.log(monsterCat);
// } else {
//  alert("Good game! You've killed "+mc+" monsters!")
// }
