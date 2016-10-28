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
      fighterSelect = undefined;
      // alert('Why are you playing a fighting game?');
      document.getElementById('selectedFighter').outerHTML = '<h1 class="text-center" id=selectedFighter><kbd>PICK A FIGHTER</kbd></h1>';
    }
    fighterSelect !== undefined ? console.log(JSON.stringify(fighterSelect, null, 2)) : null
  }
});

function fighterSelection() {
  if (fighterSelect !== undefined) {
    document.getElementById('selectedFighter').outerHTML = '<pre id=selectedFighter></pre>';
    document.getElementById('selectedFighter').innerHTML = "You've clicked on " +  JSON.stringify(fighterSelect.name, null, 2);
    document.getElementById('submissionButton').outerHTML = '<a class="btn btn-danger btn-lg btn-block" href="battlePage.html" type="submit" id=submissionButton>FIGHT</a>'
    localStorage.setItem("fighterSelect", JSON.stringify(fighterSelect));
  } else {
    document.getElementById('submissionButton').outerHTML = '<div id=submissionButton></div>';
  }

}


document.getElementById("choose").addEventListener("click", fighterSelection);
