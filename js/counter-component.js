function printCounterTable() {
    // Create table string to print
    var table = "";

    var antidoteCount = 3;
    var poisonCount = 2;
    var riddleCount = 1;
    var heartCount = 3;

    var header = getHeader();
    var antidoteLine = getAntidoteLine(antidoteCount);
    var poisonLine = getPoisonLine(poisonCount);
    var riddleLine = getRiddleLine(riddleCount);
    var heartLine = getHeartLine(heartCount);
    var footer = getFooter();

    table = header + antidoteLine + poisonLine + riddleLine + footer + heartLine + footer;

    // Print the table
    document.getElementById("counterTable").innerHTML = table;
}

function getHeader() {
    var header =    "----------------<br>" +
                    "| Remaining &nbsp&nbsp&nbsp|<br>" +
                    "----------------<br>";
    return header;
}

function getAntidoteLine(antidoteCount) {
    var antidoteLine =  "| Antidote &nbsp&nbsp" + antidoteCount + " |<br>";
    return antidoteLine;
}

function getPoisonLine(poisonCount) {
    var poisonLine =  "| Poison &nbsp&nbsp&nbsp&nbsp" + poisonCount + " |<br>";
    return poisonLine;
}

function getRiddleLine(riddleCount) {
    var riddleLine =  "| Riddle &nbsp&nbsp&nbsp&nbsp" + riddleCount + " |<br>";
    return riddleLine;
}

function getFooter() {
    var footer = "----------------<br>";
    return footer;
}

function getHeartLine(heartCount) {
    var heartLine =  "| Hearts &nbsp&nbsp&nbsp&nbsp" + heartCount + " |<br>";
    return heartLine;
}