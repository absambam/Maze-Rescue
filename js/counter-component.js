function printCounterTable() {
    // Create table string to print
    var table = "";

    var header = getHeader();
    var antidoteLine = getAntidoteLine(3);
    var poisonLine = getPoisonLine(2);
    var riddleLine = getRiddleLine(1);
    var footer = getFooter();

    table = header + antidoteLine + poisonLine + riddleLine + footer;

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