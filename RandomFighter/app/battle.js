fighterSelect = brawler;
var p1 = fighterSelect;
console.log(fighterSelect);
var e1 = monsterCat;

var eN = document.getElementById('enemyName')
eN.innerHTML = monsterCat.name;
var eH = document.getElementById('enemyHealth')
eH.innerHTML = monsterCat.hp2 + "/" + monsterCat.hp;

var pN = document.getElementById('playerName')
pN.innerHTML = p1.name;
var pH = document.getElementById('playerHealth')
pH.innerHTML = p1.hp2 + '/' + p1.hp;


var attack = document.getElementById('attack');
/* displays the hit points of both the player and the enemy on the screen @param player @param enemy*/
function displayStats(player, enemy)
{
  eN.innerHTML = enemy.name;
  eH.innerHTML = enemy.hp2 + "/" + enemy.hp;
  pH.innerHTML = player.hp2 + '/' + player.hp;
}
/*prepares the player and the enemy for the next round*/
function prepareForNextRound(){
   alert("You've slain the Monster!");
   monsterCounter();
   p1.hp2 = p1.hp;
   displayStats(p1, monsterCat);
}attack.onclick = function fight() {
   //send damage to enemy
   monsterCat.takeDamage(p1.atk);
  //  console.log(monsterCat.hp2);
   p1.takeDamage(monsterCat.atk);
  //  console.log(brawler.hp2);
   displayStats(p1, monsterCat);
  if (monsterCat.hp2 <= 0) {
    prepareForNextRound();
  }
  if (p1.hp2 <= 0) {
    alert("You've been defeated...")
    document.getElementById('deadPlayer').outerHTML = '<h1 class="text-center"><kbd>YOU ARE DEAD</kbd></h1>';
  }
};
