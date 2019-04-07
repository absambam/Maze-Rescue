/* Creating the map for level 0 */

var map = ['x', 'p', 'x', 'x',
    'r', 'x', 'x', 'x',
    'x', 'x', 'a', 'x'];
console.log('map made...');
console.log($('#map-grid'));
for (i = 0; i < 3; i++) {
    $('#map-grid').append('<div class="map-row" id="map-row-' + i + '"></div>');
    for (j = 0; j < 4; j++) {
        $('#map-row-'+i).append('<div class="map-tile"></div>');
    }
}
console.log('grid created');
