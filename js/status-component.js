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
        responseStr = "A troll has appeared, and requires you to answer a riddle: <br><br>";
        responseStr += generateRiddle();
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
    var riddleStr = "";
    // var index = Math.floor(Math.random() * 5);
    var index = 0;
    console.log(index);
    switch(index) {
        case 0:
            riddleStr = "Of males and females that attend hackathons, what's the average number each gender attends? <br><br>";
            riddleStr += "A. Males: 3, Females: 3 <br>";
            riddleStr += "B. Males: 4.28, Females: 2.36 <br>";
            riddleStr += "C. Males: 3.28, Females: 4.36 <br>";
            break;
        case 1:
            break;
        case 2:
            break;
        case 3:
            break;
        case 4:
            break;
        default:
            return "Unknown index";
            break;
    }

    return riddleStr;
}