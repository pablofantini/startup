'use strict';

var terminator = new Movie();
terminator.set('title', 'Terminator');

var viewer1 = new MovieObserver('John');
var viewer2 = new MovieObserver('Peter');

console.log('Add listener "John"');
var listenerViewer1 = terminator.addObserver(viewer1);
console.log('Add listener "Peter"');
var listenerViewer2 = terminator.addObserver(viewer2);

console.log('Play and stop movie');
terminator.play();
terminator.stop();

console.log("----------------------------------");

console.log('remove listener "Peter"');
terminator.removeObserver(listenerViewer2);

console.log('Play and stop movie again');
terminator.play();
terminator.stop();

console.log("----------------------------------");

var ironman2 = new Movie();
ironman2.set('title', 'Iron Man 2');

_.extend(Movie.prototype, Shared.prototype);

ironman2.share('V. Rivas');
ironman2.like();

console.log("----------------------------------");
console.log('Add actors to ironman movie');

var robert = new Actor('Robert', 'Downew Js', 33);
var gwyneth = new Actor('Gwyneth', 'Paltrow', 22);
var ironmanActors = [robert, gwyneth];
ironman2.set('actors',ironmanActors);