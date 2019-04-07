document.getElementById("counterTable").innerHTML = printCounterTable();

function printCounterTable(modify) {
  // Create table string to print
  var table = "";

  var lifeCt = parseInt(sessionStorage.getItem('lives'));
  var antidoteCt = parseInt(sessionStorage.getItem('antidote'));
  var poisonCt = parseInt(sessionStorage.getItem('poison'));
  var riddleCt = parseInt(sessionStorage.getItem('riddle'));

  if (modify == 'antidote') {
    antidoteCt--;
    lifeCt++;
  } else if (modify == 'poison') {
    poisonCt--;
    lifeCt--;
  } else if (modify == 'riddle') {
    riddleCt--;
    lifeCt++;
  }

  var lives = getLives(lifeCt);
  var header = getHeader();
  var antidoteLine = getAntidoteLine(antidoteCt);
  var poisonLine = getPoisonLine(poisonCt);
  var riddleLine = getRiddleLine(riddleCt);

  table = lives + header + antidoteLine + poisonLine + riddleLine;

  return table;
}

function getLives(lifeCt) {
  var lives = "Lives: " + lifeCt + "<br>";
  return lives;
}

function getHeader() {
  var header =    "---------------- <br>" +
                  "| Remaining&nbsp&nbsp&nbsp | <br>" +
                  "---------------- <br>";
  return header;
}

function getAntidoteLine(antidoteCt) {
  var antidote = "| Antidote&nbsp&nbsp&nbsp" + antidoteCt + " | <br>";
  return antidote;
}

function getPoisonLine(poisonCt) {
  var poison = "| Poison&nbsp&nbsp&nbsp&nbsp&nbsp" + poisonCt + " | <br>";
  return poison;
}

function getRiddleLine(riddleCt) {
  var riddle = "| Riddle&nbsp&nbsp&nbsp&nbsp&nbsp" + riddleCt + " | <br>" +
               "---------------- <br>";
  return riddle;
}
