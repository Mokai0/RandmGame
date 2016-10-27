var buttons = document.querySelectorAll('button');
var buttonsCount = buttons.length;
buttons.forEach(function(button) {
  button.onclick = function() {
    if (this.id == 'brawler') {
      fighterSelect = brawler;
    } else if (this.id == 'tank') {
      fighterSelect = tank;
    } else if (this.id == 'expert'){
      fighterSelect = expert;
    } else {
      fighterSelect = undefined
      alert('Why are you playing a fighting game?')
    }
    fighterSelect !== undefined ? console.log(JSON.stringify(fighterSelect, null, 2)) : null
  }
});
