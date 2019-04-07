function printStatus() {
    var state = "r";
    var status = checkState(state);
    document.getElementById("status-text").innerHTML = status;
}

function checkState(state) {
    var responseStr = "";

    if(state == "s") { // starting square
        responseStr = "Let's explore. <br> - edit this statement - ";
    } else if(state == "x") { // default
        responseStr = "Nothing found here. <br> Time to move on.";
    } else if(state == "a") { // antidote
        responseStr = "You found an antidote! Your number of hearts has increased by 1.";
    } else if(state == "r") { // riddle
        responseStr = "A troll has appeared, and requires you to answer a riddle:";
    } else if(state == "p") { // poison
        responseStr = "Oh no! You ran into a poisonous swamp. Your number of hearts has decreased by 1.";
    } else if(state == "v") { // visited
        responseStr = "Woops, can't turn back.";
    } else {
        responseStr = "Unknown state entered";
    }

    return responseStr;
}

function generateRiddle() {
    var index = Math.floor(Math.random() * 5);
    switch(index) {
        case 0:
            "What's the average number of hackathons"
        case 1:

        case 2:

        case 3:

        case 4:

        default:
            return "Unknown index";
    }
}