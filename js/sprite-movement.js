createLevel0();


document.addEventListener('keydown', moveUp);


function moveUp(e) {
    if (unvisitedCount > 0) {
        if (e.which == 37) {
            // go left
            if (x > 0) {
                if (currGrid[y][x - 1] !== '.') {
                    var currVal = parseInt($('#avatar').css('left'), 10)
                    var newVal = currVal - 102;
                    $('#avatar').css('left', newVal + 'px');
                    x--;
                    unvisitedCount--;
                    if (unvisitedCount == 0) {
                        $('body').append('<h2>Game Over</h2>') 
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
                        $('body').append('<h2>Game Over</h2>')
                        gameOver = true;
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
                        $('body').append('<h2>Game Over</h2>')
                    }
                }
            }
        } else if (e.which == 40) {
            // go down
            if (y < 2) {
                if (currGrid[y + 1][x] !== '.') {
                    var currVal = parseInt($('#avatar').css('top'), 10)
                    var newVal = currVal + 100;
                    $('#avatar').css('top', newVal + 'px');
                    y++;
                    unvisitedCount--;
                    if (unvisitedCount == 0) {
                        $('body').append('<h2>Game Over</h2>')
                    }
                }
            }
        }

        currTile = currGrid[y][x];
        $('#map-row-' + y)[0].children[x].style.backgroundColor = '#808080';
        if (currTile === 'p') {
            $('#map-row-' + y)[0].children[x].style.backgroundColor = 'purple';
        } else if (currTile === 'a') {
            $('#map-row-' + y)[0].children[x].style.backgroundColor = 'green';
        } else if (currTile === 'r') {
            $('#map-row-' + y)[0].children[x].style.backgroundColor = 'blue';
        }
        if (currTile === 'x') {
            currGrid[y][x] = '.';
        }
        console.log(currGrid);
    }
}

var x = 0;
var y = 2;
var antidoteCount = 1;
var poisonCount = 1;
var riddleCount = 1;
var unvisitedCount = 11;
var gameOver = false;

function setup() {
    console.log($('#map-row-' + y).position());
    $('#avatar').css('top', parseFloat($('#map-row-' + y).position().top) + 25 + 'px');
    $('#avatar').css('left', parseFloat($('#map-row-' + y).position().left) + 27 + 'px');
    currGrid[y][x] = '.';
    $('#map-row-' + y)[0].children[x].style.backgroundColor = '#808080';
}

window.onload = setup;