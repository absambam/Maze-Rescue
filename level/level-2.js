/* Creating the map for level 1 */

var map = [ ['x', 'x', 'x', 'x'],
            ['p', 'x', 'p', 'x'],
            ['x', '.', 'x', 'x'],
            ['.', 'r', 'x', 'x'],
            ['x', 'x', '.', 'x'],
            ['x', 'x', 'x', 'a']];

var currGrid = [['x', 'x', 'x', 'x'],
                ['p', 'x', 'p', 'x'],
                ['x', '.', 'x', 'x'],
                ['.', 'r', 'x', 'x'],
                ['x', 'x', '.', 'x'],
                ['x', 'x', 'x', 'a']];

function createLevel2() {
    console.log('map made...');
    console.log($('#map-grid'));
    for (i = 0; i < 6; i++) {
        $('#map-grid').append('<div class="map-row" id="map-row-' + i + '"></div>');
        for (j = 0; j < map[i].length; j++) {
            $('#map-row-' + i).append('<div id="tile-' + j + '" class="map-tile"></div>');
        }
    }
    console.log('grid created');
    $('#map-grid').append('<div id="avatar"></div>');
}
