createLevel0();

document.addEventListener('keydown', moveUp);


function moveUp(e) {
    console.log(e.which);
    if (e.which == 38) {
        var currVal = parseInt($('#avatar').css('top'), 10)
        if (currVal >= 28) {
            var newVal = currVal - 100;
            $('#avatar').css('top', newVal + 'px');
        }
    } else if (e.which == 39) {
        var currVal = parseInt($('#avatar').css('left'), 10)
        if (currVal < 330) {
            var newVal = currVal + 102;
            $('#avatar').css('left', newVal + 'px');
        }
    }
}
console.log('avatar can move up');
