"use strict";
// Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.
function make_album(artist_name, album_title, tracks) {
    let album = {
        artist: artist_name,
        title: album_title,
    };
    if (tracks) {
        album.tracks = tracks;
    }
    return album;
}
// Create three albums without specifying the number of tracks
let album1 = make_album("kendrick lamar", "to pimp a butterfly");
let album2 = make_album("beyoncé", "lemonade");
let album3 = make_album("taylor swift", "folklore");
// Print the album information
console.log(`Album 1: ${album1}`);
console.log(`Album 2: ${album2}`);
console.log(`Album 3: ${album3}`);
