brawler.hp2 = brawler.hp;
var p1 = brawler;
var e1 = monsterCat

var eN = document.getElementById('enemyName')
eN.innerHTML = monsterCat.name;
var eH = document.getElementById('enemyHealth')
eH.innerHTML = monsterCat.hp2 + "/" + monsterCat.hp;

var pN = document.getElementById('playerName')
pN.innerHTML = p1.name;
var pH = document.getElementById('playerHealth')
pH.innerHTML = p1.hp2 + '/' + p1.hp;


var attack = document.getElementById('attack');
attack.onclick = function fight() {
  monsterCat.hp2 = monsterCat.hp2-p1.atk;
  monsterCat.hp2 = monsterCat.hp2 < 0 ? 0 : monsterCat.hp2;
  console.log(monsterCat.hp2);
  p1.hp2 = p1.hp2-monsterCat.atk;
  p1.hp2 = p1.hp2 < 0 ? 0 : p1.hp2;
  console.log(brawler.hp2);
  console.log(monsterCat.name+' has taken '+p1.atk+'damage! You have taken '+monsterCat.atk+'damage!');
  eH.innerHTML = monsterCat.hp2 + "/" + monsterCat.hp;
  pH.innerHTML = p1.hp2 + '/' + p1.hp;
  if (monsterCat.hp2 < 0) {
    alert("You've slain the Monster!");
    prompt("Continue fighting? (type YES or NO)");
    if ('y') {
      mc++;
      console.log(mc);
      document.getElementById('enemyName').innerHTML = monsterCat.name;
      console.log('check');
      eH.innerHTML = monsterCat.hp2+'/'+monsterCat.hp;
      pH.innerHtml = p1.hp2+'/'+p1.hp;
    }
  }
}
