// var express = require('express');
// var path = require('path');
// var app = express();
// var bodyParser = require('body-parser');
// var mongoose = require('mongoose');


var chosenOne = JSON.parse(localStorage.getItem('fighterSelect'));
var p1 = new fighterStats(chosenOne.name, chosenOne.hp+mc, chosenOne.atk, chosenOne.def);
console.log(p1);
// var p1 = chosenOne;

var eN = document.getElementById('enemyName');
eN.innerHTML = monsterCat.name;
var eH = document.getElementById('enemyHealth');
eH.innerHTML = monsterCat.hp2 + "/" + monsterCat.hp;
var ei = document.getElementById('monsterCat');
// ei.outerHTML = "<img id=monsterCat src="
var pN = document.getElementById('playerName');
pN.innerHTML = p1.name;
var pH = document.getElementById('playerHealth');
pH.innerHTML = p1.hp2 + '/' + p1.hp;

//This is the fight button, press it to start the battle!
var beginFight = document.getElementById('attack');

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
  ei.setAttribute("src", "../img/monsters/"+catArr[imgArr()]);
  p1.hp += mc;
  if (mc%5 === 0) {
    // p1.hp+=10;
    p1.atk+=3;
    p1.def+=3;
    console.log(p1);
  }
  p1.hp2 = p1.hp;
  displayStats(p1, monsterCat);
}
function round() {
  monsterCat.takeDamage(p1.atk);
  p1.takeDamage(monsterCat.atk);
  displayStats(p1, monsterCat);
  //Auto attack loop
  if (p1.hp2>0 && monsterCat.hp2>0) {
    setTimeout(round, 0);
    beginFight.setAttribute("disabled", "");
  } else {
    beginFight.removeAttribute("disabled", "");
  }
  if (monsterCat.hp2 <= 0) {
    prepareForNextRound();
  }
  if (p1.hp2 <= 0) {
    alert("You've been defeated...")
    document.getElementById('deadPlayer').outerHTML = '<h1 class="text-center"><kbd>YOU ARE DEAD</kbd></h1>    <label>		name: 		<input type="text" id="nameInput" /></label></label>		<input type="button" id="addScore" value="add Ajax Score to the server" />';
    // app.use(bodyParser.json());
    // app.use(bodyParser.urlencoded({ extended: true }));
    // return (mc);
  }
};


//This begins the fight sequence
beginFight.onclick = round;
