function printStatus() {
    var state = "r";
    var status = checkState(state);
    document.getElementById("status-text").innerHTML = status;

     $(".answer").click((e) => {
        checkAnswer(e.target.id)
    });
}

function checkAnswer(responseId) {
    console.log("responseId: " + responseId);
    var valid = false;
    var answers = ["b0", "b1", "a2", "a3", "c4", "c5"];
    for(var i = 0; i < answers.length; i += 1) {
        if(answers[i] == responseId) {
            valid = true;
        }
    }

    if(valid == true) {
        document.getElementById("status-text").innerHTML = "The troll says: 'That's correct! You shall pass.'";
        var lifeCt = parseInt(sessionStorage.getItem('lives'));
        lifeCt++;
        sessionStorage.setItem('lives', lifeCt);
    } else {
        document.getElementById("status-text").innerHTML = "The troll says: 'That ain't right. You gotta brush up your diversity facts.'";
    }
}

function checkState(state) {
    var responseStr = "";

    if(state == "s") { // starting square
        responseStr = "Let's explore. <br> - edit this statement - ";
    } else if(state == "x") { // default
        responseStr = "Nothing found here. <br> Time to move on.";
    } else if(state == "a") { // antidote
        responseStr = "You found an antidote! Your number of lives has increased by 1.";
    } else if(state == "r") { // riddle
        responseStr = "A troll has appeared, and requires you to answer a riddle: <br><br>";
        responseStr += generateRiddle();
    } else if(state == "p") { // poison
        responseStr = "Oh no! You ran into a poisonous swamp. Your number of lives has decreased by 1.";
    } else if(state == ".") { // visited
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
            riddleStr += "<span id='a0' class='answer'>A. Males: 3.23, Females: 3.00 <br></span>";
            riddleStr += "<span id='b0' class='answer'>B. Males: 4.28, Females: 2.36 <br></span>";
            riddleStr += "<span id='c0' class='answer'>C. Males: 3.28, Females: 4.36 <br></span>";
            break;
        case 1:
            riddleStr = "Who was the first female Nobel prize winner? <br><br>";
            riddleStr += "<span id='a1' class='answer'>A. Rosalind Franklin <br></span>";
            riddleStr += "<span id='b1' class='answer'>B. Marie Curie <br></span>";
            riddleStr += "<span id='c1' class='answer'>C. Grace Hopper <br></span>";
            break;
        case 2:
            riddleStr = "Who invented the first compiler? <br><br>";
            riddleStr += "<span id='a2' class='answer'>A. Grace Hopper <br></span>";
            riddleStr += "<span id='b2' class='answer'>B. Ada Lovelace <br></span>";
            riddleStr += "<span id='c2' class='answer'>C. Katherine Johnson <br></span>";
            break;
        case 3:
            riddleStr = "What did Rosalind Franklin help shape our knowledge about? <br><br>";
            riddleStr += "<span id='a3' class='answer'>A. DNA model <br></span>";
            riddleStr += "<span id='b3' class='answer'>B. The sewing machine <br></span>";
            riddleStr += "<span id='c3' class='answer'>C. Dinosaurs<br></span>";
            break;
        case 4:
            riddleStr = "Who wrote the first algorithm meant to be processed by a machine? <br><br>";
            riddleStr += "<span id='a4' class='answer'>A. Charles Babbage<br></span>";
            riddleStr += "<span id='b4' class='answer'>B. Alan Turing<br></span>";
            riddleStr += "<span id='c4' class='answer'>C. Ada Lovelace<br></span>";
            break;
        case 5:
            riddleStr = "Who was the architect that designed the famous Vietnam Veterans Memorial in Washington, D.C.? <br><br>";
            riddleStr += "<span id='a5' class='answer'>A. Bjarke Ingels <br></span>";
            riddleStr += "<span id='b5' class='answer'>B. I.M. Pei <br></span>";
            riddleStr += "<span id='c5' class='answer'>C. Maya Lin <br></span>";
            break;
        default:
            riddleStr = "Unknown index";
            break;
    }

    return riddleStr;
}