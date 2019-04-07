/* Creating the map for level 0 */

var map = [ ['x', 'p', 'x', 'x'],
            ['r', 'x', 'x', 'x'],
            ['x', 'x', 'a', 'x']];

var currGrid = [['x', 'p', 'x', 'x'],
                ['r', 'x', 'x', 'x'],
                ['x', 'x', 'a', 'x']];

function createLevel1() {
    console.log('map made...');
    console.log($('#map-grid'));
    for (i = 0; i < 3; i++) {
        $('#map-grid').append('<div class="map-row" id="map-row-' + i + '"></div>');
        for (j = 0; j < map[i].length; j++) {
            $('#map-row-' + i).append('<div id="tile-' + j + '" class="map-tile"></div>');
        }
    }
    console.log('grid created');
    $('#map-grid').append('<img href="../images/emma-square-50.png" id="avatar"/>');
}
