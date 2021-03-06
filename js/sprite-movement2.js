createLevel2();


document.addEventListener('keydown', moveUp);

function moveUp(e) {
    if (unvisitedCount > 0) {
        if(e.which == 70) {
            location.reload();
        } else if (e.which == 37) {
            // go left
            if (x > 0) {
                if (currGrid[y][x - 1] !== '.') {
                    var currVal = parseInt($('#avatar').css('left'), 10)
                    var newVal = currVal - 102;
                    $('#avatar').css('left', newVal + 'px');
                    x--;
                    unvisitedCount--;
                    if (unvisitedCount == 0) {
                        win = true;
                    }
                }
            }
        } else if (e.which == 38) {
            // go up
            if (y > 0) {
                if (currGrid[y - 1][x] !== '.') {
                    var currVal = parseInt($('#avatar').css('top'), 10)
                    var newVal = currVal - 100;
                    $('#avatar').css('top', newVal + 'px');
                    y--;
                    unvisitedCount--;
                    if (unvisitedCount == 0) {
                        win = true;
                    }
                }
            }
        } else if (e.which == 39) {
            // go right
            if (x < 3) {
                if (currGrid[y][x + 1] !== '.') {
                    var currVal = parseInt($('#avatar').css('left'), 10)
                    var newVal = currVal + 102;
                    $('#avatar').css('left', newVal + 'px');
                    x++;
                    unvisitedCount--;
                    if (unvisitedCount == 0) {
                        win = true;
                    }
                }
            }
        } else if (e.which == 40) {
            // go down
            if (y < 5) {
                if (currGrid[y + 1][x] !== '.') {
                    var currVal = parseInt($('#avatar').css('top'), 10)
                    var newVal = currVal + 100;
                    $('#avatar').css('top', newVal + 'px');
                    y++;
                    unvisitedCount--;
                    if (unvisitedCount == 0) {
                        win = true;
                    }
                }
            }
        }



        currTile = currGrid[y][x];
        if (currTile === 'x') {
            // we landed on a normal unvisited tile
            $('#map-row-' + y)[0].children[x].style.backgroundColor = '#808080';
            printStatus('x');
        } else if (currTile === 'p') {
            // we have landed on a poison tile
            $('#map-row-' + y)[0].children[x].style.backgroundColor = 'purple';
            document.getElementById("counterTable").innerHTML = printCounterTable('poison');
            currGrid[y][x] = '.';
            printStatus('p');
        } else if (currTile === 'a') {
            // we have landed on an antidote tile
            $('#map-row-' + y)[0].children[x].style.backgroundColor = 'green';
            document.getElementById("counterTable").innerHTML = printCounterTable('antidote');
            currGrid[y][x] = '.';
            printStatus('a');
        } else if (currTile === 'r') {
            $('#map-row-' + y)[0].children[x].style.backgroundColor = 'blue';
            document.getElementById("counterTable").innerHTML = printCounterTable('riddle');
            currGrid[y][x] = '.';
            printStatus('r');
            document.removeEventListener('keydown', moveUp);
        }
        if (currTile === 'x') {
            currGrid[y][x] = '.';
            printStatus('x');
        }
        // check if trapped ( no adjacent x tile)
        var hasWayOut = false;
        if (x > 0) {
            if (currGrid[y][x - 1] !== '.') {
                hasWayOut = true;
            }
        }
        if (x < currGrid[0].length - 1) {
            if (currGrid[y][x + 1] !== '.') {
                hasWayOut = true;
            }
        }
        if (y > 0) {
            if (currGrid[y - 1][x] !== '.') {
                hasWayOut = true;
            }
        }
        if (y < currGrid.length - 1) {
            if (currGrid[y + 1][x] !== '.') {
                hasWayOut = true;
            }
        }

        if (!hasWayOut) {
            console.log('trapped!');
            gameOver = true;
        }
    }
    if (gameOver && !win) {
        document.getElementById("status-text").innerHTML = "On no, you've reached a dead end. You've failed to save your friend. <br><br> Press F to pay respects. <br><br> GAME OVER.";
        $('#map-grid')[0].style.opacity = 0.3;
    }

    if (win) {
        $('body').append('<h2>Congrats!!</h2>');
        location.href = '../story/end.html';
    }
}

var x = 0;
var y = 0;
var unvisitedCount = 20;
var gameOver = false;
var win = false;

function setup() {
    console.log($('#map-row-' + y).position());
    $('#avatar').css('top', parseFloat($('#map-row-' + y).position().top) + 25 + 'px');
    $('#avatar').css('left', parseFloat($('#map-row-' + y).position().left) + 27 + 'px');
    currGrid[y][x] = '.';
    $('#map-row-' + y)[0].children[x].style.backgroundColor = '#808080';
    for (var i = 0; i < 6; i++) {
      for (var j = 0; j < 4; j++) {
        if (currGrid[i][j] == '.'){
          $('#map-row-' + i)[0].children[j].style.backgroundColor = '#808080';
        }
      }
    }
}

window.onload = setup;
