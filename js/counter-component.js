document.getElementById("demo").innerHTML = printCounterTable();

function printCounterTable(modify) {
  // Create table string to print
  var table = "";

  var antidoteCt = parseInt(sessionStorage.getItem('antidote'));
  var poisonCt = parseInt(sessionStorage.getItem('poison'));
  var riddleCt = parseInt(sessionStorage.getItem('riddle'));

  if (modify == 'antidote') { antidoteCt--; }
  else if (modify == 'poison') { poisonCt--; }
  else { riddleCt--; }

  var header = getHeader();
  var antidoteLine = getAntidoteLine();
  var poisonLine = getPoisonLine();
  var riddleLine = getRiddleLine();

  table = header + antidoteLine + poisonLine + riddleLine;

  return table;
}

function getHeader() {
  var header =    "---------------- <br>" +
                  "| Remaining    | <br>" +
                  "---------------- <br>";
  return header;
}

function getAntidoteLine() {
  var antidote = "| Antidote   " +  + " | <br>";
  return antidote;
}

function getPoisonLine() {
  var poison = "| Poison     2 | <br>";
  return poison;
}

function getRiddleLine() {
  var riddle = "| Riddle     1 | <br>" +
               "---------------- <br>";
  return riddle;
}
