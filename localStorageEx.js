
// Store an array in local storage

// The array to store
var array = [1, 2, 3];
// Store after JSON stringifying (is this a verb?) it
localStorage.setItem('myArray', JSON.stringify(array));

// Get an array from local storage

// Retrieve the array from local storage
var array = localStorage.getItem('myArray');
// Parse it to something usable in js
array = JSON.parse(array);