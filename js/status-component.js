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
            riddleStr += "<span id='a'class='answer'>A. Males: 3, Females: 3 <br></span>";
            riddleStr += "<span id='b' class='answer'>B. Males: 4.28, Females: 2.36 <br></span>";
            riddleStr += "<span id='c' class='answer'>C. Males: 3.28, Females: 4.36 <br></span>";
            break;
        case 1:
            riddleStr = "Who was the first female Nobel prize winner? <br><br>";
            riddleStr += "A. Rosalind Franklin <br>";
            riddleStr += "B. Marie Curie <br>";
            riddleStr += "C. Grace Hopper <br>";
            break;
        case 2:
            riddleStr = "Who invented the first compiler? <br><br>";
            riddleStr += "A. Grace Hopper <br>";
            riddleStr += "B. Ada Lovelace <br>";
            riddleStr += "C. Katherine Johnson <br>";
            break;
        case 3:
            riddleStr = "What did Rosalind Franklin help shape our knowledge about? <br><br>";
            riddleStr += "A. The sewing machine<br>";
            riddleStr += "B. DNA model<br>";
            riddleStr += "C. Dinosaurs<br>";
            break;
        case 4:
            riddleStr = "Who wrote the first algorithm meant to be processed by a machine? <br><br>";
            riddleStr += "A. Charles Babbage<br>";
            riddleStr += "B. Alan Turing<br>";
            riddleStr += "C. Ada Lovelace<br>";
            break;
        case 5:
            riddleStr = "What did Rosalind Franklin help shape our knowledge about? <br><br>";
            riddleStr += "A. The sewing machine<br>";
            riddleStr += "B. DNA model<br>";
            riddleStr += "C. Dinosaurs<br>";
            break;
        default:
            riddleStr = "Unknown index";
            break;
    }

    return riddleStr;
}