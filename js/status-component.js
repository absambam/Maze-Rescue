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
    var index = Math.floor(Math.random() * 6);
    switch(index) {
        case 0:
            riddleStr = "Of males and females that attend hackathons, what's the average number each gender attends? <br><br>";
            riddleStr += "<span id='a'class='answer'>A. Males: 3, Females: 3 <br></span>";
            riddleStr += "<span id='b' class='answer'>B. Males: 4.28, Females: 2.36 <br></span>";
            riddleStr += "<span id='c' class='answer'>C. Males: 3.28, Females: 4.36 <br></span>";
            break;
        case 1:
            riddleStr = "Who was the first female Nobel prize winner? <br><br>";
            riddleStr += "<span id='a'class='answer'>A. Rosalind Franklin <br></span>";
            riddleStr += "<span id='a'class='answer'>B. Marie Curie <br></span>";
            riddleStr += "<span id='a'class='answer'>C. Grace Hopper <br></span>";
            break;
        case 2:
            riddleStr = "Who invented the first compiler? <br><br>";
            riddleStr += "<span id='a'class='answer'>A. Grace Hopper <br></span>";
            riddleStr += "<span id='a'class='answer'>B. Ada Lovelace <br></span>";
            riddleStr += "<span id='a'class='answer'>C. Katherine Johnson <br></span>";
            break;
        case 3:
            riddleStr = "What did Rosalind Franklin help shape our knowledge about? <br><br>";
            riddleStr += "<span id='a'class='answer'>A. The sewing machine<br></span>";
            riddleStr += "<span id='a'class='answer'>B. DNA model<br></span>";
            riddleStr += "<span id='a'class='answer'>C. Dinosaurs<br></span>";
            break;
        case 4:
            riddleStr = "Who wrote the first algorithm meant to be processed by a machine? <br><br>";
            riddleStr += "<span id='a'class='answer'>A. Charles Babbage<br></span>";
            riddleStr += "<span id='a'class='answer'>B. Alan Turing<br></span>";
            riddleStr += "<span id='a'class='answer'>C. Ada Lovelace<br></span>";
            break;
        case 5:
            riddleStr = "Who was the architect that designed the famous Vietnam Veterans Memorial in Washington, D.C.? <br><br>";
            riddleStr += "<span id='a'class='answer'>A. Bjarke Ingels <br></span>";
            riddleStr += "<span id='a'class='answer'>B. Maya Lin <br></span>";
            riddleStr += "<span id='a'class='answer'>C. I.M. Pei <br></span>";
            break;
        default:
            riddleStr = "Unknown index";
            break;
    }

    return riddleStr;
}