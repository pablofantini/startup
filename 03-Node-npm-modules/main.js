// jQuery module
var $ = require('jquery');

// Application modules
var Movie = require("./Movie.js"),
    Director = require("./Director.js");


// Application start
var alien = new Movie();
var ridleyScott = new Director('Ridley Scott');
ridleyScott.set('quotes', ['Cast is everything.', 'Do what ...']);
alien.set('director', ridleyScott);
var directorSpeak = alien.get('director').speak();

// show director speak in html
$( document ).ready(function() {
    $('#speak').html(directorSpeak);
});